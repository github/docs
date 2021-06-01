import { GetServerSideProps } from 'next'
import { Grid } from '@primer/components'

import {
  MainContextT,
  MainContext,
  getMainContextFromRequest,
} from 'components/context/MainContext'
import { DefaultLayout } from 'components/DefaultLayout'
import {
  getProductLandingContextFromRequest,
  ProductLandingContextT,
  ProductLandingContext,
  useProductLandingContext,
} from 'components/context/ProductLandingContext'

import { LandingHero } from 'components/landing/LandingHero'
import { FeaturedArticles } from 'components/landing/FeaturedArticles'
import { GuideCards } from 'components/landing/GuideCards'
import { SponsorsExamples } from 'components/landing/SponsorsExamples'
import { CommunityExamples } from 'components/landing/CommunityExamples'
import { CodeExamples } from 'components/landing/CodeExamples'
import { LandingSection } from 'components/landing/LandingSection'
import { useTranslation } from 'components/hooks/useTranslation'
import { ProductArticlesList } from 'components/landing/ProductArticlesList'
import { TableOfContents } from 'components/landing/TableOfContents'
import { ArticleVersionPicker } from 'components/article/ArticleVersionPicker'

type Props = {
  mainContext: MainContextT
  productLandingContext: ProductLandingContextT
}
const ProductPage = ({ mainContext, productLandingContext }: Props) => {
  return (
    <MainContext.Provider value={mainContext}>
      <ProductLandingContext.Provider value={productLandingContext}>
        {mainContext.currentLayoutName === 'product-landing' ? (
          <ProductLanding />
        ) : (
          <TocProductLanding />
        )}
      </ProductLandingContext.Provider>
    </MainContext.Provider>
  )
}

const ProductLanding = () => {
  const { title, guideCards, productUserExamples, productCommunityExamples, productCodeExamples } =
    useProductLandingContext()
  const { t } = useTranslation('product_landing')

  return (
    <DefaultLayout>
      <LandingSection className="pt-3">
        <LandingHero />
      </LandingSection>

      <LandingSection>
        <FeaturedArticles />
      </LandingSection>

      {productCodeExamples.length > 0 && (
        <LandingSection title={t('code_examples')} className="my-6">
          <CodeExamples />
        </LandingSection>
      )}

      {productCommunityExamples.length > 0 && (
        <LandingSection title={t('communities_using_discussions')} className="my-6">
          <CommunityExamples />
        </LandingSection>
      )}

      {productUserExamples.length > 0 && (
        <LandingSection title={t('sponsor_community')} className="my-6">
          <SponsorsExamples />
        </LandingSection>
      )}

      {guideCards.length > 0 && (
        <div className="color-bg-tertiary py-6 my-8">
          <LandingSection title={t('guides')} className="my-6">
            <GuideCards />
          </LandingSection>
        </div>
      )}

      <LandingSection sectionLink="all-docs" title={`All ${title} Docs`}>
        <ProductArticlesList />
      </LandingSection>
    </DefaultLayout>
  )
}

const TocProductLanding = () => {
  const { title, introPlainText, tocItems } = useProductLandingContext()
  return (
    <DefaultLayout>
      <Grid
        className="container-xl px-3 px-md-6 my-4 my-lg-4 container-xl "
        gridTemplateColumns="minmax(500px, 720px) minmax(220px, 1fr)"
        gridTemplateRows="auto 1fr"
        gridGap={16}
      >
        <div>
          <h1 className="my-4">{title}</h1>
          <div className="lead-mktg">
            <p>{introPlainText}</p>
          </div>

          <div className="mt-7">
            <TableOfContents items={tocItems} />
          </div>
        </div>
        <div>
          <ArticleVersionPicker />
        </div>
      </Grid>
    </DefaultLayout>
  )
}

export default ProductPage

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any

  return {
    props: {
      mainContext: getMainContextFromRequest(req),
      productLandingContext: getProductLandingContextFromRequest(req),
    },
  }
}
