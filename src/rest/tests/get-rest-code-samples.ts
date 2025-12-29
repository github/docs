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
      bodyParameters: [],
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
      key: 'default',
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
        } as any,
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

    // The result should use --input for complex objects with arrays
    expect(result).toContain("--input - <<< '")
    expect(result).toContain('"bypass_actors": [')
    expect(result).toContain('"actor_id": 234')
    expect(result).toContain('"conditions": {')
    expect(result).toContain('"ref_name": {')
    expect(result).toContain('"rules": [')
    expect(result).toContain('"type": "commit_author_email_pattern"')

    // Verify the JSON structure is properly formatted
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
      key: 'default',
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
        } as any,
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
      key: 'default',
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
})
