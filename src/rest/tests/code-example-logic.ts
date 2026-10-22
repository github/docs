import { describe, expect, test } from 'vitest'
import {
  shouldShowRequestContentType,
  shouldShowResponseContentType,
  generateExampleOptionTexts,
  toGhesApiUrls,
  type CodeExample,
} from '@/rest/lib/code-example-utils'

describe('Request Content Type Logic', () => {
  test('detects request content types differ correctly', () => {
    const codeExamples: CodeExample[] = [
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
    const codeExamples: CodeExample[] = [
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
    const markdownRawExamples: CodeExample[] = [
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
    const mixedExamples: CodeExample[] = [
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
    const sameContentTypeExamples: CodeExample[] = [
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

  test('omits the content type suffix for an example with no response body', () => {
    const noContentExamples: CodeExample[] = [
      {
        description: 'Example 1: Status Code 201',
        request: { contentType: 'application/json' },
        response: { contentType: 'application/json' },
      },
      {
        description: 'Example 2: Status Code 204',
        request: { contentType: 'application/json' },
        response: {},
      },
    ]

    const options = generateExampleOptionTexts(noContentExamples)

    expect(options).toEqual([
      'Example 1: Status Code 201 (application/json)',
      'Example 2: Status Code 204',
    ])
  })

  test('omits a missing request content type when request and response types differ', () => {
    const mixedExamples: CodeExample[] = [
      {
        description: 'JSON request',
        request: { contentType: 'application/json' },
        response: { contentType: 'application/json' },
      },
      {
        description: 'No request body',
        request: {},
        response: { contentType: 'text/html' },
      },
    ]

    const options = generateExampleOptionTexts(mixedExamples)

    expect(options).toEqual([
      'JSON request (application/json → application/json)',
      'No request body (text/html)',
    ])
  })

  test('handles single example correctly', () => {
    const singleExample: CodeExample[] = [
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

describe('GHES API URLs', () => {
  test('rewrites api.github.com URLs to HOSTNAME/api/v3', () => {
    const json = JSON.stringify({
      url: 'https://api.github.com/repos/octocat/Hello-World',
      hooks_url: 'https://api.github.com/repos/octocat/Hello-World/hooks',
      archive_url: 'http://api.github.com/repos/octocat/Hello-World/{archive_format}',
    })

    const result = toGhesApiUrls(json)

    expect(JSON.parse(result)).toEqual({
      url: 'https://HOSTNAME/api/v3/repos/octocat/Hello-World',
      hooks_url: 'https://HOSTNAME/api/v3/repos/octocat/Hello-World/hooks',
      archive_url: 'http://HOSTNAME/api/v3/repos/octocat/Hello-World/{archive_format}',
    })
    expect(result).not.toContain('://HOSTNAME/repos')
  })
})
