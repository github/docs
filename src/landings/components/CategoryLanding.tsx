import { useState } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'
import { CookBookArticleCard } from './CookBookArticleCard'
import { CookBookFilter } from './CookBookFilter'
import { useTranslation } from '@/languages/components/useTranslation'
import { DefaultLayout } from '@/frame/components/DefaultLayout'
import { ArticleTitle } from '@/frame/components/article/ArticleTitle'
import { Lead } from '@/frame/components/ui/Lead'
import { useCategoryLandingContext } from '@/frame/components/context/CategoryLandingContext'
import { ClientSideRedirects } from '@/rest/components/ClientSideRedirects'
import { RestRedirect } from '@/rest/components/RestRedirect'
import { Breadcrumbs } from '@/frame/components/page-header/Breadcrumbs'
import { ArticleCardItems } from '@/landings/types'
import { UtmPreserver } from '@/frame/components/UtmPreserver'

export const CategoryLanding = () => {
  const { t } = useTranslation('cookbook_landing')
  const router = useRouter()
  const { title, intro, tocItems, spotlight } = useCategoryLandingContext()

  // tocItems contains directories and its children, we only want the child articles
  const onlyFlatItems: ArticleCardItems = tocItems.flatMap((item) => item.childTocItems || [])

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedComplexity, setSelectedComplexity] = useState('All')

  const applyFilters = () => {
    let results = onlyFlatItems

    if (searchQuery) {
      results = results.filter((token) => {
        return Object.values(token).some((value) => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchQuery.toLowerCase())
          } else if (Array.isArray(value)) {
            return value.some(
              (item) =>
                typeof item === 'string' && item.toLowerCase().includes(searchQuery.toLowerCase()),
            )
          }
          return false
        })
      })
    }

    if (selectedCategory !== 'All') {
      results = results.filter((item) => item.category?.includes(selectedCategory))
    }

    if (selectedComplexity !== 'All') {
      results = results.filter((item) => item.complexity?.includes(selectedComplexity))
    }

    return results
  }

  const searchResults = applyFilters()

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleFilter = (option: string, type: 'category' | 'complexity') => {
    if (type === 'category') {
      setSelectedCategory(option)
    } else if (type === 'complexity') {
      setSelectedComplexity(option)
    }
  }

  const handleResetFilter = () => {
    setSearchQuery('')
    setSelectedCategory('All')
    setSelectedComplexity('All')
  }

  // Helper function to find article data from tocItems
  const findArticleData = (articlePath: string) => {
    const cleanPath = articlePath.startsWith('/') ? articlePath.slice(1) : articlePath
    return onlyFlatItems.find(
      (item) =>
        item.fullPath?.endsWith(cleanPath) ||
        item.fullPath?.includes(cleanPath.split('/').pop() || ''),
    )
  }

  // Process spotlight items to get complete data
  const processedSpotlight =
    spotlight?.map((spotlightItem) => {
      const articleData = findArticleData(spotlightItem.article)
      return {
        article: spotlightItem.article,
        title: articleData?.title || 'Unknown Article',
        description: articleData?.intro || '',
        url: articleData?.fullPath || spotlightItem.article,
        image: spotlightItem.image,
      }
    }) || []

  return (
    <DefaultLayout>
      <UtmPreserver />
      {router.route === '/[versionId]/rest/[category]' && <RestRedirect />}
      {/* Doesn't matter *where* this is included because it will
      never render anything. It always just return null. */}
      <ClientSideRedirects />

      <div className="container-xl px-3 px-md-6 my-4" data-search="article-body">
        <div className={cx('d-none d-xl-block mt-3 mr-auto width-full')}>
          <Breadcrumbs />
        </div>
        <ArticleTitle>{title}</ArticleTitle>
        {intro && <Lead data-search="lead">{intro}</Lead>}

        {!spotlight || spotlight.length === 0 ? (
          <div className="p-4 border border-danger rounded">
            <h3 className="text-danger">Configuration Error</h3>
            <p>
              Category landing pages with <code>layout: category-landing</code> must define a{' '}
              <code>spotlight</code> property in the frontmatter. Each spotlight item requires both
              an <code>article</code> path and an <code>image</code> path.
            </p>
          </div>
        ) : (
          <>
            <h2 className="py-5">{t('spotlight')}</h2>
            <div className="d-md-flex d-sm-block col-md-12">
              {processedSpotlight.slice(0, 3).map((item) => (
                <div key={item.article} className="col-md-4">
                  <CookBookArticleCard
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    spotlight={true}
                    url={item.url}
                    tags={[]}
                  />
                </div>
              ))}
            </div>
          </>
        )}

        <div className="pt-8">
          <div className="py-5 border-bottom">
            <div className="pb-3 mr-5 ml-1 float-xl-left">
              <h2 aria-live="polite">
                {t('explore_articles').replace('{{ number }}', searchResults.length.toString())}
              </h2>
            </div>
            <div>
              <CookBookFilter
                tokens={onlyFlatItems}
                onSearch={handleSearch}
                handleFilter={handleFilter}
                handleResetFilter={handleResetFilter}
              />
            </div>
          </div>
          <ul className="clearfix d-flex flex-wrap gutter-md-spacious" aria-live="polite">
            {searchResults.map((item, index) => (
              <li key={index} className="col-md-6 col-lg-4 col-sm-12 list-style-none p-4">
                <CookBookArticleCard
                  title={item.title}
                  description={item.intro!}
                  icon={item.octicon ?? undefined}
                  tags={[
                    ...(item.industry || []),
                    ...(item.category || []),
                    ...(item.complexity || []),
                  ]}
                  url={item.fullPath}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DefaultLayout>
  )
}
