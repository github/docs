import { useRouter } from 'next/router'
import cx from 'classnames'

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
      className={cx(variant === 'compact' ? 'list-style-inside pl-2' : 'list-style-none')}
    >
      {(items || []).map((item) => {
        if (!item) {
          return null
        }

        const { fullPath: href, title, intro, childTocItems } = item
        const isActive = router.pathname === href
        return variant === 'compact' ? (
          <li key={href} className="f4 my-1">
            <Link href={href}>{title}</Link>
            {(childTocItems || []).length > 0 && (
              <ul
                className={cx(
                  variant === 'compact' ? 'list-style-circle pl-5 my-3' : 'list-style-none'
                )}
              >
                {(childTocItems || []).map((childItem) => {
                  if (!childItem) {
                    return null
                  }
                  return (
                    <li key={childItem.fullPath} className="f4 mt-1">
                      <Link href={childItem.fullPath}>{childItem.title}</Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </li>
        ) : (
          <li key={href} className={cx('mb-3 border-bottom pb-2', isActive && 'color-auto-gray-4')}>
            <BumpLink as={Link} href={href} title={<h2 className="h4">{title}</h2>}>
              {intro && (
                <p
                  className="f4 color-text-secondary"
                  dangerouslySetInnerHTML={{ __html: intro }}
                />
              )}
            </BumpLink>
          </li>
        )
      })}
    </ul>
  )
}
