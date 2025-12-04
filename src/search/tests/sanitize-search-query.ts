import { describe, expect, test } from 'vitest'
import { sanitizeSearchQuery } from '@/search/lib/sanitize-search-query'

describe('sanitizeSearchQuery', () => {
  test('returns empty string for empty input', () => {
    expect(sanitizeSearchQuery('')).toBe('')
  })

  test('returns query unchanged if no PII detected', () => {
    expect(sanitizeSearchQuery('how to create a repository')).toBe('how to create a repository')
    expect(sanitizeSearchQuery('git commit message')).toBe('git commit message')
  })

  describe('email redaction', () => {
    test('redacts single email address', () => {
      expect(sanitizeSearchQuery('contact user@example.com for help')).toBe(
        'contact [EMAIL] for help',
      )
    })

    test('redacts multiple email addresses', () => {
      expect(sanitizeSearchQuery('email john@example.com or jane@test.org')).toBe(
        'email [EMAIL] or [EMAIL]',
      )
    })

    test('redacts emails with special characters', () => {
      expect(sanitizeSearchQuery('user.name+tag@example.co.uk')).toBe('[EMAIL]')
    })
  })

  describe('GitHub token redaction', () => {
    test('redacts classic personal access tokens (ghp_)', () => {
      expect(sanitizeSearchQuery('token ghp_1234567890123456789012345678901234567890')).toBe(
        'token [TOKEN]',
      )
    })

    test('redacts OAuth tokens (gho_)', () => {
      expect(sanitizeSearchQuery('oauth gho_1234567890123456789012345678901234567890')).toBe(
        'oauth [TOKEN]',
      )
    })

    test('redacts user tokens (ghu_)', () => {
      expect(sanitizeSearchQuery('user ghu_1234567890123456789012345678901234567890')).toBe(
        'user [TOKEN]',
      )
    })

    test('redacts server tokens (ghs_)', () => {
      expect(sanitizeSearchQuery('server ghs_1234567890123456789012345678901234567890')).toBe(
        'server [TOKEN]',
      )
    })

    test('redacts refresh tokens (ghr_)', () => {
      expect(sanitizeSearchQuery('refresh ghr_1234567890123456789012345678901234567890')).toBe(
        'refresh [TOKEN]',
      )
    })

    test('redacts fine-grained PATs (github_pat_)', () => {
      expect(
        sanitizeSearchQuery('fine-grained github_pat_1234567890123456789012345678901234567890'),
      ).toBe('fine-grained [TOKEN]')
    })

    test('redacts tokens with minimum length (20 chars)', () => {
      expect(sanitizeSearchQuery('short ghp_12345678901234567890')).toBe('short [TOKEN]')
    })

    test('does not redact partial token prefixes', () => {
      expect(sanitizeSearchQuery('ghp is not a token')).toBe('ghp is not a token')
    })
  })

  describe('UUID redaction', () => {
    test('redacts standard UUIDs', () => {
      expect(sanitizeSearchQuery('id 550e8400-e29b-41d4-a716-446655440000 found')).toBe(
        'id [UUID] found',
      )
    })

    test('redacts UUIDs regardless of case', () => {
      expect(sanitizeSearchQuery('UUID 550E8400-E29B-41D4-A716-446655440000')).toBe('UUID [UUID]')
    })

    test('redacts multiple UUIDs', () => {
      expect(
        sanitizeSearchQuery(
          '550e8400-e29b-41d4-a716-446655440000 and 6ba7b810-9dad-11d1-80b4-00c04fd430c8',
        ),
      ).toBe('[UUID] and [UUID]')
    })
  })

  describe('JWT redaction', () => {
    test('redacts JWT tokens', () => {
      const jwt =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
      expect(sanitizeSearchQuery(`token ${jwt}`)).toBe('token [JWT]')
    })

    test('redacts JWT-like tokens with underscores and hyphens', () => {
      expect(sanitizeSearchQuery('eyABC123_-XYZ.eyDEF456_-UVW.eyGHI789_-RST')).toBe('[JWT]')
    })
  })

  describe('IP address redaction', () => {
    test('redacts valid IPv4 addresses', () => {
      expect(sanitizeSearchQuery('server 192.168.1.1 down')).toBe('server [IP] down')
      expect(sanitizeSearchQuery('10.0.0.1')).toBe('[IP]')
      expect(sanitizeSearchQuery('172.16.254.1')).toBe('[IP]')
    })

    test('redacts edge case IPs (0.0.0.0 and 255.255.255.255)', () => {
      expect(sanitizeSearchQuery('0.0.0.0')).toBe('[IP]')
      expect(sanitizeSearchQuery('255.255.255.255')).toBe('[IP]')
    })

    test('does not redact invalid IPs with octets > 255', () => {
      expect(sanitizeSearchQuery('999.999.999.999')).toBe('999.999.999.999')
      expect(sanitizeSearchQuery('256.1.1.1')).toBe('256.1.1.1')
    })

    test('redacts multiple IP addresses', () => {
      expect(sanitizeSearchQuery('connect 10.0.0.1 or 192.168.1.1')).toBe('connect [IP] or [IP]')
    })
  })

  describe('SSH private key redaction', () => {
    test('redacts RSA private key headers', () => {
      expect(sanitizeSearchQuery('-----BEGIN RSA PRIVATE KEY----- content')).toBe(
        '[SSH_KEY] content',
      )
    })

    test('redacts generic private key headers', () => {
      expect(sanitizeSearchQuery('-----BEGIN PRIVATE KEY----- content')).toBe('[SSH_KEY] content')
    })

    test('redacts EC private key headers', () => {
      expect(sanitizeSearchQuery('-----BEGIN EC PRIVATE KEY----- content')).toBe(
        '[SSH_KEY] content',
      )
    })
  })

  describe('high-entropy string redaction', () => {
    test('redacts long high-entropy strings with mixed case and numbers', () => {
      // 40+ chars with lowercase, uppercase, and numbers
      const secret = 'aB3dEf9Gh2IjKlMn0PqRsTuVwXyZ1234567890aBcDeF'
      expect(sanitizeSearchQuery(secret)).toBe('[SECRET]')
    })

    test('redacts strings with lowercase and numbers', () => {
      const secret = 'abc123def456ghi789jkl012mno345pqr678stu901vwx234'
      expect(sanitizeSearchQuery(secret)).toBe('[SECRET]')
    })

    test('redacts strings with uppercase and numbers', () => {
      const secret = 'ABC123DEF456GHI789JKL012MNO345PQR678STU901VWX234'
      expect(sanitizeSearchQuery(secret)).toBe('[SECRET]')
    })

    test('does not redact long strings with only lowercase', () => {
      const notSecret = 'thisisalongstringwithnouppercharsornumbers'
      expect(sanitizeSearchQuery(notSecret)).toBe(notSecret)
    })

    test('does not redact long strings with only numbers', () => {
      const notSecret = '12345678901234567890123456789012345678901234567890'
      expect(sanitizeSearchQuery(notSecret)).toBe(notSecret)
    })

    test('does not redact strings shorter than 40 chars', () => {
      const shortString = 'aB3dEf9Gh2IjKlMn0PqRsTuVwXyZ'
      expect(sanitizeSearchQuery(shortString)).toBe(shortString)
    })
  })

  describe('multiple PII types in one query', () => {
    test('redacts all PII types in a single query', () => {
      const query =
        'email user@example.com token ghp_1234567890123456789012345678901234567890 from 192.168.1.1'
      expect(sanitizeSearchQuery(query)).toBe('email [EMAIL] token [TOKEN] from [IP]')
    })

    test('handles complex mixed query', () => {
      const query = `
        Contact admin@github.com
        Token: github_pat_12345678901234567890ABCDEFGH
        UUID: 550e8400-e29b-41d4-a716-446655440000
        Server: 10.0.0.1
      `.trim()
      const result = sanitizeSearchQuery(query)
      expect(result).toContain('[EMAIL]')
      expect(result).toContain('[TOKEN]')
      expect(result).toContain('[UUID]')
      expect(result).toContain('[IP]')
    })
  })

  describe('preserves safe content', () => {
    test('preserves URLs without emails', () => {
      expect(sanitizeSearchQuery('https://github.com/docs')).toBe('https://github.com/docs')
    })

    test('preserves code snippets', () => {
      expect(sanitizeSearchQuery('git commit -m "fix bug"')).toBe('git commit -m "fix bug"')
    })

    test('preserves version numbers', () => {
      expect(sanitizeSearchQuery('node v18.0.0')).toBe('node v18.0.0')
    })
  })
})
