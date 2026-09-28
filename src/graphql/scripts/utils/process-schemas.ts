import { sortBy } from 'lodash-es'
import { parse, buildASTSchema, GraphQLSchema } from 'graphql'
import type {
  DocumentNode,
  ObjectTypeDefinitionNode,
  InputObjectTypeDefinitionNode,
  EnumTypeDefinitionNode,
  UnionTypeDefinitionNode,
  FieldDefinitionNode,
  InputValueDefinitionNode,
  ConstDirectiveNode,
  DefinitionNode,
  TypeNode,
} from 'graphql/language'
import baseHelpers, { createSchemaHelpers } from '@/graphql/scripts/utils/schema-helpers'
import type { Context } from '@/types/types'
import { OTHER_CATEGORY, isValidCategory } from '@/graphql/lib/categories'
import fs from 'fs/promises'
import path from 'path'

interface PreviewInfo {
  toggled_by: string[]
}

interface FieldArgumentInfo {
  name: string
  // GraphQL scalar default values come through the AST as a string or boolean.
  defaultValue?: string | boolean
  description: string
  type: {
    name: string
    id: string
    href: string
  }
}

interface ScalarInfo {
  name: string
  description: string
  id: string
  href: string
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
}

interface QueryArgumentInfo {
  name: string
  // GraphQL scalar default values come through the AST as a string or boolean.
  defaultValue?: string | boolean
  type: string
  id: string
  href: string
  description: string
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
}

interface QueryInfo {
  name: string
  type: string
  id: string
  href: string
  description: string
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
  args: QueryArgumentInfo[]
}

interface FieldInfo {
  name: string
  type: string
  id: string
  href: string
  description: string
  arguments?: FieldArgumentInfo[]
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
}

interface InputFieldInfo {
  name: string
  type: string
  id: string
  href: string
}

interface ReturnFieldInfo {
  name: string
  type: string
  id: string
  href: string
  description: string
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
}

interface MutationInfo {
  name: string
  id: string
  href: string
  description: string
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
  inputFields: InputFieldInfo[]
  returnFields: ReturnFieldInfo[]
}

interface InterfaceInfo {
  name: string
  id: string
  href: string
}

interface ObjectInfo {
  name: string
  id: string
  href: string
  description: string
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
  implements?: InterfaceInfo[]
  fields?: FieldInfo[]
}

interface GraphQLInterfaceInfo {
  name: string
  id: string
  href: string
  description: string
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
  fields: FieldInfo[]
}

interface EnumValueInfo {
  name: string
  description: string
}

interface EnumInfo {
  name: string
  id: string
  href: string
  description: string
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
  values: EnumValueInfo[]
}

interface PossibleTypeInfo {
  name: string
  id: string
  href: string
}

interface UnionInfo {
  name: string
  id: string
  href: string
  description: string
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
  possibleTypes: PossibleTypeInfo[]
}

interface InputFieldDetailInfo {
  name: string
  description: string
  type: string
  id: string
  href: string
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
}

interface InputObjectInfo {
  name: string
  id: string
  href: string
  description: string
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
  inputFields: InputFieldDetailInfo[]
}

interface ProcessedSchemaData {
  queries: QueryInfo[]
  mutations: MutationInfo[]
  objects: ObjectInfo[]
  interfaces: GraphQLInterfaceInfo[]
  enums: EnumInfo[]
  unions: UnionInfo[]
  inputObjects: InputObjectInfo[]
  scalars: ScalarInfo[]
}

// Category stays loose on emitted items to avoid duplicating it across every output interface.
const externalScalarsJSON: Array<{ name: string; description: string }> = JSON.parse(
  await fs.readFile(path.join(process.cwd(), './src/graphql/lib/non-schema-scalars.json'), 'utf-8'),
)
const externalScalars: ScalarInfo[] = await Promise.all(
  externalScalarsJSON.map(async (scalar): Promise<ScalarInfo> => {
    // Local non-schema scalars have external links and need no docs version context.
    const description = await baseHelpers.getDescription(scalar.description)
    const id = baseHelpers.getId(scalar.name)
    // External scalars like Date and URI start in other with hrefs for bucket rewriting.
    const href = baseHelpers.getFullLink('scalars', id)
    return {
      name: scalar.name,
      description,
      id,
      href,
      category: OTHER_CATEGORY,
    } as ScalarInfo & { category: string }
  }),
)

