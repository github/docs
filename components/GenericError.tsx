import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MarkGithubIcon, CommentDiscussionIcon } from '@primer/octicons-react'
import { useVersion } from 'components/hooks/useVersion'

export function GenericError() {
  const { isEnterprise } = useVersion()

  return (
    <div className="min-h-screen d-flex flex-column">
      <Head>
        <title>GitHub Documentation</title>
      </Head>

      <SimpleHeader />

      <div className="container-xl p-responsive py-9 width-full flex-1">
        <article className="col-md-10 col-lg-7 mx-auto">
          <h1 className="mb-3 pb-3 border-bottom">Ooops!</h1>
          <p className="lead-mktg">It looks like something went wrong.</p>
          <p className="lead-mktg">
            We track these errors automatically, but if the problem persists please feel free to
            contact us.
          </p>
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
        </article>
      </div>

      <SimpleFooter />
    </div>
  )
}

export const SimpleHeader = () => {
  const router = useRouter()
  return (
    <div className="border-bottom color-border-secondary no-print">
      <header className="container-xl p-responsive py-3 position-relative d-flex width-full">
        <div
          className="d-flex flex-items-center"
          style={{ zIndex: 3 }}
          id="github-logo-mobile"
          role="banner"
        >
          <Link href={`/${router.locale}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a aria-hidden="true" tabIndex={-1}>
              <MarkGithubIcon size={32} className="color-icon-primary" />
            </a>
          </Link>

          <Link href={`/${router.locale}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="h4-mktg color-text-primary no-underline no-wrap pl-2">GitHub Docs</a>
          </Link>
        </div>
      </header>
    </div>
  )
}

export const SimpleFooter = () => {
  return (
    <footer className="py-6 text-small">
      <div className="container-xl d-flex px-3 px-md-6 flex-justify-center">
        <ul className="d-flex list-style-none flex-wrap flex-justify-center">
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
  )
}
