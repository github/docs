import { SimpleHeader, SimpleFooter } from 'components/GenericError'
import Head from 'next/head'
import { CommentDiscussionIcon } from '@primer/octicons-react'
import { useVersion } from 'components/hooks/useVersion'

const Custom404 = () => {
  const { isEnterprise } = useVersion()
  return (
    <div className="min-h-screen d-flex flex-column">
      <Head>
        <title>404 - Page not found</title>
        <meta name="status" content="404" />
      </Head>

      <SimpleHeader />

      <div className="container-xl p-responsive py-6 width-full flex-1">
        <article className="col-md-10 col-lg-7 mx-auto">
          <h1 className="mb-3 pb-3 border-bottom">Ooops!</h1>
          <p className="lead-mktg">It looks like this page doesn't exist.</p>
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

export default Custom404
