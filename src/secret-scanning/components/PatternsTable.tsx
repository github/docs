import type { ReactNode } from 'react'
import { SortAscIcon, SortDescIcon } from '@primer/octicons-react'
import styles from './PatternsTable.module.scss'

export type SortDirection = 'ASC' | 'DESC'

export type PatternsTableColumn<Row> = {
  field: string
  header: string
  width?: string
  rowHeader?: boolean
  sortable?: boolean
  renderCell: (row: Row) => ReactNode
}

type Props<Row extends { id: string }> = {
  titleId: string
  rows: Row[]
  columns: PatternsTableColumn<Row>[]
  sortColumn: string | undefined
  sortDirection: SortDirection
  onSort: (field: string, direction: SortDirection) => void
}

// Fully controlled, so resetting sortColumn in the parent also resets the header state.
export function PatternsTable<Row extends { id: string }>({
  titleId,
  rows,
  columns,
  sortColumn,
  sortDirection,
  onSort,
}: Props<Row>) {
  return (
    <table className={styles.table} aria-labelledby={titleId}>
      <thead>
        <tr>
          {columns.map((column) => {
            const isSorted = column.sortable && sortColumn === column.field
            const ariaSort = isSorted
              ? sortDirection === 'ASC'
                ? 'ascending'
                : 'descending'
              : undefined
            return (
              <th
                key={column.field}
                scope="col"
                aria-sort={ariaSort}
                style={column.width ? { width: column.width, minWidth: column.width } : undefined}
              >
                {column.sortable ? (
                  <button
                    type="button"
                    className={styles.sortButton}
                    onClick={() =>
                      onSort(column.field, isSorted && sortDirection === 'ASC' ? 'DESC' : 'ASC')
                    }
                  >
                    {column.header}
                    {isSorted && sortDirection === 'DESC' ? (
                      <SortDescIcon aria-hidden="true" className={styles.sortIcon} />
                    ) : (
                      <SortAscIcon aria-hidden="true" className={styles.sortIcon} />
                    )}
                    {!isSorted && <span className="visually-hidden">sort ascending</span>}
                  </button>
                ) : (
                  column.header
                )}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {columns.map((column) =>
              column.rowHeader ? (
                <th key={column.field} scope="row">
                  {column.renderCell(row)}
                </th>
              ) : (
                <td key={column.field}>{column.renderCell(row)}</td>
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
