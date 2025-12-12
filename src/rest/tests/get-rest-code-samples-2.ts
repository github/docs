import { describe, expect, test } from 'vitest'

import { getShellExample, getGHExample, getJSExample } from '../components/get-rest-code-samples'
import type { Operation } from '../components/types'

// Mock version data similar to what's used in the actual app
const mockVersions = {
  'free-pro-team@latest': {
    apiVersions: ['2022-11-28'],
    latestApiVersion: '2022-11-28',
  },
  'enterprise-cloud@latest': {
    apiVersions: ['2022-11-28'],
    latestApiVersion: '2022-11-28',
  },
  'enterprise-cloud@2024-01-01': {
    apiVersions: ['2022-11-28'],
    latestApiVersion: '2022-11-28',
  },
  'enterprise-server@3.17': {
    apiVersions: ['2022-11-28'],
    latestApiVersion: '2022-11-28',
  },
  'github-ae@latest': {
    apiVersions: ['2022-11-28'],
    latestApiVersion: '2022-11-28',
  },
}

// Mock operation with standard authentication requirements
const standardOperation: Operation = {
  verb: 'post',
  title: 'Create an issue',
  requestPath: '/repos/{owner}/{repo}/issues',
  serverUrl: 'https://api.github.com',
  category: 'issues',
  subcategory: 'issues',
  descriptionHTML: '',
  previews: [],
  statusCodes: [],
  parameters: [],
  bodyParameters: [],
  codeExamples: [],
  progAccess: {
    userToServerRest: true,
    serverToServer: true,
    fineGrainedPat: true,
    permissions: [{ Issues: 'write' }],
    allowPermissionlessAccess: false,
  },
}

// Mock operation with allowPermissionlessAccess (like revoke credentials)
const unauthenticatedOperation: Operation = {
  verb: 'post',
  title: 'Revoke a list of credentials',
  requestPath: '/credentials/revoke',
  serverUrl: 'https://api.github.com',
  category: 'credentials',
  subcategory: 'revoke',
  descriptionHTML: '',
  previews: [],
  statusCodes: [],
  parameters: [],
  bodyParameters: [],
  codeExamples: [],
  progAccess: {
    userToServerRest: true,
    serverToServer: true,
    fineGrainedPat: true,
    permissions: [],
    allowPermissionlessAccess: true,
  },
}

// Mock operation with basic auth (like OAuth apps)
const basicAuthOperation: Operation = {
  verb: 'post',
  title: 'Create an OAuth app',
  requestPath: '/orgs/{org}/oauth/apps',
  serverUrl: 'https://api.github.com',
  category: 'apps',
  subcategory: 'oauth-applications',
  descriptionHTML: '',
  previews: [],
  statusCodes: [],
  parameters: [],
  bodyParameters: [],
  codeExamples: [],
  progAccess: {
    userToServerRest: true,
    serverToServer: false,
    fineGrainedPat: false,
    permissions: [],
    basicAuth: true,
  },
}

// Mock operation for GHES manage API
const ghesManageOperation: Operation = {
  verb: 'post',
  title: 'Set maintenance mode',
  requestPath: '/setup/api/maintenance',
  serverUrl: 'https://HOSTNAME',
  category: 'enterprise-admin',
  subcategory: 'manage-ghes',
  descriptionHTML: '',
  previews: [],
  statusCodes: [],
  parameters: [],
  bodyParameters: [],
  codeExamples: [],
  progAccess: {
    userToServerRest: true,
    serverToServer: false,
    fineGrainedPat: false,
    permissions: [],
  },
}

// Mock code sample
const mockCodeSample: any = {
  key: 'default',
  request: {
    contentType: 'application/json',
    acceptHeader: 'application/vnd.github+json',
    bodyParameters: {
      credentials: ['token1', 'token2'],
    },
    parameters: {},
    description: 'Example 1: Status Code 200',
  },
  response: {
    contentType: 'application/json',
    description: 'Response',
    example: { success: true },
    statusCode: '200',
  },
}

const mockCodeSampleWithoutBody: any = {
  key: 'default',
  request: {
    contentType: 'application/json',
    acceptHeader: 'application/vnd.github+json',
    bodyParameters: null,
    parameters: {},
    description: 'Example 1: Status Code 200',
  },
  response: {
    contentType: 'application/json',
    description: 'Response',
    example: { message: 'Success' },
    statusCode: '200',
  },
}

