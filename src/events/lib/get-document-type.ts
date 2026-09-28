type DocumentType = 'homepage' | 'product' | 'category' | 'subcategory' | 'article' | 'early-access'

// Derives the document type from the number of segments in the relative path,
// meaning the content path starting at the product directory.
// For example: actions/index.md or github/getting-started-with-github/quickstart.md
export default function getDocumentType(relativePath: string): DocumentType {
  // A non-index file is ALWAYS considered an article in this approach,
  // even if it's at the category level (like actions/quickstart.md)
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

  // Anything beyond the largest depth is assumed to be a subcategory
  return isEarlyAccess
    ? earlyAccessDocs[Math.min(segmentLength, earlyAccessDocs.length) - 1]
    : publicDocs[Math.min(segmentLength, publicDocs.length) - 1]
}
