const path = require('path')
const slash = require('slash')
const walk = require('walk-sync')
const { zip, groupBy } = require('lodash')
const yaml = require('js-yaml')
const revalidator = require('revalidator')
const generateMarkdownAST = require('mdast-util-from-markdown')
const visit = require('unist-util-visit')
const readFileAsync = require('../../lib/readfile-async')
const frontmatter = require('../../lib/frontmatter')
const languages = require('../../lib/languages')
const { tags } = require('../../lib/liquid-tags/extended-markdown')
const ghesReleaseNotesSchema = require('../helpers/schemas/release-notes-schema')
const learningTracksSchema = require('../helpers/schemas/learning-tracks-schema')
const renderContent = require('../../lib/render-content')
const { execSync } = require('child_process')
const allVersions = Object.keys(require('../../lib/all-versions'))
const enterpriseServerVersions = allVersions.filter(v => v.startsWith('enterprise-server@'))

const rootDir = path.join(__dirname, '../..')
const contentDir = path.join(rootDir, 'content')
const reusablesDir = path.join(rootDir, 'data/reusables')
const variablesDir = path.join(rootDir, 'data/variables')
const glossariesDir = path.join(rootDir, 'data/glossaries')
const ghesReleaseNotesDir = path.join(rootDir, 'data/release-notes')
const learningTracks = path.join(rootDir, 'data/learning-tracks')

const languageCodes = Object.keys(languages)

// WARNING: Complicated RegExp below!
//
// Things matched by this RegExp:
//  - [link text](link-url)
//  - [link text] (link-url)
//  - [link-definition-ref]: link-url
//  - etc.
//
// Things intentionally NOT matched by this RegExp:
//  - [link text](#link-url)
//  - [link text] (#link-url)
//  - [link-definition-ref]: #link-url
//  - [link text](/link-url)
//  - [link-definition-ref]: /link-url
//  - [link text](https://link-url)
//  - [link-definition-ref]: https://link-url
//  - [link text](mailto:mail-url)
//  - [link-definition-ref]: mailto:mail-url
//  - [link text](tel:phone-url)
//  - [link-definition-ref]: tel:phone-url
//  - [link text]({{ site.data.variables.product_url }})
//  - [link-definition-ref]: {{ site.data.variables.product_url }}
//  - [link text][link-definition-ref]: other text
//  - [link text][link-definition-ref] (other text)
//  - etc.
//
const relativeArticleLinkRegex = /(?=^|[^\]]\s*)\[[^\]]+\](?::\n?[ \t]+|\s*\()(?!\/|#|https?:\/\/|tel:|mailto:|\{[%{]\s*)[^)\s]+(?:(?:\s*[%}]\})?\)|\s+|$)/gm

// Things matched by this RegExp:
//  - [link text](/en/github/blah)
//  - [link text] (https://docs.github.com/ja/github/blah)
//  - [link-definition-ref]: http://help.github.com/es/github/blah
//  - etc.
//
// Things intentionally NOT matched by this RegExp:
//  - [Node.js](https://nodejs.org/en/)
//  - etc.
//
const languageLinkRegex = new RegExp(`(?=^|[^\\]]\\s*)\\[[^\\]]+\\](?::\\n?[ \\t]+|\\s*\\()(?:(?:https?://(?:help|docs|developer)\\.github\\.com)?/(?:${languageCodes.join('|')})(?:/[^)\\s]*)?)(?:\\)|\\s+|$)`, 'gm')

// Things matched by this RegExp:
//  - [link text](/enterprise/2.19/admin/blah)
//  - [link text] (https://docs.github.com/enterprise/11.10.340/admin/blah)
//  - [link-definition-ref]: http://help.github.com/enterprise/2.8/admin/blah
//
// Things intentionally NOT matched by this RegExp:
//  - [link text](https://someservice.com/enterprise/1.0/blah)
//  - [link text](/github/site-policy/enterprise/2.2/admin/blah)
const versionLinkRegEx = /(?=^|[^\]]\s*)\[[^\]]+\](?::\n?[ \t]+|\s*\()(?:(?:https?:\/\/(?:help|docs|developer)\.github\.com)?\/enterprise\/\d+(\.\d+)+(?:\/[^)\s]*)?)(?:\)|\s+|$)/gm

