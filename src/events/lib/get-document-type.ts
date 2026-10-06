type DocumentType = 'homepage' | 'product' | 'category' | 'subcategory' | 'article' | 'early-access'

// Index-page depth maps to homepage, product, category, subcategory, or early-access.
// For example: index.md, actions/index.md, or early-access/index.md.
export default function getDocumentType(relativePath: string): DocumentType {
  // Non-index files are articles even at category depth, such as actions/quickstart.md.
  if (!relativePath.endsWith('index.md')) {
    return 'article'
  }

  const segmentLength = relativePath.split('/').length

  // Early Access has an extra tree segment, so it has a different number of segments.
  const isEarlyAccess = relativePath.startsWith('early-access')

  const publicDocs: DocumentType[] = ['homepage', 'product', 'category', 'subcategory']

  const earlyAccessDocs: DocumentType[] = [
    'homepage',
    'early-access',
    'product',
    'category',
    'subcategory',
  ]

  // Depth beyond the largest known depth maps to subcategory.
  return isEarlyAccess
    ? earlyAccessDocs[Math.min(segmentLength, earlyAccessDocs.length) - 1]
    : publicDocs[Math.min(segmentLength, publicDocs.length) - 1]
}
