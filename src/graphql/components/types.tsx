export type PreviewT = {
  title: string
  description: string
  toggled_by: string
  toggled_on: []
  owning_teams: []
  accept_header: string
  href: string
  announcement: {
    date: string
    url: string
  }
  updates: {
    date: string
    url: string
  }
}

export type UpcomingChangesT = {
  location: string
  description: string
  reason: string
  date: string
  criticality: 'breaking' | 'dangerous'
  owner: string
}

export type GraphqlT = {
  name: string
  kind: string
  id: string
  href: string
  description: string
  type?: string
  size?: number
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewT
  defaultValue?: boolean
}

export type ImplementsT = {
  name: string
  id: string
  href: string
}

export type ArgumentT = {
  name: string
  description: string
  defaultValue?: string | boolean
  type: {
    name: string
    id: string
    kind: string
    href: string
  }
}

export type FieldT = GraphqlT & {
  arguments?: ArgumentT[]
}

export type QueryT = GraphqlT & {
  args: GraphqlT[]
}

export type MutationT = GraphqlT & {
  inputFields: FieldT[]
  returnFields: FieldT[]
}

export type ObjectT = GraphqlT & {
  fields: FieldT[]
  implements?: ImplementsT[]
}

export type InterfaceT = GraphqlT & {
  fields: FieldT[]
}

export type EnumValuesT = {
  name: string
  description: string
}

export type EnumT = GraphqlT & {
  values: EnumValuesT[]
}

export type UnionT = GraphqlT & {
  possibleTypes: ImplementsT[]
}

export type InputFieldsT = GraphqlT & {
  type: string
}

export type InputObjectT = GraphqlT & {
  inputFields: FieldT[]
}

export type ScalarT = GraphqlT & {
  kind?: string
}

export type AllVersionsT = {
  [versions: string]: {
    miscVersionName: string
  }
}

type ChangeT = {
  title: string
  changes: string[]
}

export type ChangelogItemT = {
  date: string
  schemaChanges: ChangeT[]
  previewChanges: ChangeT[]
  upcomingChanges: ChangeT[]
}

export type BreakingChangeT = {
  location: string
  description: string
  reason: string
  date: string
  criticality: string
}

export type BreakingChangesT = {
  [date: string]: BreakingChangeT[]
}
