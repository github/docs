#!/usr/bin/env node
import { renderContent } from '#src/content-render/index.js'

// If there is a oneOf at the top level, then we have to present just one
// in the docs. We don't currently have a convention for showing more than one
// set of input parameters in the docs. Having a top-level oneOf is also very
// uncommon.
// Currently there aren't very many operations that require this treatment.
// As an example, the 'Add status check contexts' and 'Set status check contexts'
// operations have a top-level oneOf.

async function getTopLevelOneOfProperty(schema) {
  if (!schema.oneOf) {
    throw new Error('Schema does not have a requestBody oneOf property defined')
  }
  if (!(Array.isArray(schema.oneOf) && schema.oneOf.length > 0)) {
    throw new Error('Schema requestBody oneOf property is not an array')
  }
  // When a oneOf exists but the `type` differs, the case has historically
  // been that the alternate option is an array, where the first option
  // is the array as a property of the object. We need to ensure that the
  // first option listed is the most comprehensive and preferred option.
  const firstOneOfObject = schema.oneOf[0]
  const allOneOfAreObjects = schema.oneOf.every((elem) => elem.type === 'object')
  let required = firstOneOfObject.required || []
  let properties = firstOneOfObject.properties || {}

  // When all of the oneOf objects have the `type: object` we
  // need to display all of the parameters.
  // This merges all of the properties and required values.
  if (allOneOfAreObjects) {
    for (const each of schema.oneOf.slice(1)) {
      Object.assign(firstOneOfObject.properties, each.properties)
      required = firstOneOfObject.required.concat(each.required)
    }
    properties = firstOneOfObject.properties
  }
  return { properties, required }
}

