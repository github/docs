import cx from 'classnames'
import { Heading, NavList } from '@primer/react'

import type { MiniTocItem } from 'components/context/ArticleContext'
import { Link } from 'components/Link'
import { useTranslation } from 'components/hooks/useTranslation'

export type MiniTocsPropsT = {
  pageTitle: string
  miniTocItems: MiniTocItem[]
}

const renderTocItem = (item: MiniTocItem) => {
  return (
    <NavList.Item
      as="li"
      key={item.contents.href}
      className={item.platform}
      sx={{
        listStyle: 'none',
        padding: '2px',
      }}
    >
      <div className={cx('lh-condensed d-block width-full')}>
        <a className="d-block width-auto" href={item.contents.href}>
          {item.contents.title}
        </a>
        {item.items && item.items.length > 0 ? (
          <ul className="ml-3">{item.items.map(renderTocItem)}</ul>
        ) : null}
      </div>
    </NavList.Item>
  )
}

export function MiniTocs({ pageTitle, miniTocItems }: MiniTocsPropsT) {
  const { t } = useTranslation('pages')

  return (
    <>
      <Heading as="h2" id="in-this-article" className="mb-1" sx={{ fontSize: 1 }}>
        <Link href="#in-this-article">{t('miniToc')}</Link>
      </Heading>

      <NavList className="my-2" key={pageTitle}>
        <div>
          {miniTocItems.map((items, i) => {
            return <ul key={pageTitle + i}>{renderTocItem(items)}</ul>
          })}
        </div>
      </NavList>
    </>
  )
}
