import cx from 'classnames'
import { CheckIcon, CopyIcon } from '@primer/octicons-react'
import { Tooltip } from '@primer/react'

import useClipboard from 'components/hooks/useClipboard'

import styles from './CodeBlock.module.scss'

type Props = {
  verb?: string
  // Only Code samples should have a copy icon - if there's a headingLang it's a code sample
  headingLang?: string
  codeBlock: string
  highlight?: string
}

export function CodeBlock({ verb, headingLang, codeBlock, highlight }: Props) {
  const [isCopied, setCopied] = useClipboard(codeBlock, {
    successDuration: 1400,
  })

  return (
    <div className={headingLang && 'code-extra'}>
      {headingLang && (
        <header className="d-flex flex-justify-between flex-items-center p-2 text-small rounded-top-1 border">
          {headingLang === 'JavaScript' ? (
            <span>
              {headingLang} (
              <a className="text-underline" href="https://github.com/octokit/core.js#readme">
                @octokit/core.js
              </a>
              )
            </span>
          ) : (
            `${headingLang}`
          )}
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
            <span className="color-bg-accent-emphasis color-fg-on-emphasis rounded-1 text-uppercase p-1">
              {verb}
            </span>
          )}{' '}
          {codeBlock}
        </code>
      </pre>
    </div>
  )
}
