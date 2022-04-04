import React, { useState, useEffect } from 'react'
import cx from 'classnames'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { DefaultLayout } from 'components/DefaultLayout'
import { useMainContext } from 'components/context/MainContext'
import { MarkdownContent } from 'components/ui/MarkdownContent'
import { Lead } from 'components/ui/Lead'
import { MiniTocItem } from 'components/context/ArticleContext'
import { RestCategoryOperationsT } from './types'
import { RestOperation } from './RestOperation'
import { ChevronDownIcon, ChevronUpIcon, SearchIcon } from '@primer/octicons-react'
import { useTranslation } from 'components/hooks/useTranslation'
import { ActionList } from '@primer/react'

const ClientSideHighlightJS = dynamic(() => import('components/article/ClientSideHighlightJS'), {
  ssr: false,
})

const ClientSideRedirectExceptions = dynamic(
  () => import('components/article/ClientsideRedirectExceptions'),
  {
    ssr: false,
  }
)

export type StructuredContentT = {
  descriptions: any
  introContent: string
  restOperations: RestCategoryOperationsT
  miniTocItems?: MiniTocItem[]
}

export const RestReferencePage = ({
  descriptions,
  introContent,
  restOperations,
  miniTocItems,
}: StructuredContentT) => {
  const { t } = useTranslation('pages')
  const { asPath } = useRouter()
  const { page } = useMainContext()
  const subcategories = Object.keys(restOperations)
  const [collapsed, setCollapsed] = useState({} as Record<number, boolean>)

  // We have some one-off redirects for rest api docs
  // currently those are limited to the repos page, but
  // that will grow soon as we restructure the rest api docs.
  // This is a workaround to updating the hardcoded links
  // directly in the REST API code in a separate repo, which
  // requires many file changes and teams to sign off.
  // While the organization is turbulent, we can do this.
  // Once it's more settled, we can refactor the rest api code
  // to leverage the OpenAPI urls rather than hardcoded urls.
  // The code below determines if we should bother loading this redirecting
  // component at all.
  // The reason this isn't done at the server-level is because there you
  // can't possibly access the URL hash. That's only known in client-side
  // code.
  const [loadClientsideRedirectExceptions, setLoadClientsideRedirectExceptions] = useState(false)
  useEffect(() => {
    const { hash, pathname } = window.location
    // Today, Jan 2022, it's known explicitly what the pathname.
    // In the future there might be more.
    // Hopefully, we can some day delete all of this and no longer
    // be dependent on the URL hash to do the redirect.
    if (
      hash &&
      (pathname.endsWith('/rest/reference/repos') ||
        pathname.endsWith('/rest/reference/enterprise-admin') ||
        pathname.endsWith('/rest/reference/deployments'))
    ) {
      setLoadClientsideRedirectExceptions(true)
    }
  }, [])

  // Scrollable code blocks in our REST API docs and elsewhere aren't accessible
  // via keyboard navigation without setting tabindex="0".  But we don't want to set
  // this attribute on every `<pre>` code block, only the ones where there are scroll
  // bars because the content isn't all visible.
  useEffect(() => {
    const codeBlocks = document.querySelectorAll<HTMLPreElement>('pre')

    codeBlocks.forEach((codeBlock) => {
      if (
        codeBlock.scrollWidth > codeBlock.clientWidth ||
        codeBlock.scrollHeight > codeBlock.clientHeight
      ) {
        codeBlock.setAttribute('tabindex', '0')
      }
    })
  }, [])

  // If the page contains `[data-highlight]` blocks, these pages need
  // syntax highlighting. But not every page needs it, so it's conditionally
  // lazy-loaded on the client.
  const [lazyLoadHighlightJS, setLazyLoadHighlightJS] = useState(false)
  useEffect(() => {
    // It doesn't need to use querySelector because all we care about is if
    // there is greater than zero of these in the DOM.
    // Note! This "core selector", which determines whether to bother
    // or not, needs to match what's used inside ClientSideHighlightJS.tsx
    if (document.querySelector('[data-highlight]')) {
      setLazyLoadHighlightJS(true)
    }

    // Important to depend on the current path because the first page you
    // load, before any client-side navigation, might not need it, but the
    // consecutive one does.
  }, [asPath])

  // Resetting the collapsed array when we move to another REST page
  useEffect(() => {
    setCollapsed({})
  }, [asPath])

  const handleClick = (param: number) => {
    setCollapsed((prevState) => {
      return { ...prevState, [param]: !prevState[param] }
    })
  }

  const renderTocItem = (item: MiniTocItem, index: number) => {
    return (
      <ActionList.Item
        as="li"
        key={item.contents}
        className={item.platform}
        sx={{ listStyle: 'none', padding: '2px' }}
      >
        <div className={cx('lh-condensed d-block width-full')}>
          <div className="d-inline-flex" dangerouslySetInnerHTML={{ __html: item.contents }} />
          {item.items && item.items.length > 0 && (
            <button
              className="background-transparent border-0 ml-1"
              onClick={() => handleClick(index)}
            >
              {!collapsed[index] ? <ChevronDownIcon /> : <ChevronUpIcon />}
            </button>
          )}
          {collapsed[index] && item.items && item.items.length > 0 ? (
            <ul className="ml-3">{item.items.map(renderTocItem)}</ul>
          ) : null}
        </div>
      </ActionList.Item>
    )
  }

  return (
    <DefaultLayout>
      {/* Doesn't matter *where* this is included because it will
      never render anything. It always just return null. */}
      {loadClientsideRedirectExceptions && <ClientSideRedirectExceptions />}
      {lazyLoadHighlightJS && <ClientSideHighlightJS />}

      <div className="container-xl px-3 px-md-6 my-4 mx-xl-12 mx-lg-12">
        <h1>{page.title}</h1>
        {page.introPlainText && (
          <Lead data-testid="lead" data-search="lead" className="markdown-body">
            {page.introPlainText}
          </Lead>
        )}
        <div className="my-3 d-flex">
          <div className="pr-3 mt-1">
            <Circle className="color-fg-on-emphasis color-bg-emphasis">
              <SearchIcon className="" size={15} />
            </Circle>
          </div>
          <div id="article-contents">
            <h3>{t('miniToc')}</h3>
            {miniTocItems && (
              <ActionList
                key={page.title}
                items={miniTocItems.map((items, i) => {
                  return {
                    key: page.title + i,
                    text: page.title,
                    renderItem: () => <ul>{renderTocItem(items, i)}</ul>,
                  }
                })}
              />
            )}
          </div>
        </div>
        <div key={`restCategory-introContent`}>
          <div dangerouslySetInnerHTML={{ __html: introContent }} />
        </div>
        <MarkdownContent>
          {subcategories.map((subcategory, index) => (
            <div key={`restCategory-${index}`}>
              <div dangerouslySetInnerHTML={{ __html: descriptions[subcategory] }} />
              {restOperations[subcategory].map((operation, index) => (
                <RestOperation key={`restOperation-${index}`} operation={operation} index={index} />
              ))}
            </div>
          ))}
        </MarkdownContent>
      </div>
    </DefaultLayout>
  )
}

const Circle = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div
      className={cx('circle d-flex flex-justify-center flex-items-center', className)}
      style={{ width: 24, height: 24 }}
    >
      {children}
    </div>
  )
}
