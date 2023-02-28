import fs from 'fs'

import { visit } from 'unist-util-visit'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toMarkdown } from 'mdast-util-to-markdown'

import frontmatter from './read-frontmatter.js'
import {
  getPathWithLanguage,
  getPathWithoutLanguage,
  getPathWithoutVersion,
  getVersionStringFromPath,
} from './path-utils.js'
import loadRedirects from './redirects/precompile.js'
import patterns from './patterns.js'
import { loadUnversionedTree, loadPages, loadPageMap } from './page-data.js'
import getRedirect, { splitPathByLanguage } from './get-redirect.js'
import nonEnterpriseDefaultVersion from './non-enterprise-default-version.js'
import { deprecated } from './enterprise-server-releases.js'

// That magical string that can be turned into th actual title when
// we, at runtime, render out the links
const AUTOTITLE = 'AUTOTITLE'

const Options = {
  setAutotitle: false,
  fixHref: false,
  verbose: false,
  strict: false,
}

export async function updateInternalLinks(files, options = {}) {
  const opts = Object.assign({}, Options, options)

  const results = []

  const unversionedTree = await loadUnversionedTree(['en'])
  const pageList = await loadPages(unversionedTree, ['en'])
  const pageMap = await loadPageMap(pageList)
  const redirects = await loadRedirects(pageList)

  const context = {
    pages: pageMap,
    redirects,
    currentLanguage: 'en',
    userLanguage: 'en',
  }

  for (const file of files) {
    try {
      results.push({
        file,
        ...(await updateFile(file, context, opts)),
      })
    } catch (err) {
      console.warn(`The file it tried to process on exception was: ${file}`)
      throw err
    }
  }

  return results
}

async function updateFile(file, context, opts) {
  const rawContent = fs.readFileSync(file, 'utf8')
  const { data, content } = frontmatter(rawContent)

  let newContent = content
  const ast = fromMarkdown(newContent)

  const replacements = []
  const skips = []

  const lineOffset = rawContent.replace(content, '').split(/\n/g).length - 1

  visit(ast, matcher, (node) => {
    const asMarkdown = toMarkdown(node).trim()
    if (content.includes(asMarkdown)) {
      // The title part of the link might be more Markdown.
      // For example...
      //
      //    [This *is* cool](/articles/link)
      //
      // In that case, for this link node, the title is the combined
      // serialization of `node.children`. But `toMarkdown()` always appends
      // `\n` to the serialized output.
      // Now the title, of the above-mentioned example becomes 'This *is* cool'
      // which is unlikely to attempt to be the documents title, that
      // it links to.
      const title = node.children.map((child) => toMarkdown(child).slice(0, -1)).join('')

      let newTitle = title
      let newHref = node.url

      const hasQuotesAroundLink = content.includes(`"${asMarkdown}`)

      if (opts.setAutotitle) {
        if (hasQuotesAroundLink) {
          /**
           * Note! A lot of internal links are bullet points like:
           *
           *     - [Creating a repository](/articles/create-a-repo)
           *     - [Forking a repository](/articles/fork-a-repo)
           * or
           *     1. [Set your username in Git](/github/getting-started-with-github/setting-your-username-in-git).
           *     1. [Set your commit email address in Git](/articles/setting-your-commit-email-address).
           *
           * Perhaps we could recognize them as such an consider them
           * matches anyway. In particular if the title is make up
           * a leading capital letter any most rest in lower case.
           */

          if (title !== AUTOTITLE) {
            newTitle = AUTOTITLE
          }
        } else {
          skips.push({
            reason: 'Not leading by a quotation (")',
            asMarkdown,
          })
        }
      }
      if (opts.fixHref) {
        try {
          const betterHref = getNewHref(node.url, context, opts)
          // getNewHref() might return a deliberate `undefined` if the
          // new href value could not be computed for some reason.
          if (betterHref !== undefined) {
            newHref = betterHref
          }
        } catch (err) {
          console.error('File in process:', file)
          throw err
        }
      }
      const newAsMarkdown = `[${newTitle}](${newHref})`
      if (asMarkdown !== newAsMarkdown) {
        // Something can be improved!
        const column = node.position.start.column
        const line = node.position.start.line + lineOffset
        replacements.push({
          asMarkdown,
          newAsMarkdown,
          line,
          column,
        })
        newContent = newContent.replace(asMarkdown, newAsMarkdown)
      }
    } else if (opts.verbose) {
      console.warn(
        `Unable to find link as Markdown ('${asMarkdown}') in the source content (${file})`
      )
    }
  })

  return {
    data,
    content,
    newContent,
    replacements,
    skips,
  }
}

