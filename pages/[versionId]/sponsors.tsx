import { GetServerSideProps } from 'next'

import {
  MainContextT,
  MainContext,
  getMainContextFromRequest,
} from 'components/context/MainContext'
import { DefaultLayout } from 'components/DefaultLayout'
import {
  getProductLandingContextFromRequest,
  ProductLandingContextT,
  ProductLandingContext,
} from 'components/context/ProductLandingContext'

import { LandingHero } from 'components/landing/LandingHero'
import { FeaturedArticles } from 'components/landing/FeaturedArticles'

type Props = {
  mainContext: MainContextT
  productLandingContext: ProductLandingContextT
}
const SponsorsPage = ({ mainContext, productLandingContext }: Props) => {
  return (
    <MainContext.Provider value={mainContext}>
      <ProductLandingContext.Provider value={productLandingContext}>
        <DefaultLayout>
          <div className="container-xl px-3 px-md-6 pt-3 pb-2">
            <LandingHero />

            <FeaturedArticles />

            {/* <PageSection title="GitHub Sponsors Community">
              <Grid>
                <ArticleList title="Guides"
                  viewAllLink={'/guides/whatever.md'}

                  articles={[
                    '/guide/1/a',
                    {
                      label: 'Something',
                      description: 'other'
                    }
                  ]}
                />

                <ArticleList title="Popular" articles={[]} />
                  
              </Grid>
            </PageSection>

      <PageSection title="All GitHub Sponsors Docs">
        <SiteTreeGrid />
      </PageSection>  */}
          </div>
        </DefaultLayout>
      </ProductLandingContext.Provider>
    </MainContext.Provider>
  )
}

export default SponsorsPage

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const req = context.req as any

  return {
    props: {
      mainContext: getMainContextFromRequest(req),
      productLandingContext: getProductLandingContextFromRequest(req),
    },
  }
}
