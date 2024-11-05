import { ActionList, ActionMenu, Flash } from '@primer/react'
import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { useRouter } from 'next/router'
import { slug } from 'github-slugger'
import cx from 'classnames'

import { useVersion } from 'src/versions/components/useVersion'
import { HeadingLink } from 'src/frame/components/article/HeadingLink'
import { useTranslation } from 'src/languages/components/useTranslation'
import type { WebhookAction, WebhookData } from './types'
import { ParameterTable } from 'src/automated-pipelines/components/parameter-table/ParameterTable'

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
  const router = useRouter()

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

  const webhookSlug = slug(webhook.data.category)
  const webhookFetchUrl = `/api/webhooks/v1?${new URLSearchParams({
    category: webhook.data.category,
    version: version.currentVersion,
  })}`

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

    const { asPath, locale } = router
    let [pathRoot, pathQuery = ''] = asPath.split('?')
    const params = new URLSearchParams(pathQuery)

    if (pathRoot.includes('#')) {
      pathRoot = pathRoot.split('#')[0]
    }

    params.set('actionType', type)
    router.push(
      { pathname: `/${locale}${pathRoot}`, query: params.toString(), hash: webhookSlug },
      undefined,
      {
        shallow: true,
      },
    )
  }

  // callback to trigger useSWR() hook after a nested property is clicked
  function handleBodyParamExpansion(target: HTMLDetailsElement) {
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
    },
  )

  const currentWebhookActionType = selectedWebhookActionType || webhook.data.action
  const currentWebhookAction = (data && data[currentWebhookActionType]) || webhook.data

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
              <code className="f6" style={{ background: 'none' }}>
                {error.toString()}
              </code>
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
          <div className={cx(styles.payloadExample, 'border rounded-1 my-0')} data-highlight="json">
            <code>{JSON.stringify(webhook.data.payloadExample, null, 2)}</code>
          </div>
        </>
      )}
    </div>
  )
}
