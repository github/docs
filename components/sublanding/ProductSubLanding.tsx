import { DefaultLayout } from 'components/DefaultLayout'
import { useProductSubLandingContext } from 'components/context/ProductSubLandingContext'
import React from 'react'
import { LandingSection } from 'components/landing/LandingSection'
import { SubLandingHero } from 'components/sublanding/SubLandingHero'
import { LearningTracks } from 'components/sublanding/LearningTracks'
import { ArticleCards } from 'components/sublanding/ArticleCards'
import { useTranslation } from 'components/hooks/useTranslation'

export const ProductSubLanding = () => {
  const { title, learningTracks, includeGuides } = useProductSubLandingContext()
  const { t } = useTranslation('sub_landing')
  return (
    <DefaultLayout>
      <LandingSection className="pt-3">
        <SubLandingHero />
      </LandingSection>

      {learningTracks && learningTracks.length > 0 && (
        <LandingSection
          title={`${title} learning paths`}
          className="border-top py-6"
          sectionLink="learning-paths"
          description={t('learning_paths_desc')}
        >
          <LearningTracks />
        </LandingSection>
      )}

      {includeGuides && (
        <LandingSection
          title={`All ${title} guides`}
          className="border-top py-6 color-border-primary"
          sectionLink="all-guides"
        >
          <ArticleCards />
        </LandingSection>
      )}
    </DefaultLayout>
  )
}
