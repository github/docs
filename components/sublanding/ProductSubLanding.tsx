import { DefaultLayout } from 'components/DefaultLayout'
import { useProductSubLandingContext } from 'components/context/ProductSubLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import cx from 'classnames'

import React from 'react'
import { SubLandingSection } from 'components/sublanding/SubLandingSection'
import { SubLandingHero } from 'components/sublanding/SubLandingHero'
import { LearningTracks } from 'components/sublanding/LearningTracks'


export const ProductSubLanding = () => {
  const {
    title,
    learningTracks
  } = useProductSubLandingContext()

  const { t } = useTranslation('product_sublanding')
  
  return (
    <DefaultLayout>
      <SubLandingSection>
        <SubLandingHero />
      </SubLandingSection>

      {learningTracks && learningTracks.length > 0 && (
        <SubLandingSection title={`${title} learning paths`} className="border-top py-6" sectionLink="learning-paths">
          <LearningTracks />
        </SubLandingSection>
      )}
    </DefaultLayout>
  )
}
