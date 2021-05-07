import cx from 'classnames'
import Link from 'next/link'

import { ArrowRightIcon } from '@primer/octicons-react'
import { FeaturedLink, useProductLandingContext } from 'components/context/ProductLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { TruncateLines } from 'components/TruncateLines'

export const FeaturedArticles = () => {
  const { featuredArticles = [], changelog } = useProductLandingContext()
  const { t } = useTranslation('toc')

  return (
    <div className="d-lg-flex gutter my-6 py-6">
      {featuredArticles.map((section, i) => {
        return (
          <div className={cx('col-12 mb-4 mb-lg-0', changelog ? 'col-lg-4' : 'col-lg-6')}>
            <ArticleList
              title={t(section.translationKeyLabel)}
              viewAllHref={section.viewAllHref}
              articles={section.articles}
            />
          </div>
        )
      })}

      {/* {% if page.changelog %}
            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <div className="featured-links-heading mb-4 d-flex flex-items-baseline">
                <h3 className="f4 text-normal text-mono text-uppercase color-text-secondary">{data.ui.toc.whats_new}</h3>
                <a href="{{ changelogUrl }}" className="ml-4">View all {% octicon "arrow-right" height="14" className="v-align-middle" %}</a>
              </div>
              <ul className="list-style-none">
                {% for link in whatsNewChangelog %}
                  <li className="border-top">
                    <a href="{{ link.href }}" className="d-block color-text-primary Bump-link--hover py-3 no-underline capitalize">
                      <h4>{{ link.title }} <span className="Bump-link-symbol">→</span></h4>
                      <time
                        className="tooltipped tooltipped-n color-text-tertiary text-mono mt-1"
                        aria-label="{{ link.date | date: '%B %d, %Y' }}"
                      >{{ link.date | date: "%B %d" }}</time>
                    </a>
                  </li>
                {% endfor %}
              </ul>
            </div>
          {% endif %} */}
    </div>
  )
}

type ArticleListProps = {
  title: string
  viewAllHref?: string
  articles: Array<FeaturedLink>
}
const ArticleList = ({ title, viewAllHref, articles }: ArticleListProps) => {
  return (
    <>
      <div className="featured-links-heading mb-4 d-flex flex-items-baseline">
        <h3 className="f4 text-normal text-mono text-uppercase color-text-secondary">{title}</h3>
        {viewAllHref && (
          <Link href={viewAllHref}>
            <a className="ml-4">
              View all <ArrowRightIcon size={14} className="v-align-middle" />
            </a>
          </Link>
        )}
      </div>

      <ul className="list-style-none">
        {articles.map((link) => {
          return (
            <li key={link.href} className="border-top">
              <Link href={link.href}>
                <a className="link-with-intro Bump-link--hover no-underline d-block py-3">
                  <h4 className="link-with-intro-title">
                    {link.title}
                    <span className="Bump-link-symbol">→</span>
                  </h4>
                  {!link.hideIntro && (
                    <TruncateLines
                      as="p"
                      maxLines={2}
                      className="link-with-intro-intro color-text-secondary mb-0 mt-1"
                    >
                      {link.intro}
                    </TruncateLines>
                  )}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
