import { existsSync, mkdirSync } from 'fs'
import { readFile, writeFile } from 'fs/promises'
import path from 'path'
import slugger from 'github-slugger'

import { categoriesWithoutSubcategories } from '../../../lib/rest/index.js'
import getOperations, { getWebhooks } from './get-operations.js'

const appsStaticPath = path.join(process.cwd(), 'lib/rest/static/apps')
const restDecoratedPath = path.join(process.cwd(), 'lib/rest/static/decorated')
const webhooksDecoratedPath = path.join(process.cwd(), 'lib/webhooks/static/decorated')
const dereferencedPath = path.join(process.cwd(), 'lib/rest/static/dereferenced')

export async function decorate(schemas) {
  console.log('\n🎄 Decorating the OpenAPI schema files in lib/rest/static/dereferenced.\n')
  const dereferencedSchemas = {}
  for (const filename of schemas) {
    const schema = JSON.parse(await readFile(path.join(dereferencedPath, filename)))
    const key = filename.replace('.deref.json', '')
    dereferencedSchemas[key] = schema
  }

  const operationsEnabledForGitHubApps = {}
  const clientSideRedirects = await getCategoryOverrideRedirects()

  for (const [schemaName, schema] of Object.entries(dereferencedSchemas)) {
    try {
      // get all of the operations and wehbooks for a particular version of the openapi
      const operations = await getOperations(schema)
      const webhooks = await getWebhooks(schema)
      // process each operation and webhook, asynchronously rendering markdown and stuff
      await Promise.all(operations.map((operation) => operation.process()))
      await Promise.all(webhooks.map((webhook) => webhook.process()))

      // For each rest operation that doesn't have an override defined
      // in script/rest/utils/rest-api-overrides.json,
      // add a client-side redirect
      operations.forEach((operation) => {
        // A handful of operations don't have external docs properties
        const externalDocs = operation.getExternalDocs()
        if (!externalDocs) {
          return
        }
        const oldUrl = `/rest${
          externalDocs.url.replace('/rest/reference', '/rest').split('/rest')[1]
        }`

        if (!(oldUrl in clientSideRedirects)) {
          // There are some operations that aren't nested in the sidebar
          // For these, don't need to add a client-side redirect, the
          // frontmatter redirect will handle it for us.
          if (categoriesWithoutSubcategories.includes(operation.category)) {
            return
          }
          const anchor = oldUrl.split('#')[1]
          const subcategory = operation.subcategory

          // If there is no subcategory, a new page with the same name as the
          // category was created. That page name may change going forward.
          const redirectTo = subcategory
            ? `/rest/${operation.category}/${subcategory}#${anchor}`
            : `/rest/${operation.category}/${operation.category}#${anchor}`
          clientSideRedirects[oldUrl] = redirectTo
        }

        // There are a lot of section headings that we'll want to redirect too,
        // now that subcategories are on their own page. For example,
        // /rest/reference/actions#artifacts should redirect to
        // /rest/actions/artifacts
        if (operation.subcategory) {
          const sectionRedirectFrom = `/rest/${operation.category}#${operation.subcategory}`
          const sectionRedirectTo = `/rest/${operation.category}/${operation.subcategory}`
          if (!(sectionRedirectFrom in clientSideRedirects)) {
            clientSideRedirects[sectionRedirectFrom] = sectionRedirectTo
          }
        }
      })

      const categories = [...new Set(operations.map((operation) => operation.category))].sort()

      // Orders the operations by their category and subcategories.
      // All operations must have a category, but operations don't need
      // a subcategory. When no subcategory is present, the subcategory
      // property is an empty string ('').
      /* 
        Example:
        {
          [category]: {
            '': {
              "description": "",
              "operations": []
            },
            [subcategory sorted alphabetically]: {
              "description": "",
              "operations": []
            }
          }
        }
      */
      const operationsByCategory = {}
      categories.forEach((category) => {
        operationsByCategory[category] = {}
        const categoryOperations = operations.filter((operation) => operation.category === category)
        categoryOperations
          .filter((operation) => !operation.subcategory)
          .map((operation) => (operation.subcategory = operation.category))

        const subcategories = [
          ...new Set(categoryOperations.map((operation) => operation.subcategory)),
        ].sort()
        // the first item should be the item that has no subcategory
        // e.g., when the subcategory = category
        const firstItemIndex = subcategories.indexOf(category)
        if (firstItemIndex > -1) {
          const firstItem = subcategories.splice(firstItemIndex, 1)[0]
          subcategories.unshift(firstItem)
        }

        subcategories.forEach((subcategory) => {
          operationsByCategory[category][subcategory] = {}

          const subcategoryOperations = categoryOperations.filter(
            (operation) => operation.subcategory === subcategory
          )

          operationsByCategory[category][subcategory] = subcategoryOperations
        })
      })

      // Create a map of webhooks (e.g. check_run, issues, release) to the
      // webhook's actions (e.g. created, deleted, etc.).
      //
      // Some webhooks like the ping webhook have no action types -- in cases
      // like this we set a default action of 'default'.
      //
      // Example:
      /*
        {
        'branch-protection-rule': {
          created: Webhook {
            descriptionHtml: '<p>A branch protection rule was created.</p>',
            summaryHtml: '<p>This event occurs when there is activity relating to branch protection rules. For more information, see "<a href="https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches">About protected branches</a>." For information about the Branch protection APIs, see <a href="https://docs.github.com/graphql/reference/objects#branchprotectionrule">the GraphQL documentation</a> and <a href="https://docs.github.com/rest/branches/branch-protection">the REST API documentation</a>.</p>\n' +
              '<p>In order to install this event on a GitHub App, the app must have <code>read-only</code> access on repositories administration.</p>',
            bodyParameters: [Array],
            availability: [Array],
            action: 'created',
            category: 'branch-protection-rule'
          },
          deleted: Webhook {
            descriptionHtml: '<p>A branch protection rule was deleted.</p>',
            summaryHtml: '<p>This event occurs when there is activity relating to branch protection rules. For more information, see "<a href="https://docs.github.com/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches">About protected branches</a>." For information about the Branch protection APIs, see <a href="https://docs.github.com/graphql/reference/objects#branchprotectionrule">the GraphQL documentation</a> and <a href="https://docs.github.com/rest/branches/branch-protection">the REST API documentation</a>.</p>\n' +
              '<p>In order to install this event on a GitHub App, the app must have <code>read-only</code> access on repositories administration.</p>',
            bodyParameters: [Array],
            availability: [Array],
            action: 'deleted',
            category: 'branch-protection-rule'
          },
          ...
        }
      */
      const categorizedWebhooks = {}

      webhooks.forEach((webhook) => {
        if (!webhook.action) webhook.action = 'default'

        if (categorizedWebhooks[webhook.category]) {
          categorizedWebhooks[webhook.category][webhook.action] = webhook
        } else {
          categorizedWebhooks[webhook.category] = {}
          categorizedWebhooks[webhook.category][webhook.action] = webhook
        }
      })

      const webhooksFilename = path
        .join(webhooksDecoratedPath, `${schemaName}.json`)
        .replace('.deref', '')
      const restFilename = path.join(restDecoratedPath, `${schemaName}.json`).replace('.deref', '')

      // write processed operations to disk
      await writeFile(restFilename, JSON.stringify(operationsByCategory, null, 2))
      console.log('Wrote', path.relative(process.cwd(), restFilename))
      if (Object.keys(categorizedWebhooks).length > 0) {
        if (!existsSync(webhooksDecoratedPath)) {
          mkdirSync(webhooksDecoratedPath)
        }
        await writeFile(webhooksFilename, JSON.stringify(categorizedWebhooks, null, 2))
        console.log('Wrote', path.relative(process.cwd(), webhooksFilename))
      }

      // Create the enabled-for-apps.json file used for
      // https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps
      operationsEnabledForGitHubApps[schemaName] = {}
      for (const category of categories) {
        const categoryOperations = operations.filter((operation) => operation.category === category)

        // This is a collection of operations that have `enabledForGitHubApps = true`
        // It's grouped by resource title to make rendering easier
        operationsEnabledForGitHubApps[schemaName][category] = categoryOperations
          .filter((operation) => operation.enabledForGitHubApps)
          .map((operation) => ({
            slug: slugger.slug(operation.title),
            subcategory: operation.subcategory,
            verb: operation.verb,
            requestPath: operation.requestPath,
          }))
      }
    } catch (error) {
      console.error(error)
      console.log(
        "🐛 Whoops! It looks like the decorator script wasn't able to parse the dereferenced schema. A recent change may not yet be supported by the decorator. Please reach out in the #docs-engineering slack channel for help."
      )
      process.exit(1)
    }
  }
  await writeFile(
    path.join(appsStaticPath, 'enabled-for-apps.json'),
    JSON.stringify(operationsEnabledForGitHubApps, null, 2)
  )
  console.log('Wrote', path.relative(process.cwd(), `${appsStaticPath}/enabled-for-apps.json`))
  await writeFile(
    'lib/redirects/static/client-side-rest-api-redirects.json',
    JSON.stringify(clientSideRedirects, null, 2),
    'utf8'
  )
  console.log(
    'Wrote',
    path.relative(process.cwd(), `lib/redirects/static/client-side-rest-api-redirects.json`)
  )
}

async function getCategoryOverrideRedirects() {
  const { operationUrls, sectionUrls } = JSON.parse(
    await readFile('script/rest/utils/rest-api-overrides.json', 'utf8')
  )

  const operationRedirects = {}
  console.log('\n➡️  Updating REST API redirect exception list.\n')
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
