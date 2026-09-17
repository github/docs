import type { Context, Page } from '@/types'
import type { PageTransformer, TemplateData, Section, LinkData, LinkGroup } from './types'
import { renderContent } from '@/content-render/index'
import { loadTemplate } from '@/article-api/lib/load-template'
import { resolvePath } from '@/article-api/lib/resolve-path'
import { getLinkData } from '@/article-api/lib/get-link-data'

interface JourneyGuide {
  href: string
  alternativeNextStep?: string
}

interface JourneyTrack {
  id: string
  title: string
  description: string
  guides: JourneyGuide[]
}

interface JourneyPage extends Page {
  journeyTracks?: JourneyTrack[]
  children?: string[]
}

/**
 * Transforms journey-landing pages into markdown. Renders journey tracks
 * (grouped learning paths), falling back to a children listing when no track
 * produces a renderable link.
 */
export class JourneyLandingTransformer implements PageTransformer {
  templateName = 'landing-page.template.md'

  canTransform(page: Page): boolean {
    return page.layout === 'journey-landing'
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
    const journeyPage = page as JourneyPage
    const languageCode = page.languageCode || 'en'
    const sections: Section[] = []

    const journeyTracks = journeyPage.journeyTracks
    if (journeyTracks) {
      const groups: LinkGroup[] = []
      for (const track of journeyTracks) {
        const links = await Promise.all(
          (track.guides || []).map(async (guide) => {
            const guideHref = guide.href
            if (!guideHref) return null
            const linkData = await getLinkData(
              guideHref,
              languageCode,
              pathname,
              context,
              resolvePath,
            )
            return linkData
          }),
        )
        const validLinks = links.filter((l): l is LinkData => l !== null && !!l.href)
        if (validLinks.length > 0) {
          groups.push({ title: track.title, links: validLinks })
        }
      }

      if (groups.length > 0) {
        sections.push({
          title: 'Links',
          groups,
        })
      }
    }

    if (sections.length === 0 && journeyPage.children) {
      const links = await Promise.all(
        journeyPage.children.map(async (childHref) => {
          return await getLinkData(childHref, languageCode, pathname, context, resolvePath)
        }),
      )
      const validLinks = links.filter((l): l is LinkData => !!l.href)
      if (validLinks.length > 0) {
        sections.push({
          title: 'Links',
          groups: [{ title: null, links: validLinks }],
        })
      }
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
