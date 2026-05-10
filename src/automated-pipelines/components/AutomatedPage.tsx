import React from 'react'
import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { ArticleTitle } from '@/frame/components/article/ArticleTitle'
import { MarkdownContent } from '@/frame/components/ui/MarkdownContent'
import { Lead } from '@/frame/components/ui/Lead'
import { PermissionsStatement } from '@/frame/components/ui/PermissionsStatement'
import { ArticleGridLayout } from '@/frame/components/article/ArticleGridLayout'
import { ArticleInlineLayout } from '@/frame/components/article/ArticleInlineLayout'
import { MiniTocs } from '@/frame/components/ui/MiniTocs'
import { useAutomatedPageContext } from '@/automated-pipelines/components/AutomatedPageContext'
import { ClientSideHighlight } from '@/frame/components/ClientSideHighlight'
import { Breadcrumbs } from '@/frame/components/page-header/Breadcrumbs'

type Props = {
  children?: React.ReactNode
  rawChildren?: React.ReactNode
  fullWidth?: boolean
}

export const AutomatedPage = ({ children, rawChildren, fullWidth }: Props) => {
  const { title, intro, renderedPage, miniTocItems, product, permissions, currentLayout } =
    useAutomatedPageContext()

  const articleContents = (
    <div id="article-contents">
      {renderedPage && <MarkdownContent className="pt-3 pb-4">{renderedPage}</MarkdownContent>}
      {children && <MarkdownContent className="pt-3 pb-4">{children}</MarkdownContent>}
      {rawChildren && <div className="pt-3 pb-4">{rawChildren}</div>}
    </div>
  )

  const introProp = (
    <>
      {intro && (
        <Lead data-testid="lead" data-search="lead">
          {intro}
        </Lead>
      )}
      <PermissionsStatement permissions={permissions} product={product} />
    </>
  )

  const toc = miniTocItems.length > 1 ? <MiniTocs miniTocItems={miniTocItems} /> : undefined

  return (
    <DefaultLayout>
      <ClientSideHighlight />

      {currentLayout === 'inline' ? (
        <ArticleInlineLayout
          topper={<ArticleTitle>{title}</ArticleTitle>}
          intro={introProp}
          toc={toc}
          breadcrumbs={<Breadcrumbs />}
        >
          {articleContents}
        </ArticleInlineLayout>
      ) : (
        <div className="container-xl px-3 px-md-6 my-4">
          <ArticleGridLayout
            fullWidth={fullWidth}
            topper={
              <>
                <div className="d-none d-xl-block my-3 mr-auto width-full">
                  <Breadcrumbs />
                </div>
                <ArticleTitle>{title}</ArticleTitle>
              </>
            }
            intro={introProp}
            toc={toc}
          >
            {articleContents}
          </ArticleGridLayout>
        </div>
      )}
    </DefaultLayout>
  )
}
