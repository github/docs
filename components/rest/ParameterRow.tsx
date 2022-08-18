import { useTranslation } from 'components/hooks/useTranslation'
import { ChildBodyParametersRows } from './ChildBodyParametersRows'
import type { ChildParamsGroup } from './types'

type Props = {
  name: string
  type: string | string[]
  description: string
  isRequired?: boolean
  defaultValue?: string
  enumValues?: string[]
  slug: string
  childParamsGroups?: ChildParamsGroup[] | null
  numPreviews?: number
  isChild?: boolean
}

export function ParameterRow({
  name,
  type,
  description,
  isRequired,
  defaultValue,
  enumValues,
  slug,
  childParamsGroups = null,
  numPreviews = 0,
  isChild = false,
}: Props) {
  const { t } = useTranslation('products')

  return (
    <>
      <tr className={`${isChild ? 'color-bg-subtle' : ''}`}>
        <td className={`${isChild ? 'pl-2' : ''}`}>
          <div>
            <code className={`text-bold ${isChild ? 'f6' : 'f5'}`}>{name}</code>
            <span className="color-fg-muted pl-2 f5">
              {Array.isArray(type) ? type.join(' or ') : type}
            </span>
            {isRequired ? (
              <span className={`color-fg-attention f5 ${isChild ? 'pl-3' : 'float-right'}`}>
                {t('rest.reference.required')}
              </span>
            ) : null}
          </div>

          <div className="pl-1 pt-2 color-fg-muted f5">
            <div dangerouslySetInnerHTML={{ __html: description }} />
            {numPreviews > 0 && (
              <a href={`#${slug}-preview-notices`} className="d-inline">
                {numPreviews > 1
                  ? ` ${t('rest.reference.see_preview_notices')}`
                  : ` ${t('rest.reference.see_preview_notice')}`}
              </a>
            )}
            <div className="pt-2">
              {defaultValue !== undefined && (
                <p>
                  <span>{t('rest.reference.default')}: </span>
                  <code>{defaultValue.toString()}</code>
                </p>
              )}
              {enumValues && (
                <p>
                  <span>{t('rest.reference.enum_description_title')}: </span>

                  {enumValues.map((item, index) => {
                    return index !== enumValues.length - 1 ? (
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
      {childParamsGroups && childParamsGroups.length > 0 && (
        <ChildBodyParametersRows slug={slug} childParamsGroups={childParamsGroups} />
      )}
    </>
  )
}
