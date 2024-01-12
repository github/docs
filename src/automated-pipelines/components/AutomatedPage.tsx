import { DefaultLayout } from 'src/frame/components/DefaultLayout'
import { ArticleTitle } from 'src/frame/components/article/ArticleTitle'
import { MarkdownContent } from 'src/frame/components/ui/MarkdownContent'
import { Lead } from 'src/frame/components/ui/Lead'
import { PermissionsStatement } from 'src/frame/components/ui/PermissionsStatement'
import { ArticleGridLayout } from 'src/frame/components/article/ArticleGridLayout'
import { MiniTocs } from 'src/frame/components/ui/MiniTocs'
import { useAutomatedPageContext } from 'src/automated-pipelines/components/AutomatedPageContext'
import { ClientSideHighlight } from 'src/frame/components/ClientSideHighlight'
import { Alert } from 'src/frame/components/ui/Alert'

type Props = {
  children: React.ReactNode
}

export const AutomatedPage = ({ children }: Props) => {
  const { title, intro, renderedPage, miniTocItems, product, permissions } =
    useAutomatedPageContext()

  return (
    <DefaultLayout>
      <ClientSideHighlight />

      <div className="container-xl px-3 px-md-6 my-4">
        <ArticleGridLayout
          topper={<ArticleTitle>{title}</ArticleTitle>}
          intro={
            <>
              {intro && (
                <Lead data-testid="lead" data-search="lead">
                  {intro}
                </Lead>
              )}

              {permissions && <PermissionsStatement permissions={permissions} />}

              {product && <Alert className="mb-4" html={product} />}
            </>
          }
          toc={miniTocItems.length > 1 && <MiniTocs miniTocItems={miniTocItems} />}
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
