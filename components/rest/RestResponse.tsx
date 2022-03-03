import { CodeResponse } from './types'
import { CodeBlock } from './CodeBlock'

type Props = {
  responses: Array<CodeResponse>
}

export function RestResponse({ responses }: Props) {
  return (
    <>
      {responses.map((response: CodeResponse, index: number) => {
        return (
          <div key={`${response.httpStatusMessage}-${index}}`}>
            <h4 dangerouslySetInnerHTML={{ __html: response.description }} />
            <CodeBlock
              codeBlock={`Status: ${response.httpStatusCode} ${response.httpStatusMessage}`}
            />
            <CodeBlock codeBlock={response.payload} setHTML={true} />
          </div>
        )
      })}
    </>
  )
}
