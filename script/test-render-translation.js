const renderContent = require('../lib/render-content')
const loadSiteData = require('../lib/site-data')
const { loadPages } = require('../lib/pages')
const languages = require('../lib/languages')
const path = require('path')
const { execSync } = require('child_process')
const fs = require('fs')
const frontmatter = require('../lib/frontmatter')
const chalk = require('chalk')

const main = async () => {
  const siteData = loadSiteData()
  const pages = await loadPages()
  const contextByLanguage = {}
  for (const lang in languages) {
    const langObj = languages[lang]
    const [crowdinLangCode] = langObj.dir === '' ? 'en' : langObj.dir.split('/').slice(1)
    if (!crowdinLangCode) continue
    contextByLanguage[crowdinLangCode] = {
      site: siteData[langObj.code].site,
      currentLanguage: langObj.code,
      currentVersion: 'free-pro-team@latest'
    }
  }

  const rootDir = path.join(__dirname, '..')

  const changedFilesRelPaths = execSync('git diff --name-only origin/main | egrep "^translations/.*/.+.md$"', { maxBuffer: 1024 * 1024 * 100 })
    .toString()
    .split('\n')
    .filter(path => path !== '' && !path.endsWith('README.md'))
    .sort()

  console.log(`Found ${changedFilesRelPaths.length} translated files.`)

  changedFilesRelPaths.forEach(async (relPath) => {
    const fullPath = path.join(rootDir, relPath)
    const lang = relPath.split('/')[1]
    const context = {
      ...contextByLanguage[lang],
      pages,
      page: pages.find(page => page.fullPath === fullPath),
      redirects: {}
    }
    if (!context.page && !relPath.includes('data/reusables')) return
    const fileContents = await fs.promises.readFile(fullPath, 'utf8')
    const { content } = frontmatter(fileContents)
    try {
      await renderContent.liquid.parseAndRender(content, context)
    } catch (err) {
      console.log(chalk.bold(relPath))
      console.log(chalk.red(`  error message: ${err.message}`))
    }
  })
}

main()
