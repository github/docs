// the tests in tests/graphql.js use this schema to ensure the integrity
// of the data in src/graphql/data/*.json

// PREVIEWS
export const previewsValidator = {
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

// UPCOMING CHANGES
export const upcomingChangesValidator = {
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

// SCHEMAS
// many GraphQL schema members have these core properties
const coreProps = {
  properties: {
    name: {
      type: 'string',
    },
    type: {
      type: 'string',
    },
    kind: {
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

corePropsPlusArgs.properties.args = {
  type: 'array',
  items: {
    type: 'object',
    properties: coreProps.properties,
  },
}

// the args object can have defaultValue prop
corePropsPlusArgs.properties.args.items.properties.defaultValue = {
  type: 'boolean',
}

const corePropsNoType = dup(coreProps)
delete corePropsNoType.properties.type

const corePropsNoDescription = dup(coreProps)
delete corePropsNoDescription.properties.description

// QUERIES
const queries = dup(corePropsPlusArgs)

queries.type = 'object'
queries.required = ['name', 'type', 'kind', 'id', 'href', 'description']

// MUTATIONS
const mutations = dup(corePropsNoType)

mutations.type = 'object'
mutations.required = ['name', 'kind', 'id', 'href', 'description', 'inputFields', 'returnFields']

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

// OBJECTS
const objects = dup(corePropsNoType)

objects.type = 'object'
objects.required = ['name', 'kind', 'id', 'href', 'description', 'fields']

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

// INTERFACES
const interfaces = dup(corePropsNoType)

interfaces.type = 'object'
interfaces.required = ['name', 'kind', 'id', 'href', 'description', 'fields']

interfaces.properties.fields = {
  type: 'array',
  items: {
    type: 'object',
    properties: corePropsPlusArgs.properties,
  },
}

// ENUMS
const enums = dup(corePropsNoType)

enums.type = 'object'
enums.required = ['name', 'kind', 'id', 'href', 'description', 'values']

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

// UNIONS
const unions = dup(corePropsNoType)

unions.type = 'object'
unions.required = ['name', 'kind', 'id', 'href', 'description', 'possibleTypes']

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

// INPUT OBJECTS
const inputObjects = dup(corePropsNoType)

inputObjects.type = 'object'
inputObjects.required = ['name', 'kind', 'id', 'href', 'description', 'inputFields']

inputObjects.properties.inputFields = {
  type: 'array',
  items: {
    type: 'object',
    properties: coreProps.properties,
  },
}

// SCALARS
const scalars = dup(corePropsNoType)

scalars.type = 'object'
scalars.required = ['name', 'id', 'href', 'description']

function dup(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export const schemaValidator = {
  queries,
  mutations,
  objects,
  interfaces,
  enums,
  unions,
  inputObjects,
  scalars,
}
