import { GetServerSideProps } from 'next'
import { getInitialPageWebhooks } from 'lib/webhooks'
import { getMainContext, MainContext, MainContextT } from 'components/context/MainContext'
import {
  getAutomatedPageContextFromRequest,
  AutomatedPageContext,
  AutomatedPageContextT,
} from 'components/context/AutomatedPageContext'
import { WebhookAction } from 'components/webhooks/types'
import { Webhook } from 'components/webhooks/Webhook'
import { getAutomatedPageMiniTocItems } from 'lib/get-mini-toc-items'
import { AutomatedPage } from 'components/article/AutomatedPage'

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
  const content = webhooks.map((webhook: WebhookAction, index) => {
    return (
      <div key={`${webhook.data.requestPath}-${index}`}>
        <Webhook webhook={webhook} />
      </div>
    )
  })
  return (
    <MainContext.Provider value={mainContext}>
      <AutomatedPageContext.Provider value={automatedPageContext}>
        <AutomatedPage>{content}</AutomatedPage>
      </AutomatedPageContext.Provider>
    </MainContext.Provider>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as object
  const res = context.res as object
  const currentVersion = context.query.versionId as string
  const mainContext = await getMainContext(req, res)
  const { miniTocItems } = getAutomatedPageContextFromRequest(req)

  // Get data for initial webhooks page (i.e. only 1 action type per webhook and
  // no nested parameters)
  const webhooks = (await getInitialPageWebhooks(currentVersion)) as WebhookAction[]

  // Build the minitocs for the webhooks page which is based on the webhook
  // categories in addition to the Markdown in the webhook-events-and-payloads.md
  // content file
  const webhooksMiniTocs = await getAutomatedPageMiniTocItems(
    webhooks.map((webhook) => webhook.data.category),
    context
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
