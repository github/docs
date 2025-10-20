import { useRouter } from 'next/router'
import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { useProductLandingContext } from '@/landings/components/ProductLandingContext'

import { LandingHero } from '@/landings/components/LandingHero'
import { FeaturedArticles } from '@/landings/components/FeaturedArticles'
import { GuideCards } from '@/landings/components/GuideCards'
import { SponsorsExamples } from '@/landings/components/SponsorsExamples'
import { CommunityExamples } from '@/landings/components/CommunityExamples'
import { LandingSection } from '@/landings/components/LandingSection'
import { useTranslation } from '@/languages/components/useTranslation'
import { ProductArticlesList } from '@/landings/components/ProductArticlesList'
import { ProductReleases } from '@/landings/components/ProductReleases'
import { useVersion } from '@/versions/components/useVersion'
import { RestRedirect } from '@/rest/components/RestRedirect'
import { UtmPreserver } from '@/frame/components/UtmPreserver'

export const ProductLanding = () => {
  const router = useRouter()
  const { isEnterpriseServer } = useVersion()
  const { title, shortTitle, featuredLinks, productUserExamples, productCommunityExamples } =
    useProductLandingContext()
  const { t } = useTranslation('product_landing')

  return (
    <DefaultLayout>
      <UtmPreserver />
      <div data-search="article-body">
        {router.query.productId === 'rest' && <RestRedirect />}
        <LandingSection className="pt-3">
          <LandingHero />
        </LandingSection>

        <div data-search="hide">
          <LandingSection>
            <FeaturedArticles />
          </LandingSection>

          {productCommunityExamples.length > 0 && (
            <LandingSection title={t('communities_using_discussions')} className="my-6 pb-6">
              <CommunityExamples />
            </LandingSection>
          )}

          {productUserExamples.length > 0 && (
            <LandingSection title={t('sponsor_community')} className="my-6 pb-6">
              <SponsorsExamples />
            </LandingSection>
          )}

          {router.query.productId === 'admin' && isEnterpriseServer && (
            <LandingSection title={t('supported_releases')} className="my-6 pb-6">
              <ProductReleases />
            </LandingSection>
          )}

          {featuredLinks.guideCards?.length > 0 && (
            <div className="color-bg-subtle py-6">
              <LandingSection title={t('guides')} sectionLink="guides-2" className="my-6">
                <GuideCards />
              </LandingSection>
            </div>
          )}

          <LandingSection
            title={t('all_docs').replace('{{ title }}', shortTitle || title)}
            sectionLink="all-docs"
            className="pt-9"
          >
            <ProductArticlesList />
          </LandingSection>
        </div>
      </div>
    </DefaultLayout>
  )
}
