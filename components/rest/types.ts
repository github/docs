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
  descriptionHTML: string
  required: boolean
  schema: {
    type: string
    default?: string
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
  childParamsGroups?: Array<ChildParamsGroup>
  default?: string
  description: string
  type: string
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
}

export interface RestCategoryOperationsT {
  [subcategory: string]: Operation[]
}
