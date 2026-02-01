import React, { useState, useRef, useEffect, useMemo } from 'react'
import { TextInput, ActionMenu, ActionList, Token, Pagination } from '@primer/react'
import { SearchIcon } from '@primer/octicons-react'
import cx from 'classnames'

import { Link } from '@/frame/components/Link'
import { useTranslation } from '@/languages/components/useTranslation'
import { ArticleCardItems, ChildTocItem, TocItem } from '@/landings/types'
import { LandingType } from '@/landings/context/LandingContext'
import type { QueryParams } from '@/search/components/hooks/useMultiQueryParams'
import { fuzzyMatchScore } from '@/landings/lib/fuzzy-match'

import styles from './LandingArticleGridWithFilter.module.scss'

type ArticleGridProps = {
  tocItems: TocItem[]
  includedCategories?: string[]
  landingType: LandingType
  params: QueryParams
  updateParams: (updates: Partial<QueryParams>, shouldPushHistory?: boolean) => void
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

export const ArticleGrid = ({
  tocItems,
  includedCategories,
  landingType,
  params,
  updateParams,
}: ArticleGridProps) => {
  const { t } = useTranslation('product_landing')
  const articlesPerPage = useResponsiveArticlesPerPage()

  const inputRef = useRef<HTMLInputElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  // Read filter state directly from query params
  const searchQuery = params['articles-filter'] || ''
  const selectedCategory = params['articles-category'] || ALL_CATEGORIES
  const currentPage = parseInt(params['articles-page'] || '1', 10)

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

  // Extract unique categories for dropdown from filtered articles (so all dropdown options have matching articles)
  const categories: string[] = useMemo(
    () => [
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
    ],
    [filteredArticlesByLandingType, includedCategories],
  )

  // Calculate the selected category index based on the current query param
  const selectedCategoryIndex = useMemo(() => {
    const index = categories.indexOf(selectedCategory)
    return index !== -1 ? index : 0
  }, [categories, selectedCategory])

  // Clear invalid category from query params if it doesn't exist in available categories
  useEffect(() => {
    if (selectedCategory !== ALL_CATEGORIES && selectedCategoryIndex === 0) {
      updateParams({ 'articles-category': '' })
    }
  }, [selectedCategory, selectedCategoryIndex, updateParams])

  // Sync the input field value with query params
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = searchQuery
    }
  }, [searchQuery])

  const applyFilters = () => {
    let results = filteredArticlesByLandingType

    if (searchQuery) {
      // Calculate match scores for each article
      const scoredResults = results
        .map((token) => {
          let maxScore = -1
          for (const value of Object.values(token)) {
            if (typeof value === 'string') {
              maxScore = Math.max(maxScore, fuzzyMatchScore(value, searchQuery))
            } else if (Array.isArray(value)) {
              for (const item of value) {
                if (typeof item === 'string') {
                  maxScore = Math.max(maxScore, fuzzyMatchScore(item, searchQuery))
                }
              }
            }
          }
          return { token, score: maxScore }
        })
        .filter(({ score }) => score >= 0)
        .sort((a, b) => b.score - a.score)

      results = scoredResults.map(({ token }) => token)
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
    // Update query params, clear if empty, and reset to first page
    // Don't add to history for search filtering
    updateParams({ 'articles-filter': query || '', 'articles-page': '' }, false)
  }

  const handleFilter = (option: string) => {
    // Update query params, clear if "all categories", and reset to first page
    updateParams(
      {
        'articles-category': option === ALL_CATEGORIES ? '' : option,
        'articles-page': '',
      },
      true,
    )
  }

  // Track previous page to determine if we should scroll
  const prevPageRef = useRef(currentPage)
  const hasMountedRef = useRef(false)

  const handlePageChange = (e: React.MouseEvent, pageNumber: number) => {
    e.preventDefault()
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      // Update page in query params, clear if page 1
      updateParams({ 'articles-page': pageNumber === 1 ? '' : String(pageNumber) }, true)
    }
  }

  // Scroll to heading on initial mount if query params are present
  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true

      // Check if any VALID article grid query params are present on initial load
      // Don't scroll if category is invalid (selectedCategoryIndex === 0 means invalid or "all")
      const hasValidCategory = selectedCategory !== ALL_CATEGORIES && selectedCategoryIndex !== 0
      const hasQueryParams = searchQuery || hasValidCategory || currentPage > 1

      if (hasQueryParams && headingRef.current) {
        // Use setTimeout to ensure the component is fully rendered
        setTimeout(() => {
          if (headingRef.current) {
            const elementPosition = headingRef.current.getBoundingClientRect().top + window.scrollY
            const offsetPosition = elementPosition - 140 // 140px offset from top
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            })
          }
        }, 100)
      }
    }
  }, []) // Only run on mount

  // Scroll to heading when page changes via pagination
  useEffect(() => {
    const pageChanged = currentPage !== prevPageRef.current
    const isPaginationClick = pageChanged && prevPageRef.current !== 1

    // Scroll if page changed via pagination (not from filter/category reset to page 1)
    // This includes: going to page 2+, or going back to page 1 from a higher page
    const shouldScroll = pageChanged && (currentPage > 1 || isPaginationClick)

    if (shouldScroll && headingRef.current) {
      // Delay scroll slightly to let router finish and restore scroll position first
      setTimeout(() => {
        if (headingRef.current) {
          const elementPosition = headingRef.current.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - 140 // 140px offset from top
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
        }
      }, 150) // Slightly longer than router debounce (100ms) + execution time
    }

    prevPageRef.current = currentPage
  }, [currentPage])

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
                      onSelect={() => handleFilter(category)}
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
          <ArticleCard
            key={startIndex + index}
            article={article}
            includedCategories={includedCategories}
          />
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
  includedCategories?: string[]
}

const ArticleCard = ({ article, includedCategories }: ArticleCardProps) => {
  // Filter categories to only show those in includedCategories (if provided and not empty)
  const displayCategories =
    includedCategories && includedCategories.length > 0 && article.category
      ? article.category.filter((cat) =>
          includedCategories.some((included) => included.toLowerCase() === cat.toLowerCase()),
        )
      : article.category

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
        {displayCategories &&
          displayCategories.map((cat) => <Token key={cat} text={cat} className="mr-1 mb-2" />)}
      </div>

      <h3 className={styles.cardTitle}>
        <span className={styles.cardTitleLink}>{article.title}</span>
      </h3>

      {article.intro && <div className={styles.cardIntro}>{article.intro}</div>}
    </Link>
  )
}
