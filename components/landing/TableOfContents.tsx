import { useRouter } from 'next/router'
import cx from 'classnames'

import { ActionList } from '@primer/react'
import { Link } from 'components/Link'
import { BumpLink } from 'components/ui/BumpLink'
import type { TocItem } from 'components/context/ProductLandingContext'

type Props = {
  items: Array<TocItem>
  variant?: 'compact' | 'expanded'
}
export const TableOfContents = (props: Props) => {
  const { items, variant = 'expanded' } = props
  const router = useRouter()

  return (
    <ul
      data-testid="table-of-contents"
      className={cx(variant === 'compact' ? 'list-style-outside pl-2' : 'list-style-none')}
    >
      <ActionList
        items={(items || [])
          .filter((item) => typeof item !== 'undefined')
          .map((item) => {
            const { fullPath: href, title, intro, childTocItems } = item
            const isActive = router.pathname === href
            return variant === 'compact'
              ? {
                  key: href,
                  text: title,
                  renderItem: () => (
                    <ActionList.Item>
                      <li key={href} className="f4 d-list-item width-full list-style-none">
                        <Link className="d-block width-full text-underline" href={href}>
                          {title}
                        </Link>
                        {(childTocItems || []).length > 0 && (
                          <ul
                            className={cx(
                              variant === 'compact'
                                ? 'list-style-circle pl-5 my-3'
                                : 'list-style-none'
                            )}
                          >
                            {(childTocItems || []).map((childItem) => {
                              if (!childItem) {
                                return null
                              }
                              return (
                                <li key={childItem.fullPath} className="f4 d-block width-full m-2">
                                  <Link
                                    className="d-block width-full text-underline"
                                    href={childItem.fullPath}
                                  >
                                    {childItem.title}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </li>
                    </ActionList.Item>
                  ),
                }
              : {
                  key: href,
                  title: title,
                  renderItem: () => (
                    <ActionList.Item className={cx('border-bottom')}>
                      <li key={href} className={cx('mt-2', isActive && 'color-fg-muted')}>
                        <BumpLink
                          as={Link}
                          href={href}
                          title={<h2 className="py-1 h4">{title}</h2>}
                        >
                          {intro && (
                            <p
                              className="f4 color-fg-muted"
                              dangerouslySetInnerHTML={{ __html: intro }}
                            />
                          )}
                        </BumpLink>
                      </li>
                    </ActionList.Item>
                  ),
                }
          })}
      />
    </ul>
  )
}
