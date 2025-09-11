import { useMemo } from 'react'

import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { useLandingContext } from '@/landings/context/LandingContext'
import { LandingHero } from '@/landings/components/shared/LandingHero'
import { ArticleGrid } from '@/landings/components/shared/LandingArticleGridWithFilter'
import { LandingCarousel } from '@/landings/components/shared/LandingCarousel'

import type { ArticleCardItems } from '@/landings/types'

export const DiscoveryLanding = () => {
  const { title, intro, heroImage, introLinks, tocItems, recommended } = useLandingContext()

  const flatArticles: ArticleCardItems = useMemo(
    () => tocItems.flatMap((item) => item.childTocItems || []),
    [tocItems],
  )

  return (
    <DefaultLayout>
      <div>
        <LandingHero title={title} intro={intro} heroImage={heroImage} introLinks={introLinks} />
        <LandingCarousel flatArticles={flatArticles} recommended={recommended} />
        <ArticleGrid flatArticles={flatArticles} />
      </div>
    </DefaultLayout>
  )
}
