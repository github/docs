import {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
  type AnchorHTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from 'react'
import cx from 'clsx'
import { TriangleDownIcon } from '@primer/octicons-react'

import { splitOverflow } from '@/frame/components/ui/UnderlineNav/overflow'
import styles from '@/frame/components/ui/UnderlineNav/UnderlineNav.module.scss'

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export type UnderlineNavSelectEvent =
  | MouseEvent<HTMLAnchorElement>
  | KeyboardEvent<HTMLAnchorElement>

export type UnderlineNavItemProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'aria-current' | 'children' | 'href' | 'onSelect'
> & {
  href: string
  'aria-current'?: 'page'
  onSelect?: (event: UnderlineNavSelectEvent) => void
  children: ReactNode
}

export type UnderlineNavProps = {
  'aria-label': string
  variant?: 'default' | 'flush'
  className?: string
  children: ReactNode
}

type Measurements = {
  navWidth: number
  moreWidth: number
  itemWidths: number[]
}

// The label sits in a span whose hidden ::before reserves the semibold width,
// so tabs don't shift when the selection changes.
function Label({ children }: { children: ReactNode }) {
  if (typeof children !== 'string') return <>{children}</>
  return (
    <span className={styles.text} data-text={children}>
      {children}
    </span>
  )
}

function ItemLink({
  href,
  onSelect,
  children,
  className,
  afterSelect,
  ...rest
}: UnderlineNavItemProps & { afterSelect?: (event: UnderlineNavSelectEvent) => void }) {
  return (
    <a
      {...rest}
      href={href}
      className={className}
      data-underline-nav-item=""
      onClick={(event) => {
        onSelect?.(event)
        afterSelect?.(event)
      }}
      onKeyDown={(event) => {
        // Enter follows the link and fires click. Space selects too, as in @primer/react.
        if (event.key !== ' ') return
        event.preventDefault()
        onSelect?.(event)
        afterSelect?.(event)
      }}
    >
      <Label>{children}</Label>
    </a>
  )
}

// Parent reads Item props and renders the links itself, so it can move items
// between the visible list and the More menu.
function UnderlineNavItem(props: UnderlineNavItemProps) {
  return <ItemLink {...props} className={cx(styles.item, props.className)} />
}

function isSelected(item: ReactElement<UnderlineNavItemProps>) {
  const current = item.props['aria-current'] as string | undefined
  return Boolean(current) && current !== 'false'
}

function UnderlineNavRoot({
  'aria-label': ariaLabel,
  variant = 'default',
  className,
  children,
}: UnderlineNavProps) {
  const items = Children.toArray(children).filter(
    (child): child is ReactElement<UnderlineNavItemProps> => isValidElement(child),
  )
  const navRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)
  const measureRef = useRef<HTMLUListElement>(null)
  const moreItemRef = useRef<HTMLLIElement>(null)
  const moreButtonRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()
  const [measurements, setMeasurements] = useState<Measurements | null>(null)
  const [open, setOpen] = useState(false)
  const [menuAlignStart, setMenuAlignStart] = useState(false)

  const signature = items.map((item) => `${item.key}:${String(item.props.children)}`).join('|')

  const measure = useCallback(() => {
    const nav = navRef.current
    const list = measureRef.current
    if (!nav || !list) return
    const style = getComputedStyle(nav)
    const navWidth =
      nav.clientWidth - parseFloat(style.paddingLeft || '0') - parseFloat(style.paddingRight || '0')
    if (navWidth <= 0) return
    const cells = Array.from(list.children) as HTMLElement[]
    const moreCell = cells.pop()
    const itemWidths = cells.map((cell) => cell.getBoundingClientRect().width)
    const moreWidth = moreCell?.getBoundingClientRect().width ?? 0
    setMeasurements((previous) =>
      previous &&
      previous.navWidth === navWidth &&
      previous.moreWidth === moreWidth &&
      previous.itemWidths.join() === itemWidths.join()
        ? previous
        : { navWidth, moreWidth, itemWidths },
    )
  }, [])

  useIsomorphicLayoutEffect(() => {
    measure()
  }, [measure, signature])

  useEffect(() => {
    const nav = navRef.current
    const list = measureRef.current
    if (!nav || !list || typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(() => measure())
    observer.observe(nav)
    // Web fonts can load after the first measurement and change label widths.
    observer.observe(list)
    return () => observer.disconnect()
  }, [measure])

  const selectedIndex = items.findIndex(isSelected)
  const measured = measurements !== null && measurements.itemWidths.length === items.length
  const split = measured
    ? splitOverflow(
        measurements.itemWidths,
        measurements.navWidth,
        measurements.moreWidth,
        selectedIndex,
      )
    : { visible: items.map((_, index) => index), overflow: [] }
  const hasMenu = split.overflow.length > 0
  const onlyMenu = hasMenu && split.visible.length === 0

  useEffect(() => {
    if (!hasMenu) setOpen(false)
  }, [hasMenu])

  // An end-aligned menu wider than the list would hang off the start edge of a narrow screen.
  const visibleSignature = split.visible.join()
  useIsomorphicLayoutEffect(() => {
    const list = listRef.current
    const menu = menuRef.current
    if (!open || !list || !menu) return
    setMenuAlignStart(list.offsetWidth < menu.offsetWidth)
  }, [open, visibleSignature, measurements])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== 'Escape' || event.defaultPrevented) return
      event.preventDefault()
      setOpen(false)
      moreButtonRef.current?.focus()
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!moreItemRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  // Modifier clicks aren't prevented by consumers, so the browser opens a new tab
  // and the menu stays open. Plain selections close it and return focus, as in @primer/react.
  const afterMenuSelect = (event: UnderlineNavSelectEvent) => {
    if (!event.defaultPrevented) return
    setOpen(false)
    moreButtonRef.current?.focus()
  }

  return (
    <nav
      ref={navRef}
      aria-label={ariaLabel}
      className={cx(styles.nav, className)}
      data-variant={variant}
      data-overflow-measured={measured ? 'true' : 'false'}
    >
      <ul ref={listRef} role="list" className={styles.list}>
        {split.visible.map((index) => {
          const item = items[index]
          return (
            <li key={item.key}>
              <ItemLink {...item.props} className={cx(styles.item, item.props.className)} />
            </li>
          )
        })}
        {hasMenu && (
          <li ref={moreItemRef} className={styles.moreItem}>
            {!onlyMenu && <span className={styles.divider} aria-hidden="true" />}
            <button
              ref={moreButtonRef}
              type="button"
              className={styles.moreButton}
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((value) => !value)}
            >
              {onlyMenu ? (
                <>
                  <span className={styles.visuallyHidden}>{`${ariaLabel}\u00a0`}</span>
                  Menu
                </>
              ) : (
                <>
                  More
                  <span className={styles.visuallyHidden}>{`\u00a0${ariaLabel} items`}</span>
                </>
              )}
              <TriangleDownIcon size={16} />
            </button>
            <ul
              ref={menuRef}
              id={menuId}
              role="list"
              className={styles.menu}
              data-align={menuAlignStart ? 'start' : 'end'}
              hidden={!open}
            >
              {split.overflow.map((index) => {
                const item = items[index]
                return (
                  <li key={item.key}>
                    <ItemLink
                      {...item.props}
                      className={cx(styles.menuLink, item.props.className)}
                      afterSelect={afterMenuSelect}
                    />
                  </li>
                )
              })}
            </ul>
          </li>
        )}
      </ul>
      {/* Hidden copy of every item and the More button, measured to decide what fits. */}
      <div className={styles.measureClip} aria-hidden="true">
        <ul ref={measureRef} className={cx(styles.list, styles.measureList)}>
          {items.map((item) => (
            <li key={item.key}>
              <span className={styles.item}>
                <Label>{item.props.children}</Label>
              </span>
            </li>
          ))}
          <li className={styles.moreItem}>
            <span className={styles.divider} />
            <span className={styles.moreButton}>
              More
              <TriangleDownIcon size={16} />
            </span>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export const UnderlineNav = Object.assign(UnderlineNavRoot, { Item: UnderlineNavItem })
