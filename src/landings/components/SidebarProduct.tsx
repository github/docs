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
  useRef,
  useState,
} from 'react'
import { NavList } from '@primer/react-brand'

import { ProductTreeNode, useMainContext } from '@/frame/components/context/MainContext'
import { useAutomatedPageContextOptional } from '@/automated-pipelines/components/AutomatedPageContext'
import { nonAutomatedRestPaths } from '@/rest/lib/config'
import { usePrefetchOnInteraction } from '@/frame/components/lib/prefetch'
import { SidebarExpandStateProvider, useSidebarExpandState } from './useSidebarExpandState'
import { flattenDescendants, MAX_NAVLIST_LEVEL } from './sidebar-navlist-depth'

import styles from './SidebarProduct.module.scss'

// Brand NavList.SubNav wrappers use overflow-y hidden, so match only auto or scroll
// to find the sidebar's own overflow container. Hidden rails return null.
function findScrollableAncestor(element: Element): HTMLElement | null {
  let node = element.parentElement
  while (node) {
    const { overflowY } = getComputedStyle(node)
    if ((overflowY === 'auto' || overflowY === 'scroll') && node.scrollHeight > node.clientHeight) {
      return node
    }
    node = node.parentElement
  }
  return null
}

type Router = ReturnType<typeof useRouter>

// Brand NavList.Item renders a plain anchor, not next/link, so intercept plain
// left-clicks to restore client-side navigation. Modified clicks fall through for
// separate tabs, the href keeps links crawlable for server-side rendering, and true
// tells the caller to move the optimistic selection. Mirrors Breadcrumbs.tsx.
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
  // Locale-prefixed hrefs need locale false so Next.js does not add the locale twice.
  router.push(href, undefined, { locale: false })
  return true
}

// The sidebar renders hundreds of nodes and remounts on every navigation. Subscribe
// once here so each item gets stable routePath, navigate, and prefetch values instead
// of calling useRouter itself.
type SidebarNavValue = {
  // The loaded route drives aria-current and the auto-expanded active ancestor chain.
  routePath: string
  // The in-flight click target drives a visual-only data-pending accent during slow loads.
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

// Leaf links keep aria-current on the loaded page and data-pending on a different
// in-flight destination, so screen readers do not hear a loading page as current.
function leafLinkProps(nav: SidebarNavValue, href: string) {
  return {
    'aria-current': (nav.routePath === href ? 'page' : false) as 'page' | false,
    'data-pending': nav.pendingHref === href && nav.routePath !== href ? '' : undefined,
  }
}

// Keep REST-only scroll-spy state out of SidebarNavValue so its per-navigation
// identity churn invalidates only RestNavListItem.
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

function prefetchHandlers(prefetch: (href: string) => void, href: string) {
  return {
    onMouseEnter: () => prefetch(href),
    onFocus: () => prefetch(href),
  }
}

// pendingHref survives slow getServerSideProps navigations because SidebarNav remounts
// only after asPath changes. aria-current stays on the loaded route.
export const SidebarProduct = () => {
  const router = useRouter()
  const {
    currentProduct,
    // The sidebar only needs short titles, so MainContext supplies the compressed tree.
    sidebarTree,
    sidebarExpanded,
  } = useMainContext()
  const isRestPage = currentProduct && currentProduct.id === 'rest'

  const { asPath, locale, query } = router
  const routePath = `/${locale}${asPath.split('?')[0].split('#')[0]}`

  // pendingHref moves only the visual accent while aria-current stays on the loaded route.
  const [pendingHref, setPendingHref] = useState<string | null>(null)

  const prefetchHref = usePrefetchOnInteraction()
  // Stable callbacks keep memoized items from re-rendering on unrelated changes.
  const navigate = useCallback(
    (event: MouseEvent<HTMLElement>, href: string) => {
      // Move the optimistic highlight only for client-side navigation, not modified clicks.
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
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Failed navigations clear pendingHref; cancellations keep the newer click highlighted.
    const clearPending = (err: { cancelled?: boolean }) => {
      if (!err?.cancelled) setPendingHref(null)
    }
    router.events.on('routeChangeError', clearPending)
    return () => router.events.off('routeChangeError', clearPending)
  }, [router.events])

  useEffect(() => {
    // Article filter query params are shallow same-page updates; the grid manages their scroll.
    if (/[?&]articles-(filter|category|page)=/.test(router.asPath)) return
    // Brand expands every active ancestor, so scroll to the aria-current page item.
    const activeArticle = rootRef.current?.querySelector('[aria-current="page"]')
    if (!activeArticle) return

    // Scroll by hand to preserve hash anchors; BreadcrumbsScroller does the same.
    const container = findScrollableAncestor(activeArticle)
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const activeRect = activeArticle.getBoundingClientRect()
    // Centering shows surrounding categories.
    const delta =
      activeRect.top - containerRect.top - (container.clientHeight - activeRect.height) / 2
    container.scrollBy({ top: delta, behavior: 'instant' })
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
    <div data-testid="sidebar" className={styles.sidebar} ref={rootRef}>
      <SidebarNavContext.Provider value={navValue}>
        <SidebarExpandStateProvider initial={sidebarExpanded}>
          {isRestPage ? restSection() : productSection()}
        </SidebarExpandStateProvider>
      </SidebarNavContext.Provider>
    </div>
  )
}

// Wrap the Brand NavList button toggle with controlled, cookie-persisted expand
// state so callers keep hooks out of conditional leaf and branch logic.
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

// Brand NavList statically inspects direct children for NavList.SubNav in its ESM source.
// Custom wrapper components hide their SubNavs, so Brand treats the list as flat and
// starts at level 2. Docs content nests 5 levels deep, and the lost level pushes
// deepest articles over Brand's cap. This hidden
// sentinel gives Brand a real top-level SubNav to detect, so it numbers from level 1.
//
// The detector accepts NavList.SubNav in any direct child's props.children, not only
// NavList.Item. Use a controlled native li because NavList.Item forwards style and
// aria-hidden to its inner button, which leaves a visible, focusable 40px outer li
// and trips sibling separators. Return this inline because Brand's detector never
// renders function components.
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
  // sidebarLink.href lacks a locale prefix; add it so href, aria-current, and navigation agree.
  const sidebarLinkHref = childPage.sidebarLink ? `/${locale}${childPage.sidebarLink.href}` : ''

  // Leaf nodes use anchors so Brand draws the active bar from aria-current page.
  if (!hasChildren) {
    return <LeafLink node={childPage} />
  }

  // At Brand's nesting cap, flatten descendants so level-5 SubNav content stays reachable.
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

  // Expandable categories use button toggles; sidebarLink or category-landing adds a landing page.
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
  // Read automated-page context unconditionally so hook order stays stable across routes.
  const automatedPage = useAutomatedPageContextOptional()
  const miniTocItems =
    query.productId === 'rest' ||
    // Conceptual REST pages skip the REST in-page mini table of contents.
    nonAutomatedRestPaths.some((item: string) => asPath.includes(item))
      ? []
      : (automatedPage?.miniTocItems ?? [])

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

        // Active reference articles render as toggles whose sub-nav is the in-page TOC.
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
