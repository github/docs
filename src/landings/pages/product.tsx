import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

// "legacy" javascript needed to maintain existing functionality
// typically operating on elements **within** an article.
import copyCode from 'components/lib/copy-code'
import toggleAnnotation from 'components/lib/toggle-annotations'
import wrapCodeTerms from 'components/lib/wrap-code-terms'

import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'

import {
  getProductLandingContextFromRequest,
  ProductLandingContextT,
  ProductLandingContext,
} from 'src/landings/components/ProductLandingContext'
import {
  getProductGuidesContextFromRequest,
  ProductGuidesContextT,
  ProductGuidesContext,
} from 'src/landings/components/ProductGuidesContext'

import {
  getArticleContextFromRequest,
  ArticleContextT,
  ArticleContext,
} from 'components/context/ArticleContext'
import { ArticlePage } from 'components/article/ArticlePage'

import { ProductLanding } from 'src/landings/components/ProductLanding'
import { ProductGuides } from 'src/landings/components/ProductGuides'
import { TocLanding } from 'src/landings/components/TocLanding'
import {
  getTocLandingContextFromRequest,
  TocLandingContext,
  TocLandingContextT,
} from 'components/context/TocLandingContext'
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
}
const GlobalPage = ({
  mainContext,
  productLandingContext,
  productGuidesContext,
  tocLandingContext,
  articleContext,
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
    throw new Error('No context provided to page')
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

  // This looks a little funky, but it's so we only send one context's data to the client
  if (currentLayoutName === 'product-landing') {
    props.productLandingContext = await getProductLandingContextFromRequest(req)
  } else if (currentLayoutName === 'product-guides') {
    props.productGuidesContext = getProductGuidesContextFromRequest(req)
  } else if (relativePath?.endsWith('index.md')) {
    props.tocLandingContext = getTocLandingContextFromRequest(req)
  } else {
    props.articleContext = getArticleContextFromRequest(req)
  }

  return {
    props,
  }
}
