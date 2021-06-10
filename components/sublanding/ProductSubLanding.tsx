import { DefaultLayout } from 'components/DefaultLayout'
import { useProductSubLandingContext } from 'components/context/ProductSubLandingContext'
import React from 'react'
import { SubLandingSection } from 'components/sublanding/SubLandingSection'
import { SubLandingHero } from 'components/sublanding/SubLandingHero'
import { LearningTracks } from 'components/sublanding/LearningTracks'
import { ArticleCards } from 'components/sublanding/ArticleCards'

export const ProductSubLanding = () => {
  const {
    title,
    learningTracks,
    includeGuides
  } = useProductSubLandingContext()
  
  return (
    <DefaultLayout>
      <SubLandingSection>
        <SubLandingHero />
      </SubLandingSection>

      {learningTracks && learningTracks.length > 0 && (
        <SubLandingSection title={`${title} learning paths`} className="border-top py-6" sectionLink="learning-paths" description="learning_paths_desc">
          <LearningTracks />
        </SubLandingSection>
      )}

      {includeGuides && (
        <SubLandingSection title={`All ${title} guides`} className="border-top py-6 color-border-primary" sectionLink="all-guides">
          <ArticleCards />
        </SubLandingSection>
      )}
    </DefaultLayout>
  )
}
