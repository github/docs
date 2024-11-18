import cx from 'classnames'

import styles from './RestCodeSamples.module.scss'

type RestMethodT = {
  verb: string
  requestPath: string
}

export function RestMethod({ verb, requestPath }: RestMethodT) {
  // If the path is long, we want to break it up into multiple lines,
  // breaking before the / character.
  const displayPath =
    requestPath.length > 25
      ? requestPath.replaceAll('/', '<wbr/>/').replaceAll('_', '_<wbr/>')
      : requestPath
  return (
    <div className={cx(styles.method, 'my-0 text-mono d-flex flex-row flex-items-start ')}>
      <span className="IssueLabel IssueLabel--big color-bg-accent-emphasis color-fg-on-emphasis text-uppercase mr-2">
        {verb}
      </span>
      <span dangerouslySetInnerHTML={{ __html: displayPath }} />
    </div>
  )
}
