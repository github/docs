import cx from 'classnames'
import { ActionList, Heading } from '@primer/react'

import { MiniTocItem } from 'components/context/ArticleContext'
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
      key={item.contents}
      className={item.platform}
      sx={{ listStyle: 'none', padding: '2px' }}
    >
      <div className={cx('lh-condensed d-block width-full')}>
        <div dangerouslySetInnerHTML={{ __html: item.contents }} />
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

      <ActionList
        key={pageTitle}
        items={miniTocItems.map((items, i) => {
          return {
            key: pageTitle + i,
            text: pageTitle,
            renderItem: () => <ul>{renderTocItem(items)}</ul>,
          }
        })}
      />
    </>
  )
}
