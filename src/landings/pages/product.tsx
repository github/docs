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
import { useEffect } from 'react'

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
}
const GlobalPage = ({
  mainContext,
  productLandingContext,
  productGuidesContext,
  tocLandingContext,
  articleContext,
  categoryLandingContext,
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
  if (productLandingContext) {
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
  if (currentLayoutName === 'product-landing') {
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
