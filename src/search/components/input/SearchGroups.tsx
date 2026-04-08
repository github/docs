import React from 'react'
import { ActionList, Spinner } from '@primer/react'
import {
  SearchIcon,
  FileIcon,
  ArrowRightIcon,
  CopilotIcon,
  CommentIcon,
} from '@primer/octicons-react'

import { AskAIResults } from './AskAIResults'
import { useSearchContext, AutocompleteSearchHitWithUserQuery } from './SearchContext'
import styles from './SearchOverlay.module.scss'

export function SearchGroups() {
  const {
    t,
    generalSearchOptions,
    aiOptionsWithUserInput,
    generalSearchResultOnSelect,
    aiAutocompleteOnSelect,
    performGeneralSearch,
    selectedIndex,
    listElementsRef,
    askAIState,
    showSpinner,
    searchLoading,
    previousSuggestionsListHeight,
  } = useSearchContext()

  const isInAskAIState = askAIState?.isAskAIState && !askAIState.aiSearchError
  const isInAskAIStateButNoAnswer = isInAskAIState && askAIState.aiCouldNotAnswer

  // This spinner is for both the AI search and the general search results.
  // We already show a spinner when streaming AI response, so don't want to show 2 here
  if (showSpinner && !isInAskAIState) {
    return (
      <div
        key="loading"
        role="status"
        className={styles.loadingContainer}
        style={{
          height: `${previousSuggestionsListHeight}px`,
        }}
      >
        <Spinner />
      </div>
    )
  }

  const groups = []

  // We want to show general search suggestions above the AI Response section if the AI could not answer
  if (generalSearchOptions.length || isInAskAIStateButNoAnswer) {
    const items = []
    for (let index = 0; index < generalSearchOptions.length; index++) {
      const option = generalSearchOptions[index]
      if (option.isNoResultsFound) {
        items.push(
          <ActionList.Item
            key={`general-${index}`}
            id={`search-option-general-${index}`}
            className={styles.noResultsFound}
            tabIndex={-1}
            aria-label={t('search.overlay.no_results_found')}
            disabled
          >
            {option.title}
          </ActionList.Item>,
        )
        // There should be no more items after the no results found item
        break
        // This is a special case where there is an error loading search results and we want to be able to search the docs using the user's query
      } else if (option.isSearchDocsOption) {
        const isActive = selectedIndex === index
        items.push(
          <ActionList.Item
            key={`general-${index}`}
            id={`search-option-general-${index}`}
            tabIndex={-1}
            active={isActive}
            onSelect={() => performGeneralSearch()}
            aria-label={t('search.overlay.search_docs_with_query').replace('{query}', option.title)}
            ref={(element: HTMLLIElement | null) => {
              if (listElementsRef.current) {
                listElementsRef.current[index] = element
              }
            }}
          >
            <ActionList.LeadingVisual aria-hidden>
              <SearchIcon />
            </ActionList.LeadingVisual>
            {option.title}
            <ActionList.TrailingVisual
              aria-hidden
              className={isActive ? styles.trailingVisualActive : styles.trailingVisualHidden}
            >
              <ArrowRightIcon />
            </ActionList.TrailingVisual>
          </ActionList.Item>,
        )
      } else if (option.title) {
        const isActive = selectedIndex === index
        items.push(
          <ActionList.Item
            key={`general-${index}`}
            id={`search-option-general-${index}`}
            aria-describedby="search-suggestions-list"
            onSelect={() =>
              option.isViewAllResults ? performGeneralSearch() : generalSearchResultOnSelect(option)
            }
            className={option.isViewAllResults ? styles.viewAllSearchResults : ''}
            active={isActive}
            tabIndex={-1}
            ref={(element: HTMLLIElement | null) => {
              if (listElementsRef.current) {
                listElementsRef.current[index] = element
              }
            }}
          >
            {!option.isNoResultsFound && (
              <ActionList.LeadingVisual
                aria-hidden
                className={
                  option.isViewAllResults ? styles.leadingVisualHidden : styles.leadingVisualVisible
                }
              >
                <FileIcon />
              </ActionList.LeadingVisual>
            )}
            {option.title}
            <ActionList.TrailingVisual
              aria-hidden
              className={isActive ? styles.trailingVisualActive : styles.trailingVisualHidden}
            >
              <ArrowRightIcon />
            </ActionList.TrailingVisual>
          </ActionList.Item>,
        )
      }
    }

    groups.push(
      <ActionList.Group key="general" data-testid="general-autocomplete-suggestions">
        <ActionList.GroupHeading as="h3" tabIndex={-1}>
          {t('search.overlay.general_suggestions_list_heading')}
        </ActionList.GroupHeading>
        {searchLoading && isInAskAIState ? (
          <div
            role="status"
            className={styles.loadingContainer}
            style={{
              height: `${previousSuggestionsListHeight}px`,
            }}
          >
            <Spinner />
          </div>
        ) : (
          items
        )}
      </ActionList.Group>,
    )

    if (isInAskAIState || isInAskAIStateButNoAnswer) {
      groups.push(<ActionList.Divider key="no-answer-divider" />)
    }

    if (isInAskAIState) {
      groups.push(
        <ActionList.Group key="ai" data-testid="ask-ai">
          <li tabIndex={-1}>
            <AskAIResults
              query={askAIState.aiQuery}
              debug={askAIState.debug}
              version={askAIState.currentVersion}
              setAISearchError={askAIState.setAISearchError}
              references={askAIState.references}
              setReferences={askAIState.setReferences}
              referencesIndexOffset={askAIState.referencesIndexOffset}
              referenceOnSelect={askAIState.referenceOnSelect}
              selectedIndex={selectedIndex}
              askAIEventGroupId={askAIState.askAIEventGroupId}
              aiCouldNotAnswer={askAIState.aiCouldNotAnswer}
              setAICouldNotAnswer={askAIState.setAICouldNotAnswer}
              listElementsRef={listElementsRef}
            />
          </li>
        </ActionList.Group>,
      )
    }

    // Don't show the bottom divider if:
    // 1. We are in the AI could not answer state
    // 2. We are in the AI Search error state
    // 3. There are no AI suggestions to show in suggestions state
    if (
      !isInAskAIState &&
      !askAIState.aiSearchError &&
      generalSearchOptions.filter((option) => !option.isViewAllResults && !option.isNoResultsFound)
        .length &&
      aiOptionsWithUserInput.length
    ) {
      groups.push(<ActionList.Divider key="bottom-divider" />)
    }
  }

  if (aiOptionsWithUserInput.length && !isInAskAIState) {
    groups.push(
      <ActionList.Group key="ai-suggestions" data-testid="ai-autocomplete-suggestions">
        <ActionList.GroupHeading as="h3" id="copilot-suggestions" tabIndex={-1}>
          <CopilotIcon className="mr-1" />
          {t('search.overlay.ai_autocomplete_list_heading')}
        </ActionList.GroupHeading>
        {aiOptionsWithUserInput.map((option: AutocompleteSearchHitWithUserQuery, index: number) => {
          // Since general search comes first, we need to add an offset for AI suggestions
          const indexWithOffset = generalSearchOptions.length + index
          const isActive = selectedIndex === indexWithOffset
          const item = (
            <ActionList.Item
              key={`ai-${indexWithOffset}`}
              id={`search-option-ai-${indexWithOffset}`}
              aria-describedby="copilot-suggestions"
              onSelect={() => aiAutocompleteOnSelect(option)}
              active={isActive}
              tabIndex={-1}
              ref={(element: HTMLLIElement | null) => {
                if (listElementsRef.current) {
                  listElementsRef.current[indexWithOffset] = element
                }
              }}
            >
              <ActionList.LeadingVisual aria-hidden>
                <CommentIcon />
              </ActionList.LeadingVisual>
              {option.term}
              <ActionList.TrailingVisual
                aria-hidden
                className={isActive ? styles.trailingVisualActive : styles.trailingVisualHidden}
              >
                <ArrowRightIcon />
              </ActionList.TrailingVisual>
            </ActionList.Item>
          )
          return item
        })}
      </ActionList.Group>,
    )
  }

  return <>{groups}</>
}
