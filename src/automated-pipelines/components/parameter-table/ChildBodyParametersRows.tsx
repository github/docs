import cx from 'classnames'

import { useTranslation } from 'src/languages/components/useTranslation'
import { ParameterRow } from './ParameterRow'
import type { ChildParameter } from './types'

import styles from './ChildBodyParametersRows.module.scss'

type Props = {
  open: boolean
  slug: string
  childParamsGroups: ChildParameter[]
  parentName: string
  parentType?: string
  oneOfObject?: boolean
}

export function ChildBodyParametersRows({
  open,
  slug,
  parentName,
  parentType,
  childParamsGroups,
  oneOfObject = false,
}: Props) {
  const { t } = useTranslation(['parameter_table', 'products'])
  return (
    <tr className={cx(styles.childBodyParametersRows, 'color-bg-subtle border-top-0')}>
      <td className="has-nested-table">
        <details className="box px-3 ml-1 mb-0" open={open}>
          <summary role="button" aria-expanded="false" className="mb-2 keyboard-focus">
            {oneOfObject ? (
              <span id={`${slug}-${parentName}-${parentType}`}>Can be one of these objects:</span>
            ) : (
              <span id={`${slug}-${parentName}-${parentType}`}>
                Properties of <code>{parentName}</code>
              </span>
            )}
          </summary>
          <table id={`${parentName}-object`} className="mb-4 color-bg-subtle">
            <thead className="visually-hidden">
              <tr>
                <th>{`${t('name')}, ${t('type')}, ${t('description')}`}</th>
              </tr>
            </thead>
            <tbody>
              {childParamsGroups.map((childParam, index) => {
                return (
                  <ParameterRow
                    rowParams={childParam}
                    slug={slug}
                    isChild={true}
                    key={`${childParam.name}-${index}`}
                    rowIndex={index}
                  />
                )
              })}
            </tbody>
          </table>
        </details>
      </td>
    </tr>
  )
}
