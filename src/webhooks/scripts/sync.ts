import { readFile, writeFile, unlink } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { mkdirp } from 'mkdirp'

import { WEBHOOK_DATA_DIR } from '../lib/index'
import Webhook, { WebhookSchema } from '@/webhooks/scripts/webhook'

interface WebhookFile {
  webhooks?: {
    post: WebhookSchema
  }[]
  'x-webhooks'?: {
    post: WebhookSchema
  }[]
}

export async function syncWebhookData(
  sourceDirectory: string,
  webhookSchemas: string[],
): Promise<void> {
  await Promise.all(
    webhookSchemas.map(async (schemaName) => {
      const file = path.join(sourceDirectory, schemaName)
      const schema: WebhookFile = JSON.parse(await readFile(file, 'utf-8'))
      // In OpenAPI version 3.1, the schema data is under the `webhooks`
      // key, but in 3.0 the schema data was in `x-webhooks`.
      // We just fallback to `x-webhooks` for now since there's
      // currently no difference in the schema data between versions.
      const webhookSchemaData = schema.webhooks ?? schema['x-webhooks']
      if (!webhookSchemaData) {
        console.log(
          `🟡 No webhooks exist in ${sourceDirectory}/${schemaName}. No static webhook files will be generated.`,
        )
        return
      }

      const webhooks = Object.values(webhookSchemaData).map((webhook) => new Webhook(webhook.post))
      await processWebhookSchema(webhooks)
      const data = await formatWebhookData(webhooks)

      if (Object.keys(data).length === 0) {
        throw new Error(
          `Generating Webhook data failed for ${sourceDirectory}/${schemaName}. The generated data file was empty.`,
        )
      }

      const versionName = path.basename(schemaName, '.json')
      const targetDirectory = path.join(WEBHOOK_DATA_DIR, versionName)

      if (!existsSync(targetDirectory)) {
        await mkdirp(targetDirectory)
      }

      // Write one JSON file per webhook category (e.g. check_run.json) instead
      // of a single monolithic schema.json. This allows the server to load only
      // the requested webhook on demand rather than the entire version schema.
      //
      // childParamsGroups are split into a separate file ({category}.child-params.json)
      // so the landing page never loads them — they're only fetched on drill-down.
      await Promise.all(
        Object.entries(data).map(async ([category, categoryData]) => {
          const childParams: Record<string, Record<string, unknown[]>> = {}
          const slimCategoryData: Record<string, unknown> = {}

          for (const [action, actionData] of Object.entries(
            categoryData as Record<
              string,
              { bodyParameters?: Array<{ name?: string; childParamsGroups?: unknown[] }> }
            >,
          )) {
            const actionChildParams: Record<string, unknown[]> = {}
            let hasChildParams = false

            const slimAction = {
              ...actionData,
              bodyParameters: actionData.bodyParameters?.map((param) => {
                if (param.childParamsGroups && param.childParamsGroups.length > 0 && param.name) {
                  actionChildParams[param.name] = param.childParamsGroups
                  hasChildParams = true
                }
                return { ...param, childParamsGroups: [] }
              }),
            }

            slimCategoryData[action] = slimAction
            if (hasChildParams) {
              childParams[action] = actionChildParams
            }
          }

          const targetPath = path.join(targetDirectory, `${category}.json`)
          await writeFile(targetPath, JSON.stringify(slimCategoryData, null, 2))
          console.log(`✅ Wrote ${targetPath}`)

          const childParamsPath = path.join(targetDirectory, `${category}.child-params.json`)
          if (Object.keys(childParams).length > 0) {
            await writeFile(childParamsPath, JSON.stringify(childParams, null, 2))
            console.log(`✅ Wrote ${childParamsPath}`)
          } else {
            // Remove any stale sidecar from a previous sync where this category
            // had child params but no longer does. getWebhook() probes for this
            // file unconditionally, so leaving it would reintroduce removed
            // nested params on drill-down.
            for (const stalePath of [childParamsPath, `${childParamsPath}.br`]) {
              if (existsSync(stalePath)) {
                await unlink(stalePath)
                console.log(`🗑️  Removed stale ${stalePath}`)
              }
            }
          }
        }),
      )
    }),
  )
}

async function processWebhookSchema(webhooks: Webhook[]): Promise<void> {
  try {
    if (webhooks.length) {
      await Promise.all(webhooks.map((webhook) => webhook.process()))
    }
  } catch {
    throw new Error(
      "🐛 Whoops! It looks like the decorator script wasn't able to parse the dereferenced schema. A recent change may not yet be supported by the decorator. Please reach out in the #docs-engineering slack channel for help.",
    )
  }
}

// Create an object with all webhooks where the key is the webhook name.
// Webhooks typically have a property called `action` that describes the
// events that trigger the webhook. Some webhooks (like `ping`) don't have
// action types -- in that case we set the value of action to 'default'.
async function formatWebhookData(
  webhooks: Webhook[],
): Promise<Record<string, Record<string, Webhook>>> {
  const categorizedWebhooks: Record<string, Record<string, Webhook>> = {}
  for (const webhook of Object.values(webhooks)) {
    if (!webhook.action) webhook.action = 'default'

    if (categorizedWebhooks[webhook.category]) {
      categorizedWebhooks[webhook.category][webhook.action] = webhook
    } else {
      categorizedWebhooks[webhook.category] = {}
      categorizedWebhooks[webhook.category][webhook.action] = webhook
    }
  }
  return categorizedWebhooks
}
