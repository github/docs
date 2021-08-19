import cx from 'classnames'

import { DefaultLayout } from 'components/DefaultLayout'
import { ArticleTopper } from 'components/article/ArticleTopper'
import { ArticleTitle } from 'components/article/ArticleTitle'
import { useArticleContext } from 'components/context/ArticleContext'
import { InfoIcon } from '@primer/octicons-react'
import { useTranslation } from 'components/hooks/useTranslation'
import { LearningTrackNav } from './LearningTrackNav'
import { ArticleContent } from './ArticleContent'
import { ArticleGridLayout } from './ArticleGridLayout'
import { Callout } from 'components/ui/Callout'

export const ArticlePage = () => {
  const {
    title,
    intro,
    renderedPage,
    contributor,
    permissions,
    includesPlatformSpecificContent,
    defaultPlatform,
    product,
    miniTocItems,
    currentLearningTrack,
  } = useArticleContext()
  const { t } = useTranslation('pages')
  return (
    <DefaultLayout>
      <div className="container-xl px-3 px-md-6 my-4 my-lg-4">
        <ArticleTopper />

        <ArticleGridLayout
          className="mt-7"
          head={
            <>
              <ArticleTitle>{title}</ArticleTitle>

              {contributor && (
                <Callout variant="info" className="mb-3">
                  <p>
                    <span className="mr-2">
                      <InfoIcon />
                    </span>
                    {t('contributor_callout')} <a href={contributor.URL}>{contributor.name}</a>.
                  </p>
                </Callout>
              )}

              {intro && <div className="lead-mktg" dangerouslySetInnerHTML={{ __html: intro }} />}

              {permissions && (
                <div
                  className="permissions-statement"
                  dangerouslySetInnerHTML={{ __html: permissions }}
                />
              )}

              {includesPlatformSpecificContent && (
                <nav
                  className="UnderlineNav my-3"
                  data-default-platform={defaultPlatform || undefined}
                >
                  <div className="UnderlineNav-body">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="UnderlineNav-item platform-switcher" data-platform="mac">
                      Mac
                    </a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                      href="#"
                      className="UnderlineNav-item platform-switcher"
                      data-platform="windows"
                    >
                      Windows
                    </a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                      href="#"
                      className="UnderlineNav-item platform-switcher"
                      data-platform="linux"
                    >
                      Linux
                    </a>
                  </div>
                </nav>
              )}

              {product && (
                <Callout
                  variant="success"
                  className="mb-4"
                  dangerouslySetInnerHTML={{ __html: product }}
                />
              )}
            </>
          }
          toc={
            miniTocItems.length > 1 && (
              <>
                <h2 id="in-this-article" className="f5 mb-2">
                  <a className="Link--primary" href="#in-this-article">
                    {t('miniToc')}
                  </a>
                </h2>
                <ul className="list-style-none pl-0 f5 mb-0">
                  {miniTocItems.map((item) => {
                    return (
                      <li
                        key={item.contents}
                        className={cx(
                          `ml-${item.indentationLevel * 3}`,
                          item.platform,
                          'mb-2 lh-condensed'
                        )}
                        dangerouslySetInnerHTML={{ __html: item.contents }}
                      />
                    )
                  })}
                </ul>
              </>
            )
          }
        >
          <ArticleContent>{renderedPage}</ArticleContent>
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
