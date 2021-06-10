import { Grid } from '@primer/components'

import { DefaultLayout } from 'components/DefaultLayout'
import { TableOfContents } from 'components/landing/TableOfContents'
import { ArticleVersionPicker } from 'components/article/ArticleVersionPicker'
import { Breadcrumbs } from 'components/Breadcrumbs'
import { useTocLandingContext } from 'components/context/TocLandingContext'
import { ArticleTitle } from 'components/article/ArticleTitle'

export const TocLanding = () => {
  const { title, introPlainText, tocItems, variant } = useTocLandingContext()
  return (
    <DefaultLayout>
      <div className="container-xl px-3 px-md-6 my-4 my-lg-4">
        <div className="d-lg-flex flex-justify-between">
          <div className="d-block d-lg-none">
            <ArticleVersionPicker />
          </div>
          <div className="d-flex flex-items-center">
            <Breadcrumbs />
          </div>
          <div className="d-none d-lg-block">
            <ArticleVersionPicker />
          </div>
        </div>

        <Grid
          gridTemplateColumns="minmax(500px, 720px) minmax(220px, 1fr)"
          gridTemplateRows="auto 1fr"
          gridGap={16}
        >
          <div>
            <div className="mt-8">
              <ArticleTitle>{title}</ArticleTitle>

              <div className="lead-mktg">
                <p>{introPlainText}</p>
              </div>
            </div>

            <div className="border-bottom border-xl-0 pb-4 mb-5 pb-xl-0 mb-xl-0" />

            <div className={variant === 'expanded' ? 'mt-7' : 'mt-2'}>
              <TableOfContents items={tocItems} variant={variant} />
            </div>
          </div>
          <div></div>
        </Grid>
      </div>
    </DefaultLayout>
  )
}
