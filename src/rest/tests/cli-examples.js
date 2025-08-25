import { describe, expect, test } from 'vitest'

import { getGHExample, getShellExample } from '../components/get-rest-code-samples'

describe('CLI examples generation', () => {
  const mockOperation = {
    verb: 'patch',
    requestPath: '/repos/{owner}/{repo}/code-scanning/alerts/{alert_number}',
    serverUrl: 'https://api.github.com',
    subcategory: 'code-scanning',
    parameters: [],
  }

  const mockVersions = {
    'free-pro-team@latest': {
      apiVersions: ['2022-11-28'],
      latestApiVersion: '2022-11-28',
    },
  }

  test('GitHub CLI example properly escapes contractions in string values', () => {
    const codeSample = {
      request: {
        parameters: {
          owner: 'OWNER',
          repo: 'REPO',
          alert_number: 'ALERT_NUMBER',
        },
        bodyParameters: {
          state: 'dismissed',
          dismissed_reason: 'false positive',
          dismissed_comment:
            "This alert is not actually correct, because there's a sanitizer included in the library.",
        },
      },
    }

    const result = getGHExample(mockOperation, codeSample, 'free-pro-team@latest', mockVersions)

    // Check that the contraction is properly escaped
    expect(result).toContain("there'\\''s")
    // Ensure the command is properly formatted
    expect(result).toContain('gh api')
    expect(result).toContain('--method PATCH')
    expect(result).toContain("-f 'dismissed_comment=")
  })

  test('cURL example properly escapes contractions in JSON body', () => {
    const codeSample = {
      request: {
        parameters: {
          owner: 'OWNER',
          repo: 'REPO',
          alert_number: 'ALERT_NUMBER',
        },
        bodyParameters: {
          state: 'dismissed',
          dismissed_reason: 'false positive',
          dismissed_comment:
            "This alert is not actually correct, because there's a sanitizer included in the library.",
        },
        contentType: 'application/json',
      },
    }

    const result = getShellExample(mockOperation, codeSample, 'free-pro-team@latest', mockVersions)

    // Check that the JSON string is properly escaped
    expect(result).toContain("there'\\''s")
    expect(result).toContain('curl -L')
    expect(result).toContain('-X PATCH')
  })

  test('GitHub CLI example handles multiple contractions', () => {
    const codeSample = {
      request: {
        parameters: {
          owner: 'OWNER',
          repo: 'REPO',
        },
        bodyParameters: {
          title: "Here's what's wrong with the code",
          body: "It's not working because there's an issue and we can't fix it",
        },
      },
    }

    const mockSimpleOperation = {
      verb: 'post',
      requestPath: '/repos/{owner}/{repo}/issues',
      serverUrl: 'https://api.github.com',
      subcategory: 'issues',
      parameters: [],
    }

    const result = getGHExample(
      mockSimpleOperation,
      codeSample,
      'free-pro-team@latest',
      mockVersions,
    )

    // Check that all contractions are properly escaped
    expect(result).toContain("Here'\\''s what'\\''s")
    expect(result).toContain("It'\\''s not working")
    expect(result).toContain("there'\\''s an issue")
    expect(result).toContain("can'\\''t fix")
  })

  test('GitHub CLI example handles values without contractions normally', () => {
    const codeSample = {
      request: {
        parameters: {
          owner: 'OWNER',
          repo: 'REPO',
        },
        bodyParameters: {
          state: 'dismissed',
          dismissed_reason: 'false positive',
          dismissed_comment:
            'This alert is not actually correct because there is a sanitizer included in the library.',
        },
      },
    }

    const result = getGHExample(mockOperation, codeSample, 'free-pro-team@latest', mockVersions)

    // Check that normal text is not modified
    expect(result).toContain('there is a sanitizer')
    expect(result).not.toContain("'\\''")
    expect(result).toContain('gh api')
  })

  test('cURL example with form data properly escapes contractions', () => {
    const codeSample = {
      request: {
        parameters: {
          owner: 'OWNER',
          repo: 'REPO',
        },
        bodyParameters: {
          comment: "Here's my feedback on this PR",
        },
        contentType: 'application/x-www-form-urlencoded',
      },
    }

    const mockSimpleOperation = {
      verb: 'post',
      requestPath: '/repos/{owner}/{repo}/pulls/{pull_number}/reviews',
      serverUrl: 'https://api.github.com',
      subcategory: 'pulls',
      parameters: [],
    }

    const result = getShellExample(
      mockSimpleOperation,
      codeSample,
      'free-pro-team@latest',
      mockVersions,
    )

    // Check that form data values are properly escaped
    expect(result).toContain("Here'\\''s my feedback")
    expect(result).toContain('--data-urlencode')
  })
})
