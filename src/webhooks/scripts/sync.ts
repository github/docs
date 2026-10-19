import { mkdir, readdir, readFile, writeFile, unlink } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

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
      // OpenAPI 3.1 stores webhook data under webhooks and 3.0 under x-webhooks; both use the same shape.
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
        await mkdir(targetDirectory, { recursive: true })
      }

      const writtenFiles = new Set<string>()

      // Split categories, such as check_run.json, from childParamsGroups sidecars.
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

          writtenFiles.add(`${category}.json`)
          const targetPath = path.join(targetDirectory, `${category}.json`)
          await writeFile(targetPath, JSON.stringify(slimCategoryData, null, 2))
          console.log(`✅ Wrote ${targetPath}`)

          const childParamsPath = path.join(targetDirectory, `${category}.child-params.json`)
          if (Object.keys(childParams).length > 0) {
            writtenFiles.add(`${category}.child-params.json`)
            await writeFile(childParamsPath, JSON.stringify(childParams, null, 2))
            console.log(`✅ Wrote ${childParamsPath}`)
          }
        }),
      )

      await removeStaleWebhookDataFiles(targetDirectory, writtenFiles)
    }),
  )
}

// The site lists webhook events from the files on disk, so any category or
// child-params file this run did not write would keep a removed event on the docs.
// Brotli copies are removed too because the loader prefers them over plain JSON.
export async function removeStaleWebhookDataFiles(
  targetDirectory: string,
  writtenFiles: Set<string>,
): Promise<void> {
  if (!existsSync(targetDirectory)) return

  for (const file of await readdir(targetDirectory)) {
    if (!(file.endsWith('.json') || file.endsWith('.json.br'))) continue
    if (writtenFiles.has(file)) continue
    const filePath = path.join(targetDirectory, file)
    await unlink(filePath)
    console.log(`🗑️  Removed stale data file ${filePath}`)
  }
}

async function processWebhookSchema(webhooks: Webhook[]): Promise<void> {
  try {
    if (webhooks.length) {
      await Promise.all(webhooks.map((webhook) => webhook.process()))
    }
  } catch {
    throw new Error(
      "🐛 Whoops! It looks like the decorator script wasn't able to parse the dereferenced schema. A recent change may not yet be supported by the decorator. Please reach out in the #technical-content slack channel for help.",
    )
  }
}

// Groups webhooks by category and action type.
// Webhooks without action types, such as ping, use default.
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
