import { describe, expect, test } from 'vitest'
import { getBodyParams, type TransformedParam } from '../../rest/scripts/utils/get-body-params'

describe('oneOf handling in webhook parameters', () => {
  test('should handle oneOf fields correctly for secret_scanning_alert_location details', async () => {
    // Mock schema representing the secret_scanning_alert_location details field
    // This simulates the structure found in the actual OpenAPI schema
    const mockSchema = {
      type: 'object',
      properties: {
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
                  type: 'object',
                  title: 'commit',
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
                  type: 'object',
                  title: 'issue_title',
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
                  type: 'object',
                  title: 'issue_body',
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
                  type: 'object',
                  title: 'issue_comment',
                  description:
                    "Represents an 'issue_comment' secret scanning location type. This location type shows that a secret was detected in a comment on an issue.",
                  properties: {
                    issue_comment_url: {
                      type: 'string',
                      description: 'The API URL to get the associated issue comment resource',
                    },
                  },
                },
              ],
            },
          },
        },
      },
    }

    const result: TransformedParam[] = await getBodyParams(mockSchema, true)

    // Find the location parameter
    const locationParam: TransformedParam | undefined = result.find(
      (param) => param.name === 'location',
    )
    expect(locationParam).toBeDefined()
    expect(locationParam?.childParamsGroups).toBeDefined()

    // Find the details parameter within location
    const detailsParam: TransformedParam | undefined = locationParam?.childParamsGroups?.find(
      (param) => param.name === 'details',
    )
    expect(detailsParam).toBeDefined()
    expect(detailsParam?.type).toBe('object')

    // Verify that oneOf handling created multiple child param groups
    expect(detailsParam?.childParamsGroups).toBeDefined()
    expect(detailsParam?.childParamsGroups?.length).toBeGreaterThan(1)

    // Check that we have the expected oneOf objects
    const childParams: TransformedParam[] = detailsParam?.childParamsGroups || []
    const commitParam: TransformedParam | undefined = childParams.find(
      (param) => param.name === 'commit',
    )
    const issueTitleParam: TransformedParam | undefined = childParams.find(
      (param) => param.name === 'issue_title',
    )
    const issueBodyParam: TransformedParam | undefined = childParams.find(
      (param) => param.name === 'issue_body',
    )
    const issueCommentParam: TransformedParam | undefined = childParams.find(
      (param) => param.name === 'issue_comment',
    )

    expect(commitParam).toBeDefined()
    expect(commitParam?.description).toContain("commit' secret scanning location type")
    expect(commitParam?.childParamsGroups?.length).toBeGreaterThan(0)

    expect(issueTitleParam).toBeDefined()
    expect(issueTitleParam?.description).toContain("issue_title' secret scanning location type")

    expect(issueBodyParam).toBeDefined()
    expect(issueBodyParam?.description).toContain("issue_body' secret scanning location type")

    expect(issueCommentParam).toBeDefined()
    expect(issueCommentParam?.description).toContain("issue_comment' secret scanning location type")

    // Verify that the oneOfObject flag is set
    expect(detailsParam?.oneOfObject).toBe(true)
  })

  test('should handle oneOf fields with missing titles gracefully', async () => {
    const mockSchemaWithoutTitles = {
      type: 'object',
      properties: {
        details: {
          oneOf: [
            {
              type: 'object',
              description: 'First option without title',
              properties: {
                field1: {
                  type: 'string',
                  description: 'Field 1',
                },
              },
            },
            {
              type: 'object',
              description: 'Second option without title',
              properties: {
                field2: {
                  type: 'string',
                  description: 'Field 2',
                },
              },
            },
          ],
        },
      },
    }

    const result: TransformedParam[] = await getBodyParams(mockSchemaWithoutTitles, true)

    const detailsParam: TransformedParam | undefined = result.find(
      (param) => param.name === 'details',
    )
    expect(detailsParam).toBeDefined()
    expect(detailsParam?.childParamsGroups?.length).toBe(2)

    // When titles are missing, the name should be undefined or handled gracefully
    detailsParam?.childParamsGroups?.forEach((param) => {
      expect(param.type).toBe('object')
      expect(param.description).toBeDefined()
    })
  })

  test('should handle nested oneOf correctly', async () => {
    const mockNestedOneOfSchema = {
      type: 'object',
      properties: {
        wrapper: {
          type: 'object',
          properties: {
            inner: {
              oneOf: [
                {
                  type: 'object',
                  title: 'option_a',
                  description: 'Option A description',
                  properties: {
                    field_a: {
                      type: 'string',
                      description: 'Field A',
                    },
                  },
                },
                {
                  type: 'object',
                  title: 'option_b',
                  description: 'Option B description',
                  properties: {
                    field_b: {
                      type: 'string',
                      description: 'Field B',
                    },
                  },
                },
              ],
            },
          },
        },
      },
    }

    const result: TransformedParam[] = await getBodyParams(mockNestedOneOfSchema, true)

    const wrapperParam: TransformedParam | undefined = result.find(
      (param) => param.name === 'wrapper',
    )
    expect(wrapperParam).toBeDefined()

    const innerParam: TransformedParam | undefined = wrapperParam?.childParamsGroups?.find(
      (param) => param.name === 'inner',
    )
    expect(innerParam).toBeDefined()
    expect(innerParam?.oneOfObject).toBe(true)
    expect(innerParam?.childParamsGroups?.length).toBe(2)

    const optionA: TransformedParam | undefined = innerParam?.childParamsGroups?.find(
      (param) => param.name === 'option_a',
    )
    const optionB: TransformedParam | undefined = innerParam?.childParamsGroups?.find(
      (param) => param.name === 'option_b',
    )

    expect(optionA).toBeDefined()
    expect(optionA?.description).toContain('Option A description')
    expect(optionA?.childParamsGroups?.length).toBe(1)

    expect(optionB).toBeDefined()
    expect(optionB?.description).toContain('Option B description')
    expect(optionB?.childParamsGroups?.length).toBe(1)
  })
})
