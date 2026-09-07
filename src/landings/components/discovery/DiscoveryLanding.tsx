import { useRouter } from 'next/router'

import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { useLandingContext } from '@/landings/context/LandingContext'
import { LandingHero } from '@/landings/components/shared/LandingHero'
import { ArticleGrid } from '@/landings/components/shared/LandingArticleGridWithFilter'
import { LandingCarousel } from '@/landings/components/shared/LandingCarousel'
import { LandingSection } from '@/landings/components/shared/LandingSection'
import { UtmPreserver } from '@/frame/components/UtmPreserver'
import { RestRedirect } from '@/rest/components/RestRedirect'
import { useMultiQueryParams } from '@/search/components/hooks/useMultiQueryParams'

export const DiscoveryLanding = () => {
  const router = useRouter()
  const {
    title,
    intro,
    heroImage,
    introLinks,
    tocItems,
    carousels,
    includedCategories,
    landingType,
  } = useLandingContext()
  const { params, updateParams } = useMultiQueryParams({
    useHistory: true,
    excludeFromHistory: ['articles-filter'],
  })

  return (
    <DefaultLayout>
      <UtmPreserver />
      {router.query.productId === 'rest' && <RestRedirect />}
      <div data-search="article-body">
        <LandingHero title={title} intro={intro} heroImage={heroImage} introLinks={introLinks} />
        {/* Render carousels */}
        {carousels &&
          Object.entries(carousels).map(([carouselKey, articles]) => (
            <LandingSection key={carouselKey}>
              <LandingCarousel carouselKey={carouselKey} carouselArticles={articles} />
            </LandingSection>
          ))}

        <LandingSection>
          <ArticleGrid
            tocItems={tocItems}
            includedCategories={includedCategories}
            landingType={landingType}
            params={params}
            updateParams={updateParams}
          />
        </LandingSection>
      </div>
    </DefaultLayout>
  )
}
