export interface Operation {
  verb: string
  title: string
  descriptionHTML: string
  previews: Array<string>
  requestPath: string
  serverUrl: string
  statusCodes: Array<StatusCode>
  parameters: Array<Parameter>
  bodyParameters: Array<BodyParameter>
  category: string
  subcategory: string
  enabledForGitHubApps: boolean
  codeExamples: Array<CodeSample>
}

export interface Parameter {
  in: string
  name: string
  description: string
  required: boolean
  schema: {
    type: string
    default?: string
    enum?: Array<string>
  }
}

export interface StatusCode {
  description: string
  httpStatusCode: string
  httpStatusMessage: string
}

export interface CodeSample {
  key: string
  response: {
    contentType: string
    description: string
    example: Record<string, string>
    statusCode: string
  }
  request: {
    contentType: string
    acceptHeader: string
    bodyParameters: Record<string, string>
    parameters: Record<string, string>
    description: string
  }
}

export interface BodyParameter {
  in: string
  name: string
  description: string
  type: string
  isRequired: boolean
  default?: string
  enum?: Array<string>
  childParamsGroups?: Array<ChildParamsGroup>
}

export interface ChildParamsGroup {
  id: string
  params: Array<ChildParameter>
  parentName: string
  parentType: string
}

export interface ChildParameter {
  name: string
  description: string
  type: string
  isRequired: boolean
  enum?: Array<string>
  default?: string
}

export type ExampleT = {
  description: string
  curl: string
  javascript: string
  ghcli?: string
  response: {
    statusCode: string
    contentType?: string
    description: string
    example?: Object
    schema?: Object
  }
}

export type LanguageOptionT = {
  key: keyof ExampleT
  text: string
}
