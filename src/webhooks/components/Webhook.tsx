import { ActionList, ActionMenu, Flash } from '@primer/react'
import { useState, useEffect, useCallback } from 'react'
import useSWR from 'swr'
import { slug } from 'github-slugger'
import cx from 'classnames'
import { announce } from '@primer/live-region-element'

import { useVersion } from '@/versions/components/useVersion'
import { HeadingLink } from '@/frame/components/article/HeadingLink'
import { useTranslation } from '@/languages/components/useTranslation'
import type { WebhookAction, WebhookData } from './types'
import { ParameterTable } from '@/automated-pipelines/components/parameter-table/ParameterTable'
import { HighlightedCode } from '@/frame/components/HighlightedCode'

import styles from './WebhookPayloadExample.module.scss'

type Props = {
  webhook: WebhookAction
}

// fetcher passed to useSWR() to get webhook data using the given URL
async function webhookFetcher(url: string) {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`${response.status} on ${url}`)
  }

  return response.json()
}

export function Webhook({ webhook }: Props) {
  // Get version for requests to switch webhook action type
  const version = useVersion()
  const { t, tObject } = useTranslation('webhooks')

  // Get more user friendly language for the different availability options in
  // the webhook schema (we can't change it directly in the schema).  Note that
  // we specifically don't want to translate these strings with useTranslation()
  // like we usually do with strings from data/ui.yml.
  const rephraseAvailability = tObject('rephrase_availability')

  // The param that was clicked so we can expand its property <details> element
  const [clickedBodyParameterName, setClickedBodyParameterName] = useState<undefined | string>('')
  // The selected webhook action type the user selects via a dropdown
  const [selectedWebhookActionType, setSelectedWebhookActionType] = useState('')
  // The index of the selected action type so we can highlight which one is selected
  // in the action type dropdown
  const [selectedActionTypeIndex, setSelectedActionTypeIndex] = useState(0)
  // Tracks whether we need to announce once data loads (first interaction only,
  // before SWR cache is populated).
  const [pendingAnnouncement, setPendingAnnouncement] = useState('')

  const webhookSlug = slug(webhook.data.category)
  const webhookFetchUrl = `/api/webhooks/v1?${new URLSearchParams({
    category: webhook.data.category,
    version: version.currentVersion,
  })}`

  // fires when the webhook action type changes or someone clicks on a nested
  // body param for the first time.  In either case, we now have all the data
  // for a webhook (i.e. all the data for each action type and all of their
  // nested parameters)
  const { data, error } = useSWR<WebhookData, Error>(
    clickedBodyParameterName || selectedWebhookActionType ? webhookFetchUrl : null,
    webhookFetcher,
    {
      revalidateOnFocus: false,
    },
  )

  // When you load the page we want to support linking to a specific webhook type
  // so this effect sets the webhook type if it's provided in the URL e.g.:
  //
  // webhook-events-and-payloads?actionType=published#package
  //
  // where the webhook is set in the hash (which is equal to webhookSlug) and
  // the webhook action type is passed in the actionType parameter.
  useEffect(() => {
    const url = new URL(location.href)
    const actionType = url.searchParams.get('actionType')
    const hash = url.hash?.slice(1)
    if (actionType && hash && webhook.actionTypes.includes(actionType) && hash === webhookSlug) {
      setSelectedWebhookActionType(actionType)
      setSelectedActionTypeIndex(webhook.actionTypes.indexOf(actionType))
    }
  }, [])

  // Build a plain-text announcement from the webhook action data.
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

  // callback for the action type dropdown -- sets the action type to the given
  // type, index is the index of the selected type so we can highlight it as
  // selected.
  //
  // Besides setting the action type state, we also want to:
  //
  // * clear the clicked body param so that no properties are expanded when we
  // re-render the webhook
  // * update the URL so people can link to a specific webhook action type
  function handleActionTypeChange(type: string, index: number) {
    setClickedBodyParameterName('')
    setSelectedWebhookActionType(type)
    setSelectedActionTypeIndex(index)

    // If SWR data is already cached, announce immediately. Otherwise, flag
    // the type so the effect can announce once data arrives.
    if (data && data[type]) {
      // Use setTimeout so the announcement fires after the ActionMenu closes
      // and VoiceOver finishes reading the button. Compute message eagerly to
      // avoid stale closures if data changes before the timeout fires.
      const message = buildAnnouncement(type, data[type])
      setTimeout(() => {
        announce(message, { politeness: 'assertive' })
      }, 150)
    } else {
      setPendingAnnouncement(type)
    }

    // Update the URL without triggering Next.js router navigation, which causes
    // VoiceOver to re-read the page title and swallow live-region announcements.
    const url = new URL(location.href)
    url.searchParams.set('actionType', type)
    url.hash = webhookSlug
    window.history.replaceState(window.history.state, '', url.toString())
  }

  // callback to trigger useSWR() hook after a nested property is clicked
  function handleBodyParamExpansion(target: HTMLDetailsElement) {
    setClickedBodyParameterName(target.closest('details')?.dataset.nestedParamId)
  }

  const currentWebhookActionType = selectedWebhookActionType || webhook.data.action
  const currentWebhookAction = (data && data[currentWebhookActionType]) || webhook.data

  // Announce content changes when data arrives for the first time (before SWR
  // cache is populated). Subsequent changes are announced directly in the handler.
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
        <div dangerouslySetInnerHTML={{ __html: currentWebhookAction.summaryHtml }}></div>
        <h3
          dangerouslySetInnerHTML={{
            __html: t('availability').replace('{{ WebhookName }}', currentWebhookAction.category),
          }}
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
        <h3
          dangerouslySetInnerHTML={{
            __html: t('webhook_payload_object').replace(
              '{{ WebhookName }}',
              currentWebhookAction.category,
            ),
          }}
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
            <div className="mb-3">
              <ActionMenu>
                <ActionMenu.Button className="text-normal">
                  {t('action_type')}: <span className="text-bold">{currentWebhookActionType}</span>
                </ActionMenu.Button>
                <ActionMenu.Overlay>
                  <ActionList selectionVariant="single">
                    {webhook.actionTypes.map((type, index) => (
                      <ActionList.Item
                        key={`${webhook.name}-${type}`}
                        selected={index === selectedActionTypeIndex}
                        onSelect={() => handleActionTypeChange(type, index)}
                      >
                        {type}
                      </ActionList.Item>
                    ))}
                  </ActionList>
                </ActionMenu.Overlay>
              </ActionMenu>
            </div>
          </div>
        )}
        <div
          className="mb-4 f5 color-fg-muted"
          dangerouslySetInnerHTML={{ __html: currentWebhookAction.descriptionHtml }}
        ></div>
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
