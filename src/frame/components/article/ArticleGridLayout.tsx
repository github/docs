import React from 'react'
import cx from 'classnames'
import { SupportPortalVaIframe, SupportPortalVaIframeProps } from './SupportPortalVaIframe'
import { useSidebarCollapsed } from '@/frame/components/sidebar/SidebarCollapseContext'

import styles from './ArticleGridLayout.module.scss'

type Props = {
  intro?: React.ReactNode
  topper?: React.ReactNode
  toc?: React.ReactNode
  children?: React.ReactNode
  className?: string
  supportPortalVaIframeProps?: SupportPortalVaIframeProps
  fullWidth?: boolean
  // At which breakpoint the right rail (toc) appears beside the content.
  // 'lg' (default, 1012px) is the classic two-column split. 'xxl' (1400px) is
  // used by article pages whose collapsed "In this article" control lives in the
  // secondary bar between 1012–1400, so the rail should only appear at 1400+.
  // When the left doc-tree rail is manually collapsed, the freed ~326px lets the
  // drawer appear earlier (~1074px) — handled via the collapsed variant below.
  tocBreakpoint?: 'lg' | 'xxl'
}
export const ArticleGridLayout = ({
  intro,
  topper,
  toc,
  children,
  className,
  supportPortalVaIframeProps,
  fullWidth,
  tocBreakpoint = 'lg',
}: Props) => {
  const { collapsed } = useSidebarCollapsed()
  // With the left rail collapsed there's room to bring the drawer in earlier
  // than xxl. Only relevant to the 'xxl' consumers (article + automated pages).
  const xxlCollapsed = tocBreakpoint === 'xxl' && collapsed
  const containerBoxStyles = fullWidth
    ? ''
    : cx(
        styles.containerBox,
        tocBreakpoint === 'xxl' &&
          (xxlCollapsed ? styles.containerBoxXxlCollapsed : styles.containerBoxXxl),
      )
  return (
    <div className={cx(containerBoxStyles, className)}>
      {topper && (
        <div
          style={{ gridArea: 'topper' }}
          className={cx(tocBreakpoint === 'xxl' && styles.heroTopper)}
        >
          {topper}
        </div>
      )}
      {intro && (
        <div
          id="article-intro"
          style={{ gridArea: 'intro' }}
          className={cx('f4 pb-4', tocBreakpoint === 'xxl' && styles.heroIntro)}
        >
          {intro}
        </div>
      )}

      {toc && (
        <div
          data-container="toc"
          style={{ gridArea: 'sidebar' }}
          className={cx(
            styles.sidebarColumn,
            tocBreakpoint === 'xxl'
              ? xxlCollapsed
                ? styles.sidebarColumnXxlCollapsed
                : styles.sidebarColumnXxl
              : // Stacked 'lg' path: the toc would sit above the content below
                // 1012px, so keep the bottom spacing (cancelled at xl+).
                // Currently unreachable: TocLanding is the only default-breakpoint
                // consumer and it passes no `toc` at all, so this cell never
                // renders for 'lg'. Kept so the component still honours its
                // documented API for a future consumer that does pass one.
                'pb-4 mb-5 pb-xl-0 mb-xl-0',
          )}
        >
          <div className={styles.sidebarBox}>{toc}</div>
        </div>
      )}

      <div data-container="article" style={{ gridArea: 'content' }} data-search="article-body">
        {supportPortalVaIframeProps &&
          supportPortalVaIframeProps.supportPortalUrl &&
          supportPortalVaIframeProps.vaFlowUrlParameter && (
            <SupportPortalVaIframe supportPortalVaIframeProps={supportPortalVaIframeProps} />
          )}
        {children}
      </div>
    </div>
  )
}
