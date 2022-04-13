import slugger from 'github-slugger'

import { RestOperationHeading } from './RestOperationHeading'
import { CodeBlock } from './CodeBlock'
import { RestParameterTable } from './RestParameterTable'
import { RestCodeSamples } from './RestCodeSamples'
import { RestStatusCodes } from './RestStatusCodes'
import { Operation } from './types'
import { RestNotes } from './RestNotes'
import { RestPreviewNotice } from './RestPreviewNotice'
import { useTranslation } from 'components/hooks/useTranslation'

type Props = {
  operation: Operation
}

export function RestOperation({ operation }: Props) {
  const { t } = useTranslation('products')

  const slug = slugger.slug(operation.title)

  const numPreviews = operation.previews.length
  const hasStatusCodes = operation.statusCodes.length > 0
  const hasCodeSamples = operation.codeExamples.length > 0
  const hasParameters = operation.parameters.length > 0 || operation.bodyParameters.length > 0

  return (
    <div>
      <RestOperationHeading
        slug={slug}
        title={operation.title}
        descriptionHTML={operation.descriptionHTML}
      />

      {operation.requestPath && (
        <CodeBlock verb={operation.verb} codeBlock={operation.requestPath}></CodeBlock>
      )}

      {hasParameters && (
        <RestParameterTable
          slug={slug}
          numPreviews={numPreviews}
          parameters={operation.parameters}
          bodyParameters={operation.bodyParameters}
        />
      )}

      {hasCodeSamples && <RestCodeSamples operation={operation} slug={slug} />}

      {hasStatusCodes && (
        <RestStatusCodes
          heading={t('rest.reference.status_codes')}
          statusCodes={operation.statusCodes}
        />
      )}

      {operation.enabledForGitHubApps && <RestNotes />}

      {numPreviews > 0 && <RestPreviewNotice slug={slug} previews={operation.previews} />}
    </div>
  )
}
