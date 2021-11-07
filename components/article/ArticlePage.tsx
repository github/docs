import { useRouter } from 'next/router'
import cx from 'classnames'
import { Heading } from '@primer/components'

import { ZapIcon, InfoIcon, ShieldLockIcon } from '@primer/octicons-react'
import { Callout } from 'components/ui/Callout'

import { Link } from 'components/Link'
import { DefaultLayout } from 'components/DefaultLayout'
import { ArticleTitle } from 'components/article/ArticleTitle'
import { MiniTocItem, useArticleContext } from 'components/context/ArticleContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { LearningTrackNav } from './LearningTrackNav'
import { MarkdownContent } from 'components/ui/MarkdownContent'
import { Lead } from 'components/ui/Lead'
import { ArticleGridLayout } from './ArticleGridLayout'
import { VersionPicker } from 'components/VersionPicker'

// Mapping of a "normal" article to it's interactive counterpart
const interactiveAlternatives: Record<string, { href: string }> = {
  '/actions/automating-builds-and-tests/building-and-testing-nodejs': {
    href: '/actions/automating-builds-and-tests/building-and-testing-nodejs-or-python?langId=nodejs',
  },
  '/actions/automating-builds-and-tests/building-and-testing-python': {
    href: '/actions/automating-builds-and-tests/building-and-testing-nodejs-or-python?langId=python',
  },
}

export const ArticlePage = () => {
  const router = useRouter()
  const {
    title,
    intro,
    effectiveDate,
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

  const renderTocItem = (item: MiniTocItem) => {
    return (
      <li key={item.contents} className={cx(item.platform, 'mb-2 lh-condensed')}>
        <div className="mb-2 lh-condensed" dangerouslySetInnerHTML={{ __html: item.contents }} />
        {item.items && item.items.length > 0 ? (
          <ul className="list-style-none pl-0 f5 mb-0 ml-3">{item.items.map(renderTocItem)}</ul>
        ) : null}
      </li>
    )
  }

  return (
    <DefaultLayout>
      <div className="container-xl px-3 px-md-6 my-4">
        <ArticleGridLayout
          topper={<ArticleTitle>{title}</ArticleTitle>}
          topperSidebar={<VersionPicker />}
          intro={
            <>
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

              {intro && <Lead data-testid="lead">{intro}</Lead>}

              {permissions && (
                <div className="permissions-statement d-table">
                  <div className="d-table-cell pr-2">
                    <ShieldLockIcon size={16} />
                  </div>
                  <div className="d-table-cell" dangerouslySetInnerHTML={{ __html: permissions }} />
                </div>
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
                  <Heading as="h2" fontSize={1} id="in-this-article" className="mb-1">
                    <a className="Link--primary" href="#in-this-article">
                      {t('miniToc')}
                    </a>
                  </Heading>
                  <ul className="list-style-none pl-0 f5 mb-0">
                    {miniTocItems.map(renderTocItem)}
                  </ul>
                </>
              )}
            </>
          }
        >
          <div id="article-contents">
            <MarkdownContent>{renderedPage}</MarkdownContent>
            {effectiveDate && (
              <div className="mt-4" id="effectiveDate">
                Effective as of:{' '}
                <time dateTime={new Date(effectiveDate).toISOString()}>
                  {new Date(effectiveDate).toDateString()}
                </time>
              </div>
            )}
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