// Things matched by this RegExp:
//  - [link text](/early-access/github/blah)
//  - [link text] (https://docs.github.com/early-access/github/blah)
//  - [link-definition-ref]: http://help.github.com/early-access/github/blah
//  - etc.
//
// Things intentionally NOT matched by this RegExp:
//  - [Node.js](https://nodejs.org/early-access/)
//  - etc.
//
const earlyAccessLinkRegex = /(?=^|[^\]]\s*)\[[^\]]+\](?::\n?[ \t]+|\s*\()(?:(?:https?:\/\/(?:help|docs|developer)\.github\.com)?\/early-access(?:\/[^)\s]*)?)(?:\)|\s+|$)/gm

//  - [link text](https://docs.github.com/github/blah)
//  - [link text] (https://help.github.com/github/blah)
//  - [link-definition-ref]: http://developer.github.com/v3/
//  - [link text](//docs.github.com)
//  - etc.
//
// Things intentionally NOT matched by this RegExp:
//  - [link text](/github/blah)
//  - [link text[(https://developer.github.com/changes/2018-02-22-protected-branches-required-signatures/)
//  - etc.
//
const domainLinkRegex = /(?=^|[^\]]\s*)\[[^\]]+\](?::\n?[ \t]+|\s*\()(?:https?:)?\/\/(?:help|docs|developer)\.github\.com(?!\/changes\/)[^)\s]*(?:\)|\s+|$)/gm

// Things matched by this RegExp:
//  - ![image text](/assets/images/early-access/github/blah.gif)
//  - ![image text] (https://docs.github.com/assets/images/early-access/github/blah.gif)
//  - [image-definition-ref]: http://help.github.com/assets/images/early-access/github/blah.gif
//  - [link text](/assets/images/early-access/github/blah.gif)
//  - etc.
//
// Things intentionally NOT matched by this RegExp:
//  - [Node.js](https://nodejs.org/assets/images/early-access/blah.gif)
//  - etc.
//
const earlyAccessImageRegex = /(?=^|[^\]]\s*)\[[^\]]+\](?::\n?[ \t]+|\s*\()(?:(?:https?:\/\/(?:help|docs|developer)\.github\.com)?\/assets\/images\/early-access(?:\/[^)\s]*)?)(?:\)|\s+|$)/gm

// Things matched by this RegExp:
//  - ![image text](/assets/early-access/images/github/blah.gif)
//  - ![image text] (https://docs.github.com/images/early-access/github/blah.gif)
//  - [image-definition-ref]: http://help.github.com/assets/early-access/github/blah.gif
//  - [link text](/early-access/assets/images/github/blah.gif)
//  - [link text](/early-access/images/github/blah.gif)
//  - etc.
//
// Things intentionally NOT matched by this RegExp:
//  - [Node.js](https://nodejs.org/assets/early-access/images/blah.gif)
//  - etc.
//
const badEarlyAccessImageRegex = /(?=^|[^\]]\s*)\[[^\]]+\](?::\n?[ \t]+|\s*\()(?:(?:https?:\/\/(?:help|docs|developer)\.github\.com)?\/(?:(?:assets|images)\/early-access|early-access\/(?:assets|images))(?:\/[^)\s]*)?)(?:\)|\s+|$)/gm

// {{ site.data.example.pizza }}
const oldVariableRegex = /{{\s*?site\.data\..*?}}/g

//  - {{ octicon-plus }}
//  - {{ octicon-plus An example label }}
//
const oldOcticonRegex = /{{\s*?octicon-([a-z-]+)(\s[\w\s\d-]+)?\s*?}}/g

