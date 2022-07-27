import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { DefaultLayout } from 'components/DefaultLayout'
import { ArticleTitle } from 'components/article/ArticleTitle'
import { MarkdownContent } from 'components/ui/MarkdownContent'
import { Lead } from 'components/ui/Lead'
import { ArticleGridLayout } from './ArticleGridLayout'
import { MiniTocs } from 'components/ui/MiniTocs'
import { useAutomatedPageContext } from 'components/context/AutomatedPageContext'

const ClientSideHighlightJS = dynamic(() => import('./ClientSideHighlightJS'), { ssr: false })

type Props = {
  children: React.ReactNode
}

export const AutomatedPage = ({ children }: Props) => {
  const { asPath } = useRouter()
  const { title, intro, renderedPage, miniTocItems } = useAutomatedPageContext()

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
      {lazyLoadHighlightJS && <ClientSideHighlightJS />}

      <div className="container-xl px-3 px-md-6 my-4">
        <ArticleGridLayout
          topper={<ArticleTitle>{title}</ArticleTitle>}
          intro={
            intro && (
              <Lead data-testid="lead" data-search="lead">
                {intro}
              </Lead>
            )
          }
          toc={
            miniTocItems.length > 1 && <MiniTocs pageTitle={title} miniTocItems={miniTocItems} />
          }
        >
          <div id="article-contents">
            {renderedPage && (
              <MarkdownContent className="pt-3 pb-4">{renderedPage}</MarkdownContent>
            )}
            {children && <MarkdownContent className="pt-3 pb-4">{children}</MarkdownContent>}
          </div>
        </ArticleGridLayout>
      </div>
    </DefaultLayout>
  )
}
