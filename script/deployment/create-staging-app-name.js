#!/usr/bin/env node
import GithubSlugger from 'github-slugger'
const slugify = GithubSlugger.slug

const APP_NAME_MAX_LENGTH = 30

export default function ({ repo, pullNumber, branch }) {
  return (
    `gha-${repo}-${pullNumber}--${slugify(branch)}`
      // Shorten the string to the max allowed length
      .slice(0, APP_NAME_MAX_LENGTH)
      // Convert underscores to dashes
      .replace(/_/g, '-')
      // Remove trailing dashes
      .replace(/-+$/, '')
      // Make it all lowercase
      .toLowerCase()
  )
}
