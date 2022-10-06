import { GetServerSideProps } from 'next'
import { BeakerIcon, ZapIcon } from '@primer/octicons-react'

import { MainContextT, MainContext, getMainContext } from 'components/context/MainContext'

import {
  PlaygroundContextProvider,
  usePlaygroundContext,
} from 'components/context/PlaygroundContext'
import { PlaygroundArticle } from 'components/playground/PlaygroundArticle'

import { Editor } from 'components/playground/editor/Editor'
import { DefaultLayout } from 'components/DefaultLayout'
import { CodeLanguagePicker } from 'components/playground/CodeLanguagePicker'
import { Link } from 'components/Link'
import { useRouter } from 'next/router'
import { Callout } from 'components/ui/Callout'
import { GenericError } from 'components/GenericError'

type Props = {
  mainContext: MainContextT
}
export default function PlaygroundArticlePage({ mainContext }: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <DefaultLayout>
        <PlaygroundContextProvider>
          <PageInner />
        </PlaygroundContextProvider>
      </DefaultLayout>
    </MainContext.Provider>
  )
}

function PageInner() {
  const router = useRouter()
  const { article } = usePlaygroundContext()

  if (!article) {
    return <GenericError />
  }

  return (
    <div className="p-responsive my-5 mx-auto" style={{ maxWidth: 1600, minWidth: 768 }}>
      <div className="d-flex">
        <article className="col-6 ml-lg-3 mr-3">
          <Callout variant="info">
            <p className="d-flex">
              <span className="mr-3 mt-1">
                <BeakerIcon size={18} />
              </span>
              <span>
                You've found one of our experimental articles! Have ideas or feedback for how we can
                further improve this article? Let us know{' '}
                <Link href="https://github.com/github/docs/discussions/9369" target="_blank">
                  in the discussion
                </Link>
                .
              </span>
            </p>
          </Callout>
          <PlaygroundArticle />
        </article>

        <div className="col-6">
          <div className="fix position-sticky mt-3" style={{ top: '6.5em' }}>
            <div className="d-flex flex-justify-between flex-items-center mb-3">
              <CodeLanguagePicker />
              <div className="flash">
                <ZapIcon className="mr-2" />
                <Link href={`/${router.locale}${article.originalArticle}`}>
                  Switch to non-interactive article
                </Link>
              </div>
            </div>

            <Editor article={article} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any
  const res = context.res as any

  return {
    props: {
      mainContext: getMainContext(req, res),
    },
  }
}
