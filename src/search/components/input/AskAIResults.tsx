import { useEffect, useRef, useState } from 'react'
import { uniqBy } from 'lodash-es'
import { executeAISearch } from '../helpers/execute-search-actions'
import { useRouter } from 'next/router'
import { useTranslation } from '@/languages/components/useTranslation'
import { ActionList, IconButton, Spinner } from '@primer/react'
import {
  CheckIcon,
  CopilotIcon,
  FileIcon,
  ShareIcon,
  ThumbsdownIcon,
  ThumbsupIcon,
} from '@primer/octicons-react'
import { announce } from '@primer/live-region-element'
import { useAISearchLocalStorageCache } from '../hooks/useAISearchLocalStorageCache'
import { UnrenderedMarkdownContent } from '@/frame/components/ui/MarkdownContent/UnrenderedMarkdownContent'
import styles from './AskAIResults.module.scss'
import { fixIncompleteMarkdown } from '../helpers/fix-incomplete-markdown'
import useClipboard from '@/rest/components/useClipboard'
import { sendEvent, uuidv4 } from '@/events/components/events'
import { EventType } from '@/events/types'
import { generateAISearchLinksJson } from '../helpers/ai-search-links-json'
import { ASK_AI_EVENT_GROUP } from '@/events/components/event-groups'
import { useCTAPopoverContext } from '@/frame/components/context/CTAContext'

import type { AIReference } from '../types'

type AIQueryResultsProps = {
  query: string
  version: string
  debug: boolean
  setAISearchError: (isError?: boolean) => void
  references: AIReference[]
  setReferences: (references: AIReference[]) => void
  referencesIndexOffset: number
  referenceOnSelect: (url: string) => void
  selectedIndex: number
  askAIEventGroupId: React.MutableRefObject<string>
  aiCouldNotAnswer: boolean
  setAICouldNotAnswer: (aiCouldNotAnswer: boolean) => void
  listElementsRef: React.RefObject<Array<HTMLLIElement | null>>
}

type AISearchResultEventParams = {
  sources: Array<{ url: string }>
  message: string
  eventGroupId: string
  couldNotAnswer?: boolean
  status: number
  connectedEventId?: string
}

const MAX_REFERENCES_TO_SHOW = 5

