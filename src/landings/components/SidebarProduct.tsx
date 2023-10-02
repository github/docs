import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { NavList } from '@primer/react'

import { ProductTreeNode, useMainContext } from 'components/context/MainContext'
import { useAutomatedPageContext } from 'src/automated-pipelines/components/AutomatedPageContext'

export const SidebarProduct = () => {
  const router = useRouter()
  const {
    currentProduct,
    // For the sidebar we only need the short titles so we can use the
    // more "compressed" tree that is as light as possible.
    sidebarTree,
  } = useMainContext()
  const isRestPage = currentProduct && currentProduct.id === 'rest'

  useEffect(() => {
    const activeArticle = document.querySelector('[aria-expanded=true]')
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
    <div className="ml-3" data-testid="product-sidebar">
      <NavList aria-label="Product sidebar">
        {sidebarTree &&
          sidebarTree.childPages.map((childPage) => (
            <NavListItem key={childPage.href} childPage={childPage} />
          ))}
      </NavList>
    </div>
  )

  const restSection = () => {
    const conceptualPages = sidebarTree.childPages.filter(
      (page) =>
        page.href.includes('guides') ||
        page.href.includes('overview') ||
        page.href.includes('quickstart'),
    )
    const restPages = sidebarTree.childPages.filter(
      (page) =>
        !page.href.includes('guides') &&
        !page.href.includes('overview') &&
        !page.href.includes('quickstart'),
    )
    return (
      <>
        <div className="ml-3">
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
      </>
    )
  }

  return (
    <div data-testid="sidebar" style={{ overflowY: 'auto' }} className="pt-3">
      {isRestPage ? restSection() : productSection()}
    </div>
  )
}

function NavListItem({ childPage }: { childPage: ProductTreeNode }) {
  const { push, asPath, locale } = useRouter()
  const routePath = `/${locale}${asPath.split('?')[0].split('#')[0]}`
  const isActive = routePath === childPage.href

  return (
    <NavList.Item
      defaultOpen={childPage.childPages.length > 0 && routePath.includes(childPage.href)}
      href={childPage.href}
      aria-current={isActive ? 'page' : false}
      onClick={(event) => {
        // XXX TODO: If the `childPage.href` is an external link, don't try to do anything fancy here.
        event.preventDefault()
        push(childPage.href)
      }}
    >
      {childPage.title}
      {childPage.childPages.length > 0 && (
        <NavList.SubNav aria-label={childPage.title} sx={{ '*': { fontSize: 1 } }}>
          {childPage.childPages.map((childPage) => (
            <NavListItem key={childPage.href} childPage={childPage} />
          ))}
        </NavList.SubNav>
      )}
    </NavList.Item>
  )
}

function RestNavListItem({ category }: { category: ProductTreeNode }) {
  const { push, query, asPath, locale } = useRouter()
  const [visibleAnchor, setVisibleAnchor] = useState('')
  const routePath = `/${locale}${asPath.split('?')[0].split('#')[0]}`
  const miniTocItems =
    query.productId === 'rest' ||
    // These pages need the Article Page mini tocs instead of the Rest Pages
    asPath.includes('/rest/guides') ||
    asPath.includes('/rest/overview') ||
    asPath.includes('/rest/quickstart')
      ? []
      : useAutomatedPageContext().miniTocItems

  useEffect(() => {
    if (
      !asPath.includes('guides') &&
      !asPath.includes('overview') &&
      !asPath.includes('quickstart')
    ) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target.id) {
              const anchor = '#' + entry.target.id.split('--')[0]
              if (entry.isIntersecting === true) setVisibleAnchor(anchor)
            } else if (asPath.includes('#')) {
              setVisibleAnchor('#' + asPath.split('#')[1])
            } else {
              setVisibleAnchor('')
            }
          })
        },
        { rootMargin: '0px 0px -85% 0px' },
      )
      // TODO: When we add the ## About the {title} API to each operation
      // we can remove the h2 here
      const headingsList = Array.from(document.querySelectorAll('h2, h3'))

      headingsList.forEach((heading) => {
        observer.observe(heading)
      })

      return () => {
        observer.disconnect()
      }
    }
  }, [miniTocItems])

  return (
    <NavList.Item
      defaultOpen={routePath.includes(category.href)}
      href={category.href}
      className="f5"
    >
      {category.title}
      {category.childPages.length > 0 && (
        <NavList.SubNav aria-label={category.title} sx={{ '*': { fontSize: 1 } }}>
          {category.childPages.map((childPage) => {
            return (
              <NavList.Item
                defaultOpen={routePath.includes(childPage.href)}
                key={childPage.href}
                onClick={(event) => {
                  event.preventDefault()
                  push(childPage.href)
                }}
              >
                {childPage.title}

                {routePath === childPage.href && miniTocItems.length > 0 && (
                  <NavList.SubNav aria-label={childPage.title}>
                    {miniTocItems.map((item) => {
                      const isAnchorCurrent = visibleAnchor === item.contents.href
                      return (
                        <NavList.Item
                          key={item.contents.href}
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
                )}
              </NavList.Item>
            )
          })}
        </NavList.SubNav>
      )}
    </NavList.Item>
  )
}
