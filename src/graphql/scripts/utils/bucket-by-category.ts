import fs from 'fs/promises'
import path from 'path'
import {
  ALL_KIND_KEYS,
  CATEGORIES,
  KIND_URL_SEGMENT,
  OTHER_CATEGORY,
  slugPrefixForUrlKind,
  type SchemaKindKey,
} from '@/graphql/lib/categories'

// Keep this loose so bucket-by-category does not import every process-schemas interface.
type CategorizedItem = { category?: string; name?: string; id?: string }

export type CategoryBuckets = Map<string, Partial<Record<SchemaKindKey, CategorizedItem[]>>>

// Example: /graphql/reference/objects#repository captures url kind objects and id repository.
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

// rewriteHrefsInPlace mutates processed items so category files link to sibling files.
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

  // Rewriting happens after buckets exist, so hrefs can point to sibling category files.
  const lookup = buildCategoryLookup(buckets)
  for (const bucket of buckets.values()) {
    rewriteHrefsInPlace(bucket, lookup)
  }

  return buckets
}

// Emit every schema-<category>.json file so the loader never stats missing categories.
export async function writeCategoryFiles(dir: string, buckets: CategoryBuckets): Promise<void> {
  await fs.mkdir(dir, { recursive: true })
  // Remove schema-*.json files before writing, so categories with no items keep no data.
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
        // Keep writing other category files if one stale file cannot be removed.
      }
    }
  }
  for (const cat of CATEGORIES) {
    const bucket = buckets.get(cat) ?? {}
    const filepath = path.join(dir, `schema-${cat}.json`)
    console.log(`Updating static file ${filepath}`)
    await fs.writeFile(filepath, JSON.stringify(bucket, null, 2), 'utf8')
  }

  // category-map.json shape is { [kindKey]: { [id]: category } } for GraphQL redirects.
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
