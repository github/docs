import fs from 'fs/promises'
import path from 'path'
import { mkdirp } from 'mkdirp'
import {
  ALL_KIND_KEYS,
  CATEGORIES,
  KIND_URL_SEGMENT,
  OTHER_CATEGORY,
  slugPrefixForUrlKind,
  type SchemaKindKey,
} from '@/graphql/lib/categories'

// Item shape from process-schemas; we only need the `category` field here so
// we keep this loose to avoid pulling all the precise interfaces.
type CategorizedItem = { category?: string; name?: string; id?: string }

export type CategoryBuckets = Map<string, Partial<Record<SchemaKindKey, CategorizedItem[]>>>

// Matches the legacy href format that process-schemas emits, e.g.
// `/graphql/reference/objects#repository`. Captures the url-kind segment
// and the id so the bucketer can rewrite into the category-aware form.
const LEGACY_HREF_RE = /^\/graphql\/reference\/([a-z][a-z-]*)#([a-z0-9-]+)$/

type CategoryLookup = Map<string, Map<string, string>>

function buildCategoryLookup(buckets: CategoryBuckets): CategoryLookup {
  const lookup: CategoryLookup = new Map()
  for (const kind of ALL_KIND_KEYS) {
    const urlKind = KIND_URL_SEGMENT[kind]
    const byId = new Map<string, string>()
    for (const [cat, bucket] of buckets.entries()) {
      for (const item of bucket[kind] ?? []) {
        const id = (item.id ?? item.name ?? '').toLowerCase()
        if (id) byId.set(id, cat)
      }
    }
    lookup.set(urlKind, byId)
  }
  return lookup
}

function rewriteHref(href: string, lookup: CategoryLookup): string {
  const match = LEGACY_HREF_RE.exec(href)
  if (!match) return href
  const [, urlKind, id] = match
  const category = lookup.get(urlKind)?.get(id) ?? OTHER_CATEGORY
  return `/graphql/reference/${category}#${slugPrefixForUrlKind(urlKind)}-${id}`
}

// Walk a processed item recursively, rewriting any string value that looks
// like a legacy `/graphql/reference/<urlKind>#<id>` href into the
// category-aware form. Mutates in place; the monolithic schema.json has
// already been written to disk before this runs.
function rewriteHrefsInPlace(value: unknown, lookup: CategoryLookup): void {
  if (Array.isArray(value)) {
    for (const v of value) rewriteHrefsInPlace(v, lookup)
    return
  }
  if (value && typeof value === 'object') {
    const obj = value as Record<string, unknown>
    for (const key of Object.keys(obj)) {
      const v = obj[key]
      if (typeof v === 'string' && v.startsWith('/graphql/reference/')) {
        obj[key] = rewriteHref(v, lookup)
      } else {
        rewriteHrefsInPlace(v, lookup)
      }
    }
  }
}

// Group a processed schema (one big `{queries, mutations, ...}` object) into
// one bucket per category. Each bucket only contains the kinds that have
// items in that category.
export function bucketSchemaByCategory(
  schema: Record<SchemaKindKey, CategorizedItem[]>,
): CategoryBuckets {
  const buckets: CategoryBuckets = new Map()
  for (const kind of ALL_KIND_KEYS) {
    const items = schema[kind] || []
    for (const item of items) {
      const cat = item.category ?? OTHER_CATEGORY
      let bucket = buckets.get(cat)
      if (!bucket) {
        bucket = {}
        buckets.set(cat, bucket)
      }
      if (!bucket[kind]) bucket[kind] = []
      bucket[kind]!.push(item)
    }
  }

  // After grouping, rewrite cross-reference hrefs from the legacy
  // `/graphql/reference/<urlKind>#<id>` form into the category-aware
  // `/graphql/reference/<category>#<kindPrefix>-<id>` form so per-category
  // files link to their sibling files. The monolithic `schema.json` is
  // serialized to disk before this runs (see sync.ts), so it keeps the
  // legacy hrefs the existing runtime expects.
  const lookup = buildCategoryLookup(buckets)
  for (const bucket of buckets.values()) {
    rewriteHrefsInPlace(bucket, lookup)
  }

  return buckets
}

// Write `schema-<category>.json` files into `dir`. Categories with no items
// for this version get an empty file so the loader has a deterministic file
// to consume (rather than relying on filesystem stat).
export async function writeCategoryFiles(dir: string, buckets: CategoryBuckets): Promise<void> {
  await mkdirp(dir)
  // First, delete any stale schema-*.json files so a category that becomes
  // empty in a new sync doesn't leave behind a stale file.
  let existing: string[] = []
  try {
    existing = await fs.readdir(dir)
  } catch {
    existing = []
  }
  for (const file of existing) {
    if (file.startsWith('schema-') && file.endsWith('.json')) {
      try {
        await fs.unlink(path.join(dir, file))
      } catch {
        // ignore
      }
    }
  }
  for (const cat of CATEGORIES) {
    const bucket = buckets.get(cat) ?? {}
    const filepath = path.join(dir, `schema-${cat}.json`)
    console.log(`Updating static file ${filepath}`)
    await fs.writeFile(filepath, JSON.stringify(bucket, null, 2), 'utf8')
  }

  // Also emit a small category-map.json used at runtime by the GraphQL
  // category redirect middleware. Shape: { [kindKey]: { [id]: category } }
  const categoryMap: Partial<Record<SchemaKindKey, Record<string, string>>> = {}
  for (const kind of ALL_KIND_KEYS) {
    const byId: Record<string, string> = {}
    for (const [cat, bucket] of buckets.entries()) {
      for (const item of bucket[kind] ?? []) {
        const key = (item.id ?? item.name ?? '').toLowerCase()
        if (key) byId[key] = cat
      }
    }
    if (Object.keys(byId).length > 0) categoryMap[kind] = byId
  }
  const mapPath = path.join(dir, 'category-map.json')
  console.log(`Updating static file ${mapPath}`)
  await fs.writeFile(mapPath, JSON.stringify(categoryMap, null, 2), 'utf8')
}
