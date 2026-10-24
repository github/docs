import { fileURLToPath } from 'url'
import path from 'path'
import { load } from 'js-yaml'
import fs from 'fs/promises'

import slash from 'slash'
import walk from 'walk-sync'
import { zip } from 'lodash-es'
import { beforeAll, describe, expect, test } from 'vitest'

import languages from '@/languages/lib/languages-server'
import { getDiffFiles } from '../lib/diff-files'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const rootDir = path.join(__dirname, '../../..')
const variablesDir = path.join(rootDir, 'data/variables')
const glossariesDir = path.join(rootDir, 'data/glossaries')
const fbvDir = path.join(rootDir, 'data/features')

const languageCodes = Object.keys(languages)

// Contributors use TODOCS as a placeholder; this test catches leftovers in Markdown and YAML.
const placeholder = 'TODOCS'
const placeholderRegex = new RegExp(`\\b${placeholder}\\b`, 'gi')

// Matches relative Markdown link targets, including definitions and space-before-target links.
// Examples: "[Billing](billing/usage)" and "[Billing]: billing/usage".
// Excludes anchors, root-relative paths, external URLs, tel/mailto URLs, and Liquid targets.
// Examples: "[Email](mailto:docs@example.com)" and "[Phone](tel:555-0100)".
const relativeArticleLinkRegex =
  /(?=^|[^\]]\s*)\[[^\]]+\](?::\n?[ \t]+|\s*\()(?!\/|#|https?:\/\/|tel:|mailto:|\{[%{]\s*)[^)\s]+(?:(?:\s*[%}]\})?\)|\s+|$)/gm

// Matches docs URLs with hard-coded language prefixes such as /en/github/overview.
// Excludes external non-docs URLs such as https://nodejs.org/en/.
const languageLinkRegex = new RegExp(
  `(?=^|[^\\]]\\s*)\\[[^\\]]+\\](?::\\n?[ \\t]+|\\s*\\()(?:(?:https?://(?:help|docs|developer)\\.github\\.com)?/(?:${languageCodes.join(
    '|',
  )})(?:/[^)\\s]*)?)(?:\\)|\\s+|$)`,
  'gm',
)

// Matches docs URLs with hard-coded Enterprise Server versions such as /enterprise/2.19/admin.
// Excludes non-docs external URLs and current versioning paths under /github/site-policy/enterprise/.
const versionLinkRegEx =
  /(?=^|[^\]]\s*)\[[^\]]+\](?::\n?[ \t]+|\s*\()(?:(?:https?:\/\/(?:help|docs|developer)\.github\.com)?\/enterprise\/\d+(\.\d+)+(?:\/[^)\s]*)?)(?:\)|\s+|$)/gm

// Matches docs URLs that leak Early Access paths such as /early-access/github/overview.
// Excludes external non-docs URLs such as https://nodejs.org/early-access/.
const earlyAccessLinkRegex =
  /(?=^|[^\]]\s*)\[[^\]]+\](?::\n?[ \t]+|\s*\()(?:(?:https?:\/\/(?:help|docs|developer)\.github\.com)?\/early-access(?:\/[^)\s]*)?)(?:\)|\s+|$)/gm

// Matches hard-coded docs domains such as docs.github.com, help.github.com,
// and developer.github.com.
// Excludes root-relative links and developer.github.com/changes URLs.
const domainLinkRegex =
  /(?=^|[^\]]\s*)\[[^\]]+\](?::\n?[ \t]+|\s*\()(?:https?:)?\/\/(?:help|docs|developer)\.github\.com(?!\/changes\/)[^)\s]*(?:\)|\s+|$)/gm

// Matches docs image links under /assets/images/early-access.
// Excludes external non-docs URLs such as https://nodejs.org/assets/images/early-access/.
const earlyAccessImageRegex =
  /(?=^|[^\]]\s*)\[[^\]]+\](?::\n?[ \t]+|\s*\()(?:(?:https?:\/\/(?:help|docs|developer)\.github\.com)?\/assets\/images\/early-access(?:\/[^)\s]*)?)(?:\)|\s+|$)/gm

// Matches misplaced Early Access image paths, including /assets/early-access/images.
// Excludes external non-docs URLs such as https://nodejs.org/assets/early-access/images/.
const badEarlyAccessImageRegex =
  /(?=^|[^\]]\s*)\[[^\]]+\](?::\n?[ \t]+|\s*\()(?:(?:https?:\/\/(?:help|docs|developer)\.github\.com)?\/(?:(?:assets|images)\/early-access|early-access\/(?:assets|images))(?:\/[^)\s]*)?)(?:\)|\s+|$)/gm

// Matches old site.data Liquid variables such as {{ site.data.example.pizza }}.
const oldVariableRegex = /{{\s*?site\.data\..*?}}/g

