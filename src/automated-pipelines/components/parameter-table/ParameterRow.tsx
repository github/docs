import cx from 'clsx'

import { useTranslation } from '@/languages/components/useTranslation'
import { ChildBodyParametersRows } from './ChildBodyParametersRows'
import type { ChildParameter } from './types'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'

type Props = {
  rowParams: ChildParameter
  slug: string
  numPreviews?: number
  isChild?: boolean
  rowIndex?: number
  bodyParamExpandCallback?: (target: HTMLDetailsElement) => void
  clickedBodyParameterName?: string | undefined
}

// The webhooks page documents common webhook payload properties in one shared section.
// Skipping their child properties here avoids duplicate schema lookups and repeated docs.
// https://docs.github.com/en/webhooks/webhook-events-and-payloads
const NO_CHILD_WEBHOOK_PROPERTIES = [
  'action',
  'enterprise',
  'installation',
  'organization',
  'repository',
  'sender',
]

export function ParameterRow({
  rowParams,
  slug,
  numPreviews = 0,
  isChild = false,
  rowIndex = 0,
  bodyParamExpandCallback,
  clickedBodyParameterName,
}: Props) {
  const { t } = useTranslation(['parameter_table'])

  const hasDefault = rowParams.default !== undefined
  return (
    <>
      <tr className={`${isChild ? 'color-bg-subtle' : ''}`}>
        <td className={`${isChild ? 'px-3' : ''}`}>
          <div className={cx('pl-0 pt-1 pr-1 pb-1', `${rowIndex > 0 && isChild ? 'my-3' : ''}`)}>
            <div>
              {rowParams.name ? (
                <>
                  <code className={`text-bold f5`}>{rowParams.name}</code>
                  {/* Keeps <code>foo</code><span>bar</span> from rendering as foobar without CSS. */}{' '}
                  <span className="color-fg-muted pl-2 f5">
                    {Array.isArray(rowParams.type) ? rowParams.type.join(' or ') : rowParams.type}
                  </span>
                  {/* Keeps readable text spacing if CSS fails to load. */}{' '}
                  {rowParams.isRequired ? (
                    <span className="color-fg-attention f5 pl-3">{t('required')}</span>
                  ) : null}
                </>
              ) : (
                <>
                  <span className="color-fg-muted pl-1 f5">
                    {Array.isArray(rowParams.type) ? rowParams.type.join(' or ') : rowParams.type}
                  </span>
                  {/* Keeps readable text spacing if CSS fails to load. */}{' '}
                  {rowParams.isRequired ? (
                    <span className="color-fg-attention f5 pl-3">{t('required')}</span>
                  ) : null}
                </>
              )}
            </div>

            <div className={cx('pl-1 f5', `${rowParams.description ? 'pt-2' : 'pt-0'}`)}>
              <RenderedHTML as="div" html={rowParams.description} />
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
                        ? // Empty string defaults need visible quotes.
                          rowParams.default || '""'
                        : JSON.stringify(rowParams.default)}
                    </code>
                  </p>
                )}
                {rowParams.enum && rowParams.enum.length && (
                  <p>
                    <span>
                      {rowParams.enum.length === 1
                        ? t('single_enum_description')
                        : t('enum_description_title')}
                      :{' '}
                    </span>
                    {rowParams.enum.map((item, index, array) => (
                      <span key={`${item}${index}`}>
                        <code>{item === null ? <i>null</i> : item}</code>
                        {index !== array.length - 1 && ','}{' '}
                      </span>
                    ))}
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
          parentType={
            rowParams.type
              ? Array.isArray(rowParams.type)
                ? rowParams.type.join(' or ')
                : rowParams.type
              : undefined
          }
          childParamsGroups={rowParams.childParamsGroups}
          open={rowParams.name === clickedBodyParameterName}
          oneOfObject={rowParams.oneOfObject}
        />
      )}

      {/* Empty child groups mark unloaded nested params except shared webhook props; details lazy-loads them. */}
      {rowParams.type &&
      (rowParams.type.includes('object') || rowParams.type.includes('array of')) &&
      rowParams.childParamsGroups &&
      rowParams.childParamsGroups.length === 0 &&
      !NO_CHILD_WEBHOOK_PROPERTIES.includes(rowParams.name) ? (
        <tr className="border-top-0">
          <td className="has-nested-table">
            <details
              data-nested-param-id={rowParams.name}
              className="box px-3 ml-1 mb-0"
              onToggle={(event) => {
                if (bodyParamExpandCallback) {
                  const target = event.target as HTMLDetailsElement
                  bodyParamExpandCallback(target)
                }
              }}
            >
              <summary role="button" aria-expanded="false" className="mb-2 keyboard-focus">
                {rowParams.oneOfObject ? (
                  <span id={`${slug}-${rowParams.name}`}>
                    Can be one of these objects: <code>{rowParams.name}</code>
                  </span>
                ) : (
                  <span id={`${slug}-${rowParams.name}`}>
                    Properties of <code>{rowParams.name}</code>
                  </span>
                )}
              </summary>
            </details>
          </td>
        </tr>
      ) : null}
    </>
  )
}
