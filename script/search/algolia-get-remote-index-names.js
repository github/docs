#!/usr/bin/env node
import { namePrefix } from '../../lib/search/config.js'
import getAlgoliaClient from './algolia-client.js'

export default async function getRemoteIndexNames() {
  const algoliaClient = getAlgoliaClient()
  const indices = await algoliaClient.listIndices()

  // ignore other indices that may be present in the Algolia account like `helphub-`, etc
  const indexNames = indices.items
    .map((field) => field.name)
    .filter((name) => name.startsWith(namePrefix))

  return indexNames
}
