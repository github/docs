import { useRouter } from 'next/router'
import cx from 'classnames'
import { CookBookArticleCard } from './CookBookArticleCard'
import { CookBookFilter } from './CookBookFilter'

//import { useTranslation } from 'src/languages/components/useTranslation'
import { DefaultLayout } from 'src/frame/components/DefaultLayout'
import { ArticleTitle } from 'src/frame/components/article/ArticleTitle'
import { Lead } from 'src/frame/components/ui/Lead'
import { useCategoryLandingContext } from 'src/frame/components/context/CategoryLandingContext'
import { ClientSideRedirects } from 'src/rest/components/ClientSideRedirects'
import { RestRedirect } from 'src/rest/components/RestRedirect'
import { Breadcrumbs } from 'src/frame/components/page-header/Breadcrumbs'

export const CategoryLanding = () => {
  const router = useRouter()
  //const { t } = useTranslation('toc')
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
        <div className="d-md-flex d-sm-block">
          <CookBookArticleCard image="DeleteMe" spotlight={true} />
          <CookBookArticleCard image="DeleteMe" spotlight={true} />
          <CookBookArticleCard image="DeleteMe" spotlight={true} />
        </div>

        <div className="pt-8">
          <div className="py-5 border-bottom">
            <div className="col-lg-4 col-sm-12 float-md-left pb-3 mr-5 ml-1">
              <h2>Explore {onlyFlatItems.length} prompt articles</h2>
            </div>
            <div>
              <CookBookFilter />
            </div>
          </div>
          <ul className="clearfix gutter-md-spacious">
            {onlyFlatItems.map((item, index) => (
              <li key={index} className="col-md-4 col-sm-12 list-style-none float-left p-4">
                <CookBookArticleCard
                  title={item.title}
                  description={item.intro}
                  icon={item.octicon}
                  tags={[
                    ...(item.industry || []),
                    ...(item.category || []),
                    ...(item.complexity || []),
                  ]}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DefaultLayout>
  )
}
