import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import cx from 'classnames'
import { Box, Flash } from '@primer/react'
import { LinkExternalIcon, BeakerIcon } from '@primer/octicons-react'

import { Callout } from 'components/ui/Callout'
import { DefaultLayout } from 'components/DefaultLayout'
import { ArticleTitle } from 'components/article/ArticleTitle'
import { useArticleContext } from 'components/context/ArticleContext'
import { LearningTrackNav } from './LearningTrackNav'
import { MarkdownContent } from 'components/ui/MarkdownContent'
import { Lead } from 'components/ui/Lead'
import { PermissionsStatement } from 'components/ui/PermissionsStatement'
import { ArticleGridLayout } from './ArticleGridLayout'
import { PlatformPicker } from 'components/article/PlatformPicker'
import { ToolPicker } from 'components/article/ToolPicker'
import { MiniTocs } from 'components/ui/MiniTocs'
import { ClientSideHighlight } from 'components/ClientSideHighlight'
import { LearningTrackCard } from 'components/article/LearningTrackCard'
import { RestRedirect } from 'components/RestRedirect'
import { Breadcrumbs } from 'components/page-header/Breadcrumbs'
import { Link } from 'components/Link'
import { useTranslation } from 'components/hooks/useTranslation'
import { LinkPreviewPopover } from 'components/LinkPreviewPopover'
import { SupportPortalVaIframe } from 'components/article/SupportPortalVaIframe'

const ClientSideRefresh = dynamic(() => import('components/ClientSideRefresh'), {
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
    supportPortalVaIframeProps,
  } = useArticleContext()
  const isLearningPath = !!currentLearningTrack?.trackName
  const { t } = useTranslation(['pages'])

  return (
    <DefaultLayout>
      {supportPortalVaIframeProps.supportPortalUrl &&
        supportPortalVaIframeProps.vaFlowUrlParameter && (
          <SupportPortalVaIframe supportPortalVaIframeProps={supportPortalVaIframeProps} />
        )}
      <LinkPreviewPopover />
      {isDev && <ClientSideRefresh />}
      <ClientSideHighlight />
      {router.pathname.includes('/rest/') && <RestRedirect />}
      <div className="container-xl px-3 px-md-6 my-4">
        <div className={cx('d-none d-xl-block mt-3 mr-auto width-full')}>
          <Breadcrumbs />
        </div>
        <ArticleGridLayout
          topper={
            <>
              {/* This is a temporary thing for the duration of the
              feature-flagged release of hover preview cards on /$local/pages/
              articles.
              Delete this whole thing when hover preview cards is
              available on all articles independent of path.
               */}
              {router.query.productId === 'pages' && (
                <Flash variant="default" className="mb-3">
                  <Box sx={{ display: 'flex' }}>
                    <Box
                      sx={{
                        p: 1,
                        textAlign: 'center',
                      }}
                    >
                      <BeakerIcon className="mr-2 color-fg-muted" />
                    </Box>
                    <Box
                      sx={{
                        flexGrow: 1,
                        p: 0,
                      }}
                    >
                      <p>
                        Hover over a link to another article to get more details. If you have ideas
                        for how we can improve this page, let us know in the{' '}
                        <a href="https://github.com/github/docs/discussions/24591">discussion</a>.
                      </p>
                    </Box>
                  </Box>
                </Flash>
              )}

              <ArticleTitle>{title}</ArticleTitle>
            </>
          }
          intro={
            <>
              {intro && (
                // Note the `_page-intro` is used by the popover preview cards
                // when it needs this text for in-page links.
                <Lead data-testid="lead" data-search="lead" className="_page-intro">
                  {intro}
                </Lead>
              )}

              {permissions && <PermissionsStatement permissions={permissions} />}

              {includesPlatformSpecificContent && <PlatformPicker />}
              {includesToolSpecificContent && <ToolPicker />}

              {product && (
                <Callout
                  variant="success"
                  className="mb-4"
                  dangerouslySetInnerHTML={{ __html: product }}
                />
              )}
            </>
          }
          toc={
            <>
              {isLearningPath && <LearningTrackCard track={currentLearningTrack} />}
              {miniTocItems.length > 1 && <MiniTocs miniTocItems={miniTocItems} />}
            </>
          }
        >
          <div id="article-contents">
            {productVideoUrl && (
              <div className="my-2">
                <Link id="product-video" href={productVideoUrl} target="_blank">
                  <LinkExternalIcon className="octicon-link mr-2" />
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
        </ArticleGridLayout>

        {isLearningPath ? (
          <div className="mt-4">
            <LearningTrackNav track={currentLearningTrack} />
          </div>
        ) : null}
      </div>
    </DefaultLayout>
  )
}
