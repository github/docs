import React, { useState, useRef, useEffect, useMemo } from 'react'
import { TextInput, ActionMenu, ActionList, Token, Pagination } from '@primer/react'
import { SearchIcon } from '@primer/octicons-react'
import cx from 'classnames'

import { Link } from '@/frame/components/Link'
import { useTranslation } from '@/languages/components/useTranslation'
import { ArticleCardItems, ChildTocItem, TocItem } from '@/landings/types'
import { LandingType } from '@/landings/context/LandingContext'

import styles from './LandingArticleGridWithFilter.module.scss'

type ArticleGridProps = {
  tocItems: TocItem[]
  includedCategories?: string[]
  landingType: LandingType
}

const ALL_CATEGORIES = 'all_categories'

// Helper function to recursively flatten nested articles
// Excludes index pages (pages with childTocItems)
const flattenArticlesRecursive = (articles: (TocItem | ChildTocItem)[]): ArticleCardItems => {
  const flattened: ArticleCardItems = []

  for (const article of articles) {
    // If the article has children, recursively process them but don't include the parent (index page)
    if (article.childTocItems && article.childTocItems.length > 0) {
      flattened.push(...flattenArticlesRecursive(article.childTocItems))
    } else {
      // Only add articles that don't have children (actual article pages, not index pages)
      flattened.push(article as ChildTocItem)
    }
  }

  return flattened
}

// Wrapper function that flattens and sorts alphabetically by title (only once)
const flattenArticles = (articles: (TocItem | ChildTocItem)[]): ArticleCardItems => {
  const flattened = flattenArticlesRecursive(articles)
  return flattened.sort((a, b) => a.title.localeCompare(b.title))
}

// Hook to get current articles per page based on screen size
const useResponsiveArticlesPerPage = () => {
  const [articlesPerPage, setArticlesPerPage] = useState(9) // Default to desktop

  useEffect(() => {
    const updateArticlesPerPage = () => {
      const width = window.innerWidth
      if (width < 768) {
        // Mobile: 1 column, show 8 articles per page
        setArticlesPerPage(8)
      } else if (width < 1012) {
        // Tablet: 2 columns, show 8 articles per page (4 rows × 2 columns)
        setArticlesPerPage(8)
      } else {
        // Desktop: 3 columns, show 9 articles per page (3 rows × 3 columns)
        setArticlesPerPage(9)
      }
    }

    updateArticlesPerPage()
    window.addEventListener('resize', updateArticlesPerPage)
    return () => window.removeEventListener('resize', updateArticlesPerPage)
  }, [])

  return articlesPerPage
}

