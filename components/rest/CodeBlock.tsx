import cx from 'classnames'

import styles from './CodeBlock.module.scss'

type Props = {
  verb?: string
  codeBlock: string
  setHTML?: boolean
}

export function CodeBlock({ verb, codeBlock, setHTML = false }: Props) {
  return setHTML ? (
    <div
      className={cx(styles.codeBlock, 'rounded')}
      dangerouslySetInnerHTML={{ __html: codeBlock }}
    />
  ) : (
    <pre className={cx(styles.methodCodeBlock, 'mb-3 rounded-1 border')}>
      <code>
        {verb && (
          <span className="color-bg-accent-emphasis color-fg-on-emphasis rounded-1 px-2 py-1 text-uppercase">
            {verb}
          </span>
        )}{' '}
        {codeBlock}
      </code>
    </pre>
  )
}
