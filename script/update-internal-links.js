#!/usr/bin/env node
import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import walk from 'walk-sync'
import astFromMarkdown from 'mdast-util-from-markdown'
import visit from 'unist-util-visit'
import { loadPages, loadPageMap } from '../lib/page-data.js'
import loadSiteData from '../lib/site-data.js'
import loadRedirects from '../lib/redirects/precompile.js'
import { getPathWithoutLanguage, getPathWithoutVersion } from '../lib/path-utils.js'
import { allVersionKeys } from '../lib/all-versions.js'
import frontmatter from '../lib/read-frontmatter.js'
import renderContent from '../lib/render-content/index.js'
import patterns from '../lib/patterns.js'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const walkFiles = (pathToWalk) => {
  return walk(path.posix.join(__dirname, '..', pathToWalk), {
    includeBasePath: true,
    directories: false,
  })
    .filter((file) => file.endsWith('.md') && !file.endsWith('README.md'))
    .filter((file) => !file.includes('/early-access/')) // ignore EA for now
}

const allFiles = walkFiles('content').concat(walkFiles('data'))

// The script will throw an error if it finds any markup not represented here.
// Hacky but it captures the current rare edge cases.
const linkInlineMarkup = {
  emphasis: '*',
  strong: '**',
}

const currentVersionWithSpacesRegex = /\/enterprise\/{{ currentVersion }}/g
const currentVersionWithoutSpaces = '/enterprise/{{currentVersion}}'

// [start-readme]
//
// Run this script to find internal links in all content and data Markdown files, check if either the title or link
// (or both) are outdated, and automatically update them if so.
//
// Exceptions:
// * Links with fragments (e.g., [Bar](/foo#bar)) will get their root links updated if necessary, but the fragment
// and title will be unchanged (e.g., [Bar](/noo#bar)).
// * Links with hardcoded versions (e.g., [Foo](/enterprise-server/baz)) will get their root links updated if
// necessary, but the hardcoded versions will be preserved (e.g., [Foo](/enterprise-server/qux)).
// * Links with Liquid in the titles will have their root links updated if necessary, but the titles will be preserved.
//
// [end-readme]

main()

async function main() {
  console.log('Working...')
  const pageList = await loadPages()
  const pageMap = await loadPageMap(pageList)
  const redirects = await loadRedirects(pageList)
  const site = await loadSiteData()

  const context = {
    pages: pageMap,
    redirects,
    site: site.en.site,
    currentLanguage: 'en',
  }

  for (const file of allFiles) {
    const { data, content } = frontmatter(fs.readFileSync(file, 'utf8'))
    let newContent = content

    // Do a blanket find-replace for /enterprise/{{ currentVersion }}/ to /enterprise/{{currentVersion}}/
    // so that the AST parser recognizes the link as a link node. The spaces prevent it from doing so.
    newContent = newContent.replace(currentVersionWithSpacesRegex, currentVersionWithoutSpaces)

    const ast = astFromMarkdown(newContent)

    // We can't do async functions within visit, so gather the nodes upfront
    const nodesPerFile = []

    visit(ast, (node) => {
      if (node.type !== 'link') return
      if (!node.url.startsWith('/')) return
      if (node.url.startsWith('/assets')) return
      if (node.url.startsWith('/public')) return
      if (node.url.includes('/11.10.340/')) return
      if (node.url.includes('/2.1/')) return
      if (node.url === '/') return

      nodesPerFile.push(node)
    })

    // For every Markdown link...
    for (const node of nodesPerFile) {
      const oldLink = node.url

      // Find and preserve any inline markup in link titles, like [*Foo*](/foo)
      let inlineMarkup = ''
      if (node.children[0].children) {
        inlineMarkup = linkInlineMarkup[node.children[0].type]

        if (!inlineMarkup) {
          console.error(`Cannot find an inline markup entry for ${node.children[0].type}!`)
          process.exit(1)
        }
      }

      const oldTitle = node.children[0].value || node.children[0].children[0].value
      const oldMarkdownLink = `[${inlineMarkup}${oldTitle}${inlineMarkup}](${oldLink})`

      // As a blanket rule, only update titles in links that begin with quotes. (Many links
      // have punctuation before the closing quotes, so we'll only check for opening quotes.)
      // Update: "[Foo](/foo)
      // Do not update: [Bar](/bar)
      const hasQuotesAroundLink = newContent.includes(`"${oldMarkdownLink}`)

      let foundPage, fragmentMatch, versionMatch

      // Run through all supported versions...
      for (const version of allVersionKeys) {
        context.currentVersion = version
        // Render the link for each version using the renderContent pipeline, which includes the rewrite-local-links plugin.
        const $ = await renderContent(oldMarkdownLink, context, { cheerioObject: true })
        let linkToCheck = $('a').attr('href')

        // We need to preserve fragments and hardcoded versions if any are found.
        fragmentMatch = oldLink.match(/(#.*$)/)
        versionMatch = oldLink.match(/(enterprise-server(?:@.[^/]*?)?)\//)

        // Remove the fragment for now.
        linkToCheck = linkToCheck.replace(/#.*$/, '').replace(patterns.trailingSlash, '$1')

        // Try to find the rendered link in the set of pages!
        foundPage = findPage(linkToCheck, pageMap, redirects)

        // Once a page is found for a particular version, exit immediately; we don't need to check the other versions
        // because all we care about is the page title and path.
        if (foundPage) {
          break
        }
      }

      if (!foundPage) {
        console.error(
          `Can't find link in pageMap! ${oldLink} in ${file.replace(process.cwd(), '')}`
        )
        process.exit(1)
      }

      // If the original link includes a fragment OR the original title includes Liquid, do not change;
      // otherwise, use the found page title. (We don't want to update the title if a fragment is found because
      // the title likely points to the fragment section header, not the page title.)
      const newTitle =
        fragmentMatch || oldTitle.includes('{%') || !hasQuotesAroundLink
          ? oldTitle
          : foundPage.title

      // If the original link includes a fragment, append it to the found page path.
      // Also remove the language code because Markdown links don't include language codes.
      let newLink = getPathWithoutLanguage(
        fragmentMatch ? foundPage.path + fragmentMatch[1] : foundPage.path
      )

      // If the original link includes a hardcoded version, preserve it; otherwise, remove versioning
      // because Markdown links don't include versioning.
      newLink = versionMatch
        ? `/${versionMatch[1]}${getPathWithoutVersion(newLink)}`
        : getPathWithoutVersion(newLink)

      let newMarkdownLink = `[${inlineMarkup}${newTitle}${inlineMarkup}](${newLink})`

      // Handle a few misplaced quotation marks.
      if (oldMarkdownLink.includes('["')) {
        newMarkdownLink = `"${newMarkdownLink}`
      }

      // Stream the results to console as we find them.
      if (oldMarkdownLink !== newMarkdownLink) {
        console.log('old link', oldMarkdownLink)
        console.log('new link', newMarkdownLink)
        console.log('-------')
      }

      newContent = newContent.replace(oldMarkdownLink, newMarkdownLink)
    }

    fs.writeFileSync(file, frontmatter.stringify(newContent, data, { lineWidth: 10000 }))
  }

  console.log('Done!')
}

function findPage(tryPath, pageMap, redirects) {
  if (pageMap[tryPath]) {
    return {
      title: pageMap[tryPath].title,
      path: tryPath,
    }
  }

  if (pageMap[redirects[tryPath]]) {
    return {
      title: pageMap[redirects[tryPath]].title,
      path: redirects[tryPath],
    }
  }
}
