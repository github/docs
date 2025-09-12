import { useMemo } from 'react'

import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { useLandingContext } from '@/landings/context/LandingContext'
import { LandingHero } from '@/landings/components/shared/LandingHero'
import { ArticleGrid } from '@/landings/components/shared/LandingArticleGridWithFilter'

import type { ArticleCardItems } from '@/landings/types'

export const BespokeLanding = () => {
  const { title, intro, heroImage, introLinks, tocItems } = useLandingContext()

  const flatArticles: ArticleCardItems = useMemo(
    () => tocItems.flatMap((item) => item.childTocItems || []),
    [tocItems],
  )

  return (
    <DefaultLayout>
      <div data-search="article-body">
        <LandingHero title={title} intro={intro} heroImage={heroImage} introLinks={introLinks} />

        <div data-search="hide">
          <ArticleGrid flatArticles={flatArticles} />
        </div>
      </div>
    </DefaultLayout>
  )
}
