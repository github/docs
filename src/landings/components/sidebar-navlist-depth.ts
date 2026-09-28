// Depth flattening needs only this ProductTreeNode subset, keeping React and Next
// dependencies out so tests can import the module in isolation.
type TreeNodeLike = { childPages: TreeNodeLike[] }

// Brand NavList supports up to 5 nesting levels; a level-5 item cannot contain a
// SubNav (it is dropped with a warning). SidebarProduct injects a hidden sentinel so
// brand numbers its top-level items from level 1 (without it brand starts at level 2
// and wastes a level; see navListLevelSentinel in SidebarProduct.tsx), so items can
// keep nesting while level < 5. Real docs content bottoms out at exactly
// level 5, so this guard is defensive: if a deeper tree appears,
// the overflow is flattened into leaf links rather than silently dropped by brand.
//
// Keeping this module dependency-free avoids booting the Next.js app in unit tests.
export const MAX_NAVLIST_LEVEL = 5

// Flatten descendants depth-first so over-deep subtrees still render as reachable
// leaf links while callers keep their richer node shape in the result.
export function flattenDescendants<T extends TreeNodeLike>(node: T): T[] {
  const out: T[] = []
  for (const child of node.childPages as T[]) {
    out.push(child)
    if (child.childPages.length > 0) out.push(...flattenDescendants(child))
  }
  return out
}
