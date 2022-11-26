import { ActionList, ActionMenu, Flash } from '@primer/react'
import { useState, KeyboardEvent } from 'react'
import useSWR from 'swr'
import { slug } from 'github-slugger'
import cx from 'classnames'

import { useMainContext } from 'components/context/MainContext'
import { useVersion } from 'components/hooks/useVersion'
import { LinkIconHeading } from 'components/article/LinkIconHeading'
import { useTranslation } from 'components/hooks/useTranslation'
import type { WebhookAction, WebhookData } from './types'
import { ParameterTable } from 'components/parameter-table/ParameterTable'

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

// We manually created decorated webhooks files for GHES versions older than
// 3.7, returns whether the given version is one of these versions of GHES.
//
// TODO: once 3.7 is the oldest supported version of GHES, we won't need this
// anymore.
function isScrapedGhesVersion(version: ReturnType<typeof useVersion>) {
  const scrapedVersions = ['3.6', '3.5', '3.4', '3.3', '3.2']

  if (!version.isEnterprise) return false

  // getting the number part e.g. '3.6' from a version string like
  // 'enterprise-server@3.6'
  const versionNumber = version.currentVersion.split('@')[1]

  return scrapedVersions.includes(versionNumber)
}

export function Webhook({ webhook }: Props) {
  // Get version for requests to switch webhook action type
  const version = useVersion()
  const { t } = useTranslation('products')

  const context = useMainContext()
  // Get more user friendly language for the different availability options in
  // the webhook schema (we can't change it directly in the schema).  Note that
  // we specifically don't want to translate these strings with useTranslation()
  // like we usually do with strings from data/ui.yml.
  const rephraseAvailability = context.data.ui.products.webhooks.rephrase_availability

  // The param that was clicked so we can expand its property <details> element
  const [clickedBodyParameterName, setClickedBodyParameterName] = useState<undefined | string>('')
  // The selected webhook action type the user selects via a dropdown
  const [selectedWebhookActionType, setSelectedWebhookActionType] = useState('')
  const webhookSlug = slug(webhook.data.category)
  const webhookFetchUrl = `/api/webhooks/v1?${new URLSearchParams({
    category: webhook.data.category,
    version: version.currentVersion,
  })}`

  // callback for the action type dropdown -- besides setting the action type
  // state, we also want to clear the clicked body param so that no properties
  // are expanded when we re-render the webhook
  function handleActionTypeChange(type: string) {
    setClickedBodyParameterName('')
    setSelectedWebhookActionType(type)
  }

  // callback to trigger useSWR() hook after a nested property is clicked
  function handleBodyParamExpansion(event: KeyboardEvent<HTMLElement>) {
    // need to cast it because 'closest' isn't necessarily available on
    // event.target
    const target = event.target as HTMLElement
    setClickedBodyParameterName(target.closest('details')?.dataset.nestedParamId)
  }

  // fires when the webhook action type changes or someone clicks on a nested
  // body param for the first time.  In either case, we now have all the data
  // for a webhook (i.e. all the data for each action type and all of their
  // nested parameters)
  const { data, error } = useSWR<WebhookData, Error>(
    clickedBodyParameterName || selectedWebhookActionType ? webhookFetchUrl : null,
    webhookFetcher,
    {
      revalidateOnFocus: false,
    }
  )

  const currentWebhookActionType = selectedWebhookActionType || webhook.data.action
  const currentWebhookAction = (data && data[currentWebhookActionType]) || webhook.data

  return (
    <div>
      <h2 id={webhookSlug}>
        <LinkIconHeading slug={webhookSlug} />
        {currentWebhookAction.category}
      </h2>
      <div>
        <div dangerouslySetInnerHTML={{ __html: currentWebhookAction.summaryHtml }}></div>

        <h3>{t('webhooks.availability')}</h3>
        <ul>
          {currentWebhookAction.availability.map((availability) => {
            // TODO: once 3.7 is the oldest supported version of GHES, we won't need this anymore.
            if (isScrapedGhesVersion(version)) {
              return (
                <li
                  dangerouslySetInnerHTML={{ __html: availability }}
                  key={`availability-${availability}`}
                ></li>
              )
            } else {
              return (
                <li key={`availability-${availability}`}>
                  {rephraseAvailability[availability] ?? availability}
                </li>
              )
            }
          })}
        </ul>
        <h3>{t('webhooks.webhook_payload_object')}</h3>
        {error && (
          <Flash className="mb-5" variant="danger">
            <p>{t('webhooks.action_type_switch_error')}</p>
            <p>
              <code className="f6" style={{ background: 'none' }}>
                {error.toString()}
              </code>
            </p>
          </Flash>
        )}
        {webhook.actionTypes.length > 1 && (
          <div className="mb-4">
            <h4 className="border-bottom pt-2 pb-2 mb-3">{t('webhooks.action_type')}</h4>
            <div className="mb-3">
              <ActionMenu>
                <ActionMenu.Button className="text-bold">
                  {currentWebhookActionType}
                </ActionMenu.Button>
                <ActionMenu.Overlay>
                  <ActionList>
                    {webhook.actionTypes.map((type) => {
                      return (
                        <ActionList.Item
                          disabled={type === currentWebhookActionType}
                          key={`${webhook.name}-${type}`}
                          onSelect={() => handleActionTypeChange(type)}
                        >
                          {type}
                        </ActionList.Item>
                      )
                    })}
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
          />
        </div>
      </div>

      {webhook.data.payloadExample && (
        <>
          <h3>{t('webhooks.webhook_payload_example')}</h3>
          <div
            className={cx(styles.payloadExample, 'border-top rounded-1 my-0')}
            style={{ maxHeight: '32rem' }}
            data-highlight={'json'}
          >
            <code>{JSON.stringify(webhook.data.payloadExample, null, 2)}</code>
          </div>
        </>
      )}
    </div>
  )
}
