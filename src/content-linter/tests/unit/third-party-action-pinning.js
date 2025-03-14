import { describe, expect, test } from 'vitest'

import { runRule } from '../../lib/init-test.js'
import { thirdPartyActionPinning } from '../../lib/linting-rules/third-party-action-pinning.js'

describe(thirdPartyActionPinning.names.join(' - '), () => {
  test('should not report an error for first-party actions', async () => {
    const markdown = [
      '```yaml',
      'jobs:',
      '  build:',
      '    runs-on: ubuntu-latest',
      '    steps:',
      '      - uses: actions/javascript-action@main',
      '```',
    ].join('\n')
    const result = await runRule(thirdPartyActionPinning, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('should not report an error for third-party actions pinned to a full-length commit SHA', async () => {
    const markdown = [
      '```yaml',
      'jobs:',
      '  build:',
      '    runs-on: ubuntu-latest',
      '    steps:',
      '      - uses: google-github-actions/setup-gcloud@1bee7de035d65ec5da40a31f8589e240eba8fde5',
      '```',
    ].join('\n')
    const result = await runRule(thirdPartyActionPinning, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('should report an error for third-party actions not pinned to a full-length commit SHA', async () => {
    const markdown = [
      '```yaml',
      'jobs:',
      '  build:',
      '    runs-on: ubuntu-latest',
      '    steps:',
      '      - uses: google-github-actions/setup-gcloud@v0.2.0',
      '```',
    ].join('\n')
    const result = await runRule(thirdPartyActionPinning, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
    expect(errors[0].errorContext).toEqual('google-github-actions/setup-gcloud@v0.2.0')
  })

  test('should not report an error for multiple valid third-party actions', async () => {
    const markdown = [
      '```yaml',
      'jobs:',
      '  build:',
      '    runs-on: ubuntu-latest',
      '    steps:',
      '      - uses: google-github-actions/setup-gcloud@1bee7de035d65ec5da40a31f8589e240eba8fde5',
      '      - uses: monalisa/some-other-action@1234567890abcdef1234567890abcdef12345678',
      '```',
    ].join('\n')
    const result = await runRule(thirdPartyActionPinning, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(0)
  })

  test('should report an error for multiple invalid third-party actions', async () => {
    const markdown = [
      '```yaml',
      'jobs:',
      '  build:',
      '    runs-on: ubuntu-latest',
      '    steps:',
      '      - uses: google-github-actions/setup-gcloud@v0.2.0',
      '      - uses: monalisa/some-other-action@main',
      '```',
    ].join('\n')
    const result = await runRule(thirdPartyActionPinning, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(2)
    expect(errors[0].errorContext).toEqual('google-github-actions/setup-gcloud@v0.2.0')
    expect(errors[1].errorContext).toEqual('monalisa/some-other-action@main')
  })

  test('should report an error for hashicorp/vault-action pinned to a specific version', async () => {
    const markdown = [
      '```yaml',
      'jobs:',
      '  retrieve-secret:',
      '    runs-on: ubuntu-latest',
      '    permissions:',
      '      id-token: write',
      '      contents: read',
      '    steps:',
      '      - name: Retrieve secret from Vault',
      '        uses: hashicorp/vault-action@v2.4.0',
      '        with:',
      '          method: jwt',
      '          url: VAULT-URL',
      '          namespace: VAULT-NAMESPACE # HCP Vault and Vault Enterprise only',
      '          role: ROLE-NAME',
      '          secrets: SECRET-PATH',
      '',
      '      - name: Use secret from Vault',
      '        run: |',
      '          # This step has access to the secret retrieved above; see hashicorp/vault-action for more details.',
      '```',
    ].join('\n')
    const result = await runRule(thirdPartyActionPinning, { strings: { markdown } })
    const errors = result.markdown
    expect(errors.length).toBe(1)
  })
})
