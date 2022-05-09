import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import cx from 'classnames'

import { DefaultLayout } from 'components/DefaultLayout'
import { MarkdownContent } from 'components/ui/MarkdownContent'
import { Lead } from 'components/ui/Lead'
import { RestOperation } from './RestOperation'
import styles from './RestOperation.module.scss'
import { useRestContext } from 'components/context/RestContext'
import { Operation } from './types'

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
  restOperations: Operation[]
}

export const RestReferencePage = ({ restOperations }: StructuredContentT) => {
  const { asPath } = useRouter()
  const { title, intro, renderedPage } = useRestContext()
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
    const { hash } = window.location

    // Today, Jan 2022, it's known explicitly what the pathname.
    // In the future there might be more.
    // Hopefully, we can some day delete all of this and no longer
    // be dependent on the URL hash to do the redirect.
    if (hash && asPath.startsWith('/rest')) {
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

  return (
    <DefaultLayout>
      {/* Doesn't matter *where* this is included because it will
      never render anything. It always just return null. */}
      {loadClientsideRedirectExceptions && <ClientSideRedirectExceptions />}
      {lazyLoadHighlightJS && <ClientSideHighlightJS />}
      <div className={cx(styles.restOperation, 'px-3 px-md-6 my-4 container-xl')}>
        <h1 className="mb-3">{title}</h1>
        {intro && (
          <Lead data-testid="lead" data-search="lead" className="markdown-body">
            {intro}
          </Lead>
        )}
        <MarkdownContent>
          {renderedPage && <MarkdownContent className="pt-3 pb-4">{renderedPage}</MarkdownContent>}
          {restOperations &&
            restOperations.length > 0 &&
            restOperations.map((operation, index) => (
              <React.Fragment
                key={`${operation.title}-${operation.category}-${operation.subcategory}`}
              >
                <RestOperation
                  key={`restOperation-${operation.title}-${index}`}
                  operation={operation}
                />
              </React.Fragment>
            ))}
        </MarkdownContent>
      </div>
    </DefaultLayout>
  )
}
