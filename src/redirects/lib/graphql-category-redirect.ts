// Dynamic redirect from legacy kind-based GraphQL reference URLs
// (e.g. `/graphql/reference/scalars#boolean`) to the per-category
// reference URLs (e.g. `/graphql/reference/other#scalar-boolean`)
// introduced when docs-internal adopted the upstream `@docsCategory`
// directive.
//
// Resolved in a single hop so the type-name (in the URL fragment) is not
// lost: fragments are not sent on subsequent requests, so we can't chain a
// /v4 redirect to a removed kind page and recover the type later.

import fs from 'fs'
import path from 'path'

import { languageKeys } from '@/languages/lib/languages-server'
import {
  ALL_KIND_KEYS,
  KIND_SLUG_PREFIX,
  KIND_URL_SEGMENT,
  OTHER_CATEGORY,
  type SchemaKindKey,
} from '@/graphql/lib/categories'
import { supported as supportedGhes } from '@/versions/lib/enterprise-server-releases'

// URL kind segment (e.g. "input-objects") -> internal kind key (e.g. "inputObjects").
const URL_TO_KIND_KEY: Record<string, SchemaKindKey> = Object.fromEntries(
  ALL_KIND_KEYS.map((k) => [KIND_URL_SEGMENT[k], k]),
)

// Set of legacy kind URL segments we redirect from.
const LEGACY_KIND_SEGMENTS = new Set(Object.keys(URL_TO_KIND_KEY))

// Per-version lookup: kind key -> id (lowercased) -> category slug.
type CategoryMap = Partial<Record<SchemaKindKey, Record<string, string>>>

const dataDir = path.join(process.cwd(), 'src/graphql/data')
const lookupCache = new Map<string, CategoryMap | null>()

function loadCategoryMap(version: string): CategoryMap | null {
  if (lookupCache.has(version)) return lookupCache.get(version) ?? null
  const file = path.join(dataDir, version, 'category-map.json')
  let map: CategoryMap | null = null
  try {
    map = JSON.parse(fs.readFileSync(file, 'utf8')) as CategoryMap
  } catch {
    map = null
  }
  lookupCache.set(version, map)
  return map
}

// Map URL version segment to a graphql data directory name. Returns null for
// unsupported / archived versions so the caller can pass them through.
function versionUrlToDataDir(versionSegment: string | null): string | null {
  if (!versionSegment || versionSegment === 'free-pro-team@latest') return 'fpt'
  if (versionSegment === 'enterprise-cloud@latest') return 'ghec'
  const m = /^enterprise-server@(\d+\.\d+)$/.exec(versionSegment)
  if (m && supportedGhes.includes(m[1])) return `ghes-${m[1]}`
  // enterprise-server@latest also has category data via its current alias,
  // but middleware order means we shouldn't see it here. Pass through.
  return null
}

const LANGUAGE_RE = new RegExp(`^(${languageKeys.join('|')})$`)
const VERSION_RE = /^(free-pro-team@latest|enterprise-cloud@latest|enterprise-server@[\d.]+)$/

// Parse a docs URL path into its segments. Returns null if the path is not a
// graphql-reference legacy kind URL.
interface ParsedLegacyUrl {
  language: string | null
  version: string | null
  kindSegment: string
  // Type id (lowercased) parsed from the URL fragment, if any.
  typeId: string | null
}

function parseLegacyUrl(input: string): ParsedLegacyUrl | null {
  // We accept `redirect` strings that may include a `#fragment` but should not
  // include a query string at this point (callers pass the path-only form).
  const hashIndex = input.indexOf('#')
  const pathPart = hashIndex >= 0 ? input.slice(0, hashIndex) : input
  const fragment = hashIndex >= 0 ? input.slice(hashIndex + 1) : ''

  const segments = pathPart.split('/').filter(Boolean)
  // Expect segments to look like:
  //   [<lang>?, <version>?, "graphql", "reference", "<kind>"]
  // with optional language and optional version.
  const refIdx = segments.indexOf('reference')
  if (refIdx < 0) return null
  if (segments[refIdx - 1] !== 'graphql') return null
  if (refIdx !== segments.length - 2) return null

  const kindSegment = segments[refIdx + 1]
  if (!LEGACY_KIND_SEGMENTS.has(kindSegment)) return null

  // The bits before "graphql" can be: nothing, [lang], [version], or [lang, version].
  const preface = segments.slice(0, refIdx - 1)
  let language: string | null = null
  let version: string | null = null
  if (preface.length > 0 && LANGUAGE_RE.test(preface[0])) {
    language = preface[0]
    if (preface.length > 1 && VERSION_RE.test(preface[1])) version = preface[1]
    else if (preface.length > 1) return null
  } else if (preface.length > 0 && VERSION_RE.test(preface[0])) {
    version = preface[0]
    if (preface.length > 1) return null
  } else if (preface.length > 0) {
    return null
  }

  const typeId = fragment ? fragment.toLowerCase() : null
  return { language, version, kindSegment, typeId }
}

function buildPrefix(language: string | null, version: string | null): string {
  let out = ''
  if (language) out += `/${language}`
  if (version) out += `/${version}`
  return out
}

// Resolve a legacy URL to its category-based equivalent. Returns null if the
// input is not a legacy URL or its version is not supported (so callers leave
// it alone).
//
// `fallbackLanguage` is used when the input URL has no language segment so the
// rewritten URL is still valid against the language-prefixed `req.context.pages`
// lookup downstream.
export function applyGraphqlCategoryRedirect(
  redirect: string,
  fallbackLanguage: string = 'en',
): string | null {
  const parsed = parseLegacyUrl(redirect)
  if (!parsed) return null

  const dataDirName = versionUrlToDataDir(parsed.version)
  if (!dataDirName) return null

  const language = parsed.language ?? fallbackLanguage
  const prefix = buildPrefix(language, parsed.version)

  // No fragment: legacy bare kind page (e.g. /graphql/reference/scalars). The
  // kind index doesn't exist anymore; send the user to the reference root.
  if (!parsed.typeId) {
    return `${prefix}/graphql/reference`
  }

  const kindKey = URL_TO_KIND_KEY[parsed.kindSegment]
  const map = loadCategoryMap(dataDirName)
  const category = map?.[kindKey]?.[parsed.typeId] ?? OTHER_CATEGORY
  const slugPrefix = KIND_SLUG_PREFIX[kindKey]

  return `${prefix}/graphql/reference/${category}#${slugPrefix}-${parsed.typeId}`
}

// Test-only helper to reset the per-version cache so unit tests can reload
// fixture maps. Not exported through the public barrel.
export function __resetGraphqlCategoryCacheForTests(): void {
  lookupCache.clear()
}
