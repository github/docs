import { renderContent } from './render-content'

export interface Schema {
  oneOf?: Schema[]
  type?: string | string[]
  items?: Schema
  properties?: Record<string, Schema>
  required?: string[]
  additionalProperties?: Schema
  description?: string
  enum?: string[]
  nullable?: boolean
  allOf?: Schema[]
  anyOf?: Schema[]
  [key: string]: unknown
}

export interface TransformedParam {
  type: string
  name: string
  description: string
  isRequired?: boolean
  childParamsGroups?: TransformedParam[]
  enum?: string[]
  oneOfObject?: boolean
  default?: unknown
}

interface BodyParamProps {
  paramKey?: string
  required?: string[]
  childParamsGroups?: TransformedParam[]
}

// Docs cannot display multiple input parameter sets for top-level oneOf.
// getTopLevelOneOfProperty uses the first option. The Add status check contexts
// and Set status check contexts operations need this.
// When every top-level oneOf option is an object, getTopLevelOneOfProperty merges
// all properties. With three or more options, middle required fields can lose required flags.
async function getTopLevelOneOfProperty(
  schema: Schema,
): Promise<{ properties: Record<string, Schema>; required: string[] }> {
  if (!schema.oneOf) {
    throw new Error('Schema does not have a requestBody oneOf property defined')
  }
  if (!(Array.isArray(schema.oneOf) && schema.oneOf.length > 0)) {
    throw new Error('Schema requestBody oneOf property is not an array')
  }

  // When oneOf types differ, the first option must be the comprehensive object form.
  const firstOneOfObject = schema.oneOf[0]
  const allOneOfAreObjects = schema.oneOf.every((elem) => elem.type === 'object')
  let required = firstOneOfObject.required || []
  let properties = firstOneOfObject.properties || {}

  if (allOneOfAreObjects) {
    required = []
    properties = {}
    for (const each of schema.oneOf) {
      if (each.properties) {
        Object.assign(properties, each.properties)
      }
      if (each.required) {
        required = required.concat(each.required)
      }
    }
  }
  return { properties, required }
}

async function handleObjectOnlyOneOf(
  param: Schema,
  paramType: string[],
): Promise<TransformedParam[]> {
  if (param.oneOf && param.oneOf.every((object: Schema) => object.type === 'object')) {
    paramType.push('object')
    param.oneOfObject = true
    return await getOneOfChildParams(param)
  }
  return []
}

