import { useRouter } from 'next/router'
import cx from 'classnames'

import { ZapIcon, InfoIcon } from '@primer/octicons-react'
import { Callout } from 'components/ui/Callout'

import { Link } from 'components/Link'
import { DefaultLayout } from 'components/DefaultLayout'
import { ArticleTopper } from 'components/article/ArticleTopper'
import { ArticleTitle } from 'components/article/ArticleTitle'
import { useArticleContext } from 'components/context/ArticleContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { LearningTrackNav } from './LearningTrackNav'
import { MarkdownContent } from 'components/ui/MarkdownContent'
import { ArticleGridLayout } from './ArticleGridLayout'

// Mapping of a "normal" article to it's interactive counterpart
const interactiveAlternatives: Record<string, { href: string }> = {
  '/actions/guides/building-and-testing-nodejs': {
    href: '/actions/guides/building-and-testing-nodejs-or-python?langId=nodejs',
  },
  '/actions/guides/building-and-testing-python': {
    href: '/actions/guides/building-and-testing-nodejs-or-python?langId=python',
  },
}

export const ArticlePage = () => {
  const router = useRouter()
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
  const currentPath = router.asPath.split('?')[0]

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

              {intro && (
                <MarkdownContent className="f2 color-text-secondary mb-3" data-testid="lead">
                  {intro}
                </MarkdownContent>
              )}

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
            <>
              {!!interactiveAlternatives[currentPath] && (
                <div className="flash mb-3">
                  <ZapIcon className="mr-2" />
                  <Link href={interactiveAlternatives[currentPath].href}>
                    Try the new interactive article
                  </Link>
                </div>
              )}
              {miniTocItems.length > 1 && (
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
              )}
            </>
          }
        >
          <div id="article-contents">
            <MarkdownContent>{renderedPage}</MarkdownContent>
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
