import cx from 'clsx'

import styles from './RestCodeSamples.module.scss'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'

type RestMethodT = {
  verb: string
  requestPath: string
}

export function RestMethod({ verb, requestPath }: RestMethodT) {
  // Insert word breaks before slashes and after underscores so long paths wrap in narrow layouts.
  const displayPath =
    requestPath.length > 25
      ? requestPath.replaceAll('/', '<wbr/>/').replaceAll('_', '_<wbr/>')
      : requestPath
  return (
    <div className={cx(styles.method, 'my-0 text-mono d-flex flex-row flex-items-start ')}>
      <span className="IssueLabel IssueLabel--big color-bg-accent-emphasis color-fg-on-emphasis text-uppercase mr-2">
        {verb}
      </span>
      <RenderedHTML as="span" html={displayPath} />
    </div>
  )
}
