import fs from 'fs'
import path from 'path'

import { visit } from 'unist-util-visit'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { toMarkdown } from 'mdast-util-to-markdown'
import yaml from 'js-yaml'

import frontmatter from '#src/frame/lib/read-frontmatter.js'
import {
  getPathWithLanguage,
  getPathWithoutLanguage,
  getPathWithoutVersion,
  getVersionStringFromPath,
} from '#src/frame/lib/path-utils.js'
import loadRedirects from '#src/redirects/lib/precompile.js'
import patterns from '#src/frame/lib/patterns.js'
import { loadUnversionedTree, loadPages, loadPageMap } from '#src/frame/lib/page-data.js'
import getRedirect, { splitPathByLanguage } from '#src/redirects/lib/get-redirect.js'
import nonEnterpriseDefaultVersion from '#src/versions/lib/non-enterprise-default-version.js'
import { deprecated } from '#src/versions/lib/enterprise-server-releases.js'

// That magical string that can be turned into the actual title when
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

  // Since this function can process both `.md` and `.yml` files,
  // when treating a `.md` file, the `data` from `frontmatter(rawContent)`
  // is easy. But when dealing a file like `data/learning-tracks/foo.yml`
  // then the `frontmatter(rawContent).data` always becomes `{}`.
  // And since the Yaml file might contain arrays of internal linked
  // pathnames, we have to re-read it fully.
  if (file.endsWith('.yml')) {
    Object.assign(data, yaml.load(content))
  }

  let newContent = content
  const ast = fromMarkdown(newContent)

  const replacements = []
  const warnings = []

  const newData = structuredClone(data)

  const ANY = Symbol('any')
  const IS_ARRAY = Symbol('is array')

  // This configuration determines which nested things to bother looking
  // into.
  const HAS_LINKS = {
    featuredLinks: ['gettingStarted', 'startHere', 'guideCards', 'popular'],
    introLinks: ANY,
    includeGuides: IS_ARRAY,
  }

  if (
    file.split(path.sep).includes('data') &&
    file.split(path.sep).includes('learning-tracks') &&
    file.endsWith('.yml')
  ) {
    // data/learning-tracks/**/*.yml files are different because the keys
    // are arbitrary but what they might all have in common is a key
    // there called `guides`
    for (const key of Object.keys(data)) {
      HAS_LINKS[key] = ['guides']
    }
  }

  for (const [key, seek] of Object.entries(HAS_LINKS)) {
    if (!(key in data)) {
      continue
    }
    try {
      if (Array.isArray(data[key])) {
        if ((Array.isArray(seek) && seek.includes(key)) || seek === IS_ARRAY || seek === ANY) {
          const better = getNewFrontmatterLinkList(data[key], context, opts, file, rawContent)
          if (!equalArray(better, data[key])) {
            newData[key] = better
          }
        }
      } else {
        for (const [group, thing] of Object.entries(data[key])) {
          if (Array.isArray(thing)) {
            if (
              (Array.isArray(seek) && seek.includes(group)) ||
              seek === IS_ARRAY ||
              seek === ANY
            ) {
              const better = getNewFrontmatterLinkList(thing, context, opts, file, rawContent)
              if (!equalArray(better, thing)) {
                newData[key][group] = better
              }
            }
          } else if (typeof thing === 'string' && thing.startsWith('/')) {
            const better = getNewFrontmatterLinkList([thing], context, opts, file, rawContent)
            if (!equalArray(better, [thing])) {
              newData[key][group] = better[0]
            }
          }
        }
      }
    } catch (error) {
      // When in strict mode, if it throws an error that stacktrace will
      // bubble up to the CLI. And the CLI will mention which file it
      // was processing when it failed. But we have a valuable piece of
      // information here about which frontmatter key it was that failed.
      console.warn(`The frontmatter key it processed and failed was '${key}'`)
      throw error
    }
  }

  const lineOffset = rawContent.replace(content, '').split(/\n/g).length - 1

  visit(ast, definitionMatcher, (node) => {
    const asMarkdown = toMarkdown(node).trim()
    // E.g. `[foo]: /bar`
    if (content.includes(asMarkdown)) {
      if (opts.fixHref) {
        let newHref = node.url
        const { label } = node
        const betterHref = getNewHref(newHref, context, opts, file)
        // getNewHref() might return a deliberate `undefined` if the
        // new href value could not be computed for some reason.
        if (betterHref !== undefined) {
          newHref = betterHref
        }
        const newAsMarkdown = `[${label}]: ${newHref}`
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
      }
    }
  })

  visit(ast, linkMatcher, (node) => {
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
      // Now the title of the above-mentioned example becomes 'This *is* cool'
      // which is unlikely to attempt to be the document's title, that
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
           * Perhaps we could recognize them as such and consider them
           * matches anyway. In particular if the title consists of
           * a leading capital letter and most of the rest lower case.
           */

          if (title !== AUTOTITLE) {
            newTitle = AUTOTITLE
          }
        } else {
          /**
           * The Markdown link sometimes is written like this:
           *
           *   ["This is the title](/foo/bar)."
           *
           * or...
           *
           *   ["This is the title"](/foo/bar).
           */
          if (node.children && node.children.length > 0 && node.children[0].value) {
            if (singleStartingQuote(node.children[0].value)) {
              const column = node.position.start.column
              const line = node.position.start.line + lineOffset
              warnings.push({
                warning: 'Starts with a single " inside the text',
                asMarkdown,
                line,
                column,
              })
            } else if (isSimpleQuote(node.children[0].value)) {
              const column = node.position.start.column
              const line = node.position.start.line + lineOffset
              warnings.push({
                warning: 'Starts and ends with a " inside the text',
                asMarkdown,
                line,
                column,
              })
            }
          }
        }
      }
      if (opts.fixHref) {
        const betterHref = getNewHref(node.url, context, opts, file)
        // getNewHref() might return a deliberate `undefined` if the
        // new href value could not be computed for some reason.
        if (betterHref !== undefined) {
          newHref = betterHref
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
        `Unable to find link as Markdown ('${asMarkdown}') in the source content (${file})`,
      )
    }
  })

  return {
    data,
    content,
    rawContent,
    newContent,
    replacements,
    warnings,
    newData,
  }
}

