import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import useLazyLoadHighlightJS from 'components/hooks/useLazyLoadHighlightJS'
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

  const lazyLoadHighlightJS = useLazyLoadHighlightJS(asPath)

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
