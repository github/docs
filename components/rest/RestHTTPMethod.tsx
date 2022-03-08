import { CodeBlock } from './CodeBlock'

type Props = {
  verb: string
  requestPath: string
}

export function RestHTTPMethod({ verb, requestPath }: Props) {
  return <CodeBlock verb={verb} codeBlock={requestPath}></CodeBlock>
}
