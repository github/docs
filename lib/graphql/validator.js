// the tests in tests/graphql.js use this schema to ensure the integrity
// of the data in lib/graphql/static/*.json

// PREVIEWS
export const previewsValidator = {
  properties: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    toggled_by: {
      type: 'string',
      required: true,
    },
    toggled_on: {
      type: 'array',
      required: true,
    },
    owning_teams: {
      type: 'array',
      required: true,
    },
    accept_header: {
      type: 'string',
      required: true,
    },
    href: {
      type: 'string',
      required: true,
    },
  },
}

// UPCOMING CHANGES
export const upcomingChangesValidator = {
  properties: {
    location: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    reason: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
      pattern: /^\d{4}-\d{2}-\d{2}$/,
    },
    criticality: {
      type: 'string',
      required: true,
      pattern: '(breaking|dangerous)',
    },
    owner: {
      type: 'string',
      required: true,
      pattern: /^[\S]*$/,
    },
  },
}

// SCHEMAS
// many GraphQL schema members have these core properties
const coreProps = {
  properties: {
    name: {
      type: 'string',
      required: true,
    },
    type: {
      type: 'string',
      required: true,
    },
    kind: {
      type: 'string',
      required: true,
    },
    id: {
      type: 'string',
      required: true,
    },
    href: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    isDeprecated: {
      type: 'boolean',
      required: false,
    },
    preview: {
      type: 'object',
      required: false,
      properties: previewsValidator.properties,
    },
  },
}

// some GraphQL schema members have the core properties plus an 'args' object
const corePropsPlusArgs = dup(coreProps)

corePropsPlusArgs.properties.args = {
  type: 'array',
  required: false,
  properties: coreProps.properties,
}

// the args object can have defaultValue prop
corePropsPlusArgs.properties.args.properties.defaultValue = {
  type: 'boolean',
  required: false,
}

const corePropsNoType = dup(coreProps)
delete corePropsNoType.properties.type

const corePropsNoDescription = dup(coreProps)
delete corePropsNoDescription.properties.description

// QUERY CONNECTIONS AND FIELDS
const queryConnections = corePropsPlusArgs
const queryFields = corePropsPlusArgs

// MUTATIONS
const mutations = dup(corePropsNoType)

mutations.properties.inputFields = {
  type: 'array',
  required: true,
  properties: corePropsNoDescription.properties,
}

mutations.properties.returnFields = {
  type: 'array',
  required: true,
  properties: coreProps.properties,
}

// OBJECTS
const objects = dup(corePropsNoType)

objects.properties.fields = {
  type: 'array',
  required: true,
  properties: corePropsPlusArgs.properties,
}

objects.properties.implements = {
  type: 'array',
  required: false,
  properties: {
    name: {
      type: 'string',
      required: true,
    },
    id: {
      type: 'string',
      required: true,
    },
    href: {
      type: 'string',
      required: true,
    },
  },
}

// INTERFACES
const interfaces = dup(corePropsNoType)

interfaces.properties.fields = {
  type: 'array',
  required: true,
  properties: corePropsPlusArgs.properties,
}

// ENUMS
const enums = dup(corePropsNoType)

enums.properties.values = {
  type: 'array',
  required: true,
  properties: {
    name: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
  },
}

// UNIONS
const unions = dup(corePropsNoType)

unions.properties.possibleTypes = {
  type: 'array',
  required: true,
  properties: {
    name: {
      type: 'string',
      required: true,
    },
    id: {
      type: 'string',
      required: true,
    },
    href: {
      type: 'string',
      required: true,
    },
  },
}

// INPUT OBJECTS
const inputObjects = dup(corePropsNoType)

inputObjects.properties.inputFields = {
  type: 'array',
  required: true,
  properties: coreProps.properties,
}

// SCALARS
const scalars = dup(corePropsNoType)
scalars.properties.kind.required = false

function dup(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export const schemaValidator = {
  queryConnections,
  queryFields,
  mutations,
  objects,
  interfaces,
  enums,
  unions,
  inputObjects,
  scalars,
}
