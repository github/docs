import React from 'react'
import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { ArticleTitle } from '@/frame/components/article/ArticleTitle'
import { MarkdownContent } from '@/frame/components/ui/MarkdownContent'
import { Lead } from '@/frame/components/ui/Lead'
import { PermissionsStatement } from '@/frame/components/ui/PermissionsStatement'
import { ArticleGridLayout } from '@/frame/components/article/ArticleGridLayout'
import { ArticleInlineLayout } from '@/frame/components/article/ArticleInlineLayout'
import { MiniTocs, UpNext } from '@/frame/components/ui/MiniTocs'
import { useAutomatedPageContext } from '@/automated-pipelines/components/AutomatedPageContext'
import { JourneyTrackNav } from '@/journeys/components'

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
    renderedPageHast,
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
      {(renderedPage || renderedPageHast) && (
        <MarkdownContent className="pt-3 pb-4" hast={renderedPageHast ?? undefined}>
          {renderedPage}
        </MarkdownContent>
      )}
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
      {miniTocItems.length > 1 && <MiniTocs miniTocItems={miniTocItems} />}
      {isJourneyTrack && currentJourneyTrack && <UpNext journey={currentJourneyTrack} />}
    </>
  ) : undefined

  return (
    <DefaultLayout hasDrawer={currentLayout !== 'inline'}>
      {currentLayout === 'inline' ? (
        <>
          <ArticleInlineLayout topper={<ArticleTitle>{title}</ArticleTitle>} intro={introProp}>
            {articleContents}
          </ArticleInlineLayout>
          {isJourneyTrack ? (
            <div className="width-full mt-4">
              <JourneyTrackNav context={currentJourneyTrack} />
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className="px-3 px-md-6 my-4">
            <ArticleGridLayout
              fullWidth={fullWidth}
              topper={<ArticleTitle>{title}</ArticleTitle>}
              tocBreakpoint="xxl"
              intro={introProp}
              toc={toc}
            >
              {articleContents}
            </ArticleGridLayout>
          </div>

          {isJourneyTrack ? (
            <div className="width-full mt-4">
              <JourneyTrackNav context={currentJourneyTrack} />
            </div>
          ) : null}
        </>
      )}
    </DefaultLayout>
  )
}
