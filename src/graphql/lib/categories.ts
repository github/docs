// Canonical mapping of internal schema kinds to:
// - urlKind: the URL/folder segment used in href anchors before categorization
//   (kept for backward-compat with `helpers.getFullLink` signature)
// - slugPrefix: the kind-disambiguating slug prefix used on category pages
//   so two items sharing a case-insensitive name don't collide
// - label: human-readable label rendered as a Primer Label next to each item

export type SchemaKindKey =
  | 'queries'
  | 'mutations'
  | 'objects'
  | 'interfaces'
  | 'enums'
  | 'unions'
  | 'inputObjects'
  | 'scalars'

export const KIND_LABELS: Record<SchemaKindKey, string> = {
  queries: 'Query',
  mutations: 'Mutation',
  objects: 'Object',
  interfaces: 'Interface',
  enums: 'Enum',
  unions: 'Union',
  inputObjects: 'Input object',
  scalars: 'Scalar',
}

// Plural form of `KIND_LABELS`, used as the section heading (and mini-TOC
// parent label) when a GraphQL category page groups its items by kind.
export const KIND_LABELS_PLURAL: Record<SchemaKindKey, string> = {
  queries: 'Queries',
  mutations: 'Mutations',
  objects: 'Objects',
  interfaces: 'Interfaces',
  enums: 'Enums',
  unions: 'Unions',
  inputObjects: 'Input objects',
  scalars: 'Scalars',
}

// Slug prefix used to disambiguate items across kinds on a category page.
// For example, a `Repository` object and a `repository` query both have id
// `repository`; on a category page they become `object-repository` and
// `query-repository` respectively.
export const KIND_SLUG_PREFIX: Record<SchemaKindKey, string> = {
  queries: 'query',
  mutations: 'mutation',
  objects: 'object',
  interfaces: 'interface',
  enums: 'enum',
  unions: 'union',
  inputObjects: 'input-object',
  scalars: 'scalar',
}

// The "URL kind" / `pageType` value used by `helpers.getTypeKind` and
// `helpers.getFullLink`. `inputObjects` (camelCase internal key) becomes
// `input-objects` in URLs.
export const KIND_URL_SEGMENT: Record<SchemaKindKey, string> = {
  queries: 'queries',
  mutations: 'mutations',
  objects: 'objects',
  interfaces: 'interfaces',
  enums: 'enums',
  unions: 'unions',
  inputObjects: 'input-objects',
  scalars: 'scalars',
}

export const ALL_KIND_KEYS: SchemaKindKey[] = [
  'queries',
  'mutations',
  'objects',
  'interfaces',
  'enums',
  'unions',
  'inputObjects',
  'scalars',
]

// Reverse map from the URL-kind segment used in hrefs (e.g. `input-objects`)
// to the slug prefix used to disambiguate items in category page anchors
// (e.g. `input-object`). Derived from KIND_URL_SEGMENT + KIND_SLUG_PREFIX so
// the three tables stay in sync automatically.
export const SLUG_PREFIX_BY_URL_SEGMENT: Record<string, string> = Object.fromEntries(
  ALL_KIND_KEYS.map((k) => [KIND_URL_SEGMENT[k], KIND_SLUG_PREFIX[k]]),
)

// Given a URL-kind segment (as returned by helpers.getTypeKind, e.g.
// `objects`, `input-objects`), return the slug prefix used to disambiguate
// items in category page anchors. Falls back to the input for unknown kinds.
export function slugPrefixForUrlKind(urlKind: string): string {
  return SLUG_PREFIX_BY_URL_SEGMENT[urlKind] ?? urlKind
}

// Bucket all items that don't have an upstream `@docsCategory` directive.
export const OTHER_CATEGORY = 'other'

// Canonical list of categories emitted by the upstream `docs_category` DSL.
// Keep this list in sync with the allowlist in
// `github/github`'s `app/platform/objects/base/docs_category.rb`.
// `other` is a docs-internal bucket for un-annotated types.
export const CATEGORIES = [
  'actions',
  'activity',
  'apps',
  'audit-log',
  'billing',
  'branches',
  'checks',
  'code-scanning',
  'code-security',
  'codespaces',
  'collaborators',
  'commits',
  'copilot',
  'dependabot',
  'dependency-graph',
  'deploy-keys',
  'deployments',
  'discussions',
  'enterprise-admin',
  'gists',
  'git',
  'interactions',
  'issues',
  'licenses',
  'meta',
  'migrations',
  'orgs',
  'packages',
  'pages',
  'projects',
  'projects-classic',
  'pulls',
  'reactions',
  'releases',
  'repos',
  'scim',
  'search',
  'secret-scanning',
  'security-advisories',
  'sponsors',
  'teams',
  'users',
  OTHER_CATEGORY,
] as const

export type CategorySlug = (typeof CATEGORIES)[number]

export function isValidCategory(slug: string): slug is CategorySlug {
  return (CATEGORIES as readonly string[]).includes(slug)
}

// Human-readable display title for a category. Falls back to slug.
export function categoryTitle(slug: string): string {
  switch (slug) {
    case 'apps':
      return 'GitHub Apps'
    case 'audit-log':
      return 'Audit log'
    case 'code-scanning':
      return 'Code scanning'
    case 'code-security':
      return 'Code security'
    case 'codespaces':
      return 'Codespaces'
    case 'dependency-graph':
      return 'Dependency graph'
    case 'deploy-keys':
      return 'Deploy keys'
    case 'enterprise-admin':
      return 'Enterprise administration'
    case 'meta':
      return 'Meta'
    case 'orgs':
      return 'Organizations'
    case 'projects-classic':
      return 'Projects (classic)'
    case 'pulls':
      return 'Pull requests'
    case 'repos':
      return 'Repositories'
    case 'scim':
      return 'SCIM'
    case 'secret-scanning':
      return 'Secret scanning'
    case 'security-advisories':
      return 'Security advisories'
    case OTHER_CATEGORY:
      return 'Other'
    default:
      return slug.charAt(0).toUpperCase() + slug.slice(1)
  }
}
