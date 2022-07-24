import React from 'react'
import { DefaultLayout } from 'components/DefaultLayout'
import { useProductGuidesContext } from 'components/context/ProductGuidesContext'
import { LandingSection } from 'components/landing/LandingSection'
import { GuidesHero } from 'components/guides/GuidesHero'
import { LearningTracks } from 'components/guides/LearningTracks'
import { ArticleCards } from 'components/guides/ArticleCards'
import { useTranslation } from 'components/hooks/useTranslation'

export const ProductGuides = () => {
  const { title, learningTracks, includeGuides } = useProductGuidesContext()
  const { t } = useTranslation('product_guides')

  return (
    <DefaultLayout>
      <LandingSection className="pt-3">
        <GuidesHero />
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
          className="border-top py-6 color-border-default"
          sectionLink="all-guides"
        >
          <ArticleCards />
        </LandingSection>
      )}
    </DefaultLayout>
  )
}
