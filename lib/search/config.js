module.exports = {
  // records must be truncated to avoid going over Algolia's 10K limit
  maxRecordLength: 8000,
  maxContentLength: 5000,
  namePrefix: 'github-docs'
}
