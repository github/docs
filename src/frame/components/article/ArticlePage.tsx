import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { useArticleContext } from '@/frame/components/context/ArticleContext'
import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { ArticleTitle } from '@/frame/components/article/ArticleTitle'
import { MarkdownContent } from '@/frame/components/ui/MarkdownContent'
import { Lead } from '@/frame/components/ui/Lead'
import { PermissionsStatement } from '@/frame/components/ui/PermissionsStatement'
import { ArticleGridLayout } from './ArticleGridLayout'
import { ArticleInlineLayout } from './ArticleInlineLayout'
import { PlatformPicker } from '@/tools/components/PlatformPicker'
import { ToolPicker } from '@/tools/components/ToolPicker'
import { MiniTocs, UpNext } from '@/frame/components/ui/MiniTocs'
import { RestRedirect } from '@/rest/components/RestRedirect'
import { LinkPreviewPopover } from '@/links/components/LinkPreviewPopover'
import { UtmPreserver } from '@/frame/components/UtmPreserver'
import { JourneyTrackNav } from '@/journeys/components'
import { CopyMarkdownBelowIntro } from './ViewMarkdownButton'
import { ExperimentContentSwap } from '@/events/components/experiments/ExperimentContentSwap'
import { CodeTabsProvider } from '@/frame/components/CodeTabsGroup'

const ClientSideRefresh = dynamic(() => import('@/frame/components/ClientSideRefresh'), {
  ssr: false,
})
const isDev = process.env.NODE_ENV === 'development'

export const ArticlePage = () => {
  const router = useRouter()
  const {
    title,
    intro,
    effectiveDate,
    renderedPage,
    renderedPageHast,
    permissions,
    includesPlatformSpecificContent,
    includesToolSpecificContent,
    product,
    miniTocItems,
    currentJourneyTrack,
    supportPortalVaIframeProps,
    currentLayout,
    currentPath,
  } = useArticleContext()
  const isJourneyTrack = !!currentJourneyTrack?.trackId

  const introProp = (
    <>
      {intro && (
        // _page-intro lets popover preview cards reuse this text for in-page links.
        <Lead variant="hero" data-testid="lead" data-search="lead" className="_page-intro">
          {intro}
        </Lead>
      )}
    </>
  )

  const introCalloutsProp = (
    <>
      <PermissionsStatement permissions={permissions} product={product} />

      {includesPlatformSpecificContent && <PlatformPicker />}
      {includesToolSpecificContent && <ToolPicker />}
    </>
  )

  // Guard the 1400px sidebar because a false-only fragment still paints an empty 326px rail.
  const hasTocContent = isJourneyTrack || miniTocItems.length > 1
  const toc = hasTocContent ? (
    <>
      {miniTocItems.length > 1 && <MiniTocs miniTocItems={miniTocItems} />}
      {isJourneyTrack && currentJourneyTrack && <UpNext journey={currentJourneyTrack} />}
    </>
  ) : undefined

  const topper = <ArticleTitle>{title}</ArticleTitle>

  // Keep the copy-markdown control under the lede; layouts only place callouts differently.
  const introWithCopy = (
    <>
      {introProp}
      <CopyMarkdownBelowIntro currentPath={currentPath} />
    </>
  )

  const gridIntro = (
    <>
      {introWithCopy}
      {introCalloutsProp}
    </>
  )

  const articleContents = (
    // data-has-upnext extends the section frame 24px to meet journey-track Up next bands.
    <div
      id="article-contents"
      // data-article-body opts articles into section framing; generated references omit it.
      data-article-body
      data-has-upnext={isJourneyTrack ? '' : undefined}
    >
      {renderedPageHast ? (
        <MarkdownContent hast={renderedPageHast} />
      ) : (
        <MarkdownContent>{renderedPage}</MarkdownContent>
      )}
      <ExperimentContentSwap containerRef="#article-contents" />
      {effectiveDate && (
        <div className="mt-4" id="effectiveDate">
          Effective as of:{' '}
          <time dateTime={new Date(effectiveDate).toISOString()}>
            {new Date(effectiveDate).toDateString()}
          </time>
        </div>
      )}
    </div>
  )

  return (
    <DefaultLayout hasDrawer={currentLayout !== 'inline'}>
      <CodeTabsProvider>
        <LinkPreviewPopover />
        <UtmPreserver />
        {isDev && <ClientSideRefresh />}
        {router.pathname.includes('/rest/') && <RestRedirect />}
        {currentLayout === 'inline' ? (
          <>
            <ArticleInlineLayout
              supportPortalVaIframeProps={supportPortalVaIframeProps}
              topper={topper}
              intro={introWithCopy}
              introCallOuts={introCalloutsProp}
            >
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
            {/* Journey pages remove bottom spacing so rails meet the Up next border. */}
            <div className={`px-3 px-md-6 mt-4 ${isJourneyTrack ? '' : 'mb-4'}`}>
              <ArticleGridLayout
                supportPortalVaIframeProps={supportPortalVaIframeProps}
                topper={topper}
                tocBreakpoint="xxl"
                intro={gridIntro}
                toc={toc}
              >
                {articleContents}
              </ArticleGridLayout>
            </div>

            {isJourneyTrack ? (
              <div className="width-full">
                <JourneyTrackNav context={currentJourneyTrack} />
              </div>
            ) : null}
          </>
        )}
      </CodeTabsProvider>
    </DefaultLayout>
  )
}
