import cx from 'classnames'

import { useTranslation } from 'components/hooks/useTranslation'
import { ChildBodyParametersRows } from './ChildBodyParametersRows'
import type { ChildParameter } from './types'

type Props = {
  rowParams: ChildParameter
  slug: string
  numPreviews?: number
  isChild?: boolean
  rowIndex?: number
}

export function ParameterRow({
  rowParams,
  slug,
  numPreviews = 0,
  rowIndex = 0,
  isChild = false,
}: Props) {
  const { t } = useTranslation(['parameter_table', 'products'])

  // This will be true if `rowParams` does not have a key called `default`
  // and it will be true if it does and its actual value is `undefined`.
  const hasDefault = rowParams.default !== undefined
  return (
    <>
      <tr className={`${isChild ? 'color-bg-subtle' : ''}`}>
        <td className={`${isChild ? 'px-3' : ''}`}>
          <div
            className={cx(
              'pl-0 pt-1 pr-1 pb-1',
              `${rowIndex > 0 && isChild ? 'pt-3 border-top color-border-muted' : ''}`
            )}
          >
            <div>
              <code className={`text-bold f5`}>{rowParams.name}</code>
              <span className="color-fg-muted pl-2 f5">{rowParams.type}</span>
              {rowParams.isRequired ? (
                <span className="color-fg-attention f5 pl-3">{t('required')}</span>
              ) : null}
            </div>

            <div
              className={cx('pl-1 color-fg-muted f5', `${rowParams.description ? 'pt-2' : 'pt-0'}`)}
            >
              <div dangerouslySetInnerHTML={{ __html: rowParams.description }} />
              {numPreviews > 0 && (
                <a href={`#${slug}-preview-notices`} className="d-inline">
                  {numPreviews > 1 ? ` ${t('see_preview_notices')}` : ` ${t('see_preview_notice')}`}
                </a>
              )}
              <div className={cx(`${hasDefault || rowParams.enum ? 'pt-2' : 'pt-0'}`)}>
                {hasDefault && (
                  <p>
                    <span>{t('default')}: </span>
                    <code>
                      {typeof rowParams.default === 'string'
                        ? // In the schema, the default value for strings can
                          // potentially be the empty string so we handle this case
                          // in particular by rendering it as "".  Otherwise we would
                          // display an empty code block which could be confusing.
                          rowParams.default || '""'
                        : JSON.stringify(rowParams.default)}
                    </code>
                  </p>
                )}
                {rowParams.enum && rowParams.enum.length && (
                  <p>
                    {rowParams.enum.length > 1 ? (
                      <>
                        <span>{t('enum_description_title')}: </span>
                        {rowParams.enum.map((item, index, array) => (
                          <span key={item + index}>
                            <code className="color-bg-muted">{item}</code>
                            {index !== array.length - 1 && ','}{' '}
                          </span>
                        ))}
                      </>
                    ) : (
                      <>
                        <span>{t('single_enum_description')}: </span>
                        <span key={rowParams.enum[0]}>
                          <code>{rowParams.enum[0]}</code>
                        </span>
                      </>
                    )}
                  </p>
                )}
              </div>
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
