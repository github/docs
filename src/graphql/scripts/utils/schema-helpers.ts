import { renderContent } from '@/content-render/index'
import fs from 'fs/promises'
import {
  isScalarType,
  isObjectType,
  isInterfaceType,
  isUnionType,
  isEnumType,
  isInputObjectType,
  GraphQLSchema,
} from 'graphql'
import path from 'path'

interface GraphQLTypeInfo {
  type: string
  kind: string
}

interface TypeInfo {
  name: string
  id: string
  kind: string
  href: string
}

interface ArgumentInfo {
  name: string
  defaultValue?: any // GraphQL default values can be of various types
  description: string
  type: TypeInfo
}

interface FieldNode {
  name: { value: string }
  type: any // GraphQL AST type nodes have complex nested structure
}

interface ArgumentNode {
  name: { value: string }
  defaultValue?: { value: any } // GraphQL default values can be of various types
  description: { value: string }
  type: any // GraphQL AST type nodes have complex nested structure
}

interface DirectiveNode {
  name: { value: string }
  arguments: Array<{ value: { value: string; kind?: string } }>
}

interface SchemaMember {
  name: string
  isDeprecated?: boolean
}

interface PreviewInfo {
  toggled_by: string[]
}

const graphqlTypes: GraphQLTypeInfo[] = JSON.parse(
  await fs.readFile(path.join(process.cwd(), './src/graphql/lib/types.json'), 'utf-8'),
)

const singleQuotesInsteadOfBackticks = / '(\S+?)' /

function addPeriod(string: string): string {
  return string.endsWith('.') ? string : string + '.'
}

async function getArguments(
  args: ArgumentNode[],
  schema: GraphQLSchema,
): Promise<ArgumentInfo[] | undefined> {
  if (!args.length) return

  const newArgs: ArgumentInfo[] = []

  for (const arg of args) {
    const newArg: Partial<ArgumentInfo> = {}
    const type: Partial<TypeInfo> = {}
    newArg.name = arg.name.value
    newArg.defaultValue = arg.defaultValue ? arg.defaultValue.value : undefined
    newArg.description = await getDescription(arg.description.value)
    const typeName = getType(arg)
    if (!typeName) continue // Skip if type cannot be determined
    type.name = typeName
    type.id = getId(typeName)
    const typeKind = getTypeKind(typeName, schema)
    if (!typeKind) continue // Skip if type kind cannot be determined
    type.kind = typeKind
    type.href = getFullLink(typeKind, type.id)
    newArg.type = type as TypeInfo
    newArgs.push(newArg as ArgumentInfo)
  }

  return newArgs
}

async function getDeprecationReason(
  directives: DirectiveNode[],
  schemaMember: SchemaMember,
): Promise<string | undefined> {
  if (!schemaMember.isDeprecated) return

  // it's possible for a schema member to be deprecated and under preview
  const deprecationDirective = directives.filter((dir) => dir.name.value === 'deprecated')

  // catch any schema members that have more than one deprecation (none currently)
  if (deprecationDirective.length > 1)
    console.log(`more than one deprecation found for ${schemaMember.name}`)

  return renderContent(deprecationDirective[0].arguments[0].value.value)
}

function getDeprecationStatus(directives: DirectiveNode[]): boolean | undefined {
  if (!directives.length) return

  return directives[0].name.value === 'deprecated'
}

async function getDescription(rawDescription: string): Promise<string> {
  rawDescription = rawDescription.replace(singleQuotesInsteadOfBackticks, '`$1`')

  return renderContent(addPeriod(rawDescription))
}

function getFullLink(baseType: string, id: string): string {
  return `/graphql/reference/${baseType}#${id}`
}

function getId(path: string): string {
  return removeMarkers(path).toLowerCase()
}

// e.g., given `ObjectTypeDefinition`, get `objects`
function getKind(type: string): string {
  return graphqlTypes.find((graphqlType) => graphqlType.type === type)!.kind
}

async function getPreview(
  directives: DirectiveNode[],
  schemaMember: SchemaMember,
  previewsPerVersion: PreviewInfo[],
): Promise<PreviewInfo | undefined> {
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
function getType(field: FieldNode): string | undefined {
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
  return undefined
}

function getTypeKind(type: string, schema: GraphQLSchema): string | undefined {
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
  return undefined
}

function removeMarkers(str: string): string {
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
