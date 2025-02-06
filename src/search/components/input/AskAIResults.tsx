import { useEffect, useRef, useState } from 'react'
import { executeAISearch } from '../helpers/execute-search-actions'
import { useRouter } from 'next/router'
import { useTranslation } from '@/languages/components/useTranslation'
import { ActionList, IconButton, Spinner } from '@primer/react'
import { BookIcon, CheckIcon, CopyIcon, ThumbsdownIcon, ThumbsupIcon } from '@primer/octicons-react'
import { announce } from '@primer/live-region-element'
import useLocalStorageCache from '../hooks/useLocalStorageCache'
import { UnrenderedMarkdownContent } from '@/frame/components/ui/MarkdownContent/UnrenderedMarkdownContent'
import styles from './AskAIResults.module.scss'
import { fixIncompleteMarkdown } from '../helpers/fix-incomplete-markdown'
import useClipboard from '@/rest/components/useClipboard'
import { sendEvent, uuidv4 } from '@/events/components/events'
import { EventType } from '@/events/types'
import { generateAiSearchLinksJson } from '../helpers/ai-search-links-json'
import { ASK_AI_EVENT_GROUP } from '@/events/components/event-groups'

type AIQueryResultsProps = {
  query: string
  version: string
  debug: boolean
  setAISearchError: () => void
}

type Source = {
  url: string
  title: string
  index: string
}

export function AskAIResults({ query, version, debug, setAISearchError }: AIQueryResultsProps) {
  const router = useRouter()
  const { t } = useTranslation('search')
  const [message, setMessage] = useState('')
  const [sources, setSources] = useState<Source[]>([] as Source[])
  const [initialLoading, setInitialLoading] = useState(true)
  const [responseLoading, setResponseLoading] = useState(false)
  const eventGroupId = useRef<string>('')
  const disclaimerRef = useRef<HTMLDivElement>(null)
  // We cache up to 1000 queries, and expire them after 30 days
  const { getItem, setItem } = useLocalStorageCache<{
    query: string
    message: string
    sources: Source[]
  }>('ai-query-cache', 1000, 30)

  const [isCopied, setCopied] = useClipboard(message, { successDuration: 1400 })
  const [feedbackSelected, setFeedbackSelected] = useState<null | 'up' | 'down'>(null)

  // On query change, fetch the new results
  useEffect(() => {
    let isCancelled = false
    setMessage('')
    setSources([])
    setInitialLoading(true)
    setResponseLoading(true)
    eventGroupId.current = uuidv4()
    disclaimerRef.current?.focus()

    const cachedData = getItem(query)
    if (cachedData) {
      setMessage(cachedData.message)
      setSources(cachedData.sources)
      setInitialLoading(false)
      setResponseLoading(false)
      sendAISearchResultEvent(cachedData.sources, cachedData.message, eventGroupId.current)
      return
    }

    // Handler for streamed response from GPT
    async function fetchData() {
      let messageBuffer = ''
      let sourcesBuffer: Source[] = []
      try {
        const response = await executeAISearch(router, version, query, debug, eventGroupId.current)
        // Serve canned response. A question that cannot be answered was asked
        if (response.status === 400) {
          setInitialLoading(false)
          setResponseLoading(false)
          const cannedResponse = t('search.ai.unable_to_answer')
          setItem(query, { query, message: cannedResponse, sources: [] })
          return setMessage(cannedResponse)
        }
        if (!response.ok) {
          console.error(
            `Failed to fetch search results.\nStatus ${response.status}\n${response.statusText}`,
          )
          return setAISearchError()
        }
        if (!response.body) {
          console.error(`ReadableStream not supported in this browser`)
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
              } catch (e) {
                console.error('Failed to parse JSON:', e, 'Line:', line)
                continue
              }

              if (parsedLine.chunkType === 'SOURCES') {
                if (!isCancelled) {
                  sourcesBuffer = sourcesBuffer.concat(parsedLine.sources)
                  setSources(parsedLine.sources)
                }
              } else if (parsedLine.chunkType === 'MESSAGE_CHUNK') {
                if (!isCancelled) {
                  messageBuffer += parsedLine.text
                  setMessage(messageBuffer)
                }
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
          setItem(query, { query, message: messageBuffer, sources: sourcesBuffer })
          setInitialLoading(false)
          setResponseLoading(false)
          sendAISearchResultEvent(sourcesBuffer, messageBuffer, eventGroupId.current)
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
      {/* Hidden status message for screen readers */}
      <span role="status" aria-live="polite" className={styles.displayForScreenReader}>
        {initialLoading || responseLoading
          ? t('search.ai.loading_status_message')
          : t('search.ai.done_loading_status_message')}
      </span>
      {initialLoading ? (
        <div className={styles.loadingContainer} role="status">
          <Spinner />
        </div>
      ) : (
        <article aria-busy={responseLoading} aria-live="polite">
          <span ref={disclaimerRef} className={styles.disclaimerText}>
            {t('search.ai.disclaimer')}
          </span>
          <UnrenderedMarkdownContent
            className={styles.markdownBodyOverrides}
            eventGroupKey={ASK_AI_EVENT_GROUP}
            eventGroupId={eventGroupId.current}
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
                eventGroupId: eventGroupId.current,
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
                eventGroupId: eventGroupId.current,
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
                eventGroupId: eventGroupId.current,
              })
            }}
          ></IconButton>
        </div>
      ) : null}
      {sources && sources.length > 0 ? (
        <>
          <ActionList.Divider aria-hidden="true" />
          <ActionList className={styles.referencesList}>
            <ActionList.Group>
              <ActionList.GroupHeading
                as="h2"
                aria-label={t('search.ai.references')}
                className={styles.referencesTitle}
              >
                {t('search.ai.references')}
              </ActionList.GroupHeading>
              {sources.map((source, index) => (
                <ActionList.LinkItem
                  key={index}
                  target="_blank"
                  href={`https://docs.github.com${source.index}`}
                  data-group-key={ASK_AI_EVENT_GROUP}
                  data-group-id={eventGroupId.current}
                >
                  <ActionList.LeadingVisual aria-hidden="true">
                    <BookIcon />
                  </ActionList.LeadingVisual>
                  {source.title}
                </ActionList.LinkItem>
              ))}
            </ActionList.Group>
          </ActionList>
        </>
      ) : null}
    </div>
  )
}

function sendAISearchResultEvent(
  sources: Array<{ url: string }>,
  message: string,
  eventGroupId: string,
) {
  let searchResultLinksJson = '[]'
  try {
    searchResultLinksJson = generateAiSearchLinksJson(sources, message)
  } catch (e) {
    console.error('Failed to generate search result links JSON:', e)
  }
  sendEvent({
    type: EventType.aiSearchResult,
    // TODO: Remove PII so we can include the actual data
    ai_search_result_query: 'REDACTED',
    ai_search_result_response: 'REDACTED',
    ai_search_result_links_json: searchResultLinksJson,
    eventGroupKey: ASK_AI_EVENT_GROUP,
    eventGroupId: eventGroupId,
  })
}
