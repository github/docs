const path = require('path')
const fs = require('fs')
const walk = require('walk-sync')
const matter = require('../../lib/read-frontmatter')
const { zip } = require('lodash')
const yaml = require('js-yaml')

const rootDir = path.join(__dirname, '../..')
const contentDir = path.join(rootDir, 'content')
const reusablesDir = path.join(rootDir, 'data/reusables')
const variablesDir = path.join(rootDir, 'data/variables')

/*
This will match Liquid variable references that contain at least one line break
between the variable reference and either the `{{` or `}}` tag boundaries.

Some examples include:

(a)
{{
  site.data.variables.product.product_name }}

(b)
{{ site.data.variables.product.product_name
}}

(c)
{{
  site.data.variables.product.product_name
}}

*/
const liquidRefsWithLinkBreaksRegex = /\{\{[ \t]*\n\s*[^\s}]+\s*\}\}|\{\{\s*[^\s}]+[ \t]*\n\s*\}\}/gm

describe('Liquid references', () => {
  describe('must not contain line breaks', () => {
    const mdWalkOptions = {
      globs: ['**/*.md'],
      ignore: ['**/README.md'],
      directories: false,
      includeBasePath: true
    }

    const contentMarkdownAbsPaths = walk(contentDir, mdWalkOptions).sort()
    const contentMarkdownRelPaths = contentMarkdownAbsPaths.map(p => path.relative(rootDir, p))
    const contentMarkdownTuples = zip(contentMarkdownRelPaths, contentMarkdownAbsPaths)

    const reusableMarkdownAbsPaths = walk(reusablesDir, mdWalkOptions).sort()
    const reusableMarkdownRelPaths = reusableMarkdownAbsPaths.map(p => path.relative(rootDir, p))
    const reusableMarkdownTuples = zip(reusableMarkdownRelPaths, reusableMarkdownAbsPaths)

    test.each([...contentMarkdownTuples, ...reusableMarkdownTuples])(
      'in "%s"',
      async (markdownRelPath, markdownAbsPath) => {
        const fileContents = await fs.promises.readFile(markdownAbsPath, 'utf8')
        const { content } = matter(fileContents)

        const matches = (content.match(liquidRefsWithLinkBreaksRegex) || [])
        const errorMessage = formatRefError('Found unexpected line breaks in Liquid reference:', matches)
        expect(matches.length, errorMessage).toBe(0)
      }
    )

    // Also test the "data/variables/" YAML files
    const yamlWalkOptions = {
      globs: ['**/*.yml'],
      directories: false,
      includeBasePath: true
    }

    const variableYamlAbsPaths = walk(variablesDir, yamlWalkOptions).sort()
    const variableYamlRelPaths = variableYamlAbsPaths.map(p => path.relative(rootDir, p))
    const variableYamlTuples = zip(variableYamlRelPaths, variableYamlAbsPaths)

    test.each(variableYamlTuples)(
      'in "%s"',
      async (yamlRelPath, yamlAbsPath) => {
        const fileContents = await fs.promises.readFile(yamlAbsPath, 'utf8')
        const dictionary = yaml.safeLoad(fileContents, { filename: yamlRelPath })

        const matches = []

        for (const [key, content] of Object.entries(dictionary)) {
          if (typeof content !== 'string') continue
          const valMatches = (content.match(liquidRefsWithLinkBreaksRegex) || [])
          if (valMatches.length > 0) {
            matches.push(...valMatches.map((match) => `Key "${key}": ${match}`))
          }
        }

        const errorMessage = formatRefError('Found unexpected line breaks in Liquid reference:', matches)
        expect(matches.length, errorMessage).toBe(0)
      }
    )
  })
})

function formatRefError (message, breaks) {
  return `${message}\n  - ${breaks.join('\n  - ')}`
}
