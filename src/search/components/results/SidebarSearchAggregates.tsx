import { useEffect, useId, useRef, useState } from 'react'
import cx from 'classnames'
import { FilterIcon, XIcon } from '@primer/octicons-react'

import { useTranslation } from '@/languages/components/useTranslation'
import { useSearchContext } from '../context/SearchContext'
import { SearchResultsAggregations } from './Aggregations'

import styles from './SidebarSearchAggregates.module.scss'

// The facet filters, responsive per the Docs 2026 design. From brand's `medium`
// breakpoint up this is the rail card; below it the card collapses behind a
// "Show filters" disclosure, because the filters are otherwise unreachable on a
// narrow viewport.
//
// The facet markup is rendered exactly once and restyled per breakpoint — never
// a rail copy plus a drawer copy. Two copies would duplicate every checkbox id
// and make the strict-mode `getByText('Fooing (1)')` click in
// src/fixtures/tests/playwright-rendering.spec.ts ambiguous.
export function SidebarSearchAggregates() {
  const { search } = useSearchContext()
  const { t } = useTranslation('search_results')
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  // Skip the mount pass so we don't steal focus on first paint.
  const mounted = useRef(false)

  // Move focus into the panel when it opens and back to the toggle when it
  // closes. Above `medium` the toggle is display:none and never fires, so this
  // only ever runs for the disclosure.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    if (open) {
      // preventScroll matters here: the panel is tall, and letting the browser
      // scroll it into view pushes the disclosure bar and the "Filter" heading
      // off the top of a phone viewport, leaving the reader mid-list with no
      // visible way back out.
      panelRef.current?.focus({ preventScroll: true })
    } else {
      toggleRef.current?.focus({ preventScroll: true })
    }
  }, [open])

  const { results } = search
  // `aggregations` is truthy but empty (`{ toplevel: [] }`) for a zero-hit search, and
  // SearchResultsAggregations renders nothing in that case — so checking only for the
  // object left an empty bordered rail on desktop and a disclosure that opened onto an
  // empty box on mobile. Check for facets to actually show.
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
        {/* Decorative: the button is named by the visible label beside it. */}
        <span className={styles.toggleIcon} aria-hidden="true">
          {open ? <XIcon size={16} /> : <FilterIcon size={16} />}
        </span>
        <span className={styles.toggleLabel}>{open ? t('hide_filters') : t('show_filters')}</span>
      </button>

      {/* Closed below `medium`, this is display:none rather than visually
          hidden, so the facets leave the accessibility tree with the layout. */}
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
