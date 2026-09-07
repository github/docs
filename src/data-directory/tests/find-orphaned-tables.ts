import { describe, expect, test } from 'vitest'

import { getOrphanedTables, type TableFile } from '@/data-directory/scripts/find-orphaned-tables'

function table(key: string): TableFile {
  const relative = key.split('.').join('/')
  return {
    key,
    yml: `data/tables/${relative}.yml`,
    schema: `src/data-directory/lib/data-schemas/tables/${relative}.ts`,
  }
}

describe('getOrphanedTables', () => {
  const tables = [
    table('copilot.model-multipliers'),
    table('copilot.copilot-matrix'),
    table('rest-api-versions'),
  ]

  test('flags a table that is never referenced', () => {
    const sources = ['{% for entry in tables.copilot.copilot-matrix %}', 'tables.rest-api-versions']
    const orphans = getOrphanedTables(tables, sources)
    expect(orphans.map((t) => t.key)).toEqual(['copilot.model-multipliers'])
  })

  test('returns the paired yml and schema paths for an orphan', () => {
    const orphans = getOrphanedTables([table('copilot.model-multipliers')], ['nothing here'])
    expect(orphans[0].yml).toBe('data/tables/copilot/model-multipliers.yml')
    expect(orphans[0].schema).toBe(
      'src/data-directory/lib/data-schemas/tables/copilot/model-multipliers.ts',
    )
  })

  test('counts the `{% data tables.X %}` form as a reference', () => {
    const orphans = getOrphanedTables(
      [table('rest-api-versions')],
      ['see {% data tables.rest-api-versions %} below'],
    )
    expect(orphans).toHaveLength(0)
  })

  test('counts a deeper sub-key reference as using the table file', () => {
    // A reference to `tables.copilot.copilot-matrix.ides` should mark the
    // `copilot.copilot-matrix` file as used.
    const orphans = getOrphanedTables(
      [table('copilot.copilot-matrix')],
      ['{% for row in tables.copilot.copilot-matrix.ides %}'],
    )
    expect(orphans).toHaveLength(0)
  })

  test('does not let a longer key falsely mark a shorter, unrelated table', () => {
    // `tables.copilot.annual-subscriber-model-multipliers` must NOT mark
    // `copilot.model-multipliers` as used.
    const orphans = getOrphanedTables(
      [table('copilot.model-multipliers')],
      ['{% data tables.copilot.annual-subscriber-model-multipliers %}'],
    )
    expect(orphans.map((t) => t.key)).toEqual(['copilot.model-multipliers'])
  })

  test('returns nothing when there are no tables', () => {
    expect(getOrphanedTables([], ['anything'])).toEqual([])
  })
})
