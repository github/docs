// This function derives the document type from the *relative path* segment length,
// where a relative path refers to the content path starting with the product dir.
// For example: actions/index.md or github/getting-started-with-github/quickstart.md.
export default function getDocumentType(relativePath) {
  // A non-index file is ALWAYS considered an article in this approach,
  // even if it's at the category level (like actions/quickstart.md)
  if (!relativePath.endsWith('index.md')) {
    return 'article'
  }

  const segmentLength = relativePath.split('/').length

  // Early Access has an extra tree segment, so it has a different number of segments.
  const isEarlyAccess = relativePath.startsWith('early-access')

  const publicDocs = ['homepage', 'product', 'category', 'mapTopic']

  const earlyAccessDocs = ['homepage', 'early-access', 'product', 'category', 'mapTopic']

  // Anything beyond the largest depth is assumed to be a mapTopic
  return isEarlyAccess
    ? earlyAccessDocs[Math.min(segmentLength, earlyAccessDocs.length) - 1]
    : publicDocs[Math.min(segmentLength, publicDocs.length) - 1]
}
