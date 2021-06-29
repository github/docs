const { sortBy } = require('lodash')
const { parse, buildASTSchema } = require('graphql')
const helpers = require('./schema-helpers')
const fs = require('fs')

const externalScalars = JSON.parse(fs.readFileSync('../../../lib/graphql/non-schema-scalars.json'))
  .map(scalar => {
    scalar.id = helpers.getId(scalar.name)
    scalar.href = helpers.getFullLink('scalars', scalar.id)
    return scalar
  })

// select and format all the data from the schema that we need for the docs
// used in the build step by script/graphql/build-static-files.js
module.exports = async function processSchemas (idl, previewsPerVersion) {
  const schemaAST = parse(idl.toString())
  const schema = buildASTSchema(schemaAST)

  // list of objects is used when processing mutations
  const objectsInSchema = schemaAST.definitions.filter(def => def.kind === 'ObjectTypeDefinition')

  const data = {}

  data.queries = {
    connections: [],
    fields: []
  }
  data.mutations = []
  data.objects = []
  data.interfaces = []
  data.enums = []
  data.unions = []
  data.inputObjects = []
  data.scalars = []

  await Promise.all(schemaAST.definitions.map(async (def) => {
    // QUERIES
    if (def.name.value === 'Query') {
      await Promise.all(def.fields.map(async (field) => {
        const query = {}
        const queryArgs = []

        query.name = field.name.value
        query.type = helpers.getType(field)
        query.kind = helpers.getTypeKind(query.type, schema)
        query.id = helpers.getId(query.type)
        query.href = helpers.getFullLink(query.kind, query.id)
        query.description = await helpers.getDescription(field.description.value)
        query.isDeprecated = helpers.getDeprecationStatus(field.directives, query.name)
        query.deprecationReason = await helpers.getDeprecationReason(field.directives, query)
        query.preview = await helpers.getPreview(field.directives, query, previewsPerVersion)

        await Promise.all(field.arguments.map(async (arg) => {
          const queryArg = {}
          queryArg.name = arg.name.value
          queryArg.defaultValue = arg.defaultValue ? arg.defaultValue.value : undefined
          queryArg.type = helpers.getType(arg)
          queryArg.id = helpers.getId(queryArg.type)
          queryArg.kind = helpers.getTypeKind(queryArg.type, schema)
          queryArg.href = helpers.getFullLink(queryArg.kind, queryArg.id)
          queryArg.description = await helpers.getDescription(arg.description.value)
          queryArg.isDeprecated = helpers.getDeprecationStatus(arg.directives, queryArg.name)
          queryArg.deprecationReason = await helpers.getDeprecationReason(arg.directives, queryArg)
          queryArg.preview = await helpers.getPreview(arg.directives, queryArg, previewsPerVersion)
          queryArgs.push(queryArg)
        }))

        query.args = sortBy(queryArgs, 'name')

        // QUERY CONNECTIONS
        // QUERY FIELDS
        query.id.endsWith('connection')
          ? data.queries.connections.push(query)
          : data.queries.fields.push(query)
      }))

      return
    }

    // MUTATIONS
    if (def.name.value === 'Mutation') {
      await Promise.all(def.fields.map(async (field) => {
        const mutation = {}
        const inputFields = []
        const returnFields = []

        mutation.name = field.name.value
        mutation.kind = helpers.getKind(def.name.value)
        mutation.id = helpers.getId(mutation.name)
        mutation.href = helpers.getFullLink('mutations', mutation.id)
        mutation.description = await helpers.getDescription(field.description.value)
        mutation.isDeprecated = helpers.getDeprecationStatus(field.directives, mutation.name)
        mutation.deprecationReason = await helpers.getDeprecationReason(field.directives, mutation)
        mutation.preview = await helpers.getPreview(field.directives, mutation, previewsPerVersion)

        // there is only ever one input field argument, but loop anyway
        await Promise.all(field.arguments.map(async (field) => {
          const inputField = {}
          inputField.name = field.name.value
          inputField.type = helpers.getType(field)
          inputField.id = helpers.getId(inputField.type)
          inputField.kind = helpers.getTypeKind(inputField.type, schema)
          inputField.href = helpers.getFullLink(inputField.kind, inputField.id)
          inputFields.push(inputField)
        }))

        mutation.inputFields = sortBy(inputFields, 'name')

        // get return fields
        // first get the payload, then find payload object's fields. these are the mutation's return fields.
        const returnType = helpers.getType(field)
        const mutationReturnFields = objectsInSchema.find(obj => obj.name.value === returnType)

        if (!mutationReturnFields) console.log(`no return fields found for ${returnType}`)

        await Promise.all(mutationReturnFields.fields.map(async (field) => {
          const returnField = {}
          returnField.name = field.name.value
          returnField.type = helpers.getType(field)
          returnField.id = helpers.getId(returnField.type)
          returnField.kind = helpers.getTypeKind(returnField.type, schema)
          returnField.href = helpers.getFullLink(returnField.kind, returnField.id)
          returnField.description = await helpers.getDescription(field.description.value)
          returnField.isDeprecated = helpers.getDeprecationStatus(field.directives, returnField.name)
          returnField.deprecationReason = await helpers.getDeprecationReason(field.directives, returnField)
          returnField.preview = await helpers.getPreview(field.directives, returnField, previewsPerVersion)
          returnFields.push(returnField)
        }))

        mutation.returnFields = sortBy(returnFields, 'name')

        data.mutations.push(mutation)
      }))
      return
    }

    // OBJECTS
    if (def.kind === 'ObjectTypeDefinition') {
      // objects ending with 'Payload' are only used to derive mutation values
      // they are not included in the objects docs
      if (def.name.value.endsWith('Payload')) return

      const object = {}
      const objectImplements = []
      const objectFields = []

      object.name = def.name.value
      object.kind = helpers.getKind(def.kind)
      object.id = helpers.getId(object.name)
      object.href = helpers.getFullLink('objects', object.id)
      object.description = await helpers.getDescription(def.description.value)
      object.isDeprecated = helpers.getDeprecationStatus(def.directives, object.name)
      object.deprecationReason = await helpers.getDeprecationReason(def.directives, object)
      object.preview = await helpers.getPreview(def.directives, object, previewsPerVersion)

      // an object's interfaces render in the `Implements` section
      // interfaces do not have directives so they cannot be under preview/deprecated
      if (def.interfaces.length) {
        await Promise.all(def.interfaces.map(async (graphqlInterface) => {
          const objectInterface = {}
          objectInterface.name = graphqlInterface.name.value
          objectInterface.id = helpers.getId(objectInterface.name)
          objectInterface.href = helpers.getFullLink('interfaces', objectInterface.id)
          objectImplements.push(objectInterface)
        }))
      }

      // an object's fields render in the `Fields` section
      if (def.fields.length) {
        await Promise.all(def.fields.map(async (field) => {
          if (!field.description) return
          const objectField = {}

          objectField.name = field.name.value
          objectField.description = await helpers.getDescription(field.description.value)
          objectField.type = helpers.getType(field)
          objectField.id = helpers.getId(objectField.type)
          objectField.kind = helpers.getTypeKind(objectField.type, schema)
          objectField.href = helpers.getFullLink(objectField.kind, objectField.id)
          objectField.arguments = await helpers.getArguments(field.arguments, schema)
          objectField.isDeprecated = helpers.getDeprecationStatus(field.directives)
          objectField.deprecationReason = await helpers.getDeprecationReason(field.directives, objectField)
          objectField.preview = await helpers.getPreview(field.directives, objectField, previewsPerVersion)

          objectFields.push(objectField)
        }))
      }

      if (objectImplements.length) object.implements = sortBy(objectImplements, 'name')
      if (objectFields.length) object.fields = sortBy(objectFields, 'name')

      data.objects.push(object)
      return
    }

    // INTERFACES
    if (def.kind === 'InterfaceTypeDefinition') {
      const graphqlInterface = {}
      const interfaceFields = []

      graphqlInterface.name = def.name.value
      graphqlInterface.kind = helpers.getKind(def.kind)
      graphqlInterface.id = helpers.getId(graphqlInterface.name)
      graphqlInterface.href = helpers.getFullLink('interfaces', graphqlInterface.id)
      graphqlInterface.description = await helpers.getDescription(def.description.value)
      graphqlInterface.isDeprecated = helpers.getDeprecationStatus(def.directives)
      graphqlInterface.deprecationReason = await helpers.getDeprecationReason(def.directives, graphqlInterface)
      graphqlInterface.preview = await helpers.getPreview(def.directives, graphqlInterface, previewsPerVersion)

      // an interface's fields render in the "Fields" section
      if (def.fields.length) {
        await Promise.all(def.fields.map(async (field) => {
          if (!field.description) return
          const interfaceField = {}

          interfaceField.name = field.name.value
          interfaceField.description = await helpers.getDescription(field.description.value)
          interfaceField.type = helpers.getType(field)
          interfaceField.id = helpers.getId(interfaceField.type)
          interfaceField.kind = helpers.getTypeKind(interfaceField.type, schema)
          interfaceField.href = helpers.getFullLink(interfaceField.kind, interfaceField.id)
          interfaceField.arguments = await helpers.getArguments(field.arguments, schema)
          interfaceField.isDeprecated = helpers.getDeprecationStatus(field.directives)
          interfaceField.deprecationReason = await helpers.getDeprecationReason(field.directives, interfaceField)
          interfaceField.preview = await helpers.getPreview(field.directives, interfaceField, previewsPerVersion)

          interfaceFields.push(interfaceField)
        }))
      }

      graphqlInterface.fields = sortBy(interfaceFields, 'name')

      data.interfaces.push(graphqlInterface)
      return
    }

    // ENUMS
    if (def.kind === 'EnumTypeDefinition') {
      const graphqlEnum = {}
      const enumValues = []

      graphqlEnum.name = def.name.value
      graphqlEnum.kind = helpers.getKind(def.kind)
      graphqlEnum.id = helpers.getId(graphqlEnum.name)
      graphqlEnum.href = helpers.getFullLink('enums', graphqlEnum.id)
      graphqlEnum.description = await helpers.getDescription(def.description.value)
      graphqlEnum.isDeprecated = helpers.getDeprecationStatus(def.directives)
      graphqlEnum.deprecationReason = await helpers.getDeprecationReason(def.directives, graphqlEnum)
      graphqlEnum.preview = await helpers.getPreview(def.directives, graphqlEnum, previewsPerVersion)

      await Promise.all(def.values.map(async (value) => {
        const enumValue = {}
        enumValue.name = value.name.value
        enumValue.description = await helpers.getDescription(value.description.value)
        enumValues.push(enumValue)
      }))

      graphqlEnum.values = sortBy(enumValues, 'name')

      data.enums.push(graphqlEnum)
      return
    }

    // UNIONS
    if (def.kind === 'UnionTypeDefinition') {
      const union = {}
      const possibleTypes = []

      union.name = def.name.value
      union.kind = helpers.getKind(def.kind)
      union.id = helpers.getId(union.name)
      union.href = helpers.getFullLink('unions', union.id)
      union.description = await helpers.getDescription(def.description.value)
      union.isDeprecated = helpers.getDeprecationStatus(def.directives)
      union.deprecationReason = await helpers.getDeprecationReason(def.directives, union)
      union.preview = await helpers.getPreview(def.directives, union, previewsPerVersion)

      // union types do not have directives so cannot be under preview/deprecated
      await Promise.all(def.types.map(async (type) => {
        const possibleType = {}
        possibleType.name = type.name.value
        possibleType.id = helpers.getId(possibleType.name)
        possibleType.href = helpers.getFullLink('objects', possibleType.id)
        possibleTypes.push(possibleType)
      }))

      union.possibleTypes = sortBy(possibleTypes, 'name')

      data.unions.push(union)
      return
    }

    // INPUT OBJECTS
    // NOTE: input objects ending with `Input` are NOT included in the v4 input objects sidebar
    // but they are still present in the docs (e.g., https://developer.github.com/v4/input_object/acceptenterpriseadministratorinvitationinput/)
    // so we will include them here
    if (def.kind === 'InputObjectTypeDefinition') {
      const inputObject = {}
      const inputFields = []

      inputObject.name = def.name.value
      inputObject.kind = helpers.getKind(def.kind)
      inputObject.id = helpers.getId(inputObject.name)
      inputObject.href = helpers.getFullLink('input-objects', inputObject.id)
      inputObject.description = await helpers.getDescription(def.description.value)
      inputObject.isDeprecated = helpers.getDeprecationStatus(def.directives)
      inputObject.deprecationReason = await helpers.getDeprecationReason(def.directives, inputObject)
      inputObject.preview = await helpers.getPreview(def.directives, inputObject, previewsPerVersion)

      if (def.fields.length) {
        await Promise.all(def.fields.map(async (field) => {
          const inputField = {}

          inputField.name = field.name.value
          inputField.description = await helpers.getDescription(field.description.value)
          inputField.type = helpers.getType(field)
          inputField.id = helpers.getId(inputField.type)
          inputField.kind = helpers.getTypeKind(inputField.type, schema)
          inputField.href = helpers.getFullLink(inputField.kind, inputField.id)
          inputField.isDeprecated = helpers.getDeprecationStatus(field.directives)
          inputField.deprecationReason = await helpers.getDeprecationReason(field.directives, inputField)
          inputField.preview = await helpers.getPreview(field.directives, inputField, previewsPerVersion)

          inputFields.push(inputField)
        }))
      }

      inputObject.inputFields = sortBy(inputFields, 'name')

      data.inputObjects.push(inputObject)
      return
    }

    // SCALARS
    if (def.kind === 'ScalarTypeDefinition') {
      const scalar = {}
      scalar.name = def.name.value
      scalar.kind = helpers.getKind(def.kind)
      scalar.id = helpers.getId(scalar.name)
      scalar.href = helpers.getFullLink('scalars', scalar.id)
      scalar.description = await helpers.getDescription(def.description.value)
      scalar.isDeprecated = helpers.getDeprecationStatus(def.directives)
      scalar.deprecationReason = await helpers.getDeprecationReason(def.directives, scalar)
      scalar.preview = await helpers.getPreview(def.directives, scalar, previewsPerVersion)
      data.scalars.push(scalar)
    }
  }))

  // add non-schema scalars and sort all scalars alphabetically
  data.scalars = sortBy(data.scalars.concat(externalScalars), 'name')

  // sort all the types alphabetically
  data.queries.connections = sortBy(data.queries.connections, 'name')
  data.queries.fields = sortBy(data.queries.fields, 'name')
  data.mutations = sortBy(data.mutations, 'name')
  data.objects = sortBy(data.objects, 'name')
  data.interfaces = sortBy(data.interfaces, 'name')
  data.enums = sortBy(data.enums, 'name')
  data.unions = sortBy(data.unions, 'name')
  data.inputObjects = sortBy(data.inputObjects, 'name')
  data.scalars = sortBy(data.scalars, 'name')

  return data
}
