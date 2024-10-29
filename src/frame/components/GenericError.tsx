import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MarkGithubIcon, CommentDiscussionIcon } from '@primer/octicons-react'
import { Lead } from 'src/frame/components/ui/Lead'

export function GenericError() {
  return (
    <div className="min-h-screen d-flex flex-column">
      <Head>
        <title>GitHub Docs</title>
        <meta name="status" content="500" />
      </Head>

      <SimpleHeader />

      <div className="container-xl p-responsive py-9 width-full flex-1">
        <article className="col-md-10 col-lg-7 mx-auto">
          <h1>Ooops!</h1>
          <Lead>It looks like something went wrong.</Lead>
          <p className="f3">
            We track these errors automatically, but if the problem persists please feel free to
            contact us.
          </p>
          <a id="support" href="https://support.github.com" className="btn btn-outline mt-2">
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
    <div className="border-bottom color-border-muted no-print">
      <header
        className="container-xl p-responsive py-3 position-relative d-flex width-full"
        role="banner"
        aria-label="Main"
      >
        <div className="d-flex flex-items-center" style={{ zIndex: 3 }} id="github-logo-mobile">
          <Link href={`/${router.locale}`} aria-hidden="true" tabIndex={-1}>
            <MarkGithubIcon size={32} className="color-fg-default" />
          </Link>

          <Link
            href={`/${router.locale}`}
            className="no-underline h4 color-fg-default no-wrap pl-2"
          >
            GitHub Docs
          </Link>
        </div>
      </header>
    </div>
  )
}

export const SimpleFooter = () => {
  return (
    <footer className="py-6">
      <div className="container-xl px-3 px-md-6">
        <ul className="d-flex flex-wrap list-style-none">
          <li className="d-flex mr-xl-3 color-fg-muted">
            <span>&copy; {new Date().getFullYear()} GitHub, Inc.</span>
          </li>
          <li className="ml-3">
            <a className="text-underline" href="/site-policy/github-terms/github-terms-of-service">
              Terms
            </a>
          </li>
          <li className="ml-3">
            <a
              className="text-underline"
              href="/site-policy/privacy-policies/github-privacy-statement"
            >
              Privacy{' '}
            </a>
          </li>
          <li className="ml-3">
            <a className="text-underline" href="https://www.githubstatus.com/">
              Status
            </a>
          </li>
          <li className="ml-3">
            <a className="text-underline" href="https://github.com/pricing">
              Pricing
            </a>
          </li>
          <li className="ml-3">
            <a className="text-underline" href="https://services.github.com/">
              Expert services
            </a>
          </li>
          <li className="ml-3">
            <a className="text-underline" href="https://github.blog/">
              Blog
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
