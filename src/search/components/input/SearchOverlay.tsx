import React, { useState, useRef, RefObject, useEffect, useMemo, useCallback } from 'react'
import { useRouter } from 'next/router'
import { IconButton, TextInput, Banner } from '@primer/react'
import { Link as BrandLink, Stack } from '@primer/react-brand'
import { SearchIcon, XCircleFillIcon, XIcon, ArrowLeftIcon } from '@primer/octicons-react'

import { useTranslation } from '@/languages/components/useTranslation'
import { useVersion } from '@/versions/components/useVersion'
import {
  AI_SEARCH_CONTEXT,
  buildGeneralSearchPath,
  executeGeneralSearch,
  GENERAL_SEARCH_CONTEXT,
  withInheritedParams,
} from '../helpers/execute-search-actions'
import { useCombinedSearchResults } from '@/search/components/hooks/useAISearchAutocomplete'
import { sendEvent, uuidv4 } from '@/events/components/events'
import { EventType } from '@/events/types'
import { ASK_AI_EVENT_GROUP, SEARCH_OVERLAY_EVENT_GROUP } from '@/events/components/event-groups'

import type { AIReference } from '../types'
import type { AutocompleteSearchHit, GeneralSearchHit } from '@/search/types'

import { sanitizeSearchQuery } from '@/search/lib/sanitize-search-query'
import { MAX_QUERY_LENGTH } from '@/search/lib/ai-search-constants'

import { SearchContext, SearchContextType } from './SearchContext'
import { buildSearchOptions, VIEW_ALL_OPTION_ID, type SearchOption } from './search-options'
import { SearchDialog } from './SearchDialog'
import { SearchGroups } from './SearchGroups'
import styles from './SearchOverlay.module.scss'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'

type Props = {
  searchOverlayOpen: boolean
  parentRef: RefObject<HTMLElement | null>
  debug: boolean
  // Escape, scrim click, or the close button. Writes the URL.
  onClose: () => void
  // Closes with a URL write and resolves once it lands. Await it, then navigate: the two
  // must not overlap, or Next cancels one of them.
  onNavigateAway: () => Promise<void>
  params: {
    'search-overlay-input': string
    'search-overlay-ask-ai': string
  }
  updateParams: (
    updates: Partial<{
      'search-overlay-input': string
      'search-overlay-ask-ai': string
    }>,
  ) => void
}

