#!/usr/bin/env node
import Operation from './operation.js'
import Webhook from './webhook.js'

// The module accepts a JSON schema object as input
// and returns an array of its operation objects with their
// HTTP verb and requestPath attached as properties

export default async function getOperations(schema) {
  const operations = []

  for (const [requestPath, operationsAtPath] of Object.entries(schema.paths)) {
    for (const [verb, operationProps] of Object.entries(operationsAtPath)) {
      const operation = new Operation(verb, requestPath, operationProps, schema.servers)
      operations.push(operation)
    }
  }

  return operations
}

export async function getWebhooks(schema) {
  if (schema.webhooks) {
    return Object.values(schema.webhooks).map((webhook) => new Webhook(webhook.post))
  }

  return []
}
