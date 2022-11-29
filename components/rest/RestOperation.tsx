import { useRouter } from 'next/router'
import { slug } from 'github-slugger'
import { CheckCircleFillIcon } from '@primer/octicons-react'
import cx from 'classnames'

import { LinkIconHeading } from 'components/article/LinkIconHeading'
import { Link } from 'components/Link'
import { useTranslation } from 'components/hooks/useTranslation'
import { RestPreviewNotice } from './RestPreviewNotice'
import styles from './RestOperation.module.scss'
import { ParameterTable } from 'components/parameter-table/ParameterTable'
import { RestCodeSamples } from './RestCodeSamples'
import { RestStatusCodes } from './RestStatusCodes'
import { Operation } from './types'

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
  const { t } = useTranslation('products')
  const router = useRouter()

  const headers = [DEFAULT_ACCEPT_HEADER]
  const numPreviews = operation.previews.length
  const hasStatusCodes = operation.statusCodes.length > 0
  const hasCodeSamples = operation.codeExamples.length > 0
  const hasParameters = operation.parameters.length > 0 || operation.bodyParameters.length > 0

  return (
    <div className="pb-8">
      <h2 id={titleSlug}>
        <LinkIconHeading slug={titleSlug} />
        {operation.title}
      </h2>
      {operation.enabledForGitHubApps && (
        <div className="d-flex">
          <span className="mr-2 d-flex flex-items-center">
            <CheckCircleFillIcon size={16} />
          </span>
          <span>
            {t('rest.reference.works_with') + ' '}
            <Link className="" href={`/${router.locale}/developers/apps`}>
              GitHub Apps
            </Link>
          </span>
        </div>
      )}
      <div className={cx(styles.restOperation, 'd-flex flex-wrap gutter mt-4')}>
        <div className="col-md-12 col-lg-6">
          <div
            className={cx(styles.codeBlock)}
            dangerouslySetInnerHTML={{ __html: operation.descriptionHTML }}
          />

          {hasParameters && (
            <ParameterTable
              slug={titleSlug}
              numPreviews={numPreviews}
              heading={t('rest.reference.parameters')}
              headers={headers}
              parameters={operation.parameters}
              bodyParameters={operation.bodyParameters}
            />
          )}

          {hasStatusCodes && (
            <RestStatusCodes statusCodes={operation.statusCodes} slug={titleSlug} />
          )}
        </div>
        <div
          className="col-md-12 col-lg-6 position-sticky flex-self-start"
          style={{ top: '6.5em' }}
        >
          {hasCodeSamples && <RestCodeSamples operation={operation} slug={titleSlug} />}

          {numPreviews > 0 && <RestPreviewNotice slug={titleSlug} previews={operation.previews} />}
        </div>
      </div>
    </div>
  )
}
