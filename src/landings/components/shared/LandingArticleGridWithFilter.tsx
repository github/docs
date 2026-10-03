import React, { useState, useRef, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { ActionMenu, Card, Pagination, TextInput, Token } from '@primer/react-brand'
import { SearchIcon } from '@primer/octicons-react'
import { announce } from '@primer/live-region-element'
import cx from 'clsx'

import { useTranslation } from '@/languages/components/useTranslation'
import { ChildTocItem, TocItem } from '@/landings/types'
import { LandingType } from '@/landings/context/LandingContext'
import type { QueryParams } from '@/search/components/hooks/useMultiQueryParams'
import { flattenArticles, deriveStopWords, searchArticles } from '@/landings/lib/article-search'
import { onActionMenuItemKeyDownCapture } from '@/frame/components/lib/action-menu'

import styles from './LandingArticleGridWithFilter.module.scss'

type ArticleGridProps = {
  tocItems: TocItem[]
  includedCategories?: string[]
  landingType: LandingType
  params: QueryParams
  updateParams: (updates: Partial<QueryParams>, shouldPushHistory?: boolean) => void
}

const ALL_CATEGORIES = 'all_categories'

const useResponsiveArticlesPerPage = () => {
  // Default to the desktop 3 by 3 grid.
  const [articlesPerPage, setArticlesPerPage] = useState(9)

  useEffect(() => {
    const updateArticlesPerPage = () => {
      const width = window.innerWidth
      if (width < 768) {
        // Mobile shows 8 articles in one column.
        setArticlesPerPage(8)
      } else if (width < 1012) {
        // Tablet shows 8 articles as 4 rows by 2 columns.
        setArticlesPerPage(8)
      } else {
        // Desktop shows 9 articles as 3 rows by 3 columns.
        setArticlesPerPage(9)
      }
    }

    updateArticlesPerPage()
    window.addEventListener('resize', updateArticlesPerPage)
    return () => window.removeEventListener('resize', updateArticlesPerPage)
  }, [])

  return articlesPerPage
}

// @primer/live-region-element mounts a shadow-DOM live region under document.body, so
// nearby React updates do not make VoiceOver re-announce the focused input.
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
  const statusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const searchQuery = params['articles-filter'] || ''
  const selectedCategory = params['articles-category'] || ALL_CATEGORIES
  const currentPage = parseInt(params['articles-page'] || '1', 10)

  const allArticles = useMemo(() => flattenArticles(tocItems), [tocItems])

  const stopWords = useMemo(() => deriveStopWords(allArticles), [allArticles])

  // Discovery landings filter to included categories; bespoke landings show every article.
  const filteredArticlesByLandingType = useMemo(() => {
    if (landingType === 'discovery' && includedCategories && includedCategories.length > 0) {
      // Uncategorized discovery articles stay visible because they remain in the content tree.
      return allArticles.filter((article) => {
        if (!article.category || article.category.length === 0) return true
        return article.category.some((cat) =>
          includedCategories.some((included) => included.toLowerCase() === cat.toLowerCase()),
        )
      })
    }
    // Empty includedCategories means the landing page has no category filter.
    return allArticles
  }, [allArticles, includedCategories, landingType])

  // Dropdown options come from filtered articles so every option has matching results.
  const categories: string[] = useMemo(
    () => [
      ALL_CATEGORIES,
      ...Array.from(
        new Set(filteredArticlesByLandingType.flatMap((item) => (item.category || []) as string[])),
      )
        .filter((category: string) => {
          if (!includedCategories || includedCategories.length === 0) return true
          const lowerCategory = category.toLowerCase()
          return includedCategories.some((included) => included.toLowerCase() === lowerCategory)
        })
        .sort((a, b) => a.localeCompare(b)),
    ],
    [filteredArticlesByLandingType, includedCategories],
  )

  const selectedCategoryIndex = useMemo(() => {
    const index = categories.indexOf(selectedCategory)
    return index !== -1 ? index : 0
  }, [categories, selectedCategory])

  useEffect(() => {
    if (selectedCategory !== ALL_CATEGORIES && selectedCategoryIndex === 0) {
      updateParams({ 'articles-category': '' })
    }
  }, [selectedCategory, selectedCategoryIndex, updateParams])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = searchQuery
    }
  }, [searchQuery])

  const applyFilters = () => {
    let results = filteredArticlesByLandingType

    if (searchQuery) {
      results = searchArticles(results, searchQuery, stopWords)
    }

    if (selectedCategory !== ALL_CATEGORIES) {
      results = results.filter((item) => item.category?.includes(selectedCategory))
    }

    return results
  }

  const filteredResults = applyFilters()

  const totalPages = Math.ceil(filteredResults.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const paginatedResults = filteredResults.slice(startIndex, startIndex + articlesPerPage)

  const handleSearch = (query: string) => {
    // Search filtering updates the URL without adding browser history entries.
    updateParams({ 'articles-filter': query || '', 'articles-page': '' }, false)
  }

  const handleFilter = (option: string) => {
    updateParams(
      {
        'articles-category': option === ALL_CATEGORIES ? '' : option,
        'articles-page': '',
      },
      true,
    )
  }

  const prevPageRef = useRef(currentPage)
  const hasMountedRef = useRef(false)

  const handlePageChange = (e: React.MouseEvent, pageNumber: number) => {
    e.preventDefault()
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      updateParams({ 'articles-page': pageNumber === 1 ? '' : String(pageNumber) }, true)
    }
  }

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true

      // Initial loads scroll only for valid article-grid query params.
      const hasValidCategory = selectedCategory !== ALL_CATEGORIES && selectedCategoryIndex !== 0
      const hasQueryParams = searchQuery || hasValidCategory || currentPage > 1

      if (hasQueryParams && headingRef.current) {
        setTimeout(() => {
          if (headingRef.current) {
            const elementPosition = headingRef.current.getBoundingClientRect().top + window.scrollY
            // Keep the heading 140px below the viewport top.
            const offsetPosition = elementPosition - 140
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            })
          }
        }, 100)
      }
    }
  }, [])

  useEffect(() => {
    const pageChanged = currentPage !== prevPageRef.current
    const isPaginationClick = pageChanged && prevPageRef.current !== 1

    // Pagination scrolls for page 2 and later, or back to page 1 from a higher page.
    const shouldScroll = pageChanged && (currentPage > 1 || isPaginationClick)

    if (shouldScroll && headingRef.current) {
      // Wait for router scroll restoration before moving the article grid.
      setTimeout(() => {
        if (headingRef.current) {
          const elementPosition = headingRef.current.getBoundingClientRect().top + window.scrollY
          // Keep the heading 140px below the viewport top.
          const offsetPosition = elementPosition - 140
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })
        }
      }, 150) // Exceed the router's 100ms debounce plus execution time.
    }

    prevPageRef.current = currentPage
  }, [currentPage])

  // Filter query changes debounce one grid scroll so typing does not scroll on every character.
  const prevFilterRef = useRef({ searchQuery, selectedCategory })
  const anchorTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => {
    const prev = prevFilterRef.current
    const filtersChanged =
      prev.searchQuery !== searchQuery || prev.selectedCategory !== selectedCategory
    prevFilterRef.current = { searchQuery, selectedCategory }
    if (!filtersChanged) return

    // Keep the timer through unrelated effect cleanup so the scheduled scroll can fire.
    if (anchorTimeoutRef.current) clearTimeout(anchorTimeoutRef.current)
    anchorTimeoutRef.current = setTimeout(() => {
      anchorTimeoutRef.current = null
      const heading = headingRef.current
      if (!heading) return
      const offsetPosition = heading.getBoundingClientRect().top + window.scrollY - 140
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' })
    }, 250) // Run after the router's 100ms debounce and scroll restoration.
  }, [searchQuery, selectedCategory])

  const noArticlesFoundMessage = t('article_grid.no_articles_found')
  useEffect(() => {
    if (statusTimerRef.current) clearTimeout(statusTimerRef.current)

    if (filteredResults.length === 0) {
      statusTimerRef.current = setTimeout(() => {
        announce(noArticlesFoundMessage, { politeness: 'assertive' })
      }, 750)
    }

    return () => {
      if (statusTimerRef.current) clearTimeout(statusTimerRef.current)
    }
  }, [filteredResults.length, searchQuery, selectedCategory, noArticlesFoundMessage])
  return (
    <div className={styles.gridSection} data-testid="article-grid-container">
      <div className={styles.filterHeader} data-testid="filter-header">
        <h2 ref={headingRef} className={cx(styles.headerTitle, styles.headerTitleText)}>
          {t('article_grid.heading')}
        </h2>

        <div className={styles.controls}>
          {/* Text-style control matches the Sort by pattern. */}
          <div className={styles.categoryDropdown}>
            <ActionMenu
              selectionVariant="single"
              size="small"
              menuAlignment="start"
              onSelect={handleFilter}
            >
              <ActionMenu.Button variant="subtle">
                <span className={styles.categoryButtonLabel}>
                  <span className={styles.categoryLabel}>
                    {t('article_grid.filter_by_category')}:
                  </span>{' '}
                  <span className={styles.categoryValue}>
                    {categories[selectedCategoryIndex] === ALL_CATEGORIES
                      ? t('article_grid.all_categories')
                      : categories[selectedCategoryIndex]}
                  </span>
                </span>
              </ActionMenu.Button>
              <ActionMenu.Overlay aria-label={t('article_grid.filter_by_category')}>
                {categories.map((category, index) => (
                  <ActionMenu.Item
                    key={category}
                    value={category}
                    selected={index === selectedCategoryIndex}
                    onKeyDownCapture={onActionMenuItemKeyDownCapture}
                  >
                    {category === ALL_CATEGORIES ? t('article_grid.all_categories') : category}
                  </ActionMenu.Item>
                ))}
              </ActionMenu.Overlay>
            </ActionMenu>
          </div>

          <div className={styles.searchContainer}>
            <form onSubmit={(e) => e.preventDefault()}>
              <TextInput
                fullWidth
                leadingVisual={<SearchIcon />}
                placeholder={t('article_grid.search_articles')}
                aria-label={t('article_grid.search_articles')}
                ref={inputRef}
                autoComplete="off"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const query = e.target.value || ''
                  handleSearch(query)
                }}
              />
            </form>
          </div>
        </div>
      </div>

      <div className={styles.articleGrid} data-testid="article-grid">
        {paginatedResults.map((article, index) => (
          <ArticleCard
            key={startIndex + index}
            article={article}
            includedCategories={includedCategories}
          />
        ))}
        {filteredResults.length === 0 && (
          <div
            className={styles.noArticlesContainer}
            data-testid="no-articles-message"
            aria-hidden="true"
          >
            <p className={styles.noArticlesText}>{t('article_grid.no_articles_found')}</p>
          </div>
        )}
      </div>

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
  const router = useRouter()

  // An empty or missing includedCategories means no filtering.
  const displayCategories =
    includedCategories && includedCategories.length > 0 && article.category
      ? article.category.filter((cat) =>
          includedCategories.some((included) => included.toLowerCase() === cat.toLowerCase()),
        )
      : article.category

  const handleClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    // Intercept Brand Card's anchor only for plain clicks; modified clicks keep browser behavior.
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    try {
      await router.push(article.fullPath)
    } catch {
      // Hard navigation keeps the card usable after suppressing the native anchor click.
      window.location.href = article.fullPath
    }
  }

  return (
    <Card
      href={article.fullPath}
      className={styles.card}
      ctaVariant="none"
      disableAnimation
      fullWidth
      onClick={handleClick}
      data-testid="article-card"
    >
      {displayCategories && displayCategories.length > 0 && (
        <Card.Tokens>
          {displayCategories.map((cat) => (
            <Token key={cat} className={styles.cardToken}>
              {cat}
            </Token>
          ))}
        </Card.Tokens>
      )}

      <Card.Heading>{article.title}</Card.Heading>

      {article.intro && <Card.Description>{article.intro}</Card.Description>}
    </Card>
  )
}
