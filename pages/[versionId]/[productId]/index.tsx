import { GetServerSideProps } from 'next'

import {
  MainContextT,
  MainContext,
  getMainContextFromRequest,
} from 'components/context/MainContext'

import {
  getProductLandingContextFromRequest,
  ProductLandingContextT,
  ProductLandingContext,
} from 'components/context/ProductLandingContext'

import {
  getArticleContextFromRequest,
  ArticleContextT,
  ArticleContext,
} from 'components/context/ArticleContext'
import { ArticlePage } from 'components/article/ArticlePage'

import { ProductLanding } from 'components/landing/ProductLanding'
import { TocLanding } from 'components/landing/TocLanding'
import {
  getTocLandingContextFromRequest,
  TocLandingContext,
  TocLandingContextT,
} from 'components/context/TocLandingContext'

type Props = {
  mainContext: MainContextT
  productLandingContext: ProductLandingContextT
  tocLandingContext: TocLandingContextT
  articleContext: ArticleContextT
}
const GlobalPage = ({
  mainContext,
  productLandingContext,
  tocLandingContext,
  articleContext,
}: Props) => {
  const { currentLayoutName, page, relativePath } = mainContext

  let content
  if (currentLayoutName === 'product-landing') {
    content = (
      <ProductLandingContext.Provider value={productLandingContext}>
        <ProductLanding />
      </ProductLandingContext.Provider>
    )
  } else if (currentLayoutName === 'product-sublanding') {
    content = <p>todo: product sub-landing</p>
  } else if (relativePath?.endsWith('index.md')) {
    content = (
      <TocLandingContext.Provider value={tocLandingContext}>
        <TocLanding
          variant={
            page.documentType === 'category' || relativePath === 'github/index.md'
              ? 'compact'
              : 'expanded'
          }
        />
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

  return {
    props: {
      mainContext: getMainContextFromRequest(req),
      productLandingContext: getProductLandingContextFromRequest(req),
      tocLandingContext: getTocLandingContextFromRequest(req),
      articleContext: getArticleContextFromRequest(req),
    },
  }
}
