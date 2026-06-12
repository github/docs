// Loose-but-typed OpenAPI shapes shared across the REST sync pipeline
// (get-operations, operation, create-rest-examples, inject-models-schema, sync).
//
// The upstream OpenAPI descriptions are dynamic and vary by endpoint, so each
// interface keeps an index signature escape hatch (`[key: string]: unknown`)
// for properties we don't model explicitly. This replaces the `any` types these
// modules previously used while still describing the fields the code reads.

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
  // Attached during processing by the Operation class
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
