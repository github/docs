import cx from 'classnames'
import dayjs from 'dayjs'

import { Link } from 'components/Link'
import { ArrowRightIcon } from '@primer/octicons-react'
import { FeaturedLink, useProductLandingContext } from 'components/context/ProductLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { TruncateLines } from 'components/TruncateLines'

export const FeaturedArticles = () => {
  const {
    featuredArticles = [],
    changelog,
    whatsNewChangelog,
    changelogUrl,
  } = useProductLandingContext()
  const { t } = useTranslation('toc')

  return (
    <div className="d-lg-flex gutter my-6 py-6">
      {featuredArticles.map((section, i) => {
        return (
          <div
            key={section.label + i}
            className={cx('col-12 mb-4 mb-lg-0', changelog ? 'col-lg-4' : 'col-lg-6')}
          >
            <ArticleList
              title={section.label}
              viewAllHref={section.viewAllHref}
              articles={section.articles}
            />
          </div>
        )
      })}

      {changelog && (
        <div className={cx('col-12 mb-4 mb-lg-0', changelog ? 'col-lg-4' : 'col-lg-6')}>
          <ArticleList
            title={t('whats_new')}
            viewAllHref={changelogUrl}
            articles={(whatsNewChangelog || []).map((link) => {
              return {
                title: link.title,
                date: link.date,
                href: link.href,
              }
            })}
          />
        </div>
      )}
    </div>
  )
}

type ArticleListProps = {
  title?: string
  viewAllHref?: string
  articles: Array<FeaturedLink>
  maxLines?: number
}
export const ArticleList = ({ title, viewAllHref, articles, maxLines = 2 }: ArticleListProps) => {
  return (
    <>
      {title && (
        <div className="featured-links-heading mb-4 d-flex flex-items-baseline">
          <h3 className="f4 text-normal text-mono text-uppercase">{title}</h3>
          {viewAllHref && (
            <Link href={viewAllHref} className="ml-4">
              View all <ArrowRightIcon size={14} className="v-align-middle" />
            </Link>
          )}
        </div>
      )}

      <ul className="list-style-none">
        {articles.map((link, i) => {
          return (
            <li key={link.href} className="border-top">
              <Link
                href={link.href}
                className="link-with-intro Bump-link--hover no-underline d-block py-3"
              >
                <h4 className="link-with-intro-title">
                  <span dangerouslySetInnerHTML={{ __html: link.title }} />
                  <span className="Bump-link-symbol">→</span>
                </h4>
                {!link.hideIntro && link.intro && (
                  <TruncateLines
                    as="p"
                    maxLines={maxLines}
                    className="link-with-intro-intro color-text-secondary mb-0 mt-1"
                  >
                    <span dangerouslySetInnerHTML={{ __html: link.intro }} />
                  </TruncateLines>
                )}
                {link.date && (
                  <time
                    className="tooltipped tooltipped-n color-text-tertiary text-mono mt-1"
                    aria-label={dayjs(link.date).format('LLL')}
                  >
                    {dayjs(link.date).format('MMMM DD')}
                  </time>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
