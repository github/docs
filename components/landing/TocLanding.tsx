import { DefaultLayout } from 'components/DefaultLayout'
import { TableOfContents } from 'components/landing/TableOfContents'
import { ArticleVersionPicker } from 'components/article/ArticleVersionPicker'
import { Breadcrumbs } from 'components/Breadcrumbs'
import { useTocLandingContext } from 'components/context/TocLandingContext'
import { ArticleTitle } from 'components/article/ArticleTitle'

export const TocLanding = () => {
  const { title, introPlainText, tocItems, productCallout, variant } = useTocLandingContext()
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

        <div className="article-grid-container">
          <div>
            <div className="mt-8">
              <ArticleTitle>{title}</ArticleTitle>

              <div className="lead-mktg">
                <p>{introPlainText}</p>
              </div>

              {productCallout && (
                <div className="product-callout border rounded-1 mb-4 p-3 color-border-success color-bg-success" dangerouslySetInnerHTML={{__html: productCallout }} />
              )}
            </div>

            <div className="border-bottom border-xl-0 pb-4 mb-5 pb-xl-0 mb-xl-0" />

            <div className={variant === 'expanded' ? 'mt-7' : 'mt-2'}>
              <TableOfContents items={tocItems} variant={variant} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </DefaultLayout>
  )
}
