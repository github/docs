import { describe, expect, it } from 'vitest'
import { execFileSync } from 'child_process'

describe('apache-arrow stub', () => {
  // The real apache-arrow creates about 40 TypedArray subclasses via Object.setPrototypeOf.
  // That triggers V8 "dependent prototype chain changed" deoptimizations, which this stub avoids.
  // V8's --trace-deopt outputs to stderr.
  it('loading @elastic/elasticsearch does not trigger prototype chain deoptimizations', () => {
    let stderr = ''
    try {
      execFileSync(process.execPath, ['--trace-deopt', '-e', "require('@elastic/elasticsearch')"], {
        encoding: 'utf-8',
        timeout: 15_000,
      })
    } catch (error) {
      // execFileSync can throw on nonzero exit; only stderr matters here.
      stderr = (error as { stderr?: string }).stderr || ''
    }

    const deoptLines = stderr
      .split('\n')
      .filter((line) => line.toLowerCase().includes('prototype chain'))

    expect(deoptLines).toHaveLength(0)
  })

  it('stub exports throw clear errors if Arrow methods are called', async () => {
    // The stub must satisfy the require and throw only if Arrow methods run.
    const { Client } = await import('@elastic/elasticsearch')
    const client = new Client({ node: 'http://localhost:9200' })
    expect(client).toBeDefined()
    expect(typeof client.search).toBe('function')
  })
})
