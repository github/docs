import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { NavList } from '@primer/react'

import { ProductTreeNode, useMainContext } from '@/frame/components/context/MainContext'
import { useAutomatedPageContext } from '@/automated-pipelines/components/AutomatedPageContext'
import { nonAutomatedRestPaths } from '@/rest/lib/config'

import styles from './SidebarProduct.module.scss'

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
    <div data-testid="product-sidebar">
      <NavList aria-label="Product sidebar" role="navigation">
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
        <NavList aria-label="REST sidebar overview articles" role="navigation">
          {conceptualPages.map((childPage) => (
            <NavListItem key={childPage.href} childPage={childPage} />
          ))}
        </NavList>

        <hr data-testid="rest-sidebar-reference" className="m-2" />

        <NavList aria-label="REST sidebar reference pages" role="navigation">
          {restPages.map((category) => (
            <RestNavListItem key={category.href} category={category} />
          ))}
        </NavList>
      </div>
    )
  }

  return (
    <div data-testid="sidebar" className={styles.sidebar}>
      {isRestPage ? restSection() : productSection()}
    </div>
  )
}

function NavListItem({ childPage }: { childPage: ProductTreeNode }) {
  const { asPath, locale } = useRouter()
  const routePath = `/${locale}${asPath.split('?')[0].split('#')[0]}`
  const isActive = routePath === childPage.href
  const specialCategory = childPage.layout === 'category-landing'

  return (
    <NavList.Item
      defaultOpen={childPage.childPages.length > 0 && routePath.includes(childPage.href)}
      href={childPage.href}
      as={Link}
      aria-current={isActive ? 'page' : false}
    >
      {childPage.title}
      {childPage.childPages.length > 0 && (
        <NavList.SubNav aria-label={`${childPage.title} submenu`}>
          {childPage.sidebarLink && (
            <NavList.Item
              href={childPage.sidebarLink.href}
              as={Link}
              aria-current={
                routePath === `/${locale}${childPage.sidebarLink.href}` ? 'page' : false
              }
            >
              {childPage.sidebarLink.text}
            </NavList.Item>
          )}
          {specialCategory && !childPage.sidebarLink && (
            <NavList.Item href={childPage.href} as={Link} aria-current={isActive ? 'page' : false}>
              {childPage.title}
            </NavList.Item>
          )}
          {childPage.childPages.map((subPage) => (
            <NavListItem key={subPage.href} childPage={subPage} />
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
    nonAutomatedRestPaths.some((item: string) => asPath.includes(item))
      ? []
      : useAutomatedPageContext().miniTocItems

  useEffect(() => {
    if (nonAutomatedRestPaths.every((item: string) => !asPath.includes(item))) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.target.id) {
              const anchor = `#${entry.target.id.split('--')[0]}`
              if (entry.isIntersecting === true) setVisibleAnchor(anchor)
            } else if (asPath.includes('#')) {
              setVisibleAnchor(`#${asPath.split('#')[1]}`)
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
        <NavList.SubNav aria-label={`${category.title} submenu`}>
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
                  <NavList.SubNav aria-label={`${childPage.title} table of contents`}>
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
