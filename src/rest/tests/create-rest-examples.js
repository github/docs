import { describe, expect, test } from 'vitest'

import getCodeSamples, { mergeExamples } from '../scripts/utils/create-rest-examples.js'
import {
  operation,
  noContent,
  multipleContent,
  noResponse,
  oneToOne,
  matchingTags,
} from '../fixtures/create-rest-examples.js'

describe('rest example requests and responses', () => {
  // If there is a request with no request body parameters and all of
  // the responses have no content, then we can create a docs
  // example for just status codes below 300. All other status codes will
  // be listed in the status code table in the docs.
  test('check that examples with no content are created', async () => {
    const examples = mergeExamples(noContent.request, noContent.response)
    const mergedExamples = JSON.stringify(noContent.merged)
    expect(examples.length).toBe(2)
    expect(mergedExamples).toBe(JSON.stringify(examples))
  })

  test('check that multiple response examples with content are create for a single request example', async () => {
    const examples = mergeExamples(multipleContent.request, multipleContent.response)
    const mergedExamples = JSON.stringify(multipleContent.merged)
    expect(examples.length).toBe(2)
    expect(mergedExamples).toBe(JSON.stringify(examples))
  })

  test('check no response example results in no example', async () => {
    const examples = mergeExamples(noResponse.request, noResponse.response)
    const mergedExamples = JSON.stringify(noResponse.merged)
    expect(examples.length).toBe(0)
    expect(mergedExamples).toBe(JSON.stringify(examples))
  })

  test('check response and request examples are merged when only one of each', async () => {
    const examples = mergeExamples(oneToOne.request, oneToOne.response)
    const mergedExamples = JSON.stringify(oneToOne.merged)
    expect(examples.length).toBe(1)
    expect(mergedExamples).toBe(JSON.stringify(examples))
  })

  test('check keys map multiple request and response examples', async () => {
    const examples = mergeExamples(matchingTags.request, matchingTags.response)
    const mergedExamples = JSON.stringify(matchingTags.merged)
    expect(examples.length).toBe(2)
    expect(mergedExamples).toBe(JSON.stringify(examples))
  })

  test('check example number and status code appear', async () => {
    const mergedExamples = await getCodeSamples(operation)
    mergedExamples.forEach((example, index) => {
      expect(example.request.description).toBe(
        'Example ' + (index + 1) + ': Status Code ' + example.response.statusCode,
      )
    })
  })
})