// Matches old octicon Liquid variables such as {{ octicon-plus An example label }}.
const oldOcticonRegex = /{{\s*?octicon-([a-z-]+)(\s[\w\s\d-]+)?\s*?}}/g
const relativeArticleLinkErrorText = 'Found unexpected relative article links:'
const languageLinkErrorText = 'Found article links with hard-coded language codes:'
const versionLinkErrorText = 'Found article links with hard-coded version numbers:'
const domainLinkErrorText = 'Found article links with hard-coded domain names:'
const earlyAccessLinkErrorText = 'Found article links leaking Early Access docs:'
const earlyAccessImageErrorText = 'Found article images/links leaking Early Access images:'
const badEarlyAccessImageErrorText =
  'Found article images/links leaking incorrect Early Access images:'
const oldVariableErrorText =
  'Found article uses old {{ site.data... }} syntax. Use {% data example.data.string %} instead!'
const oldOcticonErrorText =
  'Found octicon variables with the old {{ octicon-name }} syntax. Use {% octicon "name" %} instead!'

const yamlWalkOptions = {
  globs: ['**/*.yml'],
  directories: false,
  includeBasePath: true,
}

let ymlToLint

const variableYamlAbsPaths = walk(variablesDir, yamlWalkOptions).sort()
const variableYamlRelPaths = variableYamlAbsPaths.map((p) => slash(path.relative(rootDir, p)))
const variableYamlTuples = zip(variableYamlRelPaths, variableYamlAbsPaths)

const glossariesYamlAbsPaths = walk(glossariesDir, yamlWalkOptions).sort()
const glossariesYamlRelPaths = glossariesYamlAbsPaths.map((p) => slash(path.relative(rootDir, p)))
const glossariesYamlTuples = zip(glossariesYamlRelPaths, glossariesYamlAbsPaths)

const FbvYamlAbsPaths = walk(fbvDir, yamlWalkOptions).sort()
const FbvYamlRelPaths = FbvYamlAbsPaths.map((p) => slash(path.relative(rootDir, p)))
const fbvTuples = zip(FbvYamlRelPaths, FbvYamlAbsPaths)

ymlToLint = ([] as Array<[string | undefined, string | undefined]>).concat(
  variableYamlTuples,
  glossariesYamlTuples,
  fbvTuples,
)

function formatLinkError(message: string, links: string[]) {
  return `${message}\n  - ${links.join('\n  - ')}`
}

// Glossary YAML stores text directly or under a description key.
function getContent(content: unknown) {
  if (typeof content === 'string') return content
  if (
    content &&
    typeof content === 'object' &&
    'description' in content &&
    typeof (content as { description: unknown }).description === 'string'
  )
    return (content as { description: string }).description
  return null
}

const diffFiles = getDiffFiles()

