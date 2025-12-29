import { Link } from '@/frame/components/Link'
import { FeaturedLink } from '@/landings/components/ProductLandingContext'
import { useTranslation } from '@/languages/components/useTranslation'
import { ArrowRightIcon } from '@primer/octicons-react'
import { ActionList } from '@primer/react'
import { clsx } from 'clsx'
import dayjs from 'dayjs'
import styles from './ArticleList.module.scss'

export type ArticleListPropsT = {
  title?: string
  viewAllHref?: string
  viewAllTitleText?: string
  articles: Array<FeaturedLink>
}

export const ArticleList = ({
  title,
  viewAllHref,
  viewAllTitleText,
  articles,
}: ArticleListPropsT) => {
  const { t } = useTranslation('product_landing')
  // Use TypeScript's "not null assertion" because `mainContext.page` should
  // will present in mainContext if it's gotten to the stage of React
  // rendering.

  return (
    <>
      {title && (
        <div className="mb-4 d-flex flex-items-baseline">
          <h2 className={clsx('f4', 'text-semibold')}>{title}</h2>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="ml-4"
              {...(viewAllTitleText
                ? { 'aria-label': t('all_content').replace('{{ title }}', viewAllTitleText) }
                : {})}
            >
              {t('view')} <ArrowRightIcon size={14} className="v-align-middle" />
            </Link>
          )}
        </div>
      )}

      <ActionList data-testid="article-list" variant="full">
        {articles.map((link) => {
          return (
            <ActionList.LinkItem
              as="a"
              key={link.href}
              href={link.href}
              data-testid="bump-link"
              className={clsx(styles.linkItem, 'width-full', 'border-top', 'py-3')}
            >
              <div>
                {link.intro ? (
                  <h3 className="f4" data-testid="link-with-intro-title">
                    <span>{link.fullTitle ? link.fullTitle : link.title}</span>
                  </h3>
                ) : (
                  <span className="f4 text-bold d-block" data-testid="link-with-intro-title">
                    {link.fullTitle ? link.fullTitle : link.title}
                  </span>
                )}
                {link.intro && (
                  <p className="color-fg-muted mb-0 mt-1" data-testid="link-with-intro-intro">
                    {link.intro}
                  </p>
                )}
                {link.date && (
                  <time
                    className="tooltipped tooltipped-n color-fg-muted text-mono mt-1"
                    aria-label={dayjs(link.date).format('MMMM DD')}
                  >
                    {dayjs(link.date).format('MMMM DD')}
                  </time>
                )}
              </div>
            </ActionList.LinkItem>
          )
        })}
      </ActionList>
    </>
  )
}
