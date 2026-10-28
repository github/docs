import { createHash } from 'crypto'
import type { NextFunction, Request, Response } from 'express'
import { describe, expect, test, vi } from 'vitest'

import helmetMiddleware from '@/frame/middleware/helmet'
import { colorModeScript } from '@/color-schemes/lib/color-mode-script'

function getScriptSrc(path: string): string[] {
  const headers: Record<string, string> = {}
  const req = { method: 'GET', path, get: () => undefined } as unknown as Request
  const res = {
    set(name: string, value: string) {
      headers[name.toLowerCase()] = value
    },
    setHeader(name: string, value: string) {
      headers[name.toLowerCase()] = value
    },
    getHeader(name: string) {
      return headers[name.toLowerCase()]
    },
    removeHeader(name: string) {
      delete headers[name.toLowerCase()]
    },
  } as unknown as Response
  const next = vi.fn() as unknown as NextFunction
  helmetMiddleware(req, res, next)
  expect(next).toHaveBeenCalled()
  const directive = headers['content-security-policy']
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith('script-src '))
  expect(directive).toBeDefined()
  return directive!.split(/\s+/).slice(1)
}

describe('helmet content security policy', () => {
  const colorModeScriptHash = `'sha256-${createHash('sha256').update(colorModeScript).digest('base64')}'`

  test('current pages allow the color mode script by hash only', () => {
    const scriptSrc = getScriptSrc('/en/get-started')
    expect(scriptSrc).toContain(colorModeScriptHash)
    expect(scriptSrc).not.toContain("'unsafe-inline'")
  })

  // Browsers ignore 'unsafe-inline' when a hash is present in the same directive.
  test.each(['/enterprise/2.12/user/', '/enterprise/2.17/user/', '/enterprise/2.16/developer/v3/'])(
    'archived page %s allows inline scripts without a hash',
    (path) => {
      const scriptSrc = getScriptSrc(path)
      expect(scriptSrc).toContain("'unsafe-inline'")
      expect(scriptSrc.some((source) => source.startsWith("'sha256-"))).toBe(false)
    },
  )
})
