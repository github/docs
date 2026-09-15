import { useEffect, useState } from 'react'
import { Button, Checkbox, CheckboxGroup, FormControl, Heading } from '@primer/react-brand'
import { useRouter } from 'next/router'
import Link from 'next/link'
import cx from 'classnames'

import { useTranslation } from '@/languages/components/useTranslation'

import type { SearchResultAggregations } from '@/search/types'
import styles from './Aggregations.module.scss'

type Props = {
  aggregations: SearchResultAggregations
}

export function SearchResultsAggregations({ aggregations }: Props) {
  const { t } = useTranslation('search_results')
  const { query, locale, asPath, push } = useRouter()
  const selectedQuery = query.toplevel ? query.toplevel : []
  const selected = Array.isArray(selectedQuery) ? selectedQuery : [selectedQuery]

  // Checking a facet navigates, and the checkbox's state is derived from the URL — so
  // without this the input snaps straight back under React and nothing moves until the
  // server responds. That round trip is short, but a control that ignores the first
  // click reads as a frozen page. Hold the intended state locally so the box responds
  // immediately, then drop it once the URL catches up and becomes the source of truth
  // again. Mirrors the optimistic `data-pending` highlight in SidebarProduct.
  const [pendingToggles, setPendingToggles] = useState<Record<string, boolean>>({})
  useEffect(() => {
    setPendingToggles({})
  }, [asPath])

  const isChecked = (key: string) =>
    key in pendingToggles ? pendingToggles[key] : selected.includes(key)

  function makeHref(toplevel: string) {
    const [asPathRoot, asPathQuery = ''] = asPath.split('#')[0].split('?')
    const params = new URLSearchParams(asPathQuery)
    // Build from the optimistic state, not from `selected`. Both `asPath` and `selected`
    // still describe the pre-navigation URL while a facet click is in flight, so a second
    // click before the first lands would otherwise drop the first selection — the UI
    // showing two boxes ticked and the URL carrying only one.
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
    // Reset pagination when filters change to prevent showing 0 results
    params.delete('page')
    return `/${locale}${asPathRoot}?${params}`
  }

  function makeClearHref() {
    const [asPathRoot, asPathQuery = ''] = asPath.split('#')[0].split('?')
    const params = new URLSearchParams(asPathQuery)
    params.delete('toplevel')
    // Reset pagination when clearing filters
    params.delete('page')
    return `/${locale}${asPathRoot}?${params}`
  }

  if (aggregations.toplevel && aggregations.toplevel.length > 0) {
    return (
      <div className={styles.aggregations}>
        {/* The visible heading sits outside the fieldset so it can stay pinned
            while the option list scrolls beneath it — brand renders the group's
            own label as a <legend>, which is a sibling of the options and would
            scroll away with them. The legend is kept, visually hidden, so the
            checkbox group still has an accessible name. */}
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

        {/* Always rendered, so the control is a stable part of the panel rather than
            appearing only once you have already filtered — the design shows it in a
            persistent footer row. It pairs with an "Apply" button there, but filters
            apply immediately on change today, so an Apply control would imply nothing
            had happened yet. Staged filtering is Phase 2 —
            github/docs-engineering#6709.

            With nothing selected there is nothing to clear, so it renders as a disabled
            button rather than a link to the URL it is already on. */}
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
