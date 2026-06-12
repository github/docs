import { describe, expect, it } from 'vitest'

import { toError } from '@/observability/lib/to-error'

describe('toError', () => {
  it('should return Error instances as-is', () => {
    const error = new Error('test error')
    const result = toError(error)
    expect(result).toBe(error)
    expect(result.message).toBe('test error')
  })

  it('should return subclassed Error instances as-is', () => {
    const error = new TypeError('type error')
    const result = toError(error)
    expect(result).toBe(error)
    expect(result).toBeInstanceOf(TypeError)
  })

  it('should convert a plain string to an Error via JSON.stringify', () => {
    const result = toError('something went wrong')
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toBe('"something went wrong"')
  })

  it('should convert a number to an Error', () => {
    const result = toError(42)
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toBe('42')
  })

  it('should convert null to an Error', () => {
    const result = toError(null)
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toBe('null')
  })

  it('should convert undefined to an Error via JSON.stringify', () => {
    const result = toError(undefined)
    expect(result).toBeInstanceOf(Error)
    // JSON.stringify(undefined) returns undefined (not a string),
    // so new Error(undefined) has an empty message
    expect(result.message).toBe('')
  })

  it('should convert a plain object to an Error via JSON.stringify', () => {
    const result = toError({ code: 'ERR_TIMEOUT', detail: 'took too long' })
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toBe('{"code":"ERR_TIMEOUT","detail":"took too long"}')
  })

  it('should fall back to String() for circular references', () => {
    const circular: Record<string, unknown> = { name: 'loop' }
    circular.self = circular
    const result = toError(circular)
    expect(result).toBeInstanceOf(Error)
    // String() on an object returns '[object Object]'
    expect(result.message).toBe('[object Object]')
  })
})
