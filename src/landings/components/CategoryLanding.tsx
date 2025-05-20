import { useState } from 'react'
import { useRouter } from 'next/router'
import cx from 'classnames'
import { CookBookArticleCard } from './CookBookArticleCard'
import { CookBookFilter } from './CookBookFilter'
import { useTranslation } from 'src/languages/components/useTranslation'
import { DefaultLayout } from 'src/frame/components/DefaultLayout'
import { ArticleTitle } from 'src/frame/components/article/ArticleTitle'
import { Lead } from 'src/frame/components/ui/Lead'
import { useCategoryLandingContext } from 'src/frame/components/context/CategoryLandingContext'
import { ClientSideRedirects } from 'src/rest/components/ClientSideRedirects'
import { RestRedirect } from 'src/rest/components/RestRedirect'
import { Breadcrumbs } from 'src/frame/components/page-header/Breadcrumbs'
import { ArticleCardItems } from 'src/landings/types'

export const CategoryLanding = () => {
  const { t } = useTranslation('cookbook_landing')
  const router = useRouter()
  const { title, intro, tocItems } = useCategoryLandingContext()

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
            return value.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
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

        <h2 className="py-5">{t('spotlight')}</h2>
        <div className="d-md-flex d-sm-block col-md-12">
          <div className="col-md-4">
            <CookBookArticleCard
              image={'/assets/images/copilot-landing/generating_unit_tests.png'}
              title="Generate unit tests"
              description="Copilot Chat can help with generating unit tests for a function."
              spotlight={true}
              url="/copilot/copilot-chat-cookbook/testing-code/generate-unit-tests"
              tags={[]}
            />
          </div>
          <div className="col-md-4">
            <CookBookArticleCard
              image={'/assets/images/copilot-landing/improving_code_readability.png'}
              title="Improving code readability and maintainability"
              description="Learn how to improve your code readability and maintainability."
              spotlight={true}
              url="/copilot/copilot-chat-cookbook/refactoring-code/improving-code-readability-and-maintainability"
              tags={[]}
            />
          </div>
          <div className="col-md-4">
            <CookBookArticleCard
              image={'/assets/images/copilot-landing/debugging_invalid_json.png'}
              title="Debugging invalid JSON"
              description="Copilot can identify and resolve syntax errors or structural issues in JSON data."
              spotlight={true}
              tags={[]}
              url="/copilot/copilot-chat-cookbook/debugging-errors/debugging-invalid-json"
            />
          </div>
        </div>

        <div className="pt-8">
          <div className="py-5 border-bottom">
            <div className="pb-3 mr-5 ml-1 float-xl-left">
              <h2>
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
          <ul className="clearfix d-flex flex-wrap gutter-md-spacious">
            {searchResults.map((item, index) => (
              <li key={index} className="col-md-6 col-lg-4 col-sm-12 list-style-none p-4">
                <CookBookArticleCard
                  title={item.title}
                  description={item.intro!}
                  icon={item.octicon}
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
