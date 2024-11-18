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
  codeExamples: Array<CodeSample>
  progAccess: ProgAccessT
}

export interface ProgAccessT {
  userToServerRest?: boolean
  serverToServer?: boolean
  fineGrainedPat?: boolean
  permissions: Array<Object>
  allowPermissionlessAccess?: boolean
  allowsPublicRead?: boolean
  basicAuth?: boolean
}

export interface Parameter {
  exampleName?: string
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
    bodyParameters: Record<string, string | Array<string | { [key: string]: string }>>
    parameters: Record<string, string>
    description: string
  }
}

export interface BodyParameter {
  in: string
  name: string
  description: string
  type: string
  isRequired?: boolean
  default?: string
  enum?: Array<string>
  childParamsGroups?: Array<ChildParameter>
}

export interface ChildParameter {
  name: string
  description: string
  type: string
  isRequired?: boolean
  enum?: Array<string>
  default?: string
  childParamsGroups?: ChildParameter[]
}

export type ExampleT = {
  description: string
  [CodeSampleKeys.curl]?: string
  [CodeSampleKeys.javascript]?: string
  [CodeSampleKeys.ghcli]?: string
  response: {
    statusCode: string
    contentType?: string
    description: string
    example?: Object
    schema?: Object
  }
}

export enum ResponseKeys {
  example = 'example',
  schema = 'schema',
}

export enum CodeSampleKeys {
  curl = 'curl',
  javascript = 'javascript',
  ghcli = 'ghcli',
}
