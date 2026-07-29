import { useRouter } from 'next/router'
import {
  createContext,
  memo,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { NavList } from '@primer/react-brand'

import { ProductTreeNode, useMainContext } from '@/frame/components/context/MainContext'
import { useAutomatedPageContext } from '@/automated-pipelines/components/AutomatedPageContext'
import { nonAutomatedRestPaths } from '@/rest/lib/config'
import { usePrefetchOnInteraction } from '@/frame/components/lib/prefetch'
import { SidebarExpandStateProvider, useSidebarExpandState } from './useSidebarExpandState'
import { flattenDescendants, MAX_NAVLIST_LEVEL } from './sidebar-navlist-depth'

import styles from './SidebarProduct.module.scss'

type Router = ReturnType<typeof useRouter>

// Brand NavList.Item renders a plain <a> (its `as` prop only accepts 'a' | 'button',
// not next/link), so intercept clicks to restore next/link-style client-side
// navigation. Modifier/middle clicks fall through to the browser so open-in-new-tab
// still works, and the <a href> keeps links crawlable for SSR. Mirrors Breadcrumbs.tsx.
// Returns true when it performed a client-side navigation (so the caller can move the
// optimistic selection), false when the click was left to the browser.
function handleNavClick(router: Router, event: MouseEvent<HTMLElement>, href: string): boolean {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    !href.startsWith('/')
  ) {
    return false
  }
  event.preventDefault()
  // hrefs already include the locale prefix (e.g. /en/...), so disable Next.js
  // locale handling to avoid double-prefixing.
  router.push(href, undefined, { locale: false })
  return true
}

// The sidebar renders the full product tree (hundreds of nodes) and fully remounts
// on every navigation (key={asPath} in SidebarNav). To keep per-item cost down we
// subscribe to the router ONCE here and hand items a stable routePath plus stable
// navigate/prefetch callbacks, instead of every item calling useRouter itself.
type SidebarNavValue = {
  // The real loaded route. Drives aria-current (the semantic "current page") and the
  // auto-expanded active ancestor chain — both must reflect the page actually loaded.
  routePath: string
  // The in-flight click target, or null. Drives a VISUAL-ONLY optimistic accent bar
  // (via data-pending) so the click feels acknowledged before the slow
  // getServerSideProps page loads — without lying to assistive tech about the current
  // page. Once navigation completes, the keyed remount clears it and routePath catches up.
  pendingHref: string | null
  navigate: (event: MouseEvent<HTMLElement>, href: string) => void
  prefetch: (href: string) => void
}
const SidebarNavContext = createContext<SidebarNavValue | null>(null)

function useSidebarNav(): SidebarNavValue {
  const value = useContext(SidebarNavContext)
  if (!value) {
    throw new Error('useSidebarNav must be used within SidebarProduct')
  }
  return value
}

// Props for a leaf link's <a>: aria-current tracks the loaded page (semantics), while
// data-pending marks the in-flight click so CSS can move the accent bar optimistically
// without changing what screen readers announce as current. data-pending is only set
// while a *different* page is loading, so it never double-marks the already-current item.
function leafLinkProps(nav: SidebarNavValue, href: string) {
  return {
    'aria-current': (nav.routePath === href ? 'page' : false) as 'page' | false,
    'data-pending': nav.pendingHref === href && nav.routePath !== href ? '' : undefined,
  }
}

// Separate context for the REST-only scroll-spy state (full asPath with query+hash,
// and query). Kept out of SidebarNavValue so its per-navigation identity churn
// doesn't invalidate the memoized common items — only RestNavListItem consumes it.
type RestNavValue = {
  asPath: string
  query: ReturnType<typeof useRouter>['query']
}
const RestNavContext = createContext<RestNavValue | null>(null)

function useRestNav(): RestNavValue {
  const value = useContext(RestNavContext)
  if (!value) {
    throw new Error('useRestNav must be used within SidebarProduct REST section')
  }
  return value
}

// Hover/focus handlers for a leaf link: warm the destination so the click is fast.
function prefetchHandlers(prefetch: (href: string) => void, href: string) {
  return {
    onMouseEnter: () => prefetch(href),
    onFocus: () => prefetch(href),
  }
}

