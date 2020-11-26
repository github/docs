#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const walk = require('walk-sync')
const frontmatter = require('@github-docs/frontmatter')
const loadPages = require('../../lib/pages')
const patterns = require('../../lib/patterns')
const loadRedirects = require('../../lib/redirects/precompile')
const allVersions = Object.keys(require('../../lib/all-versions'))

// get all content and data files
const files = ['content', 'data'].map(dir => {
  return walk(path.join(process.cwd(), dir), { includeBasePath: true, directories: false })
    .filter(file => file.endsWith('.md') && !file.endsWith('README.md'))
}).flat()

// match [foo](/v3) and [bar](/v4) Markdown links
const linkRegex = new RegExp('\\(/v[34].*?\\)', 'g')

main()

async function main () {
  // we need to load the pages so we can get the redirects
  const englishPages = (await loadPages()).filter(p => p.languageCode === 'en')
  const redirects = await loadRedirects(englishPages)

  for (const file of files) {
    const { data, content } = frontmatter(fs.readFileSync(file, 'utf8'))

    const links = content.match(linkRegex)
    if (!links) continue

    // remove parentheses: (/v3) -> /v3
    // also remove trailing slash before closing parens if there is one
    const devLinks = links
      .map(link => link.replace('(', '').replace(/\/?\)/, ''))

    let newContent = content

    for (const devLink of devLinks) {
      const [link, fragment] = devLink.split(/\/?#/)

      let redirect = redirects[link]

      if (!redirect) {
        console.log(`no redirect found for ${devLink} in ${file}`)
        continue
      }

      // do some cleanup
      redirect = redirect
        // remove language code segment
        .replace(patterns.getLanguageCode, '')
        // remove version segment
        .replace(new RegExp(`/(${allVersions.join('|')})`), '')

      // re-add the fragment
      const newLink = fragment
        ? redirect + '#' + fragment
        : redirect

      // first remove any trailing slashes from the old link,
      // then replace with the new link
      newContent = newContent
        .replace(`${devLink}/`, devLink)
        .replace(devLink, newLink)
    }

    fs.writeFileSync(file, frontmatter.stringify(newContent, data, { lineWidth: 10000 }))
  }
  console.log('Done!')
}
