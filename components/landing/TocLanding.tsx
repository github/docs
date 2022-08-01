import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { DefaultLayout } from 'components/DefaultLayout'
import { TableOfContents } from 'components/landing/TableOfContents'
import { useTocLandingContext } from 'components/context/TocLandingContext'
import { ArticleTitle } from 'components/article/ArticleTitle'
import { MarkdownContent } from 'components/ui/MarkdownContent'
import { ArticleList } from 'components/landing/ArticleList'
import { useTranslation } from 'components/hooks/useTranslation'
import { ArticleGridLayout } from 'components/article/ArticleGridLayout'
import { Callout } from 'components/ui/Callout'
import { Lead } from 'components/ui/Lead'
import { LearningTrackNav } from 'components/article/LearningTrackNav'

const ClientSideRedirectExceptions = dynamic(
  () => import('components/article/ClientsideRedirectExceptions'),
  {
    ssr: false,
  }
)

export const TocLanding = () => {
  const {
    title,
    introPlainText,
    tocItems,
    productCallout,
    variant,
    featuredLinks,
    renderedPage,
    currentLearningTrack,
  } = useTocLandingContext()
  const { t } = useTranslation('toc')

  const { asPath } = useRouter()
  // We have some one-off redirects for rest api docs
  // currently those are limited to the repos page, but
  // that will grow soon as we restructure the rest api docs.
  // This is a workaround to updating the hardcoded links
  // directly in the REST API code in a separate repo, which
  // requires many file changes and teams to sign off.
  // While the organization is turbulent, we can do this.
  // Once it's more settled, we can refactor the rest api code
  // to leverage the OpenAPI urls rather than hardcoded urls.
  // The code below determines if we should bother loading this redirecting
  // component at all.
  // The reason this isn't done at the server-level is because there you
  // can't possibly access the URL hash. That's only known in client-side
  // code.
  const [loadClientsideRedirectExceptions, setLoadClientsideRedirectExceptions] = useState(false)
  useEffect(() => {
    const { hash } = window.location
    // Today, Jan 2022, it's known explicitly what the pathname.
    // In the future there might be more.
    // Hopefully, we can some day delete all of this and no longer
    // be dependent on the URL hash to do the redirect.
    if (hash && asPath.startsWith('/rest')) {
      setLoadClientsideRedirectExceptions(true)
    }
  }, [])

  return (
    <DefaultLayout>
      {/* Doesn't matter *where* this is included because it will
      never render anything. It always just return null. */}
      {loadClientsideRedirectExceptions && <ClientSideRedirectExceptions />}
      <div className="container-xl px-3 px-md-6 my-4">
        <ArticleGridLayout>
          <ArticleTitle>{title}</ArticleTitle>

          {introPlainText && <Lead data-search="lead">{introPlainText}</Lead>}

          {productCallout && (
            <Callout variant="success" dangerouslySetInnerHTML={{ __html: productCallout }} />
          )}

          <div className="border-bottom border-xl-0 pb-4 mb-5 pb-xl-2 mb-xl-2" />

          <div className={variant === 'expanded' ? 'mt-5' : 'mt-2'}>
            {featuredLinks.gettingStarted && featuredLinks.popular && (
              <div className="pb-8 container-xl">
                <div className="gutter gutter-xl-spacious clearfix">
                  <div className="col-12 col-lg-6 mb-md-4 mb-lg-0 float-left">
                    <ArticleList
                      title={t('getting_started')}
                      articles={featuredLinks.gettingStarted}
                    />
                  </div>

                  <div className="col-12 col-lg-6 float-left">
                    <ArticleList title={t('popular')} articles={featuredLinks.popular} />
                  </div>
                </div>
              </div>
            )}

            {renderedPage && (
              <div id="article-contents" className="mb-5">
                <MarkdownContent>{renderedPage}</MarkdownContent>
              </div>
            )}

            <TableOfContents items={tocItems} variant={variant} />
          </div>
        </ArticleGridLayout>

        {currentLearningTrack?.trackName ? (
          <div className="mt-4">
            <LearningTrackNav track={currentLearningTrack} />
          </div>
        ) : null}
      </div>
    </DefaultLayout>
  )
}
