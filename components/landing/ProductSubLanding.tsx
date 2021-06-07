import { DefaultLayout } from 'components/DefaultLayout'
import { useProductSubLandingContext } from 'components/context/ProductSubLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import cx from 'classnames'

import React from 'react'
import { GuideCards } from './GuideCards'
import { LandingSection } from './LandingSection'
import { Breadcrumbs } from 'components/Breadcrumbs'

export const ProductSubLanding = () => {
  const {
  } = useProductSubLandingContext()
  const { t } = useTranslation('product_sublanding')

  return (
    <DefaultLayout>
      <LandingSection className="pt-3">
        <Breadcrumbs />
      </LandingSection>
    </DefaultLayout>
  )
}
