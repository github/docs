// This function derives the document type from the *relative path* segment length,
// where a relative path refers to the content path starting with the product dir.
// For example: actions/index.md or github/getting-started-with-github/quickstart.md.
module.exports = function getDocumentType (relativePath) {
  // A non-index file is ALWAYS considered an article in this approach,
  // even if it's at the category level (like actions/quickstart.md)
  if (!relativePath.endsWith('index.md')) {
    return 'article'
  }

  const segmentLength = relativePath.split('/').length

  // Early Access has an extra tree segment, so it has a different number of segments.
  const isEarlyAccess = relativePath.startsWith('early-access')

  const publicDocs = {
    1: 'homepage',
    2: 'product',
    3: 'category',
    4: 'mapTopic'
  }

  const earlyAccessDocs = {
    1: 'homepage',
    2: 'early-access',
    3: 'product',
    4: 'category',
    5: 'mapTopic'
  }

  return isEarlyAccess
    ? earlyAccessDocs[segmentLength]
    : publicDocs[segmentLength]
}
