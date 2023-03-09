#!/usr/bin/env node
import { readFile, writeFile } from 'fs/promises'
import path from 'path'
import { categoriesWithoutSubcategories } from '../../lib/index.js'
const STATIC_REDIRECTS = 'src/rest/data/client-side-rest-api-redirects.json'
const REST_API_OVERRIDES = 'src/rest/lib/rest-api-overrides.json'

// This is a temporary method of redirecting that we only need until
// we update the urls in the OpenAPI to reflect the current location on
// docs.github.com. Once we've done that, we can remove this functionality.
export async function syncRestRedirects(sourceDirectory, sourceSchemas) {
  const clientSideRedirects = await getCategoryOverrideRedirects()

  for (const schemaName of sourceSchemas) {
    const file = path.join(sourceDirectory, schemaName)
    const schema = JSON.parse(await readFile(file, 'utf-8'))
    for (const operationsAtPath of Object.values(schema.paths)) {
      for (const operation of Object.values(operationsAtPath)) {
        await decorateRedirects(operation, clientSideRedirects)
      }
    }
  }
  await writeFile(STATIC_REDIRECTS, JSON.stringify(clientSideRedirects, null, 2), 'utf8')
  console.log(`✅ Wrote ${STATIC_REDIRECTS}`)
}

// Reads in src/rest/lib/rest-api-overrides.json and generates the
// redirect file src/rest/data/client-side-rest-api-redirects.json
// Once we've updated the operation urls in `github/github` to reflect
// reality, we can remove this functionality.
export async function getCategoryOverrideRedirects() {
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

// For each rest operation that doesn't have an override defined in
// src/rest/lib/rest-api-overrides.json, add a client-side redirect
// for operations that we moved from /rest/reference to /rest.
// Once we've updated the operation urls in `github/github` to reflect
// reality, we can remove this functionality.
async function decorateRedirects(operation, clientSideRedirects) {
  // A handful of operations don't have external docs properties
  const externalDocs = operation.externalDocs
  const { category, subcategory } = operation['x-github']
  if (!externalDocs) {
    return
  }

  const oldUrl = `/rest${externalDocs.url.replace('/rest/reference', '/rest').split('/rest')[1]}`

  // Because we generate a list of redirect programmatically which sprung
  // from a large move of operations from /rest/reference to /rest on
  // docs.github.com, we only want to programmatically generate redirects
  // for those cases. I've noticed that sometimes someone will come along and
  // update the url in the OpenAPI but they don't update the category
  // and subcategory to match. So the url is accurate and category/subcategory
  // are out-of-date.
  //
  // This logic roughly checks to see if the url looks up-to-date by
  // seeing if the category and subcategory are in it. If they are not
  // it indicates that the url is newer than the category/subcategory and
  // we can skip generating a redirect.
  if (
    category &&
    subcategory &&
    !oldUrl.includes(`${category}/${subcategory}`) &&
    !externalDocs.url.includes('/rest/reference')
  ) {
    return
  } else if (
    category &&
    !oldUrl.includes(`${category}`) &&
    !externalDocs.url.includes('/rest/reference')
  ) {
    return
  }

  if (!(oldUrl in clientSideRedirects)) {
    // There are some operations that aren't nested in the sidebar
    // For these, don't need to add a client-side redirect, the
    // frontmatter redirect will handle it for us.
    if (categoriesWithoutSubcategories.includes(category)) {
      return
    }

    const anchor = oldUrl.split('#')[1]
    const fragment = anchor ? `#${anchor}` : ''
    // If there is no subcategory, a new page with the same name as the
    // category was created. That page name may change going forward.
    const redirectTo = subcategory
      ? `/rest/${category}/${subcategory}${fragment}`
      : `/rest/${category}/${category}${fragment}`
    clientSideRedirects[oldUrl] = redirectTo
  }

  // There are a lot of section headings that we'll want to redirect too,
  // now that subcategories are on their own page. For example,
  // /rest/reference/actions#artifacts should redirect to
  // /rest/actions/artifacts
  if (subcategory) {
    const sectionRedirectFrom = `/rest/${category}#${subcategory}`
    const sectionRedirectTo = `/rest/${category}/${subcategory}`
    if (!(sectionRedirectFrom in clientSideRedirects)) {
      clientSideRedirects[sectionRedirectFrom] = sectionRedirectTo
    }
  }
}
