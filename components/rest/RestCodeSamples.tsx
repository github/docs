import type { Operation } from './types'
import { useTranslation } from 'components/hooks/useTranslation'
import { CodeBlock } from './CodeBlock'
import { getShellExample, getGHExample, getJSExample } from '../lib/get-rest-code-samples'

type Props = {
  slug: string
  operation: Operation
}

export function RestCodeSamples({ operation, slug }: Props) {
  const { t } = useTranslation('products')

  const JAVASCRIPT_HEADING = (
    <span>
      JavaScript{' '}
      <a className="text-underline" href="https://github.com/octokit/core.js#readme">
        @octokit/core.js
      </a>
    </span>
  )

  const GH_CLI_HEADING = (
    <span>
      GitHub CLI{' '}
      <a className="text-underline" href="https://cli.github.com/manual/gh_api">
        gh api
      </a>
    </span>
  )

  // Format the example properties into different language examples
  const languageExamples = operation.codeExamples.map((sample) => {
    const languageExamples = {
      curl: getShellExample(operation, sample),
      javascript: getJSExample(operation, sample),
      ghcli: getGHExample(operation, sample),
    }
    return Object.assign({}, sample, languageExamples)
  })

  return (
    <>
      <h4 id={`${slug}--code-samples`}>
        <a href={`#${slug}--code-samples`}>{`${t('rest.reference.code_samples')}`}</a>
      </h4>
      {languageExamples.map((sample, index) => (
        <div key={`${JSON.stringify(sample)}-${index}`}>
          {/* Example requests */}
          {sample.request && (
            <>
              {/* Title of the code sample block */}
              <h5 dangerouslySetInnerHTML={{ __html: sample.request.description }} />
              {sample.curl && (
                <CodeBlock headingLang="Shell" codeBlock={sample.curl} highlight="curl" />
              )}
              {sample.javascript && (
                <CodeBlock
                  headingLang={JAVASCRIPT_HEADING}
                  codeBlock={sample.javascript}
                  highlight="javascript"
                />
              )}
              {sample.ghcli && (
                <CodeBlock headingLang={GH_CLI_HEADING} codeBlock={sample.ghcli} highlight="curl" />
              )}
            </>
          )}

          {/* Title of the response */}
          {sample.response && (
            <>
              <h5 dangerouslySetInnerHTML={{ __html: sample.response.description }} />
              {/* Status code */}
              {sample.response.statusCode && (
                <CodeBlock codeBlock={`Status: ${sample.response.statusCode}`} />
              )}

              {/* Example response */}
              {sample.response.example && (
                <CodeBlock
                  codeBlock={JSON.stringify(sample.response.example, null, 2)}
                  highlight="json"
                />
              )}
            </>
          )}
        </div>
      ))}
    </>
  )
}
