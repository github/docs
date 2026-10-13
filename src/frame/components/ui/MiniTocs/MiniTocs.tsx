import { Heading, NavList } from '@primer/react-brand'
import cx from 'clsx'

import type { MiniTocItem } from '@/frame/components/context/ArticleContext'
import { useTranslation } from '@/languages/components/useTranslation'

import { useActiveSection } from './useActiveSection'
import { RenderTocItem } from './MiniTocShared'
import { useSidebarCollapsed } from '@/frame/components/sidebar/SidebarCollapseContext'
import styles from './Minitocs.module.scss'

export type MiniTocsPropsT = {
  miniTocItems: MiniTocItem[]
}

// The full In this article drawer appears on the right rail at xxl (1400px) and
// up, or around ArticleGridLayout's 1074px when the collapsed left rail frees
// about 326px. Below that, the OverviewMenu control lives in the secondary bar.
// SidebarCollapseContext provides collapse state.
export function MiniTocs({ miniTocItems }: MiniTocsPropsT) {
  const { t } = useTranslation('pages')
  const activeHref = useActiveSection()
  const { collapsed } = useSidebarCollapsed()

  const drawerVisibility = collapsed ? styles.drawerCollapsed : styles.drawerDefault

  return (
    <>
      <Heading
        as="h2"
        // Set Brand's smallest size because without size an h2 uses 2rem marketing type.
        size="subhead-medium"
        id="in-this-article"
        className={cx('mb-1', styles.eyebrow, styles.heading, drawerVisibility)}
      >
        {t('miniToc')}
      </Heading>

      <NavList
        data-testid="minitoc"
        className={cx(styles.miniToc, drawerVisibility)}
        // Brand requires aria-label, but aria-labelledby points the landmark to the heading.
        aria-label={t('miniToc')}
        aria-labelledby="in-this-article"
      >
        {miniTocItems.map((item, i) => (
          <RenderTocItem
            key={item.contents.href + i}
            item={item}
            activeHref={activeHref}
            depth={0}
          />
        ))}
      </NavList>
    </>
  )
}