// category-map.json supplies runtime redirects and build-time fallback.
// The fallback covers schemas without @docsCategory.
type CategoryMapFallback = Partial<Record<string, Record<string, string>>>

// processSchemas assigns GraphQL categories before rendering. Explicit @docsCategory wins.
// category-map.json fills GHES schemas without directives. Mutation inputs inherit their owning
// mutation. Connection and Edge types come from graphql-ruby Relay pagination and inherit from
// node, nodes, or edges. Unannotated enum, union, and input object targets inherit only when
// every referrer resolves to one category. Interfaces do not contribute because they are
// cross-cutting. Input object candidates propagate through nested inputs.
// Examples include IssueTimelineItemsItemType, PullRequestTimelineItemsItemType,
// RepositoryRuleType, RuleParameters, and RuleParametersInput. Candidate sets make derivation
// order-independent and retain later conflicting referrers.
// Input-suffixed objects stay included because docs pages exist outside the v4 sidebar.
// https://developer.github.com/v4/input_object/acceptenterpriseadministratorinvitationinput/
// Categories missing from CATEGORIES in src/graphql/lib/categories.ts normalize to other.
export default async function processSchemas(
  idl: Buffer | string,
  previewsPerVersion: PreviewInfo[],
  // Optional fallback for schemas without @docsCategory.
  // Type ids are keys, and the mutations map uses field names.
  fallbackCategoryMap?: CategoryMapFallback,
  // Context carries the docs version key so schema description links get a version segment.
  context: Context = {},
): Promise<ProcessedSchemaData> {
  const helpers = createSchemaHelpers(context)
  const schemaAST: DocumentNode = parse(idl.toString())
  const schema: GraphQLSchema = buildASTSchema(schemaAST)

  const objectsInSchema = schemaAST.definitions.filter(
    (def): def is ObjectTypeDefinitionNode => def.kind === 'ObjectTypeDefinition',
  )

  // Read @docsCategory before deriving fallback categories.
  const typeCategoryMap = new Map<string, string>()
  const mutationFieldCategoryMap = new Map<string, string>()

  for (const def of schemaAST.definitions) {
    if (def.kind === 'ObjectTypeDefinition' && def.name.value === 'Mutation') {
      for (const field of def.fields || []) {
        const cat = helpers.getDocsCategory(
          (field.directives || []) as readonly ConstDirectiveNode[],
        )
        if (cat) mutationFieldCategoryMap.set(field.name.value, cat)
      }
      continue
    }
    if (def.kind === 'ObjectTypeDefinition' && def.name.value === 'Query') continue

    if (
      def.kind === 'ObjectTypeDefinition' ||
      def.kind === 'InterfaceTypeDefinition' ||
      def.kind === 'UnionTypeDefinition' ||
      def.kind === 'EnumTypeDefinition' ||
      def.kind === 'InputObjectTypeDefinition' ||
      def.kind === 'ScalarTypeDefinition'
    ) {
      const cat = helpers.getDocsCategory((def.directives || []) as readonly ConstDirectiveNode[])
      if (cat) typeCategoryMap.set(helpers.getId(def.name.value), cat)
    }
  }

  // Fallback type categories skip queries and keep mutations keyed by field name.
  const fallbackTypeMap: Record<string, string> = {}
  if (fallbackCategoryMap) {
    for (const kind of Object.keys(fallbackCategoryMap)) {
      if (kind === 'queries' || kind === 'mutations') continue
      const sub = fallbackCategoryMap[kind] || {}
      for (const id of Object.keys(sub)) {
        // First write wins; ids do not collide across kinds in practice.
        if (!(id in fallbackTypeMap)) fallbackTypeMap[id] = sub[id]
      }
    }
  }
  const fallbackMutationMap = fallbackCategoryMap?.mutations || {}

  // Derive missing categories before fallback and other assignment so GHES fallback inherits them.
  const lookupCat = (id: string): string | undefined =>
    typeCategoryMap.get(id) ?? fallbackTypeMap[id]
  const getMutationCat = (mutFieldName: string): string | undefined =>
    mutationFieldCategoryMap.get(mutFieldName) ?? fallbackMutationMap[mutFieldName.toLowerCase()]

  const namedTypeName = (typeNode: TypeNode): string | undefined => {
    let t: TypeNode = typeNode
    while ('type' in t) t = t.type
    return t.kind === 'NamedType' ? t.name.value : undefined
  }

  const mutationDef = schemaAST.definitions.find(
    (def): def is ObjectTypeDefinitionNode =>
      def.kind === 'ObjectTypeDefinition' && def.name.value === 'Mutation',
  )
  if (mutationDef) {
    for (const field of mutationDef.fields || []) {
      const mutCat = getMutationCat(field.name.value)
      if (!mutCat) continue
      for (const arg of field.arguments || []) {
        const argTypeName = namedTypeName(arg.type)
        if (!argTypeName) continue
        const argDef = schemaAST.definitions.find(
          (d): d is InputObjectTypeDefinitionNode =>
            d.kind === 'InputObjectTypeDefinition' && d.name.value === argTypeName,
        )
        if (!argDef) continue
        const argId = helpers.getId(argTypeName)
        if (!typeCategoryMap.has(argId)) typeCategoryMap.set(argId, mutCat)
      }
    }
  }

  // Multiple passes let Connection to Edge to object chains inherit the object category.
  const objectDefs = schemaAST.definitions.filter(
    (def): def is ObjectTypeDefinitionNode => def.kind === 'ObjectTypeDefinition',
  )
  for (let pass = 0; pass < 5; pass++) {
    let changed = false
    for (const def of objectDefs) {
      const name = def.name.value
      if (name === 'Query' || name === 'Mutation') continue
      const isEdge = name.endsWith('Edge')
      const isConn = name.endsWith('Connection')
      if (!isEdge && !isConn) continue
      const id = helpers.getId(name)
      if (lookupCat(id)) continue
      // Edge types use node; Connection types prefer nodes, then edges.
      const fields = def.fields || []
      let underlyingName: string | undefined
      if (isEdge) {
        const node = fields.find((f) => f.name.value === 'node')
        if (node) underlyingName = namedTypeName(node.type)
      } else {
        const nodes = fields.find((f) => f.name.value === 'nodes')
        if (nodes) underlyingName = namedTypeName(nodes.type)
        if (!underlyingName) {
          const edges = fields.find((f) => f.name.value === 'edges')
          if (edges) underlyingName = namedTypeName(edges.type)
        }
      }
      if (!underlyingName) continue
      const underlyingCat = lookupCat(helpers.getId(underlyingName))
      if (underlyingCat) {
        typeCategoryMap.set(id, underlyingCat)
        changed = true
      }
    }
    if (!changed) break
  }

  // Reference-based inheritance assigns a category only when referrers resolve to one category.
  const derivableTargets = schemaAST.definitions.filter(
    (
      def,
    ): def is EnumTypeDefinitionNode | UnionTypeDefinitionNode | InputObjectTypeDefinitionNode =>
      def.kind === 'EnumTypeDefinition' ||
      def.kind === 'UnionTypeDefinition' ||
      def.kind === 'InputObjectTypeDefinition',
  )
  const inputDefs = schemaAST.definitions.filter(
    (def): def is InputObjectTypeDefinitionNode => def.kind === 'InputObjectTypeDefinition',
  )

  const targetIds = new Set<string>()
  for (const def of derivableTargets) {
    const id = helpers.getId(def.name.value)
    if (!lookupCat(id)) targetIds.add(id)
  }

  if (targetIds.size > 0) {
    const candidates = new Map<string, Set<string>>()
    for (const id of targetIds) candidates.set(id, new Set())

    // Uncommitted input object referrers contribute candidate sets so ambiguity propagates.
    const contribution = (referrerId: string): Iterable<string> => {
      const explicit = lookupCat(referrerId)
      if (explicit) return [explicit]
      return candidates.get(referrerId) ?? []
    }
    const addRef = (targetName: string | undefined, cats: Iterable<string>): boolean => {
      if (!targetName) return false
      const id = helpers.getId(targetName)
      const set = candidates.get(id)
      if (!set) return false
      let grew = false
      for (const c of cats) {
        if (!set.has(c)) {
          set.add(c)
          grew = true
        }
      }
      return grew
    }

    // Each pass only adds candidates, so maxPasses bounds the propagation depth.
    const maxPasses = targetIds.size + 2
    for (let pass = 0; pass < maxPasses; pass++) {
      let changed = false

      for (const def of objectDefs) {
        const name = def.name.value
        if (name === 'Query') continue
        const isMutation = name === 'Mutation'
        for (const field of def.fields || []) {
          // Mutation categories apply to args; payload return types already carry categories.
          const fieldCats: Iterable<string> = isMutation
            ? ((c) => (c ? [c] : []))(getMutationCat(field.name.value))
            : contribution(helpers.getId(name))
          if (!isMutation && addRef(namedTypeName(field.type), fieldCats)) changed = true
          for (const arg of field.arguments || []) {
            if (addRef(namedTypeName(arg.type), fieldCats)) changed = true
          }
        }
      }

      for (const def of inputDefs) {
        const ownerCats = contribution(helpers.getId(def.name.value))
        for (const field of def.fields || []) {
          if (addRef(namedTypeName(field.type), ownerCats)) changed = true
        }
      }

      if (!changed) break
    }

    for (const [id, cats] of candidates) {
      if (cats.size === 1) typeCategoryMap.set(id, [...cats][0])
    }
  }

  // Unknown categories normalize to other so writeCategoryFiles does not drop types or redirects.
  const resolveCategory = (typeId: string): string => {
    const cat = typeCategoryMap.get(typeId) ?? fallbackTypeMap[typeId] ?? OTHER_CATEGORY
    return isValidCategory(cat) ? cat : OTHER_CATEGORY
  }

  // linkTo emits reference hrefs; bucket-by-category rewrites only per-category schema files.
  const linkTo = (urlKind: string, id: string): string => helpers.getFullLink(urlKind, id)

  const data: ProcessedSchemaData = {
    queries: [],
    mutations: [],
    objects: [],
    interfaces: [],
    enums: [],
    unions: [],
    inputObjects: [],
    scalars: [],
  }

  await Promise.all(
    schemaAST.definitions.map(async (def: DefinitionNode) => {
      if (def.kind === 'ObjectTypeDefinition' && def.name.value === 'Query') {
        await Promise.all(
          (def.fields || []).map(async (field: FieldDefinitionNode) => {
            const query: Partial<QueryInfo> = {}
            const queryArgs: QueryArgumentInfo[] = []

            query.name = field.name.value
            const fieldType = helpers.getType(field)
            if (!fieldType) return
            query.type = fieldType
            const fieldKind = helpers.getTypeKind(query.type, schema)
            if (!fieldKind) return
            query.id = helpers.getId(query.type)
            query.href = linkTo(fieldKind, query.id)
            query.description = await helpers.getDescription(field.description?.value || '')
            query.isDeprecated = helpers.getDeprecationStatus(
              (field.directives || []) as readonly ConstDirectiveNode[],
            )
            query.deprecationReason = await helpers.getDeprecationReason(
              (field.directives || []) as readonly ConstDirectiveNode[],
              query as QueryInfo,
            )
            query.preview = await helpers.getPreview(
              (field.directives || []) as readonly ConstDirectiveNode[],
              query as QueryInfo,
              previewsPerVersion,
            )

            await Promise.all(
              (field.arguments || []).map(async (arg: InputValueDefinitionNode) => {
                const queryArg: Partial<QueryArgumentInfo> = {}
                queryArg.name = arg.name.value
                queryArg.defaultValue =
                  arg.defaultValue && 'value' in arg.defaultValue
                    ? arg.defaultValue.value
                    : undefined
                const argType = helpers.getType(arg)
                if (!argType) return
                queryArg.type = argType
                queryArg.id = helpers.getId(queryArg.type)
                const argKind = helpers.getTypeKind(queryArg.type, schema)
                if (!argKind) return
                queryArg.href = linkTo(argKind, queryArg.id)
                queryArg.description = await helpers.getDescription(arg.description?.value || '')
                queryArg.isDeprecated = helpers.getDeprecationStatus(
                  (arg.directives || []) as readonly ConstDirectiveNode[],
                )
                queryArg.deprecationReason = await helpers.getDeprecationReason(
                  (arg.directives || []) as readonly ConstDirectiveNode[],
                  queryArg as QueryArgumentInfo,
                )
                queryArg.preview = await helpers.getPreview(
                  (arg.directives || []) as readonly ConstDirectiveNode[],
                  queryArg as QueryArgumentInfo,
                  previewsPerVersion,
                )
                queryArgs.push(queryArg as QueryArgumentInfo)
              }),
            )

            query.args = sortBy(queryArgs, 'name')
            // Queries inherit the category of their return type.
            ;(query as QueryInfo & { category: string }).category = resolveCategory(query.id!)
            data.queries.push(query as QueryInfo)
          }),
        )

        return
      }

      if (def.kind === 'ObjectTypeDefinition' && def.name.value === 'Mutation') {
        await Promise.all(
          (def.fields || []).map(async (field: FieldDefinitionNode) => {
            const mutation: Partial<MutationInfo> = {}
            const inputFields: InputFieldInfo[] = []
            const returnFields: ReturnFieldInfo[] = []

            mutation.name = field.name.value
            mutation.id = helpers.getId(mutation.name)
            // Mutation fields carry @docsCategory on the field, not the payload type.
            const rawMutationCategory =
              mutationFieldCategoryMap.get(mutation.name) ??
              fallbackMutationMap[mutation.name.toLowerCase()] ??
              OTHER_CATEGORY
            const mutationCategory = isValidCategory(rawMutationCategory)
              ? rawMutationCategory
              : OTHER_CATEGORY
            mutation.href = helpers.getFullLink('mutations', mutation.id)
            mutation.description = await helpers.getDescription(field.description?.value || '')
            mutation.isDeprecated = helpers.getDeprecationStatus(
              (field.directives || []) as readonly ConstDirectiveNode[],
            )
            mutation.deprecationReason = await helpers.getDeprecationReason(
              (field.directives || []) as readonly ConstDirectiveNode[],
              mutation as MutationInfo,
            )
            mutation.preview = await helpers.getPreview(
              (field.directives || []) as readonly ConstDirectiveNode[],
              mutation as MutationInfo,
              previewsPerVersion,
            )

            // Mutation fields have one input argument in practice, but the schema exposes an array.
            await Promise.all(
              (field.arguments || []).map(async (arg: InputValueDefinitionNode) => {
                const inputField: Partial<InputFieldInfo> = {}
                inputField.name = arg.name.value
                const argType = helpers.getType(arg)
                if (!argType) return
                inputField.type = argType
                inputField.id = helpers.getId(inputField.type)
                const argKind = helpers.getTypeKind(inputField.type, schema)
                if (!argKind) return
                inputField.href = linkTo(argKind, inputField.id)
                inputFields.push(inputField as InputFieldInfo)
              }),
            )

            mutation.inputFields = sortBy(inputFields, 'name')

            // Mutation return fields come from the payload object's fields.
            const returnType = helpers.getType(field)
            if (!returnType) return
            const mutationReturnFields = objectsInSchema.find(
              (obj) => obj.name.value === returnType,
            )

            if (!mutationReturnFields) {
              console.log(`no return fields found for ${returnType}`)
              return
            }

            await Promise.all(
              mutationReturnFields.fields!.map(async (returnFieldDef: FieldDefinitionNode) => {
                const returnField: Partial<ReturnFieldInfo> = {}
                returnField.name = returnFieldDef.name.value
                const fieldType = helpers.getType(returnFieldDef)
                if (!fieldType) return
                returnField.type = fieldType
                returnField.id = helpers.getId(returnField.type)
                const fieldKind = helpers.getTypeKind(returnField.type, schema)
                if (!fieldKind) return
                returnField.href = linkTo(fieldKind, returnField.id)
                returnField.description = await helpers.getDescription(
                  returnFieldDef.description?.value || '',
                )
                returnField.isDeprecated = helpers.getDeprecationStatus(
                  (returnFieldDef.directives || []) as readonly ConstDirectiveNode[],
                )
                returnField.deprecationReason = await helpers.getDeprecationReason(
                  (returnFieldDef.directives || []) as readonly ConstDirectiveNode[],
                  returnField as ReturnFieldInfo,
                )
                returnField.preview = await helpers.getPreview(
                  (returnFieldDef.directives || []) as readonly ConstDirectiveNode[],
                  returnField as ReturnFieldInfo,
                  previewsPerVersion,
                )
                returnFields.push(returnField as ReturnFieldInfo)
              }),
            )

            mutation.returnFields = sortBy(returnFields, 'name')
            ;(mutation as MutationInfo & { category: string }).category = mutationCategory
            data.mutations.push(mutation as MutationInfo)
          }),
        )
        return
      }

      if (def.kind === 'ObjectTypeDefinition') {
        // Payload objects provide mutation return fields and stay out of the object docs.
        if (def.name.value.endsWith('Payload')) return

        const object: Partial<ObjectInfo> = {}
        const objectImplements: InterfaceInfo[] = []
        const objectFields: FieldInfo[] = []

        object.name = def.name.value
        object.id = helpers.getId(object.name)
        object.href = linkTo('objects', object.id)
        object.description = await helpers.getDescription(def.description?.value || '')
        object.isDeprecated = helpers.getDeprecationStatus(
          (def.directives || []) as readonly ConstDirectiveNode[],
        )
        object.deprecationReason = await helpers.getDeprecationReason(
          (def.directives || []) as readonly ConstDirectiveNode[],
          object as ObjectInfo,
        )
        object.preview = await helpers.getPreview(
          (def.directives || []) as readonly ConstDirectiveNode[],
          object as ObjectInfo,
          previewsPerVersion,
        )

        // Implements links carry only name, id, and href, without preview or deprecation data.
        if (def.interfaces && def.interfaces.length) {
          await Promise.all(
            def.interfaces.map(async (graphqlInterface) => {
              const objectInterface: InterfaceInfo = {
                name: graphqlInterface.name.value,
                id: helpers.getId(graphqlInterface.name.value),
                href: linkTo('interfaces', helpers.getId(graphqlInterface.name.value)),
              }
              objectImplements.push(objectInterface)
            }),
          )
        }

        // Object fields render under Fields.
        if (def.fields && def.fields.length) {
          await Promise.all(
            def.fields.map(async (field: FieldDefinitionNode) => {
              const objectField: Partial<FieldInfo> = {}

              objectField.name = field.name.value
              objectField.description = field.description
                ? await helpers.getDescription(field.description.value)
                : ''
              const fieldType = helpers.getType(field)
              if (!fieldType) return
              objectField.type = fieldType
              objectField.id = helpers.getId(objectField.type)
              const fieldKind = helpers.getTypeKind(objectField.type, schema)
              if (!fieldKind) return
              objectField.href = linkTo(fieldKind, objectField.id)
              objectField.arguments = await helpers.getArguments(field.arguments || [], schema)
              objectField.isDeprecated = helpers.getDeprecationStatus(
                (field.directives || []) as readonly ConstDirectiveNode[],
              )
              objectField.deprecationReason = await helpers.getDeprecationReason(
                (field.directives || []) as readonly ConstDirectiveNode[],
                objectField as FieldInfo,
              )
              objectField.preview = await helpers.getPreview(
                (field.directives || []) as readonly ConstDirectiveNode[],
                objectField as FieldInfo,
                previewsPerVersion,
              )

              objectFields.push(objectField as FieldInfo)
            }),
          )
        }

        if (objectImplements.length) object.implements = sortBy(objectImplements, 'name')
        if (objectFields.length) object.fields = sortBy(objectFields, 'name')
        ;(object as ObjectInfo & { category: string }).category = resolveCategory(object.id!)
        data.objects.push(object as ObjectInfo)
        return
      }

      if (def.kind === 'InterfaceTypeDefinition') {
        const graphqlInterface: Partial<GraphQLInterfaceInfo> = {}
        const interfaceFields: FieldInfo[] = []

        graphqlInterface.name = def.name.value
        graphqlInterface.id = helpers.getId(graphqlInterface.name)
        graphqlInterface.href = linkTo('interfaces', graphqlInterface.id)
        graphqlInterface.description = await helpers.getDescription(def.description?.value || '')
        graphqlInterface.isDeprecated = helpers.getDeprecationStatus(
          (def.directives || []) as readonly ConstDirectiveNode[],
        )
        graphqlInterface.deprecationReason = await helpers.getDeprecationReason(
          (def.directives || []) as readonly ConstDirectiveNode[],
          graphqlInterface as GraphQLInterfaceInfo,
        )
        graphqlInterface.preview = await helpers.getPreview(
          (def.directives || []) as readonly ConstDirectiveNode[],
          graphqlInterface as GraphQLInterfaceInfo,
          previewsPerVersion,
        )

        // Interface fields render under Fields.
        if (def.fields && def.fields.length) {
          await Promise.all(
            def.fields.map(async (field: FieldDefinitionNode) => {
              const interfaceField: Partial<FieldInfo> = {}

              interfaceField.name = field.name.value
              interfaceField.description = field.description
                ? await helpers.getDescription(field.description.value)
                : ''
              const fieldType = helpers.getType(field)
              if (!fieldType) return
              interfaceField.type = fieldType
              interfaceField.id = helpers.getId(interfaceField.type)
              const fieldKind = helpers.getTypeKind(interfaceField.type, schema)
              if (!fieldKind) return
              interfaceField.href = linkTo(fieldKind, interfaceField.id)
              interfaceField.arguments = await helpers.getArguments(field.arguments || [], schema)
              interfaceField.isDeprecated = helpers.getDeprecationStatus(
                (field.directives || []) as readonly ConstDirectiveNode[],
              )
              interfaceField.deprecationReason = await helpers.getDeprecationReason(
                (field.directives || []) as readonly ConstDirectiveNode[],
                interfaceField as FieldInfo,
              )
              interfaceField.preview = await helpers.getPreview(
                (field.directives || []) as readonly ConstDirectiveNode[],
                interfaceField as FieldInfo,
                previewsPerVersion,
              )

              interfaceFields.push(interfaceField as FieldInfo)
            }),
          )
        }

        graphqlInterface.fields = sortBy(interfaceFields, 'name')
        ;(graphqlInterface as GraphQLInterfaceInfo & { category: string }).category =
          resolveCategory(graphqlInterface.id!)
        data.interfaces.push(graphqlInterface as GraphQLInterfaceInfo)
        return
      }

      if (def.kind === 'EnumTypeDefinition') {
        const graphqlEnum: Partial<EnumInfo> = {}
        const enumValues: EnumValueInfo[] = []

        graphqlEnum.name = def.name.value
        graphqlEnum.id = helpers.getId(graphqlEnum.name)
        graphqlEnum.href = linkTo('enums', graphqlEnum.id)
        graphqlEnum.description = await helpers.getDescription(def.description?.value || '')
        graphqlEnum.isDeprecated = helpers.getDeprecationStatus(
          (def.directives || []) as readonly ConstDirectiveNode[],
        )
        graphqlEnum.deprecationReason = await helpers.getDeprecationReason(
          (def.directives || []) as readonly ConstDirectiveNode[],
          graphqlEnum as EnumInfo,
        )
        graphqlEnum.preview = await helpers.getPreview(
          (def.directives || []) as readonly ConstDirectiveNode[],
          graphqlEnum as EnumInfo,
          previewsPerVersion,
        )

        await Promise.all(
          (def.values || []).map(async (value) => {
            const enumValue: EnumValueInfo = {
              name: value.name.value,
              description: await helpers.getDescription(value.description?.value || ''),
            }
            enumValues.push(enumValue)
          }),
        )

        graphqlEnum.values = sortBy(enumValues, 'name')
        ;(graphqlEnum as EnumInfo & { category: string }).category = resolveCategory(
          graphqlEnum.id!,
        )
        data.enums.push(graphqlEnum as EnumInfo)
        return
      }

      if (def.kind === 'UnionTypeDefinition') {
        const union: Partial<UnionInfo> = {}
        const possibleTypes: PossibleTypeInfo[] = []

        union.name = def.name.value
        union.id = helpers.getId(union.name)
        union.href = linkTo('unions', union.id)
        union.description = await helpers.getDescription(def.description?.value || '')
        union.isDeprecated = helpers.getDeprecationStatus(
          (def.directives || []) as readonly ConstDirectiveNode[],
        )
        union.deprecationReason = await helpers.getDeprecationReason(
          (def.directives || []) as readonly ConstDirectiveNode[],
          union as UnionInfo,
        )
        union.preview = await helpers.getPreview(
          (def.directives || []) as readonly ConstDirectiveNode[],
          union as UnionInfo,
          previewsPerVersion,
        )

        // Union member links carry no preview or deprecation state.
        await Promise.all(
          (def.types || []).map(async (type) => {
            const possibleType: PossibleTypeInfo = {
              name: type.name.value,
              id: helpers.getId(type.name.value),
              href: linkTo('objects', helpers.getId(type.name.value)),
            }
            possibleTypes.push(possibleType)
          }),
        )

        union.possibleTypes = sortBy(possibleTypes, 'name')
        ;(union as UnionInfo & { category: string }).category = resolveCategory(union.id!)
        data.unions.push(union as UnionInfo)
        return
      }

      // Include Input-suffixed objects; docs pages exist outside the v4 sidebar.
      if (def.kind === 'InputObjectTypeDefinition') {
        const inputObject: Partial<InputObjectInfo> = {}
        const inputFields: InputFieldDetailInfo[] = []

        inputObject.name = def.name.value
        inputObject.id = helpers.getId(inputObject.name)
        inputObject.href = linkTo('input-objects', inputObject.id)
        inputObject.description = await helpers.getDescription(def.description?.value || '')
        inputObject.isDeprecated = helpers.getDeprecationStatus(
          (def.directives || []) as readonly ConstDirectiveNode[],
        )
        inputObject.deprecationReason = await helpers.getDeprecationReason(
          (def.directives || []) as readonly ConstDirectiveNode[],
          inputObject as InputObjectInfo,
        )
        inputObject.preview = await helpers.getPreview(
          (def.directives || []) as readonly ConstDirectiveNode[],
          inputObject as InputObjectInfo,
          previewsPerVersion,
        )

        if (def.fields && def.fields.length) {
          await Promise.all(
            def.fields.map(async (field: InputValueDefinitionNode) => {
              const inputField: Partial<InputFieldDetailInfo> = {}

              inputField.name = field.name.value
              inputField.description = await helpers.getDescription(field.description?.value || '')
              const fieldType = helpers.getType(field)
              if (!fieldType) return
              inputField.type = fieldType
              inputField.id = helpers.getId(inputField.type)
              const fieldKind = helpers.getTypeKind(inputField.type, schema)
              if (!fieldKind) return
              inputField.href = linkTo(fieldKind, inputField.id)
              inputField.isDeprecated = helpers.getDeprecationStatus(
                (field.directives || []) as readonly ConstDirectiveNode[],
              )
              inputField.deprecationReason = await helpers.getDeprecationReason(
                (field.directives || []) as readonly ConstDirectiveNode[],
                inputField as InputFieldDetailInfo,
              )
              inputField.preview = await helpers.getPreview(
                (field.directives || []) as readonly ConstDirectiveNode[],
                inputField as InputFieldDetailInfo,
                previewsPerVersion,
              )

              inputFields.push(inputField as InputFieldDetailInfo)
            }),
          )
        }

        inputObject.inputFields = sortBy(inputFields, 'name')
        ;(inputObject as InputObjectInfo & { category: string }).category = resolveCategory(
          inputObject.id!,
        )
        data.inputObjects.push(inputObject as InputObjectInfo)
        return
      }

      if (def.kind === 'ScalarTypeDefinition') {
        const scalar: ScalarInfo = {
          name: def.name.value,
          id: helpers.getId(def.name.value),
          href: linkTo('scalars', helpers.getId(def.name.value)),
          description: await helpers.getDescription(def.description?.value || ''),
          isDeprecated: helpers.getDeprecationStatus(
            (def.directives || []) as readonly ConstDirectiveNode[],
          ),
          deprecationReason: await helpers.getDeprecationReason(
            (def.directives || []) as readonly ConstDirectiveNode[],
            {
              name: def.name.value,
            },
          ),
          preview: await helpers.getPreview(
            (def.directives || []) as readonly ConstDirectiveNode[],
            { name: def.name.value },
            previewsPerVersion,
          ),
        }
        ;(scalar as ScalarInfo & { category: string }).category = resolveCategory(scalar.id)
        data.scalars.push(scalar)
      }
    }),
  )

  data.scalars = sortBy(data.scalars.concat(externalScalars), 'name')

  data.queries = sortBy(data.queries, 'name')
  data.mutations = sortBy(data.mutations, 'name')
  data.objects = sortBy(data.objects, 'name')
  data.interfaces = sortBy(data.interfaces, 'name')
  data.enums = sortBy(data.enums, 'name')
  data.unions = sortBy(data.unions, 'name')
  data.inputObjects = sortBy(data.inputObjects, 'name')
  data.scalars = sortBy(data.scalars, 'name')

  return data
}
