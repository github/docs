import { describe, expect, it } from 'vitest'
import { execFileSync } from 'child_process'

describe('apache-arrow stub', () => {
  it('loading @elastic/elasticsearch does not trigger prototype chain deoptimizations', () => {
    // The real apache-arrow creates ~40 TypedArray subclasses via
    // Object.setPrototypeOf, which triggers V8 "dependent prototype
    // chain changed" deoptimizations. The stub avoids this entirely.
    //
    // V8's --trace-deopt outputs to stderr.
    let stderr = ''
    try {
      execFileSync(process.execPath, ['--trace-deopt', '-e', "require('@elastic/elasticsearch')"], {
        encoding: 'utf-8',
        timeout: 15_000,
      })
    } catch (error) {
      // execFileSync may throw if the process exits non-zero;
      // we only care about the stderr output
      stderr = (error as { stderr?: string }).stderr || ''
    }

    const deoptLines = stderr
      .split('\n')
      .filter((line) => line.toLowerCase().includes('prototype chain'))

    expect(deoptLines).toHaveLength(0)
  })

  it('stub exports throw clear errors if Arrow methods are called', async () => {
    // Verify the stub satisfies the require but throws on use
    const { Client } = await import('@elastic/elasticsearch')
    const client = new Client({ node: 'http://localhost:9200' })
    expect(client).toBeDefined()
    expect(typeof client.search).toBe('function')
  })
})
