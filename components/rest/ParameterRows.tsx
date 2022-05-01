import { Parameter } from './types'
import { useTranslation } from 'components/hooks/useTranslation'

type Props = {
  parameters: Parameter[]
}

export function ParameterRows({ parameters }: Props) {
  const { t } = useTranslation('products')

  return (
    <>
      {parameters.map((param) => (
        <tr key={`${param.name}-${param.descriptionHTML}`}>
          <td>
            <code>{param.name}</code>
          </td>
          <td>{param.schema.type}</td>
          <td>{param.in}</td>
          <td>
            {param.descriptionHTML && (
              <div dangerouslySetInnerHTML={{ __html: param.descriptionHTML }} />
            )}
            {param.schema.default && (
              <p>
                {t('rest.reference.default')}: <code>{param.schema.default}</code>
              </p>
            )}
          </td>
        </tr>
      ))}
    </>
  )
}
