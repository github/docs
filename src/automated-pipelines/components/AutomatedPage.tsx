import { DefaultLayout } from 'components/DefaultLayout'
import { ArticleTitle } from 'components/article/ArticleTitle'
import { MarkdownContent } from 'components/ui/MarkdownContent'
import { Lead } from 'components/ui/Lead'
import { PermissionsStatement } from 'components/ui/PermissionsStatement'
import { ArticleGridLayout } from '../../../components/article/ArticleGridLayout'
import { MiniTocs } from 'components/ui/MiniTocs'
import { useAutomatedPageContext } from 'src/automated-pipelines/components/AutomatedPageContext'
import { ClientSideHighlight } from 'components/ClientSideHighlight'
import { Callout } from 'components/ui/Callout'

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

              {product && (
                <Callout
                  variant="success"
                  className="mb-4"
                  dangerouslySetInnerHTML={{ __html: product }}
                />
              )}
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
