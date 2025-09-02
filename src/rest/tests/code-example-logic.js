import { describe, expect, test } from 'vitest'
import {
  shouldShowRequestContentType,
  shouldShowResponseContentType,
  generateExampleOptionTexts,
} from '@/rest/lib/code-example-utils'

describe('Request Content Type Logic', () => {
  test('detects request content types differ correctly', () => {
    const codeExamples = [
      {
        description: 'Example',
        request: { contentType: 'text/plain' },
        response: { contentType: 'text/html' },
      },
      {
        description: 'Rendering markdown',
        request: { contentType: 'text/x-markdown' },
        response: { contentType: 'text/html' },
      },
    ]

    expect(shouldShowRequestContentType(codeExamples)).toBe(true)
    expect(shouldShowResponseContentType(codeExamples)).toBe(false)
  })

  test('detects response content types differ correctly', () => {
    const codeExamples = [
      {
        description: 'JSON example',
        request: { contentType: 'application/json' },
        response: { contentType: 'application/json' },
      },
      {
        description: 'Another JSON example',
        request: { contentType: 'application/json' },
        response: { contentType: 'text/html' },
      },
    ]

    expect(shouldShowRequestContentType(codeExamples)).toBe(false)
    expect(shouldShowResponseContentType(codeExamples)).toBe(true)
  })

  test('generates correct options for markdown/raw scenario', () => {
    const markdownRawExamples = [
      {
        description: 'Example',
        request: {
          contentType: 'text/plain',
        },
        response: {
          contentType: 'text/html',
        },
      },
      {
        description: 'Rendering markdown',
        request: {
          contentType: 'text/x-markdown',
        },
        response: {
          contentType: 'text/html',
        },
      },
    ]

    const options = generateExampleOptionTexts(markdownRawExamples)

    expect(options).toEqual(['Example (text/plain)', 'Rendering markdown (text/x-markdown)'])
  })

  test('generates correct options when both request and response differ', () => {
    const mixedExamples = [
      {
        description: 'JSON request',
        request: {
          contentType: 'application/json',
        },
        response: {
          contentType: 'application/json',
        },
      },
      {
        description: 'Plain text request',
        request: {
          contentType: 'text/plain',
        },
        response: {
          contentType: 'text/html',
        },
      },
    ]

    const options = generateExampleOptionTexts(mixedExamples)

    expect(options).toEqual([
      'JSON request (application/json → application/json)',
      'Plain text request (text/plain → text/html)',
    ])
  })

  test('does not show content types when they are all the same', () => {
    const sameContentTypeExamples = [
      {
        description: 'First example',
        request: {
          contentType: 'application/json',
        },
        response: {
          contentType: 'application/json',
        },
      },
      {
        description: 'Second example',
        request: {
          contentType: 'application/json',
        },
        response: {
          contentType: 'application/json',
        },
      },
    ]

    const options = generateExampleOptionTexts(sameContentTypeExamples)

    expect(options).toEqual(['First example', 'Second example'])
  })

  test('handles single example correctly', () => {
    const singleExample = [
      {
        description: 'Only example',
        request: {
          contentType: 'application/json',
        },
        response: {
          contentType: 'application/json',
        },
      },
    ]

    expect(shouldShowRequestContentType(singleExample)).toBe(false)
    expect(shouldShowResponseContentType(singleExample)).toBe(false)

    const options = generateExampleOptionTexts(singleExample)
    expect(options).toEqual(['Only example'])
  })
})
