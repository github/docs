import React from 'react'
import type { GetServerSideProps } from 'next'

import {
  MainContextT,
  MainContext,
  getMainContext,
  addUINamespaces,
} from 'src/frame/components/context/MainContext'

import { DefaultLayout } from 'src/frame/components/DefaultLayout'
import { useTranslation } from 'src/languages/components/useTranslation'
import { ArticleList } from 'src/landings/components/ArticleList'
import { HomePageHero } from 'src/landings/components/HomePageHero'
import type { ProductGroupT } from 'src/landings/components/ProductSelections'
import { ProductSelections } from 'src/landings/components/ProductSelections'

type FeaturedLink = {
  href: string
  title: string
  intro: string
}

type Props = {
  mainContext: MainContextT
  popularLinks: Array<FeaturedLink>
  gettingStartedLinks: Array<FeaturedLink>
  productGroups: Array<ProductGroupT>
}

export default function MainHomePage({
  mainContext,
  gettingStartedLinks,
  popularLinks,
  productGroups,
}: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <DefaultLayout>
        <HomePage
          gettingStartedLinks={gettingStartedLinks}
          popularLinks={popularLinks}
          productGroups={productGroups}
        />
      </DefaultLayout>
    </MainContext.Provider>
  )
}

type HomePageProps = {
  popularLinks: Array<FeaturedLink>
  gettingStartedLinks: Array<FeaturedLink>
  productGroups: Array<ProductGroupT>
}
function HomePage(props: HomePageProps) {
  const { gettingStartedLinks, popularLinks, productGroups } = props
  const { t } = useTranslation(['toc'])

  return (
    <div>
      <HomePageHero />
      <ProductSelections productGroups={productGroups} />
      <div className="mt-6 px-3 px-md-6 container-xl">
        <div className="container-xl">
          <div className="gutter gutter-xl-spacious clearfix">
            <div className="col-12 col-lg-6 mb-md-4 mb-lg-0 float-left">
              <ArticleList title={t('getting_started')} articles={gettingStartedLinks} />
            </div>

            <div className="col-12 col-lg-6 float-left">
              <ArticleList title={t('popular')} articles={popularLinks} />
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

  const mainContext = await getMainContext(req, res)
  addUINamespaces(req, mainContext.data.ui, ['homepage', 'product_landing'])

  return {
    props: {
      mainContext,
      productGroups: req.context.productGroups,
      gettingStartedLinks: req.context.featuredLinks.gettingStarted.map(
        ({ title, href, intro }: any) => ({ title, href, intro }),
      ),
      popularLinks: req.context.featuredLinks.popular.map(({ title, href, intro }: any) => ({
        title,
        href,
        intro,
      })),
    },
  }
}