// OpenAPI 3.0 allows one type value, while OpenAPI 3.1 also allows an array, so getBodyParams
// normalizes type values to arrays before it builds the rendered type string.
// For child parameters, getBodyParams reads object-valued additionalProperties recursively.
// The Create a snapshot of dependencies for a repository and Update a gist operations need
// that dictionary shape. Object-only oneOf alternatives also recurse into child parameters,
// while mixed oneOf adds types and descriptions without creating child parameter groups.
export async function getBodyParams(schema: Schema, topLevel = false): Promise<TransformedParam[]> {
  const bodyParametersParsed: TransformedParam[] = []
  const schemaObject = schema.oneOf && topLevel ? await getTopLevelOneOfProperty(schema) : schema
  const properties = schemaObject.properties || {}
  const required = schemaObject.required || []

  // Top-level array schemas have no properties on the schema object.
  if (topLevel && schema.type === 'array') {
    const childParamsGroups: TransformedParam[] = []
    if (!schema.items) {
      throw new Error('Array schema must have items property')
    }
    const arrayType = schema.items.type
    const paramType = [schema.type]
    if (arrayType === 'object') {
      childParamsGroups.push(...(await getBodyParams(schema.items, false)))
    } else {
      paramType.splice(paramType.indexOf('array'), 1, `array of ${arrayType}s`)
    }
    const paramDecorated = await getTransformedParam(schema, paramType, {
      required,
      childParamsGroups,
    })
    return [paramDecorated]
  }

  for (const [paramKey, param] of Object.entries(properties)) {
    const paramType = (Array.isArray(param.type) ? param.type : [param.type]).filter(
      (t): t is string => t !== undefined,
    )
    const additionalPropertiesType = param.additionalProperties
      ? (Array.isArray(param.additionalProperties.type)
          ? param.additionalProperties.type
          : [param.additionalProperties.type]
        ).filter((t): t is string => t !== undefined)
      : []
    const childParamsGroups: TransformedParam[] = []

    if (param.additionalProperties && additionalPropertiesType.includes('object')) {
      const keyParam: TransformedParam = {
        type: 'object',
        name: 'key',
        description: await renderContent(
          `A user-defined key to represent an item in \`${paramKey}\`.`,
        ),
        enum: param.enum,
        default: param.default,
        childParamsGroups: [],
      }
      if (keyParam.childParamsGroups) {
        keyParam.childParamsGroups.push(...(await getBodyParams(param.additionalProperties, false)))
      }
      childParamsGroups.push(keyParam)
    } else if (paramType.includes('array') && param.items) {
      if (param.items.oneOf) {
        if (param.items.oneOf.every((object: Schema) => object.type === 'object')) {
          paramType.splice(paramType.indexOf('array'), 1, `array of objects`)
          param.oneOfObject = true
          childParamsGroups.push(...(await getOneOfChildParams(param.items)))
        }
      } else {
        const arrayType = param.items.type
        if (arrayType) {
          paramType.splice(paramType.indexOf('array'), 1, `array of ${arrayType}s`)
        }
        if (arrayType === 'object') {
          childParamsGroups.push(...(await getBodyParams(param.items, false)))
        }
        if (arrayType === 'string' && param.items.enum) {
          param.description += `${
            param.description ? '\n' : ''
          }Supported values are: ${((param.items.enum || []) as string[]).map((lang: string) => `<code>${lang}</code>`).join(', ')}`
        }
      }
    } else if (paramType.includes('object')) {
      if (param.oneOf) {
        const oneOfChildren = await handleObjectOnlyOneOf(param, paramType)
        if (oneOfChildren.length > 0) {
          childParamsGroups.push(...oneOfChildren)
        }
      } else {
        childParamsGroups.push(...(await getBodyParams(param, false)))
      }
    } else if (param.oneOf) {
      const oneOfChildren = await handleObjectOnlyOneOf(param as Schema, paramType)
      if (oneOfChildren.length > 0) {
        childParamsGroups.push(...oneOfChildren)
      } else {
        const descriptions: { type: string; description: string }[] = []
        for (const childParam of param.oneOf) {
          paramType.push(
            ...(Array.isArray(childParam.type)
              ? childParam.type
              : childParam.type
                ? [childParam.type]
                : []),
          )
          if (!param.description) {
            if (childParam.type === 'array') {
              if (childParam.items && childParam.items.description) {
                descriptions.push({
                  type: (childParam.type as string) || '',
                  description: (childParam.items?.description as string) || '',
                })
              }
            } else {
              if (childParam.description) {
                descriptions.push({
                  type: (childParam.type as string) || '',
                  description: (childParam.description as string) || '',
                })
              }
            }
          } else {
            descriptions.push({
              type: (param.type as string) || '',
              description: (param.description as string) || '',
            })
          }
        }
        // A oneOf with no parent description borrows the first collected child description.
        const oneOfDescriptions = descriptions.length ? descriptions[0].description : ''
        if (!param.description) param.description = oneOfDescriptions
      }

      // Pages source incorrectly declares anyOf; object entry adds child params and preserves null.
    } else if (param.anyOf && Object.keys(param).length === 1) {
      const firstObject = Object.values(param.anyOf).find(
        (item) => (item as Schema).type === 'object',
      ) as Schema
      const hasNull = param.anyOf.some((item) => (item as Schema).type === 'null')
      if (firstObject) {
        paramType.push('object')
        if (hasNull) paramType.push('null')
        param.description = firstObject.description
        childParamsGroups.push(...(await getBodyParams(firstObject, false)))
      } else {
        paramType.push(param.anyOf[0].type as string)
        param.description = param.anyOf[0].description
      }
      // Webhooks combine body parameter groups with allOf.
    } else if (param.allOf) {
      for (const prop of param.allOf) {
        paramType.push('object')
        childParamsGroups.push(...(await getBodyParams(prop, false)))
      }
    }

    const paramDecorated = await getTransformedParam(param, paramType, {
      paramKey,
      required,
      childParamsGroups,
    })
    bodyParametersParsed.push(paramDecorated)
  }
  return bodyParametersParsed
}

async function getTransformedParam(
  param: Schema,
  paramType: string[],
  props: BodyParamProps,
): Promise<TransformedParam> {
  const { paramKey, required, childParamsGroups } = props
  const paramDecorated: TransformedParam = {} as TransformedParam
  // OpenAPI 3.0 stores nullable separately from OpenAPI 3.1 type arrays.
  if (param.nullable) paramType.push('null')
  paramDecorated.type = Array.from(new Set(paramType.filter(Boolean))).join(' or ')
  paramDecorated.name = paramKey || ''
  paramDecorated.description = await renderContent(param.description || '')
  if (required && required.includes(paramKey || '')) {
    paramDecorated.isRequired = true
  }
  if (childParamsGroups && childParamsGroups.length > 0 && !param.oneOfObject) {
    // Drop duplicate allOf child params by name, preferring required entries.
    const mergedChildParamsGroups = Array.from(
      childParamsGroups
        .reduce((childParam, obj) => {
          const curr = childParam.get(obj.name)
          return childParam.set(
            obj.name,
            curr ? (!Object.hasOwn(curr, 'isRequired') ? obj : curr) : obj,
          )
        }, new Map<string, TransformedParam>())
        .values(),
    )

    paramDecorated.childParamsGroups = mergedChildParamsGroups
  } else if (childParamsGroups && childParamsGroups.length > 0) {
    paramDecorated.childParamsGroups = childParamsGroups
  }
  if (param.enum) {
    paramDecorated.enum = param.enum
  }

  if (param.oneOfObject) {
    paramDecorated.oneOfObject = true
  }

  if (param.default !== undefined) {
    paramDecorated.default = param.default
  }
  return paramDecorated
}

async function getOneOfChildParams(param: Schema): Promise<TransformedParam[]> {
  const childParamsGroups: TransformedParam[] = []
  if (!param.oneOf) {
    return childParamsGroups
  }
  for (const oneOfParam of param.oneOf) {
    const objParam: TransformedParam = {
      type: 'object',
      name: (oneOfParam.title as string) || '',
      description: await renderContent((oneOfParam.description as string) || ''),
      childParamsGroups: [],
    }
    if (objParam.childParamsGroups) {
      objParam.childParamsGroups.push(...(await getBodyParams(oneOfParam, false)))
    }
    childParamsGroups.push(objParam)
  }
  return childParamsGroups
}
