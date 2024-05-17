import React from 'react'
import cx from 'classnames'
import { Box } from '@primer/react'
import { SupportPortalVaIframe, SupportPortalVaIframeProps } from './SupportPortalVaIframe'

import styles from './ArticleGridLayout.module.scss'

type Props = {
  intro?: React.ReactNode
  topper?: React.ReactNode
  toc?: React.ReactNode
  children?: React.ReactNode
  className?: string
  supportPortalVaIframeProps?: SupportPortalVaIframeProps
  fullWidth?: boolean
}
export const ArticleGridLayout = ({
  intro,
  topper,
  toc,
  children,
  className,
  supportPortalVaIframeProps,
  fullWidth,
}: Props) => {
  const containerBoxStyles = fullWidth ? '' : styles.containerBox
  return (
    <Box className={cx(containerBoxStyles, className)}>
      {topper && <Box gridArea="topper">{topper}</Box>}
      {intro && (
        <Box id="article-intro" gridArea="intro" className="f4 pb-4">
          {intro}
        </Box>
      )}

      {toc && (
        <Box
          data-container="toc"
          gridArea="sidebar"
          alignSelf="flex-start"
          className={cx(styles.sidebarBox, 'border-bottom border-lg-0 pb-4 mb-5 pb-xl-0 mb-xl-0')}
        >
          {toc}
        </Box>
      )}

      <Box data-container="article" gridArea="content" data-search="article-body">
        {supportPortalVaIframeProps &&
          supportPortalVaIframeProps.supportPortalUrl &&
          supportPortalVaIframeProps.vaFlowUrlParameter && (
            <SupportPortalVaIframe supportPortalVaIframeProps={supportPortalVaIframeProps} />
          )}
        {children}
      </Box>
    </Box>
  )
}
