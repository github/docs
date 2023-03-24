#!/usr/bin/env node

import { readFile, writeFile, copyFile } from 'fs/promises'
import { existsSync } from 'fs'
import walk from 'walk-sync'
import mkdirp from 'mkdirp'
import { execSync } from 'child_process'
import path from 'path'
import matter from 'gray-matter'
import rimraf from 'rimraf'
import got from 'got'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { visitParents } from 'unist-util-visit-parents'
import { visit, SKIP } from 'unist-util-visit'
import { remove } from 'unist-util-remove'
import { toMarkdown } from 'mdast-util-to-markdown'

import { languageKeys } from '../../../lib/languages.js'

const { targetDirectory, sourceDirectory, frontmatterDefaults, removeKeywords, markdownPrefix } =
  JSON.parse(await readFile(path.join('src/codeql-cli/lib/config.json'), 'utf-8'))
const RELATIVE_LINK_PATH = targetDirectory.replace('content', '')
const SOURCE_REPO = sourceDirectory.split('/')[0]
const TEMP_DIRECTORY = path.join(SOURCE_REPO, 'tempCliDocs')
const MARKDOWN_COMMENT = '\n\n<!-- Content after this section is automatically generated -->\n\n'
const LAST_PRIMARY_HEADING = 'Options'
const HEADING_BEGIN = '::: {.option}\n'
const END_SECTION = '\n:::'
const PROGRAM_SECTION = '::: {.program}\n'

main()

