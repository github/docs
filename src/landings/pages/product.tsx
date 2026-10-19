import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import type { Response } from 'express'
import { useRouter } from 'next/router'

import type { ExtendedRequest } from '@/types'
import type { JourneyTrack } from '@/journeys/lib/journey-path-resolver'

// Article pages need these scripts for behavior inside rendered article content.
import copyCode from '@/frame/components/lib/copy-code'
import toggleAnnotation from '@/frame/components/lib/toggle-annotations'

import {
  MainContextT,
  MainContext,
  getMainContext,
  addUINamespaces,
} from '@/frame/components/context/MainContext'

import {
  getArticleContextFromRequest,
  ArticleContextT,
  ArticleContext,
} from '@/frame/components/context/ArticleContext'
import { ArticlePage } from '@/frame/components/article/ArticlePage'

import { TocLanding } from '@/landings/components/TocLanding'
import { CategoryLanding } from '@/landings/components/CategoryLanding'
import {
  getTocLandingContextFromRequest,
  TocLandingContext,
  TocLandingContextT,
} from '@/frame/components/context/TocLandingContext'
import {
  getCategoryLandingContextFromRequest,
  CategoryLandingContext,
  CategoryLandingContextT,
} from '@/frame/components/context/CategoryLandingContext'
import { BespokeLanding } from '@/landings/components/bespoke/BespokeLanding'
import {
  LandingContext,
  getLandingContextFromRequest,
  LandingContextT,
} from '@/landings/context/LandingContext'
import { DiscoveryLanding } from '@/landings/components/discovery/DiscoveryLanding'
import { JourneyLanding } from '@/landings/components/journey/JourneyLanding'

function initiateArticleScripts() {
  copyCode()
  toggleAnnotation()
}

type Props = {
  mainContext: MainContextT
  tocLandingContext?: TocLandingContextT
  articleContext?: ArticleContextT
  categoryLandingContext?: CategoryLandingContextT
  bespokeContext?: LandingContextT
  discoveryContext?: LandingContextT
  journeyContext?: LandingContextT
}
const GlobalPage = ({
  mainContext,
  tocLandingContext,
  articleContext,
  categoryLandingContext,
  bespokeContext,
  journeyContext,
  discoveryContext,
}: Props) => {
  const router = useRouter()

  useEffect(() => {
    // Mount and route-change init; Next.js keeps this mounted: https://stackoverflow.com/a/67063998
    initiateArticleScripts()
    router.events.on('routeChangeComplete', initiateArticleScripts)
    return () => {
      router.events.off('routeChangeComplete', initiateArticleScripts)
    }
  }, [router.events])

  let content
  if (bespokeContext) {
    content = (
      <LandingContext.Provider value={bespokeContext}>
        <BespokeLanding />
      </LandingContext.Provider>
    )
  } else if (discoveryContext) {
    content = (
      <LandingContext.Provider value={discoveryContext}>
        <DiscoveryLanding />
      </LandingContext.Provider>
    )
  } else if (journeyContext) {
    content = (
      <LandingContext.Provider value={journeyContext}>
        <JourneyLanding />
      </LandingContext.Provider>
    )
  } else if (categoryLandingContext) {
    content = (
      <CategoryLandingContext.Provider value={categoryLandingContext}>
        <CategoryLanding />
      </CategoryLandingContext.Provider>
    )
  } else if (tocLandingContext) {
    content = (
      <TocLandingContext.Provider value={tocLandingContext}>
        <TocLanding />
      </TocLandingContext.Provider>
    )
  } else if (articleContext) {
    content = (
      <ArticleContext.Provider value={articleContext}>
        <ArticlePage />
      </ArticleContext.Provider>
    )
  } else {
    // Let Next.js hot-reload probes render empty content during local development.
    if (
      !(router.asPath.startsWith('/_next/static/') || router.asPath.startsWith('/_next/webpack'))
    ) {
      throw new Error(`No context provided to page (${router.asPath})`)
    }
  }

  return <MainContext.Provider value={mainContext}>{content}</MainContext.Provider>
}

export default GlobalPage

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as unknown as ExtendedRequest
  const res = context.res as unknown as Response

  const props: Props = {
    mainContext: await getMainContext(req, res),
  }
  const { currentLayoutName, relativePath } = props.mainContext

  const additionalUINamespaces: string[] = []

  // Send only the active page context to the client to avoid unused page data.
  if (currentLayoutName === 'bespoke-landing') {
    props.bespokeContext = await getLandingContextFromRequest(req, 'bespoke')
    additionalUINamespaces.push('product_landing', 'carousels')
  } else if (currentLayoutName === 'journey-landing') {
    props.journeyContext = await getLandingContextFromRequest(req, 'journey')

    // Middleware resolves journey tracks, so add them to the journey context before rendering.
    const page = req.context?.page as { resolvedJourneyTracks?: JourneyTrack[] } | undefined
    if (page?.resolvedJourneyTracks) {
      props.journeyContext.journeyTracks = page.resolvedJourneyTracks
    }

    additionalUINamespaces.push('journey_landing', 'product_landing')
  } else if (currentLayoutName === 'discovery-landing') {
    props.discoveryContext = await getLandingContextFromRequest(req, 'discovery')
    additionalUINamespaces.push('product_landing', 'carousels')
  } else if (relativePath?.endsWith('index.md')) {
    if (currentLayoutName === 'category-landing') {
      props.categoryLandingContext = getCategoryLandingContextFromRequest(
        req as unknown as Parameters<typeof getCategoryLandingContextFromRequest>[0],
      )
    } else {
      props.tocLandingContext = getTocLandingContextFromRequest(
        req as unknown as Parameters<typeof getTocLandingContextFromRequest>[0],
      )
    }
  } else if (props.mainContext.page) {
    // Articles need the popovers namespace for hover cards.
    additionalUINamespaces.push('popovers')

    props.articleContext = getArticleContextFromRequest(
      req as unknown as Parameters<typeof getArticleContextFromRequest>[0],
    )
    if (props.articleContext.currentJourneyTrack?.trackId) {
      additionalUINamespaces.push('journey_track_nav')
    }
  }

  addUINamespaces(req, props.mainContext.data.ui, additionalUINamespaces)

  return {
    props,
  }
}
