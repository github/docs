import React from 'react'
import cx from 'clsx'
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
  // lg is the classic 1012px split; xxl waits until 1400px.
  // Article and automated pages use xxl because the secondary bar owns the
  // collapsed In this article control between 1012px and 1400px.
  // When the left doc-tree rail collapses, the freed 326px lets xxl consumers
  // reveal the drawer at about 1074px through the collapsed variant.
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
  // A collapsed left rail gives xxl consumers room to reveal the drawer before 1400px.
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
              : // The lg fallback keeps stacked TOC spacing for future consumers that pass toc.
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
