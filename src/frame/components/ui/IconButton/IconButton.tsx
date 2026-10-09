import type { ButtonHTMLAttributes, ElementType } from 'react'
import cx from 'clsx'
import { Tooltip } from '@primer/react-brand'

import styles from '@/frame/components/ui/IconButton/IconButton.module.scss'

export type IconButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'aria-label' | 'children' | 'type'
> & {
  icon: ElementType
  'aria-label': string
  variant?: 'default' | 'invisible'
  size?: 'small' | 'medium'
  tooltip?: boolean
  tooltipDirection?: 'n' | 'e' | 's' | 'w'
}

// With a tooltip, the tooltip text labels the button through aria-labelledby, so
// the button carries no aria-label and screen readers hear one name. Hidden buttons
// skip the tooltip because nothing can hover or focus them.
export const IconButton = ({
  icon: Icon,
  'aria-label': ariaLabel,
  variant = 'default',
  size = 'medium',
  tooltip = true,
  tooltipDirection = 's',
  className,
  ...props
}: IconButtonProps) => {
  const isHidden = props['aria-hidden'] === true || props['aria-hidden'] === 'true'
  const withTooltip = tooltip && !isHidden

  const button = (
    <button
      type="button"
      className={cx(styles.iconButton, className)}
      data-variant={variant}
      data-size={size}
      aria-label={withTooltip ? undefined : ariaLabel}
      {...props}
    >
      <Icon size={16} />
    </button>
  )

  if (!withTooltip) return button

  return (
    <Tooltip type="label" text={ariaLabel} direction={tooltipDirection}>
      {button}
    </Tooltip>
  )
}
