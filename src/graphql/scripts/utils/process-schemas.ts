import { sortBy } from 'lodash-es'
import { parse, buildASTSchema, GraphQLSchema } from 'graphql'
import type {
  DocumentNode,
  ObjectTypeDefinitionNode,
  InputObjectTypeDefinitionNode,
  FieldDefinitionNode,
  InputValueDefinitionNode,
  ConstDirectiveNode,
  DefinitionNode,
  TypeNode,
} from 'graphql/language'
import helpers from './schema-helpers'
import { OTHER_CATEGORY, isValidCategory } from '@/graphql/lib/categories'
import fs from 'fs/promises'
import path from 'path'

interface PreviewInfo {
  toggled_by: string[]
}

// Interface for arguments returned by helpers.getArguments()
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

// All processed items get an optional `category` field once the schema has
// been categorized. Using `& { category: string }` at the type level would
// require touching every interface, so we keep it loose here and rely on the
// runtime guarantee that every emitted item has a category.

const externalScalarsJSON: Array<{ name: string; description: string }> = JSON.parse(
  await fs.readFile(path.join(process.cwd(), './src/graphql/lib/non-schema-scalars.json'), 'utf-8'),
)
const externalScalars: ScalarInfo[] = await Promise.all(
  externalScalarsJSON.map(async (scalar): Promise<ScalarInfo> => {
    const description = await helpers.getDescription(scalar.description)
    const id = helpers.getId(scalar.name)
    // External scalars (e.g. Date, URI) are not annotated upstream and live
    // in the "other" bucket. Emit the legacy href; bucket-by-category will
    // rewrite it to the category-aware form for per-category files.
    const href = helpers.getFullLink('scalars', id)
    return {
      name: scalar.name,
      description,
      id,
      href,
      category: OTHER_CATEGORY,
    } as ScalarInfo & { category: string }
  }),
)

// select and format all the data from the schema that we need for the docs
// used in the build step
// Shape of the per-version `category-map.json` used both at runtime by the
// redirect middleware and (here) at build time as a fallback source of
// categories when a schema lacks `@docsCategory` directives.
type CategoryMapFallback = Partial<Record<string, Record<string, string>>>

