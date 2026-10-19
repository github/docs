import type { ReactNode } from 'react'
import { Spinner } from '@primer/react'
import { SearchIcon, ArrowUpRightIcon, TriangleDownIcon, FileIcon } from '@primer/octicons-react'

import { AskAIResults } from './AskAIResults'
import { useSearchContext } from './SearchContext'
import { VIEW_ALL_OPTION_ID, type ReferenceOption, type SearchOption } from './search-options'
import styles from './SearchOverlay.module.scss'
import answerStyles from './AskAIResults.module.scss'

type OptionRowProps = {
  option: SearchOption
  label: string
  // Figma gives AI rows a caret and docs rows an arrow-up-right.
  trailingIcon: ReactNode
}

function OptionRow({ option, label, trailingIcon }: OptionRowProps) {
  const { activeId, activate, registerOption } = useSearchContext()
  const isActive = activeId === option.id
  // Figma insets docs-row separators 4px from each end.
  const isDocs = option.kind === 'general' || option.kind === 'search-docs'

  return (
    // No key handler: selection is virtual, so the combobox input handles every key.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      id={option.id}
      role="option"
      aria-selected={isActive}
      // Selection is virtual and driven from the input, so rows are never tab stops.
      tabIndex={-1}
      ref={registerOption}
      className={`${styles.option} ${isDocs ? styles.optionDocs : ''} ${isActive ? styles.optionActive : ''}`}
      // Keep focus on the input, which handles the arrow keys, instead of moving it to this row.
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => activate(option)}
    >
      <span className={styles.optionLabel}>{label}</span>
      <span className={styles.optionTrailing} aria-hidden="true">
        {trailingIcon}
      </span>
    </div>
  )
}

// A Copilot source. Matches the docs rows' size and active state, with a leading file glyph.
function SourceRow({ option }: { option: ReferenceOption }) {
  const { activeId, activate, registerOption } = useSearchContext()
  const isActive = activeId === option.id

  return (
    // No key handler: selection is virtual, so the combobox input handles every key.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      id={option.id}
      role="option"
      aria-selected={isActive}
      tabIndex={-1}
      ref={registerOption}
      className={`${answerStyles.referenceRow} ${isActive ? answerStyles.referenceRowActive : ''}`}
      // Keep focus on the input so arrow keys work after returning from the new tab.
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => activate(option)}
    >
      <FileIcon className={answerStyles.referenceGlyph} aria-hidden="true" />
      <span>{option.payload.title}</span>
    </div>
  )
}

const SOURCES_HEADING_ID = 'search-sources-heading'

// Renders the Copilot answer and the listbox. The answer, with its prose, links and feedback
// buttons, sits outside the listbox: a listbox may only hold options and groups, and some
// screen readers expose nothing else inside one. Headings are allowed out here too, so the
// answer and its sources get real ones.
export function SearchGroups() {
  const { t, model, askAIState, showSpinner, searchLoading, previousSuggestionsListHeight } =
    useSearchContext()

  const isInAskAIState = askAIState?.isAskAIState && !askAIState.aiSearchError

  // The pinned view-all renders outside this element, below the scroller; aria-owns makes it
  // a child of the listbox, so aria-activedescendant can name it.
  const listboxProps = {
    id: 'search-listbox',
    role: 'listbox',
    'aria-label': t('search.overlay.suggestions_list_aria_label'),
    'aria-owns': model.viewAll ? VIEW_ALL_OPTION_ID : undefined,
  } as const

  // Reuse this spinner for autocomplete; Ask AI streaming shows its own spinner.
  if (showSpinner && !isInAskAIState) {
    return (
      <>
        <div
          key="loading"
          // Not role="status": the overlay announces loading in its own live region.
          aria-hidden="true"
          className={styles.loadingContainer}
          style={{ height: `${previousSuggestionsListHeight}px` }}
        >
          <Spinner />
        </div>
        {/* Kept mounted, empty and busy, so the input's aria-controls still resolves. */}
        <div {...listboxProps} aria-busy="true" />
      </>
    )
  }

  const groups = []

  if (isInAskAIState && model.references.length) {
    groups.push(
      <div
        key="sources"
        role="group"
        aria-labelledby={SOURCES_HEADING_ID}
        data-testid="ai-references"
      >
        {model.references.map((option) => (
          <SourceRow key={option.id} option={option} />
        ))}
      </div>,
    )
  }

  if (model.ai.length && !isInAskAIState) {
    groups.push(
      <div
        key="ai-suggestions"
        role="group"
        aria-label={t('search.overlay.ai_autocomplete_list_heading')}
        data-testid="ai-autocomplete-suggestions"
      >
        <div className={styles.groupHeading} aria-hidden="true">
          {t('search.overlay.ai_autocomplete_list_heading')}
        </div>
        {model.ai.map((option) => (
          <OptionRow
            key={option.id}
            option={option}
            label={option.payload.term ?? ''}
            trailingIcon={<TriangleDownIcon />}
          />
        ))}
      </div>,
    )
  }

  if (model.general.length || model.noResults) {
    groups.push(
      <div
        key="general"
        role="group"
        aria-label={t('search.overlay.general_suggestions_list_heading')}
        data-testid="general-autocomplete-suggestions"
      >
        <div className={styles.groupHeading} aria-hidden="true">
          {t('search.overlay.general_suggestions_list_heading')}
        </div>
        {searchLoading && isInAskAIState ? (
          <div
            aria-hidden="true"
            className={styles.loadingContainer}
            style={{ height: `${previousSuggestionsListHeight}px` }}
          >
            <Spinner />
          </div>
        ) : model.noResults ? (
          // Not an option, so arrows need no skip rule. The overlay's live region announces it.
          <div className={styles.noResultsFound}>{t('search.overlay.no_results_found')}</div>
        ) : (
          model.general.map((option) => (
            <OptionRow
              key={option.id}
              option={option}
              label={
                option.kind === 'search-docs'
                  ? t('search.overlay.search_docs_with_query').replace(
                      '{{query}}',
                      option.payload.title,
                    )
                  : option.payload.title
              }
              trailingIcon={option.kind === 'search-docs' ? <SearchIcon /> : <ArrowUpRightIcon />}
            />
          ))
        )}
      </div>,
    )
  }

  return (
    <>
      {/* Rendered even with no docs results, so the answer never depends on them. */}
      {isInAskAIState && (
        <AskAIResults
          query={askAIState.aiQuery}
          debug={askAIState.debug}
          version={askAIState.currentVersion}
          setAISearchError={askAIState.setAISearchError}
          setReferences={askAIState.setReferences}
          askAIEventGroupId={askAIState.askAIEventGroupId}
          aiCouldNotAnswer={askAIState.aiCouldNotAnswer}
          setAICouldNotAnswer={askAIState.setAICouldNotAnswer}
        />
      )}
      {isInAskAIState && model.references.length > 0 && (
        <h3 id={SOURCES_HEADING_ID} className={answerStyles.referencesTitle}>
          {t('search.ai.references')}
        </h3>
      )}
      <div {...listboxProps}>{groups}</div>
    </>
  )
}
