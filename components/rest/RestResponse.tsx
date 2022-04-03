import { CodeResponse } from './types'
import { CodeBlock } from './CodeBlock'

type Props = {
  responses: Array<CodeResponse>
}

export function RestResponse(props: Props) {
  const { responses } = props

  if (!responses || responses.length === 0) {
    return null
  }

  return (
    <>
      {responses.map((response, index) => {
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
