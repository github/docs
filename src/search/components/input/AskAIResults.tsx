import React, { useEffect, useRef, useState } from 'react'
import { uniqBy } from 'lodash-es'
import { executeAISearch } from '../helpers/execute-search-actions'
import { useRouter } from 'next/router'
import { useTranslation } from '@/languages/components/useTranslation'
import { IconButton, Spinner } from '@primer/react'
import {
  CheckIcon,
  CopilotIcon,
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

import type { AIReference } from '../types'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'

type AIQueryResultsProps = {
  query: string
  version: string
  debug: boolean
  setAISearchError: (isError?: boolean) => void
  setReferences: (references: AIReference[]) => void
  askAIEventGroupId: React.MutableRefObject<string>
  aiCouldNotAnswer: boolean
  setAICouldNotAnswer: (aiCouldNotAnswer: boolean) => void
}

type AISearchResultEventParams = {
  sources: Array<{ url: string }>
  message: string
  eventGroupId: string
  couldNotAnswer?: boolean
  status: number
  connectedEventId?: string
}

export function AskAIResults({
  query,
  version,
  debug,
  setAISearchError,
  setReferences,
  askAIEventGroupId,
  aiCouldNotAnswer,
  setAICouldNotAnswer,
}: AIQueryResultsProps) {
  const router = useRouter()
  const { t } = useTranslation('search')
  const [message, setMessage] = useState('')
  const [initialLoading, setInitialLoading] = useState(true)
  const [responseLoading, setResponseLoading] = useState(false)
  const [announcement, setAnnouncement] = useState<string>('')
  const disclaimerRef = useRef<HTMLDivElement>(null)
  // Cache up to 1000 queries for 7 days.
  const { getItem, setItem } = useAISearchLocalStorageCache<{
    query: string
    message: string
    sources: AIReference[]
    aiCouldNotAnswer: boolean
    connectedEventId?: string
  }>('ai-query-cache', 1000, 7)

  let copyUrl = ``
  if (window?.location?.href) {
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
    shouldCache = true,
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
    if (shouldCache) {
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
  }

  useEffect(() => {
    // A direct URL open has no prior Ask AI event group, so create one before reporting.
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

    const cachedData = getItem(query, version, router.locale || 'en')
    // Skip stored rate limit responses so the user can retry as the message asks.
    const isCachedRateLimit =
      cachedData?.aiCouldNotAnswer &&
      cachedData.message === t('search.ai.responses.asked_too_many_times')
    if (cachedData && !isCachedRateLimit) {
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

    async function fetchData() {
      let messageBuffer = ''
      let sourcesBuffer: AIReference[] = []
      let conversationIdBuffer = ''
      // Errored or dropped streams leave a truncated answer that must not be cached as complete.
      let streamSucceeded = false

      try {
        const response = await executeAISearch(version, query, debug)
        if (!response.ok) {
          // Classified non-OK responses include upstreamStatus from the proxy or upstream.
          let responseJson
          try {
            responseJson = await response.json()
          } catch (error) {
            console.error('Failed to parse JSON:', error)
          }
          const upstreamStatus = responseJson?.upstreamStatus
          // Missing upstreamStatus leaves this as an unclassified non-OK response.
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
            // Treat filtered or invalid queries as cannot-answer responses.
          } else if (upstreamStatus === 400 || upstreamStatus === 422) {
            return handleAICannotAnswer('', upstreamStatus, t('search.ai.responses.invalid_query'))
            // Treat oversized queries as cannot-answer responses.
          } else if (upstreamStatus === 413) {
            return handleAICannotAnswer(
              '',
              upstreamStatus,
              t('search.ai.responses.query_too_large'),
            )
          } else if (upstreamStatus === 429) {
            // Rate limits clear in minutes, so a cached copy would block the retry the message asks for.
            return handleAICannotAnswer(
              '',
              upstreamStatus,
              t('search.ai.responses.asked_too_many_times'),
              false,
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
        let leftover = ''
        setInitialLoading(false)

        type ParsedLine = {
          chunkType?: string
          conversation_id?: string
          sources?: AIReference[]
          text?: string
          errors?: unknown
        }

        const processLine = (parsedLine: ParsedLine) => {
          switch (parsedLine.chunkType) {
            // The stream sends a conversation ID even when the answer is a canned response.
            case 'CONVERSATION_ID':
              conversationIdBuffer = parsedLine.conversation_id ?? ''
              setConversationId(parsedLine.conversation_id ?? '')
              break

            case 'NO_CONTENT_SIGNAL':
              // NO_CONTENT_SIGNAL asks the UI to show the cannot-answer response.
              handleAICannotAnswer(conversationIdBuffer, 200)
              break

            case 'SOURCES':
              // Buffer until streaming ends, so rows with no DOM never join the arrow order.
              if (!isCancelled) {
                sourcesBuffer = uniqBy(
                  sourcesBuffer.concat((parsedLine.sources ?? []) as AIReference[]),
                  'url',
                )
              }
              break

            case 'MESSAGE_CHUNK':
              if (!isCancelled) {
                messageBuffer += parsedLine.text ?? ''
                setMessage(messageBuffer)
              }
              break

            case 'INPUT_CONTENT_FILTER':
              // INPUT_CONTENT_FILTER asks the UI to show the invalid-query response.
              handleAICannotAnswer(
                conversationIdBuffer,
                200,
                t('search.ai.responses.invalid_query'),
              )
              break
          }

          if (!isCancelled) setAnnouncement(t('search.ai.loading_status_message'))
        }

        while (!done && !isCancelled) {
          const { value, done: readerDone } = await reader.read()
          done = readerDone

          // Buffer newline-delimited JSON until a whole record arrives; leftover means JSON.
          if (value) {
            leftover += decoder.decode(value, { stream: true })

            const lines = leftover.split('\n')

            // Keep the last item for the next chunk when it is a partial JSON record.
            leftover = lines.pop() ?? ''

            for (const raw of lines) {
              if (!raw.trim()) continue

              let parsedLine: ParsedLine
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

        // Flush whatever remains after the stream ends.
        if (!isCancelled && leftover.trim()) {
          try {
            const tail = JSON.parse(leftover)
            processLine(tail)
          } catch (err) {
            console.warn('Failed to parse tail JSON:', leftover, err)
          }
        }
        streamSucceeded = true
      } catch (error: unknown) {
        if (!isCancelled) {
          console.error('Failed to fetch search results:', error)
          setAISearchError()
        }
      } finally {
        if (!isCancelled && streamSucceeded && messageBuffer) {
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
          // Clear rather than announce "done": the live article is still reading the answer.
          setAnnouncement('')
          setReferences(sourcesBuffer)
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

    // The spinner is aria-hidden to keep the listbox valid, so loading is announced here.
    setAnnouncement(t('search.ai.loading_status_message'))
    fetchData()

    return () => {
      isCancelled = true
    }
  }, [query])

  return (
    <div
      id="ask-ai-result-container"
      role="region"
      aria-labelledby="ask-ai-answer-heading"
      className={styles.container}
    >
      {/* A real heading: the answer sits outside the listbox, where headings are allowed. */}
      <h3 id="ask-ai-answer-heading" className={styles.answerHeading}>
        {t('search.overlay.ai_autocomplete_list_heading')}
      </h3>
      {initialLoading ? (
        <div className={styles.loadingContainer} aria-hidden="true">
          <Spinner />
        </div>
      ) : (
        <article aria-busy={responseLoading} aria-live="assertive">
          <div className={styles.answerRow}>
            <CopilotIcon size={24} className={styles.answerGlyph} aria-hidden />
            <UnrenderedMarkdownContent
              className={styles.markdownBodyOverrides}
              eventGroupKey={ASK_AI_EVENT_GROUP}
              eventGroupId={askAIEventGroupId.current}
            >
              {responseLoading ? fixIncompleteMarkdown(message) : message}
            </UnrenderedMarkdownContent>
          </div>
          {!aiCouldNotAnswer && message !== '' ? (
            <span ref={disclaimerRef} className={styles.disclaimerText}>
              <RenderedHTML as="span" html={t('search.ai.disclaimer')} />
            </span>
          ) : null}
        </article>
      )}
      {!responseLoading ? (
        <div className={styles.postAnswerWidgets}>
          <IconButton
            icon={ThumbsupIcon}
            className={`btn-octicon ${styles.thumbsUpButton} ${feedbackSelected === 'up' ? styles.selected : ''}`}
            aria-label={t('ai.thumbs_up')}
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
            className={`btn-octicon ${styles.thumbsDownButton} ${feedbackSelected === 'down' ? styles.selected : ''}`}
            aria-label={t('ai.thumbs_down')}
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
            icon={isCopied ? CheckIcon : ShareIcon}
            className={`btn-octicon ${styles.shareButton} ${isCopied ? styles.copied : ''}`}
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
      <div aria-live="assertive" className={styles.displayForScreenReader}>
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
    eventGroupId,
  })
}
