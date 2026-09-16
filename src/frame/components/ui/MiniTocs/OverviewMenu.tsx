import { useEffect, useId, useRef, useState } from 'react'
import { NavList } from '@primer/react-brand'
import cx from 'classnames'
import { ChevronDownIcon } from '@primer/octicons-react'

import type { MiniTocItem } from '@/frame/components/context/ArticleContext'
import { useTranslation } from '@/languages/components/useTranslation'

import { useActiveSection } from './useActiveSection'
import { RenderTocItem, getActiveTitle } from './MiniTocShared'
import styles from './OverviewMenu.module.scss'

type Props = {
  miniTocItems: MiniTocItem[]
}

// The collapsed "In this article" control that lives in the secondary bar below
// xxl (<1400px): a button labeled with the current section that opens a dropdown
// of the TOC links. The full drawer form is `MiniTocs`, shown on the right rail
// at xxl+.
export function OverviewMenu({ miniTocItems }: Props) {
  const { t } = useTranslation('pages')
  const activeHref = useActiveSection()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  // Ties the trigger to its panel for assistive tech. Generated rather than a
  // constant so two instances on one page could never collide on the id.
  const panelId = useId()

  // Before the reader scrolls into a section (activeHref ''), label the control
  // "In this article" rather than the first heading; once a section is in view,
  // show that section's title.
  const atTop = activeHref === ''
  const label = atTop ? t('miniToc') : getActiveTitle(miniTocItems, activeHref)

  // Close on outside click or Escape while open. Escape also returns focus to the
  // disclosure button so keyboard users aren't dropped to the document body.
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  // Move focus into the panel when it opens so keyboard and screen-reader users
  // land on the list rather than having to find it behind the trigger. Escape
  // (above) hands focus back to the button.
  useEffect(() => {
    if (open) panelRef.current?.focus()
  }, [open])

  return (
    <div ref={rootRef} className={styles.root}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        // Set only while open: the panel is unmounted when closed, and
        // aria-controls must not reference an id that isn't in the document.
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((v) => !v)}
      >
        {/* Keep the "In this article" context in the accessible name without
            overriding the visible label (WCAG 2.5.3 Label in Name): the visible
            section title stays part of the name rather than being replaced by an
            aria-label. When the label already reads "In this article" (top of
            article), the hidden prefix would duplicate it, so skip it there. */}
        {!atTop && <span className="visually-hidden">{t('miniToc')}</span>}
        <span className={styles.label}>{label}</span>
        <ChevronDownIcon className={cx(styles.chevron, open && styles.chevronOpen)} />
      </button>

      {open && (
        <div id={panelId} ref={panelRef} tabIndex={-1} className={styles.popover}>
          <NavList
            data-testid="overview-menu"
            aria-label={t('miniToc')}
            onClick={() => setOpen(false)}
          >
            {miniTocItems.map((item, i) => (
              <RenderTocItem
                key={item.contents.href + i}
                item={item}
                activeHref={activeHref}
                depth={0}
              />
            ))}
          </NavList>
        </div>
      )}
    </div>
  )
}
