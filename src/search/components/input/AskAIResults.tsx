import { useEffect, useRef, useState } from 'react'
import { uniqBy } from 'lodash-es'
import { executeAISearch } from '../helpers/execute-search-actions'
import { useRouter } from 'next/router'
import { useTranslation } from '@/languages/components/useTranslation'
import { ActionList, IconButton, Spinner } from '@primer/react'
import { CheckIcon, CopyIcon, FileIcon, ThumbsdownIcon, ThumbsupIcon } from '@primer/octicons-react'
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

  const [isCopied, setCopied] = useClipboard(message, { successDuration: 1400 })
  const [feedbackSelected, setFeedbackSelected] = useState<null | 'up' | 'down'>(null)

  const [conversationId, setConversationId] = useState<string>('')

  const handleAICannotAnswer = (passedConversationId?: string) => {
    setInitialLoading(false)
    setResponseLoading(false)
    setAICouldNotAnswer(true)
    const cannedResponse = t('search.ai.unable_to_answer')
    sendAISearchResultEvent({
      sources: [],
      message: cannedResponse,
      eventGroupId: askAIEventGroupId.current,
      couldNotAnswer: true,
      status: 400,
      connectedEventId: passedConversationId || conversationId,
    })
    setMessage(cannedResponse)
    setAnnouncement(cannedResponse)
    setReferences([])
    setItem(
      query,
      {
        query,
        message: cannedResponse,
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
        const response = await executeAISearch(router, version, query, debug)
        if (!response.ok) {
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
        setInitialLoading(false)
        while (!done && !isCancelled) {
          const { value, done: readerDone } = await reader.read()
          done = readerDone
          if (value) {
            const chunkStr = decoder.decode(value, { stream: true })
            const chunkLines = chunkStr.split('\n').filter((line) => line.trim() !== '')
            for (const line of chunkLines) {
              let parsedLine
              try {
                parsedLine = JSON.parse(line)
                // If midstream there is an error, like a connection reset / lost, our backend will send an error JSON
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
              } catch (e) {
                console.error(
                  'Failed to parse JSON:',
                  e,
                  'Line:',
                  line,
                  'Typeof line: ',
                  typeof line,
                )
                continue
              }

              // A conversation ID will still be sent when a question cannot be answered
              if (parsedLine.chunkType === 'CONVERSATION_ID') {
                conversationIdBuffer = parsedLine.conversation_id
                setConversationId(parsedLine.conversation_id)
              } else if (parsedLine.chunkType === 'NO_CONTENT_SIGNAL') {
                // Serve canned response. A question that cannot be answered was asked
                handleAICannotAnswer(conversationIdBuffer)
              } else if (parsedLine.chunkType === 'SOURCES') {
                if (!isCancelled) {
                  sourcesBuffer = sourcesBuffer.concat(parsedLine.sources)
                  sourcesBuffer = uniqBy(sourcesBuffer, 'url')
                  setReferences(sourcesBuffer)
                }
              } else if (parsedLine.chunkType === 'MESSAGE_CHUNK') {
                if (!isCancelled) {
                  messageBuffer += parsedLine.text
                  setMessage(messageBuffer)
                }
              } else if (parsedLine.chunkType === 'INPUT_CONTENT_FILTER') {
                // Serve canned response. A spam question was asked
                handleAICannotAnswer(conversationIdBuffer)
              }
              if (!isCancelled) {
                setAnnouncement('Copilot Response Loading...')
              }
            }
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
    <div className={styles.container}>
      {initialLoading ? (
        <div className={styles.loadingContainer} role="status">
          <Spinner />
        </div>
      ) : (
        <article aria-busy={responseLoading} aria-live="assertive">
          {!aiCouldNotAnswer && message !== '' ? (
            <span ref={disclaimerRef} className={styles.disclaimerText}>
              {t('search.ai.disclaimer')}
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
            icon={isCopied ? CheckIcon : CopyIcon}
            className="btn-octicon"
            aria-label={t('ai.copy_answer')}
            onClick={() => {
              setCopied()
              announce(t('ai.copied_announcement'))
              sendEvent({
                type: EventType.clipboard,
                clipboard_operation: 'copy',
                eventGroupKey: ASK_AI_EVENT_GROUP,
                eventGroupId: askAIEventGroupId.current,
              })
            }}
          ></IconButton>
        </div>
      ) : null}
      {!aiCouldNotAnswer && references && references.length > 0 ? (
        <>
          <ActionList.Divider aria-hidden="true" />
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
                  return (
                    <ActionList.Item
                      sx={{
                        marginLeft: '0px',
                        paddingLeft: '0px',
                      }}
                      key={`reference-${index}`}
                      id={`search-option-reference-${index + referencesIndexOffset}`}
                      role="option"
                      tabIndex={-1}
                      onSelect={() => {
                        referenceOnSelect(source.url)
                      }}
                      active={index + referencesIndexOffset === selectedIndex}
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
          </ActionList>
        </>
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
