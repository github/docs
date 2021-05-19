import Head from 'next/head'

import { SidebarNav } from 'components/SidebarNav'
import { Header } from 'components/Header'
import { SmallFooter } from 'components/SmallFooter'
import { ScrollButton } from 'components/ScrollButton'
import { SupportSection } from 'components/SupportSection'
import { DeprecationBanner } from 'components/DeprecationBanner'
import { useMainContext } from 'components/context/MainContext'

type Props = { children?: React.ReactNode }
export const DefaultLayout = (props: Props) => {
  const { builtAssets, expose } = useMainContext()
  return (
    <div className="d-lg-flex">
      <Head>
        <link rel="stylesheet" href={builtAssets.main.css} />
        <script id="expose" type="application/json" dangerouslySetInnerHTML={{ __html: expose }} />
        <script src={builtAssets.main.js} />
      </Head>
      <SidebarNav />

      <main className="width-full">
        <Header />
        <DeprecationBanner />

        {props.children}

        <SupportSection />
        <SmallFooter />
        <ScrollButton />
      </main>
    </div>
  )
}