export function AskAIResults({
  query,
  version,
  debug,
  setAISearchError,
  references,
  setReferences,
  referencesIndexOffset,
  referenceOnSelect,
  selectedIndex,
  askAIEventGroupId,
  aiCouldNotAnswer,
  setAICouldNotAnswer,
  listElementsRef,
}: AIQueryResultsProps) {
  const router = useRouter()
  const { t } = useTranslation('search')
  const [message, setMessage] = useState('')
  const [initialLoading, setInitialLoading] = useState(true)
  const [responseLoading, setResponseLoading] = useState(false)
  const [announcement, setAnnouncement] = useState<string>('')
  const disclaimerRef = useRef<HTMLDivElement>(null)
  // We cache up to 1000 queries, and expire them after 30 days
  const { getItem, setItem } = useAISearchLocalStorageCache<{
    query: string
    message: string
    sources: AIReference[]
    aiCouldNotAnswer: boolean
    connectedEventId?: string
  }>('ai-query-cache', 1000, 7)
  const { isOpen: isCTAOpen, permanentDismiss: permanentlyDismissCTA } = useCTAPopoverContext()

  let copyUrl = ``
  if (window?.location?.href) {
    // Get base path from current URL
    const url = new URL(window.location.href)
    copyUrl = `${url.origin}/?search-overlay-open=true&search-overlay-ask-ai=true&search-overlay-input=${encodeURIComponent(query)}`
  }

  const [isCopied, setCopied] = useClipboard(copyUrl, { successDuration: 1399 })
  const [feedbackSelected, setFeedbackSelected] = useState<null | 'up' | 'down'>(null)

  const [conversationId, setConversationId] = useState<string>('')

  const handleAICannotAnswer = (
    passedConversationId?: string,
    statusCode = 400,
    uiMessage = t('search.ai.responses.unable_to_answer'),
  ) => {
    setInitialLoading(false)
    setResponseLoading(false)
    setAICouldNotAnswer(true)
    sendAISearchResultEvent({
      sources: [],
      message: uiMessage,
      eventGroupId: askAIEventGroupId.current,
      couldNotAnswer: true,
      status: statusCode,
      connectedEventId: passedConversationId || conversationId,
    })
    setMessage(uiMessage)
    setAnnouncement(uiMessage)
    setReferences([])
    setItem(
      query,
      {
        query,
        message: uiMessage,
        sources: [],
        aiCouldNotAnswer: true,
        connectedEventId: passedConversationId || conversationId,
      },
      version,
      router.locale || 'en',
    )
  }

  // On query change, fetch the new results
  useEffect(() => {
    // If we open this window directly (like from a URL), we need to generate a new event group ID
    if (!askAIEventGroupId.current) {
      askAIEventGroupId.current = uuidv4()
    }
    let isCancelled = false
    setMessage('')
    setAnnouncement('')
    setReferences([])
    setAICouldNotAnswer(false)
    setInitialLoading(true)
    setResponseLoading(true)
    disclaimerRef.current?.focus()

    // We permanently dismiss the CTA after performing an AI Search because the
    // user has tried it and doesn't require additional CTA prompting to try it
    if (isCTAOpen) {
      permanentlyDismissCTA()
    }

    const cachedData = getItem(query, version, router.locale || 'en')
    if (cachedData) {
      setMessage(cachedData.message)
      setReferences(cachedData.sources)
      setConversationId(cachedData.connectedEventId || '')
      setAICouldNotAnswer(cachedData.aiCouldNotAnswer || false)
      setInitialLoading(false)
      setResponseLoading(false)

      sendAISearchResultEvent({
        sources: cachedData.sources,
        message: cachedData.message,
        eventGroupId: askAIEventGroupId.current,
        couldNotAnswer: cachedData.aiCouldNotAnswer,
        status: cachedData.aiCouldNotAnswer ? 400 : 200,
        connectedEventId: cachedData.connectedEventId,
      })

      setTimeout(() => {
        setAnnouncement(cachedData.message)
      }, 1500)
      return
    }

    // Handler for streamed response from GPT
    async function fetchData() {
      let messageBuffer = ''
      let sourcesBuffer: AIReference[] = []
      let conversationIdBuffer = ''

      try {
        const response = await executeAISearch(version, query, debug)
        if (!response.ok) {
          // If there is JSON and the `upstreamStatus` key, the error is from the upstream sever (CSE)
          let responseJson
          try {
            responseJson = await response.json()
          } catch (error) {
            console.error('Failed to parse JSON:', error)
          }
          const upstreamStatus = responseJson?.upstreamStatus
          // If there is no upstream status, the error is either on our end or a 500 from CSE, so we can show the error
          if (!upstreamStatus) {
            console.error(
              `Failed to fetch search results.\nStatus ${response.status}\n${response.statusText}`,
            )
            sendAISearchResultEvent({
              sources: [],
              message: '',
              eventGroupId: askAIEventGroupId.current,
              couldNotAnswer: false,
              status: response.status,
            })
            return setAISearchError()
            // Query invalid - either sensitive question or spam
          } else if (upstreamStatus === 400 || upstreamStatus === 422) {
            return handleAICannotAnswer('', upstreamStatus, t('search.ai.responses.invalid_query'))
            // Query too large
          } else if (upstreamStatus === 413) {
            return handleAICannotAnswer(
              '',
              upstreamStatus,
              t('search.ai.responses.query_too_large'),
            )
          } else if (upstreamStatus === 429) {
            return handleAICannotAnswer(
              '',
              upstreamStatus,
              t('search.ai.responses.asked_too_many_times'),
            )
          }
        } else {
          setAISearchError(false)
        }
        if (!response.body) {
          console.error(`ReadableStream not supported in this browser`)
          sendAISearchResultEvent({
            sources: [],
            message: '',
            eventGroupId: askAIEventGroupId.current,
            couldNotAnswer: false,
            status: response.status,
          })
          return setAISearchError()
        }

        const decoder = new TextDecoder('utf-8')
        const reader = response.body.getReader()
        let done = false
        let leftover = '' // <= carry‑over buffer
        setInitialLoading(false)

        const processLine = (parsedLine: any) => {
          switch (parsedLine.chunkType) {
            // A conversation ID will still be sent when a question cannot be answered
            case 'CONVERSATION_ID':
              conversationIdBuffer = parsedLine.conversation_id
              setConversationId(parsedLine.conversation_id)
              break

            case 'NO_CONTENT_SIGNAL':
              // Serve canned response. A question that cannot be answered was asked
              handleAICannotAnswer(conversationIdBuffer, 200)
              break

            case 'SOURCES':
              if (!isCancelled) {
                sourcesBuffer = uniqBy(
                  sourcesBuffer.concat(parsedLine.sources as AIReference[]),
                  'url',
                )
                setReferences(sourcesBuffer)
              }
              break

            case 'MESSAGE_CHUNK':
              if (!isCancelled) {
                messageBuffer += parsedLine.text
                setMessage(messageBuffer)
              }
              break

            case 'INPUT_CONTENT_FILTER':
              // Serve canned response. A spam question was asked
              handleAICannotAnswer(
                conversationIdBuffer,
                200,
                t('search.ai.responses.invalid_query'),
              )
              break
          }

          if (!isCancelled) setAnnouncement('Copilot Response Loading...')
        }

        while (!done && !isCancelled) {
          const { value, done: readerDone } = await reader.read()
          done = readerDone

          // The sources JSON chunk may be sent in multiple parts, so we need to decode it with a leftover buffer so that it can be parsed all at once
          // So when we say "incomplete" or "leftover" we mean that the JSON is not complete yet, not that the message is incomplete
          if (value) {
            // 1 append this chunk's text to whatever was left over
            leftover += decoder.decode(value, { stream: true })

            // 2 split on newline
            const lines = leftover.split('\n')

            // 3 keep the *last* item (maybe incomplete) for next round
            leftover = lines.pop() ?? ''

            // 4 parse all complete lines
            for (const raw of lines) {
              if (!raw.trim()) continue

              let parsedLine: any
              try {
                parsedLine = JSON.parse(raw)
                if (parsedLine?.errors) {
                  sendAISearchResultEvent({
                    sources: [],
                    message: JSON.stringify(parsedLine.errors),
                    eventGroupId: askAIEventGroupId.current,
                    couldNotAnswer: false,
                    status: 500,
                  })
                  setAISearchError()
                  return
                }
              } catch (err) {
                console.warn('Failed to parse JSON line:', raw, err)
                continue
              }

              processLine(parsedLine)
            }
          }
        }

        // 5 flush whatever remains after the stream ends
        if (!isCancelled && leftover.trim()) {
          try {
            const tail = JSON.parse(leftover)
            processLine(tail)
          } catch (err) {
            console.warn('Failed to parse tail JSON:', leftover, err)
          }
        }
      } catch (error: any) {
        if (!isCancelled) {
          console.error('Failed to fetch search results:', error)
          setAISearchError()
        }
      } finally {
        if (!isCancelled && messageBuffer) {
          setItem(
            query,
            {
              query,
              message: messageBuffer,
              sources: sourcesBuffer,
              aiCouldNotAnswer: false,
              connectedEventId: conversationIdBuffer,
            },
            version,
            router.locale || 'en',
          )
          setInitialLoading(false)
          setResponseLoading(false)
          sendAISearchResultEvent({
            sources: sourcesBuffer,
            message: messageBuffer,
            eventGroupId: askAIEventGroupId.current,
            couldNotAnswer: false,
            status: 200,
            connectedEventId: conversationIdBuffer,
          })
        }
      }
    }

    fetchData()

    return () => {
      isCancelled = true
    }
  }, [query])

  return (
    <div id="ask-ai-result-container" role="region" className={styles.container}>
      {!aiCouldNotAnswer && references && references.length > 0 ? (
        <>
          <ActionList className={styles.referencesList} showDividers>
            <ActionList.Group>
              <ActionList.GroupHeading
                as="h3"
                aria-label={t('search.ai.references')}
                className={styles.referencesTitle}
              >
                {t('search.ai.references')}
              </ActionList.GroupHeading>
              {references
                .map((source, index) => {
                  if (index >= MAX_REFERENCES_TO_SHOW) {
                    return null
                  }
                  const refIndex = index + referencesIndexOffset
                  return (
                    <ActionList.Item
                      sx={{
                        marginLeft: '0px',
                      }}
                      key={`reference-${index}`}
                      id={`search-option-reference-${index + referencesIndexOffset}`}
                      tabIndex={-1}
                      onSelect={() => {
                        referenceOnSelect(source.url)
                      }}
                      active={refIndex === selectedIndex}
                      ref={(element) => {
                        if (listElementsRef.current) {
                          listElementsRef.current[refIndex] = element
                        }
                      }}
                    >
                      <ActionList.LeadingVisual aria-hidden="true">
                        <FileIcon />
                      </ActionList.LeadingVisual>
                      {source.title}
                    </ActionList.Item>
                  )
                })
                .filter(Boolean)}
            </ActionList.Group>
            <ActionList.Divider aria-hidden="true" />
          </ActionList>
        </>
      ) : null}
      <ActionList.GroupHeading
        key="ai-heading"
        as="h3"
        tabIndex={-1}
        aria-label={t('search.overlay.ai_suggestions_list_aria_label')}
      >
        <CopilotIcon className="mr-1" />
        {t('search.overlay.ai_autocomplete_list_heading')}
      </ActionList.GroupHeading>
      {initialLoading ? (
        <div className={styles.loadingContainer} role="status">
          <Spinner />
        </div>
      ) : (
        <article aria-busy={responseLoading} aria-live="assertive">
          {!aiCouldNotAnswer && message !== '' ? (
            <span ref={disclaimerRef} className={styles.disclaimerText}>
              <span dangerouslySetInnerHTML={{ __html: t('search.ai.disclaimer') }} />
            </span>
          ) : null}
          <UnrenderedMarkdownContent
            className={styles.markdownBodyOverrides}
            eventGroupKey={ASK_AI_EVENT_GROUP}
            eventGroupId={askAIEventGroupId.current}
          >
            {responseLoading ? fixIncompleteMarkdown(message) : message}
          </UnrenderedMarkdownContent>
        </article>
      )}
      {!responseLoading ? (
        <div className={styles.postAnswerWidgets}>
          <IconButton
            icon={ThumbsupIcon}
            className={'btn-octicon'}
            aria-label={t('ai.thumbs_up')}
            sx={{
              border: 'none',
              backgroundColor: feedbackSelected === 'up' ? '' : 'unset',
              boxShadow: 'unset',
              color: feedbackSelected === 'up' ? 'var(--fgColor-accent) !important;' : '',
            }}
            onClick={() => {
              setFeedbackSelected('up')
              announce(t('ai.thumbs_announcement'))
              sendEvent({
                type: EventType.survey,
                survey_vote: true,
                eventGroupKey: ASK_AI_EVENT_GROUP,
                eventGroupId: askAIEventGroupId.current,
                survey_connected_event_id: conversationId,
              })
            }}
          ></IconButton>
          <IconButton
            icon={ThumbsdownIcon}
            className={'btn-octicon'}
            aria-label={t('ai.thumbs_down')}
            sx={{
              border: 'none',
              backgroundColor: feedbackSelected === 'down' ? '' : 'unset',
              boxShadow: 'unset',
              color: feedbackSelected === 'down' ? 'var(--fgColor-accent) !important;' : '',
            }}
            onClick={() => {
              setFeedbackSelected('down')
              announce(t('ai.thumbs_announcement'))
              sendEvent({
                type: EventType.survey,
                survey_vote: false,
                eventGroupKey: ASK_AI_EVENT_GROUP,
                eventGroupId: askAIEventGroupId.current,
                survey_connected_event_id: conversationId,
              })
            }}
          ></IconButton>
          <IconButton
            sx={{
              border: 'none',
              backgroundColor: 'unset',
              boxShadow: 'unset',
              color: isCopied ? 'var(--fgColor-accent) !important;' : '',
            }}
            icon={isCopied ? CheckIcon : ShareIcon}
            className="btn-octicon"
            aria-label={
              isCopied ? t('search.ai.share_copied_announcement') : t('search.ai.share_answer')
            }
            onClick={() => {
              setCopied()
              announce(t('search.ai.share_copied_announcement'))
              sendEvent({
                type: EventType.clipboard,
                clipboard_operation: 'share',
                eventGroupKey: ASK_AI_EVENT_GROUP,
                eventGroupId: askAIEventGroupId.current,
              })
            }}
          ></IconButton>
        </div>
      ) : null}
      <div
        aria-live="assertive"
        style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0',
        }}
      >
        {announcement}
      </div>
    </div>
  )
}

function sendAISearchResultEvent({
  sources,
  message,
  eventGroupId,
  couldNotAnswer = false,
  status,
  connectedEventId,
}: AISearchResultEventParams) {
  let searchResultLinksJson = '[]'
  try {
    searchResultLinksJson = generateAISearchLinksJson(sources, message)
  } catch (e) {
    console.error('Failed to generate search result links JSON:', e)
  }
  sendEvent({
    type: EventType.aiSearchResult,
    ai_search_result_links_json: searchResultLinksJson,
    ai_search_result_provided_answer: couldNotAnswer ? false : true,
    ai_search_result_response_status: status,
    ai_search_result_connected_event_id: connectedEventId,
    eventGroupKey: ASK_AI_EVENT_GROUP,
    eventGroupId: eventGroupId,
  })
}
