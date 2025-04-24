import { createElement, ReactNode } from 'react'
import cx from 'classnames'
import styles from './Alert.module.scss'
import { InfoIcon, ReportIcon, AlertIcon, LightBulbIcon, StopIcon } from '@primer/octicons-react'
import { useTranslation } from 'src/languages/components/useTranslation'

const alertTypes = {
  NOTE: { icon: InfoIcon, color: 'accent' },
  IMPORTANT: { icon: ReportIcon, color: 'done' },
  WARNING: { icon: AlertIcon, color: 'attention' },
  TIP: { icon: LightBulbIcon, color: 'success' },
  CAUTION: { icon: StopIcon, color: 'danger' },
}

export type AlertPropsT = {
  html?: string
  children?: ReactNode
  className?: string
  type?: keyof typeof alertTypes
}

export function Alert({ className, html, children, type = 'IMPORTANT' }: AlertPropsT) {
  if (html && children) throw new Error("Can't specify 'html' and 'children'")
  const { t } = useTranslation('alerts')
  return (
    <div
      data-testid="alert"
      className={cx(className, styles.container, `ghd-alert ghd-alert-${alertTypes[type].color}`)}
    >
      <p className="ghd-alert-title">
        {createElement(alertTypes[type].icon, { size: 16, className: 'mr-2' })}
        {t(type)}
      </p>
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : children}
    </div>
  )
}
