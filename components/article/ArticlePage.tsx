import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import cx from 'classnames'

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
    miniTocItems,
    currentLearningTrack,
  } = useArticleContext()
  const isLearningPath = !!currentLearningTrack?.trackName

  return (
    <DefaultLayout>
      {isDev && <ClientSideRefresh />}
      <ClientSideHighlight />
      {router.pathname.includes('/rest/') && <RestRedirect />}
      <div className="container-xl px-3 px-md-6 my-4">
        <div className={cx('my-3 mr-auto width-full')} data-search="breadcrumbs">
          <Breadcrumbs />
        </div>
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
