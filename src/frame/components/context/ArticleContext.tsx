import { SupportPortalVaIframeProps } from 'src/frame/components/article/SupportPortalVaIframe'
import { createContext, useContext } from 'react'

export type LearningTrack = {
  trackTitle: string
  trackName: string
  trackProduct: string
  prevGuide?: { href: string; title: string }
  nextGuide?: { href: string; title: string }
  numberOfGuides: number
  currentGuideIndex: number
}

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
  productVideoUrl?: string
  currentLearningTrack?: LearningTrack
  detectedPlatforms: Array<string>
  detectedTools: Array<string>
  allTools: Record<string, string>
  supportPortalVaIframeProps: SupportPortalVaIframeProps
  currentLayout?: string
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

export const getArticleContextFromRequest = (req: any): ArticleContextT => {
  const page = req.context.page

  if (page.effectiveDate) {
    if (isNaN(Date.parse(page.effectiveDate))) {
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
    effectiveDate: page.effectiveDate || '',
    renderedPage: req.context.renderedPage || '',
    miniTocItems: req.context.miniTocItems || [],
    permissions: page.permissions || '',
    includesPlatformSpecificContent: page.includesPlatformSpecificContent || false,
    includesToolSpecificContent: page.includesToolSpecificContent || false,
    defaultPlatform: page.defaultPlatform || '',
    defaultTool: page.defaultTool || '',
    product: page.product || '',
    productVideoUrl: page.product_video || '',
    currentLearningTrack: req.context.currentLearningTrack,
    detectedPlatforms: page.detectedPlatforms || [],
    detectedTools: page.detectedTools || [],
    allTools: page.allToolsParsed || [], // this is set at the page level, see lib/page.js
    supportPortalVaIframeProps,
    currentLayout: req.context.currentLayoutName,
  }
}
