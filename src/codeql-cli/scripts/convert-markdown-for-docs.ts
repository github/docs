import { readFile } from 'fs/promises'
import path from 'path'

import { fromMarkdown } from 'mdast-util-from-markdown'
import { toMarkdown } from 'mdast-util-to-markdown'
import { visitParents } from 'unist-util-visit-parents'
import { visit, SKIP } from 'unist-util-visit'
import { remove } from 'unist-util-remove'

import { languageKeys } from '@/languages/lib/languages-server'
import { MARKDOWN_OPTIONS } from '../../content-linter/lib/helpers/unified-formatter-options'

interface Config {
  targetDirectory: string
  removeKeywords: string[]
}

interface FrontmatterDefaults {
  [key: string]: string
}

interface Frontmatter {
  title: string
  intro?: string
  [key: string]: string | undefined
}

interface ConversionResult {
  content: string
  data: Frontmatter
}

// The conversion mutates the mdast tree as loosely typed node bags,
// changing node.type, value, url and so on.
// Model only the fields we touch.
interface MdNode {
  type: string
  value: string
  depth: number
  lang?: string
  meta?: string
  url: string
  title?: string
  children: MdNode[]
}

const config: Config = JSON.parse(
  await readFile(path.join('src/codeql-cli/lib/config.json'), 'utf-8'),
)
const { targetDirectory, removeKeywords } = config
const RELATIVE_LINK_PATH = targetDirectory.replace('content', '')
const LAST_PRIMARY_HEADING = 'Primary options'
const HEADING_BEGIN = '::: {.option}\n'
const END_SECTION = '\n:::'
const PROGRAM_SECTION = '::: {.program}\n'