function matcher(node) {
  if (node.type === 'link' && node.url) {
    const { url } = node
    if (url.startsWith('/') || url.startsWith('./')) {
      // Sometimes there's a link to view the asset as a separate link.
      // Skip these because they ultimately link to an actual Page.
      if (url.startsWith('/assets') || url.startsWith('/public/')) {
        return false
      }

      // If a link uses Liquid we can't process it. It would require full
      // rendering which this script is not doing.
      if (url.includes('{{') || url.includes('{%')) {
        return false
      }

      // Sometimes we link to archived enterprise-server versions. These
      // can never be updated because although they appear to be internal,
      // they are, in a sense external. For example:
      // See "[This old thing](/enterprise-server@3.1/some/page)".
      // Skip these
      const version = getVersionStringFromPath(url)
      if (
        version &&
        version.startsWith('enterprise-server@') &&
        deprecated.includes(version.replace('enterprise-server@', ''))
      ) {
        return false
      }

      // Really old versions like `/enterprise/2.1` don't need to be
      // corrected because they're deliberately pointing to archived
      // versions.
      if (patterns.getEnterpriseVersionNumber.test(url)) {
        return false
      }

      return true
    }
  }
  return false
}

function getNewHref(href, context, opts) {
  const { currentLanguage } = context
  const parsed = new URL(href, 'https://docs.github.com')
  const hash = parsed.hash
  const search = parsed.search
  const pure = parsed.pathname
  let newHref = pure.replace(patterns.trailingSlash, '$1')

  // Before testing if it redirects takes it somewhere, we temporarily
  // pretend it's already prefixed for English (/en)
  const [language, withoutLanguage] = splitPathByLanguage(newHref, currentLanguage)
  if (withoutLanguage !== newHref) {
    // It means the link already had a language in it
    if (opts.strict) {
      throw new Error(`Unable to cope with internal links with hardcoded language (${newHref})`)
    } else {
      console.warn(`WARNING: Link had hardcoded language in it (${href})`)
      return
    }
  }
  const newHrefWithLanguage = getPathWithLanguage(withoutLanguage, language)
  const redirected = getRedirect(newHrefWithLanguage, context)

  // If it comes back as `undefined` it means it didn't need to be
  // redirected, specifically.
  // Optionally, we could skip this whole step of checking for completely
  // broken internal links because other tools will later check that.
  if (redirected === undefined) {
    if (!context.pages[newHrefWithLanguage]) {
      // If this happens, it's very possible that it's a broken link
      if (opts.strict) {
        throw new Error(`Neither redirecting nor findable '${href}'`)
      } else {
        console.warn(
          `WARNING: A link appears to be broken. Neither redirect or a findable page (${href})`
        )
        return
      }
    }
  }

  if (redirected) {
    // The getRedirect() function will produce a final URL that the user
    // can use, but that means it also injects the language in there.
    // For updating the content statically, we don't want that.
    // Note: It could be an idea to somehow tell getRedirect() to not
    // bother but perhaps it adds unnecessarily complexity to a function that
    // has to work perfectly for runtime.
    const redirectedWithoutLanguage = getPathWithoutLanguage(redirected)
    // Some paths can't be viewed in fre-pro-team so the getRedirect()
    // function will inject the version that you're supposed to go to.
    // For example `/enterprise/admin/guides/installation/configuring-a-hostname`
    // redirects to `/enterprise-server@3.7/admin/configuration/configuring-...`
    // (at the time of writing) which is good when you're actually clicking
    // the link but not good when we're trying to update the source
    // content.
    // The `getPathWithoutVersion` function doesn't change the input if
    // the URL passed doesn't appear to have a valid version in it already.
    // I.e. `getPathWithLanguage('/get-started') === '/get-started``
    // but `getPathWithLanguage('/enterprise-server@3.8/get-started') === '/get-started``
    // But hang on, in some rare cases the content deliberately linked to
    // a specific version. If that's the case, leave it like that.
    // There's another exception! Some links have the `/free-pro-team@latest/`
    // prefix. The `getRedirect()` will always remove that. If that's the case
    // we always want respect that and put it back in.
    if (withoutLanguage.includes(`/${nonEnterpriseDefaultVersion}/`)) {
      newHref = `/${nonEnterpriseDefaultVersion}${redirectedWithoutLanguage}`
    } else if (withoutLanguage.startsWith('/enterprise-server/')) {
      const msg =
        "Old /enterprise-server/ links that don't include a @version is no longer supported. " +
        'If you see this, manually fix that link to use enterprise-server@latest.'
      if (opts.strict) {
        throw new Error(msg)
      } else {
        console.warn(msg)
        return
      }
    } else if (withoutLanguage.startsWith('/enterprise-server@latest')) {
      // getRedirect() will always replace `enterprise-server@latest` with
      // whatever the latest number is. E.g. `enterprise-server@3.9`.
      // But we have to "undo" that.
      newHref = `/enterprise-server@latest${getPathWithoutVersion(redirectedWithoutLanguage)}`
    } else if (getPathWithoutVersion(withoutLanguage) !== withoutLanguage) {
      newHref = redirectedWithoutLanguage
    } else {
      newHref = getPathWithoutVersion(redirectedWithoutLanguage)
    }
  }

  if (search) {
    newHref += search
  }
  if (hash) {
    newHref += hash
  }
  return newHref
}
