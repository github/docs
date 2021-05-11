import { GetServerSideProps } from 'next'

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
import { LandingSection } from 'components/landing/LandingSection'
import { useTranslation } from 'components/hooks/useTranslation'

type Props = {
  mainContext: MainContextT
  productLandingContext: ProductLandingContextT
}
const SponsorsPage = ({ mainContext, productLandingContext }: Props) => {
  return (
    <MainContext.Provider value={mainContext}>
      <ProductLandingContext.Provider value={productLandingContext}>
        <SponsorsPageInner />
      </ProductLandingContext.Provider>
    </MainContext.Provider>
  )
}

const SponsorsPageInner = () => {
  const { guideCards, productUserExamples } = useProductLandingContext()
  const { t } = useTranslation('product_landing')

  return (
    <DefaultLayout>
      <LandingSection className="pt-3">
        <LandingHero />
      </LandingSection>

      <LandingSection>
        <FeaturedArticles />
      </LandingSection>

      {productUserExamples.length > 0 && (
        <LandingSection title={t('sponsor_community')} className="my-6">
          <SponsorsExamples />
        </LandingSection>
      )}

      {guideCards.length > 0 && (
        <div className="bg-guides-gradient py-6">
          <LandingSection title={t('guides')} className="my-6">
            <GuideCards />
          </LandingSection>
        </div>
      )}

      {/* <PageSection title="All GitHub Sponsors Docs">
        <SiteTreeGrid />
      </PageSection>  */}
    </DefaultLayout>
  )
}

export default SponsorsPage

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any

  return {
    props: {
      mainContext: getMainContextFromRequest(req),
      productLandingContext: getProductLandingContextFromRequest(req),
    },
  }
}
