import type { OpenApiMediaType } from './openapi-types'

const DEFAULT_EXAMPLE_DESCRIPTION = 'Example'
const DEFAULT_EXAMPLE_KEY = 'default'
const DEFAULT_ACCEPT_HEADER = 'application/vnd.github.v3+json'

// These helpers accept partial operation shapes because they read only request bodies,
// parameters, and responses. Unknown content maps keep test fixtures assignable until
// each use casts the value to OpenApiMediaType.
interface CodeSampleParameter {
  in?: string
  name: string
  examples?: Record<string, { value?: unknown }>
  [key: string]: unknown
}

interface CodeSampleResponse {
  description?: string
  content?: unknown
  [key: string]: unknown
}

interface CodeSampleOperation {
  requestBody?: { content: Record<string, unknown>; [key: string]: unknown }
  parameters?: CodeSampleParameter[]
  responses?: Record<string, CodeSampleResponse>
  [key: string]: unknown
}

interface RequestExample {
  key: string
  request: {
    contentType?: string
    description: string
    acceptHeader: string
    bodyParameters?: unknown
    parameters?: Record<string, unknown>
  }
}

interface ResponseExample {
  key: string
  response: {
    statusCode: string
    contentType?: string
    description: string
    example?: unknown
    schema?: unknown
  }
}

export interface MergedExample {
  request: {
    contentType?: string
    description: string
    acceptHeader: string
    bodyParameters?: unknown
    parameters?: Record<string, unknown>
  }
  response?: {
    statusCode: string
    contentType?: string
    description: string
    example?: unknown
    schema?: unknown
  }
}

// getCodeSamples builds request and response examples, then applies merge rules before rendering.
export default async function getCodeSamples(
  operation: CodeSampleOperation,
): Promise<MergedExample[]> {
  const responseExamples = getResponseExamples(operation)
  const requestExamples = getRequestExamples(operation)

  const mergedExamples = mergeExamples(requestExamples, responseExamples)

  // Duplicate descriptions get status-code suffixes so each docs example has a distinct label.
  if (mergedExamples.length > 1) {
    const count: Record<string, number> = {}
    for (const item of mergedExamples) {
      count[item.request.description] = (count[item.request.description] || 0) + 1
    }

    return mergedExamples.map((example, i) => {
      delete (example as { key?: string }).key
      return {
        ...example,
        request: {
          ...example.request,
          description:
            count[example.request.description] > 1
              ? `${example.request.description} ${i + 1}: Status Code ${example.response!.statusCode}`
              : example.request.description,
        },
      }
    })
  }

  // The key is only needed while merging, not at runtime.
  for (const example of mergedExamples) delete (example as { key?: string }).key
  return mergedExamples
}

// mergeExamples applies direct, status-code, and example-key rules to pair requests with responses.
// If earlier rules do not apply, the fallback path matches request and response example keys.
export function mergeExamples(
  requestExamples: RequestExample[],
  responseExamples: ResponseExample[],
): MergedExample[] {
  // A lone request without a response cannot create a meaningful docs example.
  if (requestExamples.length === 1 && responseExamples.length === 0) {
    return []
  }

  // A single request and response pair directly, so mismatched OpenAPI example keys still render.
  if (requestExamples.length === 1 && responseExamples.length === 1) {
    return [{ ...requestExamples[0], response: responseExamples[0].response }]
  }

  // A single request with example-less responses documents success status codes below 300.
  if (
    requestExamples.length === 1 &&
    responseExamples.length > 1 &&
    !responseExamples.find((ex) => ex.response.example)
  ) {
    return responseExamples
      .filter((resp) => parseInt(resp.response.statusCode, 10) < 300)
      .map((ex) => ({ ...requestExamples[0], ...ex }))
  }

  // When one request has multiple responses, only responses with examples become docs examples.
  if (
    requestExamples.length === 1 &&
    responseExamples.length > 1 &&
    responseExamples.filter((ex) => ex.response.example).length >= 1
  ) {
    return responseExamples
      .filter((ex) => ex.response.example)
      .map((ex) => ({ ...requestExamples[0], ...ex }))
  }

  const requestsExamplesLarger = requestExamples.length >= responseExamples.length
  const target = requestsExamplesLarger ? requestExamples : responseExamples
  const source = requestsExamplesLarger ? responseExamples : requestExamples

  // The longer list drives key matching. Requests win ties on length, and the first key match wins.
  return target
    .filter((targetEx) => {
      const match = source.find((srcEx) => srcEx.key === targetEx.key)
      if (match) return Object.assign(targetEx, match)
      return false
    })
    .map((ex) => ex as MergedExample)
}