export default async function processSchemas(
  idl: Buffer | string,
  previewsPerVersion: PreviewInfo[],
  // Optional fallback used when the IDL itself has no `@docsCategory`
  // directives (e.g. GHES branches cut before the upstream DSL existed).
  // Lookups for type-level categories use the type id; mutations look up
  // by mutation field name under the `mutations` key.
  fallbackCategoryMap?: CategoryMapFallback,
): Promise<ProcessedSchemaData> {
  const schemaAST: DocumentNode = parse(idl.toString())
  const schema: GraphQLSchema = buildASTSchema(schemaAST)

  // list of objects is used when processing mutations
  const objectsInSchema = schemaAST.definitions.filter(
    (def): def is ObjectTypeDefinitionNode => def.kind === 'ObjectTypeDefinition',
  )

  // PASS 1: Build a typeId -> category map by reading the @docsCategory
  // directive on every categorizable definition. Queries derive their
  // category from the return type's category; mutations are annotated on
  // each Mutation root field rather than on a type, so we collect those
  // separately.
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

  // Build a flat fallback id -> cat map across every type-level kind. (We
  // exclude queries: query categories are derived from the return type.
  // Mutations are kept separately since they're keyed by field name.)
  const fallbackTypeMap: Record<string, string> = {}
  if (fallbackCategoryMap) {
    for (const kind of Object.keys(fallbackCategoryMap)) {
      if (kind === 'queries' || kind === 'mutations') continue
      const sub = fallbackCategoryMap[kind] || {}
      for (const id of Object.keys(sub)) {
        // First write wins; in practice ids don't collide across kinds.
        if (!(id in fallbackTypeMap)) fallbackTypeMap[id] = sub[id]
      }
    }
  }
  const fallbackMutationMap = fallbackCategoryMap?.mutations || {}

  // PASS 1.5: derive categories for types that github/github cannot annotate
  // directly. Two rules apply, both run before fallback / OTHER assignment so
  // they take effect for fpt and ghec (where the IDL has the annotations) and
  // also propagate into the per-version category-map.json that GHES <3.22
  // consumes as its fallback.
  //
  //   (a) Input objects inherit from their owning mutation. The DSL can mark
  //       a mutation field with @docsCategory but the generated *Input type
  //       isn't annotated; we copy the mutation's category onto each input
  //       argument's named type.
  //   (b) Connection / Edge types inherit from their underlying type. These
  //       are emitted by graphql-ruby's Relay pagination and never get a
  //       hand-written docs_category. We walk `node`/`nodes`/`edges` to the
  //       referenced object type and copy its category.
  //
  // Explicit annotations always win; derivation only fills gaps.
  const lookupCat = (id: string): string | undefined =>
    typeCategoryMap.get(id) ?? fallbackTypeMap[id]
  const getMutationCat = (mutFieldName: string): string | undefined =>
    mutationFieldCategoryMap.get(mutFieldName) ?? fallbackMutationMap[mutFieldName.toLowerCase()]

  // Walk through a TypeNode chain (NonNull/List wrappers) to the NamedType.
  const namedTypeName = (typeNode: TypeNode): string | undefined => {
    let t: TypeNode = typeNode
    while ('type' in t) t = t.type
    return t.kind === 'NamedType' ? t.name.value : undefined
  }

  // (a) input objects from mutation field args
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

  // (b) Connection / Edge types from their underlying type. Run multiple
  // passes so an XConnection that points at XEdge can still resolve after
  // XEdge itself has been derived (Connection -> Edge -> object).
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
      // Edge: walk `node`. Connection: prefer `nodes` (direct), else `edges`.
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

  // Normalize unknown categories (e.g. `:checks`, `:search`, `:packages`,
  // `:security_advisories`) to `other`. The upstream gh/gh allowlist permits
  // many categories that docs-internal hasn't yet built per-category landing
  // pages for; without this fallback those types would be silently dropped
  // by `writeCategoryFiles` (which only emits files for slugs in CATEGORIES)
  // and their redirects would 404. Once a page exists for a category, add it
  // to CATEGORIES in src/graphql/lib/categories.ts and types will move out
  // of `other` on the next sync.
  // Resolver used to populate the top-level `.category` field on every
  // processed item. The bucketer reads `.category` to split the schema into
  // per-category files and to rewrite cross-reference hrefs.
  const resolveCategory = (typeId: string): string => {
    const cat = typeCategoryMap.get(typeId) ?? fallbackTypeMap[typeId] ?? OTHER_CATEGORY
    return isValidCategory(cat) ? cat : OTHER_CATEGORY
  }

  // process-schemas emits legacy `/graphql/reference/<urlKind>#<id>` hrefs
  // throughout so the monolithic `schema.json` stays compatible with the
  // existing runtime loader. The bucketer rewrites these to the
  // category-aware form when emitting per-category schema files.
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
      // QUERIES
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

      // MUTATIONS
      if (def.kind === 'ObjectTypeDefinition' && def.name.value === 'Mutation') {
        await Promise.all(
          (def.fields || []).map(async (field: FieldDefinitionNode) => {
            const mutation: Partial<MutationInfo> = {}
            const inputFields: InputFieldInfo[] = []
            const returnFields: ReturnFieldInfo[] = []

            mutation.name = field.name.value
            mutation.id = helpers.getId(mutation.name)
            // Mutation fields carry @docsCategory at the field level on the
            // Mutation root, not on the payload type, so use the field map.
            // Normalize via isValidCategory so an upstream-only category
            // doesn't produce hrefs/buckets we don't ship pages for.
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

            // there is only ever one input field argument, but loop anyway
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

            // get return fields
            // first get the payload, then find payload object's fields. these are the mutation's return fields.
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

      // OBJECTS
      if (def.kind === 'ObjectTypeDefinition') {
        // objects ending with 'Payload' are only used to derive mutation values
        // they are not included in the objects docs
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

        // an object's interfaces render in the `Implements` section
        // interfaces do not have directives so they cannot be under preview/deprecated
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

        // an object's fields render in the `Fields` section
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

      // INTERFACES
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

        // an interface's fields render in the "Fields" section
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

      // ENUMS
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

      // UNIONS
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

        // union types do not have directives so cannot be under preview/deprecated
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

      // INPUT OBJECTS
      // NOTE: input objects ending with `Input` are NOT included in the v4 input objects sidebar
      // but they are still present in the docs (e.g., https://developer.github.com/v4/input_object/acceptenterpriseadministratorinvitationinput/)
      // so we will include them here
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

      // SCALARS
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

  // add non-schema scalars and sort all scalars alphabetically
  data.scalars = sortBy(data.scalars.concat(externalScalars), 'name')

  // sort all the types alphabetically
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