// DIFF_FILES or DIFF_FILE narrows YAML linting to the listed files.
if (diffFiles.length > 0) {
  // Reuse a Set because every YAML tuple checks both relative and absolute paths.
  const only = new Set(
    // Strip quotes from CI tokens such as "foo" "bar"; filenames with spaces are unsupported.
    diffFiles.map((name) => {
      if (/^['"]/.test(name) && /['"]$/.test(name)) {
        return name.slice(1, -1)
      }
      return name
    }),
  )
  const filterFiles = (tuples: Array<[string | undefined, string | undefined]>) =>
    tuples.filter(
      ([relativePath, absolutePath]: [string | undefined, string | undefined]) =>
        only.has(relativePath!) || only.has(absolutePath!),
    )
  ymlToLint = filterFiles(ymlToLint)
}

if (ymlToLint.length === 0) {
  // Keep Vitest happy when diff filtering leaves no YAML files.
  describe('deliberately do nothing', () => {
    test('void', () => {})
  })
} else {
  describe('lint yaml content', () => {
    if (ymlToLint.length < 1) return
    describe.each(ymlToLint)(
      '%s',
      (yamlRelPath: string | undefined, yamlAbsPath: string | undefined) => {
        // YAML structure varies by variables, glossaries, and features files.
        let dictionary: unknown
        let isEarlyAccess: boolean
        let fileContents: string
        // Use false as the parse sentinel because null and undefined are valid YAML values.
        let dictionaryError: unknown = false

        beforeAll(async () => {
          fileContents = await fs.readFile(yamlAbsPath!, 'utf8')
          try {
            dictionary = load(fileContents, { filename: yamlRelPath })
          } catch (error) {
            dictionaryError = error
          }

          isEarlyAccess = yamlRelPath!.split('/').includes('early-access')
        })

        test('it can be parsed as a single yaml document', () => {
          expect(dictionaryError).toBe(false)
        })

        test('placeholder string is not present in any yaml files', () => {
          const matches = fileContents.match(placeholderRegex) || []
          const errorMessage = `
        Found ${matches.length} placeholder string '${placeholder}'! Please update all placeholders.
      `
          expect(matches.length, errorMessage).toBe(0)
        })

        test('relative URLs must start with "/"', async () => {
          const matches = []

          for (const [key, content] of Object.entries(dictionary as Record<string, unknown>)) {
            const contentStr = getContent(content)
            if (!contentStr) continue
            const valMatches = contentStr.match(relativeArticleLinkRegex) || []
            if (valMatches.length > 0) {
              matches.push(...valMatches.map((match: string) => `Key "${key}": ${match}`))
            }
          }

          const errorMessage = formatLinkError(relativeArticleLinkErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })

        test('must not leak Early Access doc URLs', async () => {
          // Early Access docs can link to Early Access docs.
          if (!isEarlyAccess) {
            const matches = []

            for (const [key, content] of Object.entries(dictionary as Record<string, unknown>)) {
              const contentStr = getContent(content)
              if (!contentStr) continue
              const valMatches = contentStr.match(earlyAccessLinkRegex) || []
              if (valMatches.length > 0) {
                matches.push(...valMatches.map((match: string) => `Key "${key}": ${match}`))
              }
            }

            const errorMessage = formatLinkError(earlyAccessLinkErrorText, matches)
            expect(matches.length, errorMessage).toBe(0)
          }
        })

        test('must not leak Early Access image URLs', async () => {
          // Early Access docs can link to Early Access images.
          if (!isEarlyAccess) {
            const matches = []

            for (const [key, content] of Object.entries(dictionary as Record<string, unknown>)) {
              const contentStr = getContent(content)
              if (!contentStr) continue
              const valMatches = contentStr.match(earlyAccessImageRegex) || []
              if (valMatches.length > 0) {
                matches.push(...valMatches.map((match: string) => `Key "${key}": ${match}`))
              }
            }

            const errorMessage = formatLinkError(earlyAccessImageErrorText, matches)
            expect(matches.length, errorMessage).toBe(0)
          }
        })

        test('must have correctly formatted Early Access image URLs', async () => {
          // Check all YAML files because non-Early-Access docs can leak bad image paths.
          const matches = []

          for (const [key, content] of Object.entries(dictionary as Record<string, unknown>)) {
            const contentStr = getContent(content)
            if (!contentStr) continue
            const valMatches = contentStr.match(badEarlyAccessImageRegex) || []
            if (valMatches.length > 0) {
              matches.push(...valMatches.map((match: string) => `Key "${key}": ${match}`))
            }
          }

          const errorMessage = formatLinkError(badEarlyAccessImageErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })

        test('URLs must not contain a hard-coded language code', async () => {
          const matches = []

          for (const [key, content] of Object.entries(dictionary as Record<string, unknown>)) {
            const contentStr = getContent(content)
            if (!contentStr) continue
            const valMatches = contentStr.match(languageLinkRegex) || []
            if (valMatches.length > 0) {
              matches.push(...valMatches.map((match: string) => `Key "${key}": ${match}`))
            }
          }

          const errorMessage = formatLinkError(languageLinkErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })

        test('URLs must not contain a hard-coded version number', async () => {
          const matches = []

          for (const [key, content] of Object.entries(dictionary as Record<string, unknown>)) {
            const contentStr = getContent(content)
            if (!contentStr) continue
            const valMatches = contentStr.match(versionLinkRegEx) || []
            if (valMatches.length > 0) {
              matches.push(...valMatches.map((match: string) => `Key "${key}": ${match}`))
            }
          }

          const errorMessage = formatLinkError(versionLinkErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })

        test('URLs must not contain a hard-coded domain name', async () => {
          const matches = []

          for (const [key, content] of Object.entries(dictionary as Record<string, unknown>)) {
            const contentStr = getContent(content)
            if (!contentStr) continue
            const valMatches = contentStr.match(domainLinkRegex) || []
            if (valMatches.length > 0) {
              matches.push(...valMatches.map((match: string) => `Key "${key}": ${match}`))
            }
          }

          const errorMessage = formatLinkError(domainLinkErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })

        test('does not use old site.data variable syntax', async () => {
          const matches = []

          for (const [key, content] of Object.entries(dictionary as Record<string, unknown>)) {
            const contentStr = getContent(content)
            if (!contentStr) continue
            const valMatches = contentStr.match(oldVariableRegex) || []
            if (valMatches.length > 0) {
              matches.push(
                ...valMatches.map((match: string) => {
                  const example = match.replace(
                    /{{\s*?site\.data\.([a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]+)+)\s*?}}/g,
                    '{% data $1 %}',
                  )
                  return `Key "${key}": ${match} => ${example}`
                }),
              )
            }
          }

          const errorMessage = formatLinkError(oldVariableErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })

        test('does not use old octicon variable syntax', async () => {
          const matches = []

          for (const [key, content] of Object.entries(dictionary as Record<string, unknown>)) {
            const contentStr = getContent(content)
            if (!contentStr) continue
            const valMatches = contentStr.match(oldOcticonRegex) || []
            if (valMatches.length > 0) {
              matches.push(...valMatches.map((match: string) => `Key "${key}": ${match}`))
            }
          }

          const errorMessage = formatLinkError(oldOcticonErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })
      },
    )
  })
}
