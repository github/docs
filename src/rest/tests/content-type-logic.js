import { describe, expect, test } from 'vitest'

describe('Request Content Type Logic', () => {
  // Helper function to extract the logic from RestCodeSamples
  function shouldShowRequestContentType(codeExamples) {
    const requestContentTypesDiffer =
      codeExamples.length > 1 &&
      !codeExamples.every(
        (example) => example.request?.contentType === codeExamples[0].request?.contentType,
      )
    return requestContentTypesDiffer
  }

  function shouldShowResponseContentType(codeExamples) {
    const responseContentTypesDiffer =
      codeExamples.length > 1 &&
      !codeExamples.every(
        (example) => example.response?.contentType === codeExamples[0].response?.contentType,
      )
    return responseContentTypesDiffer
  }

  function generateExampleOptions(codeExamples) {
    const requestContentTypesDiffer = shouldShowRequestContentType(codeExamples)
    const responseContentTypesDiffer = shouldShowResponseContentType(codeExamples)
    const showExampleOptionMediaType = responseContentTypesDiffer || requestContentTypesDiffer

    return codeExamples.map((example, index) => {
      const requestContentType = example.request?.contentType
      const responseContentType = example.response?.contentType

      let text = example.request?.description || `Example ${index + 1}`

      if (showExampleOptionMediaType) {
        if (requestContentTypesDiffer && responseContentTypesDiffer) {
          // Show both request and response content types
          text = `${text} (${requestContentType} → ${responseContentType})`
        } else if (requestContentTypesDiffer) {
          // Show only request content type
          text = `${text} (${requestContentType})`
        } else if (responseContentTypesDiffer) {
          // Show only response content type
          text = `${text} (${responseContentType})`
        }
      }

      return text
    })
  }

  test('detects request content types differ correctly', () => {
    const codeExamples = [
      {
        request: { contentType: 'text/plain', description: 'Example' },
        response: { contentType: 'text/html' },
      },
      {
        request: { contentType: 'text/x-markdown', description: 'Rendering markdown' },
        response: { contentType: 'text/html' },
      },
    ]

    expect(shouldShowRequestContentType(codeExamples)).toBe(true)
    expect(shouldShowResponseContentType(codeExamples)).toBe(false)
  })

  test('detects response content types differ correctly', () => {
    const codeExamples = [
      {
        request: { contentType: 'application/json', description: 'JSON example' },
        response: { contentType: 'application/json' },
      },
      {
        request: { contentType: 'application/json', description: 'Another JSON example' },
        response: { contentType: 'text/html' },
      },
    ]

    expect(shouldShowRequestContentType(codeExamples)).toBe(false)
    expect(shouldShowResponseContentType(codeExamples)).toBe(true)
  })

  test('generates correct options for markdown/raw scenario', () => {
    const markdownRawExamples = [
      {
        request: {
          contentType: 'text/plain',
          description: 'Example',
        },
        response: {
          contentType: 'text/html',
        },
      },
      {
        request: {
          contentType: 'text/x-markdown',
          description: 'Rendering markdown',
        },
        response: {
          contentType: 'text/html',
        },
      },
    ]

    const options = generateExampleOptions(markdownRawExamples)

    expect(options).toEqual(['Example (text/plain)', 'Rendering markdown (text/x-markdown)'])
  })

  test('generates correct options when both request and response differ', () => {
    const mixedExamples = [
      {
        request: {
          contentType: 'application/json',
          description: 'JSON request',
        },
        response: {
          contentType: 'application/json',
        },
      },
      {
        request: {
          contentType: 'text/plain',
          description: 'Plain text request',
        },
        response: {
          contentType: 'text/html',
        },
      },
    ]

    const options = generateExampleOptions(mixedExamples)

    expect(options).toEqual([
      'JSON request (application/json → application/json)',
      'Plain text request (text/plain → text/html)',
    ])
  })

  test('does not show content types when they are all the same', () => {
    const sameContentTypeExamples = [
      {
        request: {
          contentType: 'application/json',
          description: 'First example',
        },
        response: {
          contentType: 'application/json',
        },
      },
      {
        request: {
          contentType: 'application/json',
          description: 'Second example',
        },
        response: {
          contentType: 'application/json',
        },
      },
    ]

    const options = generateExampleOptions(sameContentTypeExamples)

    expect(options).toEqual(['First example', 'Second example'])
  })

  test('handles single example correctly', () => {
    const singleExample = [
      {
        request: {
          contentType: 'application/json',
          description: 'Only example',
        },
        response: {
          contentType: 'application/json',
        },
      },
    ]

    expect(shouldShowRequestContentType(singleExample)).toBe(false)
    expect(shouldShowResponseContentType(singleExample)).toBe(false)

    const options = generateExampleOptions(singleExample)
    expect(options).toEqual(['Only example'])
  })
})
