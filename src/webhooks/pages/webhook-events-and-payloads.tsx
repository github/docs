import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import {
  addUINamespaces,
  getMainContext,
  MainContext,
  MainContextT,
} from 'src/frame/components/context/MainContext'
import {
  getAutomatedPageContextFromRequest,
  AutomatedPageContext,
  AutomatedPageContextT,
} from 'src/automated-pipelines/components/AutomatedPageContext'
import { WebhookAction } from 'src/webhooks/components/types'
import { Webhook } from 'src/webhooks/components/Webhook'
import { AutomatedPage } from 'src/automated-pipelines/components/AutomatedPage'

type Props = {
  mainContext: MainContextT
  automatedPageContext: AutomatedPageContextT
  webhooks: WebhookAction[]
}

export default function WebhooksEventsAndPayloads({
  mainContext,
  automatedPageContext,
  webhooks,
}: Props) {
  const router = useRouter()
  const { locale } = router
  const content = webhooks.map((webhook: WebhookAction, index) => {
    return (
      <div key={`${webhook.data.requestPath}-${index}`}>
        <Webhook webhook={webhook} />
      </div>
    )
  })

  // When someone clicks on a minitoc hash anchor link on this page, we want to
  // remove the type query parameter from the URL because the type won't make
  // sense anymore (e.g. ?actionTtype=closed#issues and you click on the fork minitoc
  // we don't want the URL to be ?actionType=closed#fork).
  useEffect(() => {
    const hashChangeHandler = () => {
      const { pathname, hash, search } = window.location

      // carry over any other query parameters besides `actionType` for the webhook
      // action type
      const params = new URLSearchParams(search)
      params.delete('actionType')

      if (hash) {
        router.replace({ pathname, query: params.toString(), hash }, undefined, {
          shallow: true,
        })
      }
    }

    window.addEventListener('hashchange', hashChangeHandler)

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler)
    }
  }, [locale])

  return (
    <MainContext.Provider value={mainContext}>
      <AutomatedPageContext.Provider value={automatedPageContext}>
        <AutomatedPage>{content}</AutomatedPage>
      </AutomatedPageContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { getInitialPageWebhooks } = await import('src/webhooks/lib')
  const { getAutomatedPageMiniTocItems } = await import('src/frame/lib/get-mini-toc-items')

  const req = context.req as object
  const res = context.res as object
  const currentVersion = context.query.versionId as string
  const mainContext = await getMainContext(req, res)
  addUINamespaces(req, mainContext.data.ui, ['parameter_table', 'webhooks'])
  const { miniTocItems } = getAutomatedPageContextFromRequest(req)

  // Get data for initial webhooks page (i.e. only 1 action type per webhook and
  // no nested parameters)
  const webhooks = (await getInitialPageWebhooks(currentVersion)) as WebhookAction[]

  // Build the minitocs for the webhooks page which is based on the webhook
  // categories in addition to the Markdown in the webhook-events-and-payloads.md
  // content file
  const webhooksMiniTocs = await getAutomatedPageMiniTocItems(
    webhooks.map((webhook) => webhook.data.category),
    context,
  )
  webhooksMiniTocs && miniTocItems.push(...webhooksMiniTocs)

  return {
    props: {
      webhooks,
      mainContext,
      automatedPageContext: getAutomatedPageContextFromRequest(req),
    },
  }
}
