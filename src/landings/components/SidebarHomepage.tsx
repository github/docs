import { LinkExternalIcon } from '@primer/octicons-react'
import cx from 'classnames'

import { Link } from 'components/Link'
import { useMainContext } from 'components/context/MainContext'

import styles from './SidebarHomepage.module.scss'

export const SidebarHomepage = () => {
  const { homepageLinks } = useMainContext()
  if (!homepageLinks) throw new Error("'homepageLinks' not set in main context")

  return (
    <div data-testid="sidebar" className="mt-4">
      <ul>
        {homepageLinks.map((link) => {
          const { href, external, name } = link
          return (
            <li
              key={href}
              className={cx(styles.keyboardFocus, 'list-style-none')}
              id={href + ' item'}
            >
              <Link
                id={href}
                href={href}
                target={external ? '_blank' : undefined}
                className="no-underline color-fg-default focus-visible"
              >
                <span className="d-block py-2 my-2 f4 ml-4">
                  {name}
                  {external && (
                    <span className="ml-1">
                      <LinkExternalIcon aria-label="(external site)" size="small" />
                    </span>
                  )}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
