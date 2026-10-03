import path from 'path'
import fs from 'fs'

import type { Response } from 'express'
import walk from 'walk-sync'
import { zip, difference } from 'lodash-es'
import GithubSlugger from 'github-slugger'
import { decode } from 'html-entities'
import { beforeAll, describe, expect, test } from 'vitest'

import matter from '@/frame/lib/read-frontmatter'
import { renderContent } from '@/content-render/index'
import getApplicableVersions from '@/versions/lib/get-applicable-versions'
import contextualize from '@/frame/middleware/context/context'
import shortVersions from '@/versions/middleware/short-versions'
import { ROOT } from '@/frame/lib/constants'
import type { Context, ExtendedRequest, MarkdownFrontmatter } from '@/types'

const slugger = new GithubSlugger()

const contentDir = path.join(ROOT, 'content')

function getFrontmatterData(markdown: string): MarkdownFrontmatter {
  const parsed = matter(markdown)
  if (!parsed.data) throw new Error('No frontmatter')
  return parsed.data as MarkdownFrontmatter
}

describe.skip('category pages', () => {
  const walkOptions = {
    globs: ['*/index.md', 'enterprise/*/index.md'],
    ignore: [
      '{rest,graphql}/**',
      'enterprise/index.md',
      '**/articles/**',
      'early-access/**',
      'search/index.md',
    ],
    directories: false,
    includeBasePath: true,
  }

  const productIndices = walk(contentDir, walkOptions)
  const productNames = productIndices.map((index) => path.basename(path.dirname(index)))

  const productTuples = zip(productNames, productIndices) as [string, string][]

  // describe.each fails when a product has no categories, so generate describes imperatively.
  for (const tuple of productTuples) {
    const [, productIndex] = tuple

    const productDir = path.dirname(productIndex)

    // Vitest must define describe.each cases synchronously.
    // Children include category slugs such as getting-started-with-github.
    const contents = fs.readFileSync(productIndex, 'utf8')
    const data = getFrontmatterData(contents)

    const children: string[] = data.children
    const categoryLinks = children
      // Skip standalone category files such as content/actions/quickstart.md.
      .filter((link) => fs.existsSync(getPath(productDir, link, 'index')))

    const categoryPaths = categoryLinks.map((link) => getPath(productDir, link, 'index'))

    const categoryRelativePaths = categoryPaths.map((p) => path.relative(contentDir, p))

    const categoryTuples = zip(categoryRelativePaths, categoryPaths, categoryLinks) as [
      string,
      string,
      string,
    ][]

    describe.each(categoryTuples)(
      'category index "%s"',
      (indexRelPath, indexAbsPath, indexLink) => {
        let publishedArticlePaths: string[] = []
        let availableArticlePaths: string[] = []
        let categoryVersions: string[] = []

        let allowTitleToDifferFromFilename: boolean | undefined = false
        let indexTitle: string = ''
        let indexShortTitle: string = ''
        const articleVersions: {
          [articlePath: string]: string[]
        } = {}

        beforeAll(async () => {
          const categoryDir = path.dirname(indexAbsPath)

          const indexContents = await fs.promises.readFile(indexAbsPath, 'utf8')
          const parsed = matter(indexContents)
          if (!parsed.data) throw new Error('No frontmatter')
          const categoryData = parsed.data as MarkdownFrontmatter
          categoryVersions = getApplicableVersions(categoryData.versions, indexAbsPath)
          allowTitleToDifferFromFilename = categoryData.allowTitleToDifferFromFilename
          const articleLinks = categoryData.children.filter((child) => {
            const mdPath = getPath(productDir, indexLink, child)
            const fileExists = fs.existsSync(mdPath)
            return fileExists && fs.statSync(mdPath).isFile()
          })

          const next = () => {}
          const res = {}
          const context: Context = {}
          const req = {
            language: 'en',
            pagePath: '/en',
            context,
          }

          await contextualize(req as ExtendedRequest, res as Response, next)
          await shortVersions(req as ExtendedRequest, res as Response, next)

          const productIndexContents = await fs.promises.readFile(productIndex, 'utf8')
          const productIndexData = getFrontmatterData(productIndexContents)

          indexTitle = productIndexData.title.includes('{')
            ? await renderContent(productIndexData.title, req.context, { textOnly: true })
            : productIndexData.title

          if (productIndexData.shortTitle) {
            indexShortTitle = productIndexData.shortTitle.includes('{')
              ? await renderContent(productIndexData.shortTitle, req.context, { textOnly: true })
              : productIndexData.shortTitle
          } else {
            indexShortTitle = ''
          }

          publishedArticlePaths = (
            await Promise.all(
              articleLinks.map(async (articleLink) => {
                const articlePath = getPath(productDir, indexLink, articleLink)
                const articleContents = await fs.promises.readFile(articlePath, 'utf8')
                const articleData = getFrontmatterData(articleContents)

                // Published article lists omit subcategories and hidden pages.
                if (articleData.subcategory || articleData.hidden) return null

                // ".../content/github/{category}/{article}.md" => "/{article}"
                return `/${path.relative(categoryDir, articlePath).replace(/\.md$/, '')}`
              }),
            )
          ).filter(Boolean) as string[]

          const childEntries = await fs.promises.readdir(categoryDir, { withFileTypes: true })
          const childFileEntries = childEntries.filter(
            (ent) => ent.isFile() && ent.name !== 'index.md',
          )
          const childFilePaths = childFileEntries.map((ent) => path.join(categoryDir, ent.name))

          availableArticlePaths = (
            await Promise.all(
              childFilePaths.map(async (articlePath) => {
                const articleContents = await fs.promises.readFile(articlePath, 'utf8')
                const availableArticleData = getFrontmatterData(articleContents)

                // Available article lists omit subcategories and hidden pages.
                if (availableArticleData.subcategory || availableArticleData.hidden) return null

                // ".../content/github/{category}/{article}.md" => "/{article}"
                return `/${path.relative(categoryDir, articlePath).replace(/\.md$/, '')}`
              }),
            )
          ).filter(Boolean) as string[]

          await Promise.all(
            childFilePaths.map(async (articlePath) => {
              const articleContents = await fs.promises.readFile(articlePath, 'utf8')
              const versionData = getFrontmatterData(articleContents)

              articleVersions[articlePath] = getApplicableVersions(
                versionData.versions,
                articlePath,
              ) as string[]
            }),
          )
        })

        test('contains all expected articles', () => {
          const missingArticlePaths = difference(availableArticlePaths, publishedArticlePaths)
          const errorMessage = formatArticleError('Missing article links:', missingArticlePaths)
          expect(missingArticlePaths.length, errorMessage).toBe(0)
        })

        test('does not have any unexpected articles', () => {
          const unexpectedArticles = difference(publishedArticlePaths, availableArticlePaths)
          const errorMessage = formatArticleError('Unexpected article links:', unexpectedArticles)
          expect(unexpectedArticles.length, errorMessage).toBe(0)
        })

        test('contains only articles and subcategories with versions that are also available in the parent category', () => {
          for (const [articleName, versions] of Object.entries(articleVersions)) {
            const unexpectedVersions = difference(versions, categoryVersions)
            const errorMessage = `${articleName} has versions that are not available in parent category`
            expect(unexpectedVersions.length, errorMessage).toBe(0)
          }
        })

        test('slugified title matches parent directory name', () => {
          if (allowTitleToDifferFromFilename) return

          const categoryDirPath = path.dirname(indexAbsPath)
          const categoryDirName = path.basename(categoryDirPath)

          slugger.reset()
          const expectedSlugs = [slugger.slug(decode(indexTitle))]
          if (indexShortTitle && indexShortTitle !== indexTitle) {
            expectedSlugs.push(slugger.slug(decode(indexShortTitle)))
          }

          let customMessage = `Directory name "${categoryDirName}" is not one of ${expectedSlugs
            .map((x) => `"${x}"`)
            .join(', ')} which comes from the title "${indexTitle}"${
            indexShortTitle ? ` or shortTitle "${indexShortTitle}"` : ' (no shortTitle)'
          }`
          const expectedSlug = expectedSlugs.at(-1) as string
          const newCategoryDirPath = path.join(path.dirname(categoryDirPath), expectedSlug)
          customMessage += `\nTo resolve this consider running:\n  ./src/content-render/scripts/move-content.ts ${categoryDirPath} ${newCategoryDirPath}\n`
          expect(expectedSlugs.includes(categoryDirName), customMessage).toBeTruthy()
        })
      },
    )
  }
})

function getPath(productDir: string, link: string, filename: string) {
  // Absolute /content/ links resolve from contentDir instead of productDir.
  if (link.startsWith('/content/')) {
    const absolutePath = link.slice('/content/'.length)
    if (filename === 'index') {
      return path.join(contentDir, absolutePath, 'index.md')
    }
    return path.join(contentDir, absolutePath, `${filename}.md`)
  }
  return path.join(productDir, link, `${filename}.md`)
}

function formatArticleError(message: string, articles: string[]) {
  return `${message}\n  - ${articles.join('\n  - ')}`
}
