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
import type { ConstDirectiveNode, TypeNode, InputValueDefinitionNode } from 'graphql/language'
import path from 'path'

import { slugPrefixForUrlKind } from '@/graphql/lib/categories'

interface GraphQLTypeInfo {
  type: string
  kind: string
}

interface TypeInfo {
  name: string
  id: string
  href: string
}

interface ArgumentInfo {
  name: string
  // GraphQL scalar default values come through the AST as a string or boolean.
  defaultValue?: string | boolean
  description: string
  type: TypeInfo
}

interface FieldNode {
  name: { value: string }
  type: TypeNode
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
  return string.endsWith('.') ? string : `${string}.`
}

async function getArguments(
  args: readonly InputValueDefinitionNode[],
  schema: GraphQLSchema,
): Promise<ArgumentInfo[] | undefined> {
  if (!args.length) return

  const newArgs: ArgumentInfo[] = []

  for (const arg of args) {
    const newArg: Partial<ArgumentInfo> = {}
    const type: Partial<TypeInfo> = {}
    newArg.name = arg.name.value
    newArg.defaultValue =
      arg.defaultValue && 'value' in arg.defaultValue ? arg.defaultValue.value : undefined
    newArg.description = arg.description ? await getDescription(arg.description.value) : ''
    const typeName = getType(arg)
    if (!typeName) continue // Skip if type cannot be determined
    type.name = typeName
    type.id = getId(typeName)
    const typeKind = getTypeKind(typeName, schema)
    if (!typeKind) continue // Skip if type kind cannot be determined
    // process-schemas always emits legacy `/graphql/reference/<urlKind>#<id>`
    // hrefs. bucket-by-category rewrites them into the category-aware form
    // when splitting into per-category files, so monolithic schema.json stays
    // byte-stable with what the existing runtime expects.
    type.href = getFullLink(typeKind, type.id!)
    newArg.type = type as TypeInfo
    newArgs.push(newArg as ArgumentInfo)
  }

  return newArgs
}

// Build a category-aware anchor link for a type, e.g.
// `/graphql/reference/repos#object-repository`. Exposed for the bucketer's
// href-rewrite pass; process-schemas itself uses the legacy `getFullLink`.
export function buildCategoryHref(category: string, urlKind: string, id: string): string {
  return `/graphql/reference/${category}#${slugPrefixForUrlKind(urlKind)}-${id}`
}

async function getDeprecationReason(
  directives: readonly ConstDirectiveNode[],
  schemaMember: SchemaMember,
): Promise<string | undefined> {
  if (!schemaMember.isDeprecated) return

  // it's possible for a schema member to be deprecated and under preview
  const deprecationDirective = directives.filter((dir) => dir.name.value === 'deprecated')

  // catch any schema members that have more than one deprecation (none currently)
  if (deprecationDirective.length > 1)
    console.log(`more than one deprecation found for ${schemaMember.name}`)

  const arg = deprecationDirective[0]?.arguments?.[0]
  if (!arg) return
  const value = arg.value
  if (!value || value.kind !== 'StringValue' || !value.value) return
  return renderContent(value.value)
}

function getDeprecationStatus(directives: readonly ConstDirectiveNode[]): boolean | undefined {
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

// Extract the `@docsCategory(name: "...")` value from a directive list.
// Returns undefined when the directive is absent.
function getDocsCategory(directives: readonly ConstDirectiveNode[]): string | undefined {
  const directive = directives.find((dir) => dir.name.value === 'docsCategory')
  if (!directive) return
  const nameArg = directive.arguments?.find((arg) => arg.name.value === 'name')
  if (!nameArg) return
  const value = nameArg.value
  if (!value || value.kind !== 'StringValue') return
  return value.value
}

function getId(typeName: string): string {
  return removeMarkers(typeName).toLowerCase()
}

// e.g., given `ObjectTypeDefinition`, get `objects`
function getKind(type: string): string {
  return graphqlTypes.find((graphqlType) => graphqlType.type === type)!.kind
}

async function getPreview(
  directives: readonly ConstDirectiveNode[],
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
  const firstArg = previewDirective[0]?.arguments?.[0]
  if (!firstArg) return
  const argValue = firstArg.value
  if (!argValue || argValue.kind !== 'StringValue') return

  const previewName = argValue.value

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
  getDocsCategory,
  getFullLink,
  getId,
  getKind,
  getPreview,
  getType,
  getTypeKind,
}
