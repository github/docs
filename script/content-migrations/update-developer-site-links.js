#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import walk from 'walk-sync'
import frontmatter from '../../lib/read-frontmatter.js'
import { loadPages, loadPageMap } from '../../lib/page-data.js'
import patterns from '../../lib/patterns.js'
import loadRedirects from '../../lib/redirects/precompile.js'
import xAllVersions from '../../lib/all-versions.js'

const allVersions = Object.keys(xAllVersions)

// get all content and data files
const files = ['content', 'data']
  .map((dir) => {
    return walk(path.join(process.cwd(), dir), {
      includeBasePath: true,
      directories: false,
    }).filter((file) => file.endsWith('.md') && !file.endsWith('README.md'))
  })
  .flat()

// match [foo](/v3) and [bar](/v4) Markdown links
const linkRegex = /\(\/v[34].*?\)/g

main()

async function main() {
  // we need to load the pages so we can get the redirects
  const englishPages = (await loadPages()).filter((p) => p.languageCode === 'en')
  const englishPageMap = await loadPageMap(englishPages)
  const redirects = await loadRedirects(englishPages, englishPageMap)

  for (const file of files) {
    const { data, content } = frontmatter(fs.readFileSync(file, 'utf8'))

    const links = content.match(linkRegex)
    if (!links) continue

    // remove parentheses: (/v3) -> /v3
    // also remove trailing slash before closing parens if there is one
    const devLinks = links.map((link) => link.replace('(', '').replace(/\/?\)/, ''))

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

      // re-add the fragment after removing any fragment added via the redirect
      // otherwise /v3/git/refs/#create-a-reference will become /rest/reference/git#refs#create-a-reference
      // we want to preserve the #create-a-reference fragment, not #refs
      const newLink = fragment ? redirect.replace(/#.+?$/, '') + '#' + fragment : redirect

      // first replace the old link with the new link
      // then remove any trailing slashes
      newContent = newContent.replace(new RegExp(`${devLink}/?(?=\\))`), newLink)
    }

    fs.writeFileSync(file, frontmatter.stringify(newContent, data, { lineWidth: 10000 }))
  }
  console.log('Done!')
}
