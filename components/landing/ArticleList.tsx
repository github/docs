import cx from 'classnames'
import dayjs from 'dayjs'

import { Link } from 'components/Link'
import { ArrowRightIcon } from '@primer/octicons-react'
import { FeaturedLink } from 'components/context/ProductLandingContext'
import { TruncateLines } from 'components/ui/TruncateLines'
import { BumpLink } from 'components/ui/BumpLink'

export type ArticleListPropsT = {
  title?: string
  viewAllHref?: string
  articles: Array<FeaturedLink>
}

export const ArticleList = ({ title, viewAllHref, articles }: ArticleListPropsT) => {
  return (
    <>
      {title && (
        <div className="mb-4 d-flex flex-items-baseline">
          <h3 className={cx('f4 text-semibold')}>{title}</h3>
          {viewAllHref && (
            <Link href={viewAllHref} className="ml-4">
              View all <ArrowRightIcon size={14} className="v-align-middle" />
            </Link>
          )}
        </div>
      )}

      <ul className="list-style-none" data-testid="article-list">
        {articles.map((link) => {
          return (
            <li key={link.href} className={cx('border-top')}>
              <BumpLink
                as={Link}
                href={link.href}
                className="py-3"
                title={
                  <h4 data-testid="link-with-intro-title">
                    <span
                      dangerouslySetInnerHTML={
                        link.fullTitle ? { __html: link.fullTitle } : { __html: link.title }
                      }
                    />
                  </h4>
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
                    aria-label={dayjs(link.date).format('LLL')}
                  >
                    {dayjs(link.date).format('MMMM DD')}
                  </time>
                )}
              </BumpLink>
            </li>
          )
        })}
      </ul>
    </>
  )
}
