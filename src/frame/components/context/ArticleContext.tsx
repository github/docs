import { SupportPortalVaIframeProps } from '@/frame/components/article/SupportPortalVaIframe'
import { createContext, useContext } from 'react'
import type { JSX } from 'react'
import type { JourneyContext } from '@/journeys/lib/journey-path-resolver'

export type MiniTocItem = {
  platform?: string
  contents: {
    href: string
    title: string
  }
  items?: MiniTocItem[]
}

export type ArticleContextT = {
  title: string
  intro: string
  effectiveDate: string
  renderedPage: string | JSX.Element[]
  miniTocItems: Array<MiniTocItem>
  permissions?: string
  includesPlatformSpecificContent: boolean
  includesToolSpecificContent: boolean
  defaultPlatform?: string
  defaultTool?: string
  product?: string
  currentJourneyTrack?: JourneyContext
  detectedPlatforms: Array<string>
  detectedTools: Array<string>
  allTools: Record<string, string>
  supportPortalVaIframeProps: SupportPortalVaIframeProps
  currentLayout?: string
  currentPath: string
}

export const ArticleContext = createContext<ArticleContextT | null>(null)

export const useArticleContext = (): ArticleContextT => {
  const context = useContext(ArticleContext)

  if (!context) {
    throw new Error('"useArticleContext" may only be used inside "ArticleContext.Provider"')
  }

  return context
}

const PagePathToVaFlowMapping: Record<string, string> = {
  'content/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile.md':
    'contribution_troubleshooting',
  'content/authentication/securing-your-account-with-two-factor-authentication-2fa/recovering-your-account-if-you-lose-your-2fa-credentials.md':
    '2fa',
  'content/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https.md':
    'pages_ssl_check',
}

// Request type for context extraction — uses Record<string, unknown> for the page
// because the Page type doesn't include all runtime-computed properties.
interface ContextRequest {
  context: {
    page: Record<string, unknown> & { fullPath: string; title: string; intro: string }
    renderedPage?: string
    miniTocItems?: MiniTocItem[]
    currentJourneyTrack?: JourneyContext
    currentLayoutName?: string
    currentPath?: string
    [key: string]: unknown
  }
  [key: string]: unknown
}

export const getArticleContextFromRequest = (req: ContextRequest): ArticleContextT => {
  const page = req.context.page

  const effectiveDate = (page.effectiveDate as string) || ''
  if (effectiveDate) {
    if (isNaN(Date.parse(effectiveDate))) {
      throw new Error(
        'The "effectiveDate" frontmatter property is not valid. Please make sure it is YEAR-MONTH-DAY',
      )
    }
  }

  const supportPortalUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://support.github.com'
      : // Assume that a developer is not testing the VA iframe locally if this env var is not set
        process.env.SUPPORT_PORTAL_URL || ''

  const supportPortalVaIframeProps = {
    supportPortalUrl,
    vaFlowUrlParameter: PagePathToVaFlowMapping[req.context.page.fullPath] || '',
  }

  return {
    title: page.title,
    intro: page.intro,
    effectiveDate,
    renderedPage: (req.context.renderedPage as string) || '',
    miniTocItems: req.context.miniTocItems || [],
    permissions: (page.permissions as string) || '',
    includesPlatformSpecificContent: (page.includesPlatformSpecificContent as boolean) || false,
    includesToolSpecificContent: (page.includesToolSpecificContent as boolean) || false,
    defaultPlatform: (page.defaultPlatform as string) || '',
    defaultTool: (page.defaultTool as string) || '',
    product: (page.product as string) || '',
    currentJourneyTrack: req.context.currentJourneyTrack,
    detectedPlatforms: (page.detectedPlatforms as string[]) || [],
    detectedTools: (page.detectedTools as string[]) || [],
    allTools: (page.allToolsParsed as Record<string, string>) || {},
    supportPortalVaIframeProps,
    currentLayout: req.context.currentLayoutName,
    currentPath: req.context.currentPath || '',
  }
}
