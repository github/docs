import cx from 'classnames'
import { ActionList, Heading } from '@primer/react'

import type { MiniTocItem } from 'components/context/ArticleContext'
import { Link } from 'components/Link'
import { useTranslation } from 'components/hooks/useTranslation'

export type MiniTocsPropsT = {
  pageTitle: string
  miniTocItems: MiniTocItem[]
}

const renderTocItem = (item: MiniTocItem) => {
  return (
    <ActionList.Item
      as="li"
      key={item.contents.href}
      className={item.platform}
      sx={{
        listStyle: 'none',
        padding: '2px',
        ':hover': {
          bg: 'var(--color-canvas-inset)',
        },
        'ul > li': {
          ':hover': {
            bg: 'var(--color-neutral-subtle)',
          },
        },
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
    </ActionList.Item>
  )
}

export function MiniTocs({ pageTitle, miniTocItems }: MiniTocsPropsT) {
  const { t } = useTranslation('pages')

  return (
    <>
      <Heading as="h2" id="in-this-article" className="mb-1" sx={{ fontSize: 1 }}>
        <Link href="#in-this-article">{t('miniToc')}</Link>
      </Heading>

      <ActionList variant="full" className="my-2" key={pageTitle} as="div">
        <div>
          {miniTocItems.map((items, i) => {
            return <ul key={pageTitle + i}>{renderTocItem(items)}</ul>
          })}
        </div>
      </ActionList>
    </>
  )
}
