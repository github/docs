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
  type?: string
  isRequired?: boolean
  enum?: Array<string | null>
  default?: string | boolean | number | undefined | string[]
  childParamsGroups?: ChildParameter[]
  oneOfObject?: boolean
}
