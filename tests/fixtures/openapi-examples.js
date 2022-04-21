export const noContent = {
  request: [
    {
      key: 'default',
      request: {
        contentType: 'application/json',
        description: 'Example',
        acceptHeader: 'application/vnd.github.v3+json',
        bodyParameters: {
          encrypted_value: 'c2VjcmV0',
          key_id: '012345678912345678',
          visibility: 'selected',
          selected_repository_ids: [Array],
        },
        parameters: { org: 'ORG', secret_name: 'SECRET_NAME' },
      },
    },
  ],
  response: [
    {
      key: '201',
      response: {
        statusCode: '201',
        description: 'Response when creating a secret',
      },
    },
    {
      key: '200',
      response: {
        statusCode: '200',
        description: 'Response when creating a secret',
      },
    },
    {
      key: '304',
      response: {
        statusCode: '304',
        description: 'Response when creating a secret',
      },
    },
    {
      key: '404',
      response: {
        statusCode: '404',
        description: 'Response when creating a secret',
      },
    },
  ],
  merged: [
    {
      key: '201',
      request: {
        contentType: 'application/json',
        description: 'Example',
        acceptHeader: 'application/vnd.github.v3+json',
        bodyParameters: {
          encrypted_value: 'c2VjcmV0',
          key_id: '012345678912345678',
          visibility: 'selected',
          selected_repository_ids: [Array],
        },
        parameters: { org: 'ORG', secret_name: 'SECRET_NAME' },
      },
      response: {
        statusCode: '201',
        description: 'Response when creating a secret',
      },
    },
    {
      key: '200',
      request: {
        contentType: 'application/json',
        description: 'Example',
        acceptHeader: 'application/vnd.github.v3+json',
        bodyParameters: {
          encrypted_value: 'c2VjcmV0',
          key_id: '012345678912345678',
          visibility: 'selected',
          selected_repository_ids: [Array],
        },
        parameters: { org: 'ORG', secret_name: 'SECRET_NAME' },
      },
      response: {
        statusCode: '200',
        description: 'Response when creating a secret',
      },
    },
  ],
}

export const multipleContent = {
  request: [
    {
      key: 'default',
      request: {
        description: 'Example',
        acceptHeader: 'application/vnd.github.v3+json',
        parameters: { key_id: 'KEY_ID' },
      },
    },
  ],
  response: [
    {
      key: 'default',
      response: {
        statusCode: '200',
        contentType: 'application/json',
        description: 'Response',
        example: {
          key: '2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvv1234',
          id: 2,
          url: 'https://api.github.com/user/keys/2',
          title: 'ssh-rsa AAAAB3NzaC1yc2EAAA',
          created_at: '2020-06-11T21:31:57Z',
          verified: false,
          read_only: false,
        },
      },
    },
    {
      key: 'default',
      response: {
        statusCode: '201',
        contentType: 'application/json',
        description: 'Response',
        example: {
          key: '2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvv1234',
          id: 2,
          url: 'https://api.github.com/user/keys/2',
          title: 'ssh-rsa AAAAB3NzaC1yc2EAAA',
          created_at: '2020-06-11T21:31:57Z',
          verified: false,
          read_only: false,
        },
      },
    },
  ],
  merged: [
    {
      key: 'default',
      request: {
        description: 'Example',
        acceptHeader: 'application/vnd.github.v3+json',
        parameters: { key_id: 'KEY_ID' },
      },
      response: {
        statusCode: '200',
        contentType: 'application/json',
        description: 'Response',
        example: {
          key: '2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvv1234',
          id: 2,
          url: 'https://api.github.com/user/keys/2',
          title: 'ssh-rsa AAAAB3NzaC1yc2EAAA',
          created_at: '2020-06-11T21:31:57Z',
          verified: false,
          read_only: false,
        },
      },
    },
    {
      key: 'default',
      request: {
        description: 'Example',
        acceptHeader: 'application/vnd.github.v3+json',
        parameters: { key_id: 'KEY_ID' },
      },
      response: {
        statusCode: '201',
        contentType: 'application/json',
        description: 'Response',
        example: {
          key: '2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvv1234',
          id: 2,
          url: 'https://api.github.com/user/keys/2',
          title: 'ssh-rsa AAAAB3NzaC1yc2EAAA',
          created_at: '2020-06-11T21:31:57Z',
          verified: false,
          read_only: false,
        },
      },
    },
  ],
}

