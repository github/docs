import { Heading, NavList } from '@primer/react'
import cx from 'classnames'

import { MiniTocItem } from 'components/context/ArticleContext'
import { useTranslation } from 'components/hooks/useTranslation'

import styles from './Minitocs.module.scss'

export type MiniTocsPropsT = {
  pageTitle: string
  miniTocItems: MiniTocItem[]
}

function RenderTocItem(item: MiniTocItem) {
  return (
    <div className={cx(styles.nested, item.platform)}>
      <NavList.Item
        href={item.contents.href}
        sx={{
          padding: '4px 0 4px 0',
          marginLeft: '7px',
        }}
      >
        {item.contents.title}
      </NavList.Item>
      {item.items && item.items.length > 0 && (
        <ul className={cx(styles.indentNested)}>
          {item.items.map((toc) => (
            <RenderTocItem
              key={toc.contents.href}
              contents={toc.contents}
              items={toc.items}
              platform={toc.platform}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export function MiniTocs({ pageTitle, miniTocItems }: MiniTocsPropsT) {
  const { t } = useTranslation('pages')

  return (
    <>
      <Heading as="h2" id="in-this-article" className="mb-1 ml-3" sx={{ fontSize: 1 }}>
        {t('miniToc')}
      </Heading>

      <NavList className="my-2" key={pageTitle}>
        {miniTocItems.map((items, i) => {
          return (
            <RenderTocItem
              key={items.contents.href + i}
              contents={items.contents}
              items={items.items}
              platform={items.platform}
            />
          )
        })}
      </NavList>
    </>
  )
}
