import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

// "legacy" javascript needed to maintain existing functionality
// typically operating on elements **within** an article.
import copyCode from 'components/lib/copy-code'
import localization from 'components/lib/localization'
import wrapCodeTerms from 'components/lib/wrap-code-terms'

import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'

import {
  getProductLandingContextFromRequest,
  ProductLandingContextT,
  ProductLandingContext,
} from 'components/context/ProductLandingContext'
import {
  getProductGuidesContextFromRequest,
  ProductGuidesContextT,
  ProductGuidesContext,
} from 'components/context/ProductGuidesContext'

import {
  getArticleContextFromRequest,
  ArticleContextT,
  ArticleContext,
} from 'components/context/ArticleContext'
import { ArticlePage } from 'components/article/ArticlePage'

import { ProductLanding } from 'components/landing/ProductLanding'
import { ProductGuides } from 'components/guides/ProductGuides'
import { TocLanding } from 'components/landing/TocLanding'
import {
  getTocLandingContextFromRequest,
  TocLandingContext,
  TocLandingContextT,
} from 'components/context/TocLandingContext'
import { useEffect } from 'react'

function initiateArticleScripts() {
  copyCode()
  localization()
  wrapCodeTerms()
}

type Props = {
  mainContext: MainContextT
  productLandingContext: ProductLandingContextT
  productGuidesContext: ProductGuidesContextT
  tocLandingContext: TocLandingContextT
  articleContext: ArticleContextT
}
const GlobalPage = ({
  mainContext,
  productLandingContext,
  productGuidesContext,
  tocLandingContext,
  articleContext,
}: Props) => {
  const { currentLayoutName, relativePath } = mainContext
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
  if (currentLayoutName === 'product-landing') {
    content = (
      <ProductLandingContext.Provider value={productLandingContext}>
        <ProductLanding />
      </ProductLandingContext.Provider>
    )
  } else if (currentLayoutName === 'product-guides') {
    content = (
      <ProductGuidesContext.Provider value={productGuidesContext}>
        <ProductGuides />
      </ProductGuidesContext.Provider>
    )
  } else if (relativePath?.endsWith('index.md')) {
    content = (
      <TocLandingContext.Provider value={tocLandingContext}>
        <TocLanding />
      </TocLandingContext.Provider>
    )
  } else {
    content = (
      <ArticleContext.Provider value={articleContext}>
        <ArticlePage />
      </ArticleContext.Provider>
    )
  }

  return <MainContext.Provider value={mainContext}>{content}</MainContext.Provider>
}

export default GlobalPage

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any
  const res = context.res as any

  return {
    props: {
      mainContext: getMainContext(req, res),
      productLandingContext: getProductLandingContextFromRequest(req),
      productGuidesContext: getProductGuidesContextFromRequest(req),
      tocLandingContext: getTocLandingContextFromRequest(req),
      articleContext: getArticleContextFromRequest(req),
    },
  }
}
