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

export const operation = {
  summary: 'Create or update an organization secret',
  description:
    'Creates or updates an organization secret with an encrypted value. Encrypt your secret using\n' +
    '[LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access\n' +
    'token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to\n' +
    'use this endpoint.\n' +
    '\n' +
    '#### Example encrypting a secret using Node.js\n' +
    '\n' +
    'Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.\n' +
    '\n' +
    '```\n' +
    "const sodium = require('tweetsodium');\n" +
    '\n' +
    'const key = "base64-encoded-public-key";\n' +
    'const value = "plain-text-secret";\n' +
    '\n' +
    "// Convert the message and key to Uint8Array's (Buffer implements that interface)\n" +
    'const messageBytes = Buffer.from(value);\n' +
    "const keyBytes = Buffer.from(key, 'base64');\n" +
    '\n' +
    '// Encrypt using LibSodium.\n' +
    'const encryptedBytes = sodium.seal(messageBytes, keyBytes);\n' +
    '\n' +
    '// Base64 the encrypted secret\n' +
    "const encrypted = Buffer.from(encryptedBytes).toString('base64');\n" +
    '\n' +
    'console.log(encrypted);\n' +
    '```\n' +
    '\n' +
    '\n' +
    '#### Example encrypting a secret using Python\n' +
    '\n' +
    'Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.\n' +
    '\n' +
    '```\n' +
    'from base64 import b64encode\n' +
    'from nacl import encoding, public\n' +
    '\n' +
    'def encrypt(public_key: str, secret_value: str) -> str:\n' +
    '  """Encrypt a Unicode string using the public key."""\n' +
    '  public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())\n' +
    '  sealed_box = public.SealedBox(public_key)\n' +
    '  encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))\n' +
    '  return b64encode(encrypted).decode("utf-8")\n' +
    '```\n' +
    '\n' +
    '#### Example encrypting a secret using C#\n' +
    '\n' +
    'Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.\n' +
    '\n' +
    '```\n' +
    'var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");\n' +
    'var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");\n' +
    '\n' +
    'var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);\n' +
    '\n' +
    'Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));\n' +
    '```\n' +
    '\n' +
    '#### Example encrypting a secret using Ruby\n' +
    '\n' +
    'Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.\n' +
    '\n' +
    '```ruby\n' +
    'require "rbnacl"\n' +
    'require "base64"\n' +
    '\n' +
    'key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")\n' +
    'public_key = RbNaCl::PublicKey.new(key)\n' +
    '\n' +
    'box = RbNaCl::Boxes::Sealed.from_public_key(public_key)\n' +
    'encrypted_secret = box.encrypt("my_secret")\n' +
    '\n' +
    '# Print the base64 encoded secret\n' +
    'puts Base64.strict_encode64(encrypted_secret)\n' +
    '```',
  tags: ['actions'],
  operationId: 'actions/create-or-update-org-secret',
  externalDocs: {
    description: 'API method documentation',
    url: 'https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret',
  },
  parameters: [
    { name: 'org', in: 'path', required: true, schema: [Object] },
    {
      name: 'secret_name',
      description: 'secret_name parameter',
      in: 'path',
      required: true,
      schema: [Object],
    },
  ],
  requestBody: { required: true, content: { 'application/json': [Object] } },
  responses: {
    201: {
      description: 'Response when creating a secret',
      content: [Object],
    },
    204: { description: 'Response when updating a secret' },
  },
  'x-github': {
    githubCloudOnly: false,
    enabledForGitHubApps: true,
    category: 'actions',
    subcategory: 'secrets',
  },
  serverUrl: 'https://api.github.com',
  requestPath: '/orgs/{org}/actions/secrets/{secret_name}',
  verb: 'put',
}
