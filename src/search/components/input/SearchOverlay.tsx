import React, { useState, useRef, RefObject, useEffect, useMemo } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { ActionList, IconButton, Overlay, Stack, TextInput, Banner } from '@primer/react'
import { SearchIcon, XCircleFillIcon, CopilotIcon, ArrowLeftIcon } from '@primer/octicons-react'
import { focusTrap } from '@primer/behaviors'

import { useTranslation } from '@/languages/components/useTranslation'
import { useVersion } from '@/versions/components/useVersion'
import {
  AI_SEARCH_CONTEXT,
  executeGeneralSearch,
  GENERAL_SEARCH_CONTEXT,
} from '../helpers/execute-search-actions'
import { useCombinedSearchResults } from '@/search/components/hooks/useAISearchAutocomplete'
import { sendEvent, uuidv4 } from '@/events/components/events'
import { EventType } from '@/events/types'
import { ASK_AI_EVENT_GROUP, SEARCH_OVERLAY_EVENT_GROUP } from '@/events/components/event-groups'
import { useSharedUIContext } from '@/frame/components/context/SharedUIContext'

import type { AIReference } from '../types'
import type { AutocompleteSearchHit, GeneralSearchHit } from '@/search/types'

import { sanitizeSearchQuery } from '@/search/lib/sanitize-search-query'

import {
  SearchContext,
  SearchContextType,
  AutocompleteSearchHitWithUserQuery,
  GeneralSearchHitWithOptions,
} from './SearchContext'
import { SearchGroups } from './SearchGroups'
import styles from './SearchOverlay.module.scss'