// Gets the body parameters for a given schema recursively.
export async function getBodyParams(schema, topLevel = false) {
  const bodyParametersParsed = []
  const schemaObject = schema.oneOf && topLevel ? await getTopLevelOneOfProperty(schema) : schema
  const properties = schemaObject.properties || {}
  const required = schemaObject.required || []

  // Most operation requestBody schemas are objects. When the type is an array,
  // there will not be properties on the `schema` object.
  if (topLevel && schema.type === 'array') {
    const childParamsGroups = []
    const arrayType = schema.items.type
    const paramType = [schema.type]
    if (arrayType === 'object') {
      childParamsGroups.push(...(await getBodyParams(schema.items, false)))
    } else {
      paramType.splice(paramType.indexOf('array'), 1, `array of ${arrayType}s`)
    }
    const paramDecorated = await getTransformedParam(schema, paramType, {
      required,
      topLevel,
      childParamsGroups,
    })
    return [paramDecorated]
  }

  for (const [paramKey, param] of Object.entries(properties)) {
    // OpenAPI 3.0 only had a single value for `type`. OpenAPI 3.1
    // will either be a single value or an array of values.
    // This makes type an array regardless of how many values the array
    // includes. This allows us to support 3.1 while remaining backwards
    // compatible with 3.0.
    const paramType = Array.isArray(param.type) ? param.type : [param.type]
    const additionalPropertiesType = param.additionalProperties
      ? Array.isArray(param.additionalProperties.type)
        ? param.additionalProperties.type
        : [param.additionalProperties.type]
      : []
    const childParamsGroups = []

    // If the parameter is an array or object there may be child params
    // If the parameter has oneOf or additionalProperties, they need to be
    // recursively read too.

    // There are a couple operations with additionalProperties, which allows
    // the api to define input parameters with the type dictionary. These are the only
    // two operations (at the time of adding this code) that use additionalProperties
    // Create a snapshot of dependencies for a repository
    // Update a gist
    if (param.additionalProperties && additionalPropertiesType.includes('object')) {
      const keyParam = {
        type: 'object',
        name: 'key',
        description: await renderContent(
          `A user-defined key to represent an item in \`${paramKey}\`.`,
        ),
        isRequired: param.required,
        enum: param.enum,
        default: param.default,
        childParamsGroups: [],
      }
      keyParam.childParamsGroups.push(...(await getBodyParams(param.additionalProperties, false)))
      childParamsGroups.push(keyParam)
    } else if (paramType && paramType.includes('array')) {
      if (param.items && param.items.oneOf) {
        if (param.items.oneOf.every((object) => object.type === 'object')) {
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
        // If the type is an enumerated list of strings
        if (arrayType === 'string' && param.items.enum) {
          param.description += `${
            param.description ? '\n' : ''
          }Supported values are: ${param.items.enum
            .map((lang) => `<code>${lang}</code>`)
            .join(', ')}`
        }
      }
    } else if (paramType && paramType.includes('object')) {
      if (param && param.oneOf) {
        if (param.oneOf.every((object) => object.type === 'object')) {
          param.oneOfObject = true
          childParamsGroups.push(...(await getOneOfChildParams(param)))
        }
      } else {
        childParamsGroups.push(...(await getBodyParams(param, false)))
      }
    } else if (param && param.oneOf) {
      // get concatenated description and type
      const descriptions = []
      for (const childParam of param.oneOf) {
        paramType.push(childParam.type)
        // If there is no parent description, create a description from
        // each type
        if (!param.description) {
          if (childParam.type === 'array') {
            if (childParam.items.description) {
              descriptions.push({
                type: childParam.type,
                description: childParam.items.description,
              })
            }
          } else {
            if (childParam.description) {
              descriptions.push({ type: childParam.type, description: childParam.description })
            }
          }
        } else {
          descriptions.push({ type: param.type, description: param.description })
        }
      }
      // Occasionally, there is no parent description and the description
      // is in the first child parameter.
      const oneOfDescriptions = descriptions.length ? descriptions[0].description : ''
      if (!param.description) param.description = oneOfDescriptions

      // This is a workaround for an operation that incorrectly defines anyOf
      // for a body parameter. As a workaround, we will use the first object
      // in the list of the anyOf array. Otherwise, fallback to the first item
      // in the array. There is currently only one occurrence for the operation
      // id repos/update-information-about-pages-site. See Ecosystem API issue
      // number #3332 for future plans to fix this in the OpenAPI
    } else if (param && param.anyOf && Object.keys(param).length === 1) {
      const firstObject = Object.values(param.anyOf).find((item) => item.type === 'object')
      if (firstObject) {
        paramType.push('object')
        param.description = firstObject.description
        param.isRequired = firstObject.required
        childParamsGroups.push(...(await getBodyParams(firstObject, false)))
      } else {
        paramType.push(param.anyOf[0].type)
        param.description = param.anyOf[0].description
        param.isRequired = param.anyOf[0].required
      }
    } else if (param && param.allOf) {
      // this else is only used for webhooks handling of allOf
      for (const prop of param.allOf) {
        paramType.push('object')
        childParamsGroups.push(...(await getBodyParams(prop, false)))
      }
    }

    const paramDecorated = await getTransformedParam(param, paramType, {
      paramKey,
      required,
      childParamsGroups,
      topLevel,
    })
    bodyParametersParsed.push(paramDecorated)
  }
  return bodyParametersParsed
}

async function getTransformedParam(param, paramType, props) {
  const { paramKey, required, childParamsGroups, topLevel } = props
  const paramDecorated = {}
  // Supports backwards compatibility for OpenAPI 3.0
  // In 3.1 a nullable type is part of the param.type array and
  // the property param.nullable does not exist.
  if (param.nullable) paramType.push('null')
  paramDecorated.type = Array.from(new Set(paramType.filter(Boolean))).join(' or ')
  paramDecorated.name = paramKey
  if (topLevel) {
    paramDecorated.in = 'body'
  }
  paramDecorated.description = await renderContent(param.description)
  if (required && required.includes(paramKey)) {
    paramDecorated.isRequired = true
  }
  if (childParamsGroups && childParamsGroups.length > 0 && !param.oneOfObject) {
    // Since the allOf properties can have multiple duplicate properties we want to get rid of the duplicates with the same name, but keep the
    // the one that has isRequired set to true.
    const mergedChildParamsGroups = Array.from(
      childParamsGroups
        .reduce((childParam, obj) => {
          const curr = childParam.get(obj.name)
          return childParam.set(
            obj.name,
            curr ? (!Object.hasOwn(curr, 'isRequired') ? obj : curr) : obj,
          )
        }, new Map())
        .values(),
    )

    paramDecorated.childParamsGroups = mergedChildParamsGroups
  } else if (childParamsGroups.length > 0) {
    paramDecorated.childParamsGroups = childParamsGroups
  }
  if (param.enum) {
    paramDecorated.enum = param.enum
  }

  if (param.oneOfObject) {
    paramDecorated.oneOfObject = true
  }

  // we also want to catch default values of `false` for booleans
  if (param.default !== undefined) {
    paramDecorated.default = param.default
  }
  return paramDecorated
}

async function getOneOfChildParams(param) {
  const childParamsGroups = []
  for (const oneOfParam of param.oneOf) {
    const objParam = {
      type: 'object',
      name: oneOfParam.title,
      description: await renderContent(oneOfParam.description),
      isRequired: oneOfParam.required,
      childParamsGroups: [],
    }
    objParam.childParamsGroups.push(...(await getBodyParams(oneOfParam, false)))
    childParamsGroups.push(objParam)
  }
  return childParamsGroups
}
