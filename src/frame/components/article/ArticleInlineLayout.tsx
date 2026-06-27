import React from 'react'
import cx from 'classnames'
import { SupportPortalVaIframe, SupportPortalVaIframeProps } from './SupportPortalVaIframe'

import styles from './ArticleInlineLayout.module.scss'

type Props = {
  breadcrumbs?: React.ReactNode
  intro?: React.ReactNode
  introCallOuts?: React.ReactNode
  topper?: React.ReactNode
  toc?: React.ReactNode
  children?: React.ReactNode
  className?: string
  supportPortalVaIframeProps?: SupportPortalVaIframeProps
}
export const ArticleInlineLayout = ({
  breadcrumbs,
  intro,
  introCallOuts,
  topper,
  toc,
  children,
  className,
  supportPortalVaIframeProps,
}: Props) => {
  return (
    <div className={cx(styles.containerBox, className)}>
      {breadcrumbs && (
        <div
          style={{ gridArea: 'breadcrumbs' }}
          className={cx('d-none d-xxl-block mt-3 mr-auto width-full')}
        >
          {breadcrumbs}
        </div>
      )}
      <div className={cx(styles.contentBox)}>
        {topper && <div style={{ gridArea: 'topper' }}>{topper}</div>}

        {intro && (
          <div id="article-intro" style={{ gridArea: 'intro' }} className="f4">
            {intro}
          </div>
        )}

        {introCallOuts && (
          <div style={{ gridArea: 'intro' }} className="f4 mb-4">
            {introCallOuts}
          </div>
        )}

        {toc && (
          <div
            data-container="toc"
            style={{ gridArea: 'sidebar', alignSelf: 'flex-start' }}
            className={cx(styles.sidebarBox, 'border-bottom border-lg-0 pb-4 mb-5 pb-xl-0 mb-xl-0')}
          >
            {toc}
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
