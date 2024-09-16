import cx from 'classnames'
import dayjs from 'dayjs'
import { ActionList } from '@primer/react'
import { useTranslation } from 'src/languages/components/useTranslation'
import { Link } from 'src/frame/components/Link'
import { ArrowRightIcon } from '@primer/octicons-react'
import { FeaturedLink } from 'src/landings/components/ProductLandingContext'
import { BumpLink } from 'src/frame/components/ui/BumpLink'

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
          <h2 className={cx('f4 text-semibold')}>{title}</h2>
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

      <ActionList as="ul" data-testid="article-list" variant="full">
        {articles.map((link) => {
          return (
            <ActionList.Item
              as="li"
              key={link.href}
              className={cx('width-full border-top')}
              sx={{
                borderRadius: 0,
                ':hover': {
                  borderRadius: 0,
                },
              }}
              tabIndex={undefined}
            >
              <BumpLink
                as={Link}
                href={link.href}
                className="py-3"
                title={
                  link.intro ? (
                    <h3 className="f4" data-testid="link-with-intro-title">
                      <span>{link.fullTitle ? link.fullTitle : link.title}</span>
                    </h3>
                  ) : (
                    <span className="f4 text-bold d-block" data-testid="link-with-intro-title">
                      {link.fullTitle ? link.fullTitle : link.title}
                    </span>
                  )
                }
              >
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
              </BumpLink>
            </ActionList.Item>
          )
        })}
      </ActionList>
    </>
  )
}
