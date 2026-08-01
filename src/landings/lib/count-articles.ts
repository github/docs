import type { ProductTreeNode } from '@/frame/components/context/MainContext'

// Recursively counts all leaf articles (nodes without children) under a given node
export const countArticles = (node: ProductTreeNode): number => {
  if (node.childPages.length === 0) {
    return 1
  }
  return node.childPages.reduce((sum, child) => sum + countArticles(child), 0)
}
