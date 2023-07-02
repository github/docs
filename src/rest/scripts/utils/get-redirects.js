#!/usr/bin/env node
import { readFile, writeFile } from 'fs/promises'
const STATIC_REDIRECTS = 'src/rest/data/client-side-rest-api-redirects.json'
const REST_API_OVERRIDES = 'src/rest/lib/rest-api-overrides.json'

// This is way to add redirects from one fragment to another from the
// client's browser.
export async function syncRestRedirects() {
  const clientSideRedirects = await getClientSideRedirects()

  await writeFile(STATIC_REDIRECTS, JSON.stringify(clientSideRedirects, null, 2), 'utf8')
  console.log(`✅ Wrote ${STATIC_REDIRECTS}`)
}

// Reads in src/rest/lib/rest-api-overrides.json and generates the
// redirect file src/rest/data/client-side-rest-api-redirects.json
async function getClientSideRedirects() {
  const { operationUrls, sectionUrls } = JSON.parse(await readFile(REST_API_OVERRIDES, 'utf8'))

  const operationRedirects = {}
  Object.values(operationUrls).forEach((value) => {
    const oldUrl = value.originalUrl.replace('/rest/reference', '/rest')
    const anchor = oldUrl.split('#')[1]
    const subcategory = value.subcategory
    const redirectTo = subcategory
      ? `/rest/${value.category}/${subcategory}#${anchor}`
      : `/rest/${value.category}#${anchor}`
    operationRedirects[oldUrl] = redirectTo
  })
  const redirects = {
    ...operationRedirects,
    ...sectionUrls,
  }
  return redirects
}
