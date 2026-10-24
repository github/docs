import { describe, expect, test } from 'vitest'

import { getShellExample, getGHExample, getJSExample } from '../components/get-rest-code-samples'
import type { CodeSample, Operation } from '../components/types'
import {
  getCurlBodyArguments,
  needsExplicitContentTypeHeader,
} from '@/rest/lib/curl-body-arguments'
import type { VersionItem } from '@/frame/components/context/MainContext'

const mockVersions: Record<string, VersionItem> = {
  'free-pro-team@latest': {
    version: 'free-pro-team@latest',
    versionTitle: 'Free, Pro, & Team',
    apiVersions: ['2022-11-28'],
    latestApiVersion: '2022-11-28',
  },
  'enterprise-cloud@latest': {
    version: 'enterprise-cloud@latest',
    versionTitle: 'Enterprise Cloud',
    apiVersions: ['2022-11-28'],
    latestApiVersion: '2022-11-28',
  },
  'enterprise-cloud@2024-01-01': {
    version: 'enterprise-cloud@2024-01-01',
    versionTitle: 'Enterprise Cloud',
    apiVersions: ['2022-11-28'],
    latestApiVersion: '2022-11-28',
  },
  'enterprise-server@3.17': {
    version: 'enterprise-server@3.17',
    versionTitle: 'Enterprise Server 3.17',
    apiVersions: ['2022-11-28'],
    latestApiVersion: '2022-11-28',
  },
  'github-ae@latest': {
    version: 'github-ae@latest',
    versionTitle: 'GitHub AE',
    apiVersions: ['2022-11-28'],
    latestApiVersion: '2022-11-28',
  },
}

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

// Matches the revoke-credentials endpoint, which allows permissionless access.
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

const mockCodeSample = {
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
} as unknown as CodeSample

const mockCodeSampleWithoutBody = {
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
} as unknown as CodeSample

