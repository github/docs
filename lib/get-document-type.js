module.exports = function getDocumentType (relativePath) {
  if (!relativePath.endsWith('index.md')) {
    return 'article'
  }

  // Derive the document type from the path segment length
  switch (relativePath.split('/').length) {
    case 1:
      return 'homepage'
    case 2:
      return 'product'
    case 3:
      return 'category'
    case 4:
      return 'mapTopic'
  }
}
