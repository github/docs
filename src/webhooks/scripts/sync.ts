import { readFile, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'
import { mkdirp } from 'mkdirp'

import { WEBHOOK_DATA_DIR, WEBHOOK_SCHEMA_FILENAME } from '../lib/index'
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

      const targetPath = path.join(targetDirectory, WEBHOOK_SCHEMA_FILENAME)
      await writeFile(targetPath, JSON.stringify(data, null, 2))
      console.log(`✅ Wrote ${targetPath}`)
    }),
  )
}

async function processWebhookSchema(webhooks: Webhook[]): Promise<void> {
  try {
    if (webhooks.length) {
      await Promise.all(webhooks.map((webhook) => webhook.process()))
    }
  } catch (error) {
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
