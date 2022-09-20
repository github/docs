import cx from 'classnames'

import { useTranslation } from 'components/hooks/useTranslation'
import { ParameterRow } from './ParameterRow'
import type { ChildParameter } from './types'

import styles from './ChildBodyParametersRows.module.scss'

type Props = {
  slug: string
  childParamsGroups: ChildParameter[]
  parentName: string
  parentType: string
}

export function ChildBodyParametersRows({
  slug,
  parentName,
  parentType,
  childParamsGroups,
}: Props) {
  const { t } = useTranslation(['parameter_table', 'products'])

  return (
    <tr className={cx(styles.childBodyParametersRows, 'color-bg-subtle border-top-0')}>
      <td colSpan={4} className="has-nested-table">
        <details className="box px-3 ml-1 mb-0">
          <summary
            role="button"
            aria-expanded="false"
            className="mb-2 keyboard-focus color-fg-muted"
          >
            <span id={`${slug}-${parentName}-${parentType}`}>Properties of {parentName}</span>
          </summary>
          <table id={`${parentName}-object`} className="mb-4 mt-2 color-bg-subtle">
            <thead className="visually-hidden">
              <tr>
                <th>{`${t('name')}, ${t('type')}, ${t('description')}`}</th>
              </tr>
            </thead>
            <tbody>
              {childParamsGroups.map((childParam) => {
                return (
                  <ParameterRow
                    rowParams={childParam}
                    slug={slug}
                    isChild={true}
                    key={childParam.name}
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
