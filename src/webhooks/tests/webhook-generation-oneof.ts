import { describe, expect, test } from 'vitest'
import Webhook from '../scripts/webhook'

describe('webhook generation with oneOf fields', () => {
  test('should properly generate webhook documentation for secret_scanning_alert_location with oneOf details', async () => {
    // Mock OpenAPI schema that represents the actual structure from github/rest-api-description
    // This simulates the secret_scanning_alert_location webhook with oneOf details field
    const mockWebhookSchema = {
      summary:
        'This event occurs when there is activity relating to the locations of a secret in a secret scanning alert.',
      description:
        'A new instance of a previously detected secret was detected in a repository, and the location of the secret was added to the existing alert.',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                action: {
                  type: 'string',
                  enum: ['created'],
                },
                alert: {
                  type: 'object',
                  properties: {
                    number: {
                      type: 'integer',
                      description: 'The security alert number.',
                    },
                    created_at: {
                      type: 'string',
                      description:
                        'The time that the alert was created in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.',
                    },
                  },
                },
                location: {
                  type: 'object',
                  properties: {
                    type: {
                      type: 'string',
                      description:
                        'The location type. Because secrets may be found in different types of resources (ie. code, comments, issues, pull requests, discussions), this field identifies the type of resource where the secret was found.',
                      enum: [
                        'commit',
                        'wiki_commit',
                        'issue_title',
                        'issue_body',
                        'issue_comment',
                        'discussion_title',
                        'discussion_body',
                        'discussion_comment',
                        'pull_request_title',
                        'pull_request_body',
                        'pull_request_comment',
                        'pull_request_review',
                        'pull_request_review_comment',
                      ],
                    },
                    details: {
                      oneOf: [
                        {
                          title: 'commit',
                          type: 'object',
                          description:
                            "Represents a 'commit' secret scanning location type. This location type shows that a secret was detected inside a commit to a repository.",
                          properties: {
                            path: {
                              type: 'string',
                              description: 'The file path in the repository',
                            },
                            start_line: {
                              type: 'integer',
                              description: 'Line number at which the secret starts in the file',
                            },
                            end_line: {
                              type: 'integer',
                              description: 'Line number at which the secret ends in the file',
                            },
                            start_column: {
                              type: 'integer',
                              description:
                                'The column at which the secret starts within the start line when the file is interpreted as 8BIT ASCII',
                            },
                            end_column: {
                              type: 'integer',
                              description:
                                'The column at which the secret ends within the end line when the file is interpreted as 8BIT ASCII',
                            },
                            blob_sha: {
                              type: 'string',
                              description: 'SHA-1 hash ID of the associated blob',
                            },
                            blob_url: {
                              type: 'string',
                              description: 'The API URL to get the associated blob resource',
                            },
                            commit_sha: {
                              type: 'string',
                              description: 'SHA-1 hash ID of the associated commit',
                            },
                            commit_url: {
                              type: 'string',
                              description: 'The API URL to get the associated commit resource',
                            },
                          },
                        },
                        {
                          title: 'issue_title',
                          type: 'object',
                          description:
                            "Represents an 'issue_title' secret scanning location type. This location type shows that a secret was detected in the title of an issue.",
                          properties: {
                            issue_title_url: {
                              type: 'string',
                              description: 'The API URL to get the associated issue resource',
                            },
                          },
                        },
                        {
                          title: 'issue_body',
                          type: 'object',
                          description:
                            "Represents an 'issue_body' secret scanning location type. This location type shows that a secret was detected in the body of an issue.",
                          properties: {
                            issue_body_url: {
                              type: 'string',
                              description: 'The API URL to get the associated issue resource',
                            },
                          },
                        },
                        {
                          title: 'issue_comment',
                          type: 'object',
                          description:
                            "Represents an 'issue_comment' secret scanning location type. This location type shows that a secret was detected in a comment on an issue.",
                          properties: {
                            issue_comment_url: {
                              type: 'string',
                              description:
                                'The API URL to get the associated issue comment resource',
                            },
                          },
                        },
                        {
                          title: 'discussion_title',
                          type: 'object',
                          description:
                            "Represents a 'discussion_title' secret scanning location type. This location type shows that a secret was detected in the title of a discussion.",
                          properties: {
                            discussion_title_url: {
                              type: 'string',
                              description: 'The API URL to get the associated discussion resource',
                            },
                          },
                        },
                        {
                          title: 'discussion_body',
                          type: 'object',
                          description:
                            "Represents a 'discussion_body' secret scanning location type. This location type shows that a secret was detected in the body of a discussion.",
                          properties: {
                            discussion_body_url: {
                              type: 'string',
                              description: 'The API URL to get the associated discussion resource',
                            },
                          },
                        },
                        {
                          title: 'discussion_comment',
                          type: 'object',
                          description:
                            "Represents a 'discussion_comment' secret scanning location type. This location type shows that a secret was detected in a comment on a discussion.",
                          properties: {
                            discussion_comment_url: {
                              type: 'string',
                              description:
                                'The API URL to get the associated discussion comment resource',
                            },
                          },
                        },
                        {
                          title: 'pull_request_title',
                          type: 'object',
                          description:
                            "Represents a 'pull_request_title' secret scanning location type. This location type shows that a secret was detected in the title of a pull request.",
                          properties: {
                            pull_request_title_url: {
                              type: 'string',
                              description:
                                'The API URL to get the associated pull request resource',
                            },
                          },
                        },
                        {
                          title: 'pull_request_body',
                          type: 'object',
                          description:
                            "Represents a 'pull_request_body' secret scanning location type. This location type shows that a secret was detected in the body of a pull request.",
                          properties: {
                            pull_request_body_url: {
                              type: 'string',
                              description:
                                'The API URL to get the associated pull request resource',
                            },
                          },
                        },
                        {
                          title: 'pull_request_comment',
                          type: 'object',
                          description:
                            "Represents a 'pull_request_comment' secret scanning location type. This location type shows that a secret was detected in a comment on a pull request.",
                          properties: {
                            pull_request_comment_url: {
                              type: 'string',
                              description:
                                'The API URL to get the associated pull request comment resource',
                            },
                          },
                        },
                        {
                          title: 'pull_request_review',
                          type: 'object',
                          description:
                            "Represents a 'pull_request_review' secret scanning location type. This location type shows that a secret was detected in a pull request review.",
                          properties: {
                            pull_request_review_url: {
                              type: 'string',
                              description:
                                'The API URL to get the associated pull request review resource',
                            },
                          },
                        },
                        {
                          title: 'pull_request_review_comment',
                          type: 'object',
                          description:
                            "Represents a 'pull_request_review_comment' secret scanning location type. This location type shows that a secret was detected in a comment on a pull request review.",
                          properties: {
                            pull_request_review_comment_url: {
                              type: 'string',
                              description:
                                'The API URL to get the associated pull request review comment resource',
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                repository: {
                  type: 'object',
                  description: 'The repository on GitHub where the event occurred.',
                },
                sender: {
                  type: 'object',
                  description: 'A GitHub user.',
                },
              },
            },
          },
        },
      },
      'x-github': {
        'supported-webhook-types': ['repository', 'organization', 'app'],
        subcategory: 'secret_scanning_alert_location',
      },
    }

    // Create webhook instance and process it
    const webhook = new Webhook(mockWebhookSchema)
    await webhook.process()

    // Verify basic webhook properties
    expect(webhook.category).toBe('secret_scanning_alert_location')
    expect(webhook.action).toBe('created')
    expect(webhook.availability).toEqual(['repository', 'organization', 'app'])
    expect(webhook.bodyParameters).toBeDefined()
    expect(webhook.bodyParameters.length).toBeGreaterThan(0)

    // Find the location parameter
    const locationParam = webhook.bodyParameters.find((param) => param.name === 'location')
    expect(locationParam).toBeDefined()
    expect(locationParam?.type).toBe('object')
    expect(locationParam?.childParamsGroups).toBeDefined()

    // Find the details parameter within location
    const detailsParam = locationParam?.childParamsGroups?.find((param) => param.name === 'details')
    expect(detailsParam).toBeDefined()
    expect(detailsParam?.type).toBe('object')

    // Verify that oneOf handling worked correctly
    expect(detailsParam?.oneOfObject).toBe(true)
    expect(detailsParam?.childParamsGroups).toBeDefined()
    expect(detailsParam?.childParamsGroups?.length).toBeGreaterThan(1)

    // Check that all expected oneOf variants are present
    const childParams = detailsParam?.childParamsGroups || []
    const variantNames = childParams.map((param) => param.name)

    expect(variantNames).toContain('commit')
    expect(variantNames).toContain('issue_title')
    expect(variantNames).toContain('issue_body')
    expect(variantNames).toContain('issue_comment')
    expect(variantNames).toContain('discussion_title')
    expect(variantNames).toContain('discussion_body')
    expect(variantNames).toContain('discussion_comment')
    expect(variantNames).toContain('pull_request_title')
    expect(variantNames).toContain('pull_request_body')
    expect(variantNames).toContain('pull_request_comment')
    expect(variantNames).toContain('pull_request_review')
    expect(variantNames).toContain('pull_request_review_comment')

    // Verify specific variant details
    const commitVariant = childParams.find((param) => param.name === 'commit')
    expect(commitVariant).toBeDefined()
    expect(commitVariant?.description).toContain("commit' secret scanning location type")
    expect(commitVariant?.childParamsGroups?.length).toBeGreaterThan(0)

    // Check commit variant has expected properties
    const commitProperties = commitVariant?.childParamsGroups?.map((param) => param.name) || []
    expect(commitProperties).toContain('path')
    expect(commitProperties).toContain('start_line')
    expect(commitProperties).toContain('end_line')
    expect(commitProperties).toContain('blob_sha')
    expect(commitProperties).toContain('commit_sha')

    const issueTitleVariant = childParams.find((param) => param.name === 'issue_title')
    expect(issueTitleVariant).toBeDefined()
    expect(issueTitleVariant?.description).toContain("issue_title' secret scanning location type")
    expect(issueTitleVariant?.childParamsGroups?.length).toBe(1)

    const issueUrlParam = issueTitleVariant?.childParamsGroups?.[0]
    expect(issueUrlParam?.name).toBe('issue_title_url')
    expect(issueUrlParam?.description).toContain('API URL to get the associated issue resource')

    // Verify that descriptions are properly rendered
    expect(commitVariant?.description).toContain('<p>')
    expect(issueTitleVariant?.description).toContain('<p>')
  })

  test('should handle mixed oneOf types correctly', async () => {
    // Test case where oneOf contains both objects and non-objects
    const mockMixedOneOfSchema = {
      summary: 'Test webhook with mixed oneOf types',
      description: 'A webhook for testing mixed oneOf handling',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                mixed_field: {
                  oneOf: [
                    {
                      type: 'string',
                      description: 'String variant',
                    },
                    {
                      type: 'object',
                      title: 'object_variant',
                      description: 'Object variant',
                      properties: {
                        field1: {
                          type: 'string',
                          description: 'Field 1',
                        },
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      },
      'x-github': {
        'supported-webhook-types': ['repository'],
        subcategory: 'test_mixed_oneof',
      },
    }

    const webhook = new Webhook(mockMixedOneOfSchema)
    await webhook.process()

    const mixedParam = webhook.bodyParameters.find((param) => param.name === 'mixed_field')
    expect(mixedParam).toBeDefined()

    // For mixed types, it should use the fallback behavior (not oneOfObject)
    expect(mixedParam?.oneOfObject).toBeFalsy()
    expect(mixedParam?.type).toContain('string')
    expect(mixedParam?.type).toContain('object')
  })

  test('should handle edge case with empty oneOf array', async () => {
    const mockEmptyOneOfSchema = {
      summary: 'Test webhook with empty oneOf',
      description: 'A webhook for testing empty oneOf handling',
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                empty_oneof: {
                  oneOf: [],
                },
              },
            },
          },
        },
      },
      'x-github': {
        'supported-webhook-types': ['repository'],
        subcategory: 'test_empty_oneof',
      },
    }

    const webhook = new Webhook(mockEmptyOneOfSchema)

    // Should not throw an error
    await expect(webhook.process()).resolves.not.toThrow()

    const emptyParam = webhook.bodyParameters.find((param) => param.name === 'empty_oneof')
    expect(emptyParam).toBeDefined()
    expect(emptyParam?.childParamsGroups?.length || 0).toBe(0)
  })
})
