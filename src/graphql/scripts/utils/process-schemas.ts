import { sortBy } from 'lodash-es'
import { parse, buildASTSchema, GraphQLSchema } from 'graphql'
import type {
  DocumentNode,
  ObjectTypeDefinitionNode,
  FieldDefinitionNode,
  InputValueDefinitionNode,
  ConstDirectiveNode,
  DefinitionNode,
} from 'graphql/language'
import helpers from './schema-helpers'
import fs from 'fs/promises'
import path from 'path'

interface PreviewInfo {
  toggled_by: string[]
}

// Interface for arguments returned by helpers.getArguments()
interface FieldArgumentInfo {
  name: string
  defaultValue?: any // GraphQL default values can be any JSON-serializable type
  description: string
  type: {
    name: string
    id: string
    kind: string
    href: string
  }
}

interface ScalarInfo {
  name: string
  description: string
  id: string
  href: string
  kind?: string
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
}

interface QueryArgumentInfo {
  name: string
  defaultValue?: any // GraphQL default values can be any JSON-serializable type
  type: string
  id: string
  kind: string
  href: string
  description: string
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
}

interface QueryInfo {
  name: string
  type: string
  kind: string
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
  kind: string
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
  kind: string
  href: string
}

interface ReturnFieldInfo {
  name: string
  type: string
  id: string
  kind: string
  href: string
  description: string
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
}

interface MutationInfo {
  name: string
  kind: string
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
  kind: string
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
  kind: string
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
  kind: string
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
  kind: string
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
  kind: string
  href: string
  isDeprecated?: boolean
  deprecationReason?: string
  preview?: PreviewInfo
}

