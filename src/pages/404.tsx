import { SimpleHeader, SimpleFooter } from 'components/GenericError'
import Head from 'next/head'
import { CommentDiscussionIcon } from '@primer/octicons-react'
import { Lead } from 'components/ui/Lead'

const Custom404 = () => {
  return (
    <div className="min-h-screen d-flex flex-column">
      <Head>
        <title>404 - Page not found</title>
        <meta name="status" content="404" />
      </Head>

      <SimpleHeader />

      <div className="container-xl p-responsive py-6 width-full flex-1">
        <article className="col-md-10 col-lg-7 mx-auto">
          <h1>Ooops!</h1>
          <Lead>It looks like this page doesn't exist.</Lead>
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

export default Custom404
