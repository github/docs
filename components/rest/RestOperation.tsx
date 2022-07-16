import { useRouter } from 'next/router'
import slugger from 'github-slugger'
import { CheckCircleFillIcon } from '@primer/octicons-react'
import cx from 'classnames'

import { Link } from 'components/Link'
import { useTranslation } from 'components/hooks/useTranslation'
import { RestPreviewNotice } from './RestPreviewNotice'
import styles from './RestOperation.module.scss'
import { RestParameterTable } from './RestParameterTable'
import { RestCodeSamples } from './RestCodeSamples'
import { RestStatusCodes } from './RestStatusCodes'
import { Operation } from './types'

type Props = {
  operation: Operation
}

export function RestOperation({ operation }: Props) {
  const slug = slugger.slug(operation.title)
  const { t } = useTranslation('products')
  const router = useRouter()

  const numPreviews = operation.previews.length
  const hasStatusCodes = operation.statusCodes.length > 0
  const hasCodeSamples = operation.codeExamples.length > 0
  const hasParameters = operation.parameters.length > 0 || operation.bodyParameters.length > 0

  return (
    <div className="pb-8">
      <h2 className="d-flex flex-md-row mb-6" id={slug}>
        <a href={`#${slug}`}>{operation.title}</a>
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
            <RestParameterTable
              slug={slug}
              numPreviews={numPreviews}
              parameters={operation.parameters}
              bodyParameters={operation.bodyParameters}
            />
          )}

          {hasStatusCodes && <RestStatusCodes statusCodes={operation.statusCodes} slug={slug} />}
        </div>
        <div
          className="col-md-12 col-lg-6 position-sticky flex-self-start"
          style={{ top: '6.5em' }}
        >
          {hasCodeSamples && <RestCodeSamples operation={operation} slug={slug} />}

          {numPreviews > 0 && <RestPreviewNotice slug={slug} previews={operation.previews} />}
        </div>
      </div>
    </div>
  )
}
