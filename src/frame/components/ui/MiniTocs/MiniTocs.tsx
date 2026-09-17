import { Heading, NavList } from '@primer/react-brand'
import cx from 'classnames'

import type { MiniTocItem } from '@/frame/components/context/ArticleContext'
import { useTranslation } from '@/languages/components/useTranslation'

import { useActiveSection } from './useActiveSection'
import { RenderTocItem } from './MiniTocShared'
import { useSidebarCollapsed } from '@/frame/components/sidebar/SidebarCollapseContext'
import styles from './Minitocs.module.scss'

export type MiniTocsPropsT = {
  miniTocItems: MiniTocItem[]
}

// The full "In this article" drawer. Shown on the right rail at xxl+ (>=1400px),
// or — when the left doc-tree rail is collapsed, freeing ~326px — from ~1074px.
// Below that threshold the collapsed "Overview" control lives in the secondary
// bar (`OverviewMenu`), not here. Collapse state comes from SidebarCollapseContext.
export function MiniTocs({ miniTocItems }: MiniTocsPropsT) {
  const { t } = useTranslation('pages')
  const activeHref = useActiveSection()
  const { collapsed } = useSidebarCollapsed()

  // When the rail is collapsed, the drawer content is revealed from the earlier
  // ~1074px breakpoint (matching the grid variant in ArticleGridLayout).
  const drawerVisibility = collapsed ? styles.drawerCollapsed : styles.drawerDefault

  return (
    <>
      <Heading
        as="h2"
        // Brand Heading derives its visual size from `as` when `size` is
        // omitted, so an h2 would come out at brand's 2rem marketing size. The
        // eyebrow's own type is pinned by styles.eyebrow, but pin brand's
        // smallest size (1rem) here too so nothing large can leak through.
        size="subhead-medium"
        id="in-this-article"
        className={cx('mb-1', styles.eyebrow, styles.heading, drawerVisibility)}
      >
        {t('miniToc')}
      </Heading>

      <NavList
        data-testid="minitoc"
        className={cx(styles.miniToc, drawerVisibility)}
        // brand NavList types `aria-label` as required, so it must be present;
        // `aria-labelledby` (the heading) is what actually names the landmark.
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
