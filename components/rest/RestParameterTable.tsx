import cx from 'classnames'
import { useTranslation } from 'components/hooks/useTranslation'
import { BodyParameter, Parameter, xGitHub } from './types'
import styles from './RestParameterTable.module.scss'
import { PreviewsRow } from './PreviewsRow'
import { ParameterRows } from './ParameterRows'
import { BodyParameterRows } from './BodyParametersRows'

type Props = {
  slug: string
  hasRequiredPreviews: boolean
  xGitHub: xGitHub
  parameters: Array<Parameter>
  bodyParameters: Array<BodyParameter>
}

export function RestParameterTable({
  slug,
  hasRequiredPreviews,
  xGitHub,
  parameters,
  bodyParameters,
}: Props) {
  const { t } = useTranslation('products')

  return (
    <>
      <h4 className="mt-4 mb-3 pt-3" id={`${slug}--parameters`}>
        <a href={`#${slug}--parameters`}>{t('rest.reference.parameters')}</a>
      </h4>
      <table className={cx(styles.parameterTable)}>
        <thead>
          <tr className="text-left">
            <th>{t('rest.reference.name')}</th>
            <th>{t('rest.reference.type')}</th>
            <th>{t('rest.reference.in')}</th>
            <th>{t('rest.reference.description')}</th>
          </tr>
        </thead>
        <tbody>
          <PreviewsRow slug={slug} hasRequiredPreviews={hasRequiredPreviews} xGitHub={xGitHub} />
          <ParameterRows parameters={parameters} />
          <BodyParameterRows slug={slug} bodyParameters={bodyParameters} />
        </tbody>
      </table>
    </>
  )
}
