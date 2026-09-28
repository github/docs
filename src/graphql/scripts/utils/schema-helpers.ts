import { renderContent } from '@/content-render/index'
import type { Context } from '@/types/types'
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

// Upstream schema descriptions include ${externalDocsUrl}, but this pipeline never expands it.
// It ships as href="$%7BexternalDocsUrl%7D/code-security/..." and resolves against the
// current page, causing 404s.
// Dropping it leaves a root-relative link that getDescription versions with createSchemaHelpers.
// The bare helpers export has no context and leaves links unversioned.
const unexpandedExternalDocsUrl = /\$\{externalDocsUrl\}(?=\/)/g

function addPeriod(string: string): string {
  return string.endsWith('.') ? string : `${string}.`
}

async function getArguments(
  args: readonly InputValueDefinitionNode[],
  schema: GraphQLSchema,
  context?: Context,
): Promise<ArgumentInfo[] | undefined> {
  if (!args.length) return

  const newArgs: ArgumentInfo[] = []

  for (const arg of args) {
    const newArg: Partial<ArgumentInfo> = {}
    const type: Partial<TypeInfo> = {}
    newArg.name = arg.name.value
    newArg.defaultValue =
      arg.defaultValue && 'value' in arg.defaultValue ? arg.defaultValue.value : undefined
    newArg.description = arg.description ? await getDescription(arg.description.value, context) : ''
    const typeName = getType(arg)
    if (!typeName) continue
    type.name = typeName
    type.id = getId(typeName)
    const typeKind = getTypeKind(typeName, schema)
    if (!typeKind) continue
    // getFullLink keeps reference hrefs stable; bucket-by-category rewrites only category files.
    type.href = getFullLink(typeKind, type.id!)
    newArg.type = type as TypeInfo
    newArgs.push(newArg as ArgumentInfo)
  }

  return newArgs
}

// buildCategoryHref returns anchors like /graphql/reference/repos#object-repository for rewrites.
export function buildCategoryHref(category: string, urlKind: string, id: string): string {
  return `/graphql/reference/${category}#${slugPrefixForUrlKind(urlKind)}-${id}`
}

async function getDeprecationReason(
  directives: readonly ConstDirectiveNode[],
  schemaMember: SchemaMember,
  context?: Context,
): Promise<string | undefined> {
  if (!schemaMember.isDeprecated) return

  // Deprecated and preview can both apply to one schema member.
  const deprecationDirective = directives.filter((dir) => dir.name.value === 'deprecated')

  // Multiple deprecation directives indicate upstream schema data needs review.
  if (deprecationDirective.length > 1)
    console.log(`more than one deprecation found for ${schemaMember.name}`)

  const arg = deprecationDirective[0]?.arguments?.[0]
  if (!arg) return
  const value = arg.value
  if (!value || value.kind !== 'StringValue' || !value.value) return
  return renderContent(value.value, context)
}

function getDeprecationStatus(directives: readonly ConstDirectiveNode[]): boolean | undefined {
  if (!directives.length) return

  return directives[0].name.value === 'deprecated'
}

async function getDescription(rawDescription: string, context?: Context): Promise<string> {
  rawDescription = rawDescription.replace(singleQuotesInsteadOfBackticks, '`$1`')
  rawDescription = rawDescription.replace(unexpandedExternalDocsUrl, '')

  return renderContent(addPeriod(rawDescription), context)
}

function getFullLink(baseType: string, id: string): string {
  return `/graphql/reference/${baseType}#${id}`
}

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

// Example: ObjectTypeDefinition maps to objects.
function getKind(type: string): string {
  return graphqlTypes.find((graphqlType) => graphqlType.type === type)!.kind
}

async function getPreview(
  directives: readonly ConstDirectiveNode[],
  schemaMember: SchemaMember,
  previewsPerVersion: PreviewInfo[],
): Promise<PreviewInfo | undefined> {
  if (!directives.length) return

  // Deprecated and preview can both apply to one schema member.
  const previewDirective = directives.filter((dir) => dir.name.value === 'preview')
  if (!previewDirective.length) return

  // Log multiple preview directives from the schema AST; the script expects at most one.
  if (previewDirective.length > 1)
    console.log(`more than one preview found for ${schemaMember.name}`)

  // Ignore ListValue preview directives on input fields because previews use string values.
  const firstArg = previewDirective[0]?.arguments?.[0]
  if (!firstArg) return
  const argValue = firstArg.value
  if (!argValue || argValue.kind !== 'StringValue') return

  const previewName = argValue.value

  const preview = previewsPerVersion.find((p) => p.toggled_by.includes(previewName))
  if (!preview) console.error(`cannot find "${previewName}" in graphql_previews.yml`)

  return preview
}

// GraphQL list and non-null wrappers combine as foo, foo!, [foo], [foo!], [foo]!,
// and [foo!]!.
// See https://github.com/rmosolgo/graphql-ruby/blob/master/guides/type_definitions/lists.md#lists-nullable-lists-and-lists-of-nulls
function getType(field: FieldNode): string | undefined {
  if (field.type.kind !== 'ListType') {
    // Nullable item example: license query has License type.
    if (field.type.kind === 'NamedType') {
      return field.type.name.value
    }

    // Non-null item example: meta query has GitHubMetadata! type.
    if (field.type.kind === 'NonNullType' && field.type.type.kind === 'NamedType') {
      return `${field.type.type.name.value}!`
    }
  }
  if (field.type.kind === 'ListType') {
    // Nullable list example: codesOfConduct query has [CodeOfConduct] type.
    if (field.type.type.kind === 'NamedType') {
      return `[${field.type.type.name.value}]`
    }

    // Nullable list example: severities arg has [SecurityAdvisorySeverity!] type.
    if (field.type.type.kind === 'NonNullType' && field.type.type.type.kind === 'NamedType') {
      return `[${field.type.type.type.name.value}!]`
    }
  }

  if (field.type.kind === 'NonNullType' && field.type.type.kind === 'ListType') {
    // Non-null list example: licenses query has [License]! type.
    if (field.type.type.type.kind === 'NamedType') {
      return `[${field.type.type.type.name.value}]!`
    }

    // Non-null list example: marketplaceCategories query has [MarketplaceCategory!]! type.
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

const helpers = {
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

// Markdown helpers need docs version context, or rewrite-local-links omits language and version.
// Binding context once keeps the ~30 process-schemas call sites unchanged and per-call.
// Per-call context prevents concurrent versions from rendering against each other.
export function createSchemaHelpers(context: Context): typeof helpers {
  return {
    ...helpers,
    getArguments: (args, schema) => getArguments(args, schema, context),
    getDeprecationReason: (directives, schemaMember) =>
      getDeprecationReason(directives, schemaMember, context),
    getDescription: (rawDescription) => getDescription(rawDescription, context),
  }
}

export default helpers