export function SearchOverlay({
  searchOverlayOpen,
  parentRef,
  debug,
  onClose,
  onNavigateAway,
  params,
  updateParams,
}: Props) {
  const { t } = useTranslation('search')
  const { currentVersion } = useVersion()
  const router = useRouter()

  const urlSearchInputQuery = params['search-overlay-input']
  const isAskAIState = params['search-overlay-ask-ai'] === 'true'

  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsListHeightRef = useRef<HTMLDivElement>(null)
  // Keyed by option id, not index, so it can't drift out of sync with the option list.
  const optionElements = useRef(new Map<string, HTMLElement>())

  // One stable callback for every row, so React doesn't reattach refs and empty the map.
  const registerOption = useCallback((element: HTMLElement | null) => {
    if (!element) {
      return
    }
    const { id } = element
    optionElements.current.set(id, element)
    return () => {
      optionElements.current.delete(id)
    }
  }, [])

  const [activeId, setActiveId] = useState<string | null>(null)
  const [aiQuery, setAIQuery] = useState<string>(urlSearchInputQuery)
  const [aiSearchError, setAISearchError] = useState<boolean>(false)
  const [aiReferences, setAIReferences] = useState<AIReference[]>([] as AIReference[])
  const [aiCouldNotAnswer, setAICouldNotAnswer] = useState<boolean>(false)
  const [showSpinner, setShowSpinner] = useState(false)
  const [announcement, setAnnouncement] = useState<string>('')

  // Group overlay selection and keyboard events that pass this session ID.
  const searchEventGroupId = useRef<string>('')

  useEffect(() => {
    searchEventGroupId.current = uuidv4()
  }, [searchOverlayOpen])
  // Each Ask AI session gets its own event group.
  const askAIEventGroupId = useRef<string>('')

  const {
    autoCompleteOptions,
    searchLoading,
    setSearchLoading,
    searchError: autoCompleteSearchError,
    updateAutocompleteResults,
    clearAutocompleteResults,
  } = useCombinedSearchResults({
    router,
    currentVersion,
    debug,
  })

  const { aiAutocompleteOptions, generalSearchResults, totalGeneralSearchResults } =
    autoCompleteOptions

  // Whenever "searchLoading" changes, decide whether to show the spinner after 1s.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (autoCompleteSearchError) {
      return setShowSpinner(false)
    }

    // If it's the initial fetch, show the spinner immediately
    if (!aiAutocompleteOptions.length && !generalSearchResults.length && searchLoading) {
      return setShowSpinner(true)
    }

    if (searchLoading) {
      timer = setTimeout(() => setShowSpinner(true), 1000)
    } else {
      setShowSpinner(false)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [
    searchLoading,
    aiAutocompleteOptions.length,
    generalSearchResults.length,
    autoCompleteSearchError,
  ])

  // Results can outlive an emptied input, so check the query or the link offers `?query=`.
  const showViewAllResults = generalSearchResults.length > 0 && urlSearchInputQuery.trim() !== ''

  const viewAllResultsHref = buildGeneralSearchPath(
    router,
    currentVersion,
    urlSearchInputQuery,
    debug,
  )

  // Match SearchGroups: the spinner hides rows unless ask-AI is streaming with its own spinner.
  const suggestionsHidden = showSpinner && !(isAskAIState && !aiSearchError)

  const model = useMemo(
    () =>
      buildSearchOptions({
        query: urlSearchInputQuery,
        isAskAIState,
        searchLoading,
        suggestionsHidden,
        aiSearchError,
        aiCouldNotAnswer,
        autoCompleteSearchError,
        aiAutocompleteOptions,
        aiReferences,
        generalSearchResults,
        showViewAllResults,
        viewAllHref: viewAllResultsHref,
        viewAllLabel: totalGeneralSearchResults
          ? t('search.overlay.view_all_search_results_with_count').replace(
              '{{n}}',
              // The page's language, not the browser's: a German page shows "1.234" even
              // in an English browser.
              totalGeneralSearchResults.toLocaleString(router.locale),
            )
          : t('search.overlay.view_all_search_results'),
      }),
    [
      urlSearchInputQuery,
      isAskAIState,
      searchLoading,
      suggestionsHidden,
      aiSearchError,
      aiCouldNotAnswer,
      autoCompleteSearchError,
      aiAutocompleteOptions,
      aiReferences,
      generalSearchResults,
      showViewAllResults,
      viewAllResultsHref,
      totalGeneralSearchResults,
      router.locale,
      t,
    ],
  )
  const { options } = model
  const activeIndex = activeId ? options.findIndex((option) => option.id === activeId) : -1

  // Announce from an effect, not the memo, so the live region doesn't re-fire on every recompute.
  useEffect(() => {
    setAnnouncement(model.noResults ? t('search.overlay.no_results_found_announcement') : '')
  }, [model.noResults, t])

  // Clear a selection whose row new results unmounted, so aria-activedescendant names a real row.
  useEffect(() => {
    if (activeId && activeIndex === -1) {
      setActiveId(null)
    }
  }, [activeId, activeIndex])

  // Focus manually with preventScroll because Primer Overlay initialFocusRef scrolls to the top.
  useEffect(() => {
    if (searchOverlayOpen) {
      inputRef.current?.focus({
        preventScroll: true,
      })
    }
  }, [searchOverlayOpen])

  // Fetch initial search results on open
  useEffect(() => {
    if (searchOverlayOpen) {
      if (!searchEventGroupId.current) {
        searchEventGroupId.current = uuidv4()
      }
      updateAutocompleteResults(urlSearchInputQuery)
    } else {
      // Clear shared loading state so the next open does not inherit a spinner.
      setSearchLoading(false)
    }
    return () => {
      clearAutocompleteResults()
    }
    // Refetch after Ask AI because Search may have no results and the query may have changed.
  }, [
    searchOverlayOpen,
    updateAutocompleteResults,
    clearAutocompleteResults,
    isAskAIState,
    aiCouldNotAnswer,
  ])

  // Skip the view-all option: it sits outside the scroller, so scrolling to it moves the scrim.
  useEffect(() => {
    if (!activeId) {
      return
    }
    const element = optionElements.current.get(activeId)
    if (!element || !suggestionsListHeightRef.current?.contains(element)) {
      return
    }
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [activeId])

  // Estimate loading space from result counts, or reserve 150px for two suggestions.
  const previousSuggestionsListHeight = useMemo(() => {
    if (generalSearchResults.length || aiAutocompleteOptions.length) {
      return `${7 * (generalSearchResults.length + aiAutocompleteOptions.length)}`
    } else {
      return '150' // Default height for just 2 suggestions
    }
  }, [searchLoading])

  const handleSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const newQuery = event.target.value
    setActiveId(null)
    setSearchLoading(true)
    updateAutocompleteResults(newQuery)
    // Changing the query leaves the Ask AI state.
    if (isAskAIState) {
      updateParams({
        'search-overlay-ask-ai': '',
        'search-overlay-input': newQuery,
      })
    } else {
      updateParams({
        'search-overlay-input': newQuery,
      })
    }
  }

  // Take `generalRank` from the option, not the cursor, because mouse clicks have no cursor.
  const generalSearchResultOnSelect = async (
    selectedOption: GeneralSearchHit,
    generalRank: number,
  ) => {
    sendEvent({
      type: EventType.search,
      search_query: sanitizeSearchQuery(urlSearchInputQuery),
      search_context: GENERAL_SEARCH_CONTEXT,
      eventGroupKey: SEARCH_OVERLAY_EVENT_GROUP,
      eventGroupId: searchEventGroupId.current,
    })
    sendEvent({
      type: EventType.searchResult,
      search_result_query: sanitizeSearchQuery(urlSearchInputQuery),
      search_result_index: generalRank,
      search_result_total: totalGeneralSearchResults,
      search_result_url: selectedOption.url || '',
      search_result_rank: (totalGeneralSearchResults - generalRank) / totalGeneralSearchResults,
      eventGroupKey: SEARCH_OVERLAY_EVENT_GROUP,
      eventGroupId: searchEventGroupId.current,
    })
    const destination = withInheritedParams(selectedOption.url || '')
    await onNavigateAway()
    router.push(destination)
  }

  // AI results replace suggestions, so keep focus in the input after selection.
  const aiSearchOptionOnSelect = (selectedOption: AutocompleteSearchHit) => {
    if (selectedOption.term) {
      askAIEventGroupId.current = uuidv4()
      // Send the event here because cached results skip executeAISearch.
      sendEvent({
        type: EventType.search,
        search_query: 'REDACTED',
        search_context: AI_SEARCH_CONTEXT,
        eventGroupKey: ASK_AI_EVENT_GROUP,
        eventGroupId: askAIEventGroupId.current,
      })
      setActiveId(null)
      setSearchLoading(true)
      updateParams({
        'search-overlay-ask-ai': 'true',
        'search-overlay-input': selectedOption.term,
      })
      setAIQuery(selectedOption.term)
      inputRef.current?.focus()
    }
  }

  const performGeneralSearch = async () => {
    await onNavigateAway()
    executeGeneralSearch(router, currentVersion, urlSearchInputQuery, debug)
  }

  const referenceOnSelect = (url: string) => {
    sendEvent({
      type: EventType.link,
      link_url: url || '',
      eventGroupKey: ASK_AI_EVENT_GROUP,
      eventGroupId: askAIEventGroupId.current,
    })
    setActiveId(null)
    window.open(withInheritedParams(url), '_blank')
  }

  // Shared by keyboard and row clicks, so both paths report the same analytics rank.
  const activate = (option: SearchOption) => {
    if (option.kind === 'general') {
      generalSearchResultOnSelect(option.payload, option.groupRank)
    } else if (option.kind === 'ai') {
      aiSearchOptionOnSelect(option.payload)
    } else if (option.kind === 'reference') {
      referenceOnSelect(option.payload.url)
    } else {
      // 'search-docs' and 'view-all' both run the full docs search.
      performGeneralSearch()
    }
  }

  // Keep these `pressed_on` values stable so they stay comparable with historical analytics.
  const keyboardDispatch: Record<SearchOption['kind'], { pressedOn: string; askAIGroup: boolean }> =
    {
      ai: { pressedOn: 'ai-option', askAIGroup: false },
      general: { pressedOn: 'general-option', askAIGroup: false },
      reference: { pressedOn: 'reference-option', askAIGroup: true },
      'search-docs': { pressedOn: 'view-all', askAIGroup: false },
      'view-all': { pressedOn: 'view-all', askAIGroup: false },
    }

  // Stepping off either end clears the selection instead of wrapping.
  const stepActiveOption = (delta: 1 | -1) => {
    if (options.length === 0) {
      return
    }
    const next = activeIndex === -1 ? (delta === 1 ? 0 : options.length - 1) : activeIndex + delta
    setActiveId(next < 0 || next >= options.length ? null : options[next].id)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    // Leave composition keys to the IME. Safari flags the confirming Enter only with keyCode 229.
    if (event.nativeEvent.isComposing || event.keyCode === 229) {
      return
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      stepActiveOption(1)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      stepActiveOption(-1)
    } else if (event.key === 'Enter') {
      event.preventDefault()

      // With nothing selected, Enter asks Copilot. Full results are the last arrow stop.
      if (activeIndex === -1) {
        if (!urlSearchInputQuery.trim()) {
          return
        }
        sendKeyboardEvent(event.key, AI_SEARCH_CONTEXT, askAIEventGroupId, ASK_AI_EVENT_GROUP)
        aiSearchOptionOnSelect({ term: urlSearchInputQuery } as AutocompleteSearchHit)
        return
      }

      const option = options[activeIndex]
      const { pressedOn, askAIGroup } = keyboardDispatch[option.kind]
      // Send before navigating: router.push unmounts this component.
      sendKeyboardEvent(
        event.key,
        pressedOn,
        askAIGroup ? askAIEventGroupId : searchEventGroupId,
        askAIGroup ? ASK_AI_EVENT_GROUP : SEARCH_OVERLAY_EVENT_GROUP,
      )
      activate(option)
    } else if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
    }
  }

  const onBackButton = () => {
    // Leave the Ask AI state when the user clicks the back button
    setActiveId(null)
    updateParams({
      'search-overlay-ask-ai': '',
      'search-overlay-input': urlSearchInputQuery,
    })
    inputRef.current?.focus()
  }

  const askAIState = {
    isAskAIState,
    aiQuery,
    debug,
    currentVersion,
    setAISearchError: (isError = true) => {
      setAISearchError(isError)
      if (isError) {
        updateParams({
          'search-overlay-ask-ai': '',
        })
      }
    },
    references: aiReferences,
    setReferences: setAIReferences,
    askAIEventGroupId,
    aiSearchError,
    aiCouldNotAnswer,
    setAICouldNotAnswer,
  }

  const searchContextValue: SearchContextType = {
    t,
    model,
    activeId,
    activate,
    registerOption,
    askAIState,
    showSpinner,
    searchLoading,
    previousSuggestionsListHeight,
  }

  // Choose error, Ask AI result, loading, or autocomplete content for the overlay body.
  let OverlayContents = null
  // We can still ask AI if there is an autocomplete search error
  const inErrorState = aiSearchError || (autoCompleteSearchError && !isAskAIState)
  if (inErrorState) {
    OverlayContents = (
      <SearchContext.Provider value={searchContextValue}>
        <div
          className={styles.suggestionsList}
          // Gives the scroller's tab stop a role. It holds the listbox, not the other way round.
          role="group"
          // axe scrollable-region-focusable: long Copilot answers need a tab stop to scroll.
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          ref={suggestionsListHeightRef}
          style={{
            minHeight:
              autoCompleteSearchError && !model.general.length
                ? '0'
                : `${previousSuggestionsListHeight}px`,
          }}
        >
          {/* Show the AI Search UI error message whenever AI search fails. */}
          {aiSearchError && (
            <div role="group" aria-label={t('search.overlay.ai_suggestions_list_aria_label')}>
              <div className={styles.groupHeading} aria-hidden="true">
                {t('search.overlay.ai_autocomplete_list_heading')}
              </div>
              <div className={styles.overlayPadding}>
                <Banner
                  tabIndex={0}
                  className={styles.errorBanner}
                  title={t('search.failure.ai_title')}
                  description={t('search.failure.description')}
                  variant="info"
                  aria-live="assertive"
                  role="alert"
                />
              </div>
            </div>
          )}
          <SearchGroups />
        </div>
      </SearchContext.Provider>
    )
  } else {
    OverlayContents = (
      <SearchContext.Provider value={searchContextValue}>
        <div
          className={styles.suggestionsList}
          // Gives the scroller's tab stop a role. It holds the listbox, not the other way round.
          role="group"
          // axe scrollable-region-focusable: long Copilot answers need a tab stop to scroll.
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
          tabIndex={0}
          ref={suggestionsListHeightRef}
          style={{
            minHeight: `${previousSuggestionsListHeight}px`,
          }}
        >
          <SearchGroups />
        </div>
      </SearchContext.Provider>
    )
  }

  return (
    <SearchDialog
      ariaLabel={t('search.overlay.aria_label')}
      returnFocusRef={parentRef}
      initialFocusRef={inputRef}
      onClose={onClose}
    >
      <div className={styles.header}>
        <div className={isAskAIState ? styles.askAILabel : styles.askAILabelHidden}>
          <IconButton
            aria-label={t('search.ai.back_to_search')}
            icon={ArrowLeftIcon}
            onClick={onBackButton}
            variant="invisible"
          ></IconButton>
        </div>
        <TextInput
          className="width-full"
          data-testid="overlay-search-input"
          ref={inputRef}
          value={urlSearchInputQuery}
          onChange={handleSearchQueryChange}
          maxLength={MAX_QUERY_LENGTH}
          leadingVisual={<SearchIcon />}
          role="combobox"
          // The listbox in both states, since ask-AI arrow targets sit outside the answer region.
          aria-controls="search-listbox"
          aria-expanded={options.length > 0}
          aria-label={t('search.overlay.input_aria_label')}
          aria-activedescendant={activeId ?? undefined}
          onKeyDown={handleKeyDown}
          placeholder={t('search.input.placeholder_no_icon')}
          trailingAction={
            <Stack justifyContent="center" padding="none" className={styles.stackMinWidth}>
              <TextInput.Action
                onClick={() => {
                  setActiveId(null)
                  if (isAskAIState) {
                    updateParams({
                      'search-overlay-ask-ai': '',
                      'search-overlay-input': '',
                    })
                  } else {
                    updateParams({
                      'search-overlay-input': '',
                    })
                  }
                  if (!isAskAIState) {
                    updateAutocompleteResults('')
                  }
                }}
                icon={XCircleFillIcon}
                aria-label={t('search.overlay.clear_search_query')}
              />
            </Stack>
          }
        />
        {/* Below `md` there is no scrim to tap, so touch users need this to close. */}
        <IconButton
          className={styles.closeButton}
          data-testid="search-overlay-close"
          aria-label={t('search.overlay.close_search')}
          icon={XIcon}
          onClick={onClose}
          variant="invisible"
          size="large"
        />
      </div>
      <hr
        // Shown in error states too: it doubles as the input's focus marker.
        className={styles.dividerTopMargin}
        aria-hidden="true"
      />
      {/*
        Layout only: the scroller above the pinned view-all. The listbox itself is inside the
        scroller (SearchGroups), and takes the pinned view-all in through aria-owns.
      */}
      <div className={styles.listbox}>
        {OverlayContents}
        {/* No divider above: Figma uses space here, set by the `.viewAllResults` margin. */}
        {model.viewAll && (
          <BrandLink
            className={styles.viewAllResults}
            id={model.viewAll.id}
            // On the anchor itself: an <a> inside an option fails axe nested-interactive.
            role="option"
            aria-selected={activeId === VIEW_ALL_OPTION_ID}
            // Skips registerOption: brand's Link drops refs, and this sits outside the scroller.
            href={model.viewAll.payload.href}
            size="medium"
            variant="accent"
            // Figma draws a plain text link, so drop brand's trailing arrow.
            arrowDirection="none"
            // Tests use this instead of the label, which includes a count.
            data-testid="view-all-results"
            // Clear the virtual selection on real focus, or two things look focused.
            onFocus={() => setActiveId(null)}
            onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
              // Leave new-tab and new-window gestures to the browser and the href.
              if (
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey ||
                event.button !== 0
              ) {
                return
              }
              event.preventDefault()
              performGeneralSearch()
            }}
          >
            {model.viewAll.payload.label}
          </BrandLink>
        )}
      </div>
      <div key="description" className={styles.footer}>
        <RenderedHTML
          as="p"
          className={styles.privacyDisclaimer}
          html={t('search.overlay.privacy_disclaimer')}
        />
      </div>
      <div aria-live="assertive" className={styles.screenReaderOnly}>
        {announcement}
      </div>
      {/* The spinner is aria-hidden to keep the listbox valid, so loading is announced here. */}
      <div role="status" className={styles.screenReaderOnly}>
        {suggestionsHidden ? t('search.overlay.loading_results_announcement') : ''}
      </div>
    </SearchDialog>
  )
}

function sendKeyboardEvent(
  pressedKey: string,
  pressedOn: string,
  searchEventGroupId: React.MutableRefObject<string>,
  searchEventGroupKey = SEARCH_OVERLAY_EVENT_GROUP,
) {
  sendEvent({
    type: EventType.keyboard,
    pressed_key: pressedKey,
    pressed_on: pressedOn,
    eventGroupKey: searchEventGroupKey,
    eventGroupId: searchEventGroupId.current,
  })
}
