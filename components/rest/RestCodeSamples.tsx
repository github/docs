import type { xCodeSample } from './types'
import { useTranslation } from 'components/hooks/useTranslation'
import { CodeBlock } from './CodeBlock'
import { Fragment } from 'react'

type Props = {
  slug: string
  xCodeSamples: Array<xCodeSample>
}

export function RestCodeSamples({ slug, xCodeSamples }: Props) {
  const { t } = useTranslation('products')

  return (
    <Fragment key={xCodeSamples + slug}>
      <h4 id={`${slug}--code-samples`}>
        <a href={`#${slug}--code-samples`}>{`${t('rest.reference.code_samples')}`}</a>
      </h4>
      {xCodeSamples.map((sample, index) => {
        const sampleElements: JSX.Element[] = []
        if (sample.lang !== 'Ruby') {
          sampleElements.push(
            <CodeBlock
              key={sample.lang + index}
              headingLang={sample.lang}
              codeBlock={sample.source}
              highlight={sample.lang === 'JavaScript' ? 'javascript' : 'curl'}
            ></CodeBlock>
          )
        }
        return sampleElements
      })}
    </Fragment>
  )
}