export async function convertContentToDocs(
  content: string,
  frontmatterDefaults: FrontmatterDefaults = {},
  currentFileName = '',
): Promise<ConversionResult> {
  const ast = fromMarkdown(content)

  let depth = 0
  let secondaryOptions = false
  const frontmatter: Frontmatter = { title: '', ...frontmatterDefaults }
  const akaMsLinkMatches: MdNode[] = []

  visit(ast, 'heading', (rawNode) => {
    const node = rawNode as unknown as MdNode
    if (node.depth === 1) {
      frontmatter.title = node.children[0].value
    }

    // Some headings end with markup like {#options-to-configure-the-package-manager.}
    if (node.children[0].value.includes('{#')) {
      node.children[0].value = node.children[0].value.split('{#')[0].trim()
    }

    // Headings after Primary options sit one level too deep in source rst, so shift them up.
    if (secondaryOptions) {
      node.depth = Math.max(1, Math.min(6, node.depth - 1))
    }

    // Capture depth after secondary options shift changes node.depth.
    depth = node.depth
    if (node.children[0].value === LAST_PRIMARY_HEADING && node.children[0].type === 'text') {
      secondaryOptions = true
    }
  })

  let currentNodeIsDescription = false
  visit(ast, (rawNode) => {
    const node = rawNode as unknown as MdNode
    if (node.type !== 'heading' && node.type !== 'paragraph') return false

    // The first paragraph after Description becomes intro frontmatter.
    if (node.children[0]?.value === 'Description' && node.children[0]?.type === 'text') {
      currentNodeIsDescription = true
    }
    if (currentNodeIsDescription && node.type === 'paragraph') {
      frontmatter.intro = node.children[0]?.value
      currentNodeIsDescription = false
      return SKIP
    }
  })

  const matchNodeTypes = ['text', 'code', 'link']
  visitParents(
    ast,
    (rawNode) => {
      const node = rawNode as unknown as MdNode
      return Boolean(node && matchNodeTypes.includes(node.type))
    },
    (rawNode, rawAncestors) => {
      const node = rawNode as unknown as MdNode
      const ancestors = rawAncestors as unknown as MdNode[]
      if (node.type === 'code' && node.value.startsWith(`codeql ${frontmatter.title}`)) {
        node.lang = 'shell'
        node.meta = 'copy'
      }

      // Secondary labels "Output format options." lack depth; depth+1 nests under last heading.
      if (node.type === 'text' && node.value && node.value.includes(HEADING_BEGIN)) {
        node.value = node.value.replace(HEADING_BEGIN, '')
        // Ancestors run root first, so the last one is the parent.
        ancestors[ancestors.length - 1].type = 'heading'
        ancestors[ancestors.length - 1].depth = Math.max(1, Math.min(6, depth + 1))
      }

      // Source code keywords like [Plumbing] do not belong in docs output.
      if (node.type === 'text' && node.value) {
        for (const keyword of removeKeywords) {
          if (node.value.includes(keyword)) {
            node.value = node.value.replace(keyword, '').trim()
          }
        }
      }

      // Level 2 command headings start with - or <, so render them as inline code.
      if (
        node.type === 'text' &&
        ancestors[ancestors.length - 1].type === 'heading' &&
        (node.value.startsWith('-') || node.value.startsWith('<'))
      ) {
        node.type = 'inlineCode'
      }

      // Pandoc adds a marker at the end of each options section. Remove it.
      if (node.type === 'text' && node.value && node.value.includes(END_SECTION)) {
        node.value = node.value.replace(END_SECTION, '')
      }

      // Pandoc emits "codeql test run<test-run>" as inline code plus role marker; convert to link.
      if (node.type === 'text' && node.value.includes('{.interpreted-text')) {
        const paragraph = ancestors[ancestors.length - 1].children
        const docRoleTagChild = paragraph.findIndex(
          (child: MdNode) => child.value && child.value.includes('{.interpreted-text'),
        )
        const link = paragraph[docRoleTagChild - 1]
        if (link.type === 'link') {
          return
        }
        if (link.type !== 'inlineCode') {
          throw new Error(
            'Unexpected node type. The node before a text node with {.interpreted-text role="doc"} should be an inline code or link node.',
          )
        }

        // Titles and link paths sometimes contain newlines.
        const linkText = link.value.split('<')[0].replace(/\n/g, ' ').trim()
        const linkPath = link.value.split('<')[1].split('>')[0].replace(/'\n/g, '').trim()

        node.value = node.value.replace(/\n/g, ' ').replace('{.interpreted-text role="doc"}', '')

        // Links to the file being converted would be circular.
        const currentFileBaseName = currentFileName.replace('.md', '')
        if (currentFileBaseName && linkPath === currentFileBaseName) {
          link.type = 'text'
          link.value = linkText
        } else {
          link.type = 'link'
          link.url = `${RELATIVE_LINK_PATH}/${linkPath}`
          link.children = [{ type: 'text', value: linkText }] as unknown as MdNode[]
          delete (link as { value?: string }).value
        }
      }

      // Resolve aka.ms redirects after the tree walk, because visit callbacks cannot await.
      if (node.type === 'link' && node.url.includes('aka.ms')) {
        akaMsLinkMatches.push(node)
      }

      // Render https://containers.GHEHOSTNAME example links as inline code so the link checker skips them.
      if (node.type === 'link' && node.url.startsWith('https://containers')) {
        // Strip the double quotes from the nodes either side.
        const nodeBefore = ancestors[ancestors.length - 1].children[0]
        const nodeAfter = ancestors[ancestors.length - 1].children[2]
        if (nodeBefore.value && nodeBefore.value.endsWith('"')) {
          nodeBefore.value = nodeBefore.value.slice(0, -1)
        }
        if (nodeAfter.value && nodeAfter.value.startsWith('"')) {
          nodeAfter.value = nodeAfter.value.slice(1)
        }
        const inlineCode = node as {
          type: string
          value: string
          url?: string
          title?: string
          children?: MdNode[]
        }
        inlineCode.type = 'inlineCode'
        inlineCode.value = node.url
        inlineCode.title = undefined
        inlineCode.url = undefined
        inlineCode.children = undefined
      }
    },
  )

  // aka.ms redirects supply the docs.github.com relative path.
  await Promise.all(
    akaMsLinkMatches.map(async (node: MdNode) => {
      const url = await getRedirect(node.url)
      // Existing Markdown links only need AUTOTITLE text and the resolved URL.
      if (node.children[0]) {
        node.children[0].value = 'AUTOTITLE'
      }
      node.url = url
    }),
  )

  remove(ast, (rawNode) => {
    const node = rawNode as unknown as MdNode
    return Boolean(node.value && node.value.startsWith(PROGRAM_SECTION))
  })
  // Level 1 headings become the frontmatter title, so drop them from the body.
  remove(ast, (rawNode) => {
    const node = rawNode as unknown as MdNode
    return node.type === 'heading' && node.depth === 1
  })

  return {
    content: toMarkdown(ast, MARKDOWN_OPTIONS as Parameters<typeof toMarkdown>[1]),
    data: frontmatter,
  }
}

async function getRedirect(url: string): Promise<string> {
  let response: Response
  try {
    response = await fetch(url, { redirect: 'manual' })
    if (!response.ok && response.status !== 301 && response.status !== 302) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
  } catch (error) {
    console.error(error)
    const errorMsg = `Failed to get redirect for ${url} when converting aka.ms links to docs.github.com links.`
    throw new Error(errorMsg)
  }

  const redirectLocation = response.headers.get('location')
  if (!redirectLocation) {
    throw new Error(`No redirect location found for ${url}`)
  }

  const redirect = new URL(redirectLocation).pathname

  // Some aka.ms links redirect to a URL with a language prefix such as /en.
  const parts = redirect.split('/')
  if (parts.length > 1 && languageKeys.includes(parts[1])) {
    parts.splice(1, 1)
  }

  return parts.join('/')
}
