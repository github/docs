import { DefaultLayout } from 'components/DefaultLayout'
import { TableOfContents } from 'components/landing/TableOfContents'
import { useTocLandingContext } from 'components/context/TocLandingContext'
import { ArticleTopper } from 'components/article/ArticleTopper'
import { ArticleTitle } from 'components/article/ArticleTitle'
import { ArticleContent } from 'components/article/ArticleContent'
import { ArticleList } from 'components/landing/ArticleList'
import { useTranslation } from 'components/hooks/useTranslation'
import { ArticleGridLayout } from 'components/article/ArticleGridLayout'

export const TocLanding = () => {
  const { title, introPlainText, tocItems, productCallout, variant, featuredLinks, renderedPage } =
    useTocLandingContext()
  const { t } = useTranslation('toc')

  return (
    <DefaultLayout>
      <div className="container-xl px-3 px-md-6 my-4 my-lg-4">
        <ArticleTopper />

        <ArticleGridLayout className="mt-7">
          <ArticleTitle>{title}</ArticleTitle>

          <div className="lead-mktg">
            <p>{introPlainText}</p>
          </div>

          {productCallout && (
            <div
              className="product-callout border rounded-1 mb-4 p-3 color-border-success color-bg-success"
              dangerouslySetInnerHTML={{ __html: productCallout }}
            />
          )}

          <div className="border-bottom border-xl-0 pb-4 mb-5 pb-xl-2 mb-xl-2" />

          <div className={variant === 'expanded' ? 'mt-7' : 'mt-2'}>
            {featuredLinks.gettingStarted && featuredLinks.popular && (
              <div className="pb-8 container-xl">
                <div className="gutter gutter-xl-spacious clearfix">
                  <div className="col-12 col-lg-6 mb-md-4 mb-lg-0 float-left">
                    <ArticleList
                      title={t('getting_started')}
                      variant="spaced"
                      articles={featuredLinks.gettingStarted}
                    />
                  </div>

                  <div className="col-12 col-lg-6 float-left">
                    <ArticleList
                      title={t('popular')}
                      variant="spaced"
                      articles={featuredLinks.popular}
                    />
                  </div>
                </div>
              </div>
            )}

            {renderedPage && <ArticleContent>{renderedPage}</ArticleContent>}

            <TableOfContents items={tocItems} variant={variant} />
          </div>
        </ArticleGridLayout>
      </div>
    </DefaultLayout>
  )
}
