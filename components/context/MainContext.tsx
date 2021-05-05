import { createContext, useContext } from 'react'

import type { BreadcrumbT } from 'components/Breadcrumbs'

type ProductT = {
  external: boolean
  href: string
  id: string
  name: string
}

type FooterSectionT = {
  heading: string
  links: Record<string, string>
}
type DataT = {
  ui: {
    footer: {
      all_rights_reserved: string
      terms: string
      privacy: string
      security: string
      product: FooterSectionT
      platform: FooterSectionT
      support: FooterSectionT
      company: FooterSectionT
    }
    helpfulness: {
      able_to_find: string
      yes: string
      no: string
      yes_feedback: string
      no_feedback: string
      comment_label: string
      optional: string
      email_label: string
      email_placeholder: string
      send: string
      feedback: string
    }
  }
  reusables: {
    enterprise_deprecation: {
      version_was_deprecated: string
      version_will_be_deprecated: string
      deprecation_details: string
      isOldestReleaseDeprecated: boolean
    }
  }
}
type EnterpriseServerReleases = {
  isOldestReleaseDeprecated: boolean
  oldestSupported: string
  nextDeprecationDate: string
}
export type MainContextT = {
  breadcrumbs?: Record<string, BreadcrumbT>
  builtAssets: { main: { css: string; js: string } }
  expose: string
  activeProducts: Array<ProductT>
  currentProduct: ProductT
  currentLayoutName: string
  data: DataT
  airGap?: boolean
  currentCategory?: string
  relativePath?: string
  enterpriseServerReleases: EnterpriseServerReleases
}

export const getMainContextFromRequest = (req: any): MainContextT => {
  return {
    builtAssets: req.context.builtAssets,
    expose: req.context.expose,
    breadcrumbs: req.context.breadcrumbs,
    activeProducts: req.context.activeProducts,
    currentProduct: req.context.productMap[req.context.currentProduct],
    currentLayoutName: req.context.currentLayoutName,
    data: {
      ui: req.context.site.data.ui,
      reusables: {
        enterprise_deprecation: req.context.site.data.reusables.enterprise_deprecation,
      },
    },
    airGap: req.context.AIRGAP || false,
    currentCategory: req.context.currentCategory || '',
    relativePath: req.context.page.relativePath,
    enterpriseServerReleases: req.context.enterpriseServerReleases,
  }
}

export const MainContext = createContext<MainContextT | null>(null)

export const useMainContext = (): MainContextT => {
  const context = useContext(MainContext)

  if (!context) {
    throw new Error('"useMainContext" may only be used inside "MainContext.Provider"')
  }

  return context
}
