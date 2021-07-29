#!/usr/bin/env node
import renderContent from '../../../lib/render-content/index.js'
import fs from 'fs'
import xGraphql from 'graphql'
import path from 'path'

const graphqlTypes = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), './lib/graphql/types.json'))
)
const { isScalarType, isObjectType, isInterfaceType, isUnionType, isEnumType, isInputObjectType } =
  xGraphql

const singleQuotesInsteadOfBackticks = / '(\S+?)' /

function addPeriod(string) {
  return string.endsWith('.') ? string : string + '.'
}

async function getArguments(args, schema) {
  if (!args.length) return

  const newArgs = []

  for (const arg of args) {
    const newArg = {}
    const type = {}
    newArg.name = arg.name.value
    newArg.defaultValue = arg.defaultValue ? arg.defaultValue.value : undefined
    newArg.description = await getDescription(arg.description.value)
    type.name = getType(arg)
    type.id = getId(type.name)
    type.kind = getTypeKind(type.name, schema)
    type.href = getFullLink(type.kind, type.id)
    newArg.type = type
    newArgs.push(newArg)
  }

  return newArgs
}

async function getDeprecationReason(directives, schemaMember) {
  if (!schemaMember.isDeprecated) return

  // it's possible for a schema member to be deprecated and under preview
  const deprecationDirective = directives.filter((dir) => dir.name.value === 'deprecated')

  // catch any schema members that have more than one deprecation (none currently)
  if (deprecationDirective.length > 1)
    console.log(`more than one deprecation found for ${schemaMember.name}`)

  return renderContent(deprecationDirective[0].arguments[0].value.value)
}

function getDeprecationStatus(directives) {
  if (!directives.length) return

  return directives[0].name.value === 'deprecated'
}

async function getDescription(rawDescription) {
  rawDescription = rawDescription.replace(singleQuotesInsteadOfBackticks, '`$1`')

  return renderContent(addPeriod(rawDescription))
}

function getFullLink(baseType, id) {
  return `/graphql/reference/${baseType}#${id}`
}

function getId(path) {
  return removeMarkers(path).toLowerCase()
}

// e.g., given `ObjectTypeDefinition`, get `objects`
function getKind(type) {
  return graphqlTypes.find((graphqlType) => graphqlType.type === type).kind
}

async function getPreview(directives, schemaMember, previewsPerVersion) {
  if (!directives.length) return

  // it's possible for a schema member to be deprecated and under preview
  const previewDirective = directives.filter((dir) => dir.name.value === 'preview')
  if (!previewDirective.length) return

  // catch any schema members that are under more than one preview (none currently)
  if (previewDirective.length > 1)
    console.log(`more than one preview found for ${schemaMember.name}`)

  // an input object's input field may have a ListValue directive that is not relevant to previews
  if (previewDirective[0].arguments[0].value.kind !== 'StringValue') return

  const previewName = previewDirective[0].arguments[0].value.value

  const preview = previewsPerVersion.find((p) => p.toggled_by.includes(previewName))
  if (!preview) console.error(`cannot find "${previewName}" in graphql_previews.yml`)

  return preview
}

// the docs use brackets to denote list types: `[foo]`
// and an exclamation mark to denote non-nullable types: `foo!`
// both single items and lists can be non-nullable
// so the permutations are:
// 1. single items: `foo`, `foo!`
// 2. nullable lists: `[foo]`, `[foo!]`
// 3. non-null lists: `[foo]!`, `[foo!]!`
// see https://github.com/rmosolgo/graphql-ruby/blob/master/guides/type_definitions/lists.md#lists-nullable-lists-and-lists-of-nulls
function getType(field) {
  // 1. single items
  if (field.type.kind !== 'ListType') {
    // nullable item, e.g. `license` query has `License` type
    if (field.type.kind === 'NamedType') {
      return field.type.name.value
    }

    // non-null item, e.g. `meta` query has `GitHubMetadata!` type
    if (field.type.kind === 'NonNullType' && field.type.type.kind === 'NamedType') {
      return `${field.type.type.name.value}!`
    }
  }
  // 2. nullable lists
  if (field.type.kind === 'ListType') {
    // nullable items, e.g. `codesOfConduct` query has `[CodeOfConduct]` type
    if (field.type.type.kind === 'NamedType') {
      return `[${field.type.type.name.value}]`
    }

    // non-null items, e.g. `severities` arg has `[SecurityAdvisorySeverity!]` type
    if (field.type.type.kind === 'NonNullType' && field.type.type.type.kind === 'NamedType') {
      return `[${field.type.type.type.name.value}!]`
    }
  }

  // 3. non-null lists
  if (field.type.kind === 'NonNullType' && field.type.type.kind === 'ListType') {
    // nullable items, e.g. `licenses` query has `[License]!` type
    if (field.type.type.type.kind === 'NamedType') {
      return `[${field.type.type.type.name.value}]!`
    }

    // non-null items, e.g. `marketplaceCategories` query has `[MarketplaceCategory!]!` type
    if (
      field.type.type.type.kind === 'NonNullType' &&
      field.type.type.type.type.kind === 'NamedType'
    ) {
      return `[${field.type.type.type.type.name.value}!]!`
    }
  }

  console.error(`cannot get type of ${field.name.value}`)
}

function getTypeKind(type, schema) {
  type = removeMarkers(type)

  const typeFromSchema = schema.getType(type)

  if (isScalarType(typeFromSchema)) {
    return 'scalars'
  }
  if (isObjectType(typeFromSchema)) {
    return 'objects'
  }
  if (isInterfaceType(typeFromSchema)) {
    return 'interfaces'
  }
  if (isUnionType(typeFromSchema)) {
    return 'unions'
  }
  if (isEnumType(typeFromSchema)) {
    return 'enums'
  }
  if (isInputObjectType(typeFromSchema)) {
    return 'input-objects'
  }

  console.error(`cannot find type kind of ${type}`)
}

function removeMarkers(str) {
  return str.replace('[', '').replace(']', '').replace(/!/g, '')
}

export default {
  getArguments,
  getDeprecationReason,
  getDeprecationStatus,
  getDescription,
  getFullLink,
  getId,
  getKind,
  getPreview,
  getType,
  getTypeKind,
}