// Request examples fall back to path parameters or generic examples when bodies lack examples.
export function getRequestExamples(operation: CodeSampleOperation): RequestExample[] {
  const requestExamples: RequestExample[] = []
  const parameterExamples = getParameterExamples(operation)

  // Operations without request bodies or path parameters still need a path-only example.
  if (!operation.requestBody && Object.keys(parameterExamples).length === 0) {
    return [
      {
        key: DEFAULT_EXAMPLE_KEY,
        request: {
          description: DEFAULT_EXAMPLE_DESCRIPTION,
          acceptHeader: DEFAULT_ACCEPT_HEADER,
        },
      },
    ]
  }

  // Path parameter examples create requests when an operation has no request body.
  if (!operation.requestBody) {
    return Object.keys(parameterExamples).map((key) => {
      return {
        key,
        request: {
          description: DEFAULT_EXAMPLE_DESCRIPTION,
          acceptHeader: DEFAULT_ACCEPT_HEADER,
          parameters: parameterExamples[key] || parameterExamples.default,
        },
      }
    })
  }

  for (const contentType of Object.keys(operation.requestBody.content)) {
    const mediaType = operation.requestBody.content[contentType] as OpenApiMediaType
    let examples: Record<string, { summary?: string; value?: unknown }> = {}
    // Treat a media type with a singular example field as examples under the default key.
    if (mediaType.example) {
      examples = {
        default: {
          value: mediaType.example,
        },
      }
    } else if (mediaType.examples) {
      examples = mediaType.examples
    } else {
      // Missing media type examples still need a generic request for this content type.
      requestExamples.push({
        key: DEFAULT_EXAMPLE_KEY,
        request: {
          contentType,
          description: DEFAULT_EXAMPLE_DESCRIPTION,
          acceptHeader: DEFAULT_ACCEPT_HEADER,
          parameters: parameterExamples.default,
        },
      })
      continue
    }

    for (const key of Object.keys(examples)) {
      // Custom +json media types must also become the Accept header.
      const acceptHeader = contentType.includes('+json')
        ? contentType
        : 'application/vnd.github.v3+json'

      const example = {
        key,
        request: {
          contentType,
          description: examples[key].summary || DEFAULT_EXAMPLE_DESCRIPTION,
          acceptHeader,
          bodyParameters: examples[key].value,
          parameters: parameterExamples[key] || parameterExamples.default,
        },
      }
      requestExamples.push(example)
    }
  }
  return requestExamples
}

// Strip unused example annotations because they add about 131 MB across versioned schemas.
function stripSchemaExamples(schema: unknown): unknown {
  if (!schema || typeof schema !== 'object') return schema
  if (Array.isArray(schema)) return schema.map(stripSchemaExamples)

  const result: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(schema as Record<string, unknown>)) {
    if (key === 'example' || key === 'examples') continue
    result[key] = stripSchemaExamples(value)
  }
  return result
}

export function getResponseExamples(operation: CodeSampleOperation): ResponseExample[] {
  const responseExamples: ResponseExample[] = []
  const responses = operation.responses as Record<string, CodeSampleResponse>
  for (const statusCode of Object.keys(responses)) {
    // Error responses already render in the docs status code table.
    if (parseInt(statusCode, 10) >= 400) continue

    const response = responses[statusCode]
    const content = response.content as Record<string, unknown> | undefined

    // Responses without content still need a status-code example.
    if (!content) {
      const example = {
        key: statusCode,
        response: {
          statusCode,
          description: response.description ?? '',
        },
      }
      responseExamples.push(example)
      continue
    }

    for (const contentType of Object.keys(content)) {
      const mediaType = content[contentType] as OpenApiMediaType
      let examples: Record<string, { summary?: string; value?: unknown }> = {}
      // Status-code keys prevent collisions for operations with success responses like 200 and 201.
      if (mediaType.example) {
        examples = {
          [statusCode]: {
            value: mediaType.example,
          },
        }
      } else if (mediaType.examples) {
        examples = mediaType.examples
      } else if (parseInt(statusCode, 10) < 300) {
        // Missing success examples still render so a 304 is not the only default example.
        const example = {
          key: statusCode,
          response: {
            statusCode,
            description: response.description ?? '',
          },
        }
        responseExamples.push(example)
        continue
      } else {
        continue
      }

      for (const key of Object.keys(examples)) {
        const example = {
          key,
          response: {
            statusCode,
            contentType,
            description: examples[key].summary || response.description || '',
            example: examples[key].value,
            // Schema data makes JSON about 4x larger, but the UI needs the example/schema toggle.
            schema: stripSchemaExamples(mediaType.schema),
          },
        }
        responseExamples.push(example)
      }
    }
  }
  return responseExamples
}

// Path parameter example values are grouped by example key, then parameter name.
// Parameters without examples use uppercased names under default so fake route values stand out.
export function getParameterExamples(
  operation: CodeSampleOperation,
): Record<string, Record<string, unknown>> {
  if (!operation.parameters) {
    return {}
  }
  const parameters = operation.parameters.filter((param) => param.in === 'path')
  const parameterExamples: Record<string, Record<string, unknown>> = {}
  for (const parameter of parameters) {
    const examples = parameter.examples
    if (!examples) {
      if (!parameterExamples.default) parameterExamples.default = {}
      parameterExamples.default[parameter.name] = parameter.name.toUpperCase()
    } else {
      for (const key of Object.keys(examples)) {
        if (!parameterExamples[key]) parameterExamples[key] = {}
        parameterExamples[key][parameter.name] = examples[key].value
      }
    }
  }
  return parameterExamples
}
