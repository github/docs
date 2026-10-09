// Redirect legacy kind-based GraphQL reference URLs, such as
// /graphql/reference/scalars#boolean, to per-category reference URLs, such as
// /graphql/reference/other#scalar-boolean.
//
// Resolve in one hop because URL fragments are not sent on subsequent requests.

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

// URL kind segment input-objects maps to internal kind key inputObjects.
const URL_TO_KIND_KEY: Record<string, SchemaKindKey> = Object.fromEntries(
  ALL_KIND_KEYS.map((k) => [KIND_URL_SEGMENT[k], k]),
)

// Accept only these legacy kind segments for redirect parsing.
const LEGACY_KIND_SEGMENTS = new Set(Object.keys(URL_TO_KIND_KEY))

// Per-version lookup maps kind key to lowercased ID to category slug.
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

// Unsupported and archived versions pass through because they have no GraphQL data directory.
function versionUrlToDataDir(versionSegment: string | null): string | null {
  if (!versionSegment || versionSegment === 'free-pro-team@latest') return 'fpt'
  if (versionSegment === 'enterprise-cloud@latest') return 'ghec'
  const m = /^enterprise-server@(\d+\.\d+)$/.exec(versionSegment)
  if (m && supportedGhes.includes(m[1])) return `ghes-${m[1]}`
  // enterprise-server@latest has category data, but earlier middleware resolves it.
  return null
}

const LANGUAGE_RE = new RegExp(`^(${languageKeys.join('|')})$`)
const VERSION_RE = /^(free-pro-team@latest|enterprise-cloud@latest|enterprise-server@[\d.]+)$/

// Parse only legacy GraphQL reference kind URLs.
interface ParsedLegacyUrl {
  language: string | null
  version: string | null
  kindSegment: string
  // Lowercased type ID from the URL fragment, if any.
  typeId: string | null
}

function parseLegacyUrl(input: string): ParsedLegacyUrl | null {
  // Callers pass path-only redirects, with optional fragments but no query strings.
  const hashIndex = input.indexOf('#')
  const pathPart = hashIndex >= 0 ? input.slice(0, hashIndex) : input
  const fragment = hashIndex >= 0 ? input.slice(hashIndex + 1) : ''

  const segments = pathPart.split('/').filter(Boolean)
  // The legacy shape allows optional language and version segments before graphql/reference/kind.
  const refIdx = segments.indexOf('reference')
  if (refIdx < 0) return null
  if (segments[refIdx - 1] !== 'graphql') return null
  if (refIdx !== segments.length - 2) return null

  const kindSegment = segments[refIdx + 1]
  if (!LEGACY_KIND_SEGMENTS.has(kindSegment)) return null

  // Segments before graphql can be empty, language, version, or language plus version.
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

// Resolve legacy type URLs to category pages and bare kind URLs to the reference root.
//
// fallbackLanguage keeps language-less inputs valid against req.context.pages.
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

  // Legacy bare kind pages like /graphql/reference/scalars redirect to the reference root.
  if (!parsed.typeId) {
    return `${prefix}/graphql/reference`
  }

  const kindKey = URL_TO_KIND_KEY[parsed.kindSegment]
  const map = loadCategoryMap(dataDirName)
  const category = map?.[kindKey]?.[parsed.typeId] ?? OTHER_CATEGORY
  const slugPrefix = KIND_SLUG_PREFIX[kindKey]

  return `${prefix}/graphql/reference/${category}#${slugPrefix}-${parsed.typeId}`
}

// Tests reset the per-version cache to reload fixture maps without exporting through the barrel.
export function __resetGraphqlCategoryCacheForTests(): void {
  lookupCache.clear()
}