export const ArticleGrid = ({ tocItems, includedCategories, landingType }: ArticleGridProps) => {
  const { t } = useTranslation('product_landing')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(ALL_CATEGORIES)
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = useResponsiveArticlesPerPage()

  const inputRef = useRef<HTMLInputElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  // Recursively flatten all articles from tocItems, including both direct children and nested articles
  const allArticles = useMemo(() => flattenArticles(tocItems), [tocItems])

  // Filter articles based on includedCategories for discovery landing pages
  // For bespoke landing pages, show all articles regardless of includedCategories
  const filteredArticlesByLandingType = useMemo(() => {
    if (landingType === 'discovery' && includedCategories && includedCategories.length > 0) {
      // For discovery pages, only include articles that have at least one matching category
      return allArticles.filter((article) => {
        if (!article.category || article.category.length === 0) return false
        return article.category.some((cat) =>
          includedCategories.some((included) => included.toLowerCase() === cat.toLowerCase()),
        )
      })
    }
    // For bespoke pages or when includedCategories is empty/undefined, return all articles
    return allArticles
  }, [allArticles, includedCategories, landingType])

  // Reset to first page when articlesPerPage changes (screen size changes)
  useEffect(() => {
    setCurrentPage(1)
  }, [articlesPerPage])

  // Extract unique categories for dropdown from filtered articles (so all dropdown options have matching articles)
  const categories: string[] = [
    ALL_CATEGORIES,
    ...Array.from(
      new Set(filteredArticlesByLandingType.flatMap((item) => (item.category || []) as string[])),
    )
      .filter((category: string) => {
        if (!includedCategories || includedCategories.length === 0) return true
        // Case-insensitive comparison for dropdown filtering
        const lowerCategory = category.toLowerCase()
        return includedCategories.some((included) => included.toLowerCase() === lowerCategory)
      })
      .sort((a, b) => a.localeCompare(b)),
  ]

  const applyFilters = () => {
    let results = filteredArticlesByLandingType

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

    if (selectedCategory !== ALL_CATEGORIES) {
      results = results.filter((item) => item.category?.includes(selectedCategory))
    }

    return results
  }

  const filteredResults = applyFilters()

  // Calculate pagination
  const totalPages = Math.ceil(filteredResults.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const paginatedResults = filteredResults.slice(startIndex, startIndex + articlesPerPage)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1) // Reset to first page when searching
  }

  const handleFilter = (option: string, index: number) => {
    setSelectedCategory(option)
    setSelectedCategoryIndex(index)
    setCurrentPage(1) // Reset to first page when filtering
  }

  const handlePageChange = (e: React.MouseEvent, pageNumber: number) => {
    e.preventDefault()
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
      if (headingRef.current) {
        const elementPosition = headingRef.current.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - 140 // 140px offset from top
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <div data-testid="article-grid-container">
      {/* Filter and Search Controls */}
      <div className={styles.filterHeader} data-testid="filter-header">
        {/* Title and Dropdown Row */}
        <div className={styles.titleAndDropdownRow}>
          {/* Title */}
          <h2 ref={headingRef} className={cx(styles.headerTitle, styles.headerTitleText)}>
            {t('article_grid.heading')}
          </h2>

          {/* Category Dropdown */}
          <div className={styles.categoryDropdown}>
            <ActionMenu>
              <ActionMenu.Button>
                {categories[selectedCategoryIndex] === ALL_CATEGORIES
                  ? t('article_grid.all_categories')
                  : categories[selectedCategoryIndex]}
              </ActionMenu.Button>
              <ActionMenu.Overlay width="auto">
                <ActionList selectionVariant="single">
                  {categories.map((category, index) => (
                    <ActionList.Item
                      key={index}
                      selected={index === selectedCategoryIndex}
                      onSelect={() => handleFilter(category, index)}
                    >
                      {category === ALL_CATEGORIES ? t('article_grid.all_categories') : category}
                    </ActionList.Item>
                  ))}
                </ActionList>
              </ActionMenu.Overlay>
            </ActionMenu>
          </div>
        </div>

        {/* Search */}
        <div className={styles.searchContainer}>
          <form onSubmit={(e) => e.preventDefault()}>
            <TextInput
              leadingVisual={SearchIcon}
              placeholder={t('article_grid.search_articles')}
              ref={inputRef}
              autoComplete="false"
              onChange={(e) => {
                const query = e.target.value || ''
                handleSearch(query)
              }}
            />
          </form>
        </div>
      </div>

      {/* Results Grid */}
      <div className={styles.articleGrid} data-testid="article-grid">
        {paginatedResults.map((article, index) => (
          <ArticleCard key={startIndex + index} article={article} />
        ))}
        {filteredResults.length === 0 && (
          <div className={styles.noArticlesContainer} data-testid="no-articles-message">
            <p className={styles.noArticlesText}>{t('article_grid.no_articles_found')}</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className={styles.paginationContainer}>
          <div className={styles.showingResults}>
            {t('article_grid.showing_results')
              .replace('{start}', String(startIndex + 1))
              .replace(
                '{end}',
                String(Math.min(startIndex + articlesPerPage, filteredResults.length)),
              )
              .replace('{total}', String(filteredResults.length))}
          </div>
          <Pagination
            pageCount={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  )
}

type ArticleCardProps = {
  article: ChildTocItem
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link
      href={article.fullPath}
      className={cx(
        styles.articleCard,
        styles.articleCardBox,
        'border',
        'border-default',
        'rounded-2',
      )}
      data-testid="article-card"
    >
      <div className={styles.tagsContainer}>
        {article.category &&
          article.category.map((cat) => <Token key={cat} text={cat} className="mr-1 mb-2" />)}
      </div>

      <h3 className={styles.cardTitle}>
        <span className={styles.cardTitleLink}>{article.title}</span>
      </h3>

      {article.intro && <div className={styles.cardIntro}>{article.intro}</div>}
    </Link>
  )
}
