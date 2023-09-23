import cx from 'classnames'

import { useProductLandingContext } from 'src/landings/components/ProductLandingContext'
import { useTranslation } from 'src/languages/components/useTranslation'
import { ArticleList } from 'src/landings/components/ArticleList'

export const FeaturedArticles = () => {
  const { featuredArticles = [], whatsNewChangelog, changelogUrl } = useProductLandingContext()
  const hasWhatsNewChangelog = whatsNewChangelog && whatsNewChangelog.length > 0
  const { t } = useTranslation('toc')

  return (
    <div className="d-lg-flex gutter my-6 py-6">
      {featuredArticles.map((section, i) => {
        const viewAllTitleText =
          section.key === 'startHere' ? `All '${section.label}' content` : `All ${section.label}`
        return (
          <div
            key={section.label + i}
            className={cx('col-12 mb-4 mb-lg-0', hasWhatsNewChangelog ? 'col-lg-4' : 'col-lg-6')}
          >
            <ArticleList
              title={section.label}
              viewAllHref={section.viewAllHref}
              {...(section.viewAllHref ? { viewAllTitleText } : {})}
              articles={section.articles}
            />
          </div>
        )
      })}

      {hasWhatsNewChangelog && (
        <div className={cx('col-12 mb-4 mb-lg-0 col-lg-4')}>
          <ArticleList
            title={t('whats_new')}
            viewAllHref={changelogUrl}
            viewAllTitleText={t('all_changelogs')}
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