describe('REST code samples authentication header handling', () => {
  describe('version detection', () => {
    test('identifies free-pro-team as dotcom version', () => {
      const result = getShellExample(
        unauthenticatedOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions,
      )

      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('identifies enterprise-cloud as dotcom version', () => {
      const result = getShellExample(
        unauthenticatedOperation,
        mockCodeSample,
        'enterprise-cloud@latest',
        mockVersions,
      )

      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('identifies enterprise-cloud with version suffix as dotcom', () => {
      const result = getShellExample(
        unauthenticatedOperation,
        mockCodeSample,
        'enterprise-cloud@2024-01-01',
        mockVersions,
      )

      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('identifies enterprise-server as non-dotcom version', () => {
      const result = getShellExample(
        unauthenticatedOperation,
        mockCodeSample,
        'enterprise-server@3.17',
        mockVersions,
      )

      expect(result).toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('identifies other versions as non-dotcom', () => {
      const result = getShellExample(
        unauthenticatedOperation,
        mockCodeSample,
        'github-ae@latest',
        mockVersions,
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
        mockVersions,
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
        mockVersions,
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
        mockVersions,
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
        mockVersions,
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
        mockVersions,
      )

      expect(result).toContain('-u "<YOUR_CLIENT_ID>:<YOUR_CLIENT_SECRET>"')
      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('uses special auth for GHES manage operations', () => {
      const result = getShellExample(
        ghesManageOperation,
        mockCodeSample,
        'enterprise-server@3.17',
        mockVersions,
      )

      expect(result).toContain('-u "api_key:your-password"')
      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('handles GET requests without body parameters correctly', () => {
      const getOperation = { ...unauthenticatedOperation, verb: 'get' }
      const result = getShellExample(
        getOperation,
        mockCodeSampleWithoutBody,
        'free-pro-team@latest',
        mockVersions,
      )

      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
      expect(result).not.toContain("-d '")
      expect(result).toContain('curl -L')
    })

    test('sends text/plain bodies as raw text with a Content-Type header', () => {
      const markdownRawOperation = {
        ...standardOperation,
        title: 'Render a Markdown document in raw mode',
        requestPath: '/markdown/raw',
        category: 'markdown',
        subcategory: 'markdown',
      }
      const textPlainSample = {
        ...mockCodeSample,
        request: {
          ...mockCodeSample.request,
          contentType: 'text/plain',
          bodyParameters: { text: 'Hello **world**' },
        },
      } as unknown as CodeSample

      const result = getShellExample(
        markdownRawOperation,
        textPlainSample,
        'free-pro-team@latest',
        mockVersions,
      )

      expect(result).toContain('-H "Content-Type: text/plain"')
      expect(result).toContain("--data-binary 'Hello **world**'")
      expect(result).not.toContain("-d '{")
    })

    test('escapes single quotes in raw text/x-markdown bodies', () => {
      const markdownRawOperation = {
        ...standardOperation,
        requestPath: '/markdown/raw',
        category: 'markdown',
        subcategory: 'markdown',
      }
      const markdownSample = {
        ...mockCodeSample,
        request: {
          ...mockCodeSample.request,
          contentType: 'text/x-markdown',
          bodyParameters: "It's **bold**",
        },
      } as unknown as CodeSample

      const result = getShellExample(
        markdownRawOperation,
        markdownSample,
        'free-pro-team@latest',
        mockVersions,
      )

      expect(result).toContain('-H "Content-Type: text/x-markdown"')
      expect(result).toContain("--data-binary 'It'\\''s **bold**'")
      expect(result).not.toContain("-d '")
    })

    test('article API curl helpers treat text bodies the same way', () => {
      expect(needsExplicitContentTypeHeader('text/plain')).toBe(true)
      expect(needsExplicitContentTypeHeader('text/x-markdown')).toBe(true)
      expect(
        getCurlBodyArguments({ text: 'Hello **world**' }, 'text/x-markdown', { jsonIndent: 2 }),
      ).toEqual(["--data-binary 'Hello **world**'"])
    })

    test('uses --data-raw for text bodies that start with @ so curl does not read a file', () => {
      expect(getCurlBodyArguments({ text: '@octocat' }, 'text/plain')).toEqual([
        "--data-raw '@octocat'",
      ])
      expect(getCurlBodyArguments('Hi @octocat', 'text/plain')).toEqual([
        "--data-binary 'Hi @octocat'",
      ])
    })
  })

  describe('getGHExample', () => {
    test('generates GitHub CLI example for standard authenticated endpoints', () => {
      const result = getGHExample(
        standardOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions,
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
        mockVersions,
      )

      expect(result).toContain('gh api')
      expect(result).toContain('--method POST')
      expect(result).toContain('-H "Accept: application/vnd.github+json"')
      expect(result).toContain('-H "X-GitHub-Api-Version: 2022-11-28"')
      expect(result).toContain('/credentials/revoke')
    })

    test('returns undefined for operations with basic auth', () => {
      const result = getGHExample(
        basicAuthOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions,
      )

      expect(result).toBeUndefined()
    })

    test('generates example for GHES with hostname parameter', () => {
      const ghesOp = { ...standardOperation, serverUrl: 'https://github.example.com' }
      const result = getGHExample(ghesOp, mockCodeSample, 'enterprise-server@3.17', mockVersions)

      expect(result).toContain('--hostname HOSTNAME')
    })

    const uploadAssetOperation: Operation = {
      ...standardOperation,
      title: 'Upload a release asset',
      requestPath: '/repos/{owner}/{repo}/releases/{release_id}/assets',
      serverUrl: 'https://uploads.github.com',
      category: 'releases',
      subcategory: 'assets',
      parameters: [
        {
          name: 'name',
          in: 'query',
          required: true,
          description: '',
          schema: { type: 'string' },
        },
      ],
    }

    const uploadAssetCodeSample = {
      key: 'default',
      request: {
        contentType: 'application/octet-stream',
        acceptHeader: 'application/vnd.github.v3+json',
        bodyParameters: '@example.zip',
        parameters: { owner: 'OWNER', repo: 'REPO', release_id: 'RELEASE_ID' },
        description: 'Example',
      },
      response: {
        contentType: 'application/json',
        description: 'Response',
        example: { name: 'example.zip' },
        statusCode: '201',
      },
    } as unknown as CodeSample

    test('uploads a binary file body with --input to the full upload URL', () => {
      const result = getGHExample(
        uploadAssetOperation,
        uploadAssetCodeSample,
        'free-pro-team@latest',
        mockVersions,
      )

      expect(result).toContain(
        '"https://uploads.github.com/repos/OWNER/REPO/releases/RELEASE_ID/assets?name=example.zip"',
      )
      expect(result).toContain('-H "Content-Type: application/octet-stream"')
      expect(result).toContain('--input example.zip')
      expect(result).not.toContain('--hostname')
      expect(result).not.toContain("-f '@")
    })

    test('uses the GHES upload URL for binary file bodies', () => {
      const ghesUploadOperation = {
        ...uploadAssetOperation,
        serverUrl: 'https://HOSTNAME/api/uploads',
      }
      const result = getGHExample(
        ghesUploadOperation,
        uploadAssetCodeSample,
        'enterprise-server@3.17',
        mockVersions,
      )

      expect(result).toContain(
        '"https://HOSTNAME/api/uploads/repos/OWNER/REPO/releases/RELEASE_ID/assets?name=example.zip"',
      )
      expect(result).toContain('--input example.zip')
      expect(result).not.toContain('--hostname')
    })
  })

  describe('getJSExample', () => {
    test('includes authentication for standard endpoints', () => {
      const result = getJSExample(
        standardOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions,
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
        mockVersions,
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
        mockVersions,
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
        mockVersions,
      )

      expect(result).toContain("auth: 'YOUR-TOKEN'")
      expect(result).toContain("await octokit.request('POST /credentials/revoke'")
    })

    test('uses OAuth app authentication for operations with basicAuth flag', () => {
      const result = getJSExample(
        basicAuthOperation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions,
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
        mockVersions,
      )

      expect(result).toContain('const octokit = new Octokit()')
      expect(result).toContain("await octokit.request('POST /credentials/revo")
      expect(result).toContain("'X-GitHub-Api-Version': '2022-11-28'")
    })

    test('sends a top-level array body via the data option', () => {
      const arrayBodyCodeSample: CodeSample = {
        request: {
          contentType: 'application/json',
          description: 'Example',
          acceptHeader: 'application/vnd.github+json',
          bodyParameters: [{ id: 'MVS-2026-001', summary: 'Example summary' }],
          parameters: {},
        },
        response: {
          statusCode: '200',
          contentType: 'application/json',
          description: 'Response',
          example: {},
        },
      }

      const result = getJSExample(
        standardOperation,
        arrayBodyCodeSample,
        'free-pro-team@latest',
        mockVersions,
      )

      // The array must stay under data, not spread as numeric keys.
      expect(result).toContain('data: [')
      expect(result).toContain("id: 'MVS-2026-001'")
      expect(result).not.toMatch(/["']0["']\s*:/)
    })

    test('includes required query params for GET requests', () => {
      const searchOperation: Operation = {
        ...standardOperation,
        verb: 'get',
        title: 'Search code',
        requestPath: '/search/code',
        parameters: [
          {
            in: 'query',
            name: 'q',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
        ],
      }
      const searchCodeSample = {
        request: {
          description: 'Example',
          acceptHeader: 'application/vnd.github+json',
        },
        response: {
          statusCode: '200',
          contentType: 'application/json',
          description: 'Response',
          example: { total_count: 0, items: [] },
        },
      } as unknown as CodeSample

      const result = getJSExample(
        searchOperation,
        searchCodeSample,
        'free-pro-team@latest',
        mockVersions,
      )

      expect(result).toContain("await octokit.request('GET /search/code', {")
      expect(result).toContain("q: 'Q'")
    })

    test('fills required query params in the URL template for mutating requests', () => {
      const deleteCacheOperation: Operation = {
        ...standardOperation,
        verb: 'delete',
        title: 'Delete GitHub Actions caches for a repository (using a cache key)',
        requestPath: '/repos/{owner}/{repo}/actions/caches',
        parameters: [
          {
            in: 'path',
            name: 'owner',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
          {
            in: 'path',
            name: 'repo',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
          {
            in: 'query',
            name: 'key',
            description: '',
            required: true,
            schema: { type: 'string' },
          },
          {
            in: 'query',
            name: 'ref',
            description: '',
            required: false,
            schema: { type: 'string' },
          },
        ],
      }
      const deleteCacheCodeSample = {
        request: {
          description: 'Example',
          acceptHeader: 'application/vnd.github+json',
          parameters: { owner: 'OWNER', repo: 'REPO' },
        },
        response: {
          statusCode: '200',
          contentType: 'application/json',
          description: 'Response',
          example: {
            total_count: 1,
            actions_caches: [{ id: 505, ref: 'refs/heads/main', key: 'Linux-node-958aff96' }],
          },
        },
      } as unknown as CodeSample

      const jsResult = getJSExample(
        deleteCacheOperation,
        deleteCacheCodeSample,
        'free-pro-team@latest',
        mockVersions,
      )
      const shellResult = getShellExample(
        deleteCacheOperation,
        deleteCacheCodeSample,
        'free-pro-team@latest',
        mockVersions,
      )

      expect(jsResult).toContain(
        "await octokit.request('DELETE /repos/{owner}/{repo}/actions/caches{?key,ref}'",
      )
      expect(jsResult).toContain("owner: 'OWNER'")
      expect(jsResult).toContain("key: 'Linux-node-958aff96'")
      expect(jsResult).not.toContain('ref:')
      expect(shellResult).toContain('/repos/OWNER/REPO/actions/caches?key=Linux-node-958aff96')
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
        operationWithoutProgAccess as unknown as Operation,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions,
      )

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
        mockVersions,
      )

      expect(shellResult).toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('handles null code sample gracefully', () => {
      const nullSample = {
        ...mockCodeSample,
        request: {
          ...mockCodeSample.request,
          bodyParameters: null,
        },
      } as unknown as CodeSample

      const result = getShellExample(
        unauthenticatedOperation,
        nullSample,
        'free-pro-team@latest',
        mockVersions,
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
        mockVersions,
      )

      // Management console auth wins even for allowPermissionlessAccess.
      expect(result).toContain('-u "api_key:your-password"')
      expect(result).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })

    test('respects authentication precedence order: enterprise > basic auth > unauthenticated > standard', () => {
      // Enterprise management auth beats unauthenticated.
      const enterpriseUnauthOp = {
        ...unauthenticatedOperation,
        subcategory: 'manage-ghes',
      }

      const enterpriseResult = getShellExample(
        enterpriseUnauthOp,
        mockCodeSample,
        'free-pro-team@latest',
        mockVersions,
      )

      expect(enterpriseResult).toContain('-u "api_key:your-password"')
      expect(enterpriseResult).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')

      // Basic auth beats unauthenticated.
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
        mockVersions,
      )

      expect(basicAuthResult).toContain('-u "<YOUR_CLIENT_ID>:<YOUR_CLIENT_SECRET>"')
      expect(basicAuthResult).not.toContain('-H "Authorization: Bearer <YOUR-TOKEN>"')
    })
  })
})