export const SidebarProduct = () => {
  const router = useRouter()
  const {
    currentProduct,
    // For the sidebar we only need the short titles so we can use the
    // more "compressed" tree that is as light as possible.
    sidebarTree,
    sidebarExpanded,
  } = useMainContext()
  const isRestPage = currentProduct && currentProduct.id === 'rest'

  const { asPath, locale, query } = router
  const routePath = `/${locale}${asPath.split('?')[0].split('#')[0]}`

  // Optimistic selection: the href of an in-flight click. Used to move the accent bar
  // visually (data-pending) the instant a link is clicked, even while the destination
  // page is still loading. This SidebarProduct instance persists during the pending
  // fetch (SidebarNav keys it on asPath, which only changes once navigation completes),
  // so the state survives the wait and is discarded by the keyed remount when the new
  // route lands. aria-current is NOT derived from this — it stays on the loaded route.
  const [pendingHref, setPendingHref] = useState<string | null>(null)

  const prefetchHref = usePrefetchOnInteraction()
  // Stable callbacks so memoized items don't re-render on unrelated changes.
  const navigate = useCallback(
    (event: MouseEvent<HTMLElement>, href: string) => {
      // Only move the optimistic highlight on a real client-side nav, not on a
      // modifier/middle click that opens a new tab (the current page stays put).
      if (handleNavClick(router, event, href)) setPendingHref(href)
    },
    [router],
  )
  const prefetch = useCallback((href: string) => prefetchHref(router, href), [router, prefetchHref])
  const navValue = useMemo<SidebarNavValue>(
    () => ({ routePath, pendingHref, navigate, prefetch }),
    [routePath, pendingHref, navigate, prefetch],
  )
  const restNavValue = useMemo<RestNavValue>(() => ({ asPath, query }), [asPath, query])

  useEffect(() => {
    // Clear the optimistic highlight if a navigation genuinely fails, so it doesn't
    // stick on a page that never loaded. Skip cancellations (err.cancelled) — those
    // fire when a second click supersedes the first, and pendingHref already points at
    // that newer target, which we want to keep highlighted.
    const clearPending = (err: { cancelled?: boolean }) => {
      if (!err?.cancelled) setPendingHref(null)
    }
    router.events.on('routeChangeError', clearPending)
    return () => router.events.off('routeChangeError', clearPending)
  }, [router.events])

  useEffect(() => {
    // Brand NavList auto-expands the whole ancestor chain of the active item, so
    // scroll to the item marked aria-current="page" (the active article) rather
    // than the top-most expanded section.
    const activeArticle = document.querySelector('[aria-current="page"]')
    // Setting to the top doesn't give enough context of surrounding categories
    activeArticle?.scrollIntoView({ block: 'center' })
    // scrollIntoView affects some articles that are very low in the sidebar
    // The content scrolls down a bit. This sets the article content back up
    // top unless the route contains a link heading.
    if (!router.asPath.includes('#')) window?.scrollTo(0, 0)
  }, [])

  if (!sidebarTree) {
    return null
  }

  const productSection = () => (
    <div data-testid="product-sidebar">
      <NavList aria-label="Product sidebar">
        {navListLevelSentinel()}
        {sidebarTree &&
          sidebarTree.childPages.map((childPage) => (
            <NavListItem key={childPage.href} childPage={childPage} />
          ))}
      </NavList>
    </div>
  )

  const restSection = () => {
    const conceptualPages = sidebarTree.childPages.filter((page) =>
      nonAutomatedRestPaths.some((item: string) => page.href.includes(item)),
    )
    const restPages = sidebarTree.childPages.filter((page) =>
      nonAutomatedRestPaths.every((item: string) => !page.href.includes(item)),
    )
    return (
      <RestNavContext.Provider value={restNavValue}>
        <div>
          <NavList aria-label="REST sidebar overview articles">
            {navListLevelSentinel()}
            {conceptualPages.map((childPage) => (
              <NavListItem key={childPage.href} childPage={childPage} />
            ))}
          </NavList>

          <hr data-testid="rest-sidebar-reference" className="m-2" />

          <NavList aria-label="REST sidebar reference pages">
            {navListLevelSentinel()}
            {restPages.map((category) => (
              <RestNavListItem key={category.href} category={category} />
            ))}
          </NavList>
        </div>
      </RestNavContext.Provider>
    )
  }

  return (
    <div data-testid="sidebar" className={styles.sidebar}>
      <SidebarNavContext.Provider value={navValue}>
        <SidebarExpandStateProvider initial={sidebarExpanded}>
          {isRestPage ? restSection() : productSection()}
        </SidebarExpandStateProvider>
      </SidebarNavContext.Provider>
    </div>
  )
}

