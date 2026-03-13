import type { Context, Page } from '@/types'
import type { PageTransformer, TemplateData, Section, LinkGroup, LinkData } from './types'
import { renderContent } from '@/content-render/index'
import { loadTemplate } from '@/article-api/lib/load-template'

interface ProcessedLink {
  href: string
  title?: string
  intro?: string
}

interface LearningTrack {
  title: string
  guides: ProcessedLink[]
}

/**
 * ProductGuidesPage extends Page with optional guide and learning track fields.
 * - includeGuides/rawIncludeGuides: Curated list of guide articles (processed objects vs raw paths)
 * - learningTracks/rawLearningTracks: Grouped tutorials (processed objects vs raw track IDs)
 */
interface ProductGuidesPage extends Page {
  includeGuides?: ProcessedLink[]
  rawIncludeGuides?: string[]
  learningTracks?: LearningTrack[]
  rawLearningTracks?: string[]
}

/**
 * Transforms product-guides pages into markdown format.
 * Handles includeGuides (curated articles) and learningTracks (grouped tutorials).
 */
export class ProductGuidesTransformer implements PageTransformer {
  templateName = 'landing-page.template.md'

  canTransform(page: Page): boolean {
    return page.layout === 'product-guides'
  }

  async transform(page: Page, pathname: string, context: Context): Promise<string> {
    const templateData = await this.prepareTemplateData(page, pathname, context)
    const templateContent = loadTemplate(this.templateName)

    return await renderContent(templateContent, {
      ...context,
      ...templateData,
      markdownRequested: true,
    })
  }

  private async prepareTemplateData(
    page: Page,
    pathname: string,
    context: Context,
  ): Promise<TemplateData> {
    const guidesPage = page as ProductGuidesPage
    const sections: Section[] = []
    const groups: LinkGroup[] = []

    // Include guides
    const includeGuidesData = guidesPage.includeGuides ?? guidesPage.rawIncludeGuides
    if (includeGuidesData && includeGuidesData.length > 0) {
      const { default: getLinkData } = await import('@/learning-track/lib/get-link-data')

      const isProcessed = typeof includeGuidesData[0] === 'object'

      let processedLinks: ProcessedLink[]
      if (isProcessed) {
        processedLinks = includeGuidesData as ProcessedLink[]
      } else {
        processedLinks =
          (await getLinkData(includeGuidesData as string[], context, {
            title: true,
            intro: true,
          })) || []
      }

      const links: LinkData[] = (processedLinks || []).map((item) => ({
        href: item.href,
        title: item.title || '',
        intro: item.intro || '',
      }))

      const validLinks = links.filter((l) => l.href)
      if (validLinks.length > 0) {
        groups.push({ title: 'Guides', links: validLinks })
      }
    }

    // Learning tracks
    const learningTracksData = guidesPage.learningTracks ?? guidesPage.rawLearningTracks
    if (learningTracksData && learningTracksData.length > 0) {
      let processedTracks: LearningTrack[]
      if (Array.isArray(guidesPage.learningTracks) && guidesPage.learningTracks.length > 0) {
        processedTracks = guidesPage.learningTracks
      } else {
        const { default: processLearningTracks } = await import(
          '@/learning-track/lib/process-learning-tracks'
        )
        const { learningTracks } = await processLearningTracks(
          learningTracksData as string[],
          context,
        )
        processedTracks = learningTracks
      }

      for (const track of processedTracks) {
        if (!track.guides || !Array.isArray(track.guides)) continue

        const links: LinkData[] = track.guides.map((guide) => ({
          href: guide.href,
          title: guide.title || '',
          intro: guide.intro || '',
        }))

        if (links.length > 0) {
          groups.push({ title: track.title, links })
        }
      }
    }

    if (groups.length > 0) {
      sections.push({
        title: 'Links',
        groups,
      })
    }

    const intro = page.intro ? await page.renderProp('intro', context, { textOnly: true }) : ''
    const title = await page.renderTitle(context, { unwrap: true })

    return {
      title,
      intro,
      sections,
    }
  }
}
