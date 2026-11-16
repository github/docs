import { useEffect, useState } from 'react'
import { Button, Checkbox, CheckboxGroup, FormControl, Heading } from '@primer/react-brand'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'clsx'

import { useTranslation } from '@/languages/components/useTranslation'

import type { SearchResultAggregations } from '@/search/types'
import styles from './Aggregations.module.scss'

type Props = {
  aggregations: SearchResultAggregations
}

// SearchResultsAggregations holds pending toggles so checked boxes respond before the URL updates.
// This mirrors the optimistic data-pending highlight in SidebarProduct.
// Clear all always renders as a stable footer control. The design pairs it with Apply, but filters
// apply immediately, so Apply would imply nothing happened yet. Staged filtering is separate work.
// With no selected facets, Clear all renders as a disabled button, not a link to the same URL.
export function SearchResultsAggregations({ aggregations }: Props) {
  const { t } = useTranslation('search_results')
  const { query, locale, asPath, push } = useRouter()
  const selectedQuery = query.toplevel ? query.toplevel : []
  const selected = Array.isArray(selectedQuery) ? selectedQuery : [selectedQuery]

  const [pendingToggles, setPendingToggles] = useState<Record<string, boolean>>({})
  useEffect(() => {
    setPendingToggles({})
  }, [asPath])

  const isChecked = (key: string) =>
    key in pendingToggles ? pendingToggles[key] : selected.includes(key)

  function makeHref(toplevel: string) {
    const [asPathRoot, asPathQuery = ''] = asPath.split('#')[0].split('?')
    const params = new URLSearchParams(asPathQuery)
    // Use pendingToggles because asPath and selected lag while facet navigation is in flight.
    const nextSelected = new Set(
      aggregations.toplevel.filter((agg) => isChecked(agg.key)).map((agg) => agg.key),
    )
    if (nextSelected.has(toplevel)) {
      nextSelected.delete(toplevel)
    } else {
      nextSelected.add(toplevel)
    }
    params.delete('toplevel')
    for (const key of nextSelected) {
      params.append('toplevel', key)
    }
    // Filter changes reset pagination to prevent showing 0 results.
    params.delete('page')
    return `/${locale}${asPathRoot}?${params}`
  }

  function makeClearHref() {
    const [asPathRoot, asPathQuery = ''] = asPath.split('#')[0].split('?')
    const params = new URLSearchParams(asPathQuery)
    params.delete('toplevel')
    // Clearing filters resets pagination.
    params.delete('page')
    return `/${locale}${asPathRoot}?${params}`
  }

  if (aggregations.toplevel && aggregations.toplevel.length > 0) {
    return (
      <div className={styles.aggregations}>
        {/* The visible heading stays pinned while the hidden legend names the group. */}
        <Heading as="h2" size="6" className={styles.heading}>
          {t('filter')}
        </Heading>
        <CheckboxGroup className={styles.group}>
          <CheckboxGroup.Label visuallyHidden>{t('filter')}</CheckboxGroup.Label>

          {aggregations.toplevel.map((aggregation) => {
            const isSelected = isChecked(aggregation.key)
            return (
              <FormControl key={aggregation.key} className={styles.option}>
                <Checkbox
                  value={aggregation.key}
                  checked={isSelected}
                  onChange={() => {
                    setPendingToggles((prev) => ({ ...prev, [aggregation.key]: !isSelected }))
                    push(makeHref(aggregation.key))
                  }}
                />
                <FormControl.Label
                  className={cx(styles.optionLabel, isSelected && styles.optionLabelSelected)}
                >
                  {aggregation.key} <span className={styles.count}>({aggregation.count})</span>
                </FormControl.Label>
              </FormControl>
            )
          })}
        </CheckboxGroup>

        {selected.length > 0 ? (
          <Button
            as={Link}
            href={makeClearHref()}
            variant="secondary"
            size="small"
            className={styles.clear}
          >
            {t('clear_all_filters')}
          </Button>
        ) : (
          <Button variant="secondary" size="small" className={styles.clear} disabled>
            {t('clear_all_filters')}
          </Button>
        )}
      </div>
    )
  }
  return null
}
