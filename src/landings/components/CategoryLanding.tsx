import { useRouter } from 'next/router'
import cx from 'classnames'

import { useCategoryLandingContext } from 'src/frame/components/context/CategoryLandingContext'
import { DefaultLayout } from 'src/frame/components/DefaultLayout'
import { ArticleTitle } from 'src/frame/components/article/ArticleTitle'
import { Lead } from 'src/frame/components/ui/Lead'
import { ClientSideRedirects } from 'src/rest/components/ClientSideRedirects'
import { RestRedirect } from 'src/rest/components/RestRedirect'
import { Breadcrumbs } from 'src/frame/components/page-header/Breadcrumbs'

export const CategoryLanding = () => {
  const router = useRouter()
  const { title, intro, tocItems } = useCategoryLandingContext()

  // tocItems contains directories and its children, we only want the child articles
  const onlyFlatItems = tocItems.flatMap((item) => item.childTocItems || [])

  return (
    <DefaultLayout>
      {router.route === '/[versionId]/rest/[category]' && <RestRedirect />}
      {/* Doesn't matter *where* this is included because it will
      never render anything. It always just return null. */}
      <ClientSideRedirects />

      <div className="container-xl px-3 px-md-6 my-4">
        <div className={cx('d-none d-xl-block mt-3 mr-auto width-full')}>
          <Breadcrumbs />
        </div>
        <ArticleTitle>{title}</ArticleTitle>

        {intro && <Lead data-search="lead">{intro}</Lead>}

        <h2 className="py-5">Spotlight</h2>
        <div className="container-lg clearfix">
          <div className="col-4 float-left border p-4">Spotlight 1</div>
          <div className="col-4 float-left border p-4">Spotlight 2</div>
          <div className="col-4 float-left border p-4">Spotlight 3</div>
        </div>

        <div className="pt-8">
          <div className="py-5 clearfix border-bottom">
            <div className="col-5 float-left p-3">
              <h2>Explore {onlyFlatItems.length} prompt articles</h2>
            </div>
            <div className="col-3 float-left p-4">Searchbar</div>
            <div className="col-1 float-left p-4">Category</div>
            <div className="col-1 float-left p-4">Complexity</div>
            <div className="col-1 float-left p-4">Industry</div>
            <div className="col-1 float-left p-4">Reset</div>
          </div>
          <div className="clearfix gutter-md-spacious">
            {/* TODO: replace with card components */}
            {onlyFlatItems.map((item, index) => (
              <div key={index} className="col-4 float-left p-4">
                <div className="px-3 pb-3 border-bottom">
                  <div>{item.title}</div>
                  <div>{item.intro}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
