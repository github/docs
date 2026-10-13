// Schema kind tables keep legacy URL segments, category-page slug prefixes, and visible labels.

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

// Plural labels appear in category-page sections and mini-TOC section entries.
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

// Category-page anchors prefix the kind, so Repository object and repository query stay distinct.
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

// These URL segments match helpers.getTypeKind output and helpers.getFullLink input.
// For example, inputObjects becomes input-objects.
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

// Derive URL-segment to slug-prefix mappings from the source tables so anchor helpers stay in sync.
// For example, input-objects maps to input-object.
export const SLUG_PREFIX_BY_URL_SEGMENT: Record<string, string> = Object.fromEntries(
  ALL_KIND_KEYS.map((k) => [KIND_URL_SEGMENT[k], KIND_SLUG_PREFIX[k]]),
)

// Unknown URL-kind segments fall back to themselves so callers can handle future kinds.
export function slugPrefixForUrlKind(urlKind: string): string {
  return SLUG_PREFIX_BY_URL_SEGMENT[urlKind] ?? urlKind
}

// Unannotated upstream schema items fall into the other category.
export const OTHER_CATEGORY = 'other'

// github/github app/platform/objects/base/docs_category.rb must allow each upstream category here.
// The other category belongs to docs-internal for unannotated types.
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
