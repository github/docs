import { DefaultLayout } from 'components/DefaultLayout'
import { TableOfContents } from 'components/landing/TableOfContents'
import { ArticleVersionPicker } from 'components/article/ArticleVersionPicker'
import { Breadcrumbs } from 'components/Breadcrumbs'
import { useTocLandingContext } from 'components/context/TocLandingContext'
import { ArticleTitle } from 'components/article/ArticleTitle'
import { ArticleList } from 'components/landing/ArticleList'
import { useTranslation } from 'components/hooks/useTranslation'

export const TocLanding = () => {
  const {
    title,
    introPlainText,
    tocItems,
    productCallout,
    variant,
    featuredLinks,
    isEarlyAccess,
    renderedEarlyAccessPage,
  } = useTocLandingContext()
  const { t } = useTranslation('toc')

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
            <div className="mt-7">
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
            </div>

            <div className="border-bottom border-xl-0 pb-4 mb-5 pb-xl-0 mb-xl-0" />

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
              {isEarlyAccess && (
                <div className="markdown-body">
                  <div
                    id="article-contents"
                    className="article-grid-body"
                    dangerouslySetInnerHTML={{ __html: renderedEarlyAccessPage }}
                  />
                </div>
              )}
              <TableOfContents items={tocItems} variant={variant} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </DefaultLayout>
  )
}
