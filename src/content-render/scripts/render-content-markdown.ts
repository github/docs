import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

import { renderLiquid } from '@/content-render/liquid/index'
import shortVersionsMiddleware from '@/versions/middleware/short-versions'
import type { ExtendedRequest } from '@/types'

const { loadPages } = await import('@/frame/lib/page-data')
const { allVersions } = await import('@/versions/lib/all-versions')

const contentCopilotDir = path.join(process.cwd(), 'content-copilot')

if (!fs.existsSync(contentCopilotDir)) fs.mkdirSync(contentCopilotDir)

// Load all pages
const allPages = await loadPages()
const pages = allPages.filter(
  (page) =>
    // Files we want to check: English and FPT only
    // Files we do not want to check:
    // any index.md files
    // /graphql/overview/explorer.md since it's not a real content page
    // /early-access/ since we don't want copilot looking at these
    page.languageCode === 'en' &&
    page.applicableVersions.includes('free-pro-team@latest') &&
    !page.relativePath.endsWith('index.md') &&
    !page.relativePath.endsWith('graphql/overview/explorer.md') &&
    !page.relativePath.includes('/early-access/'),
)

for (const page of pages) {
  console.log(`---\nStart: Creating directories for: ${page.relativePath}`)
  const dirnames = page.relativePath.substring(0, page.relativePath.lastIndexOf('/'))

  fs.mkdirSync(`${contentCopilotDir}/${dirnames}`, { recursive: true })
  // Context needed to render the content liquid
  const req = { language: 'en' } as ExtendedRequest
  const contextualize = (req: ExtendedRequest): void => {
    if (!req.context) return
    if (!req.context.currentVersion) return
    req.context.currentVersionObj = req.context.allVersions?.[req.context.currentVersion]
    shortVersionsMiddleware(req, null, () => {})
  }

  req.context = {
    currentLanguage: 'en',
    currentVersion: 'free-pro-team@latest',
    page: {} as any, // Empty page object used only for context initialization
    allVersions,
  }
  contextualize(req)

  try {
    console.log(`Rendering markdown for: ${page.title}`)
    let frontmatterMarkdown = `# ${await renderLiquid(page.title, req.context)}\n\n`

    if (page.intro) {
      frontmatterMarkdown += `${await renderLiquid(page.intro, req.context)}\n\n`
    }

    if (page.permissions) {
      frontmatterMarkdown += `**Who can use this feature**: ${await renderLiquid(
        page.permissions,
        req.context,
      )}\n`
    }

    if (page.product) {
      frontmatterMarkdown += `${await renderLiquid(page.product, req.context)}\n`
    }
    const rendered = await renderLiquid(page.markdown, req.context)
    console.log('Rendered markdown')
    console.log(`Writing file to: ${contentCopilotDir}/${page.relativePath}`)
    fs.writeFileSync(
      `${contentCopilotDir}/${page.relativePath}`,
      frontmatterMarkdown + rendered,
      'utf8',
    )
    console.log(`Done: written file\n---`)
  } catch (err: any) {
    // Standard catch-all for error handling in scripts
    console.log(err)
  }
}
console.log('---\nWriting files done. Now linting content...\n')
// Content linter to remove any blank lines
execSync('npm run lint-content -- --paths content-copilot --rules no-multiple-blanks --fix')
console.log(`Finished - content is available in: ${contentCopilotDir}`)
