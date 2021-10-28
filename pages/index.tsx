import { GetServerSideProps } from 'next'

import {
  MainContextT,
  MainContext,
  getMainContext,
  useMainContext,
  ProductT,
  ProductGroupT,
} from 'components/context/MainContext'

import React from 'react'
import { DefaultLayout } from 'components/DefaultLayout'
import { useTranslation } from 'components/hooks/useTranslation'
import { useVersion } from 'components/hooks/useVersion'
import { useRouter } from 'next/router'
import { OctocatHeader } from 'components/landing/OctocatHeader'
import { ArticleList } from 'components/landing/ArticleList'
import { Search } from 'components/Search'
import { Link } from 'components/Link'
import * as Octicons from '@primer/octicons-react'

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
  const { productGroups, isFPT } = useMainContext()
  const { currentVersion } = useVersion()
  const { t } = useTranslation(['homepage', 'search', 'toc'])

  function showProduct(product: ProductT) {
    return isFPT || product.versions?.includes(currentVersion) || product.external
  }

  function href(product: ProductT) {
    return `${!product.external ? `/${router.locale}` : ''}${
      product.versions?.includes(currentVersion) && !isFPT
        ? `/${currentVersion}/${product.id}`
        : product.href
    }`
  }

  const groupIcon = {
    height: '22px',
  }

  function icon(group: ProductGroupT) {
    if (group.icon) {
      return (
        <div className="pr-3">
          <img src={group.icon} alt={group.name} style={groupIcon}></img>
        </div>
      )
    } else if (group.octicon) {
      const octicon: React.FunctionComponent = (
        Octicons as { [name: string]: React.FunctionComponent }
      )[group.octicon] as React.FunctionComponent

      return (
        <div className="pr-3">
          {React.createElement(octicon, groupIcon as React.Attributes, null)}
        </div>
      )
    }
  }

  return (
    <div>
      {/* <!-- Hero --> */}
      <section id="landing" className="color-bg-tertiary">
        {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
        <Search autoFocus={true} variant="expanded" isOverlay={false}>
          {({ SearchInput, SearchResults }) => {
            return (
              <div className="container-xl px-3 px-md-6 pb-6 pb-lg-0">
                <div className="gutter gutter-xl-spacious pt-6 pt-lg-0 d-lg-flex flex-row-reverse flex-items-center">
                  <div className="col-lg-7">
                    <OctocatHeader />
                  </div>
                  <div className="col-lg-5 mt-6">
                    <h1 className="text-semibold mb-3">{t('search:need_help')}</h1>
                    {SearchInput}
                  </div>
                </div>

                <div className="mt-3">{SearchResults}</div>
              </div>
            )
          }}
        </Search>
      </section>

      {/* <!-- Show all the child groups --> */}
      <section className="container-xl pb-lg-4 mt-6 px-3 px-md-6" data-testid="product">
        <div className="">
          <div className="d-flex flex-wrap gutter gutter-xl-spacious">
            {productGroups.map((group) => {
              return (
                <div className="d-flex flex-column col-12 col-sm-6 col-lg-4 pb-4" key={group.name}>
                  <div className="flex-auto ws-normal">
                    <div className="d-flex flex-items-center">
                      {icon(group)}

                      <div>
                        <h3>{group.name}</h3>
                      </div>
                    </div>

                    <div className="pt-2 mb-4 text-normal">
                      <ul className="list-style-none">
                        {group.children.map((product) => {
                          if (!showProduct(product)) {
                            return null
                          }

                          return (
                            <li key={product.name} className="pt-2">
                              <Link
                                href={href(product)}
                                target={product.external ? '_blank' : undefined}
                              >
                                {product.name}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="mt-6 px-3 px-md-6 container-xl">
        <div className="container-xl">
          <div className="gutter gutter-xl-spacious clearfix">
            <div className="col-12 col-lg-6 mb-md-4 mb-lg-0 float-left">
              <ArticleList title={t('toc:getting_started')} articles={gettingStartedLinks} />
            </div>

            <div className="col-12 col-lg-6 float-left">
              <ArticleList title={t('toc:popular')} articles={popularLinks} />
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
