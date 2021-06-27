const slugify = require('github-slugger').slug

const APP_NAME_MAX_LENGTH = 30

module.exports = function ({ repo, pullNumber, branch }) {
  return `${repo}-${pullNumber}--${slugify(branch)}`
    // Shorten the string to the max allowed length
    .slice(0, APP_NAME_MAX_LENGTH)
    // Convert underscores to dashes
    .replace(/_/g, '-')
    // Remove trailing dashes
    .replace(/-+$/, '')
    // Make it all lowercase
    .toLowerCase()
}
