import { describe, expect, test } from 'vitest'
import { get } from '@/tests/helpers/e2etest'

describe('llms.txt endpoint', () => {
  test('returns 200 OK with text/markdown', async () => {
    const res = await get('/llms.txt')
    expect(res.statusCode).toBe(200)
    expect(res.headers['content-type']).toMatch(/text\/markdown/)
  })

  test('starts with the GitHub Docs title', async () => {
    const res = await get('/llms.txt')
    expect(res.body).toMatch(/^# .*GitHub.*Docs/m)
  })

  test('includes the description blockquote', async () => {
    const res = await get('/llms.txt')
    expect(res.body).toMatch(/^> .+/m)
  })

  test('includes the How to use section with API links', async () => {
    const res = await get('/llms.txt')
    expect(res.body).toMatch(/## How to use/)
    expect(res.body).toMatch(/Article API/)
    expect(res.body).toMatch(/Page List API/)
    expect(res.body).toMatch(/Search API/)
  })

  test('mentions the GitHub MCP server', async () => {
    const res = await get('/llms.txt')
    expect(res.body).toMatch(/github-mcp-server/)
  })

  test('lists at least one popular page link', async () => {
    const res = await get('/llms.txt')
    expect(res.body).toMatch(/\[.+\]\(https:\/\/docs\.github\.com\/en\/.+\)/)
  })
})
