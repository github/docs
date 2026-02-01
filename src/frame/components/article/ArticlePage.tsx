import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import cx from 'classnames'
import { LinkExternalIcon } from '@primer/octicons-react'

import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { ArticleTitle } from '@/frame/components/article/ArticleTitle'
import { useArticleContext } from '@/frame/components/context/ArticleContext'
import { LearningTrackNav } from '@/learning-track/components/article/LearningTrackNav'
import { MarkdownContent } from '@/frame/components/ui/MarkdownContent'
import { Lead } from '@/frame/components/ui/Lead'
import { PermissionsStatement } from '@/frame/components/ui/PermissionsStatement'
import { ArticleGridLayout } from './ArticleGridLayout'
import { ArticleInlineLayout } from './ArticleInlineLayout'
import { PlatformPicker } from '@/tools/components/PlatformPicker'
import { ToolPicker } from '@/tools/components/ToolPicker'
import { MiniTocs } from '@/frame/components/ui/MiniTocs'
import { LearningTrackCard } from '@/learning-track/components/article/LearningTrackCard'
import { RestRedirect } from '@/rest/components/RestRedirect'
import { Breadcrumbs } from '@/frame/components/page-header/Breadcrumbs'
import { Link } from '@/frame/components/Link'
import { useTranslation } from '@/languages/components/useTranslation'
import { LinkPreviewPopover } from '@/links/components/LinkPreviewPopover'
import { UtmPreserver } from '@/frame/components/UtmPreserver'
import { JourneyTrackCard, JourneyTrackNav } from '@/journeys/components'
import { ViewMarkdownButton } from './ViewMarkdownButton'

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
    permissions,
    includesPlatformSpecificContent,
    includesToolSpecificContent,
    product,
    productVideoUrl,
    miniTocItems,
    currentLearningTrack,
    currentJourneyTrack,
    supportPortalVaIframeProps,
    currentLayout,
    currentPath,
  } = useArticleContext()
  const isLearningPath = !!currentLearningTrack?.trackName
  const isJourneyTrack = !!currentJourneyTrack?.trackId
  const { t } = useTranslation(['pages'])

  const introProp = (
    <>
      {intro && (
        // Note the `_page-intro` is used by the popover preview cards
        // when it needs this text for in-page links.
        <Lead data-testid="lead" data-search="lead" className="_page-intro">
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

  const toc = (
    <>
      <ViewMarkdownButton currentPath={currentPath} />
      {isLearningPath && <LearningTrackCard track={currentLearningTrack} />}
      {isJourneyTrack && <JourneyTrackCard journey={currentJourneyTrack} />}
      {miniTocItems.length > 1 && <MiniTocs miniTocItems={miniTocItems} />}
    </>
  )

  const articleContents = (
    <div id="article-contents">
      {productVideoUrl && (
        <div className="my-2">
          <Link id="product-video" href={productVideoUrl} target="_blank">
            <LinkExternalIcon aria-label="(external site)" className="octicon-link mr-2" />
            {t('video_from_transcript')}
          </Link>
        </div>
      )}

      <MarkdownContent>{renderedPage}</MarkdownContent>
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
    <DefaultLayout>
      <LinkPreviewPopover />
      <UtmPreserver />
      {isDev && <ClientSideRefresh />}
      {router.pathname.includes('/rest/') && <RestRedirect />}
      {currentLayout === 'inline' ? (
        <>
          <ArticleInlineLayout
            supportPortalVaIframeProps={supportPortalVaIframeProps}
            topper={<ArticleTitle>{title}</ArticleTitle>}
            intro={introProp}
            introCallOuts={introCalloutsProp}
            toc={toc}
            breadcrumbs={<Breadcrumbs />}
          >
            {articleContents}
          </ArticleInlineLayout>
          {isLearningPath ? (
            <div className="container-lg mt-4 px-3">
              <LearningTrackNav track={currentLearningTrack} />
            </div>
          ) : null}
          {isJourneyTrack ? (
            <div className="container-lg mt-4 px-3">
              <JourneyTrackNav context={currentJourneyTrack} />
            </div>
          ) : null}
        </>
      ) : (
        <div className="container-xl px-3 px-md-6 my-4">
          <div className={cx('d-none d-xxl-block mt-3 mr-auto width-full')}>
            <Breadcrumbs />
          </div>

          <ArticleGridLayout
            supportPortalVaIframeProps={supportPortalVaIframeProps}
            topper={<ArticleTitle>{title}</ArticleTitle>}
            intro={
              <>
                {introProp}
                {introCalloutsProp}
              </>
            }
            toc={toc}
          >
            {articleContents}
          </ArticleGridLayout>

          {isLearningPath ? (
            <div className="mt-4">
              <LearningTrackNav track={currentLearningTrack} />
            </div>
          ) : null}
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
