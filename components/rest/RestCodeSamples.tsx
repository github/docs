import { xCodeSample } from './types'
import { useTranslation } from 'components/hooks/useTranslation'
import { CodeBlock } from './CodeBlock'

type Props = {
  slug: string
  xCodeSamples: Array<xCodeSample>
}

export function RestCodeSamples({ slug, xCodeSamples }: Props) {
  const { t } = useTranslation('products')

  return (
    <>
      <h4 className="pt-3 my-4" id={`${slug}--code-samples`}>
        <a href={`#${slug}--code-samples`}>{`${t('rest.reference.code_samples')}`}</a>
      </h4>
      {xCodeSamples.map((sample: xCodeSample, index: number) => {
        const sampleElements: JSX.Element[] = []
        if (sample.lang !== 'Ruby') {
          sampleElements.push(
            sample.lang === 'JavaScript' ? (
              <h5 key={`${sample.lang}-${index}`} className="pt-3">
                {sample.lang} (
                <a className="text-underline" href="https://github.com/octokit/core.js#readme">
                  @octokit/core.js
                </a>
                )
              </h5>
            ) : (
              <h5 key={`${sample.lang}-${index}`} className="pt-3">
                {sample.lang}
              </h5>
            )
          )
          sampleElements.push(
            <CodeBlock
              key={sample.lang + index}
              codeBlock={sample.sourceHTML}
              setHTML={true}
            ></CodeBlock>
          )
        }
        return sampleElements
      })}
    </>
  )
}
