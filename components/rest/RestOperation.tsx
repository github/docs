import { RestOperationHeading } from './RestOperationHeading'
import { RestHTTPMethod } from './RestHTTPMethod'
import { RestParameterTable } from './RestParameterTable'
import { RestCodeSamples } from './RestCodeSamples'
import { RestResponse } from './RestResponse'
import { Operation } from './types'
import { RestNotes } from './RestNotes'
import { RestPreviewNotice } from './RestPreviewNotice'

type Props = {
  operation: Operation
  index: number
}

export function RestOperation({ operation }: Props) {
  const previews = operation['x-github'].previews
  const hasRequiredPreviews = previews
    ? previews.filter((preview) => preview.required).length > 0
    : false

  return (
    <div>
      <RestOperationHeading
        slug={operation.slug}
        summary={operation.summary}
        descriptionHTML={operation.descriptionHTML}
      />
      <RestHTTPMethod verb={operation.verb} requestPath={operation.requestPath} />
      {operation.parameters && (
        <RestParameterTable
          slug={operation.slug}
          hasRequiredPreviews={hasRequiredPreviews}
          xGitHub={operation['x-github']}
          parameters={operation.parameters}
          bodyParameters={operation.bodyParameters}
        />
      )}
      {operation['x-codeSamples'] && operation['x-codeSamples'].length > 0 && (
        <RestCodeSamples slug={operation.slug} xCodeSamples={operation['x-codeSamples']} />
      )}
      <RestResponse responses={operation.responses} />
      {(operation.notes.length > 0 || operation['x-github'].enabledForGitHubApps) && (
        <RestNotes
          notes={operation.notes}
          enabledForGitHubApps={operation['x-github'].enabledForGitHubApps}
        />
      )}
      {previews && (
        <RestPreviewNotice slug={operation.slug} previews={operation['x-github'].previews} />
      )}
      <RestResponse responses={operation.responses} variant="error" />
    </div>
  )
}