// Wraps a brand NavList expandable item (renders as a <button> toggle) with
// controlled, cookie-persisted expand state. Encapsulating the hook here
// keeps it out of the conditional leaf/branch logic in the callers.
function ExpandableItem({
  title,
  nodeKey,
  onActiveChain,
  subNavLabel,
  children,
}: {
  title: string
  nodeKey: string
  onActiveChain: boolean
  subNavLabel: string
  children: ReactNode
}) {
  const [expanded, onExpandedChange] = useSidebarExpandState(nodeKey, onActiveChain)
  return (
    <NavList.Item expanded={expanded} onExpandedChange={onExpandedChange}>
      {title}
      <NavList.SubNav aria-label={subNavLabel}>{children}</NavList.SubNav>
    </NavList.Item>
  )
}

// Brand NavList picks its starting nesting level by *statically* introspecting its
// direct children for a NavList.SubNav (see the `m = d ? 1 : 2` check in the brand
// esm source). Our items are custom wrapper components, so brand can't see their
// SubNavs, treats the list as flat, and starts numbering at level 2 — wasting one of
// its 5 available levels. Docs content nests 5 levels deep, so that lost level pushes
// the deepest articles over brand's cap and the depth guard flattens them (#6757).
// Brand exposes no `startLevel` prop, so this hidden sentinel gives brand a real
// top-level SubNav to detect, making it number from level 1 and freeing the level the
// deep content needs.
//
// The detector accepts a NavList.SubNav nested in ANY direct child's props.children,
// not only a NavList.Item — so we use a plain <li> we fully control rather than a
// NavList.Item. Brand's NavList.Item forwards style/aria-hidden to its inner <button>,
// NOT the outer <li>, so a NavList.Item sentinel would leave a visible, focusable 40px
// container (and trip the sibling-separator styles) at the top of every sidebar. A
// hidden native <li> keeps the whole sentinel — container included — out of layout and
// the a11y tree. It MUST be spread inline (returned by this factory), not rendered as a
// <Component/>: brand's detector never renders function components, so a wrapper would
// stay invisible to it.
function navListLevelSentinel() {
  return (
    <li aria-hidden="true" style={{ display: 'none' }}>
      <NavList.SubNav aria-label="">
        <NavList.Item as="a" href="#">
          {''}
        </NavList.Item>
      </NavList.SubNav>
    </li>
  )
}

const LeafLink = memo(function LeafLink({ node }: { node: ProductTreeNode }) {
  const nav = useSidebarNav()
  return (
    <NavList.Item
      as="a"
      href={node.href}
      {...leafLinkProps(nav, node.href)}
      onClick={(event: MouseEvent<HTMLElement>) => nav.navigate(event, node.href)}
      {...prefetchHandlers(nav.prefetch, node.href)}
    >
      {node.title}
    </NavList.Item>
  )
})

const NavListItem = memo(function NavListItem({
  childPage,
  level = 1,
}: {
  childPage: ProductTreeNode
  level?: number
}) {
  const nav = useSidebarNav()
  const { routePath, navigate, prefetch } = nav
  const locale = routePath.split('/')[1]
  const hasChildren = childPage.childPages.length > 0
  const specialCategory = childPage.layout === 'category-landing'
  const canNest = level < MAX_NAVLIST_LEVEL
  // sidebarLink.href lacks the locale prefix; normalize once so the rendered
  // href, aria-current check, and click navigation all agree.
  const sidebarLinkHref = childPage.sidebarLink ? `/${locale}${childPage.sidebarLink.href}` : ''

  // Leaf: a real anchor with client-side navigation. Brand draws the active
  // accent bar off aria-current="page".
  if (!hasChildren) {
    return <LeafLink node={childPage} />
  }

  // At the nesting cap: render this node and its whole subtree as flat leaf links
  // so nothing becomes unreachable (brand would otherwise drop a level-5 SubNav).
  if (!canNest) {
    return (
      <>
        <LeafLink node={childPage} />
        {flattenDescendants(childPage).map((descendant) => (
          <LeafLink key={descendant.href} node={descendant} />
        ))}
      </>
    )
  }

  // Expandable: brand renders this as a <button> accordion toggle (href/as are
  // not allowed here). The category's own landing page is only surfaced when the
  // content explicitly opts in via `sidebarLink` or a category-landing layout.
  return (
    <ExpandableItem
      title={childPage.title}
      nodeKey={childPage.href}
      onActiveChain={routePath.includes(childPage.href)}
      subNavLabel={`${childPage.title} submenu`}
    >
      {childPage.sidebarLink && (
        <NavList.Item
          as="a"
          href={sidebarLinkHref}
          {...leafLinkProps(nav, sidebarLinkHref)}
          onClick={(event: MouseEvent<HTMLElement>) => navigate(event, sidebarLinkHref)}
          {...prefetchHandlers(prefetch, sidebarLinkHref)}
        >
          {childPage.sidebarLink.text}
        </NavList.Item>
      )}
      {specialCategory && !childPage.sidebarLink && (
        <NavList.Item
          as="a"
          href={childPage.href}
          {...leafLinkProps(nav, childPage.href)}
          onClick={(event: MouseEvent<HTMLElement>) => navigate(event, childPage.href)}
          {...prefetchHandlers(prefetch, childPage.href)}
        >
          {childPage.title}
        </NavList.Item>
      )}
      {childPage.childPages.map((subPage) => (
        <NavListItem key={subPage.href} childPage={subPage} level={level + 1} />
      ))}
    </ExpandableItem>
  )
})

