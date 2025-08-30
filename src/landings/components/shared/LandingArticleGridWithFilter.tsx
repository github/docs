import { useState, useRef } from 'react'
import { TextInput, ActionMenu, ActionList, Button, Box } from '@primer/react'
import { SearchIcon } from '@primer/octicons-react'
import cx from 'classnames'

import { Link } from '@/frame/components/Link'
import { ArticleCardItems, ChildTocItem } from '@/landings/types'
import { getOcticonComponent } from '@/landings/lib/octicons'

import styles from './LandingArticleGridWithFilter.module.scss'

type ArticleGridProps = {
  flatArticles: ArticleCardItems
}

export const ArticleGrid = ({ flatArticles }: ArticleGridProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)

  // Extract unique categories from the articles
  const categories: string[] = [
    'All',
    ...new Set(flatArticles.flatMap((item) => item.category || [])),
  ]

  const applyFilters = () => {
    let results = flatArticles

    if (searchQuery) {
      results = results.filter((token) => {
        return Object.values(token).some((value) => {
          if (typeof value === 'string') {
            return value.toLowerCase().includes(searchQuery.toLowerCase())
          } else if (Array.isArray(value)) {
            return value.some((item) => {
              if (typeof item === 'string') {
                return item.toLowerCase().includes(searchQuery.toLowerCase())
              }
            })
          }
          return false
        })
      })
    }

    if (selectedCategory !== 'All') {
      results = results.filter((item) => item.category?.includes(selectedCategory))
    }

    return results
  }

  const filteredResults = applyFilters()

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleFilter = (option: string, index: number) => {
    setSelectedCategory(option)
    setSelectedCategoryIndex(index)
  }

  const handleResetFilter = () => {
    setSearchQuery('')
    setSelectedCategory('All')
    setSelectedCategoryIndex(0)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div>
      <h2
        style={{
          marginTop: '3rem',
        }}
      >
        TODO: Article grid placeholder
      </h2>
      {/* Filter and Search Controls */}
      <div className="d-lg-flex d-sm-block border-bottom pb-4 mb-4">
        <div className="col-12 mr-2">
          <form onSubmit={(e) => e.preventDefault()}>
            <TextInput
              leadingVisual={SearchIcon}
              className="m-1"
              sx={{ minWidth: ['stretch', 'stretch', 'stretch', 'stretch'] }}
              placeholder="Search articles..."
              ref={inputRef}
              autoComplete="false"
              onChange={(e) => {
                const query = e.target.value || ''
                handleSearch(query)
              }}
            />
          </form>
        </div>
        <div className="d-flex flex-wrap flex-md-nowrap">
          <ActionMenu>
            <ActionMenu.Button className="col-md-1 col-sm-2 m-1">
              <Box
                sx={{
                  color: 'fg.muted',
                  display: 'inline-block',
                }}
              >
                Category:
              </Box>{' '}
              {categories[selectedCategoryIndex]}
            </ActionMenu.Button>
            <ActionMenu.Overlay width="auto">
              <ActionList selectionVariant="single">
                {categories.map((category, index) => (
                  <ActionList.Item
                    key={index}
                    selected={index === selectedCategoryIndex}
                    onSelect={() => handleFilter(category, index)}
                  >
                    {category}
                  </ActionList.Item>
                ))}
              </ActionList>
            </ActionMenu.Overlay>
          </ActionMenu>

          <Button
            variant="invisible"
            className="col-md-1 col-sm-2 mt-1"
            onClick={handleResetFilter}
          >
            Reset filters
          </Button>
        </div>
      </div>

      {/* Results Grid */}
      <div className={styles.articleGrid}>
        {filteredResults.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
        {filteredResults.length === 0 && (
          <div className="col-12 text-center p-4">
            <p className="color-fg-muted">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}

type ArticleCardProps = {
  article: ChildTocItem
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const IconComponent = getOcticonComponent(article.octicon || undefined)

  return (
    <Box className={cx(styles.articleCard, 'Box p-4')} sx={{ height: '100%' }}>
      <div className={styles.cardContent}>
        <div className="d-flex flex-items-start mb-3">
          {IconComponent && (
            <IconComponent size={24} className="mr-3 mt-1 color-fg-accent flex-shrink-0" />
          )}
          <div className="flex-1">
            <h3 className="h4 mb-2">
              <Link href={article.fullPath} className="color-fg-default">
                {article.title}
              </Link>
            </h3>
            {article.intro && <p className="color-fg-muted mb-3 f6">{article.intro}</p>}
          </div>
        </div>

        {/* Categories */}
        {article.category && article.category.length > 0 && (
          <div className="d-flex flex-wrap gap-1 mb-3">
            {article.category.map((cat, index) => (
              <span key={index} className="Label Label--accent Label--small">
                {cat}
              </span>
            ))}
          </div>
        )}

        {/* Complexity */}
        {article.complexity && article.complexity.length > 0 && (
          <div className="d-flex flex-wrap gap-1 mb-3">
            {article.complexity.map((comp, index) => (
              <span key={index} className="Label Label--success Label--small">
                {comp}
              </span>
            ))}
          </div>
        )}

        <div className={styles.cardFooter}>
          <Link href={article.fullPath} className="btn-link f6">
            Read article →
          </Link>
        </div>
      </div>
    </Box>
  )
}
