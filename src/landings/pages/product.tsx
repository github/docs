import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

// "legacy" javascript needed to maintain existing functionality
// typically operating on elements **within** an article.
import copyCode from '@/frame/components/lib/copy-code'
import toggleAnnotation from '@/frame/components/lib/toggle-annotations'
import wrapCodeTerms from '@/frame/components/lib/wrap-code-terms'

import {
  MainContextT,
  MainContext,
  getMainContext,
  addUINamespaces,
} from '@/frame/components/context/MainContext'

import {
  getProductLandingContextFromRequest,
  ProductLandingContextT,
  ProductLandingContext,
} from '@/landings/components/ProductLandingContext'
import {
  getProductGuidesContextFromRequest,
  ProductGuidesContextT,
  ProductGuidesContext,
} from '@/landings/components/ProductGuidesContext'

import {
  getArticleContextFromRequest,
  ArticleContextT,
  ArticleContext,
} from '@/frame/components/context/ArticleContext'
import { ArticlePage } from '@/frame/components/article/ArticlePage'

import { ProductLanding } from '@/landings/components/ProductLanding'
import { ProductGuides } from '@/landings/components/ProductGuides'
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
  BespokeContext,
  getBespokeContextFromRequest,
  BespokeContextT,
} from '@/landings/context/BespokeContext'
import { DiscoveryLanding } from '@/landings/components/discovery/DiscoveryLanding'
import {
  DiscoveryContext,
  DiscoveryContextT,
  getDiscoveryContextFromRequest,
} from '@/landings/context/DiscoveryContext'
import { JourneyLanding } from '@/landings/components/journey/JourneyLanding'
import {
  getJourneyContextFromRequest,
  JourneyContext,
  JourneyContextT,
} from '@/landings/context/JourneyContext'

function initiateArticleScripts() {
  copyCode()
  wrapCodeTerms()
  toggleAnnotation()
}

type Props = {
  mainContext: MainContextT
  productLandingContext?: ProductLandingContextT
  productGuidesContext?: ProductGuidesContextT
  tocLandingContext?: TocLandingContextT
  articleContext?: ArticleContextT
  categoryLandingContext?: CategoryLandingContextT
  bespokeContext?: BespokeContextT
  discoveryContext?: DiscoveryContextT
  journeyContext?: JourneyContextT
}
const GlobalPage = ({
  mainContext,
  productLandingContext,
  productGuidesContext,
  tocLandingContext,
  articleContext,
  categoryLandingContext,
  bespokeContext,
  journeyContext,
  discoveryContext,
}: Props) => {
  const router = useRouter()

  useEffect(() => {
    // https://stackoverflow.com/a/67063998
    initiateArticleScripts() // on initiate page
    router.events.on('routeChangeComplete', initiateArticleScripts) // on client side route
    return () => {
      router.events.off('routeChangeComplete', initiateArticleScripts)
    }
  }, [router.events])

  let content
  if (bespokeContext) {
    content = (
      <BespokeContext.Provider value={bespokeContext}>
        <BespokeLanding />
      </BespokeContext.Provider>
    )
  } else if (discoveryContext) {
    content = (
      <DiscoveryContext.Provider value={discoveryContext}>
        <DiscoveryLanding />
      </DiscoveryContext.Provider>
    )
  } else if (journeyContext) {
    content = (
      <JourneyContext.Provider value={journeyContext}>
        <JourneyLanding />
      </JourneyContext.Provider>
    )
  } else if (productLandingContext) {
    content = (
      <ProductLandingContext.Provider value={productLandingContext}>
        <ProductLanding />
      </ProductLandingContext.Provider>
    )
  } else if (productGuidesContext) {
    content = (
      <ProductGuidesContext.Provider value={productGuidesContext}>
        <ProductGuides />
      </ProductGuidesContext.Provider>
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
    // In local dev, when Next.js needs the initial compiled version
    // it will request `/_next/static/webpack/$HASH.webpack.hot-update.json`
    // or `/_next/webpack-hmr` and then we just let the `content` be undefined.
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
  const req = context.req as any
  const res = context.res as any

  const props: Props = {
    mainContext: await getMainContext(req, res),
  }
  const { currentLayoutName, relativePath } = props.mainContext

  const additionalUINamespaces: string[] = []

  // This looks a little funky, but it's so we only send one context's data to the client
  // TODO: TEMP: This is a temporary solution to turn off/on new landing pages while we develop them
  if (currentLayoutName === 'bespoke-landing' || req.query?.feature === 'bespoke-landing') {
    props.bespokeContext = await getBespokeContextFromRequest(req)
    additionalUINamespaces.push('bespoke_landing')
  } else if (currentLayoutName === 'journey-landing' || req.query?.feature === 'journey-landing') {
    props.journeyContext = await getJourneyContextFromRequest(req)
    additionalUINamespaces.push('journey_landing')
  } else if (
    currentLayoutName === 'discovery-landing' ||
    req?.query?.feature === 'discovery-landing'
  ) {
    props.discoveryContext = await getDiscoveryContextFromRequest(req)
    additionalUINamespaces.push('discovery_landing')
  } else if (currentLayoutName === 'product-landing') {
    props.productLandingContext = await getProductLandingContextFromRequest(req)
    additionalUINamespaces.push('product_landing')
  } else if (currentLayoutName === 'product-guides') {
    props.productGuidesContext = getProductGuidesContextFromRequest(req)
    additionalUINamespaces.push('product_guides')
  } else if (relativePath?.endsWith('index.md')) {
    if (currentLayoutName === 'category-landing') {
      props.categoryLandingContext = getCategoryLandingContextFromRequest(req)
    } else {
      props.tocLandingContext = getTocLandingContextFromRequest(req)
      if (props.tocLandingContext.currentLearningTrack?.trackName) {
        additionalUINamespaces.push('learning_track_nav')
      }
    }
  } else if (props.mainContext.page) {
    // All articles that might have hover cards needs this
    additionalUINamespaces.push('popovers')

    props.articleContext = getArticleContextFromRequest(req)
    if (props.articleContext.currentLearningTrack?.trackName) {
      additionalUINamespaces.push('learning_track_nav')
    }
  }

  addUINamespaces(req, props.mainContext.data.ui, additionalUINamespaces)

  return {
    props,
  }
}
