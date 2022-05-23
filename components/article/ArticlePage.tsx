import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { ZapIcon, InfoIcon, ShieldLockIcon } from '@primer/octicons-react'
import { Callout } from 'components/ui/Callout'

import { Link } from 'components/Link'
import { DefaultLayout } from 'components/DefaultLayout'
import { ArticleTitle } from 'components/article/ArticleTitle'
import { useArticleContext } from 'components/context/ArticleContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { LearningTrackNav } from './LearningTrackNav'
import { MarkdownContent } from 'components/ui/MarkdownContent'
import { Lead } from 'components/ui/Lead'
import { ArticleGridLayout } from './ArticleGridLayout'
import { PlatformPicker } from 'components/article/PlatformPicker'
import { ToolPicker } from 'components/article/ToolPicker'
import { MiniTocs } from 'components/ui/MiniTocs'

const ClientSideHighlightJS = dynamic(() => import('./ClientSideHighlightJS'), { ssr: false })

// Mapping of a "normal" article to it's interactive counterpart
const interactiveAlternatives: Record<string, { href: string }> = {
  '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-nodejs-project-for-codespaces':
    {
      href: '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces?langId=nodejs',
    },
  '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-dotnet-project-for-codespaces':
    {
      href: '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces?langId=dotnet',
    },
  '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-java-project-for-codespaces':
    {
      href: '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces?langId=java',
    },
  '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-python-project-for-codespaces':
    {
      href: '/codespaces/setting-up-your-project-for-codespaces/setting-up-your-project-for-codespaces?langId=py',
    },
}
type Props = {
  children?: React.ReactNode
}

export const ArticlePage = ({ children }: Props) => {
  const { asPath } = useRouter()
  const {
    title,
    intro,
    effectiveDate,
    renderedPage,
    contributor,
    permissions,
    includesPlatformSpecificContent,
    includesToolSpecificContent,
    product,
    miniTocItems,
    currentLearningTrack,
  } = useArticleContext()
  const { t } = useTranslation('pages')
  const currentPath = asPath.split('?')[0]

  // If the page contains `[data-highlight]` blocks, these pages need
  // syntax highlighting. But not every page needs it, so it's conditionally
  // lazy-loaded on the client.
  const [lazyLoadHighlightJS, setLazyLoadHighlightJS] = useState(false)
  useEffect(() => {
    // It doesn't need to use querySelector because all we care about is if
    // there is greater than zero of these in the DOM.
    // Note! This "core selector", which determines whether to bother
    // or not, needs to match what's used inside ClientSideHighlightJS.tsx
    if (document.querySelector('[data-highlight]')) {
      setLazyLoadHighlightJS(true)
    }

    // Important to depend on the current path because the first page you
    // load, before any client-side navigation, might not need it, but the
    // consecutive one does.
  }, [asPath])

  return (
    <DefaultLayout>
      {/* Doesn't matter *where* this is included because it will
      never render anything. It always just return null. */}
      {lazyLoadHighlightJS && <ClientSideHighlightJS />}

      <div className="container-xl px-3 px-md-6 my-4">
        <ArticleGridLayout
          topper={<ArticleTitle>{title}</ArticleTitle>}
          intro={
            <>
              {contributor && (
                <Callout variant="info" className="mb-3">
                  <p>
                    <span className="mr-2">
                      <InfoIcon />
                    </span>
                    {t('contributor_callout')} <a href={contributor.URL}>{contributor.name}</a>.
                  </p>
                </Callout>
              )}

              {intro && (
                <Lead data-testid="lead" data-search="lead">
                  {intro}
                </Lead>
              )}

              {permissions && (
                <div className="permissions-statement d-table">
                  <div className="d-table-cell pr-2">
                    <ShieldLockIcon size={16} />
                  </div>
                  <div className="d-table-cell" dangerouslySetInnerHTML={{ __html: permissions }} />
                </div>
              )}

              {includesPlatformSpecificContent && <PlatformPicker variant="underlinenav" />}
              {includesToolSpecificContent && <ToolPicker variant="underlinenav" />}

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
              {!!interactiveAlternatives[currentPath] && (
                <div className="flash mb-3">
                  <ZapIcon className="mr-2" />
                  <Link href={interactiveAlternatives[currentPath].href}>
                    Try the new interactive article
                  </Link>
                </div>
              )}
              {miniTocItems.length > 1 && (
                <MiniTocs pageTitle={title} miniTocItems={miniTocItems} />
              )}
            </>
          }
        >
          <div id="article-contents">
            <MarkdownContent>{children || renderedPage}</MarkdownContent>
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

        {currentLearningTrack?.trackName ? (
          <div className="mt-4">
            <LearningTrackNav track={currentLearningTrack} />
          </div>
        ) : null}
      </div>
    </DefaultLayout>
  )
}
