import { DefaultLayout } from 'components/DefaultLayout'
import { useProductLandingContext } from 'components/context/ProductLandingContext'

import { LandingHero } from 'components/landing/LandingHero'
import { FeaturedArticles } from 'components/landing/FeaturedArticles'
import { GuideCards } from 'components/landing/GuideCards'
import { SponsorsExamples } from 'components/landing/SponsorsExamples'
import { CommunityExamples } from 'components/landing/CommunityExamples'
import { CodeExamples } from 'components/landing/CodeExamples'
import { LandingSection } from 'components/landing/LandingSection'
import { useTranslation } from 'components/hooks/useTranslation'
import { ProductArticlesList } from 'components/landing/ProductArticlesList'

export const ProductLanding = () => {
  const {
    shortTitle,
    guideCards,
    productUserExamples,
    productCommunityExamples,
    productCodeExamples,
  } = useProductLandingContext()
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

      {/* {% if currentVersion contains 'enterprise-server' and currentProduct == 'admin' %}
      {% include product-releases %}
      {% endif %} */}

      {guideCards.length > 0 && (
        <div className="color-bg-tertiary py-6 my-8">
          <LandingSection title={t('guides')} className="my-6">
            <GuideCards />
          </LandingSection>
        </div>
      )}

      <LandingSection sectionLink="all-docs" title={`All ${shortTitle} Docs`}>
        <ProductArticlesList />
      </LandingSection>
    </DefaultLayout>
  )
}
