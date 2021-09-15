import { GetServerSideProps } from 'next'

import {
  MainContextT,
  MainContext,
  getMainContext,
  useMainContext,
} from 'components/context/MainContext'

import { DefaultLayout } from 'components/DefaultLayout'
import { useTranslation } from 'components/hooks/useTranslation'
import { useVersion } from 'components/hooks/useVersion'
import { LinkExternalIcon } from '@primer/octicons-react'
import { useRouter } from 'next/router'
import { OctocatHeader } from 'components/landing/OctocatHeader'
import { ArticleList } from 'components/landing/ArticleList'
import { Search } from 'components/Search'

type FeaturedLink = {
  href: string
  title: string
  intro: string
}

type Props = {
  mainContext: MainContextT
  popularLinks: Array<FeaturedLink>
  gettingStartedLinks: Array<FeaturedLink>
}
export default function MainLanding({ mainContext, gettingStartedLinks, popularLinks }: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <DefaultLayout>
        <LandingPage gettingStartedLinks={gettingStartedLinks} popularLinks={popularLinks} />
      </DefaultLayout>
    </MainContext.Provider>
  )
}

type LandingPageProps = {
  popularLinks: Array<FeaturedLink>
  gettingStartedLinks: Array<FeaturedLink>
}
function LandingPage(props: LandingPageProps) {
  const router = useRouter()
  const { gettingStartedLinks, popularLinks } = props
  const { activeProducts, isFPT } = useMainContext()
  const { currentVersion } = useVersion()
  const { t } = useTranslation(['homepage', 'search', 'toc'])
  return (
    <div>
      {/* <!-- Hero --> */}
      <section id="landing" className="color-bg-tertiary">
        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <Search autoFocus={true} variant="expanded" isOverlay={false}>
          {({ SearchInput, SearchResults }) => {
            return (
              <div className="container-xl px-3 px-md-6 pb-6 pb-lg-9">
                <div className="gutter gutter-xl-spacious pt-6 pt-lg-0 d-lg-flex flex-row-reverse flex-items-center">
                  <div className="col-lg-7">
                    <OctocatHeader />
                  </div>
                  <div className="col-lg-5 mt-6">
                    <h1 className="font-weight-semibold mb-3">{t('search:need_help')}</h1>
                    {SearchInput}
                  </div>
                </div>

                <div className="mt-3">{SearchResults}</div>
              </div>
            )
          }}
        </Search>
      </section>

      {/* <!-- Explore by product --> */}
      <section className="container-xl pb-lg-4 my-8 px-3 px-md-6">
        <div className="">
          <h2 className="f5 text-normal color-text-secondary text-md-center mb-4">
            {t('explore_by_product')}
          </h2>
          <div className="d-flex flex-wrap gutter gutter-xl-spacious">
            {activeProducts.map((product) => {
              if (!isFPT && !product.versions?.includes(currentVersion) && !product.external) {
                return null
              }

              const href = `${!product.external ? `/${router.locale}` : ''}${
                product.versions?.includes(currentVersion) && !isFPT
                  ? `/${currentVersion}/${product.id}`
                  : product.href
              }`
              return (
                <div className="d-flex flex-column col-12 col-sm-6 col-lg-3 pb-4" key={product.id}>
                  <a
                    className="f4 flex-auto d-flex flex-items-center ws-normal btn btn-outline py-3"
                    href={href}
                    target={product.external ? '_blank' : undefined}
                  >
                    {product.name}
                    {product.external && (
                      <span className="ml-1">
                        <LinkExternalIcon />
                      </span>
                    )}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="px-3 px-md-6 container-xl">
        <div className="container-xl">
          <div className="gutter gutter-xl-spacious clearfix">
            <div className="col-12 col-lg-6 mb-md-4 mb-lg-0 float-left">
              <ArticleList
                title={t('toc:getting_started')}
                variant="spaced"
                articles={gettingStartedLinks}
              />
            </div>

            <div className="col-12 col-lg-6 float-left">
              <ArticleList title={t('toc:popular')} variant="spaced" articles={popularLinks} />
            </div>
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
      gettingStartedLinks: req.context.featuredLinks.gettingStarted.map(
        ({ title, href, intro }: any) => ({ title, href, intro })
      ),
      popularLinks: req.context.featuredLinks.popular.map(({ title, href, intro }: any) => ({
        title,
        href,
        intro,
      })),
    },
  }
}
