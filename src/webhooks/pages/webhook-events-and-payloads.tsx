import { GetServerSideProps } from 'next'
import type { Response } from 'express'
import type { ExtendedRequest } from '@/types'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import {
  addUINamespaces,
  getMainContext,
  MainContext,
  MainContextT,
} from '@/frame/components/context/MainContext'
import {
  getAutomatedPageContextFromRequest,
  AutomatedPageContext,
  AutomatedPageContextT,
} from '@/automated-pipelines/components/AutomatedPageContext'
import { WebhookAction } from '@/webhooks/components/types'
import { Webhook } from '@/webhooks/components/Webhook'
import { AutomatedPage } from '@/automated-pipelines/components/AutomatedPage'

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

  // Drop actionType on hash navigation, such as ?actionType=closed#issues to #fork; it no longer applies.
  useEffect(() => {
    const hashChangeHandler = () => {
      const { pathname, hash, search } = window.location

      // Preserve unrelated query parameters when removing actionType.
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
  const { getInitialPageWebhooks } = await import('@/webhooks/lib')
  const { getAutomatedPageMiniTocItems } = await import('@/frame/lib/get-mini-toc-items')

  const req = context.req as unknown as ExtendedRequest
  const res = context.res as unknown as Response
  const currentVersion = context.query.versionId as string
  const mainContext = await getMainContext(req, res)
  addUINamespaces(req, mainContext.data.ui, ['parameter_table', 'webhooks'])
  const { miniTocItems } = getAutomatedPageContextFromRequest(req)

  // Landing-page webhooks include one action type per webhook and no nested parameters.
  const webhooks = (await getInitialPageWebhooks(currentVersion)) as unknown as WebhookAction[]

  // Add webhook categories to the mini table of contents from webhook-events-and-payloads.md.
  const webhooksMiniTocs = await getAutomatedPageMiniTocItems(
    webhooks.map((webhook) => webhook.data.category),
    context,
  )
  if (webhooksMiniTocs) {
    miniTocItems.push(...webhooksMiniTocs)
  }

  return {
    props: {
      webhooks,
      mainContext,
      automatedPageContext: getAutomatedPageContextFromRequest(req),
    },
  }
}