export const noResponse = {
  request: [
    {
      key: 'default',
      request: {
        description: 'Example',
        acceptHeader: 'application/vnd.github.v3+json',
        parameters: { key_id: 'KEY_ID' },
      },
    },
  ],
  response: [],
  merged: [],
}

export const oneToOne = {
  request: [
    {
      key: 'default',
      request: {
        contentType: 'application/json',
        description: 'Example',
        acceptHeader: 'application/vnd.github.v3+json',
        bodyParameters: {
          name: 'web',
          events: ['organization', 'user'],
          config: {
            url: 'https://example.com/webhook',
            content_type: 'json',
            secret: 'secret',
          },
        },
      },
    },
  ],
  response: [
    {
      key: 'non-default',
      response: {
        statusCode: '201',
        contentType: 'application/json',
        description: 'Response',
        example: {
          type: 'Global',
          id: 1,
          name: 'web',
          active: true,
          events: ['organization', 'user'],
          config: {
            url: 'https://example.com',
            content_type: 'json',
            insecure_ssl: '0',
            secret: '********',
          },
          updated_at: '2017-12-07T00:14:59Z',
          created_at: '2017-12-07T00:14:59Z',
          url: 'https://api.github.com/admin/hooks/1',
          ping_url: 'https://api.github.com/admin/hooks/1/pings',
        },
      },
    },
  ],
  merged: [
    {
      key: 'default',
      request: {
        contentType: 'application/json',
        description: 'Example',
        acceptHeader: 'application/vnd.github.v3+json',
        bodyParameters: {
          name: 'web',
          events: ['organization', 'user'],
          config: {
            url: 'https://example.com/webhook',
            content_type: 'json',
            secret: 'secret',
          },
        },
      },
      response: {
        statusCode: '201',
        contentType: 'application/json',
        description: 'Response',
        example: {
          type: 'Global',
          id: 1,
          name: 'web',
          active: true,
          events: ['organization', 'user'],
          config: {
            url: 'https://example.com',
            content_type: 'json',
            insecure_ssl: '0',
            secret: '********',
          },
          updated_at: '2017-12-07T00:14:59Z',
          created_at: '2017-12-07T00:14:59Z',
          url: 'https://api.github.com/admin/hooks/1',
          ping_url: 'https://api.github.com/admin/hooks/1/pings',
        },
      },
    },
  ],
}

