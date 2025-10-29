import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { useLandingContext } from '@/landings/context/LandingContext'
import { LandingHero } from '@/landings/components/shared/LandingHero'
import { ArticleGrid } from '@/landings/components/shared/LandingArticleGridWithFilter'
import { UtmPreserver } from '@/frame/components/UtmPreserver'
import { LandingCarousel } from '@/landings/components/shared/LandingCarousel'

export const BespokeLanding = () => {
  const {
    title,
    intro,
    heroImage,
    introLinks,
    tocItems,
    recommended,
    includedCategories,
    landingType,
  } = useLandingContext()

  return (
    <DefaultLayout>
      <UtmPreserver />
      <div data-search="article-body">
        <LandingHero title={title} intro={intro} heroImage={heroImage} introLinks={introLinks} />

        <div className="container-xl px-3 px-md-6 mt-6 mb-4">
          <LandingCarousel recommended={recommended} />
          <ArticleGrid
            tocItems={tocItems}
            includedCategories={includedCategories}
            landingType={landingType}
          />
        </div>
      </div>
    </DefaultLayout>
  )
}
