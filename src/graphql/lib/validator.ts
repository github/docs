// the tests in tests/graphql.ts use this schema to ensure the integrity
// of the data in src/graphql/data/*.json

interface JSONSchema {
  type?: string
  required?: string[]
  properties?: Record<string, JSONSchema>
  items?: JSONSchema
  pattern?: string
}

interface ValidatorSchema extends JSONSchema {
  type: 'object'
  required: string[]
  properties: Record<string, JSONSchema>
}

export const previewsValidator: ValidatorSchema = {
  type: 'object',
  required: [
    'title',
    'description',
    'toggled_by',
    'toggled_on',
    'owning_teams',
    'accept_header',
    'href',
  ],
  properties: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    toggled_by: {
      type: 'string',
    },
    toggled_on: {
      type: 'array',
    },
    owning_teams: {
      type: 'array',
    },
    accept_header: {
      type: 'string',
    },
    href: {
      type: 'string',
    },
  },
}

export const upcomingChangesValidator: ValidatorSchema = {
  type: 'object',
  required: ['location', 'description', 'reason', 'date', 'criticality', 'owner'],
  properties: {
    location: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    reason: {
      type: 'string',
    },
    date: {
      type: 'string',
      pattern: '^\\d{4}-\\d{2}-\\d{2}$',
    },
    criticality: {
      type: 'string',
      pattern: '(breaking|dangerous)',
    },
    owner: {
      type: 'string',
      pattern: '^[\\S]*$',
    },
  },
}

// many GraphQL schema members have these core properties
const coreProps: JSONSchema = {
  properties: {
    name: {
      type: 'string',
    },
    type: {
      type: 'string',
    },
    id: {
      type: 'string',
    },
    href: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    isDeprecated: {
      type: 'boolean',
    },
    preview: {
      type: 'object',
      properties: previewsValidator.properties,
    },
  },
}

// some GraphQL schema members have the core properties plus an 'args' object
const corePropsPlusArgs = dup(coreProps)

corePropsPlusArgs.properties!.args = {
  type: 'array',
  items: {
    type: 'object',
    properties: coreProps.properties,
  },
}

// the args object can have defaultValue prop
corePropsPlusArgs.properties!.args.items!.properties!.defaultValue = {
  type: 'boolean',
}

const corePropsNoType = dup(coreProps)
delete corePropsNoType.properties!.type

const corePropsNoDescription = dup(coreProps)
delete corePropsNoDescription.properties!.description

const queries = dup(corePropsPlusArgs) as ValidatorSchema

queries.type = 'object'
queries.required = ['name', 'type', 'id', 'href', 'description']

const mutations = dup(corePropsNoType) as ValidatorSchema

mutations.type = 'object'
mutations.required = ['name', 'id', 'href', 'description', 'inputFields', 'returnFields']

mutations.properties.inputFields = {
  type: 'array',
  items: {
    type: 'object',
    properties: corePropsNoDescription.properties,
  },
}

mutations.properties.returnFields = {
  type: 'array',
  items: {
    type: 'object',
    properties: coreProps.properties,
  },
}

const objects = dup(corePropsNoType) as ValidatorSchema

objects.type = 'object'
objects.required = ['name', 'id', 'href', 'description', 'fields']

objects.properties.fields = {
  type: 'array',
  items: {
    type: 'object',
    properties: corePropsPlusArgs.properties,
  },
}

objects.properties.implements = {
  type: 'array',
  items: {
    type: 'object',
    required: ['name', 'id', 'href'],
    properties: {
      name: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      href: {
        type: 'string',
      },
    },
  },
}

const interfaces = dup(corePropsNoType) as ValidatorSchema

interfaces.type = 'object'
interfaces.required = ['name', 'id', 'href', 'description', 'fields']

interfaces.properties.fields = {
  type: 'array',
  items: {
    type: 'object',
    properties: corePropsPlusArgs.properties,
  },
}

const enums = dup(corePropsNoType) as ValidatorSchema

enums.type = 'object'
enums.required = ['name', 'id', 'href', 'description', 'values']

enums.properties.values = {
  type: 'array',
  items: {
    type: 'object',
    required: ['name', 'description'],
    properties: {
      name: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
    },
  },
}

const unions = dup(corePropsNoType) as ValidatorSchema

unions.type = 'object'
unions.required = ['name', 'id', 'href', 'description', 'possibleTypes']

unions.properties.possibleTypes = {
  type: 'array',
  items: {
    type: 'object',
    required: ['name', 'id', 'href'],
    properties: {
      name: {
        type: 'string',
      },
      id: {
        type: 'string',
      },
      href: {
        type: 'string',
      },
    },
  },
}

const inputObjects = dup(corePropsNoType) as ValidatorSchema

inputObjects.type = 'object'
inputObjects.required = ['name', 'id', 'href', 'description', 'inputFields']

inputObjects.properties.inputFields = {
  type: 'array',
  items: {
    type: 'object',
    properties: coreProps.properties,
  },
}

const scalars = dup(corePropsNoType) as ValidatorSchema

scalars.type = 'object'
scalars.required = ['name', 'id', 'href', 'description']

function dup<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj))
}

interface SchemaValidators {
  queries: ValidatorSchema
  mutations: ValidatorSchema
  objects: ValidatorSchema
  interfaces: ValidatorSchema
  enums: ValidatorSchema
  unions: ValidatorSchema
  inputObjects: ValidatorSchema
  scalars: ValidatorSchema
}

export const schemaValidator: SchemaValidators = {
  queries,
  mutations,
  objects,
  interfaces,
  enums,
  unions,
  inputObjects,
  scalars,
}
