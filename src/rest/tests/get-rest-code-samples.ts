import { describe, expect, test } from 'vitest'
import { getGHExample } from '../components/get-rest-code-samples'
import type { Operation, CodeSample } from '../components/types'
import { type VersionItem } from '@/frame/components/context/MainContext'

describe('getGHExample - GitHub CLI code generation', () => {
  test('handles nested conditions object correctly', () => {
    const operation: Operation = {
      serverUrl: 'https://api.github.com',
      verb: 'post',
      requestPath: '/orgs/{org}/rulesets',
      title: 'Create an organization repository ruleset',
      descriptionHTML: '<p>Creates a repository ruleset.</p>',
      previews: [],
      statusCodes: [],
      bodyParameters: [
        {
          name: 'bypass_actors',
          description: '',
          type: 'array of objects',
          childParamsGroups: [{ name: 'actor_id', description: '', type: 'integer or null' }],
        },
        {
          name: 'conditions',
          description: '',
          type: 'object',
          childParamsGroups: [
            {
              name: 'repository_name',
              description: '',
              type: 'object',
              childParamsGroups: [{ name: 'protected', description: '', type: 'boolean' }],
            },
          ],
        },
      ],
      category: 'orgs',
      subcategory: 'rules',
      parameters: [
        {
          name: 'org',
          in: 'path',
          required: true,
          description: 'The organization name',
          schema: { type: 'string' },
        },
      ],
      codeExamples: [],
      progAccess: {
        permissions: [],
        userToServerRest: true,
        serverToServer: true,
        fineGrainedPat: true,
      },
    }

    const codeSample: CodeSample = {
      request: {
        contentType: 'application/json',
        description: 'Example',
        acceptHeader: 'application/vnd.github+json',
        bodyParameters: {
          name: 'super cool ruleset',
          target: 'branch',
          enforcement: 'active',
          bypass_actors: [
            {
              actor_id: '234',
              actor_type: 'Team',
              bypass_mode: 'always',
            },
          ],
          conditions: {
            ref_name: {
              include: ['refs/heads/main', 'refs/heads/master'],
              exclude: ['refs/heads/dev*'],
            },
            repository_name: {
              include: ['important_repository', 'another_important_repository'],
              exclude: ['unimportant_repository'],
              protected: 'true',
            },
          },
          rules: [
            {
              type: 'commit_author_email_pattern',
              parameters: {
                operator: 'contains',
                pattern: '@github.com$',
              },
            },
          ],
        } as unknown as CodeSample['request']['bodyParameters'],
        parameters: {
          org: 'ORG',
        },
      },
      response: {
        statusCode: '201',
        contentType: 'application/json',
        description: 'Response',
        example: {},
      },
    }

    const currentVersion = 'fpt'
    const allVersions: Record<string, VersionItem> = {
      fpt: {
        version: 'fpt',
        versionTitle: 'Free, Pro, & Team',
        apiVersions: ['2022-11-28'],
        latestApiVersion: '2022-11-28',
      },
    }

    const result = getGHExample(operation, codeSample, currentVersion, allVersions)

    expect(result).toContain("--input - <<< '")
    expect(result).toContain('"bypass_actors": [')
    expect(result).toContain('"actor_id": 234')
    expect(result).toContain('"protected": true')
    expect(result).toContain('"conditions": {')
    expect(result).toContain('"ref_name": {')
    expect(result).toContain('"rules": [')
    expect(result).toContain('"type": "commit_author_email_pattern"')

    expect(result).toContain('"name": "super cool ruleset"')
    expect(result).toContain('"target": "branch"')
    expect(result).toContain('"enforcement": "active"')
  })

  test('handles simple nested objects correctly', () => {
    const operation: Operation = {
      serverUrl: 'https://api.github.com',
      verb: 'post',
      requestPath: '/test',
      title: 'Test operation',
      descriptionHTML: '<p>Test operation</p>',
      previews: [],
      statusCodes: [],
      bodyParameters: [],
      category: 'test',
      subcategory: 'test',
      parameters: [],
      codeExamples: [],
      progAccess: {
        permissions: [],
        userToServerRest: true,
        serverToServer: true,
        fineGrainedPat: true,
      },
    }

    const codeSample: CodeSample = {
      request: {
        contentType: 'application/json',
        description: 'Example',
        acceptHeader: 'application/vnd.github+json',
        bodyParameters: {
          config: {
            enabled: 'true',
            settings: {
              timeout: '30',
            },
          },
        } as unknown as CodeSample['request']['bodyParameters'],
        parameters: {},
      },
      response: {
        statusCode: '200',
        contentType: 'application/json',
        description: 'Response',
        example: {},
      },
    }

    const currentVersion = 'fpt'
    const allVersions: Record<string, VersionItem> = {
      fpt: {
        version: 'fpt',
        versionTitle: 'Free, Pro, & Team',
        apiVersions: ['2022-11-28'],
        latestApiVersion: '2022-11-28',
      },
    }

    const result = getGHExample(operation, codeSample, currentVersion, allVersions)

    expect(result).toContain('config[enabled]=true')
    expect(result).toContain('config[settings][timeout]=30')
  })

  test('handles arrays of simple values correctly', () => {
    const operation: Operation = {
      serverUrl: 'https://api.github.com',
      verb: 'post',
      requestPath: '/test',
      title: 'Test operation',
      descriptionHTML: '<p>Test operation</p>',
      previews: [],
      statusCodes: [],
      bodyParameters: [],
      category: 'test',
      subcategory: 'test',
      parameters: [],
      codeExamples: [],
      progAccess: {
        permissions: [],
        userToServerRest: true,
        serverToServer: true,
        fineGrainedPat: true,
      },
    }

    const codeSample: CodeSample = {
      request: {
        contentType: 'application/json',
        description: 'Example',
        acceptHeader: 'application/vnd.github+json',
        bodyParameters: {
          tags: ['tag1', 'tag2', 'tag3'],
        },
        parameters: {},
      },
      response: {
        statusCode: '200',
        contentType: 'application/json',
        description: 'Response',
        example: {},
      },
    }

    const currentVersion = 'fpt'
    const allVersions: Record<string, VersionItem> = {
      fpt: {
        version: 'fpt',
        versionTitle: 'Free, Pro, & Team',
        apiVersions: ['2022-11-28'],
        latestApiVersion: '2022-11-28',
      },
    }

    const result = getGHExample(operation, codeSample, currentVersion, allVersions)

    expect(result).toContain('--input - <<<')
    expect(result).toContain('"tags": [')
    expect(result).toContain('"tag1"')
    expect(result).toContain('"tag2"')
    expect(result).toContain('"tag3"')
  })

  test('handles a top-level array body via --input', () => {
    const operation: Operation = {
      serverUrl: 'https://api.github.com',
      verb: 'post',
      requestPath: '/enterprises/{enterprise}/innersource-vulnerabilities/sync',
      title: 'Sync InnerSource vulnerabilities',
      descriptionHTML: '<p>Sync vulnerabilities</p>',
      previews: [],
      statusCodes: [],
      bodyParameters: [],
      category: 'enterprise-admin',
      subcategory: 'security-advisories',
      parameters: [
        {
          name: 'enterprise',
          in: 'path',
          required: true,
          description: 'The enterprise slug',
          schema: { type: 'string' },
        },
      ],
      codeExamples: [],
      progAccess: {
        permissions: [],
        userToServerRest: true,
        serverToServer: true,
        fineGrainedPat: true,
      },
    }

    const codeSample: CodeSample = {
      request: {
        contentType: 'application/json',
        description: 'Example',
        acceptHeader: 'application/vnd.github+json',
        bodyParameters: [
          {
            id: 'MVS-2026-001',
            summary: 'Example vulnerability summary',
            aliases: ['GHSA-xxxx-xxxx-xxxx'],
          },
        ],
        parameters: { enterprise: 'octo-enterprise' },
      },
      response: {
        statusCode: '200',
        contentType: 'application/json',
        description: 'Response',
        example: {},
      },
    }

    const currentVersion = 'enterprise-cloud@latest'
    const allVersions: Record<string, VersionItem> = {
      'enterprise-cloud@latest': {
        version: 'enterprise-cloud@latest',
        versionTitle: 'Enterprise Cloud',
        apiVersions: ['2022-11-28'],
        latestApiVersion: '2022-11-28',
      },
    }

    const result = getGHExample(operation, codeSample, currentVersion, allVersions)

    expect(result).toContain('--input - <<<')
    expect(result).toContain('"MVS-2026-001"')
    expect(result).toContain('"GHSA-xxxx-xxxx-xxxx"')
  })

  test('keeps digit-only strings when the schema type is string', () => {
    const operation: Operation = {
      serverUrl: 'https://api.github.com',
      verb: 'post',
      requestPath: '/repos/{owner}/{repo}/git/trees',
      title: 'Create a tree',
      descriptionHTML: '<p>Create a tree</p>',
      previews: [],
      statusCodes: [],
      bodyParameters: [
        {
          name: 'tree',
          description: '',
          type: 'array of objects',
          childParamsGroups: [
            { name: 'path', description: '', type: 'string' },
            { name: 'mode', description: '', type: 'string' },
          ],
        },
      ],
      category: 'git',
      subcategory: 'trees',
      parameters: [],
      codeExamples: [],
      progAccess: {
        permissions: [],
        userToServerRest: true,
        serverToServer: true,
        fineGrainedPat: true,
      },
    }

    const codeSample: CodeSample = {
      request: {
        contentType: 'application/json',
        description: 'Example',
        acceptHeader: 'application/vnd.github+json',
        bodyParameters: {
          tree: [{ path: 'file.rb', mode: '100644' }],
        },
        parameters: { owner: 'OWNER', repo: 'REPO' },
      },
      response: {
        statusCode: '201',
        contentType: 'application/json',
        description: 'Response',
        example: {},
      },
    }

    const currentVersion = 'fpt'
    const allVersions: Record<string, VersionItem> = {
      fpt: {
        version: 'fpt',
        versionTitle: 'Free, Pro, & Team',
        apiVersions: ['2022-11-28'],
        latestApiVersion: '2022-11-28',
      },
    }

    const result = getGHExample(operation, codeSample, currentVersion, allVersions)

    expect(result).toContain('--input - <<<')
    expect(result).toContain('"mode": "100644"')
  })

  test('converts digit-only strings to numbers only for integer schema types', () => {
    const operation: Operation = {
      serverUrl: 'https://api.github.com',
      verb: 'put',
      requestPath: '/orgs/{org}/actions/secrets/{secret_name}',
      title: 'Create or update an organization secret',
      descriptionHTML: '<p>Create or update an organization secret</p>',
      previews: [],
      statusCodes: [],
      bodyParameters: [
        { name: 'key_id', description: '', type: 'string' },
        { name: 'selected_repository_ids', description: '', type: 'array of integers' },
      ],
      category: 'actions',
      subcategory: 'secrets',
      parameters: [],
      codeExamples: [],
      progAccess: {
        permissions: [],
        userToServerRest: true,
        serverToServer: true,
        fineGrainedPat: true,
      },
    }

    const codeSample: CodeSample = {
      request: {
        contentType: 'application/json',
        description: 'Example',
        acceptHeader: 'application/vnd.github+json',
        bodyParameters: {
          key_id: '012345678912345678',
          selected_repository_ids: ['1296269', '1296280'],
        },
        parameters: { org: 'ORG', secret_name: 'SECRET_NAME' },
      },
      response: {
        statusCode: '201',
        contentType: 'application/json',
        description: 'Response',
        example: {},
      },
    }

    const currentVersion = 'fpt'
    const allVersions: Record<string, VersionItem> = {
      fpt: {
        version: 'fpt',
        versionTitle: 'Free, Pro, & Team',
        apiVersions: ['2022-11-28'],
        latestApiVersion: '2022-11-28',
      },
    }

    const result = getGHExample(operation, codeSample, currentVersion, allVersions)

    expect(result).toContain('"key_id": "012345678912345678"')
    expect(result).toMatch(/"selected_repository_ids": \[\s*1296269,\s*1296280\s*\]/)
  })

  test('leaves values unchanged when a name has different schema types', () => {
    const operation: Operation = {
      serverUrl: 'https://api.github.com',
      verb: 'post',
      requestPath: '/repos/{owner}/{repo}/dependency-graph/snapshots',
      title: 'Create a snapshot of dependencies for a repository',
      descriptionHTML: '<p>Create a snapshot of dependencies for a repository</p>',
      previews: [],
      statusCodes: [],
      bodyParameters: [
        { name: 'version', description: '', type: 'integer' },
        {
          name: 'detector',
          description: '',
          type: 'object',
          childParamsGroups: [
            { name: 'name', description: '', type: 'string' },
            { name: 'version', description: '', type: 'string' },
          ],
        },
        { name: 'tags', description: '', type: 'array of strings' },
      ],
      category: 'dependency-graph',
      subcategory: 'dependency-submission',
      parameters: [],
      codeExamples: [],
      progAccess: {
        permissions: [],
        userToServerRest: true,
        serverToServer: true,
        fineGrainedPat: true,
      },
    }

    const codeSample: CodeSample = {
      request: {
        contentType: 'application/json',
        description: 'Example',
        acceptHeader: 'application/vnd.github+json',
        bodyParameters: {
          version: '0',
          detector: { name: 'octo-detector', version: '1' },
          tags: ['main'],
        } as unknown as CodeSample['request']['bodyParameters'],
        parameters: { owner: 'OWNER', repo: 'REPO' },
      },
      response: {
        statusCode: '201',
        contentType: 'application/json',
        description: 'Response',
        example: {},
      },
    }

    const currentVersion = 'fpt'
    const allVersions: Record<string, VersionItem> = {
      fpt: {
        version: 'fpt',
        versionTitle: 'Free, Pro, & Team',
        apiVersions: ['2022-11-28'],
        latestApiVersion: '2022-11-28',
      },
    }

    const result = getGHExample(operation, codeSample, currentVersion, allVersions)

    expect(result).toContain('--input - <<<')
    expect(result).toContain('"version": "1"')
    expect(result).not.toContain('"version": 1')
  })
})
