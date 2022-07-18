import cx from 'classnames'
import dayjs from 'dayjs'
import { ActionList } from '@primer/react'
import { useTranslation } from 'components/hooks/useTranslation'
import { Link } from 'components/Link'
import { ArrowRightIcon } from '@primer/octicons-react'
import { FeaturedLink } from 'components/context/ProductLandingContext'
import { useMainContext } from 'components/context/MainContext'
import { TruncateLines } from 'components/ui/TruncateLines'
import { BumpLink } from 'components/ui/BumpLink'

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
  const { page } = useMainContext()
  return (
    <>
      {title && (
        <div className="mb-4 d-flex flex-items-baseline">
          <h2 className={cx('f4 text-semibold')}>{title}</h2>
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="ml-4"
              {...(viewAllTitleText ? { 'aria-label': `${page.title} - ${viewAllTitleText}` } : {})}
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
            >
              <BumpLink
                as={Link}
                href={link.href}
                className="py-3"
                title={
                  !link.hideIntro && link.intro ? (
                    <h3 className="f4" data-testid="link-with-intro-title">
                      <span
                        dangerouslySetInnerHTML={
                          link.fullTitle ? { __html: link.fullTitle } : { __html: link.title }
                        }
                      />
                    </h3>
                  ) : (
                    <span
                      className="f4 text-bold d-block"
                      data-testid="link-with-intro-title"
                      dangerouslySetInnerHTML={
                        link.fullTitle ? { __html: link.fullTitle } : { __html: link.title }
                      }
                    ></span>
                  )
                }
              >
                {!link.hideIntro && link.intro && (
                  <TruncateLines as="p" maxLines={2} className="color-fg-muted mb-0 mt-1">
                    <span
                      data-testid="link-with-intro-intro"
                      dangerouslySetInnerHTML={{ __html: link.intro }}
                    />
                  </TruncateLines>
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
