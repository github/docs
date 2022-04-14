import { Fragment } from 'react'
import type { BodyParameter } from './types'
import { useTranslation } from 'components/hooks/useTranslation'
import { ChildBodyParametersRows } from './ChildBodyParametersRows'

type Props = {
  slug: string
  bodyParameters: BodyParameter[]
}

export function BodyParameterRows({ slug, bodyParameters }: Props) {
  const { t } = useTranslation('products')

  return (
    <>
      {bodyParameters.map((bodyParam) => {
        return (
          <Fragment key={bodyParam.name + bodyParam.description}>
            <tr>
              <td>
                <code>{bodyParam.name}</code>
              </td>
              <td>{bodyParam.type}</td>
              <td>{bodyParam.in}</td>
              <td>
                <div dangerouslySetInnerHTML={{ __html: bodyParam.description }} />
                {bodyParam.default && (
                  <p>
                    {t('rest.reference.default')}: <code>{bodyParam.default}</code>
                  </p>
                )}
              </td>
            </tr>
            {bodyParam.childParamsGroups && bodyParam.childParamsGroups.length > 0 && (
              <ChildBodyParametersRows
                slug={slug}
                childParamsGroups={bodyParam.childParamsGroups}
              />
            )}
          </Fragment>
        )
      })}
    </>
  )
}
