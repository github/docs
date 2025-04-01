import React, { useState, useRef, RefObject, useEffect, SetStateAction, useMemo } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import {
  ActionList,
  Box,
  Header,
  Link,
  Overlay,
  Spinner,
  Stack,
  TextInput,
  Token,
} from '@primer/react'
import {
  SearchIcon,
  XCircleFillIcon,
  CommentIcon,
  CopilotIcon,
  FileIcon,
  ArrowRightIcon,
} from '@primer/octicons-react'

import { useTranslation } from 'src/languages/components/useTranslation'
import { useVersion } from 'src/versions/components/useVersion'
import {
  AI_SEARCH_CONTEXT,
  executeGeneralSearch,
  GENERAL_SEARCH_CONTEXT,
} from '../helpers/execute-search-actions'

import styles from './SearchOverlay.module.scss'
import { Banner } from '@primer/react/drafts'
import { useCombinedSearchResults } from '@/search/components/hooks/useAISearchAutocomplete'
import { AskAIResults } from './AskAIResults'
import { sendEvent, uuidv4 } from '@/events/components/events'
import { getIsStaff } from '@/events/components/dotcom-cookies'
import { EventType } from '@/events/types'
import { ASK_AI_EVENT_GROUP, SEARCH_OVERLAY_EVENT_GROUP } from '@/events/components/event-groups'
import type { AIReference } from '../types'
import type { AutocompleteSearchHit, GeneralSearchHit } from '@/search/types'
import { focusTrap } from '@primer/behaviors'

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
    if (!aiAutocompleteOptions.length && !generalSearchResults.length) {
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
    let generalOptionsWithViewStatus = [...generalSearchResults]
    const aiOptionsWithUserInput = [...userInputOptions, ...filteredAIOptions]
    const combinedOptions = [] as Array<{
      group: 'general' | 'ai' | string
      url?: string
      option: AutocompleteSearchHitWithUserQuery | GeneralSearchHitWithOptions
    }>

    if (generalSearchResults.length > 0) {
      generalOptionsWithViewStatus.push({
        title: t('search.overlay.view_all_search_results'),
        isViewAllResults: true,
      } as any)
    } else if (autoCompleteSearchError) {
      if (urlSearchInputQuery.trim() !== '') {
        generalOptionsWithViewStatus.push({
          ...(userInputOptions[0] || {}),
          isSearchDocsOption: true,
        } as unknown as GeneralSearchHit)
      }
    } else if (urlSearchInputQuery.trim() !== '' && !searchLoading) {
      generalOptionsWithViewStatus.push({
        title: t('search.overlay.no_results_found'),
        isNoResultsFound: true,
      } as any)
    } else {
      generalOptionsWithViewStatus = []
    }
    // NOTE: Order of combinedOptions is important, since 'selectedIndex' is used to navigate the combinedOptions array
    // Add general options _before_ AI options
    combinedOptions.push(
      ...generalOptionsWithViewStatus.map((option) => ({ group: 'general', option })),
    )
    // On AI Error, don't include AI suggestions, only user input
    if (!aiSearchError && !isAskAIState) {
      combinedOptions.push(...aiOptionsWithUserInput.map((option) => ({ group: 'ai', option })))
    } else if (isAskAIState && !aiCouldNotAnswer) {
      // When "ask ai" state is reached, we have references that are ActionList items.
      // We want to navigate these items via the keyboard, so include them in the combinedOptions array
      combinedOptions.push(
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

    return [combinedOptions, generalOptionsWithViewStatus, aiOptionsWithUserInput]
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
    if (searchOverlayOpen && (!isAskAIState || aiSearchError || aiCouldNotAnswer)) {
      if (!searchEventGroupId.current) {
        searchEventGroupId.current = uuidv4()
      }
      updateAutocompleteResults(urlSearchInputQuery)
    } else if (isAskAIState || aiSearchError || aiCouldNotAnswer) {
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
      return 7 * (generalSearchResults.length + aiAutocompleteOptions.length) + ''
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
      // TODO: Remove PII so we can include the actual query
      search_query: 'REDACTED',
      search_context: GENERAL_SEARCH_CONTEXT,
      eventGroupKey: SEARCH_OVERLAY_EVENT_GROUP,
      eventGroupId: searchEventGroupId.current,
    })
    sendEvent({
      type: EventType.searchResult,
      search_result_query: urlSearchInputQuery,
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
    router.push(`${selectedOption.url}?${searchParams.toString()}` || '')
    onClose()
  }

  // When an AI option is selected, set the AI query and focus the input since ask AI results replace the suggestions
  const aiSearchOptionOnSelect = (selectedOption: AutocompleteSearchHit) => {
    if (selectedOption.term) {
      askAIEventGroupId.current = uuidv4()
      // Fire event from onSelect instead of inside the API request function (executeAISearch), because the result could be cached and not trigger an event
      sendEvent({
        type: EventType.search,
        // TODO: Remove PII so we can include the actual query
        search_query: 'REDACTED',
        search_context: AI_SEARCH_CONTEXT,
        eventGroupKey: ASK_AI_EVENT_GROUP,
        eventGroupId: askAIEventGroupId.current,
      })
      setSelectedIndex(-1)
      updateParams({
        'search-overlay-ask-ai': 'true',
        'search-overlay-input': selectedOption.term,
      })
      setSearchLoading(true)
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
    window.open(`${url}?${searchParams.toString()}` || '', '_blank')
  }

  // Handle keyboard navigation of suggestions
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      if (combinedOptions.length > 0) {
        let newIndex = 0
        // If no item is selected, select the first item
        if (selectedIndex === -1) {
          newIndex = 0
        } else {
          newIndex = (selectedIndex + 1) % combinedOptions.length
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
      }
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      if (combinedOptions.length > 0) {
        let newIndex = 0
        // If no item is selected, select the last item
        if (selectedIndex === -1) {
          newIndex = combinedOptions.length - 1
        } else {
          // Otherwise, select the previous item
          newIndex = (selectedIndex - 1 + combinedOptions.length) % combinedOptions.length
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
      }
    } else if (event.key === 'Enter') {
      event.preventDefault()
      let pressedGroupKey = SEARCH_OVERLAY_EVENT_GROUP
      let pressedGroupId = searchEventGroupId
      let pressedOnContext = ''

      // When enter is pressed and no option is manually selected (-1), perform an AI search with the user input
      if (selectedIndex === -1) {
        if (isAskAIState) {
          pressedOnContext = AI_SEARCH_CONTEXT
          pressedGroupKey = ASK_AI_EVENT_GROUP
          pressedGroupId = askAIEventGroupId
        }
        sendKeyboardEvent(event.key, pressedOnContext, pressedGroupId, pressedGroupKey)
        aiSearchOptionOnSelect({ term: urlSearchInputQuery } as AutocompleteSearchHit)
      }

      if (
        combinedOptions.length > 0 &&
        selectedIndex >= 0 &&
        selectedIndex < combinedOptions.length
      ) {
        const selectedItem = combinedOptions[selectedIndex]
        let action = () => {} // Execute the action after we send the event
        if (selectedItem.group === 'general') {
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
        } else if (selectedItem.group === 'ai') {
          pressedOnContext = 'ai-option'
          action = () => aiSearchOptionOnSelect(selectedItem.option as AutocompleteSearchHit)
        } else if (selectedItem.group === 'reference') {
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

  // We render the AI Result in the searchGroups call, so we pass the props down via an object
  // TODO: Move stateful logic to Context since we now have so many props:
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
      <>
        <ActionList
          aria-label={t('search.overlay.suggestions_list_aria_label')}
          id="search-suggestions-list"
          showDividers
          className={styles.suggestionsList}
          ref={suggestionsListHeightRef}
          sx={{
            // When there is an error and nothing is typed in by the user, show an empty list with no height
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
              <ActionList.GroupHeading
                as="h3"
                tabIndex={-1}
                aria-label={t('search.overlay.ai_suggestions_list_aria_label')}
              >
                <CopilotIcon className="mr-1" />
                {t('search.overlay.ai_autocomplete_list_heading')}
              </ActionList.GroupHeading>
              <Box
                sx={{
                  padding: '0 16px 0 16px',
                }}
              >
                <Banner
                  tabIndex={0}
                  className={styles.errorBanner}
                  title={t('search.failure.ai_title')}
                  description={t('search.failure.description')}
                  variant="info"
                  aria-live="assertive"
                  role="alert"
                />
              </Box>
              <ActionList.Divider key="error-bottom-divider" />
            </>
          )}
          {renderSearchGroups(
            t,
            generalOptionsWithViewStatus,
            aiSearchError ? [] : aiOptionsWithUserInput,
            generalSearchResultOnSelect,
            aiSearchOptionOnSelect,
            performGeneralSearch,
            selectedIndex,
            listElementsRef,
            askAIState,
            showSpinner,
            previousSuggestionsListHeight,
          )}
        </ActionList>
      </>
    )
  } else {
    OverlayContents = (
      <ActionList
        aria-label={t('search.overlay.suggestions_list_aria_label')}
        showDividers
        className={styles.suggestionsList}
        ref={suggestionsListHeightRef}
        sx={{
          minHeight: `${previousSuggestionsListHeight}px`,
        }}
      >
        {renderSearchGroups(
          t,
          generalOptionsWithViewStatus,
          aiOptionsWithUserInput,
          generalSearchResultOnSelect,
          aiSearchOptionOnSelect,
          performGeneralSearch,
          selectedIndex,
          listElementsRef,
          askAIState,
          showSpinner,
          previousSuggestionsListHeight,
        )}
      </ActionList>
    )
  }

  const overlayHeadingId = 'overlay-heading'
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
        role="dialog"
        aria-modal="true"
        aria-labelledby={overlayHeadingId}
        ref={overlayRef}
      >
        <Header className={styles.header}>
          <TextInput
            className="width-full"
            data-testid="overlay-search-input"
            ref={inputRef}
            value={urlSearchInputQuery}
            onChange={handleSearchQueryChange}
            leadingVisual={<SearchIcon />}
            aria-labelledby={overlayHeadingId}
            role="combobox"
            aria-controls="search-suggestions-list"
            aria-expanded={combinedOptions.length > 0}
            aria-activedescendant={
              selectedIndex >= 0
                ? `search-option-${combinedOptions[selectedIndex].group}-${selectedIndex}`
                : undefined
            }
            onKeyDown={handleKeyDown}
            placeholder={t('search.input.placeholder_no_icon')}
            trailingAction={
              <Stack
                justify="center"
                sx={{
                  minWidth: '34px',
                }}
              >
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
        </Header>
        <ActionList.Divider
          sx={{
            display: inErrorState ? 'none' : 'block',
            marginTop: '16px',
            width: '100%',
          }}
          aria-hidden="true"
        />
        {OverlayContents}
        <ActionList.Divider
          sx={{
            width: '100%',
          }}
        />
        <footer key="description" className={styles.footer}>
          <Token
            as="span"
            text="Beta"
            className={styles.betaToken}
            sx={{
              backgroundColor: 'var(--overlay-bg-color)',
            }}
          />
          <Link
            onClick={async () => {
              if (await getIsStaff()) {
                // Hubbers users use an internal discussion for feedback
                window.open('https://github.com/github/docs-engineering/discussions/5295', '_blank')
              } else {
                // TODO: On ship date set this value
                // window.open('TODO', '_blank')
              }
            }}
            as="button"
          >
            {t('search.overlay.give_feedback')}
          </Link>
        </footer>
      </Overlay>
    </>
  )
}

interface AutocompleteSearchHitWithUserQuery extends AutocompleteSearchHit {
  isUserQuery?: boolean
}

interface GeneralSearchHitWithOptions extends GeneralSearchHit {
  isViewAllResults?: boolean
  isNoResultsFound?: boolean
  isSearchDocsOption?: boolean
}

// Render the autocomplete suggestions with AI suggestions first, headings, and a divider between the two
function renderSearchGroups(
  t: any,
  generalSearchOptions: GeneralSearchHitWithOptions[],
  aiOptionsWithUserInput: AutocompleteSearchHitWithUserQuery[],
  generalSearchResultOnSelect: (selectedOption: GeneralSearchHit) => void,
  aiAutocompleteOnSelect: (selectedOption: AutocompleteSearchHit) => void,
  performGeneralSearch: () => void,
  selectedIndex: number,
  listElementsRef: RefObject<Array<HTMLLIElement | null>>,
  askAIState: {
    isAskAIState: boolean
    aiQuery: string
    debug: boolean
    currentVersion: string
    setAISearchError: () => void
    references: AIReference[]
    setReferences: (value: SetStateAction<AIReference[]>) => void
    referencesIndexOffset: number
    referenceOnSelect: (url: string) => void
    askAIEventGroupId: React.MutableRefObject<string>
    aiSearchError: boolean
    aiCouldNotAnswer: boolean
    setAICouldNotAnswer: (value: boolean) => void
  },
  showSpinner: boolean,
  previousSuggestionsListHeight: number | string,
) {
  const groups = []

  const askAIGroupHeading = (
    <ActionList.GroupHeading
      key="ai-heading"
      as="h3"
      tabIndex={-1}
      aria-label={t('search.overlay.ai_suggestions_list_aria_label')}
    >
      <CopilotIcon className="mr-1" />
      {t('search.overlay.ai_autocomplete_list_heading')}
    </ActionList.GroupHeading>
  )

  let isInAskAIState = askAIState?.isAskAIState && !askAIState.aiSearchError
  if (isInAskAIState) {
    groups.push(
      <ActionList.Group key="ai" data-testid="ask-ai">
        {askAIGroupHeading}
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
        />
      </ActionList.Group>,
    )
  }

  let isInAskAIStateButNoAnswer = isInAskAIState && askAIState.aiCouldNotAnswer

  if (isInAskAIStateButNoAnswer) {
    groups.push(<ActionList.Divider key="no-answer-divider" />)
  }

  // already showing spinner when streaming AI response, so don't want to show 2 here
  if (showSpinner && !isInAskAIState) {
    groups.push(
      <Box
        key="loading"
        role="status"
        className={styles.loadingContainer}
        sx={{
          height: `${previousSuggestionsListHeight}px`,
        }}
      >
        <Spinner />
      </Box>,
    )
    return groups
  }

  // We want to show general search suggestions underneath the AI Response section if the AI Could no answer
  if ((generalSearchOptions.length && !isInAskAIState) || isInAskAIStateButNoAnswer) {
    const items = []
    for (let index = 0; index < generalSearchOptions.length; index++) {
      const option = generalSearchOptions[index]
      if (option.isNoResultsFound) {
        items.push(
          <ActionList.Item
            key={`general-${index}`}
            id={`search-option-general-${index}`}
            role="option"
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
            role="option"
            tabIndex={-1}
            active={isActive}
            onSelect={() => performGeneralSearch()}
            aria-label={t('search.overlay.search_docs_with_query').replace('{query}', option.title)}
            ref={(element) => {
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
              sx={{
                // Hold the space even when not visible to prevent layout shift
                visibility: isActive ? 'visible' : 'hidden',
                width: '1rem',
              }}
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
            role="option"
            aria-describedby="search-suggestions-list"
            onSelect={() =>
              option.isViewAllResults ? performGeneralSearch() : generalSearchResultOnSelect(option)
            }
            className={option.isViewAllResults ? styles.viewAllSearchResults : ''}
            active={isActive}
            tabIndex={-1}
            ref={(element) => {
              if (listElementsRef.current) {
                listElementsRef.current[index] = element
              }
            }}
          >
            {!option.isViewAllResults && !option.isNoResultsFound && (
              <ActionList.LeadingVisual aria-hidden>
                <FileIcon />
              </ActionList.LeadingVisual>
            )}
            {option.title}
            <ActionList.TrailingVisual
              aria-hidden
              sx={{
                // Hold the space even when not visible to prevent layout shift
                visibility: isActive ? 'visible' : 'hidden',
                width: '1rem',
              }}
            >
              <ArrowRightIcon />
            </ActionList.TrailingVisual>
          </ActionList.Item>,
        )
      }
    }

    groups.push(
      <ActionList.Group key="general" data-testid="general-autocomplete-suggestions">
        <ActionList.GroupHeading as="h3" tabIndex={-1} id="search-suggestions-list">
          {t('search.overlay.general_suggestions_list_heading')}
        </ActionList.GroupHeading>
        {items}
      </ActionList.Group>,
    )

    // Don't show the bottom divider if:
    // 1. We are in the AI could not answer state
    // 2. We are in the AI Search error state
    // 3. There are no AI suggestions to show in suggestions state
    if (
      !askAIState.aiCouldNotAnswer &&
      !askAIState.aiSearchError &&
      (!askAIState.isAskAIState ||
        generalSearchOptions.filter(
          (option) => !option.isViewAllResults && !option.isNoResultsFound,
        ).length) &&
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
              role="option"
              aria-describedby="copilot-suggestions"
              onSelect={() => aiAutocompleteOnSelect(option)}
              active={isActive}
              tabIndex={-1}
              ref={(element) => {
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
                sx={{
                  // Hold the space even when not visible to prevent layout shift
                  visibility: isActive ? 'visible' : 'hidden',
                  width: '1rem',
                }}
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

  return groups
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
