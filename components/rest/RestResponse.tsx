import { CodeResponse } from './types'
import { CodeBlock } from './CodeBlock'
import { useTranslation } from 'components/hooks/useTranslation'
import { RestResponseTable } from './RestResponseTable'

type Props = {
  responses: Array<CodeResponse>
  variant?: 'non-error' | 'error'
}

export function RestResponse(props: Props) {
  const { responses, variant = 'non-error' } = props
  const { t } = useTranslation('products')

  if (!responses || responses.length === 0) {
    return null
  }

  const filteredResponses = responses.filter((response) => {
    const responseCode = parseInt(response.httpStatusCode)

    if (variant === 'error') {
      return responseCode >= 400
    } else {
      return responseCode < 400
    }
  })

  if (filteredResponses.length === 0) {
    return null
  }

  if (variant === 'error') {
    return (
      <RestResponseTable heading={t('rest.reference.error_codes')} responses={filteredResponses} />
    )
  }

  return (
    <>
      {filteredResponses.map((response, index) => {
        return (
          <div key={`${response.httpStatusMessage}-${index}}`}>
            <h4 dangerouslySetInnerHTML={{ __html: response.description }} />
            <CodeBlock
              codeBlock={`Status: ${response.httpStatusCode} ${response.httpStatusMessage}`}
            />
            {response.payload ? <CodeBlock codeBlock={response.payload} highlight="json" /> : null}
          </div>
        )
      })}
    </>
  )
}
