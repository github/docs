export const ROOT = process.env.ROOT || '.'
export const TRANSLATIONS_ROOT = process.env.TRANSLATIONS_ROOT || 'translations'
export const TRANSLATIONS_FIXTURE_ROOT = process.env.TRANSLATIONS_FIXTURE_ROOT

const isDev = process.env.NODE_ENV === 'development'
// Higher in development to account for JIT compilation on first page load.
const DEFAULT_MAX_REQUEST_TIMEOUT = isDev ? 15_000 : 10_000
export const MAX_REQUEST_TIMEOUT = process.env.REQUEST_TIMEOUT
  ? parseInt(process.env.REQUEST_TIMEOUT, 10)
  : DEFAULT_MAX_REQUEST_TIMEOUT

// Docs cookies — we own these and use snake_case naming.
export const USER_LANGUAGE_COOKIE_NAME = 'user_language' // Also referenced in Fastly VCL
export const USER_VERSION_COOKIE_NAME = 'user_version' // Also referenced in Fastly VCL
export const API_VERSION_COOKIE_NAME = 'api_version_preferred'
export const ANNOTATE_MODE_COOKIE_NAME = 'annotate_mode'
export const CODE_SAMPLE_LANGUAGE_COOKIE_NAME = 'code_sample_language_preferred'
export const TOOL_PREFERRED_COOKIE_NAME = 'tool_preferred'
export const OS_PREFERRED_COOKIE_NAME = 'os_preferred'
export const DOCS_EVENTS_COOKIE_NAME = 'docs_events'
export const MACHINE_TRANSLATION_BANNER_COOKIE_NAME = 'machine_translation_banner_seen'

// Monolith cookies — set by github.com, read-only for us. Names are not
// ours to change so they don't follow our snake_case convention.
export const COLOR_MODE_COOKIE_NAME = 'color_mode'
export const PREFERRED_COLOR_MODE_COOKIE_NAME = 'preferred_color_mode'
export const DOTCOM_USER_COOKIE_NAME = 'dotcom_user'
export const STAFFONLY_COOKIE_NAME = 'staffonly'

// Feature flags
export const ANALYTICS_ENABLED = true
export const HOVERCARDS_ENABLED = true

// Minimum required HTML for 404: W3C valid, no external, legal.
export const minimumNotFoundHtml = `
<!doctype html>
<html lang=en>
<meta charset=utf-8>
<title>404 - GitHub Docs</title>
<style>body{font-family:system-ui,sans-serif;margin:3rem}a{color:#0969DA}</style>
<p style=font-weight:500>GitHub Docs</p>
<p>Page not found.</p>
<p><a href=/>Return to home.</a></p>
<small>
&copy; ${new Date().getFullYear()} GitHub, Inc.
 &bull; <a href=https://docs.github.com/site-policy/github-terms/github-terms-of-service>Terms</a>
 &bull; <a href=https://docs.github.com/site-policy/privacy-policies/github-privacy-statement>Privacy</a>
</small>
`.replace(/\n/g, '')
