// Redact PII and secrets from search queries before logging.
// Stateless ghs tokens contain dots; GitHub's token pattern also allows hyphens.
// The token class includes . and -:
// https://github.blog/changelog/2026-05-15-github-app-installation-tokens-per-request-override-header/
export function sanitizeSearchQuery(query: string): string {
  if (!query) return query

  return redactLongMixedStrings(redactStructuredSecrets(query))
}

// Users paste real provider secrets into the secret scanning table search, and many are shorter
// than 40 characters or split by base64 + and / characters.
export function sanitizeSecretScanningSearchQuery(query: string): string {
  if (!query) return query

  // The long-string rule splits credentials at punctuation, so redact short secrets before it.
  return redactLongMixedStrings(redactShortSecrets(redactStructuredSecrets(query)))
}

function redactStructuredSecrets(query: string): string {
  let sanitized = query

  // Email addresses can identify users in logs.
  sanitized = sanitized.replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, '[EMAIL]')

  // GitHub token prefixes include ghp, gho, ghu, ghs, and ghr.
  sanitized = sanitized.replace(/(ghp|gho|ghu|ghs|ghr)_[A-Za-z0-9._-]{20,}/gi, '[TOKEN]')
  // github_pat identifies fine-grained personal access tokens.
  sanitized = sanitized.replace(/\bgithub_pat_[A-Za-z0-9_]{20,}\b/gi, '[TOKEN]')
  // gho identifies OAuth tokens.
  sanitized = sanitized.replace(/\bgho_[A-Za-z0-9]{20,}\b/gi, '[TOKEN]')

  // UUIDs can identify private resources in logs.
  sanitized = sanitized.replace(
    /\b[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\b/gi,
    '[UUID]',
  )

  // JWTs have three base64url segments.
  sanitized = sanitized.replace(
    /\bey[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g,
    '[JWT]',
  )

  // Validate each IP octet to avoid over-redacting dotted numbers.
  sanitized = sanitized.replace(
    /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/g,
    '[IP]',
  )

  // The key body is the secret, so redact the whole block, including truncated pastes with no END line.
  sanitized = sanitized.replace(
    /-----BEGIN[A-Z ]*PRIVATE KEY(?: BLOCK)?-----[\s\S]*?(?:-----END[A-Z ]*PRIVATE KEY(?: BLOCK)?-----|$)/g,
    '[SSH_KEY]',
  )

  return sanitized
}

function redactLongMixedStrings(query: string): string {
  // Long mixed-character strings often indicate API keys or other secrets.
  return query.replace(/\b[A-Za-z0-9_-]{40,}\b/g, (match) => {
    // Mixed case and numbers avoid over-redacting ordinary long words.
    const hasLowerCase = /[a-z]/.test(match)
    const hasUpperCase = /[A-Z]/.test(match)
    const hasNumbers = /[0-9]/.test(match)
    const entropyIndicators = [hasLowerCase, hasUpperCase, hasNumbers].filter(Boolean).length

    // Two character classes meet the secret heuristic.
    if (entropyIndicators >= 2) {
      return '[SECRET]'
    }
    return match
  })
}

// Azure secrets use . and ~, so include them to avoid leaving short ends behind.
function redactShortSecrets(query: string): string {
  return query.replace(/[A-Za-z0-9+/=._~-]{16,}/g, (match) => {
    // Pattern names rarely mix uppercase with digits, use base64 punctuation, or contain hex runs.
    const hasUpperCaseAndNumbers = /[A-Z]/.test(match) && /[0-9]/.test(match)
    const hasBase64Punctuation = /[+/=]/.test(match)
    const hasHexRun = /[0-9a-f]{16,}/.test(match)
    return hasUpperCaseAndNumbers || hasBase64Punctuation || hasHexRun ? '[SECRET]' : match
  })
}