function definitionMatcher(node) {
  const { type, url } = node
  if (type === 'definition' && url) {
    return url.startsWith('/')
  }
  return false
}

function linkMatcher(node) {
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

function getNewFrontmatterLinkList(list, context, opts, file, rawContent) {
  /**
   * The `list` is expected to all be strings. Sometimes they're like this:
   *
   *   /search-github/searching-on-github/searching-for-repositories
   *
   * Sometimes they're like this:
   *
   *   {% ifversion fpt or ghec or ghes > 3.4 %}/pages/getting-started-with-github-pages{% endif %}
   *
   * In the case of Liquid, we have to temporarily remove it to be able to
   * test the path as a URL.
   **/

  const better = []
  for (const entry of list) {
    if (/{%\s*else\s*%}/.test(entry)) {
      console.warn(`Skipping frontmatter link with {% else %} in it: ${entry}. (file: ${file})`)
      better.push(entry)
      continue
    }
    const pure = stripLiquid(entry)
    let asURL = '/en'
    if (!pure.startsWith('/')) {
      asURL += '/'
    }
    asURL += pure
    if (asURL in context.pages) {
      better.push(entry)
    } else {
      const redirected = getRedirect(asURL, context)
      if (redirected === undefined) {
        const lineNumber = findLineNumber(entry, rawContent)
        const msg =
          'A frontmatter link appears to be broken. ' +
          `Neither redirect or a findable page: ${pure}. (file: ${file} line: ${
            lineNumber || 'unknown'
          })`

        if (opts.strict) {
          throw new Error(msg)
        }
        console.warn(`WARNING: ${msg}`)
        better.push(entry)
      } else {
        // Perhaps it just redirected to a specific version
        const redirectedWithoutLanguage = getPathWithoutLanguage(redirected)
        const asURLWithoutVersion = getPathWithoutVersion(redirectedWithoutLanguage)
        if (asURLWithoutVersion === pure) {
          better.push(entry)
        } else {
          better.push(entry.replace(pure, asURLWithoutVersion))
        }
      }
    }
  }
  return better
}

// Try to return the line in the raw content that entry was on.
// It's hard to know exactly because the `entry` is the result of parsing
// the YAML, most likely, from the front
function findLineNumber(entry, rawContent) {
  let number = 0
  for (const line of rawContent.split(/\n/g)) {
    number++
    if (line.endsWith(entry) && line.includes(` ${entry}`)) {
      return number
    }
  }

  return null
}

const liquidStartRex = /^{%-?\s*ifversion .+?\s*%}/
const liquidEndRex = /{%-?\s*endif\s*-?%}$/

// Return
//
//    /foo/bar
//
// if the text input was
//
//   {% ifversion ghes%}/foo/bar{%endif %}
//
// And if no liquid, just return as is.
function stripLiquid(text) {
  if (liquidStartRex.test(text) && liquidEndRex.test(text)) {
    return text.replace(liquidStartRex, '').replace(liquidEndRex, '').trim()
  } else if (text.includes('{')) {
    throw new Error(`Unsupported Liquid in frontmatter link list (${text})`)
  }
  return text
}

function equalArray(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i])
}

function getNewHref(href, context, opts, file) {
  const { currentLanguage } = context
  const parsed = new URL(href, 'https://docs.github.com')
  const hash = parsed.hash
  const search = parsed.search
  const pure = parsed.pathname
  let newHref = pure.replace(patterns.trailingSlash, '$1')

  // Before testing if it redirects somewhere, we temporarily
  // pretend it's already prefixed for English (/en)
  const [language, withoutLanguage] = splitPathByLanguage(newHref, currentLanguage)
  if (withoutLanguage !== newHref) {
    // It means the link already had a language in it
    const msg = `Unable to cope with internal links with hardcoded language '${newHref}' (file: ${file})`
    if (opts.strict) {
      throw new Error(msg)
    } else {
      console.warn(`WARNING: ${msg}`)
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
      const msg = `A link appears to be broken. Neither redirect or a findable page '${href}' (${file})`
      if (opts.strict) {
        throw new Error(msg)
      } else {
        console.warn(`WARNING: ${msg}`)
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
    // Some paths can't be viewed in free-pro-team so the getRedirect()
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
        "Old /enterprise-server/ links that don't include a @version are no longer supported. " +
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

function singleStartingQuote(text) {
  return text.startsWith('"') && text.split('"').length === 2
}

function isSimpleQuote(text) {
  return text.startsWith('"') && text.endsWith('"') && text.split('"').length === 3
}
