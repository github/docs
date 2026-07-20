// Minimal structural shape needed for depth flattening — a subset of
// ProductTreeNode (which we avoid importing so this module stays free of the
// React/Next dependency chain and can be unit-tested in isolation).
type TreeNodeLike = { childPages: TreeNodeLike[] }

// Brand NavList supports up to 5 nesting levels; a level-5 item cannot contain a
// SubNav (it is dropped with a warning). SidebarProduct's group-less top-level
// items start at brand level 2, so items can keep nesting while level < 5. Real
// docs content currently bottoms out at exactly level 5, so the guard that uses
// this is defensive: if a deeper tree ever appears, the overflow is flattened
// into leaf links rather than silently dropped by brand.
//
// Kept in its own dependency-free module (no React/SCSS/Next imports) so it can
// be unit-tested without booting the Next.js app.
export const MAX_NAVLIST_LEVEL = 5

// Collects every descendant page of a node into a flat list, depth-first, so an
// over-deep subtree can still be rendered as (reachable) leaf links. Generic over
// the concrete node type so callers keep their richer node shape in the result.
export function flattenDescendants<T extends TreeNodeLike>(node: T): T[] {
  const out: T[] = []
  for (const child of node.childPages as T[]) {
    out.push(child)
    if (child.childPages.length > 0) out.push(...flattenDescendants(child))
  }
  return out
}
