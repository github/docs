import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import cx from 'classnames'
import { ActionList, Heading } from '@primer/components'

import { ZapIcon, InfoIcon, ShieldLockIcon } from '@primer/octicons-react'
import { Callout } from 'components/ui/Callout'

import { Link } from 'components/Link'
import { DefaultLayout } from 'components/DefaultLayout'
import { ArticleTitle } from 'components/article/ArticleTitle'
import { MiniTocItem, useArticleContext } from 'components/context/ArticleContext'
import { useTranslation } from 'components/hooks/useTranslation'
import { LearningTrackNav } from './LearningTrackNav'
import { MarkdownContent } from 'components/ui/MarkdownContent'
import { Lead } from 'components/ui/Lead'
import { ArticleGridLayout } from './ArticleGridLayout'
import { PlatformPicker } from 'components/article/PlatformPicker'
import { ToolPicker } from 'components/article/ToolPicker'

const ClientSideRedirectExceptions = dynamic(() => import('./ClientsideRedirectExceptions'), {
  ssr: false,
})
const ClientSideHighlightJS = dynamic(() => import('./ClientSideHighlightJS'), { ssr: false })

// Mapping of a "normal" article to it's interactive counterpart
const interactiveAlternatives: Record<string, { href: string }> = {
  '/actions/automating-builds-and-tests/building-and-testing-nodejs': {
    href: '/actions/automating-builds-and-tests/building-and-testing-nodejs-or-python?langId=nodejs',
  },
  '/actions/automating-builds-and-tests/building-and-testing-python': {
    href: '/actions/automating-builds-and-tests/building-and-testing-nodejs-or-python?langId=python',
  },
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

export const ArticlePage = () => {
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

  const renderTocItem = (item: MiniTocItem) => {
    return (
      <ActionList.Item
        as="li"
        key={item.contents}
        className={item.platform}
        sx={{ listStyle: 'none', padding: '2px' }}
      >
        <div className={cx('lh-condensed d-block width-full')}>
          <div dangerouslySetInnerHTML={{ __html: item.contents }} />
          {item.items && item.items.length > 0 ? (
            <ul className="ml-3">{item.items.map(renderTocItem)}</ul>
          ) : null}
        </div>
      </ActionList.Item>
    )
  }

  // We have some one-off redirects for rest api docs
  // currently those are limited to the repos page, but
  // that will grow soon as we restructure the rest api docs.
  // This is a workaround to updating the hardcoded links
  // directly in the REST API code in a separate repo, which
  // requires many file changes and teams to sign off.
  // While the organization is turbulent, we can do this.
  // Once it's more settled, we can refactor the rest api code
  // to leverage the OpenAPI urls rather than hardcoded urls.
  // The code below determines if we should bother loading this redirecting
  // component at all.
  // The reason this isn't done at the server-level is because there you
  // can't possibly access the URL hash. That's only known in client-side
  // code.
  const [loadClientsideRedirectExceptions, setLoadClientsideRedirectExceptions] = useState(false)
  useEffect(() => {
    const { hash, pathname } = window.location
    // Today, Jan 2022, it's known explicitly what the pathname.
    // In the future there might be more.
    // Hopefully, we can some day delete all of this and no longer
    // be dependent on the URL hash to do the redirect.
    if (hash && pathname.endsWith('/rest/reference/repos')) {
      setLoadClientsideRedirectExceptions(true)
    }
  }, [])

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

  // Scrollable code blocks in our REST API docs and elsewhere aren't accessible
  // via keyboard navigation without setting tabindex="0".  But we don't want to set
  // this attribute on every `<pre>` code block, only the ones where there are scroll
  // bars because the content isn't all visible.
  useEffect(() => {
    const codeBlocks = document.querySelectorAll<HTMLPreElement>('pre')

    codeBlocks.forEach((codeBlock) => {
      if (
        codeBlock.scrollWidth > codeBlock.clientWidth ||
        codeBlock.scrollHeight > codeBlock.clientHeight
      ) {
        codeBlock.setAttribute('tabindex', '0')
      }
    })
  }, [])

  return (
    <DefaultLayout>
      {/* Doesn't matter *where* this is included because it will
      never render anything. It always just return null. */}
      {loadClientsideRedirectExceptions && <ClientSideRedirectExceptions />}

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
                <>
                  <Heading as="h2" id="in-this-article" className="mb-1" sx={{ fontSize: 1 }}>
                    <Link href="#in-this-article">{t('miniToc')}</Link>
                  </Heading>

                  <ActionList
                    key={title}
                    items={miniTocItems.map((items, i) => {
                      return {
                        key: title + i,
                        text: title,
                        renderItem: () => <ul>{renderTocItem(items)}</ul>,
                      }
                    })}
                  />
                </>
              )}
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

        {currentLearningTrack?.trackName ? (
          <div className="mt-4">
            <LearningTrackNav track={currentLearningTrack} />
          </div>
        ) : null}
      </div>
    </DefaultLayout>
  )
}
