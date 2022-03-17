export interface Operation {
  verb: string
  summary: string
  slug: string
  descriptionHTML: string
  notes: Array<string>
  requestPath: string
  responses: Array<CodeResponse>
  hasRequiredPreviews: boolean
  parameters: Array<Parameter>
  bodyParameters: Array<BodyParameter>
  'x-github': xGitHub
  'x-codeSamples': Array<xCodeSample>
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

export interface xGitHub {
  category: string
  enabledForGitHubApps: boolean
  previews: Array<Preview> | []
}

export interface CodeResponse {
  description: string
  httpStatusCode: string
  httpStatusMessage: string
  payload: string
}

export interface xCodeSample {
  lang: string
  source: string
}

export interface Preview {
  html: string
  required: boolean
  name: string
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