async function main() {
  if (!existsSync(SOURCE_REPO)) {
    const errorMessage = `Source directory ${SOURCE_REPO} does not exist. Please clone the repo.`
    throw new Error(errorMessage)
  }
  const isPandoc = execSync('pandoc --version', { encoding: 'utf8' })
  if (!isPandoc.startsWith('pandoc')) {
    throw new Error(
      'You must install pandoc to run this script. See https://pandoc.org/installing.html.'
    )
  }

  // refresh the temp directory
  rimraf.sync(TEMP_DIRECTORY)
  await mkdirp(TEMP_DIRECTORY)
  // make sure the target directory exists
  if (!existsSync(targetDirectory)) {
    await mkdirp(targetDirectory)
  }

  // copy the raw rst files to the temp directory and convert them to Markdown
  // using pandoc
  const sourceFiles = walk(sourceDirectory, { includeBasePath: true }).filter((filename) =>
    filename.endsWith('.rst')
  )
  for (const file of sourceFiles) {
    const tempFilePath = `${TEMP_DIRECTORY}/${path.basename(file)}`
    if (tempFilePath.includes(' ') || tempFilePath.includes('..')) {
      const errorMsg = `The ${tempFilePath} has a space or .. in the path.`
      throw new Error(errorMsg)
    }
    await copyFile(file, tempFilePath)

    // Convert the rst files to Markdown
    const markdownFilename = path.basename(file).replace('.rst', '.md')
    const outputFilepath = `${TEMP_DIRECTORY}/${markdownFilename}`
    if (outputFilepath.includes(' ') || outputFilepath.includes('..')) {
      const errorMsg = `The ${outputFilepath} has a space or .. in the path.`
      throw new Error(errorMsg)
    }

    execSync(`pandoc ${tempFilePath} -f rst -t commonmark_x -o ${outputFilepath}`)
  }

  const markdownFiles = walk(TEMP_DIRECTORY, { includeBasePath: true }).filter((file) =>
    file.endsWith('.md')
  )
  for (const file of markdownFiles) {
    const sourceContent = await readFile(file, 'utf8')
    const ast = fromMarkdown(sourceContent)

    let depth = 0
    let secondaryOptions = false
    const frontmatter = { title: '', ...frontmatterDefaults }
    const akaMsLinkMatches = []

    // Visit all heading nodes
    const headingMatcher = (node) => node.type === 'heading'
    visit(ast, headingMatcher, (node) => {
      // This is the title of the article, so we want to store it to
      // the frontmatter
      if (node.depth === 1) {
        frontmatter.title = node.children[0].value
      }

      // The level 2 heading "Options" should be displayed as "Primary options"
      if (node.depth === 2 && node.children[0].value === 'Options') {
        node.children[0].value = 'Primary options'
      }

      // There are some headings that include a title followed by
      // some markup that looks like
      // {#options-to-configure-the-package-manager.}
      if (node.children[0].value.includes('{#')) {
        node.children[0].value = node.children[0].value.split('{#')[0].trim()
      }

      // This is a workaround for the secondary options that are at the
      // wrong heading level in the source rst files. Everything after the
      // headings "Synopsis", "Description", and "Options" should be
      // one level higher in Markdown.
      if (secondaryOptions) {
        node.depth = node.depth - 1
      }

      // This needs to be assigned after node.depth is modified above
      depth = node.depth
      if (node.children[0].value === LAST_PRIMARY_HEADING && node.children[0].type === 'text') {
        secondaryOptions = true
      }
    })

    // Visit all remaining nodes with information that needs to be modified
    const matchNodeTypes = ['text', 'code', 'link']
    const matcher = (node) => node && matchNodeTypes.includes(node.type)
    visitParents(ast, matcher, (node, ancestors) => {
      // Add the copy button to the example command
      if (node.type === 'code' && node.value.startsWith(`codeql ${frontmatter.title}`)) {
        node.lang = 'shell{:copy}'
      }

      // This is the beginning of a secondary options section. For example,
      // "Output format options." The rst file doesn't have a heading level
      // for these, so we want to make it a Markdown heading at one level
      // higher than the previous heading (which is a level lower than Options)
      if (node.type === 'text' && node.value && node.value.includes(HEADING_BEGIN)) {
        node.value = node.value.replace(HEADING_BEGIN, '')
        // Ancestors are ordered from the furthest away (root) to the closest.
        // Make the text node's parent a heading node.
        ancestors[ancestors.length - 1].type = 'heading'
        ancestors[ancestors.length - 1].depth = depth + 1
      }

      // There are some keywords like [Plumbing] used by the code comments
      // but we don't want to render them in the docs.
      if (node.type === 'text' && node.value) {
        removeKeywords.forEach((keyword) => {
          if (node.value.includes(keyword)) {
            node.value = node.value.replace(keyword, '').trim()
          }
        })
      }

      // The subsections under the main headings (level 2) are commands
      // and start with either `-` or `<`. We want to make these inline code
      // instead of text.
      if (
        node.type === 'text' &&
        ancestors[ancestors.length - 1].type === 'heading' &&
        (node.value.startsWith('-') || node.value.startsWith('<'))
      ) {
        node.type = 'inlineCode'
      }

      // Removes the strings that denote the end of an options sections. These
      // strings were added during the pandoc conversion.
      if (node.type === 'text' && node.value && node.value.includes(END_SECTION)) {
        node.value = node.value.replace(END_SECTION, '')
      }

      // These are links to other CodeQL CLI docs. We want to convert them to
      // Markdown links. Pandoc converts the rst links to a format that
      // looks like this:
      // `codeql test run<test-run>`{.interpreted-text role=\"doc\"}
      // Link title: codeql test run
      // Relative path: test-run
      // And the rest can be removed.
      // The inline code tag `codeql test run<test-run>` is one node and the
      // string {.interpreted-text role=\"doc\"} is another node.
      if (node.type === 'text' && node.value.includes('{.interpreted-text')) {
        const paragraph = ancestors[ancestors.length - 1].children
        const docRoleTagChild = paragraph.findIndex(
          (child) => child.value && child.value.includes('{.interpreted-text')
        )
        const link = paragraph[docRoleTagChild - 1]
        // If child node is already a link node, skip it
        if (link.type === 'link') {
          return
        }
        // Currently, this applies to the Markdown files generated by Pandoc,
        // but it may not always be the case. If we find an exception to this
        // rule, we may need to modify this code to handle it.
        if (link.type !== 'inlineCode') {
          throw new Error(
            'Unexpected node type. The node before a text node with {.interpreted-text role="doc"} should be an inline code or link node.'
          )
        }

        // Sometimes there are newline characters in the middle of the title
        // or in the link path. We want to remove those.
        const linkText = link.value.split('<')[0].replace(/\n/g, ' ').trim()
        const linkPath = link.value.split('<')[1].split('>')[0].replace(/'\n/g, '').trim()

        // Remove the string {.interpreted-text role="doc"} from this node
        node.value = node.value.replace(/\n/g, ' ').replace('{.interpreted-text role="doc"}', '')
        // Make the previous sibling node a link
        link.type = 'link'
        link.url = `${RELATIVE_LINK_PATH}/${linkPath}`
        link.children = [{ type: 'text', value: linkText }]
        delete link.value
      }

      // Save any nodes that contain aka.ms links so we can convert them later
      if (node.type === 'link' && node.url.includes('aka.ms')) {
        akaMsLinkMatches.push(node)
      }
    })

    // Visit all heading nodes
    const descriptionMatcher = (node) => node.type === 'heading' || node.type === 'paragraph'
    let currentNodeIsDescription = false
    visit(ast, descriptionMatcher, (node) => {
      // The first paragraph sibling to the heading "Description" is the
      // node that contains the first string of the description text. We
      // want to use that first string as the intro frontmatter
      if (node.children[0].value === 'Description' && node.children[0].type === 'text') {
        currentNodeIsDescription = true
      }
      if (currentNodeIsDescription && node.type === 'paragraph') {
        frontmatter.intro = node.children[0].value
        currentNodeIsDescription = false
        return SKIP
      }
    })

    // Convert all aka.ms links to the docs.github.com relative path
    await Promise.all(
      akaMsLinkMatches.map(async (node) => {
        const url = await getRedirect(node.url)
        // The aka.ms urls are Markdown links in the ast already,
        // so we only need to update the url and description
        // rewrite the aka.ms link
        node.children[0].value = 'AUTOTITLE'
        node.url = url
      })
    )

    // remove the program section from the AST
    remove(ast, (node) => node.value && node.value.startsWith(PROGRAM_SECTION))
    // remove the first heading from the AST because that becomes frontmatter
    remove(ast, (node) => node.type === 'heading' && node.depth === 1)

    // write the Markdown file
    const targetFilename = path.join(targetDirectory, path.basename(file))
    const markdownContent = MARKDOWN_COMMENT + `${markdownPrefix}\n\n` + toMarkdown(ast)
    await writeFile(targetFilename, matter.stringify(markdownContent, frontmatter))
  }

  // create or update the index.md file
  const indexFilepath = `${targetDirectory}/index.md`
  const { data, content } = existsSync(indexFilepath)
    ? matter(await readFile(indexFilepath, 'utf-8'))
    : {
        data: {
          title: 'placeholder',
          ...frontmatterDefaults,
          children: [],
        },
        content: '',
      }
  data.children = markdownFiles.map((file) => `/${path.basename(file, '.md')}`).sort()
  await writeFile(indexFilepath, matter.stringify(content, data))
}

// performs a get request for a aka.ms url and returns the redirect url
async function getRedirect(url) {
  let response = null
  try {
    response = await got(url)
  } catch (error) {
    console.error(error)
    const errorMsg = `Failed to get redirect for ${url} when converting aka.ms links to docs.github.com links.`
    throw new Error(errorMsg)
  }

  // The first entry of redirectUrls has the anchor if it exists
  const redirect = response.redirectUrls[0].pathname

  // Some of the aka.ms links have the /en language prefix.
  // This removes all language prefixes from the redirect url.
  const redirectNoLang = languageKeys.reduce((acc, lang) => {
    return acc.replace(`/${lang}`, ``)
  }, redirect)

  if (!redirectNoLang) {
    const errorMsg = `The aka.ms redirected to an unexpected url: ${url}`
    throw new Error(errorMsg)
  }

  return redirectNoLang
}
