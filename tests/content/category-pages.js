const path = require('path')
const fs = require('fs')
const walk = require('walk-sync')
const matter = require('../../lib/read-frontmatter')
const { zip, difference } = require('lodash')
const GithubSlugger = require('github-slugger')
const { XmlEntities } = require('html-entities')
const readFileAsync = require('../../lib/readfile-async')
const loadSiteData = require('../../lib/site-data')
const renderContent = require('../../lib/render-content')
const getApplicableVersions = require('../../lib/get-applicable-versions')

const slugger = new GithubSlugger()
const entities = new XmlEntities()

const contentDir = path.join(__dirname, '../../content')

describe('category pages', () => {
  let siteData

  beforeAll(async () => {
    // Load the English site data
    const allSiteData = await loadSiteData()
    siteData = allSiteData.en.site
  })

  const walkOptions = {
    globs: ['*/index.md', 'enterprise/*/index.md'],
    ignore: ['{rest,graphql}/**', 'enterprise/index.md', '**/articles/**', 'early-access/**'],
    directories: false,
    includeBasePath: true
  }

  const productIndices = walk(contentDir, walkOptions)
  const productNames = productIndices.map(index => path.basename(path.dirname(index)))

  // Combine those to fit Jest's `.each` usage
  const productTuples = zip(productNames, productIndices)

  describe.each(productTuples)(
    'product "%s"',
    (productName, productIndex) => {
      // Get links included in product index page.
      // Each link corresponds to a product subdirectory (category).
      // Example: "getting-started-with-github"
      const contents = fs.readFileSync(productIndex, 'utf8') // TODO move to async
      const { data } = matter(contents)

      const productDir = path.dirname(productIndex)

      const categoryLinks = data.children
        // Only include category directories, not standalone category files like content/actions/quickstart.md
        .filter(link => fs.existsSync(getPath(productDir, link, 'index')))
      // TODO this should move to async, but you can't asynchronously define tests with Jest...

      // Map those to the Markdown file paths that represent that category page index
      const categoryPaths = categoryLinks.map(link => getPath(productDir, link, 'index'))

      // Make them relative for nicer display in test names
      const categoryRelativePaths = categoryPaths.map(p => path.relative(contentDir, p))

      // Combine those to fit Jest's `.each` usage
      const categoryTuples = zip(categoryRelativePaths, categoryPaths, categoryLinks)

      if (!categoryTuples.length) return

      describe.each(categoryTuples)(
        'category index "%s"',
        (indexRelPath, indexAbsPath, indexLink) => {
          let publishedArticlePaths, availableArticlePaths, indexTitle, categoryVersions
          const articleVersions = {}

          beforeAll(async () => {
            const categoryDir = path.dirname(indexAbsPath)

            // Get child article links included in each subdir's index page
            const indexContents = await readFileAsync(indexAbsPath, 'utf8')
            const { data } = matter(indexContents)
            categoryVersions = getApplicableVersions(data.versions, indexAbsPath)
            const articleLinks = data.children.filter(child => {
              const mdPath = getPath(productDir, indexLink, child)
              return fs.existsSync(mdPath) && fs.statSync(mdPath).isFile()
            })

            // Save the index title for later testing
            indexTitle = await renderContent(data.title, { site: siteData }, { textOnly: true })

            publishedArticlePaths = (await Promise.all(
              articleLinks.map(async (articleLink) => {
                const articlePath = getPath(productDir, indexLink, articleLink)
                const articleContents = await readFileAsync(articlePath, 'utf8')
                const { data } = matter(articleContents)

                // Do not include map topics in list of published articles
                if (data.mapTopic || data.hidden) return null

                // ".../content/github/{category}/{article}.md" => "/{article}"
                return `/${path.relative(categoryDir, articlePath).replace(/\.md$/, '')}`
              })
            )).filter(Boolean)

            // Get all of the child articles that exist in the subdir
            const childEntries = await fs.promises.readdir(categoryDir, { withFileTypes: true })
            const childFileEntries = childEntries.filter(ent => ent.isFile() && ent.name !== 'index.md')
            const childFilePaths = childFileEntries.map(ent => path.join(categoryDir, ent.name))

            availableArticlePaths = (await Promise.all(
              childFilePaths.map(async (articlePath) => {
                const articleContents = await readFileAsync(articlePath, 'utf8')
                const { data } = matter(articleContents)

                // Do not include map topics nor hidden pages in list of available articles
                if (data.mapTopic || data.hidden) return null

                // ".../content/github/{category}/{article}.md" => "/{article}"
                return `/${path.relative(categoryDir, articlePath).replace(/\.md$/, '')}`
              })
            )).filter(Boolean)

            await Promise.all(
              childFilePaths.map(async (articlePath) => {
                const articleContents = await readFileAsync(articlePath, 'utf8')
                const { data } = matter(articleContents)

                articleVersions[articlePath] = getApplicableVersions(data.versions, articlePath)
              })
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

          test('contains only articles and map topics with versions that are also available in the parent category', () => {
            Object.entries(articleVersions).forEach(([articleName, articleVersions]) => {
              const unexpectedVersions = difference(articleVersions, categoryVersions)
              const errorMessage = `${articleName} has versions that are not available in parent category`
              expect(unexpectedVersions.length, errorMessage).toBe(0)
            })
          })

          // TODO: Unskip this test once the related script has been executed
          test.skip('slugified title matches parent directory name', () => {
            // Get the parent directory name
            const categoryDirPath = path.dirname(indexAbsPath)
            const categoryDirName = path.basename(categoryDirPath)

            slugger.reset()
            const expectedSlug = slugger.slug(entities.decode(indexTitle))

            // Check if the directory name matches the expected slug
            expect(categoryDirName).toBe(expectedSlug)

            // If this fails, execute "script/reconcile-category-dirs-with-ids.js"
          })
        }
      )
    }
  )
})

function getPath (productDir, link, filename) {
  return path.join(productDir, link, `${filename}.md`)
}

function formatArticleError (message, articles) {
  return `${message}\n  - ${articles.join('\n  - ')}`
}
