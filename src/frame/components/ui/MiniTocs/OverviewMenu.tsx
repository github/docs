import { useEffect, useId, useRef, useState } from 'react'
import { NavList } from '@primer/react-brand'
import cx from 'clsx'
import { ChevronDownIcon } from '@primer/octicons-react'

import type { MiniTocItem } from '@/frame/components/context/ArticleContext'
import { useTranslation } from '@/languages/components/useTranslation'

import { useActiveSection } from './useActiveSection'
import { RenderTocItem, getActiveTitle } from './MiniTocShared'
import styles from './OverviewMenu.module.scss'

type Props = {
  miniTocItems: MiniTocItem[]
}

// OverviewSubBar renders this control wherever the right-rail drawer is absent:
// below xxl (1400px) when the rail is expanded, below ~1074px when collapsed,
// and at every width on pages without a drawer.
export function OverviewMenu({ miniTocItems }: Props) {
  const { t } = useTranslation('pages')
  const activeHref = useActiveSection()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  // Generate the panel id so duplicate controls on one page cannot collide.
  const panelId = useId()

  // At the top, label the control In this article; once a section is active, show that title.
  const atTop = activeHref === ''
  const label = atTop ? t('miniToc') : getActiveTitle(miniTocItems, activeHref)

  // Outside clicks close the panel; Escape also returns focus to the button.
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

  // Move focus into the opened panel so keyboard and screen-reader users land on the list.
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
        // Set aria-controls only while the panel exists so it never references a missing id.
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((v) => !v)}
      >
        {/* Keep visible titles in the name; add hidden In this article except at top. */}
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
