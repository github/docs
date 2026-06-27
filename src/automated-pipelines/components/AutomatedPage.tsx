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
import { Breadcrumbs } from '@/frame/components/page-header/Breadcrumbs'
import { JourneyTrackCard, JourneyTrackNav } from '@/journeys/components'

type Props = {
  children?: React.ReactNode
  rawChildren?: React.ReactNode
  fullWidth?: boolean
}

export const AutomatedPage = ({ children, rawChildren, fullWidth }: Props) => {
  const {
    title,
    intro,
    renderedPage,
    miniTocItems,
    product,
    permissions,
    currentLayout,
    currentJourneyTrack,
  } = useAutomatedPageContext()
  const isJourneyTrack = !!currentJourneyTrack?.trackId
  const hasTocContent = isJourneyTrack || miniTocItems.length > 1

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

  const toc = hasTocContent ? (
    <>
      {isJourneyTrack && <JourneyTrackCard journey={currentJourneyTrack} />}
      {miniTocItems.length > 1 && <MiniTocs miniTocItems={miniTocItems} />}
    </>
  ) : undefined

  return (
    <DefaultLayout>
      {currentLayout === 'inline' ? (
        <>
          <ArticleInlineLayout
            topper={<ArticleTitle>{title}</ArticleTitle>}
            intro={introProp}
            toc={toc}
            breadcrumbs={<Breadcrumbs />}
          >
            {articleContents}
          </ArticleInlineLayout>
          {isJourneyTrack ? (
            <div className="container-lg mt-4 px-3">
              <JourneyTrackNav context={currentJourneyTrack} />
            </div>
          ) : null}
        </>
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

          {isJourneyTrack ? (
            <div className="container-lg mt-4 px-3">
              <JourneyTrackNav context={currentJourneyTrack} />
            </div>
          ) : null}
        </div>
      )}
    </DefaultLayout>
  )
}
