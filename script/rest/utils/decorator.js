import { existsSync, mkdirSync } from 'fs'
import { readFile, writeFile } from 'fs/promises'
import path from 'path'
import { slug } from 'github-slugger'

import { allVersions } from '../../../lib/all-versions.js'
import { categoriesWithoutSubcategories } from '../../../lib/rest/index.js'
import getOperations, { getWebhooks } from './get-operations.js'

const ENABLED_APPS = 'lib/rest/static/apps/enabled-for-apps.json'
const STATIC_REDIRECTS = 'lib/redirects/static/client-side-rest-api-redirects.json'
const REST_DECORATED_DIR = 'lib/rest/static/decorated'
const WEBHOOK_DECORATED_DIR = 'lib/webhooks/static/decorated'
const REST_DEREFERENCED_DIR = 'lib/rest/static/dereferenced'

export async function decorate(schemas) {
  console.log('\n🎄 Decorating the OpenAPI schema files in lib/rest/static/dereferenced.\n')
  const { restSchemas, webhookSchemas } = await getOpenApiSchemaFiles(schemas)
  const webhookOperations = await getWebhookOperations(webhookSchemas)
  await createStaticWebhookFiles(webhookOperations)
  const restOperations = await getRestOperations(restSchemas)
  await createStaticRestFiles(restOperations)
}

async function getRestOperations(restSchemas) {
  console.log('\n⏭️  Start generating static REST files\n')
  const restSchemaData = await getDereferencedFiles(restSchemas)
  const restOperations = {}
  for (const [schemaName, schema] of Object.entries(restSchemaData)) {
    try {
      // get all of the operations and wehbooks for a particular version of the openapi
      const operations = await getOperations(schema)
      // process each operation and webhook, asynchronously rendering markdown and stuff
      if (operations.length) {
        console.log(`...processing ${schemaName} rest operations`)
        await Promise.all(operations.map((operation) => operation.process()))
        restOperations[schemaName] = operations
      }
    } catch (error) {
      throw new Error(
        "🐛 Whoops! It looks like the decorator script wasn't able to parse the dereferenced schema. A recent change may not yet be supported by the decorator. Please reach out in the #docs-engineering slack channel for help."
      )
    }
  }
  return restOperations
}

async function getWebhookOperations(webhookSchemas) {
  console.log('⏭️  Start generating static webhook files\n')
  const webhookSchemaData = await getDereferencedFiles(webhookSchemas)
  const webhookOperations = {}
  for (const [schemaName, schema] of Object.entries(webhookSchemaData)) {
    try {
      const webhooks = await getWebhooks(schema)
      if (webhooks.length) {
        console.log(`...processing ${schemaName} webhook operations`)
        await Promise.all(webhooks.map((webhook) => webhook.process()))
        webhookOperations[schemaName] = webhooks
      }
    } catch (error) {
      throw new Error(
        "🐛 Whoops! It looks like the decorator script wasn't able to parse the dereferenced schema. A recent change may not yet be supported by the decorator. Please reach out in the #docs-engineering slack channel for help."
      )
    }
  }
  return webhookOperations
}

async function createStaticRestFiles(restOperations) {
  const operationsEnabledForGitHubApps = {}
  const clientSideRedirects = await getCategoryOverrideRedirects()
  for (const schemaName in restOperations) {
    const operations = restOperations[schemaName]
    await addRestClientSideRedirects(operations, clientSideRedirects)

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

    const restFilename = path.join(REST_DECORATED_DIR, `${schemaName}.json`).replace('.deref', '')

    // write processed operations to disk
    await writeFile(restFilename, JSON.stringify(operationsByCategory, null, 2))
    console.log('Wrote', path.relative(process.cwd(), restFilename))

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
          slug: slug(operation.title),
          subcategory: operation.subcategory,
          verb: operation.verb,
          requestPath: operation.requestPath,
        }))
    }
  }

  await writeFile(ENABLED_APPS, JSON.stringify(operationsEnabledForGitHubApps, null, 2))
  console.log('Wrote', ENABLED_APPS)
  await writeFile(STATIC_REDIRECTS, JSON.stringify(clientSideRedirects, null, 2), 'utf8')
  console.log('Wrote', STATIC_REDIRECTS)
}

async function getDereferencedFiles(schemas) {
  const schemaData = {}
  for (const filename of schemas) {
    const file = path.join(REST_DEREFERENCED_DIR, `${filename}.deref.json`)
    const schema = JSON.parse(await readFile(file))
    schemaData[filename] = schema
  }
  return schemaData
}

async function createStaticWebhookFiles(webhookSchemas) {
  if (!Object.keys(webhookSchemas).length) {
    console.log(
      '🟡  No webhooks exist in the dereferenced files. No static webhook files will be generated.\n'
    )
    return
  }
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
  for (const [schemaName, webhooks] of Object.entries(webhookSchemas)) {
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
      .join(WEBHOOK_DECORATED_DIR, `${schemaName}.json`)
      .replace('.deref', '')
    if (Object.keys(categorizedWebhooks).length > 0) {
      if (!existsSync(WEBHOOK_DECORATED_DIR)) {
        mkdirSync(WEBHOOK_DECORATED_DIR)
      }
      await writeFile(webhooksFilename, JSON.stringify(categorizedWebhooks, null, 2))
      console.log('Wrote', path.relative(process.cwd(), webhooksFilename))
    }
  }
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

async function addRestClientSideRedirects(operations, clientSideRedirects) {
  // For each rest operation that doesn't have an override defined
  // in script/rest/utils/rest-api-overrides.json,
  // add a client-side redirect
  operations.forEach((operation) => {
    // A handful of operations don't have external docs properties
    const externalDocs = operation.getExternalDocs()
    if (!externalDocs) {
      return
    }
    const oldUrl = `/rest${externalDocs.url.replace('/rest/reference', '/rest').split('/rest')[1]}`

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
}

export async function getOpenApiSchemaFiles(schemas) {
  const webhookSchemas = []
  const restSchemas = []

  // All of the schema releases that we store in allVersions
  //  Ex: 'api.github.com', 'ghec', 'ghes-3.6', 'ghes-3.5',
  // 'ghes-3.4', 'ghes-3.3', 'ghes-3.2', 'github.ae'
  const openApiVersions = Object.keys(allVersions).map(
    (elem) => allVersions[elem].openApiVersionName
  )
  // The full list of dereferened OpenAPI schemas received from
  // bundling the OpenAPI in github/github
  const schemaBaseNames = schemas.map((schema) => path.basename(schema, '.deref.json'))
  for (const schema of schemaBaseNames) {
    // catches all of the schemas that are not
    // calendar date versioned. Ex: ghec, ghes-3.7, and api.github.com
    if (openApiVersions.includes(schema)) {
      webhookSchemas.push(schema)
      // Non-calendar date schemas could also match the calendar date versioned
      // counterpart.
      // Ex: api.github.com would match api.github.com and
      // api.github.com.2022-09-09
      const filteredMatches = schemaBaseNames.filter((elem) => elem.includes(schema))
      // If there is only one match then there are no calendar date counterparts
      // and this is the only schema for this plan and release.
      if (filteredMatches.length === 1) {
        restSchemas.push(schema)
      }
      // catches all of the calendar date versioned schemas in the
      // format api.github.com.<year>-<month>-<day>
    } else {
      restSchemas.push(schema)
    }
  }
  return { restSchemas, webhookSchemas }
}
