import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import {
  MarkGithubIcon,
  GitPullRequestIcon,
  PeopleIcon,
  CommentDiscussionIcon,
} from '@primer/octicons-react'
import { useVersion } from 'components/hooks/useVersion'
import { AllProductsLink } from 'components/product/AllProductsLink'

export default function Custom404() {
  const router = useRouter()
  const { currentVersion, isEnterprise } = useVersion()

  const contribution_href = router.locale
    ? `https://github.com/github/docs/edit/main/content/`
    : 'https://github.com/github/docs'

  return (
    <div className="d-lg-flex error-404">
      <Head>
        <title>Ooops!</title>
      </Head>
      <div className="sidebar d-none d-lg-block color-bg-tertiary position-sticky top-0 overflow-y-auto root">
        <div
          className="d-flex flex-items-center p-4 position-sticky top-0 color-bg-tertiary"
          style={{ zIndex: 3 }}
          id="github-logo"
          role="banner"
        >
          <Link href={`/${router.locale}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="color-text-primary" aria-hidden="true" tabIndex={-1}>
              <MarkGithubIcon size={32} />
            </a>
          </Link>
          <Link href={`/${router.locale}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="h4-mktg color-text-primary no-underline no-wrap pl-2 flex-auto">
              GitHub Docs
            </a>
          </Link>
        </div>
        <nav>
          <ul className="sidebar-products mt-4">
            {currentVersion !== 'homepage' && <AllProductsLink />}
          </ul>
        </nav>
      </div>
      <main className="width-full">
        <div className="container-xl p-responsive py-6">
          <article className="markdown-body col-md-10 col-lg-7 mx-auto">
            <h1>Ooops</h1>
            <div className="lead-mktg mb-5">It looks like this page doesn't exist.</div>
            <div className="col-lg-12 mt-6">
              <h3 className="mb-3">Need help?</h3>
            </div>
          </article>
        </div>
        <section className="mt-lg-9 py-7 px-3 px-md-6 no-print color-bg-tertiary">
          <div className="container-xl gutter-lg-spacious clearfix">
            <div className="col-12 col-lg-6 col-xl-4 mb-6 mb-xl-0 float-left">
              <div className="f5 contribution">
                <h2 className="f4">Help us make these docs great!</h2>
                <p className="color-text-secondary f6">
                  All GitHub docs are open source. See something that's wrong or unclear? Submit a
                  pull request.
                </p>
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
                <a
                  id="ask-community"
                  href="https://github.community"
                  className="btn btn-outline mr-4 mt-2"
                >
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
      </main>
    </div>
  )
}