//  - {{#note}}
//  - {{/note}}
//  - {{ #warning }}
//  - {{ /pizza }}
//
const oldExtendedMarkdownRegex = /{{\s*?[#/][a-z-]+\s*?}}/g

const relativeArticleLinkErrorText = 'Found unexpected relative article links:'
const languageLinkErrorText = 'Found article links with hard-coded language codes:'
const versionLinkErrorText = 'Found article links with hard-coded version numbers:'
const domainLinkErrorText = 'Found article links with hard-coded domain names:'
const earlyAccessLinkErrorText = 'Found article links leaking Early Access docs:'
const earlyAccessImageErrorText = 'Found article images/links leaking Early Access images:'
const badEarlyAccessImageErrorText = 'Found article images/links leaking incorrect Early Access images:'
const oldVariableErrorText = 'Found article uses old {{ site.data... }} syntax. Use {% data example.data.string %} instead!'
const oldOcticonErrorText = 'Found octicon variables with the old {{ octicon-name }} syntax. Use {% octicon "name" %} instead!'
const oldExtendedMarkdownErrorText = 'Found extended markdown tags with the old {{#note}} syntax. Use {% note %}/{% endnote %} instead!'

const mdWalkOptions = {
  globs: ['**/*.md'],
  ignore: ['**/README.md'],
  directories: false,
  includeBasePath: true
}

// Also test the "data/variables/" YAML files

const yamlWalkOptions = {
  globs: ['**/*.yml'],
  directories: false,
  includeBasePath: true
}

// different lint rules apply to different content types
let mdToLint, ymlToLint, releaseNotesToLint, learningTracksToLint

if (!process.env.TEST_TRANSLATION) {
  // compile lists of all the files we want to lint

  const contentMarkdownAbsPaths = walk(contentDir, mdWalkOptions).sort()
  const contentMarkdownRelPaths = contentMarkdownAbsPaths.map(p => slash(path.relative(rootDir, p)))
  const contentMarkdownTuples = zip(contentMarkdownRelPaths, contentMarkdownAbsPaths)

  const reusableMarkdownAbsPaths = walk(reusablesDir, mdWalkOptions).sort()
  const reusableMarkdownRelPaths = reusableMarkdownAbsPaths.map(p => slash(path.relative(rootDir, p)))
  const reusableMarkdownTuples = zip(reusableMarkdownRelPaths, reusableMarkdownAbsPaths)

  mdToLint = [...contentMarkdownTuples, ...reusableMarkdownTuples]

  // data/variables
  const variableYamlAbsPaths = walk(variablesDir, yamlWalkOptions).sort()
  const variableYamlRelPaths = variableYamlAbsPaths.map(p => slash(path.relative(rootDir, p)))
  const variableYamlTuples = zip(variableYamlRelPaths, variableYamlAbsPaths)

  // data/glossaries
  const glossariesYamlAbsPaths = walk(glossariesDir, yamlWalkOptions).sort()
  const glossariesYamlRelPaths = glossariesYamlAbsPaths.map(p => slash(path.relative(rootDir, p)))
  const glossariesYamlTuples = zip(glossariesYamlRelPaths, glossariesYamlAbsPaths)

  ymlToLint = [...variableYamlTuples, ...glossariesYamlTuples]

  // GHES release notes
  const ghesReleaseNotesYamlAbsPaths = walk(ghesReleaseNotesDir, yamlWalkOptions).sort()
  const ghesReleaseNotesYamlRelPaths = ghesReleaseNotesYamlAbsPaths.map(p => slash(path.relative(rootDir, p)))
  releaseNotesToLint = zip(ghesReleaseNotesYamlRelPaths, ghesReleaseNotesYamlAbsPaths)

  // Learning tracks
  const learningTracksYamlAbsPaths = walk(learningTracks, yamlWalkOptions).sort()
  const learningTracksYamlRelPaths = learningTracksYamlAbsPaths.map(p => slash(path.relative(rootDir, p)))
  learningTracksToLint = zip(learningTracksYamlRelPaths, learningTracksYamlAbsPaths)
} else {
  // get all translated markdown or yaml files by comparing files changed to main branch
  const changedFilesRelPaths = execSync('git -c diff.renameLimit=10000 diff --name-only origin/main | egrep "^translations/.*/.+.(yml|md)$"', { maxBuffer: 1024 * 1024 * 100 }).toString().split('\n')
  if (changedFilesRelPaths === '') process.exit(0)

  console.log('testing translations.')

  console.log(`Found ${changedFilesRelPaths.length} translated files.`)

  const { mdRelPaths = [], ymlRelPaths = [], releaseNotesRelPaths = [], learningTracksRelPaths = [] } = groupBy(changedFilesRelPaths, (path) => {
    // separate the changed files to different groups
    if (path.endsWith('README.md')) {
      return 'throwAway'
    } else if (path.endsWith('.md')) {
      return 'mdRelPaths'
    } else if (path.match(/\/data\/(variables|glossaries)\//i)) {
      return 'ymlRelPaths'
    } else if (path.match(/\/data\/release-notes\//i)) {
      return 'releaseNotesRelPaths'
    } else if (path.match(/\data\/learning-tracks/)) {
      return 'learningTracksRelPaths'
    } else {
      // we aren't linting the rest
      return 'throwAway'
    }
  })

  const [mdTuples, ymlTuples, releaseNotesTuples, learningTracksTuples] = [mdRelPaths, ymlRelPaths, releaseNotesRelPaths, learningTracksRelPaths].map(relPaths => {
    const absPaths = relPaths.map(p => path.join(rootDir, p))
    return zip(relPaths, absPaths)
  })

  mdToLint = mdTuples
  ymlToLint = ymlTuples
  releaseNotesToLint = releaseNotesTuples
  learningTracksToLint = learningTracksTuples
}

function formatLinkError (message, links) {
  return `${message}\n  - ${links.join('\n  - ')}`
}

// Returns `content` if its a string, or `content.description` if it can.
// Used for getting the nested `description` key in glossary files.
function getContent (content) {
  if (typeof content === 'string') return content
  if (typeof content.description === 'string') return content.description
  return null
}

describe('lint markdown content', () => {
  if (mdToLint.length < 1) return
  describe.each(mdToLint)(
    '%s',
    (markdownRelPath, markdownAbsPath) => {
      let content, ast, links, yamlScheduledWorkflows, isHidden, isEarlyAccess, isSitePolicy, frontmatterErrors, frontmatterData

      beforeAll(async () => {
        const fileContents = await readFileAsync(markdownAbsPath, 'utf8')
        const { data, content: bodyContent, errors } = frontmatter(fileContents)

        content = bodyContent
        frontmatterErrors = errors
        frontmatterData = data
        ast = generateMarkdownAST(content)
        isHidden = data.hidden === true
        isEarlyAccess = markdownRelPath.split('/').includes('early-access')
        isSitePolicy = markdownRelPath.split('/').includes('site-policy-deprecated')

        links = []
        visit(ast, ['link', 'definition'], node => {
          links.push(node.url)
        })

        yamlScheduledWorkflows = []
        visit(ast, 'code', node => {
          if (/ya?ml/.test(node.lang) && node.value.includes('schedule') && node.value.includes('cron')) {
            yamlScheduledWorkflows.push(node.value)
          }
        })

        // visit is not async-friendly so we need to do an async map to parse the YML snippets
        yamlScheduledWorkflows = (await Promise.all(yamlScheduledWorkflows.map(async (snippet) => {
          // If we don't parse the Liquid first, yaml loading chokes on {% raw %} tags
          const rendered = await renderContent.liquid.parseAndRender(snippet)
          const parsed = yaml.safeLoad(rendered)
          return parsed.on.schedule
        })))
          .flat()
          .map(schedule => schedule.cron)
      })

      // We need to support some non-Early Access hidden docs in Site Policy
      test('hidden docs must be Early Access or Site Policy', async () => {
        if (isHidden) {
          expect(isEarlyAccess || isSitePolicy).toBe(true)
        }
      })

      test('relative URLs must start with "/"', async () => {
        const matches = links.filter(link => {
          if (
            link.startsWith('http://') ||
            link.startsWith('https://') ||
            link.startsWith('tel:') ||
            link.startsWith('mailto:') ||
            link.startsWith('#') ||
            link.startsWith('/')
          ) return false

          return true
        })

        const errorMessage = formatLinkError(relativeArticleLinkErrorText, matches)
        expect(matches.length, errorMessage).toBe(0)
      })

      test('yaml snippets that include scheduled workflows must not run on the hour', async () => {
        const hourlySchedules = yamlScheduledWorkflows.filter(schedule => {
          const hour = schedule.split(' ')[0]
          // return any minute cron segments that equal 0, 00, 000, etc.
          return !/[^0]/.test(hour)
        })
        expect(hourlySchedules).toEqual([])
      })

      // Note this only ensures that scheduled workflow snippets are unique _per Markdown file_
      test('yaml snippets that include scheduled workflows run at unique times', () => {
        expect(yamlScheduledWorkflows.length).toEqual(new Set(yamlScheduledWorkflows).size)
      })

      test('must not leak Early Access doc URLs', async () => {
        // Only execute for docs that are NOT Early Access
        if (!isEarlyAccess) {
          const matches = (content.match(earlyAccessLinkRegex) || [])
          const errorMessage = formatLinkError(earlyAccessLinkErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        }
      })

      test('must not leak Early Access image URLs', async () => {
        // Only execute for docs that are NOT Early Access
        if (!isEarlyAccess) {
          const matches = (content.match(earlyAccessImageRegex) || [])
          const errorMessage = formatLinkError(earlyAccessImageErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        }
      })

      test('must have correctly formatted Early Access image URLs', async () => {
        // Execute for ALL docs (not just Early Access) to ensure non-EA docs
        // are not leaking incorrectly formatted EA image URLs
        const matches = (content.match(badEarlyAccessImageRegex) || [])
        const errorMessage = formatLinkError(badEarlyAccessImageErrorText, matches)
        expect(matches.length, errorMessage).toBe(0)
      })

      if (!process.env.TEST_TRANSLATION) {
        test('does not use old site.data variable syntax', async () => {
          const matches = (content.match(oldVariableRegex) || [])
          const matchesWithExample = matches.map(match => {
            const example = match
              .replace(/{{\s*?site\.data\.([a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]+)+)\s*?}}/g, '{% data $1 %}')
            return `${match} => ${example}`
          })
          const errorMessage = formatLinkError(oldVariableErrorText, matchesWithExample)
          expect(matches.length, errorMessage).toBe(0)
        })

        test('does not use old octicon variable syntax', async () => {
          const matches = (content.match(oldOcticonRegex) || [])
          const errorMessage = formatLinkError(oldOcticonErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })

        test('does not use old extended markdown syntax', async () => {
          Object.keys(tags).forEach(tag => {
            const reg = new RegExp(`{{\\s*?[#|/]${tag}`, 'g')
            if (reg.test(content)) {
              const matches = (content.match(oldExtendedMarkdownRegex)) || []
              const tagMessage = oldExtendedMarkdownErrorText
                .replace('{{#note}}', `{{#${tag}}}`)
                .replace('{% note %}', `{% ${tag} %}`)
                .replace('{% endnote %}', `{% end${tag} %}`)
              const errorMessage = formatLinkError(tagMessage, matches)
              expect(matches.length, errorMessage).toBe(0)
            }
          })
        })

        test('URLs must not contain a hard-coded language code', async () => {
          const matches = links.filter(link => {
            return /\/(?:${languageCodes.join('|')})\//.test(link)
          })

          const errorMessage = formatLinkError(languageLinkErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })

        test('URLs must not contain a hard-coded version number', async () => {
          const initialMatches = (content.match(versionLinkRegEx) || [])

          // Filter out some very specific false positive matches
          const matches = initialMatches.filter(match => {
            if (
              markdownRelPath === 'content/admin/enterprise-management/migrating-from-github-enterprise-1110x-to-2123.md' ||
              markdownRelPath === 'content/admin/all-releases.md'
            ) {
              return false
            }
            return true
          })

          const errorMessage = formatLinkError(versionLinkErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })

        test('URLs must not contain a hard-coded domain name', async () => {
          const initialMatches = (content.match(domainLinkRegex) || [])

          // Filter out some very specific false positive matches
          const matches = initialMatches.filter(match => {
            if (markdownRelPath === 'content/admin/all-releases.md') {
              return false
            }
            return true
          })

          const errorMessage = formatLinkError(domainLinkErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })
      }

      test('contains valid Liquid', async () => {
        // If Liquid can't parse the file, it'll throw an error.
        // For example, the following is invalid and will fail this test:
        // {% if currentVersion ! "github-ae@latest" %}
        expect(() => renderContent.liquid.parse(content))
          .not
          .toThrow()
      })

      if (!markdownRelPath.includes('data/reusables')) {
        test('contains valid frontmatter', () => {
          const errorMessage = frontmatterErrors.map(error => `- [${error.property}]: ${error.actual}, ${error.message}`).join('\n')
          expect(frontmatterErrors.length, errorMessage).toBe(0)
        })

        test('frontmatter contains valid liquid', async () => {
          const fmKeysWithLiquid = ['title', 'shortTitle', 'intro', 'product', 'permission']
            .filter(key => Boolean(frontmatterData[key]))

          for (const key of fmKeysWithLiquid) {
            expect(() => renderContent.liquid.parse(frontmatterData[key]))
              .not
              .toThrow()
          }
        })
      }
    }
  )
})

describe('lint yaml content', () => {
  if (ymlToLint.length < 1) return
  describe.each(ymlToLint)(
    '%s',
    (yamlRelPath, yamlAbsPath) => {
      let dictionary, isEarlyAccess

      beforeAll(async () => {
        const fileContents = await readFileAsync(yamlAbsPath, 'utf8')
        dictionary = yaml.safeLoad(fileContents, { filename: yamlRelPath })

        isEarlyAccess = yamlRelPath.split('/').includes('early-access')
      })

      test('relative URLs must start with "/"', async () => {
        const matches = []

        for (const [key, content] of Object.entries(dictionary)) {
          const contentStr = getContent(content)
          if (!contentStr) continue
          const valMatches = (contentStr.match(relativeArticleLinkRegex) || [])
          if (valMatches.length > 0) {
            matches.push(...valMatches.map((match) => `Key "${key}": ${match}`))
          }
        }

        const errorMessage = formatLinkError(relativeArticleLinkErrorText, matches)
        expect(matches.length, errorMessage).toBe(0)
      })

      test('must not leak Early Access doc URLs', async () => {
        // Only execute for docs that are NOT Early Access
        if (!isEarlyAccess) {
          const matches = []

          for (const [key, content] of Object.entries(dictionary)) {
            const contentStr = getContent(content)
            if (!contentStr) continue
            const valMatches = (contentStr.match(earlyAccessLinkRegex) || [])
            if (valMatches.length > 0) {
              matches.push(...valMatches.map((match) => `Key "${key}": ${match}`))
            }
          }

          const errorMessage = formatLinkError(earlyAccessLinkErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        }
      })

      test('must not leak Early Access image URLs', async () => {
        // Only execute for docs that are NOT Early Access
        if (!isEarlyAccess) {
          const matches = []

          for (const [key, content] of Object.entries(dictionary)) {
            const contentStr = getContent(content)
            if (!contentStr) continue
            const valMatches = (contentStr.match(earlyAccessImageRegex) || [])
            if (valMatches.length > 0) {
              matches.push(...valMatches.map((match) => `Key "${key}": ${match}`))
            }
          }

          const errorMessage = formatLinkError(earlyAccessImageErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        }
      })

      test('must have correctly formatted Early Access image URLs', async () => {
        // Execute for ALL docs (not just Early Access) to ensure non-EA docs
        // are not leaking incorrectly formatted EA image URLs
        const matches = []

        for (const [key, content] of Object.entries(dictionary)) {
          const contentStr = getContent(content)
          if (!contentStr) continue
          const valMatches = (contentStr.match(badEarlyAccessImageRegex) || [])
          if (valMatches.length > 0) {
            matches.push(...valMatches.map((match) => `Key "${key}": ${match}`))
          }
        }

        const errorMessage = formatLinkError(badEarlyAccessImageErrorText, matches)
        expect(matches.length, errorMessage).toBe(0)
      })

      if (!process.env.TEST_TRANSLATION) {
        test('URLs must not contain a hard-coded language code', async () => {
          const matches = []

          for (const [key, content] of Object.entries(dictionary)) {
            const contentStr = getContent(content)
            if (!contentStr) continue
            const valMatches = (contentStr.match(languageLinkRegex) || [])
            if (valMatches.length > 0) {
              matches.push(...valMatches.map((match) => `Key "${key}": ${match}`))
            }
          }

          const errorMessage = formatLinkError(languageLinkErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })

        test('URLs must not contain a hard-coded version number', async () => {
          const matches = []

          for (const [key, content] of Object.entries(dictionary)) {
            const contentStr = getContent(content)
            if (!contentStr) continue
            const valMatches = (contentStr.match(versionLinkRegEx) || [])
            if (valMatches.length > 0) {
              matches.push(...valMatches.map((match) => `Key "${key}": ${match}`))
            }
          }

          const errorMessage = formatLinkError(versionLinkErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })

        test('URLs must not contain a hard-coded domain name', async () => {
          const matches = []

          for (const [key, content] of Object.entries(dictionary)) {
            const contentStr = getContent(content)
            if (!contentStr) continue
            const valMatches = (contentStr.match(domainLinkRegex) || [])
            if (valMatches.length > 0) {
              matches.push(...valMatches.map((match) => `Key "${key}": ${match}`))
            }
          }

          const errorMessage = formatLinkError(domainLinkErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })

        test('does not use old site.data variable syntax', async () => {
          const matches = []

          for (const [key, content] of Object.entries(dictionary)) {
            const contentStr = getContent(content)
            if (!contentStr) continue
            const valMatches = (contentStr.match(oldVariableRegex) || [])
            if (valMatches.length > 0) {
              matches.push(...valMatches.map((match) => {
                const example = match
                  .replace(/{{\s*?site\.data\.([a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]+)+)\s*?}}/g, '{% data $1 %}')
                return `Key "${key}": ${match} => ${example}`
              }))
            }
          }

          const errorMessage = formatLinkError(oldVariableErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })

        test('does not use old octicon variable syntax', async () => {
          const matches = []

          for (const [key, content] of Object.entries(dictionary)) {
            const contentStr = getContent(content)
            if (!contentStr) continue
            const valMatches = (contentStr.match(oldOcticonRegex) || [])
            if (valMatches.length > 0) {
              matches.push(...valMatches.map((match) => `Key "${key}": ${match}`))
            }
          }

          const errorMessage = formatLinkError(oldOcticonErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })

        test('does not use old extended markdown syntax', async () => {
          const matches = []

          for (const [key, content] of Object.entries(dictionary)) {
            const contentStr = getContent(content)
            if (!contentStr) continue
            const valMatches = (contentStr.match(oldExtendedMarkdownRegex) || [])
            if (valMatches.length > 0) {
              matches.push(...valMatches.map((match) => `Key "${key}": ${match}`))
            }
          }

          const errorMessage = formatLinkError(oldExtendedMarkdownErrorText, matches)
          expect(matches.length, errorMessage).toBe(0)
        })
      }
    }
  )
})

describe('lint release notes', () => {
  if (releaseNotesToLint.length < 1) return
  describe.each(releaseNotesToLint)(
    '%s',
    (yamlRelPath, yamlAbsPath) => {
      let dictionary

      beforeAll(async () => {
        const fileContents = await readFileAsync(yamlAbsPath, 'utf8')
        dictionary = yaml.safeLoad(fileContents, { filename: yamlRelPath })
      })

      it('matches the schema', () => {
        const { errors } = revalidator.validate(dictionary, ghesReleaseNotesSchema)
        const errorMessage = errors.map(error => `- [${error.property}]: ${error.actual}, ${error.message}`).join('\n')
        expect(errors.length, errorMessage).toBe(0)
      })

      it('contains valid liquid', () => {
        const { intro, sections } = dictionary
        let toLint = { intro }
        for (const key in sections) {
          const section = sections[key]
          const label = `sections.${key}`
          section.forEach((part) => {
            if (Array.isArray(part)) {
              toLint = { ...toLint, ...{ [label]: section.join('\n') } }
            } else {
              for (const prop in section) {
                toLint = { ...toLint, ...{ [`${label}.${prop}`]: section[prop] } }
              }
            }
          })
        }

        for (const key in toLint) {
          if (!toLint[key]) continue
          expect(() => renderContent.liquid.parse(toLint[key]), `${key} contains invalid liquid`)
            .not
            .toThrow()
        }
      })
    }
  )
})

describe('lint learning tracks', () => {
  if (learningTracksToLint.length < 1) return
  describe.each(learningTracksToLint)(
    '%s',
    (yamlRelPath, yamlAbsPath) => {
      let dictionary

      beforeAll(async () => {
        const fileContents = await readFileAsync(yamlAbsPath, 'utf8')
        dictionary = yaml.safeLoad(fileContents, { filename: yamlRelPath })
      })

      it('matches the schema', () => {
        const { errors } = revalidator.validate(dictionary, learningTracksSchema)
        const errorMessage = errors.map(error => `- [${error.property}]: ${error.actual}, ${error.message}`).join('\n')
        expect(errors.length, errorMessage).toBe(0)
      })

      it('has one and only one featured track per version', async () => {
        const featuredTracks = {}
        const context = { enterpriseServerVersions }

        await Promise.all(allVersions.map(async (version) => {
          const featuredTracksPerVersion = (await Promise.all(Object.values(dictionary).map(async (entry) => {
            if (!entry.featured_track) return
            context.currentVersion = version
            const isFeaturedLink = typeof entry.featured_track === 'boolean' || (await renderContent(entry.featured_track, context, { textOnly: true, encodeEntities: true }) === 'true')
            return isFeaturedLink
          })))
            .filter(Boolean)

          featuredTracks[version] = featuredTracksPerVersion.length
        }))

        Object.entries(featuredTracks).forEach(([version, numOfFeaturedTracks]) => {
          const errorMessage = `Expected one featured learning track for ${version} in ${yamlAbsPath}`
          expect(numOfFeaturedTracks, errorMessage).toBe(1)
        })
      })

      it('contains valid liquid', () => {
        const toLint = []
        Object.values(dictionary).forEach(({ title, description }) => {
          toLint.push(title)
          toLint.push(description)
        })

        toLint.forEach(element => {
          expect(() => renderContent.liquid.parse(element), `${element} contains invalid liquid`)
            .not
            .toThrow()
        })
      })
    }
  )
})