type Props = {
  searchOverlayOpen: boolean
  parentRef: RefObject<HTMLElement>
  debug: boolean
  onClose: () => void
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

// Upon clicking the SearchInput component this overlay will be displayed
export function SearchOverlay({
  searchOverlayOpen,
  parentRef,
  debug,
  onClose,
  params,
  updateParams,
}: Props) {
  const { t } = useTranslation('search')
  const { currentVersion } = useVersion()
  const router = useRouter()

  // Map props from multi query state
  const urlSearchInputQuery = params['search-overlay-input']
  const isAskAIState = params['search-overlay-ask-ai'] === 'true'

  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsListHeightRef = useRef<HTMLUListElement>(null)
  // We need an array of refs to the list elements so we can focus them when the user uses the arrow keys
  const listElementsRef = React.useRef<Array<HTMLLIElement | null>>([])

  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  const [aiQuery, setAIQuery] = useState<string>(urlSearchInputQuery)
  const [aiSearchError, setAISearchError] = useState<boolean>(false)
  const [aiReferences, setAIReferences] = useState<AIReference[]>([] as AIReference[])
  const [aiCouldNotAnswer, setAICouldNotAnswer] = useState<boolean>(false)
  const [showSpinner, setShowSpinner] = useState(false)
  const [scrollPos, setScrollPos] = useState(0)
  const [announcement, setAnnouncement] = useState<string>('')

  const { hasOpenHeaderNotifications } = useSharedUIContext()

  // Group all events between open / close of the overlay together
  const searchEventGroupId = useRef<string>('')
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (searchOverlayOpen && overlayRef.current) {
      focusTrap(overlayRef.current, inputRef.current || undefined)
    }
  }, [searchOverlayOpen])

  useEffect(() => {
    searchEventGroupId.current = uuidv4()
  }, [searchOverlayOpen])
  // Group all events within an "Ask AI" session together
  const askAIEventGroupId = useRef<string>('')

  // When there is a notification above the header, we need to adjust the top position of the overlay to account for it
  useEffect(() => {
    if (hasOpenHeaderNotifications) {
      const handleScroll = () => {
        setScrollPos(window.scrollY)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [hasOpenHeaderNotifications])
  const overlayTopValue = scrollPos > 72 ? '0px' : `${88 - scrollPos}px !important`

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

  // Filter out any options that match the local query and replace them with a custom user query option that include isUserQuery: true
  const filteredAIOptions = aiAutocompleteOptions.filter(
    (option) => option.term !== urlSearchInputQuery,
  )

  // Create new arrays that prepend the user input
  const userInputOptions =
    urlSearchInputQuery.trim() !== ''
      ? [
          {
            term: urlSearchInputQuery,
            title: urlSearchInputQuery,
            highlights: [],
            isUserQuery: true,
          },
        ]
      : []

  // Combine options for key navigation
  const [combinedOptions, generalOptionsWithViewStatus, aiOptionsWithUserInput] = useMemo(() => {
    setAnnouncement('')
    let generalWithView = [...generalSearchResults]
    const aiWithUser = [...userInputOptions, ...filteredAIOptions]
    const combined = [] as Array<{
      group: 'general' | 'ai' | string
      url?: string
      option: AutocompleteSearchHitWithUserQuery | GeneralSearchHitWithOptions
    }>

    if (generalSearchResults.length > 0) {
      generalWithView.push({
        title: t('search.overlay.view_all_search_results'),
        isViewAllResults: true,
      } as any)
    } else if (autoCompleteSearchError) {
      if (urlSearchInputQuery.trim() !== '') {
        generalWithView.push({
          ...(userInputOptions[0] || {}),
          isSearchDocsOption: true,
        } as unknown as GeneralSearchHit)
      }
    } else if (urlSearchInputQuery.trim() !== '' && !searchLoading) {
      setAnnouncement(t('search.overlay.no_results_found_announcement'))
      generalWithView.push({
        title: t('search.overlay.no_results_found'),
        isNoResultsFound: true,
      } as any)
    } else {
      generalWithView = []
    }
    // NOTE: Order of combinedOptions is important, since 'selectedIndex' is used to navigate the combinedOptions array
    // Add general options _before_ AI options
    combined.push(...generalWithView.map((option) => ({ group: 'general', option })))
    // On AI Error, don't include AI suggestions, only user input
    if (!aiSearchError && !isAskAIState) {
      combined.push(...aiWithUser.map((option) => ({ group: 'ai', option })))
    } else if (isAskAIState && !aiCouldNotAnswer) {
      // When "ask ai" state is reached, we have references that are ActionList items.
      // We want to navigate these items via the keyboard, so include them in the combinedOptions array
      combined.push(
        ...aiReferences.map((option) => ({
          group: 'reference', // The references are actually article URLs that we want to navigate to
          url: option.url,
          option: {
            term: option.title,
            highlights: [],
            isUserQuery: false,
          },
        })),
      )
    }

    return [combined, generalWithView, aiWithUser]
  }, [
    generalSearchResults,
    totalGeneralSearchResults,
    urlSearchInputQuery,
    aiSearchError,
    aiReferences,
    isAskAIState,
    autoCompleteSearchError,
  ])

  // Rather than use `initialFocusRef` to have our Primer <Overlay> component auto-focus our input
  // We manually focus on open using a useEffect so we can focus _without_ scrolling since we don't want
  // to scroll to the top of the page each time the SearchOverlay is opened
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
      // When opening the overlay via query params, we don't need to fetch autocomplete results
      // However, on initial open, we need to clear the loading state
      setSearchLoading(false)
    }
    return () => {
      clearAutocompleteResults()
    }
    // We need to update when isAskAIState changes, because we might start a session in the "Ask AI" state, and then switch to the "Search" state
    // In this scenario we don't have pre-existing autocomplete results to show, so we need to fetch them
    // Additionally, the query may change in the "Ask AI" state, so we need to update the results when we switch back to the "Search" state
  }, [
    searchOverlayOpen,
    updateAutocompleteResults,
    clearAutocompleteResults,
    isAskAIState,
    aiCouldNotAnswer,
  ])

  // For keyboard controls, we need to use a ref for the list elements that updates when the options change
  useEffect(() => {
    listElementsRef.current = listElementsRef.current.slice(
      0,
      generalOptionsWithViewStatus.length + aiOptionsWithUserInput.length,
    )
  }, [generalOptionsWithViewStatus, aiOptionsWithUserInput])

  // When loading, capture the last height of the suggestions list so we can use it for the loading div
  const previousSuggestionsListHeight = useMemo(() => {
    if (generalSearchResults.length || aiAutocompleteOptions.length) {
      return `${7 * (generalSearchResults.length + aiAutocompleteOptions.length)}`
    } else {
      return '150' // Default height for just 2 suggestions
    }
  }, [searchLoading])

  // When the user types in the search input, update the local query and fetch autocomplete results
  const handleSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const newQuery = event.target.value
    setSelectedIndex(-1) // Reset selected index when query changes
    // Whenever the query changes, we want to leave the Ask AI state
    setSearchLoading(true)
    updateAutocompleteResults(newQuery)
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

  // When a general option is selected, open the article in the current window
  const generalSearchResultOnSelect = (selectedOption: GeneralSearchHit) => {
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
      search_result_index: selectedIndex,
      search_result_total: totalGeneralSearchResults,
      search_result_url: selectedOption.url || '',
      search_result_rank: (totalGeneralSearchResults - selectedIndex) / totalGeneralSearchResults,
      eventGroupKey: SEARCH_OVERLAY_EVENT_GROUP,
      eventGroupId: searchEventGroupId.current,
    })
    const searchParams = new URLSearchParams((router.query as Record<string, string>) || {})
    if (searchParams.has('search-overlay-open')) {
      searchParams.delete('search-overlay-open')
    }
    if (searchParams.has('search-overlay-input')) {
      searchParams.delete('search-overlay-input')
    }
    if (searchParams.has('search-overlay-ask-ai')) {
      searchParams.delete('search-overlay-ask-ai')
    }
    if (searchParams.has('query')) {
      searchParams.delete('query')
    }
    router.push(`${selectedOption.url}?${searchParams.toString()}`)
    onClose()
  }

  // When an AI option is selected, set the AI query and focus the input since ask AI results replace the suggestions
  const aiSearchOptionOnSelect = (selectedOption: AutocompleteSearchHit) => {
    if (selectedOption.term) {
      askAIEventGroupId.current = uuidv4()
      // Fire event from onSelect instead of inside the API request function (executeAISearch), because the result could be cached and not trigger an event
      sendEvent({
        type: EventType.search,
        search_query: 'REDACTED',
        search_context: AI_SEARCH_CONTEXT,
        eventGroupKey: ASK_AI_EVENT_GROUP,
        eventGroupId: askAIEventGroupId.current,
      })
      setSelectedIndex(-1)
      setSearchLoading(true)
      updateParams({
        'search-overlay-ask-ai': 'true',
        'search-overlay-input': selectedOption.term,
      })
      setAIQuery(selectedOption.term)
      inputRef.current?.focus()
    }
  }

  const performGeneralSearch = () => {
    executeGeneralSearch(router, currentVersion, urlSearchInputQuery, debug)
    onClose()
  }

  // When a reference from an "Ask AI" result is selected, navigate to the reference
  const referenceOnSelect = (url: string) => {
    sendEvent({
      type: EventType.link,
      link_url: url || '',
      eventGroupKey: ASK_AI_EVENT_GROUP,
      eventGroupId: askAIEventGroupId.current,
    })
    setSelectedIndex(-1)
    const searchParams = new URLSearchParams((router.query as Record<string, string>) || {})
    if (searchParams.has('search-overlay-open')) {
      searchParams.delete('search-overlay-open')
    }
    if (searchParams.has('search-overlay-input')) {
      searchParams.delete('search-overlay-input')
    }
    if (searchParams.has('search-overlay-ask-ai')) {
      searchParams.delete('search-overlay-ask-ai')
    }
    if (searchParams.has('query')) {
      searchParams.delete('query')
    }
    window.open(`${url}?${searchParams.toString()}`, '_blank')
  }

  // Handle keyboard navigation of suggestions
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const optionsLength = listElementsRef.current?.length ?? 0
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (optionsLength > 0) {
        let newIndex = 0
        // If no item is selected, select the first item
        if (selectedIndex === -1) {
          newIndex = 0
        } else {
          newIndex = (selectedIndex + 1) % optionsLength
          // If we go "out of bounds" (i.e. the index is less than the selected index), unselect the item
          if (newIndex < selectedIndex) {
            newIndex = -1
          }
        }
        // If it's the "no results found" option, skip it
        if (
          newIndex >= selectedIndex &&
          (combinedOptions[newIndex]?.option as any)?.isNoResultsFound
        ) {
          newIndex += 1
        }
        setSelectedIndex(newIndex)
        if (newIndex !== -1 && listElementsRef.current[newIndex]) {
          listElementsRef.current[newIndex]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        }
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (optionsLength > 0) {
        let newIndex = 0
        // If no item is selected, select the last item
        if (selectedIndex === -1) {
          newIndex = optionsLength - 1
        } else {
          // Otherwise, select the previous item
          newIndex = (selectedIndex - 1 + optionsLength) % optionsLength
          // If we go "out of bounds" (i.e. the index is greater than the selected index), unselect the item
          if (newIndex > selectedIndex) {
            newIndex = -1
            // If it's the "no results found" option, skip it
          }
        }
        // If it's the "no results found" option, skip it
        if (
          newIndex <= selectedIndex &&
          (combinedOptions[newIndex]?.option as any)?.isNoResultsFound
        ) {
          newIndex -= 1
        }
        setSelectedIndex(newIndex)
        if (newIndex !== -1 && listElementsRef.current[newIndex]) {
          listElementsRef.current[newIndex]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        }
      }
    } else if (event.key === 'Enter') {
      event.preventDefault()
      let pressedGroupKey = SEARCH_OVERLAY_EVENT_GROUP
      let pressedGroupId = searchEventGroupId
      let pressedOnContext = ''

      // When enter is pressed and no option is manually selected (-1), perform an AI search with the user input
      if (selectedIndex === -1) {
        pressedOnContext = AI_SEARCH_CONTEXT
        pressedGroupKey = ASK_AI_EVENT_GROUP
        pressedGroupId = askAIEventGroupId
        sendKeyboardEvent(event.key, pressedOnContext, pressedGroupId, pressedGroupKey)
        aiSearchOptionOnSelect({ term: urlSearchInputQuery } as AutocompleteSearchHit)
      } else if (
        combinedOptions.length > 0 &&
        selectedIndex >= 0 &&
        selectedIndex < combinedOptions.length
      ) {
        const selectedItem = combinedOptions[selectedIndex]
        if (!selectedItem) {
          return
        }
        let action = () => {} // Execute the action after we send the event
        if (selectedItem?.group === 'general') {
          if (
            (selectedItem.option as GeneralSearchHitWithOptions).isViewAllResults ||
            (selectedItem.option as GeneralSearchHitWithOptions).isSearchDocsOption
          ) {
            pressedOnContext = 'view-all'
            action = performGeneralSearch
          } else {
            pressedOnContext = 'general-option'
            action = () => generalSearchResultOnSelect(selectedItem.option as GeneralSearchHit)
          }
        } else if (selectedItem?.group === 'ai') {
          pressedOnContext = 'ai-option'
          action = () => aiSearchOptionOnSelect(selectedItem.option as AutocompleteSearchHit)
        } else if (selectedItem?.group === 'reference') {
          // On a reference select, we are in the Ask AI State / Screen
          pressedGroupKey = ASK_AI_EVENT_GROUP
          pressedGroupId = askAIEventGroupId
          pressedOnContext = 'reference-option'
          action = () => referenceOnSelect(selectedItem.url || '')
        }
        sendKeyboardEvent(event.key, pressedOnContext, pressedGroupId, pressedGroupKey)
        return action()
      }
    } else if (event.key === 'Escape') {
      event.preventDefault()
      onClose() // Close the input overlay when Escape is pressed
    }
  }

  const onBackButton = () => {
    // Leave the Ask AI state when the user clicks the back button
    setSelectedIndex(-1)
    updateParams({
      'search-overlay-ask-ai': '',
      'search-overlay-input': urlSearchInputQuery,
    })
    // Focus the search input
    inputRef.current?.focus()
  }

  // We render the AI Result in the searchGroups call, so we pass the props down via an object
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
    referencesIndexOffset: generalOptionsWithViewStatus.length,
    referenceOnSelect,
    askAIEventGroupId,
    aiSearchError,
    aiCouldNotAnswer,
    setAICouldNotAnswer,
  }

  const searchContextValue: SearchContextType = {
    t,
    generalSearchOptions: generalOptionsWithViewStatus,
    aiOptionsWithUserInput,
    generalSearchResultOnSelect,
    aiAutocompleteOnSelect: aiSearchOptionOnSelect,
    performGeneralSearch,
    selectedIndex,
    listElementsRef: listElementsRef as RefObject<Array<HTMLLIElement | null>>,
    askAIState,
    showSpinner,
    searchLoading,
    previousSuggestionsListHeight,
  }

  // We display different content in the overlay based:
  // 1. If either search (autocomplete results or ask AI) has an error
  // 2. The user has selected an AI query and we are showing the ask AI results
  // 3. The search is loading
  // 4. Otherwise, we show the autocomplete suggestions
  let OverlayContents = null
  // We can still ask AI if there is an autocomplete search error
  const inErrorState = aiSearchError || (autoCompleteSearchError && !isAskAIState)
  if (inErrorState) {
    OverlayContents = (
      <SearchContext.Provider
        value={{
          ...searchContextValue,
          aiOptionsWithUserInput: aiSearchError ? [] : aiOptionsWithUserInput,
        }}
      >
        <ActionList
          aria-label={t('search.overlay.suggestions_list_aria_label')}
          id="search-suggestions-list"
          showDividers
          className={styles.suggestionsList}
          ref={suggestionsListHeightRef}
          style={{
            minHeight:
              autoCompleteSearchError && !generalOptionsWithViewStatus.length
                ? '0'
                : `${previousSuggestionsListHeight}px`,
          }}
        >
          {/* Always show the AI Search UI error message when it is needed */}
          {aiSearchError && (
            <>
              <ActionList.Divider key="error-top-divider" />
              <li tabIndex={-1}>
                <ActionList.GroupHeading
                  as="h3"
                  tabIndex={-1}
                  aria-label={t('search.overlay.ai_suggestions_list_aria_label')}
                >
                  <CopilotIcon className="mr-1" />
                  {t('search.overlay.ai_autocomplete_list_heading')}
                </ActionList.GroupHeading>
              </li>
              <li>
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
              </li>
              {/* If there are general results, show bottom divider */}
              {generalOptionsWithViewStatus.length > 0 && (
                <ActionList.Divider key="error-middle-divider" />
              )}
            </>
          )}
          <SearchGroups />
        </ActionList>
      </SearchContext.Provider>
    )
  } else {
    OverlayContents = (
      <SearchContext.Provider value={searchContextValue}>
        <ActionList
          id="search-suggestions-list"
          aria-label={t('search.overlay.suggestions_list_aria_label')}
          showDividers
          className={styles.suggestionsList}
          ref={suggestionsListHeightRef}
          style={{
            minHeight: `${previousSuggestionsListHeight}px`,
          }}
        >
          <SearchGroups />
        </ActionList>
      </SearchContext.Provider>
    )
  }

  return (
    <>
      <div className={styles.overlayBackdrop} />
      <Overlay
        preventFocusOnOpen
        initialFocusRef={inputRef}
        returnFocusRef={parentRef}
        ignoreClickRefs={[parentRef]}
        onEscape={onClose}
        onClickOutside={onClose}
        anchorSide="inside-center"
        className={cx(styles.overlayContainer, 'position-fixed')}
        // We need to override the top value of the overlay when there are header notifications
        style={
          hasOpenHeaderNotifications
            ? {
                top: overlayTopValue,
              }
            : undefined
        }
        role="dialog"
        aria-modal="true"
        aria-label={t('search.overlay.aria_label')}
        ref={overlayRef}
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
            leadingVisual={<SearchIcon />}
            role="combobox"
            // In AskAI the search input not longer "controls" the suggestions list, because there is no list, so we remove the aria-controls attribute
            aria-controls={isAskAIState ? 'ask-ai-result-container' : 'search-suggestions-list'}
            aria-expanded={combinedOptions.length > 0}
            aria-label={t('search.overlay.input_aria_label')}
            aria-activedescendant={
              selectedIndex >= 0
                ? `search-option-${combinedOptions[selectedIndex]?.group}-${selectedIndex}`
                : undefined
            }
            onKeyDown={handleKeyDown}
            placeholder={t('search.input.placeholder_no_icon')}
            trailingAction={
              <Stack justify="center" className={styles.stackMinWidth}>
                <TextInput.Action
                  onClick={() => {
                    setSelectedIndex(-1)
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
        </div>
        <ActionList.Divider
          className={inErrorState ? styles.dividerTopMarginHidden : styles.dividerTopMargin}
          aria-hidden="true"
        />
        {OverlayContents}
        <ActionList.Divider className={styles.dividerFullWidth} />
        <div key="description" className={styles.footer}>
          <p
            className={styles.privacyDisclaimer}
            dangerouslySetInnerHTML={{ __html: t('search.overlay.privacy_disclaimer') }}
          />
        </div>
        <div aria-live="assertive" className={styles.screenReaderOnly}>
          {announcement}
        </div>
      </Overlay>
    </>
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
