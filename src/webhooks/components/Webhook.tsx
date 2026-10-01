import { ActionMenu } from '@primer/react-brand'
import { onActionMenuItemKeyDownCapture } from '@/frame/components/lib/action-menu'
// Webhook keeps the error callout on Primer React because Brand lacks Flash, Banner, or Alert.
import { Flash } from '@primer/react'
import { useState, useEffect, useCallback } from 'react'
import useSWR from 'swr'
import { slug } from 'github-slugger'
import cx from 'clsx'
import { announce } from '@primer/live-region-element'

import { useVersion } from '@/versions/components/useVersion'
import { HeadingLink } from '@/frame/components/article/HeadingLink'
import { useTranslation } from '@/languages/components/useTranslation'
import type { WebhookAction, WebhookData } from './types'
import { ParameterTable } from '@/automated-pipelines/components/parameter-table/ParameterTable'
import { HighlightedCode } from '@/frame/components/HighlightedCode'

import styles from './WebhookPayloadExample.module.scss'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'

type Props = {
  webhook: WebhookAction
}

async function webhookFetcher(url: string) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`${response.status} on ${url}`)
  }

  return response.json()
}

export function Webhook({ webhook }: Props) {
  const version = useVersion()
  const { t, tObject } = useTranslation('webhooks')

  // Map schema availability values to UI copy instead of translating source values directly.
  const rephraseAvailability = tObject('rephrase_availability')

  const [clickedBodyParameterName, setClickedBodyParameterName] = useState<undefined | string>('')
  const [selectedWebhookActionType, setSelectedWebhookActionType] = useState('')
  const [selectedActionTypeIndex, setSelectedActionTypeIndex] = useState(0)
  // Tracks the first uncached interaction so data-load effects can announce it once.
  const [pendingAnnouncement, setPendingAnnouncement] = useState('')

  const webhookSlug = slug(webhook.data.category)
  const webhookFetchUrl = `/api/webhooks/v1?${new URLSearchParams({
    category: webhook.data.category,
    version: version.currentVersion,
  })}`

  // Fetch full webhook data after the action type changes or a user expands nested parameters.
  const { data, error } = useSWR<WebhookData, Error>(
    clickedBodyParameterName || selectedWebhookActionType ? webhookFetchUrl : null,
    webhookFetcher,
    {
      revalidateOnFocus: false,
    },
  )

  // Example: webhook-events-and-payloads?actionType=published#package opens the published package payload.
  useEffect(() => {
    const url = new URL(location.href)
    const actionType = url.searchParams.get('actionType')
    const hash = url.hash?.slice(1)
    if (actionType && hash && webhook.actionTypes.includes(actionType) && hash === webhookSlug) {
      setSelectedWebhookActionType(actionType)
      setSelectedActionTypeIndex(webhook.actionTypes.indexOf(actionType))
    }
  }, [])

  const buildAnnouncement = useCallback(
    (type: string, actionData: { descriptionHtml: string }) => {
      const tempEl = document.createElement('div')
      tempEl.innerHTML = actionData.descriptionHtml
      const description = tempEl.textContent?.trim() || ''
      return t('action_type_selected')
        .replace('{{ actionType }}', type)
        .replace('{{ description }}', description)
        .trim()
    },
    [t],
  )

  // Reset nested parameters, announce the selected action type, and keep the URL linkable.
  function handleActionTypeChange(type: string, index: number) {
    setClickedBodyParameterName('')
    setSelectedWebhookActionType(type)
    setSelectedActionTypeIndex(index)

    // Cached data can announce now; uncached data announces after SWR loads.
    if (data && data[type]) {
      // Compute the message eagerly to avoid stale data, then delay until VoiceOver finishes the menu.
      const message = buildAnnouncement(type, data[type])
      setTimeout(() => {
        announce(message, { politeness: 'assertive' })
      }, 150)
    } else {
      setPendingAnnouncement(type)
    }

    // Replace history directly so Next.js navigation does not make VoiceOver re-read the page title.
    const url = new URL(location.href)
    url.searchParams.set('actionType', type)
    url.hash = webhookSlug
    window.history.replaceState(window.history.state, '', url.toString())
  }

  function handleBodyParamExpansion(target: HTMLDetailsElement) {
    setClickedBodyParameterName(target.closest('details')?.dataset.nestedParamId)
  }

  const currentWebhookActionType = selectedWebhookActionType || webhook.data.action
  const currentWebhookAction = (data && data[currentWebhookActionType]) || webhook.data

  // Announce the first uncached selection after SWR loads; cached selections announce in the handler.
  useEffect(() => {
    if (!pendingAnnouncement || !data || !data[pendingAnnouncement]) return
    const type = pendingAnnouncement
    setPendingAnnouncement('')

    const message = buildAnnouncement(type, data[type])
    setTimeout(() => {
      announce(message, { politeness: 'assertive' })
    }, 150)
  }, [data, pendingAnnouncement, buildAnnouncement])

  return (
    <div>
      <HeadingLink as="h2" slug={webhookSlug}>
        {currentWebhookAction.category}
      </HeadingLink>
      <div>
        <RenderedHTML as="div" html={currentWebhookAction.summaryHtml} />
        <RenderedHTML
          as="h3"
          html={t('availability').replace('{{ WebhookName }}', currentWebhookAction.category)}
        />
        <ul>
          {currentWebhookAction.availability.map((availability) => {
            return (
              <li key={`availability-${availability}`}>
                {availability in rephraseAvailability
                  ? (rephraseAvailability[availability] as string)
                  : availability}
              </li>
            )
          })}
        </ul>
        <RenderedHTML
          as="h3"
          html={t('webhook_payload_object').replace(
            '{{ WebhookName }}',
            currentWebhookAction.category,
          )}
        />
        {error && (
          <Flash className="mb-5" variant="danger">
            <p>{t('action_type_switch_error')}</p>
            <p>
              <code className={`f6 ${styles.errorCode}`}>{error.toString()}</code>
            </p>
          </Flash>
        )}
        {webhook.actionTypes.length > 1 && (
          <div className="mb-4">
            <div className={`mb-3 ${styles.actionTypeMenu}`}>
              <ActionMenu
                selectionVariant="single"
                onSelect={(value) =>
                  handleActionTypeChange(webhook.actionTypes[Number(value)], Number(value))
                }
              >
                <ActionMenu.Button className="text-normal">
                  {t('action_type')}: <span className="text-bold">{currentWebhookActionType}</span>
                </ActionMenu.Button>
                <ActionMenu.Overlay aria-label={t('action_type')}>
                  {webhook.actionTypes.map((type, index) => (
                    <ActionMenu.Item
                      key={index}
                      value={String(index)}
                      selected={index === selectedActionTypeIndex}
                      onKeyDownCapture={onActionMenuItemKeyDownCapture}
                    >
                      {type}
                    </ActionMenu.Item>
                  ))}
                </ActionMenu.Overlay>
              </ActionMenu>
            </div>
          </div>
        )}
        <RenderedHTML
          as="div"
          className="mb-4 f5 color-fg-muted"
          html={currentWebhookAction.descriptionHtml}
        />
        <div>
          <ParameterTable
            slug={slug(`${currentWebhookAction.category}-${selectedWebhookActionType}`)}
            bodyParameters={currentWebhookAction.bodyParameters || []}
            bodyParamExpandCallback={handleBodyParamExpansion}
            clickedBodyParameterName={clickedBodyParameterName}
            variant="webhooks"
          />
        </div>
      </div>

      {webhook.data.payloadExample && (
        <>
          <h3>{t('webhook_payload_example')}</h3>
          <div className={cx(styles.payloadExample, 'border rounded-1 my-0')}>
            <HighlightedCode
              language="json"
              code={JSON.stringify(webhook.data.payloadExample, null, 2)}
            />
          </div>
        </>
      )}
    </div>
  )
}