export const matchingTags = {
  request: [
    {
      key: 'example-of-in-progress-conclusion',
      request: {
        contentType: 'application/json',
        description: 'Response for in_progress conclusion',
        acceptHeader: 'application/vnd.github.v3+json',
        bodyParameters: {
          name: 'mighty_readme',
          head_sha: 'ce587453ced02b1526dfb4cb910479d431683101',
          status: 'in_progress',
          external_id: '42',
          started_at: '2018-05-04T01:14:52Z',
          output: {
            title: 'Mighty Readme report',
            summary: '',
            text: '',
          },
        },
        parameters: {
          owner: 'OWNER',
          repo: 'REPO',
        },
      },
    },
    {
      key: 'example-that-will-not-be-used',
      request: {
        contentType: 'application/json',
        description: 'Response for in_progress conclusion',
        acceptHeader: 'application/vnd.github.v3+json',
        bodyParameters: {
          name: 'mighty_readme',
          head_sha: 'ce587453ced02b1526dfb4cb910479d431683101',
          status: 'in_progress',
          external_id: '42',
          started_at: '2018-05-04T01:14:52Z',
          output: {
            title: 'Mighty Readme report',
            summary: '',
            text: '',
          },
        },
        parameters: {
          owner: 'OWNER',
          repo: 'REPO',
        },
      },
    },
    {
      key: 'example-of-completed-conclusion',
      request: {
        contentType: 'application/json',
        description: 'Response for completed conclusion',
        acceptHeader: 'application/vnd.github.v3+json',
        bodyParameters: {
          name: 'mighty_readme',
          head_sha: 'ce587453ced02b1526dfb4cb910479d431683101',
          status: 'completed',
          started_at: '2017-11-30T19:39:10Z',
          conclusion: 'success',
          completed_at: '2017-11-30T19:49:10Z',
          actions: [
            {
              label: 'Fix',
              identifier: 'fix_errors',
              description: 'Allow us to fix these errors for you',
            },
          ],
        },
        parameters: {
          owner: 'OWNER',
          repo: 'REPO',
        },
      },
    },
  ],
  response: [
    {
      key: 'example-of-in-progress-conclusion',
      response: {
        statusCode: '201',
        contentType: 'application/json',
        description: 'Response for completed conclusion',
        example: {
          id: 4,
          head_sha: 'ce587453ced02b1526dfb4cb910479d431683101',
          node_id: 'MDg6Q2hlY2tSdW40',
          external_id: '42',
          url: 'https://api.github.com/repos/github/hello-world/check-runs/4',
          html_url: 'https://github.com/github/hello-world/runs/4',
          details_url: 'https://example.com',
          status: 'in_progress',
          conclusion: null,
          started_at: '2018-05-04T01:14:52Z',
          completed_at: null,
          name: 'mighty_readme',
          check_suite: {
            id: 5,
          },
        },
      },
    },
    {
      key: 'example-of-completed-conclusion',
      response: {
        statusCode: '201',
        contentType: 'application/json',
        description: 'Response for completed conclusion',
        example: {
          id: 4,
          head_sha: 'ce587453ced02b1526dfb4cb910479d431683101',
          node_id: 'MDg6Q2hlY2tSdW40',
          external_id: '42',
          url: 'https://api.github.com/repos/github/hello-world/check-runs/4',
          html_url: 'https://github.com/github/hello-world/runs/4',
          details_url: 'https://example.com',
          status: 'completed',
          conclusion: 'neutral',
          started_at: '2018-05-04T01:14:52Z',
          completed_at: '2018-05-04T01:14:52Z',
          name: 'mighty_readme',
          check_suite: {
            id: 5,
          },
        },
      },
    },
  ],
  merged: [
    {
      key: 'example-of-in-progress-conclusion',
      request: {
        contentType: 'application/json',
        description: 'Response for in_progress conclusion',
        acceptHeader: 'application/vnd.github.v3+json',
        bodyParameters: {
          name: 'mighty_readme',
          head_sha: 'ce587453ced02b1526dfb4cb910479d431683101',
          status: 'in_progress',
          external_id: '42',
          started_at: '2018-05-04T01:14:52Z',
          output: {
            title: 'Mighty Readme report',
            summary: '',
            text: '',
          },
        },
        parameters: {
          owner: 'OWNER',
          repo: 'REPO',
        },
      },
      response: {
        statusCode: '201',
        contentType: 'application/json',
        description: 'Response for completed conclusion',
        example: {
          id: 4,
          head_sha: 'ce587453ced02b1526dfb4cb910479d431683101',
          node_id: 'MDg6Q2hlY2tSdW40',
          external_id: '42',
          url: 'https://api.github.com/repos/github/hello-world/check-runs/4',
          html_url: 'https://github.com/github/hello-world/runs/4',
          details_url: 'https://example.com',
          status: 'in_progress',
          conclusion: null,
          started_at: '2018-05-04T01:14:52Z',
          completed_at: null,
          name: 'mighty_readme',
          check_suite: {
            id: 5,
          },
        },
      },
    },
    {
      key: 'example-of-completed-conclusion',
      request: {
        contentType: 'application/json',
        description: 'Response for completed conclusion',
        acceptHeader: 'application/vnd.github.v3+json',
        bodyParameters: {
          name: 'mighty_readme',
          head_sha: 'ce587453ced02b1526dfb4cb910479d431683101',
          status: 'completed',
          started_at: '2017-11-30T19:39:10Z',
          conclusion: 'success',
          completed_at: '2017-11-30T19:49:10Z',
          actions: [
            {
              label: 'Fix',
              identifier: 'fix_errors',
              description: 'Allow us to fix these errors for you',
            },
          ],
        },
        parameters: {
          owner: 'OWNER',
          repo: 'REPO',
        },
      },
      response: {
        statusCode: '201',
        contentType: 'application/json',
        description: 'Response for completed conclusion',
        example: {
          id: 4,
          head_sha: 'ce587453ced02b1526dfb4cb910479d431683101',
          node_id: 'MDg6Q2hlY2tSdW40',
          external_id: '42',
          url: 'https://api.github.com/repos/github/hello-world/check-runs/4',
          html_url: 'https://github.com/github/hello-world/runs/4',
          details_url: 'https://example.com',
          status: 'completed',
          conclusion: 'neutral',
          started_at: '2018-05-04T01:14:52Z',
          completed_at: '2018-05-04T01:14:52Z',
          name: 'mighty_readme',
          check_suite: {
            id: 5,
          },
        },
      },
    },
  ],
}
