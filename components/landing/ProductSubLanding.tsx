import { DefaultLayout } from 'components/DefaultLayout'
import { useProductSubLandingContext } from 'components/context/ProductSubLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import cx from 'classnames'

import React from 'react'
import { GuideCards } from './GuideCards'
import { LandingSection } from './LandingSection'
import { Breadcrumbs } from 'components/Breadcrumbs'
import { SubLandingSection } from 'components/landing/SubLandingSection'
import { SubLandingHero } from 'components/landing/SubLandingHero'

export const ProductSubLanding = () => {
  const {
  } = useProductSubLandingContext()
  const { t } = useTranslation('product_sublanding')

  return (
    <DefaultLayout>
      <SubLandingSection>
        <SubLandingHero />
      </SubLandingSection>
    </DefaultLayout>
  )
}
