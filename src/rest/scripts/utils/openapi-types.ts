// OpenAPI descriptions vary by endpoint, so these shared REST sync types keep
// index signatures for unmodeled fields while declaring the fields this pipeline
// reads.

export interface OpenApiMediaType {
  example?: unknown
  examples?: Record<string, { summary?: string; value?: unknown }>
  schema?: unknown
  [key: string]: unknown
}

export interface OpenApiResponse {
  description?: string
  content?: Record<string, OpenApiMediaType>
  [key: string]: unknown
}

export interface OpenApiParameterSchema {
  type?: string | string[]
  default?: unknown
  enum?: unknown[]
  [key: string]: unknown
}

export interface OpenApiParameter {
  in?: string
  name: string
  description?: string
  required?: boolean
  deprecated?: boolean
  example?: unknown
  examples?: Record<string, { value?: unknown }>
  schema?: OpenApiParameterSchema
  [key: string]: unknown
}

export interface OpenApiServer {
  url: string
  variables?: Record<string, { default: string }>
  [key: string]: unknown
}

export interface OpenApiRequestBody {
  content: Record<string, OpenApiMediaType>
  [key: string]: unknown
}

export interface OpenApiGitHubExtension {
  category: string
  subcategory: string
  previews?: Array<{ note: string; [key: string]: unknown }>
  [key: string]: unknown
}

export interface OpenApiOperation {
  summary?: string
  description?: string
  operationId?: string
  servers?: OpenApiServer[]
  parameters?: OpenApiParameter[]
  requestBody?: OpenApiRequestBody
  responses: Record<string, OpenApiResponse>
  previews?: unknown[]
  'x-github': OpenApiGitHubExtension
  // Operation adds these fields during processing.
  serverUrl?: string
  requestPath?: string
  verb?: string
  tags?: string[]
  [key: string]: unknown
}

export interface OpenApiSchema {
  openapi?: string
  info?: unknown
  servers?: OpenApiServer[]
  paths?: Record<string, Record<string, OpenApiOperation>>
  [key: string]: unknown
}