interface InputObjectInfo {
  name: string
  kind: string
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

const externalScalarsJSON: Array<{ name: string; description: string }> = JSON.parse(
  await fs.readFile(path.join(process.cwd(), './src/graphql/lib/non-schema-scalars.json'), 'utf-8'),
)
const externalScalars: ScalarInfo[] = await Promise.all(
  externalScalarsJSON.map(async (scalar): Promise<ScalarInfo> => {
    const description = await helpers.getDescription(scalar.description)
    const id = helpers.getId(scalar.name)
    const href = helpers.getFullLink('scalars', id)
    return {
      name: scalar.name,
      description,
      id,
      href,
    }
  }),
)

// select and format all the data from the schema that we need for the docs
// used in the build step
export default async function processSchemas(
  idl: Buffer | string,
  previewsPerVersion: PreviewInfo[],
): Promise<ProcessedSchemaData> {
  const schemaAST: DocumentNode = parse(idl.toString())
  const schema: GraphQLSchema = buildASTSchema(schemaAST)

  // list of objects is used when processing mutations
  const objectsInSchema = schemaAST.definitions.filter(
    (def): def is ObjectTypeDefinitionNode => def.kind === 'ObjectTypeDefinition',
  )

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
            query.kind = fieldKind
            query.id = helpers.getId(query.type)
            query.href = helpers.getFullLink(query.kind, query.id)
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
                // ConstValueNode is a complex union; accessing value property generically
                queryArg.defaultValue = arg.defaultValue
                  ? (arg.defaultValue as any).value
                  : undefined
                // InputValueDefinitionNode.type is compatible with getType's expected structure
                const argType = helpers.getType(arg as any)
                if (!argType) return
                queryArg.type = argType
                queryArg.id = helpers.getId(queryArg.type)
                const argKind = helpers.getTypeKind(queryArg.type, schema)
                if (!argKind) return
                queryArg.kind = argKind
                queryArg.href = helpers.getFullLink(queryArg.kind, queryArg.id)
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
            mutation.kind = helpers.getKind(def.name.value)
            mutation.id = helpers.getId(mutation.name)
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
                // InputValueDefinitionNode.type is compatible with getType's expected structure
                const argType = helpers.getType(arg as any)
                if (!argType) return
                inputField.type = argType
                inputField.id = helpers.getId(inputField.type)
                const argKind = helpers.getTypeKind(inputField.type, schema)
                if (!argKind) return
                inputField.kind = argKind
                inputField.href = helpers.getFullLink(inputField.kind, inputField.id)
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
                returnField.kind = fieldKind
                returnField.href = helpers.getFullLink(returnField.kind, returnField.id)
                returnField.description = await helpers.getDescription(
                  field.description?.value || '',
                )
                returnField.isDeprecated = helpers.getDeprecationStatus(
                  (field.directives || []) as readonly ConstDirectiveNode[],
                )
                returnField.deprecationReason = await helpers.getDeprecationReason(
                  (field.directives || []) as readonly ConstDirectiveNode[],
                  returnField as ReturnFieldInfo,
                )
                returnField.preview = await helpers.getPreview(
                  (field.directives || []) as readonly ConstDirectiveNode[],
                  returnField as ReturnFieldInfo,
                  previewsPerVersion,
                )
                returnFields.push(returnField as ReturnFieldInfo)
              }),
            )

            mutation.returnFields = sortBy(returnFields, 'name')

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
        object.kind = helpers.getKind(def.kind)
        object.id = helpers.getId(object.name)
        object.href = helpers.getFullLink('objects', object.id)
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
                href: helpers.getFullLink('interfaces', helpers.getId(graphqlInterface.name.value)),
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
              objectField.kind = fieldKind
              objectField.href = helpers.getFullLink(objectField.kind, objectField.id)
              // InputValueDefinitionNode structure is compatible with ArgumentNode expected by getArguments
              objectField.arguments = await helpers.getArguments(
                (field.arguments || []) as any,
                schema,
              )
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

        data.objects.push(object as ObjectInfo)
        return
      }

      // INTERFACES
      if (def.kind === 'InterfaceTypeDefinition') {
        const graphqlInterface: Partial<GraphQLInterfaceInfo> = {}
        const interfaceFields: FieldInfo[] = []

        graphqlInterface.name = def.name.value
        graphqlInterface.kind = helpers.getKind(def.kind)
        graphqlInterface.id = helpers.getId(graphqlInterface.name)
        graphqlInterface.href = helpers.getFullLink('interfaces', graphqlInterface.id)
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
              interfaceField.kind = fieldKind
              interfaceField.href = helpers.getFullLink(interfaceField.kind, interfaceField.id)
              // InputValueDefinitionNode structure is compatible with ArgumentNode expected by getArguments
              interfaceField.arguments = await helpers.getArguments(
                (field.arguments || []) as any,
                schema,
              )
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

        data.interfaces.push(graphqlInterface as GraphQLInterfaceInfo)
        return
      }

      // ENUMS
      if (def.kind === 'EnumTypeDefinition') {
        const graphqlEnum: Partial<EnumInfo> = {}
        const enumValues: EnumValueInfo[] = []

        graphqlEnum.name = def.name.value
        graphqlEnum.kind = helpers.getKind(def.kind)
        graphqlEnum.id = helpers.getId(graphqlEnum.name)
        graphqlEnum.href = helpers.getFullLink('enums', graphqlEnum.id)
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

        data.enums.push(graphqlEnum as EnumInfo)
        return
      }

      // UNIONS
      if (def.kind === 'UnionTypeDefinition') {
        const union: Partial<UnionInfo> = {}
        const possibleTypes: PossibleTypeInfo[] = []

        union.name = def.name.value
        union.kind = helpers.getKind(def.kind)
        union.id = helpers.getId(union.name)
        union.href = helpers.getFullLink('unions', union.id)
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
              href: helpers.getFullLink('objects', helpers.getId(type.name.value)),
            }
            possibleTypes.push(possibleType)
          }),
        )

        union.possibleTypes = sortBy(possibleTypes, 'name')

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
        inputObject.kind = helpers.getKind(def.kind)
        inputObject.id = helpers.getId(inputObject.name)
        inputObject.href = helpers.getFullLink('input-objects', inputObject.id)
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
              // InputValueDefinitionNode.type is compatible with getType's expected structure
              const fieldType = helpers.getType(field as any)
              if (!fieldType) return
              inputField.type = fieldType
              inputField.id = helpers.getId(inputField.type)
              const fieldKind = helpers.getTypeKind(inputField.type, schema)
              if (!fieldKind) return
              inputField.kind = fieldKind
              inputField.href = helpers.getFullLink(inputField.kind, inputField.id)
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

        data.inputObjects.push(inputObject as InputObjectInfo)
        return
      }

      // SCALARS
      if (def.kind === 'ScalarTypeDefinition') {
        const scalar: ScalarInfo = {
          name: def.name.value,
          kind: helpers.getKind(def.kind),
          id: helpers.getId(def.name.value),
          href: helpers.getFullLink('scalars', helpers.getId(def.name.value)),
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
