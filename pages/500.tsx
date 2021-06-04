import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import { MarkGithubIcon, GitPullRequestIcon, PeopleIcon, CommentDiscussionIcon, ThumbsdownIcon, ThumbsupIcon } from '@primer/octicons-react'
import * as languages from 'lib/languages'
import * as searchVersions from 'lib/search/versions'
import * as nonEnterpriseDefaultVersion from 'lib/non-enterprise-default-version'
import { useVersion } from 'components/hooks/useVersion'

export default function Custom500(props : any) {
  const router = useRouter()
  const { isEnterprise } = useVersion()
  const contribution_href = router.locale
  ? `https://github.com/github/docs/edit/main/content/`
  : 'https://github.com/github/docs'

  const expose = JSON.stringify({
    searchOptions: {
      languages: Object.keys(languages),
      versions: searchVersions,
      nonEnterpriseDefaultVersion
    }
  })

  return (
    <div>
      <Head>
        <title>GitHub Documentation</title>
        <link rel="stylesheet" href={props.cssPathUrl} />
        <script id="expose" type="application/json" dangerouslySetInnerHTML={{ __html: expose }} />
        <script src={props.jsPathUrl} />
      </Head>
      <div className="border-bottom color-border-secondary no-print">
        <header className="container-xl px-3 px-md-6 pt-3 pb-2 position-relative d-flex flex-justify-between width-full">
          <div
              className="d-flex flex-items-center d-lg-none"
              style={{ zIndex: 3 }}
              id="github-logo-mobile"
              role="banner"
            >
            <Link href={`/${router.locale}`}>
              <a aria-hidden="true" tabIndex={-1}>
                <MarkGithubIcon size={32} className="color-icon-primary" />
              </a>
            </Link>

            <Link href={`/${router.locale}`}>
              <a className="h4-mktg color-text-primary no-underline no-wrap pl-2">
                GitHub Docs
              </a>
            </Link>
          </div>

          <div className="width-full">
            <div className="d-inline-block width-full d-md-flex" style={{ zIndex: 1 }}>
              <div className="float-right d-md-none position-relative" style={{ zIndex: 3 }}>
                <div className="d-md-inline-block">
                  <div id="search-input-container" aria-hidden="true">
                    <div role="search" className="ais-SearchBox-form">
                      <input className="ais-SearchBox-input" type="search" placeholder="Search topics, products..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div className="container-xl p-responsive py-9">
        <article className="markdown-body col-md-10 col-lg-7 mx-auto">
          <h1>Ooops!</h1>
          <div className="lead-mktg mb-5">
            It looks like something went wrong.
            We track these errors automatically, but if the problem persists please feel free to contact us.
          </div>
          <pre><code>{props.errorStack}</code></pre>
        </article>
      </div>
      
      <section className="mt-lg-9 py-7 px-3 px-md-6 no-print color-bg-tertiary">
        <div className="container-xl gutter-lg-spacious clearfix">
          <div className="col-12 col-lg-6 col-xl-4 mb-6 mb-xl-0 float-left">
            <div className="js-helpfulness f5">
              <h2 data-help-start data-help-yes data-help-no className="mb-1 f4">
                Did this doc help you?
              </h2>
              <p className="f6">
                <a href="/github/site-policy/github-privacy-statement">Privacy policy</a>
              </p>
              <p className="radio-group" data-help-start data-help-yes data-help-no>
                <input
                  hidden
                  id="helpfulness-yes"
                  type="radio"
                  name="helpfulness-vote"
                  value="Yes"
                  aria-label="Yes"
                />
                <label className="btn x-radio-label mr-1" htmlFor="helpfulness-yes">
                  <ThumbsupIcon size={24} className="color-text-tertiary" />
                </label>
                <input
                  hidden
                  id="helpfulness-no"
                  type="radio"
                  name="helpfulness-vote"
                  value="No"
                  aria-label="No"
                />
                <label className="btn x-radio-label" htmlFor="helpfulness-no">
                  <ThumbsdownIcon size={24} className="color-text-tertiary" />
                </label>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-4 mb-6 mb-xl-0 float-left">
          <div className="f5 contribution">
            <h2 className="f4">Help us make these docs great!</h2>
            <p className="color-text-secondary f6">All GitHub docs are open source. See something that's wrong or unclear? Submit a pull request.</p>
            <a className="btn btn-outline" href={contribution_href}>
              <GitPullRequestIcon size="small" className="octicon mr-1" />
                Make a contribution
            </a>
            <p className="color-text-secondary f6 mt-2">
              Or,{' '}
              <a
                href="https://github.com/github/docs/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener"
              >
                learn how to contribute.
              </a>
            </p>
          </div>
          </div>
          <div className="col-12 col-lg-12 col-xl-4 float-left">
            <div>
              <h3 className="mb-2 f4">Still need help?</h3>
              <a id="ask-community" href="https://github.community" className="btn btn-outline mr-4 mt-2">
                <PeopleIcon size="small" className="octicon mr-1" />
                Ask the GitHub community
              </a>
              <a
                id="contact-us"
                href={
                  isEnterprise
                    ? 'https://enterprise.github.com/support'
                    : 'https://support.github.com/contact'
                }
                className="btn btn-outline mt-2"
              >
                <CommentDiscussionIcon size="small" className="octicon mr-1" />
                  Contact support
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-6 text-small">
        <div className="container-xl d-flex px-3 px-md-6">
          <ul className="d-flex list-style-none flex-wrap flex-justify-center flex-xl-justify-start">
            <li className="d-flex mr-xl-3 color-text-secondary">
              <MarkGithubIcon className="mr-2 mr-xl-3" size={20} />
              <span>&copy; {new Date().getFullYear()} GitHub, Inc.</span>
            </li>
            <li className="ml-3">
              <a href="/github/site-policy/github-terms-of-service">Terms</a>
            </li>
            <li className="ml-3">
              <a href="/github/site-policy/github-privacy-statement">Privacy </a>
            </li>
            <li className="ml-3">
              <a href="https://github.com/security">Security</a>
            </li>
            <li className="ml-3">
              <a href="https://www.githubstatus.com/">Status</a>
            </li>
            <li className="ml-3">
              <a href="/">Help</a>
            </li>
            <li className="ml-3">
              <a href="https://support.github.com">Contact GitHub</a>
            </li>
            <li className="ml-3">
              <a href="https://github.com/pricing">Pricing</a>
            </li>
            <li className="ml-3">
              <a href="/developers">Developer API</a>
            </li>
            <li className="ml-3">
              <a href="https://services.github.com/">Training</a>
            </li>
            <li className="ml-3">
              <a href="https://github.com/about">About</a>
            </li>
          </ul>
        </div>
      </footer>
    <style jsx>
      {`
        .ais-SearchBox-input {
        line-height: 20px;
        width: 100%;
        padding: 10px 8px 10px 32px;
        font-size: 16px;
        background: var(--color-bg-primary) url("../../../assets/images/octicons/search.svg")
          no-repeat 6px;
        border: 1px solid var(--color-input-border);
        }
      `}
    </style>
    </div>
  )
}
