#!/usr/bin/env node

// In the case that there are more than one example requests, and
// no content responses, a request with an example key that matches the
// status code of a response will be matched.
const DEFAULT_EXAMPLE_DESCRIPTION = 'Example'
const DEFAULT_EXAMPLE_KEY = 'default'
const DEFAULT_ACCEPT_HEADER = 'application/vnd.github.v3+json'

// Retrieves request and response examples and attempts to
// merge them to create matching request/response examples
// The key used in the media type `examples` property is
// used to match requests to responses.
export default function getCodeSamples(operation) {
  const responseExamples = getResponseExamples(operation)
  const requestExamples = getRequestExamples(operation)

  const mergedExamples = mergeExamples(requestExamples, responseExamples)

  // If there are multiple examples and if the request body
  // has the same description, add a number to the example
  if (mergedExamples.length > 1) {
    const count = {}
    mergedExamples.forEach((item) => {
      count[item.request.description] = (count[item.request.description] || 0) + 1
    })

    const newMergedExamples = mergedExamples.map((example, i) => ({
      ...example,
      request: {
        ...example.request,
        description:
          count[example.request.description] > 1
            ? example.request.description +
              ' ' +
              (i + 1) +
              ': Status Code ' +
              example.response.statusCode
            : example.request.description,
      },
    }))

    return newMergedExamples
  }

  return mergedExamples
}

export function mergeExamples(requestExamples, responseExamples) {
  // There is always at least one request example, but it won't create
  // a meaningful example unless it has a response example.
  if (requestExamples.length === 1 && responseExamples.length === 0) {
    return []
  }

  // If there is one request and one response example, we don't
  // need to merge the requests and responses, and we don't need
  // to match keys directly. This allows falling back in the
  // case that the existing OpenAPI schema has mismatched example keys.
  if (requestExamples.length === 1 && responseExamples.length === 1) {
    return [{ ...requestExamples[0], response: responseExamples[0].response }]
  }

  // If there is a request with no request body parameters and all of
  // the responses have no content, then we can create a docs
  // example for just status codes below 300. All other status codes will
  // be listed in the status code table in the docs.
  if (
    requestExamples.length === 1 &&
    responseExamples.length > 1 &&
    !responseExamples.find((ex) => ex.response.example)
  ) {
    return responseExamples
      .filter((resp) => parseInt(resp.response.statusCode, 10) < 300)
      .map((ex) => ({ ...requestExamples[0], ...ex }))
  }

  // If there is exactly one request example and one or more response
  // examples, we can make a docs example for the response examples that
  // have content. All remaining status codes with no content
  // will be listed in the status code table in the docs.
  if (
    requestExamples.length === 1 &&
    responseExamples.length > 1 &&
    responseExamples.filter((ex) => ex.response.example).length >= 1
  ) {
    return responseExamples
      .filter((ex) => ex.response.example)
      .map((ex) => ({ ...requestExamples[0], ...ex }))
  }

  // Finally, we'll attempt to match examples with matching keys.
  // This iterates through the longer array and compares key values to keys in
  // the shorter array.
  const requestsExamplesLarger = requestExamples.length >= responseExamples.length
  const target = requestsExamplesLarger ? requestExamples : responseExamples
  const source = requestsExamplesLarger ? responseExamples : requestExamples

  // Iterates over the larger array or "target" (or if equal requests) to see
  // if there are any matches in the smaller array or "source"
  // (or if equal responses) that can be added to target array. If a request
  // example and response example have matching keys they will be merged into
  // an example. If there is more than one key match, the first match will
  // be used.
  return target.filter((targetEx) => {
    const match = source.find((srcEx) => srcEx.key === targetEx.key)
    if (match) return Object.assign(targetEx, match)
    return false
  })
}

/*
  Create an example object for each example in the requestBody property
  of the schema. Each requestBody can have more than one content type. 
  Each content type can have more than one example. We create an object
  for each permutation of content type and example. 
  Returns an array of objects in the format:
  {
    key,
    request: {
      contentType,
      description,
      acceptHeader,
      bodyParameters,
      parameters,
    }
  }
*/
export function getRequestExamples(operation) {
  const requestExamples = []
  const parameterExamples = getParameterExamples(operation)

  // When no request body or parameters are defined, we create a generic
  // request example. Not all operations have request bodies or parameters,
  // but we always want to show at least an example with the path.
  if (!operation.requestBody && Object.keys(parameterExamples).length === 0) {
    return [
      {
        key: DEFAULT_EXAMPLE_KEY,
        request: {
          description: DEFAULT_EXAMPLE_DESCRIPTION,
          acceptHeader: DEFAULT_ACCEPT_HEADER,
        },
      },
    ]
  }

  // When no request body exists, we create an example from the parameters
  if (!operation.requestBody) {
    return Object.keys(parameterExamples).map((key) => {
      return {
        key,
        request: {
          description: DEFAULT_EXAMPLE_DESCRIPTION,
          acceptHeader: DEFAULT_ACCEPT_HEADER,
          parameters: parameterExamples[key] || parameterExamples.default,
        },
      }
    })
  }

  // Requests can have multiple content types each with their own set of
  // examples.
  Object.keys(operation.requestBody.content).forEach((contentType) => {
    let examples = {}
    // This is a fallback to allow using the `example` property in
    // the schema. If we start to enforce using examples vs. example using
    // a linter, we can remove the check for `example`.
    // For now, we'll use the key default, which is a common default
    // example name in the OpenAPI schema.
    if (operation.requestBody.content[contentType].example) {
      examples = {
        default: {
          value: operation.requestBody.content[contentType].example,
        },
      }
    } else if (operation.requestBody.content[contentType].examples) {
      examples = operation.requestBody.content[contentType].examples
    } else {
      // Example for this content type doesn't exist so we'll try and create one
      requestExamples.push({
        key: DEFAULT_EXAMPLE_KEY,
        request: {
          contentType,
          description: DEFAULT_EXAMPLE_DESCRIPTION,
          acceptHeader: DEFAULT_ACCEPT_HEADER,
          parameters: parameterExamples.default,
        },
      })
      return
    }

    // There can be more than one example for a given content type. We need to
    // iterate over the keys of the examples to create individual
    // example objects
    Object.keys(examples).forEach((key) => {
      // A content type that includes `+json` is a custom media type
      // The default accept header is application/vnd.github.v3+json
      // Which would have a content type of `application/json`
      const acceptHeader = contentType.includes('+json')
        ? contentType
        : 'application/vnd.github.v3+json'

      const example = {
        key,
        request: {
          contentType,
          description: examples[key].summary || DEFAULT_EXAMPLE_DESCRIPTION,
          acceptHeader,
          bodyParameters: examples[key].value,
          parameters: parameterExamples[key] || parameterExamples.default,
        },
      }
      requestExamples.push(example)
    })
  })
  return requestExamples
}

