import cx from 'classnames'
import { CheckIcon, CopyIcon } from '@primer/octicons-react'
import { Tooltip } from '@primer/react'
import useClipboard from 'components/hooks/useClipboard'
import styles from './CodeBlock.module.scss'
import type { ReactNode } from 'react'

type Props = {
  verb?: string
  headingLang?: ReactNode | string
  codeBlock: string
  highlight?: string
}

export function CodeBlock({ verb, headingLang, codeBlock, highlight }: Props) {
  const [isCopied, setCopied] = useClipboard(codeBlock, {
    successDuration: 1400,
  })

  return (
    <div className={headingLang ? 'code-extra' : undefined}>
      {/* Only Code samples should have a copy icon
          If there's a headingLang it's a code sample */}
      {headingLang && (
        <header className="d-flex flex-justify-between flex-items-center p-2 text-small rounded-top-1 border">
          {headingLang}
          <Tooltip direction="w" aria-label={isCopied ? 'Copied!' : 'Copy to clipboard'}>
            <button className="js-btn-copy btn-octicon" onClick={() => setCopied()}>
              {isCopied ? <CheckIcon /> : <CopyIcon />}
            </button>
          </Tooltip>
        </header>
      )}
      <pre className={cx(styles.codeBlock, 'rounded-1 border')} data-highlight={highlight}>
        <code>
          {verb && (
            <>
              <span className="color-bg-accent-emphasis color-fg-on-emphasis rounded-1 text-uppercase p-1">
                {verb}
              </span>
              <> </>
            </>
          )}
          {codeBlock}
        </code>
      </pre>
    </div>
  )
}
