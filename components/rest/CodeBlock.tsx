import cx from 'classnames'

import styles from './CodeBlock.module.scss'

type Props = {
  verb?: string
  codeBlock: string
  highlight?: string
}

export function CodeBlock({ verb, codeBlock, highlight }: Props) {
  return (
    <pre className={cx(styles.methodCodeBlock, 'rounded-1 border')} data-highlight={highlight}>
      <code>
        {verb && (
          <span className="color-bg-accent-emphasis color-fg-on-emphasis rounded-1 text-uppercase">
            {verb}
          </span>
        )}{' '}
        {codeBlock}
      </code>
    </pre>
  )
}
