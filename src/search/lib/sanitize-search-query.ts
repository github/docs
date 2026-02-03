// Remove PII from search queries before logging
// Redacts common PII patterns like emails, tokens, and other sensitive data

export function sanitizeSearchQuery(query: string): string {
  if (!query) return query

  let sanitized = query

  // Redact email addresses
  sanitized = sanitized.replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, '[EMAIL]')

  // Redact GitHub tokens (all formats)
  // Classic tokens: ghp_, gho_, ghu_, ghs_, ghr_
  sanitized = sanitized.replace(/\b(ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9]{20,}\b/gi, '[TOKEN]')
  // Fine-grained personal access tokens: github_pat_
  sanitized = sanitized.replace(/\bgithub_pat_[A-Za-z0-9_]{20,}\b/gi, '[TOKEN]')
  // OAuth tokens: gho_
  sanitized = sanitized.replace(/\bgho_[A-Za-z0-9]{20,}\b/gi, '[TOKEN]')

  // Redact UUIDs
  sanitized = sanitized.replace(
    /\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi,
    '[UUID]',
  )

  // Redact JWT tokens (format: xxx.yyy.zzz where each part is base64url)
  sanitized = sanitized.replace(
    /\bey[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g,
    '[JWT]',
  )

  // Redact IP addresses (with proper validation for 0-255 range)
  sanitized = sanitized.replace(
    /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g,
    '[IP]',
  )

  // Redact SSH private key headers
  sanitized = sanitized.replace(/-----BEGIN( [A-Z]+)? PRIVATE KEY-----/g, '[SSH_KEY]')

  // Redact potential API keys (long strings of hex or base64-like characters)
  // This catches high-entropy strings that might be secrets
  sanitized = sanitized.replace(/\b[A-Za-z0-9_-]{40,}\b/g, (match) => {
    // Only redact if it looks like high entropy (mixed case, numbers)
    const hasLowerCase = /[a-z]/.test(match)
    const hasUpperCase = /[A-Z]/.test(match)
    const hasNumbers = /[0-9]/.test(match)
    const entropyIndicators = [hasLowerCase, hasUpperCase, hasNumbers].filter(Boolean).length

    // If it has at least 2 of the 3 character types, it's likely a secret
    if (entropyIndicators >= 2) {
      return '[SECRET]'
    }
    return match
  })

  return sanitized
}
