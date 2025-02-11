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
  ArrowRightIcon,
  SearchIcon,
  XCircleFillIcon,
  SparklesFillIcon,
  ChevronLeftIcon,
} from '@primer/octicons-react'

import { useTranslation } from 'src/languages/components/useTranslation'
import { useVersion } from 'src/versions/components/useVersion'
import { executeGeneralSearch } from '../helpers/execute-search-actions'

import styles from './SearchOverlay.module.scss'
import { Banner } from '@primer/react/drafts'
import { AutocompleteSearchHit } from '@/search/types'
import { useAISearchAutocomplete } from '@/search/components/hooks/useAISearchAutocomplete'
import { AskAIResults } from './AskAIResults'
import { uuidv4 } from '@/events/components/events'
import { getIsStaff } from '@/events/components/dotcom-cookies'

type Props = {
  searchOverlayOpen: boolean
  parentRef: RefObject<HTMLElement>
  debug: boolean
  urlSearchInputQuery: string
  setUrlSearchInputQuery: (value: string) => void
  isAskAIState: boolean
  setIsAskAIState: (value: boolean) => void
  onClose: () => void
}

// Upon clicking the SearchInput component this overlay will be displayed
export function SearchOverlay({
  searchOverlayOpen,
  parentRef,
  debug,
  urlSearchInputQuery,
  setUrlSearchInputQuery,
  isAskAIState,
  setIsAskAIState,
  onClose,
}: Props) {
  const { t } = useTranslation('search')
  const { currentVersion } = useVersion()
  const router = useRouter()

  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsListHeightRef = useRef<HTMLUListElement>(null)
  // We need an array of refs to the list elements so we can focus them when the user uses the arrow keys
  const listElementsRef = React.useRef<Array<HTMLLIElement | null>>([])

  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  const [aiQuery, setAiQuery] = useState<string>(urlSearchInputQuery)
  const [aiSearchError, setAISearchError] = useState<boolean>(false)

  // Group all events between open / close of the overlay together
  const searchEventGroupId = useRef<string>('')
  useEffect(() => {
    searchEventGroupId.current = uuidv4()
  }, [searchOverlayOpen])

  const {
    autoCompleteOptions,
    searchLoading,
    searchError: autoCompleteSearchError,
    updateAutocompleteResults,
    clearAutocompleteResults,
  } = useAISearchAutocomplete({
    router,
    currentVersion,
    debug,
    eventGroupIdRef: searchEventGroupId,
  })

  const { aiAutocompleteOptions } = autoCompleteOptions

  // Filter out any options that match the local query and replace them with a custom user query option that include isUserQuery: true
  const filteredAiOptions = aiAutocompleteOptions.filter(
    (option) => option.term !== urlSearchInputQuery,
  )

  // Create new arrays that prepend the user input
  const userInputOptions =
    urlSearchInputQuery.trim() !== ''
      ? [{ term: urlSearchInputQuery, highlights: [], isUserQuery: true }]
      : []
  const generalOptionsWithUserInput = [...userInputOptions]
  const aiOptionsWithUserInput = [...userInputOptions, ...filteredAiOptions]

  // Combine options for key navigation
  const combinedOptions = [] as Array<{
    group: 'general' | 'ai' | string
    option: AutocompleteSearchHitWithUserQuery
  }>
  // NOTE: Order of combinedOptions is important, since 'selectedIndex' is used to navigate the combinedOptions array
  // Add general options _before_ AI options
  combinedOptions.push(
    ...generalOptionsWithUserInput.map((option) => ({ group: 'general', option })),
  )
  // On AI Error, don't include AI suggestions, only user input
  if (!aiSearchError) {
    combinedOptions.push(...aiOptionsWithUserInput.map((option) => ({ group: 'ai', option })))
  }

  // Fetch initial search results on open
  useEffect(() => {
    if (searchOverlayOpen && !isAskAIState) {
      searchEventGroupId.current = uuidv4()
      updateAutocompleteResults(urlSearchInputQuery)
    }
    return () => {
      clearAutocompleteResults()
    }
    // We need to update when isAskAIState changes, because we might start a session in the "Ask AI" state, and then switch to the "Search" state
    // In this scenario we don't have pre-existing autocomplete results to show, so we need to fetch them
    // Additionally, the query may change in the "Ask AI" state, so we need to update the results when we switch back to the "Search" state
  }, [searchOverlayOpen, updateAutocompleteResults, clearAutocompleteResults, isAskAIState])

  // For keyboard controls, we need to use a ref for the list elements that updates when the options change
  useEffect(() => {
    listElementsRef.current = listElementsRef.current.slice(
      0,
      generalOptionsWithUserInput.length + aiOptionsWithUserInput.length,
    )
  }, [generalOptionsWithUserInput, aiOptionsWithUserInput])

  // When loading, capture the last height of the suggestions list so we can use it for the loading div
  const previousSuggestionsListHeight = useMemo(() => {
    if (suggestionsListHeightRef.current?.clientHeight) {
      return suggestionsListHeightRef.current.clientHeight
    } else {
      return '250' // Default height that looks very close to 5 suggestions (in px)
    }
  }, [searchLoading])

  // When the user types in the search input, update the local query and fetch autocomplete results
  const handleSearchQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value
    setUrlSearchInputQuery(newQuery)
    setSelectedIndex(-1) // Reset selected index when query changes
    // We don't need to fetch autocomplete results when asking the AI
    if (!isAskAIState) {
      updateAutocompleteResults(newQuery)
    }
  }

  // When a general option is selected, execute the search and close the overlay since general search results are in a new page
  const generalSearchOptionOnSelect = (selectedOption: AutocompleteSearchHit) => {
    if (selectedOption.term) {
      executeGeneralSearch(
        router,
        currentVersion,
        selectedOption.term,
        debug,
        searchEventGroupId.current,
      )
      onClose()
    }
  }

  // When an AI option is selected, set the AI query and focus the input since ask AI results replace the suggestions
  const aiSearchOptionOnSelect = (selectedOption: AutocompleteSearchHit) => {
    if (selectedOption.term) {
      setIsAskAIState(true)
      setUrlSearchInputQuery(selectedOption.term)
      setAiQuery(selectedOption.term)
      inputRef.current?.focus()
    }
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
          }
        }
        setSelectedIndex(newIndex)
      }
    } else if (event.key === 'Enter') {
      // When AI Search is already open, ask subsequent queries
      if (isAskAIState && !aiSearchError) {
        if (isAskAIState && urlSearchInputQuery === aiQuery) {
          // User has typed same query and pressed enter. Do nothing
          return
        } else {
          event.preventDefault()
          return aiSearchOptionOnSelect({ term: urlSearchInputQuery } as AutocompleteSearchHit)
        }
      }

      event.preventDefault()

      // Nothing manually selected, so general search the typed suggestion
      if (selectedIndex === -1) {
        generalSearchOptionOnSelect({ term: urlSearchInputQuery } as AutocompleteSearchHit)
        return
      }

      if (
        combinedOptions.length > 0 &&
        selectedIndex >= 0 &&
        selectedIndex < combinedOptions.length
      ) {
        const selectedItem = combinedOptions[selectedIndex]
        if (selectedItem.group === 'general') {
          generalSearchOptionOnSelect(selectedItem.option)
        } else if (selectedItem.group === 'ai') {
          aiSearchOptionOnSelect(selectedItem.option)
        }
      }
    } else if (event.key === 'Escape') {
      event.preventDefault()
      onClose() // Close the input overlay when Escape is pressed
    }
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
          showDividers
          selectionVariant="single"
          className={styles.suggestionsList}
          ref={suggestionsListHeightRef}
        >
          {renderSearchGroups(
            t,
            autoCompleteSearchError ? userInputOptions : generalOptionsWithUserInput,
            aiSearchError ? [] : aiOptionsWithUserInput,
            generalSearchOptionOnSelect,
            aiSearchOptionOnSelect,
            selectedIndex,
            setSelectedIndex,
            listElementsRef,
          )}
        </ActionList>
        {/* Always show the AI Search UI error message when it is needed */}
        {aiSearchError && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <ActionList.GroupHeading
              as="h3"
              tabIndex={-1}
              aria-label={t('search.overlay.ai_suggestions_list_aria_label')}
            >
              <SparklesFillIcon className="mr-1" />
              {t('search.overlay.ai_autocomplete_list_heading')}
            </ActionList.GroupHeading>
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
        )}
        {/* Only show the autocomplete search UI error message in Dev */}
        {process.env.NODE_ENV === 'development' && autoCompleteSearchError && !aiSearchError && (
          <Banner
            tabIndex={0}
            className={styles.errorBanner}
            title={t('search.failure.autocomplete_title')}
            description={t('search.failure.description')}
            variant="info"
            aria-live="assertive"
            role="alert"
          />
        )}
      </>
    )
  } else if (isAskAIState) {
    OverlayContents = (
      <AskAIResults
        query={aiQuery}
        debug={debug}
        version={currentVersion}
        setAISearchError={() => {
          setAISearchError(true)
        }}
      />
    )
  } else if (searchLoading) {
    OverlayContents = (
      <Box
        role="status"
        className={styles.loadingContainer}
        sx={{
          height: `${previousSuggestionsListHeight}px`,
        }}
      >
        <Spinner />
      </Box>
    )
  } else {
    OverlayContents = (
      <ActionList
        aria-label={t('search.overlay.suggestions_list_aria_label')}
        showDividers
        selectionVariant="single"
        className={styles.suggestionsList}
        ref={suggestionsListHeightRef}
      >
        {renderSearchGroups(
          t,
          generalOptionsWithUserInput,
          aiOptionsWithUserInput,
          generalSearchOptionOnSelect,
          aiSearchOptionOnSelect,
          selectedIndex,
          setSelectedIndex,
          listElementsRef,
        )}
      </ActionList>
    )
  }

  const overlayHeadingId = 'overlay-heading'
  return (
    <>
      <div className={styles.overlayBackdrop} />
      <Overlay
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
      >
        <Header className={styles.header}>
          <TextInput
            className="width-full"
            data-testid="overlay-search-input"
            ref={inputRef}
            value={urlSearchInputQuery}
            onChange={handleSearchQueryChange}
            onKeyDown={handleKeyDown}
            leadingVisual={
              isAskAIState ? (
                <Stack justify="center">
                  <TextInput.Action
                    onClick={() => {
                      setIsAskAIState(false)
                    }}
                    icon={ChevronLeftIcon}
                    aria-label={t('search.overlay.return_to_search')}
                  />
                </Stack>
              ) : (
                <SearchIcon />
              )
            }
            aria-labelledby={overlayHeadingId}
            placeholder={t('search.input.placeholder')}
            trailingAction={
              <Stack
                justify="center"
                sx={{
                  minWidth: '34px',
                }}
              >
                <TextInput.Action
                  onClick={() => {
                    setUrlSearchInputQuery('')
                    setSelectedIndex(-1)
                    if (isAskAIState) {
                      setIsAskAIState(false)
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
                window.open('https://github.com/github/docs-team/discussions/4952', '_blank')
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

// Render the autocomplete suggestions with AI suggestions first, headings, and a divider between the two
function renderSearchGroups(
  t: any,
  generalOptionsWithUserInput: AutocompleteSearchHitWithUserQuery[],
  aiOptionsWithUserInput: AutocompleteSearchHitWithUserQuery[],
  generalAutocompleteOnSelect: (selectedOption: AutocompleteSearchHit) => void,
  aiAutocompleteOnSelect: (selectedOption: AutocompleteSearchHit) => void,
  selectedIndex: number,
  setSelectedIndex: (value: SetStateAction<number>) => void,
  listElementsRef: RefObject<Array<HTMLLIElement | null>>,
) {
  const groups = []

  if (generalOptionsWithUserInput.length) {
    groups.push(
      <ActionList.Group key="general" data-testid="general-autocomplete-suggestions">
        <ActionList.GroupHeading
          as="h3"
          tabIndex={-1}
          aria-label={t('search.overlay.general_suggestions_list_aria_label')}
        >
          {t('search.overlay.general_autocomplete_list_heading')}
        </ActionList.GroupHeading>
        {generalOptionsWithUserInput.map(
          (option: AutocompleteSearchHitWithUserQuery, index: number) => {
            const isActive = selectedIndex === index
            const item = (
              <ActionList.Item
                key={`general-${index}`}
                className={styles.searchSuggestion}
                onSelect={() => generalAutocompleteOnSelect(option)}
                onFocus={() => {
                  setSelectedIndex(index)
                }}
                active={isActive}
                tabIndex={-1}
                ref={(element) => {
                  if (listElementsRef.current) {
                    listElementsRef.current[index] = element
                  }
                }}
              >
                <ActionList.LeadingVisual aria-hidden>
                  <SearchIcon />
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
          },
        )}
      </ActionList.Group>,
    )
  }

  if (generalOptionsWithUserInput.length) {
    groups.push(<ActionList.Divider key="general-divider" />)
  }

  if (aiOptionsWithUserInput.length) {
    groups.push(
      <ActionList.Group key="ai" data-testid="ai-autocomplete-suggestions">
        <ActionList.GroupHeading
          as="h3"
          tabIndex={-1}
          aria-label={t('search.overlay.ai_suggestions_list_aria_label')}
        >
          <SparklesFillIcon className="mr-1" />
          {t('search.overlay.ai_autocomplete_list_heading')}
        </ActionList.GroupHeading>
        {aiOptionsWithUserInput.map((option: AutocompleteSearchHitWithUserQuery, index: number) => {
          // Since general search comes first, we need to add an offset for AI suggestions
          const indexWithOffset = generalOptionsWithUserInput.length + index
          const isActive = selectedIndex === indexWithOffset
          const item = (
            <ActionList.Item
              key={`ai-${indexWithOffset}`}
              className={styles.searchSuggestion}
              onSelect={() => aiAutocompleteOnSelect(option)}
              onFocus={() => {
                setSelectedIndex(indexWithOffset)
              }}
              active={isActive}
              tabIndex={-1}
              ref={(element) => {
                if (listElementsRef.current) {
                  listElementsRef.current[indexWithOffset] = element
                }
              }}
            >
              <ActionList.LeadingVisual aria-hidden>
                <SparklesFillIcon />
              </ActionList.LeadingVisual>
              {option.term}
              <ActionList.TrailingVisual
                aria-hidden
                sx={{
                  visibility: isActive ? 'visible' : 'hidden',
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
