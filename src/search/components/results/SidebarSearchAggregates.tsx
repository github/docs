import { useEffect, useId, useRef, useState } from 'react'
import cx from 'clsx'
import { FilterIcon, XIcon } from '@primer/octicons-react'

import { useTranslation } from '@/languages/components/useTranslation'
import { useSearchContext } from '../context/SearchContext'
import { SearchResultsAggregations } from './Aggregations'

import styles from './SidebarSearchAggregates.module.scss'

// The facet filters follow the Docs 2026 responsive design. From Brand medium up this
// renders as the rail card; below it, Show filters exposes filters on narrow viewports.
// The facet markup renders once and restyles per breakpoint. Two copies would make
// getByText('Fooing (1)') ambiguous in src/fixtures/tests/playwright-rendering.spec.ts.
export function SidebarSearchAggregates() {
  const { search } = useSearchContext()
  const { t } = useTranslation('search_results')
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  // Skip the mount pass so we don't steal focus on first paint.
  const mounted = useRef(false)

  // Focus the panel on open and the toggle on close; above medium the hidden toggle never fires.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    if (open) {
      // preventScroll keeps the tall panel from pushing the disclosure and Filter heading away.
      panelRef.current?.focus({ preventScroll: true })
    } else {
      toggleRef.current?.focus({ preventScroll: true })
    }
  }, [open])

  const { results } = search
  // Zero-hit searches return { toplevel: [] }; require facets to avoid an empty rail.
  if (!results?.aggregations?.toplevel?.length) {
    return null
  }

  return (
    <div className={styles.rail}>
      <button
        type="button"
        ref={toggleRef}
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={panelId}
        data-testid="search-filter-toggle"
        onClick={() => setOpen((prev) => !prev)}
      >
        {/* Decorative icon; the visible label names the button. */}
        <span className={styles.toggleIcon} aria-hidden="true">
          {open ? <XIcon size={16} /> : <FilterIcon size={16} />}
        </span>
        <span className={styles.toggleLabel}>{open ? t('hide_filters') : t('show_filters')}</span>
      </button>

      {/* Closed below medium, this uses display:none so facets leave the accessibility tree. */}
      <div
        id={panelId}
        ref={panelRef}
        tabIndex={-1}
        className={cx(styles.panel, open && styles.panelOpen)}
      >
        <SearchResultsAggregations aggregations={results.aggregations} />
      </div>
    </div>
  )
}
