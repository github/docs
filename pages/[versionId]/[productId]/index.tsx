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
  getProductSubLandingContextFromRequest,
  ProductSubLandingContextT,
  ProductSubLandingContext,
} from 'components/context/ProductSubLandingContext'

import { ProductLanding } from 'components/landing/ProductLanding'
import { ProductSubLanding } from 'components/landing/ProductSubLanding'
import { TocLanding } from 'components/landing/TocLanding'
import {
  getTocLandingContextFromRequest,
  TocLandingContext,
  TocLandingContextT,
} from 'components/context/TocLandingContext'

type Props = {
  mainContext: MainContextT
  productLandingContext: ProductLandingContextT
  productSubLandingContext: ProductSubLandingContextT
  tocLandingContext: TocLandingContextT
}
const GlobalPage = ({ mainContext, productLandingContext, productSubLandingContext, tocLandingContext }: Props) => {
  const { currentLayoutName, page, relativePath } = mainContext

  let content
  if (currentLayoutName === 'product-landing') {
    content = (
      <ProductLandingContext.Provider value={productLandingContext}>
        <ProductLanding />
      </ProductLandingContext.Provider>
    )
  } else if (currentLayoutName === 'product-sublanding') {
    content = (
      <ProductSubLandingContext.Provider value={productSubLandingContext}>
        <ProductSubLanding />
      </ProductSubLandingContext.Provider>
    )
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
    content = <p>article / fallback rendering</p>
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
      productSubLandingContext: getProductSubLandingContextFromRequest(req),
      tocLandingContext: getTocLandingContextFromRequest(req),
    },
  }
}
