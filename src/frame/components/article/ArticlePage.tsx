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
        // Note the `_page-intro` is used by the popover preview cards
        // when it needs this text for in-page links.
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

  // An article with at most one heading and no journey track has nothing to put
  // in the rail. Without this guard `toc` is a fragment wrapping two false
  // conditionals — truthy — so ArticleGridLayout still renders the sidebar cell
  // and paints its full-height border-left beside an empty 326px column at
  // 1400px+. Mirrors AutomatedPage, which already guards this way.
  const hasTocContent = isJourneyTrack || miniTocItems.length > 1
  const toc = hasTocContent ? (
    <>
      {miniTocItems.length > 1 && <MiniTocs miniTocItems={miniTocItems} />}
      {isJourneyTrack && currentJourneyTrack && <UpNext journey={currentJourneyTrack} />}
    </>
  ) : undefined

  // The title leads the column on its own; the copy-markdown control follows the
  // lede below (see `introWithCopy`).
  const topper = <ArticleTitle>{title}</ArticleTitle>

  // The copy-markdown control sits under the lede in ONE place — every width,
  // both layouts. The two layouts differ only in where the intro callouts go:
  // the grid takes them as part of `intro`, the inline layout as its own prop.
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
    // `data-has-upnext` marks pages that render the full-width "Up next" band
    // (journey tracks) so the section-box frame extends down 24px to meet it
    // rather than stopping at the content bottom (see article-section-framing).
    <div
      id="article-contents"
      // Opts this page into the Docs 2026 article-body treatment (section
      // framing + brand link colours). Auto-generated reference pages render the
      // same #article-contents wrapper but deliberately do not carry this.
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
      {/* SelectionProvider is provided by DefaultLayout (wrapping both the
          secondary bar and this content) so the collapsed TOC menu shares the
          same platform/tool selection. */}
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
            {/* On journey-track pages the "Up next" band below sits flush to the
                article frame (no bottom margin here / no top margin on the band),
                so the section-box side rails run down to meet the band's own top
                border. Ordinary pages keep the standard my-4 bottom spacing. */}
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
