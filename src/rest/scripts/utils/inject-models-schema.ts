import yaml from 'js-yaml'
import dereferenceJsonSchema from 'dereference-json-schema'
import { existsSync } from 'fs'
import { readFile, readdir } from 'fs/promises'

export const MODELS_GATEWAY_ROOT = 'models-gateway'
const MODELS_GATEWAY_PATH = 'docs/api'

// The github-models REST API OpenAPI descriptions live in a separate repo, github/models-gateway.
// We "inject" the descriptions from that repo into the core GitHub API descriptions so that
// from the perspective of our app code,
// models descriptions are part of the same REST API schema and don't need additional processing
export async function injectModelsSchema(schema: any, schemaName: string): Promise<any> {
  if (!schemaName.includes('fpt')) {
    return schema
  }

  const modelEndpoints = (
    await readdir(`./${MODELS_GATEWAY_ROOT}/${MODELS_GATEWAY_PATH}`, {
      recursive: true,
    })
  ).filter((name) => name.endsWith('.yaml') || name.endsWith('.yml'))

  for (let endpointPath of modelEndpoints) {
    endpointPath = `./${MODELS_GATEWAY_ROOT}/${MODELS_GATEWAY_PATH}/${endpointPath}`
    if (!existsSync(endpointPath)) {
      console.warn(
        `⚠️ Models gateway YAML file not found at ${endpointPath}. Skipping injection for ${schemaName}.`,
      )
      continue
    }

    const yamlContent = await readFile(endpointPath, 'utf8')
    const loadedYaml = yaml.load(yamlContent) as {
      openapi: string
      info: any
      servers: any[]
      paths: { [x: string]: any }
    }
    const deferencedYaml = dereferenceJsonSchema.dereferenceSync(loadedYaml)

    // Copy over top-level OpenAPI fields
    schema.openapi = schema.openapi || deferencedYaml.openapi
    schema.info = schema.info || deferencedYaml.info
    schema.servers = schema.servers || deferencedYaml.servers

    // Process each path and operation in the YAML
    for (const path of Object.keys(deferencedYaml.paths)) {
      for (const operation of Object.keys(deferencedYaml.paths[path])) {
        const operationObject = deferencedYaml.paths[path][operation]

        // Use values from the YAML where possible
        const name = operationObject.summary || ''
        const description = operationObject.description || ''
        const category = operationObject['x-github']?.category || 'models'

        console.log(`⏳ Processing operation: ${name} (${path} ${operation})`)

        // Create enhanced operation preserving all original fields
        // TODO this should be cleaned up, most can be removed
        const enhancedOperation = {
          ...operationObject, // Keep all original fields
          operationId: operationObject.operationId, // Preserve original operationId with namespace
          tags: operationObject.tags || ['models'], // Only use 'models' if no tags present
          verb: operation,
          requestPath: path,
          category: category,
          subcategory: operationObject['x-github']?.subcategory || '',
          summary: name,
          description: description,
          'x-github': {
            ...operationObject['x-github'], // Preserve all x-github metadata
            category: category,
            enabledForGitHubApps: operationObject['x-github']?.enabledForGitHubApps,
            githubCloudOnly: operationObject['x-github']?.githubCloudOnly,
            permissions: operationObject['x-github']?.permissions || {},
            externalDocs: operationObject['x-github']?.externalDocs || {},
          },
          parameters: operationObject.parameters || [],
          responses: {
            ...operationObject.responses,
            '200': operationObject.responses?.['200'],
          },
        }

        // Preserve operation-level servers if present
        // !Needed! to use models.github.ai instead of api.github.com
        if (deferencedYaml.servers) {
          enhancedOperation.servers = deferencedYaml.servers
        }

        // Add the enhanced operation to the schema
        schema.paths[path] = schema.paths[path] || {}
        schema.paths[path][operation] = enhancedOperation

        console.log(`✅ Processed operation: ${name} (${path} ${operation})`)
      }
    }
  }

  return schema
}
