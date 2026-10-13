import React from 'react'
import cx from 'clsx'
import { SupportPortalVaIframe, SupportPortalVaIframeProps } from './SupportPortalVaIframe'

import styles from './ArticleInlineLayout.module.scss'

type Props = {
  intro?: React.ReactNode
  introCallOuts?: React.ReactNode
  topper?: React.ReactNode
  children?: React.ReactNode
  className?: string
  supportPortalVaIframeProps?: SupportPortalVaIframeProps
}
// ArticleInlineLayout gives intro callouts the same 24px gap the grid layout gets
// from .belowIntroPlacement because inline callouts live outside the intro wrapper.
// Inline pages omit the mini-TOC cell because DefaultLayout passes hasDrawer=false
// and OverviewSubBar owns In this article at every width. Rendering another cell
// would add an empty bordered box before the intro and a duplicate nav landmark
// at 1400px.
export const ArticleInlineLayout = ({
  intro,
  introCallOuts,
  topper,
  children,
  className,
  supportPortalVaIframeProps,
}: Props) => {
  return (
    <div className={cx(styles.containerBox, className)}>
      <div className={cx(styles.contentBox)}>
        {topper && <div style={{ gridArea: 'topper' }}>{topper}</div>}

        {intro && (
          <div id="article-intro" style={{ gridArea: 'intro' }} className="f4">
            {intro}
          </div>
        )}

        {introCallOuts && (
          <div style={{ gridArea: 'intro' }} className="f4 mt-4 mb-4">
            {introCallOuts}
          </div>
        )}

        <div
          data-container="article"
          style={{ gridArea: 'content' }}
          data-search="article-body"
          className={cx(styles.articleContainer, className)}
        >
          {supportPortalVaIframeProps &&
            supportPortalVaIframeProps.supportPortalUrl &&
            supportPortalVaIframeProps.vaFlowUrlParameter && (
              <SupportPortalVaIframe supportPortalVaIframeProps={supportPortalVaIframeProps} />
            )}
          {children}
        </div>
      </div>
    </div>
  )
}
