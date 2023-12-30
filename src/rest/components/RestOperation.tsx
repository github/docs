import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { slug } from 'github-slugger'
import { CheckCircleFillIcon } from '@primer/octicons-react'
import cx from 'classnames'

import { HeadingLink } from 'src/frame/components/article/HeadingLink'
import { Link } from 'src/frame/components/Link'
import { useTranslation } from 'src/languages/components/useTranslation'
import { RestPreviewNotice } from './RestPreviewNotice'
import { ParameterTable } from 'src/automated-pipelines/components/parameter-table/ParameterTable'
import { RestCodeSamples } from './RestCodeSamples'
import { RestStatusCodes } from './RestStatusCodes'
import { Operation } from './types'

import styles from './RestOperation.module.scss'

type Props = {
  operation: Operation
}

// all REST operations have this accept header by default
const DEFAULT_ACCEPT_HEADER = {
  name: 'accept',
  type: 'string',
  description: `<p>Setting to <code>application/vnd.github+json</code> is recommended.</p>`,
  isRequired: false,
}

export function RestOperation({ operation }: Props) {
  const titleSlug = slug(operation.title)
  const { t } = useTranslation('rest_reference')
  const router = useRouter()

  const headers = [DEFAULT_ACCEPT_HEADER]
  const numPreviews = operation.previews.length
  const hasStatusCodes = operation.statusCodes.length > 0
  const hasCodeSamples = operation.codeExamples.length > 0
  const hasParameters = operation.parameters.length > 0 || operation.bodyParameters.length > 0

  const anchorRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    if (router.asPath.includes('#')) {
      const routerAnchor = router.asPath.split('#')[1]
      if (routerAnchor === titleSlug) {
        anchorRef?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
      }
    }
  }, [])

  return (
    <div className="pb-8" ref={anchorRef}>
      <HeadingLink as="h2" slug={titleSlug}>
        {operation.title}
      </HeadingLink>
      {operation.enabledForGitHubApps && (
        <div className="d-flex">
          <span className="mr-2 d-flex flex-items-center">
            <CheckCircleFillIcon size={16} />
          </span>
          <span>
            {t('works_with') + ' '}
            <Link href={`/${router.locale}/developers/apps`}>GitHub Apps</Link>
          </span>
        </div>
      )}
      <div className="d-flex flex-wrap gutter mt-4">
        <div className="col-md-12 col-lg-6">
          <div
            className={cx(styles.codeBlock)}
            dangerouslySetInnerHTML={{ __html: operation.descriptionHTML }}
          />

          {hasParameters && (
            <ParameterTable
              slug={titleSlug}
              numPreviews={numPreviews}
              heading={t('parameters').replace('{{ RESTOperationTitle }}', operation.title)}
              headers={headers}
              parameters={operation.parameters}
              bodyParameters={operation.bodyParameters}
            />
          )}

          {hasStatusCodes && (
            <RestStatusCodes
              statusCodes={operation.statusCodes}
              slug={titleSlug}
              heading={t('http_status_code').replace('{{ RESTOperationTitle }}', operation.title)}
            />
          )}
        </div>
        <div
          className="col-md-12 col-lg-6 position-sticky flex-self-start"
          style={{ top: '6.5em' }}
        >
          {hasCodeSamples && (
            <RestCodeSamples
              operation={operation}
              slug={titleSlug}
              heading={t('code_samples').replace('{{ RESTOperationTitle }}', operation.title)}
            />
          )}

          {numPreviews > 0 && (
            <RestPreviewNotice
              slug={titleSlug}
              previews={operation.previews}
              heading={
                operation.previews.length > 1
                  ? `${t('preview_notices').replace('{{ RESTOperationTitle }}', operation.title)}`
                  : `${t('preview_notice').replace('{{ RESTOperationTitle }}', operation.title)}`
              }
            />
          )}
        </div>
      </div>
    </div>
  )
}
