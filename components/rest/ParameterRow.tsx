import { useTranslation } from 'components/hooks/useTranslation'
import { ChildBodyParametersRows } from './ChildBodyParametersRows'
import type { ChildParameter } from './types'

type Props = {
  rowParams: ChildParameter
  slug: string
  numPreviews?: number
  isChild?: boolean
}

export function ParameterRow({ rowParams, slug, numPreviews = 0, isChild = false }: Props) {
  const { t } = useTranslation('products')
  return (
    <>
      <tr className={`${isChild ? 'color-bg-subtle' : ''}`}>
        <td className={`${isChild ? 'px-3' : ''}`}>
          <div>
            <code className={`text-bold ${isChild ? 'f6' : 'f5'}`}>{rowParams.name}</code>
            <span className="color-fg-muted pl-2 f5">{rowParams.type}</span>
            {rowParams.isRequired ? (
              <span className={`color-fg-attention f5 ${isChild ? 'pl-3' : 'float-right'}`}>
                {t('rest.reference.required')}
              </span>
            ) : null}
          </div>

          <div className="pl-1 pt-2 color-fg-muted f5">
            <div dangerouslySetInnerHTML={{ __html: rowParams.description }} />
            {numPreviews > 0 && (
              <a href={`#${slug}-preview-notices`} className="d-inline">
                {numPreviews > 1
                  ? ` ${t('rest.reference.see_preview_notices')}`
                  : ` ${t('rest.reference.see_preview_notice')}`}
              </a>
            )}
            <div className="pt-2">
              {rowParams.default && (
                <p>
                  <span>{t('rest.reference.default')}: </span>
                  <code>{rowParams.default}</code>
                </p>
              )}
              {rowParams.enum && rowParams.enum.length && (
                <p>
                  <span>{t('rest.reference.enum_description_title')}: </span>

                  {rowParams.enum.map((item, index, array) => {
                    return index !== array.length - 1 ? (
                      <span key={item + index}>
                        <code>{item}</code>,{' '}
                      </span>
                    ) : (
                      <span key={item + index}>
                        <code>{item}</code>
                      </span>
                    )
                  })}
                </p>
              )}
            </div>
          </div>
        </td>
      </tr>
      {rowParams.childParamsGroups && rowParams.childParamsGroups.length > 0 && (
        <ChildBodyParametersRows
          slug={slug}
          parentName={rowParams.name}
          parentType={rowParams.type}
          childParamsGroups={rowParams.childParamsGroups}
        />
      )}
    </>
  )
}
