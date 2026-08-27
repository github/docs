import type { GetServerSideProps } from 'next'
import type { Response } from 'express'

import {
  MainContextT,
  MainContext,
  getMainContext,
  addUINamespaces,
} from '@/frame/components/context/MainContext'

import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { HomePageHero } from '@/landings/components/HomePageHero'
import type { ProductGroupT } from '@/landings/components/ProductSelections'
import { ProductSelections } from '@/landings/components/ProductSelections'
import type { ExtendedRequest, FeaturedLinkExpanded } from '@/types'
import styles from './home.module.scss'

type FeaturedLink = {
  href: string
  title: string
  intro: string
}

type Props = {
  mainContext: MainContextT
  // Retained in getServerSideProps so the "Getting started" / "Popular" lists
  // can be restored later; the Docs 2026 homepage body is just the grid.
  popularLinks: Array<FeaturedLink>
  gettingStartedLinks: Array<FeaturedLink>
  productGroups: Array<ProductGroupT>
}

export default function MainHomePage({ mainContext, productGroups }: Props) {
  return (
    <MainContext.Provider value={mainContext}>
      <DefaultLayout>
        <HomePage productGroups={productGroups} />
      </DefaultLayout>
    </MainContext.Provider>
  )
}

type HomePageProps = {
  productGroups: Array<ProductGroupT>
}
function HomePage(props: HomePageProps) {
  const { productGroups } = props

  return (
    <div>
      <HomePageHero />
      <div className={styles.sectionGap} />
      <ProductSelections productGroups={productGroups} />
      <div className={styles.sectionEnd} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as unknown as ExtendedRequest
  const res = context.res as unknown as Response

  const mainContext = await getMainContext(req, res)
  addUINamespaces(req, mainContext.data.ui, ['homepage', 'product_landing'])

  return {
    props: {
      mainContext,
      productGroups: (req.context!.productGroups || []) as unknown as ProductGroupT[],
      gettingStartedLinks: (req.context!.featuredLinks?.gettingStarted || []).map(
        ({ title, href, intro }: FeaturedLinkExpanded) => ({ title, href, intro: intro || '' }),
      ),
      popularLinks: (req.context!.featuredLinks?.popular || []).map(
        ({ title, href, intro }: FeaturedLinkExpanded) => ({ title, href, intro: intro || '' }),
      ),
    },
  }
}
