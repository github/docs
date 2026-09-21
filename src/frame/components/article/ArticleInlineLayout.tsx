import React from 'react'
import cx from 'classnames'
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
          // `mt-4` (24px) matches the gap the grid layout gets from
          // .belowIntroPlacement's own bottom margin. It is needed here because
          // this layout puts the callouts in a separate wrapper from the intro,
          // so the copy-markdown control is the last child of ITS wrapper and
          // that rule cannot reach across. Without it the control sat flush on
          // the callout box's top border.
          <div style={{ gridArea: 'intro' }} className="f4 mt-4 mb-4">
            {introCallOuts}
          </div>
        )}

        {/* Deliberately no mini-TOC cell. On inline pages DefaultLayout passes
            hasDrawer={false}, so the secondary bar's OverviewSubBar owns "In
            this article" at every width. Rendering one here too gave an empty
            bordered box between the title and the intro (the cell kept
            .sidebarBox's !important border while MiniTocs' contents are
            display:none below the drawer breakpoint), plus a second nav
            landmark with the same label once the drawer revealed at 1400px. */}

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
