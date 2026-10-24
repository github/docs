// Runs tsx with the same --import flag as nodemonConfig in package.json,
// so the listener is in place before the entry module loads.

import { spawnSync } from 'child_process'
import path from 'path'
import { describe, expect, test } from 'vitest'

const rootDir = path.join(__dirname, '../../..')
// spawnSync cannot launch the node_modules/.bin shell shim on Windows, so run the tsx CLI with node.
const tsxCli = path.join(rootDir, 'node_modules/tsx/dist/cli.mjs')
const handler = './src/observability/lib/handle-package-not-found.ts'

function runWithHandler(code: string) {
  const result = spawnSync(
    process.execPath,
    [tsxCli, '--import', handler, '--input-type=module', '-e', code],
    {
      cwd: rootDir,
      encoding: 'utf8',
      timeout: 15000,
    },
  )
  return { status: result.status, stdout: result.stdout, stderr: result.stderr }
}

describe('handle-package-not-found', { timeout: 30000 }, () => {
  test('prints the npm ci prompt and exits 1 for a missing package', () => {
    const { status, stderr } = runWithHandler(
      "import x from 'not-a-real-package-xyz'; console.log(x)",
    )
    expect(status).toBe(1)
    expect(stderr).toContain('ERR_MODULE_NOT_FOUND')
    expect(stderr).toContain('npm ci')
  })

  test('prints other startup errors and exits 1', () => {
    const { status, stderr } = runWithHandler("throw new Error('startup boom')")
    expect(status).toBe(1)
    expect(stderr).toContain('startup boom')
    expect(stderr).not.toContain('npm ci')
  })

  test('prints missing named export errors and exits 1', () => {
    const { status, stderr } = runWithHandler("import { nope } from 'node:path'; console.log(nope)")
    expect(status).toBe(1)
    expect(stderr).toContain('nope')
  })

  test('leaves errors to other uncaughtException listeners when present', () => {
    const { status, stdout, stderr } = runWithHandler(
      "process.on('uncaughtException', (err) => console.log('handled', err.message)); setTimeout(() => { throw new Error('later') }, 0)",
    )
    expect(status).toBe(0)
    expect(stdout).toContain('handled later')
    // Node 26 prints a tsx deprecation warning to stderr, so check for the error instead of empty output.
    expect(stderr).not.toContain('later')
  })
})