function RestNavListItem({ category }: { category: ProductTreeNode }) {
  const nav = useSidebarNav()
  const { routePath, navigate, prefetch } = nav
  const { asPath, query } = useRestNav()
  const [visibleAnchor, setVisibleAnchor] = useState('')
  const miniTocItems =
    query.productId === 'rest' ||
    // These pages need the Article Page mini tocs instead of the Rest Pages
    nonAutomatedRestPaths.some((item: string) => asPath.includes(item))
      ? []
      : useAutomatedPageContext().miniTocItems

  useEffect(() => {
    if (nonAutomatedRestPaths.every((item: string) => !asPath.includes(item))) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.target.id) {
              const anchor = `#${entry.target.id.split('--')[0]}`
              if (entry.isIntersecting === true) setVisibleAnchor(anchor)
            } else if (asPath.includes('#')) {
              setVisibleAnchor(`#${asPath.split('#')[1]}`)
            } else {
              setVisibleAnchor('')
            }
          }
        },
        { rootMargin: '0px 0px -85% 0px' },
      )
      const headingsList = Array.from(document.querySelectorAll('h2, h3'))

      for (const heading of headingsList) {
        observer.observe(heading)
      }

      return () => {
        observer.disconnect()
      }
    }
  }, [miniTocItems])

  // A reference category with no children is a plain link.
  if (category.childPages.length === 0) {
    return (
      <NavList.Item
        as="a"
        href={category.href}
        {...leafLinkProps(nav, category.href)}
        onClick={(event: MouseEvent<HTMLElement>) => navigate(event, category.href)}
        {...prefetchHandlers(prefetch, category.href)}
      >
        {category.title}
      </NavList.Item>
    )
  }

  return (
    <ExpandableItem
      title={category.title}
      nodeKey={category.href}
      onActiveChain={routePath.includes(category.href)}
      subNavLabel={`${category.title} submenu`}
    >
      {category.childPages.map((childPage) => {
        const showMiniToc = routePath === childPage.href && miniTocItems.length > 0

        // Active reference article: render as a toggle whose sub-nav is the
        // in-page table of contents (you're already on the page).
        if (showMiniToc) {
          return (
            <NavList.Item key={childPage.href} defaultExpanded>
              {childPage.title}
              <NavList.SubNav aria-label={`${childPage.title} table of contents`}>
                {miniTocItems.map((item) => {
                  const isAnchorCurrent = visibleAnchor === item.contents.href
                  return (
                    <NavList.Item
                      key={item.contents.href}
                      as="a"
                      href={item.contents.href}
                      id={item.contents.href}
                      aria-current={isAnchorCurrent ? 'location' : false}
                      onClick={() => setVisibleAnchor(item.contents.href)}
                    >
                      {item.contents.title}
                    </NavList.Item>
                  )
                })}
              </NavList.SubNav>
            </NavList.Item>
          )
        }

        return (
          <NavList.Item
            key={childPage.href}
            as="a"
            href={childPage.href}
            {...leafLinkProps(nav, childPage.href)}
            onClick={(event: MouseEvent<HTMLElement>) => navigate(event, childPage.href)}
            {...prefetchHandlers(prefetch, childPage.href)}
          >
            {childPage.title}
          </NavList.Item>
        )
      })}
    </ExpandableItem>
  )
}
