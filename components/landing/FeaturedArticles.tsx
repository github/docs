import cx from 'classnames'

import { useProductLandingContext } from 'components/context/ProductLandingContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { ArticleList } from './ArticleList'

export const FeaturedArticles = () => {
  const { featuredArticles = [], whatsNewChangelog, changelogUrl } = useProductLandingContext()
  const hasWhatsNewChangelog = whatsNewChangelog && whatsNewChangelog.length > 0
  const { t } = useTranslation('toc')

  return (
    <div className="d-lg-flex gutter my-6 py-6">
      {featuredArticles.map((section, i) => {
        return (
          <div
            key={section.label + i}
            className={cx('col-12 mb-4 mb-lg-0', hasWhatsNewChangelog ? 'col-lg-4' : 'col-lg-6')}
          >
            <ArticleList
              title={section.label}
              titleVariant="large"
              viewAllHref={section.viewAllHref}
              articles={section.articles}
            />
          </div>
        )
      })}

      {hasWhatsNewChangelog && (
        <div className={cx('col-12 mb-4 mb-lg-0 col-lg-4')}>
          <ArticleList
            title={t('whats_new')}
            titleVariant="large"
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