/*
  Create an example object for each example in the response property
  of the schema. Each response can have more than one status code,
  each with more than one content type. And each content type can 
  have more than one example. We create an object
  for each permutation of status, content type, and example. 
  Returns an array of objects in the format:
  {
    key,
    response: {
      statusCode,
      contentType,
      description,
      example,
    }
  }
*/
export function getResponseExamples(operation) {
  const responseExamples = []
  Object.keys(operation.responses).forEach((statusCode) => {
    // We don't want to create examples for error codes
    // Error codes are displayed in the status table in the docs
    if (parseInt(statusCode, 10) >= 400) return

    const content = operation.responses[statusCode].content

    // A response doesn't always have content (ex:, status 304)
    // In this case we create a generic example for the status code
    // with a key that matches the status code.
    if (!content) {
      const example = {
        key: statusCode,
        response: {
          statusCode,
          description: operation.responses[statusCode].description,
        },
      }
      responseExamples.push(example)
      return
    }

    // Responses can have multiple content types each with their own set of
    // examples.
    Object.keys(content).forEach((contentType) => {
      let examples = {}
      // This is a fallback to allow using the `example` property in
      // the schema. If we start to enforce using examples vs. example using
      // a linter, we can remove the check for `example`.
      // For now, we'll use the key default, which is a common default
      // example name in the OpenAPI schema.
      if (operation.responses[statusCode].content[contentType].example) {
        examples = {
          default: {
            value: operation.responses[statusCode].content[contentType].example,
          },
        }
      } else if (operation.responses[statusCode].content[contentType].examples) {
        examples = operation.responses[statusCode].content[contentType].examples
      } else if (parseInt(statusCode, 10) < 300) {
        // Sometimes there are missing examples for say a 200 response and
        // the operation also has a 304 no content status. If we don't add
        // the 200 response example, even though it has not example response,
        // the resulting responseExamples would only contain the 304 response.
        // That would be confusing in the docs because it's expected to see the
        // common or success responses by default.
        const example = {
          key: statusCode,
          response: {
            statusCode,
            description: operation.responses[statusCode].description,
          },
        }
        responseExamples.push(example)
        return
      } else {
        // Example for this content type doesn't exist.
        // We could also check if there is a fully populated example
        // directly in the response schema examples properties.
        return
      }

      // There can be more than one example for a given content type. We need to
      // iterate over the keys of the examples to create individual
      // example objects
      Object.keys(examples).forEach((key) => {
        const example = {
          key,
          response: {
            statusCode,
            contentType,
            description: examples[key].summary || operation.responses[statusCode].description,
            example: examples[key].value,
            // TODO adding the schema quadruples the JSON file size. Changing
            // how we write the JSON file helps a lot, but we should revisit
            // adding the response schema to ensure we have a way to view the
            // prettified JSON before minimizing it.
            schema: operation.responses[statusCode].content[contentType].schema,
          },
        }
        responseExamples.push(example)
      })
    })
  })
  return responseExamples
}

/*
  Path parameters can have more than one example key. We need to create
  an example for each and then choose the most appropriate example when
  we merge requests with responses.
  Parameter examples are in the format:
  {
    [parameter key]: {
      [parameter name]: value
    }
  }
*/
export function getParameterExamples(operation) {
  if (!operation.parameters) {
    return {}
  }
  const parameters = operation.parameters.filter((param) => param.in === 'path')
  const parameterExamples = {}
  parameters.forEach((parameter) => {
    const examples = parameter.examples
    // If there are no examples, create an example from the uppercase parameter
    // name, so that it is more visible that the value is fake data
    // in the route path.
    if (!examples) {
      if (!parameterExamples.default) parameterExamples.default = {}
      parameterExamples.default[parameter.name] = parameter.name.toUpperCase()
    } else {
      Object.keys(examples).forEach((key) => {
        if (!parameterExamples[key]) parameterExamples[key] = {}
        parameterExamples[key][parameter.name] = examples[key].value
      })
    }
  })
  return parameterExamples
}