describe('REST code samples authentication header handling', () => {
  describe('version detection', () => {
    test('identifies free-pro-team as dotcom version', () => {
      const result = getShellExample(
        unauthenticatedOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('identifies enterprise-cloud as dotcom version', () => {
      const result = getShellExample(
        unauthenticatedOperation,
        mockCodeSample,
        'enterprise-cloud@latest',
        mockVersions as any,
      )

      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('identifies enterprise-cloud with version suffix as dotcom', () => {
      const result = getShellExample(
        unauthenticatedOperation,
        mockCodeSample,
        'enterprise-cloud@2024-01-01',
        mockVersions as any,
      )

      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('identifies enterprise-server as non-dotcom version', () => {
      const result = getShellExample(
        unauthenticatedOperation,
        mockCodeSample,
        'enterprise-server@3.17',
        mockVersions as any,
      )

      expect(result).toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('identifies other versions as non-dotcom', () => {
      const result = getShellExample(
        unauthenticatedOperation,
        mockCodeSample,
        'github-ae@latest',
        mockVersions as any,
      )

      expect(result).toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })
  })

  describe('getShellExample', () => {
    test('includes Authorization header for standard authenticated endpoints', () => {
      const result = getShellExample(
        standardOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      expect(result).toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
      expect(result).toContain('-H "Accept: application/vnd.github+json"')
      expect(result).toContain('-H "X-GitHub-Api-Version: 2022-11-28"')
    })

    test('omits Authorization header for unauthenticated endpoints on dotcom (fpt)', () => {
      const result = getShellExample(
        unauthenticatedOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
      expect(result).toContain('-H "Accept: application/vnd.github+json"')
      expect(result).toContain('-H "X-GitHub-Api-Version: 2022-11-28"')
      expect(result).toContain('"credentials":["token1","token2"]')
    })

    test('omits Authorization header for unauthenticated endpoints on GHEC', () => {
      const result = getShellExample(
        unauthenticatedOperation,
        mockCodeSample,
        'enterprise-cloud@latest',
        mockVersions as any,
      )

      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
      expect(result).toContain('-H "Accept: application/vnd.github+json"')
      expect(result).toContain('-H "X-GitHub-Api-Version: 2022-11-28"')
    })

    test('includes Authorization header for unauthenticated endpoints on GHES', () => {
      const result = getShellExample(
        unauthenticatedOperation,
        mockCodeSample,
        'enterprise-server@3.17',
        mockVersions as any,
      )

      expect(result).toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
      expect(result).toContain('-H "Accept: application/vnd.github+json"')
      expect(result).toContain('-H "X-GitHub-Api-Version: 2022-11-28"')
    })

    test('uses basic auth for operations with basicAuth flag', () => {
      const result = getShellExample(
        basicAuthOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      expect(result).toContain('-u "<YOUR_CLIENT_ID>:<YOUR_CLIENT_SECRET>"')
      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('uses special auth for GHES manage operations', () => {
      const result = getShellExample(
        ghesManageOperation,
        mockCodeSample,
        'enterprise-server@3.17',
        mockVersions as any,
      )

      expect(result).toContain('-u "api_key:your-password"')
      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('handles GET requests without body parameters correctly', () => {
      const getOperation = { ...unauthenticatedOperation, verb: 'get' }
      const result = getShellExample(
        getOperation as any,
        mockCodeSampleWithoutBody,
        'free-pro-team@latest',
        mockVersions as any,
      )

      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
      expect(result).not.toContain("-d '")
      expect(result).toContain('curl -L')
    })
  })

  describe('getGHExample', () => {
    test('generates GitHub CLI example for standard authenticated endpoints', () => {
      const result = getGHExample(
        standardOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      expect(result).toContain('gh api')
      expect(result).toContain('--method POST')
      expect(result).toContain('-H "Accept: application/vnd.github+json"')
      expect(result).toContain('-H "X-GitHub-Api-Version: 2022-11-28"')
      expect(result).toContain('/repos///issues')
    })

    test('generates GitHub CLI example for unauthenticated endpoints on dotcom', () => {
      const result = getGHExample(
        unauthenticatedOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      expect(result).toContain('gh api')
      expect(result).toContain('--method POST')
      expect(result).toContain('-H "Accept: application/vnd.github+json"')
      expect(result).toContain('-H "X-GitHub-Api-Version: 2022-11-28"')
      expect(result).toContain('/credentials/revoke')
      // GitHub CLI handles authentication automatically, so we don't test for auth headers
    })

    test('returns undefined for operations with basic auth', () => {
      const result = getGHExample(
        basicAuthOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      expect(result).toBeUndefined()
    })

    test('generates example for GHES with hostname parameter', () => {
      const ghesOp = { ...standardOperation, serverUrl: 'https://github.example.com' }
      const result = getGHExample(
        ghesOp,
        mockCodeSample,
        'enterprise-server@3.17',
        mockVersions as any,
      )

      expect(result).toContain('--hostname HOSTNAME')
    })
  })

  describe('getJSExample', () => {
    test('includes authentication for standard endpoints', () => {
      const result = getJSExample(
        standardOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      expect(result).toContain("auth: 'YOUR-TOKEN'")
      expect(result).toContain("await octokit.request('POST /repos/{owner}/{repo}/issues'")
      expect(result).toContain("'X-GitHub-Api-Version': '2022-11-28'")
    })

    test('omits authentication for unauthenticated endpoints on dotcom (fpt)', () => {
      const result = getJSExample(
        unauthenticatedOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      expect(result).not.toContain('const octokit = new Octokit({\n  "auth": "YOUR-TOKEN"\n})')
      expect(result).toContain('const octokit = new Octokit()')
      expect(result).toContain("await octokit.request('POST /credentials/revoke'")
      expect(result).toContain("credentials: [\n    'token1',\n    'token2'\n  ]")
    })

    test('omits authentication for unauthenticated endpoints on GHEC', () => {
      const result = getJSExample(
        unauthenticatedOperation,
        mockCodeSample,
        'enterprise-cloud@latest',
        mockVersions as any,
      )

      expect(result).not.toContain('const octokit = new Octokit({\n  "auth": "YOUR-TOKEN"\n})')
      expect(result).toContain('const octokit = new Octokit()')
      expect(result).toContain("await octokit.request('POST /credentials/revoke'")
    })

    test('includes authentication for unauthenticated endpoints on GHES', () => {
      const result = getJSExample(
        unauthenticatedOperation,
        mockCodeSample,
        'enterprise-server@3.17',
        mockVersions as any,
      )

      expect(result).toContain("auth: 'YOUR-TOKEN'")
      expect(result).toContain("await octokit.request('POST /credentials/revoke'")
    })

    test('uses OAuth app authentication for operations with basicAuth flag', () => {
      const result = getJSExample(
        basicAuthOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      expect(result).toContain('import { createOAuthAppAuth } from "@octokit/auth-oauth-app"')
      expect(result).toContain('authStrategy: createOAuthAppAuth')
      expect(result).toContain("clientId: '<YOUR_CLIENT ID>'")
      expect(result).toContain("clientSecret: '<YOUR_CLIENT SECRET>'")
    })

    test('handles operations without body parameters', () => {
      const result = getJSExample(
        unauthenticatedOperation,
        mockCodeSampleWithoutBody,
        'free-pro-team@latest',
        mockVersions as any,
      )

      expect(result).toContain('const octokit = new Octokit()')
      expect(result).toContain("await octokit.request('POST /credentials/revo")
      expect(result).toContain("'X-GitHub-Api-Version': '2022-11-28'")
    })
  })

  describe('edge cases and special scenarios', () => {
    test('handles undefined progAccess gracefully', () => {
      const operationWithoutProgAccess = {
        ...standardOperation,
        parameters: [],
        progAccess: undefined,
      }

      const shellResult = getShellExample(
        operationWithoutProgAccess as any,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      // Should default to including authentication when progAccess is undefined
      expect(shellResult).toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('handles missing allowPermissionlessAccess property', () => {
      const operationWithoutProperty = {
        ...standardOperation,
        parameters: [],
        progAccess: {
          userToServerRest: true,
          serverToServer: true,
          fineGrainedPat: true,
          permissions: [],
          // allowPermissionlessAccess is missing
        },
      }

      const shellResult = getShellExample(
        operationWithoutProperty,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      // Should default to including authentication when property is missing
      expect(shellResult).toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('handles null code sample gracefully', () => {
      const nullSample = {
        ...mockCodeSample,
        request: {
          ...mockCodeSample.request,
          bodyParameters: null,
        },
      }

      const result = getShellExample(
        unauthenticatedOperation,
        nullSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
      expect(result).toContain('curl -L')
    })

    test('preserves other authentication methods when omitting Bearer token', () => {
      const mixedAuthOperation = {
        ...unauthenticatedOperation,
        subcategory: 'management-console',
      }

      const result = getShellExample(
        mixedAuthOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      // Should still use management console auth even for allowPermissionlessAccess operations
      expect(result).toContain('-u "api_key:your-password"')
      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('respects authentication precedence order: enterprise > basic auth > unauthenticated > standard', () => {
      // Test enterprise management auth takes precedence over unauthenticated
      const enterpriseUnauthOp = {
        ...unauthenticatedOperation,
        subcategory: 'manage-ghes',
      }

      const enterpriseResult = getShellExample(
        enterpriseUnauthOp,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      expect(enterpriseResult).toContain('-u "api_key:your-password"')
      expect(enterpriseResult).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')

      // Test basic auth takes precedence over unauthenticated
      const basicAuthUnauthOp = {
        ...unauthenticatedOperation,
        progAccess: {
          ...unauthenticatedOperation.progAccess,
          basicAuth: true,
        },
      }

      const basicAuthResult = getShellExample(
        basicAuthUnauthOp,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions as any,
      )

      expect(basicAuthResult).toContain('-u "<YOUR_CLIENT_ID>:<YOUR_CLIENT_SECRET>"')
      expect(basicAuthResult).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })
  })
})
