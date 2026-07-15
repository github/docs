import { useRouter } from 'next/router'
import { type MouseEvent, type ReactNode, useEffect, useState } from 'react'
import { NavList } from '@primer/react-brand'

import { ProductTreeNode, useMainContext } from '@/frame/components/context/MainContext'
import { useAutomatedPageContext } from '@/automated-pipelines/components/AutomatedPageContext'
import { nonAutomatedRestPaths } from '@/rest/lib/config'
import { SidebarExpandStateProvider, useSidebarExpandState } from './useSidebarExpandState'
import { flattenDescendants, MAX_NAVLIST_LEVEL } from './sidebar-navlist-depth'

import styles from './SidebarProduct.module.scss'

// Brand NavList.Item renders a plain <a> (its `as` prop only accepts 'a' | 'button',
// not next/link), so intercept clicks to restore next/link-style client-side
// navigation. Modifier/middle clicks fall through to the browser so open-in-new-tab
// still works, and the <a href> keeps links crawlable for SSR. Mirrors Breadcrumbs.tsx.
function handleNavClick(
  router: ReturnType<typeof useRouter>,
  event: MouseEvent<HTMLElement>,
  href: string,
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    !href.startsWith('/')
  ) {
    return
  }
  event.preventDefault()
  // hrefs already include the locale prefix (e.g. /en/...), so disable Next.js
  // locale handling to avoid double-prefixing.
  router.push(href, undefined, { locale: false })
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
      <div>
        <NavList aria-label="REST sidebar overview articles">
          {conceptualPages.map((childPage) => (
            <NavListItem key={childPage.href} childPage={childPage} />
          ))}
        </NavList>

        <hr data-testid="rest-sidebar-reference" className="m-2" />

        <NavList aria-label="REST sidebar reference pages">
          {restPages.map((category) => (
            <RestNavListItem key={category.href} category={category} />
          ))}
        </NavList>
      </div>
    )
  }

  return (
    <div data-testid="sidebar" className={styles.sidebar}>
      <SidebarExpandStateProvider initial={sidebarExpanded}>
        {isRestPage ? restSection() : productSection()}
      </SidebarExpandStateProvider>
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

function LeafLink({ node }: { node: ProductTreeNode }) {
  const router = useRouter()
  const { asPath, locale } = router
  const routePath = `/${locale}${asPath.split('?')[0].split('#')[0]}`
  return (
    <NavList.Item
      as="a"
      href={node.href}
      aria-current={routePath === node.href ? 'page' : false}
      onClick={(event: MouseEvent<HTMLElement>) => handleNavClick(router, event, node.href)}
    >
      {node.title}
    </NavList.Item>
  )
}

function NavListItem({ childPage, level = 2 }: { childPage: ProductTreeNode; level?: number }) {
  const router = useRouter()
  const { asPath, locale } = router
  const routePath = `/${locale}${asPath.split('?')[0].split('#')[0]}`
  const isActive = routePath === childPage.href
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
          aria-current={routePath === sidebarLinkHref ? 'page' : false}
          onClick={(event: MouseEvent<HTMLElement>) =>
            handleNavClick(router, event, sidebarLinkHref)
          }
        >
          {childPage.sidebarLink.text}
        </NavList.Item>
      )}
      {specialCategory && !childPage.sidebarLink && (
        <NavList.Item
          as="a"
          href={childPage.href}
          aria-current={isActive ? 'page' : false}
          onClick={(event: MouseEvent<HTMLElement>) =>
            handleNavClick(router, event, childPage.href)
          }
        >
          {childPage.title}
        </NavList.Item>
      )}
      {childPage.childPages.map((subPage) => (
        <NavListItem key={subPage.href} childPage={subPage} level={level + 1} />
      ))}
    </ExpandableItem>
  )
}

function RestNavListItem({ category }: { category: ProductTreeNode }) {
  const router = useRouter()
  const { query, asPath, locale } = router
  const [visibleAnchor, setVisibleAnchor] = useState('')
  const routePath = `/${locale}${asPath.split('?')[0].split('#')[0]}`
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
        aria-current={routePath === category.href ? 'page' : false}
        onClick={(event: MouseEvent<HTMLElement>) => handleNavClick(router, event, category.href)}
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
            aria-current={routePath === childPage.href ? 'page' : false}
            onClick={(event: MouseEvent<HTMLElement>) =>
              handleNavClick(router, event, childPage.href)
            }
          >
            {childPage.title}
          </NavList.Item>
        )
      })}
    </ExpandableItem>
  )
}
