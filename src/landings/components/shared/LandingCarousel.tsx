import { useState, useEffect, useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@primer/octicons-react'
import { Token } from '@primer/react'
import cx from 'classnames'
import type { TocItem } from '@/landings/types'
import { useTranslation } from '@/languages/components/useTranslation'
import styles from './LandingCarousel.module.scss'

type ProcessedArticleItem = {
  article: string
  title: string
  description: string
  url: string
  category: string[]
}

type LandingCarouselProps = {
  heading?: string
  recommended?: string[] // Array of article paths
  flatArticles: TocItem[]
}

// Hook to get current items per view based on screen size
const useResponsiveItemsPerView = () => {
  const [itemsPerView, setItemsPerView] = useState(3) // Default to desktop

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth
      if (width < 768) {
        // Mobile: 1 column
        setItemsPerView(1)
      } else if (width < 1012) {
        // Tablet: 2 columns
        setItemsPerView(2)
      } else {
        // Desktop: 3 columns
        setItemsPerView(3)
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  return itemsPerView
}

export const LandingCarousel = ({
  heading = '',
  flatArticles,
  recommended,
}: LandingCarouselProps) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const itemsPerView = useResponsiveItemsPerView()
  const { t } = useTranslation('discovery_landing')
  const headingText = heading || t('recommended')
  // Ref to store timeout IDs for cleanup
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Reset to first page when itemsPerView changes (screen size changes)
  useEffect(() => {
    setCurrentPage(0)
  }, [itemsPerView])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current)
      }
    }
  }, [])

  // Helper function to find article data from tocItems
  const findArticleData = (articlePath: string) => {
    if (typeof articlePath !== 'string') {
      console.warn('Invalid articlePath:', articlePath)
      return null
    }
    const cleanPath = articlePath.startsWith('/') ? articlePath.slice(1) : articlePath
    return flatArticles.find(
      (item) =>
        item.fullPath?.endsWith(cleanPath) ||
        item.fullPath?.includes(cleanPath.split('/').pop() || ''),
    )
  }

  // Process recommended articles to get article data
  const processedItems = (recommended || [])
    .filter((item) => typeof item === 'string' && item.length > 0)
    .map((recommendedArticlePath) => {
      const articleData = findArticleData(recommendedArticlePath)
      return {
        article: recommendedArticlePath,
        title: articleData?.title || 'Unknown Article',
        description: articleData?.intro || '',
        url: articleData?.fullPath || recommendedArticlePath,
        category: articleData?.category || [],
      }
    })

  const totalItems = processedItems.length
  const totalPages = Math.ceil(totalItems / itemsPerView)

  const goToPrevious = () => {
    if (currentPage === 0 || isAnimating) return

    // Clear any existing timeout
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current)
    }

    setIsAnimating(true)
    setCurrentPage((prev) => Math.max(0, prev - 1))

    // Set animation state to false after transition completes
    // Duration matches CSS custom property --carousel-transition-duration (300ms)
    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
      animationTimeoutRef.current = null
    }, 300)
  }

  const goToNext = () => {
    if (currentPage >= totalPages - 1 || isAnimating) return

    // Clear any existing timeout
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current)
    }

    setIsAnimating(true)
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))

    // Set animation state to false after transition completes
    // Duration matches CSS custom property --carousel-transition-duration (300ms)
    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
      animationTimeoutRef.current = null
    }, 300)
  }

  // Calculate the start index based on current page
  const startIndex = currentPage * itemsPerView
  const visibleItems = processedItems.slice(startIndex, startIndex + itemsPerView)

  if (totalItems === 0) {
    return null
  }

  return (
    <div className={styles.carousel} data-testid="landing-carousel">
      <div className={styles.header}>
        <h2 className={styles.heading}>{headingText}</h2>
        {totalItems > itemsPerView && (
          <div className={styles.navigation}>
            <button
              onClick={goToPrevious}
              disabled={currentPage === 0}
              className={cx('btn btn-sm', styles.navButton)}
              aria-label="Previous articles"
            >
              <ChevronLeftIcon size={16} />
            </button>

            <button
              onClick={goToNext}
              disabled={currentPage >= totalPages - 1}
              className={cx('btn btn-sm', styles.navButton)}
              aria-label="Next articles"
            >
              <ChevronRightIcon size={16} />
            </button>
          </div>
        )}
      </div>

      <div
        className={cx(styles.itemsGrid, { [styles.animating]: isAnimating })}
        data-testid="carousel-items"
      >
        {visibleItems.map((article: ProcessedArticleItem, index) => (
          <div
            key={startIndex + index}
            className={cx(styles.articleCard, 'border', 'border-default', 'rounded-2')}
          >
            <div className="mb-2">
              {article.category.map((cat) => (
                <Token key={cat} text={cat} className="mr-1 mb-2" />
              ))}
            </div>
            <h3 className={styles.articleTitle}>
              <a href={article.url} className={styles.articleLink}>
                {article.title}
              </a>
            </h3>
            <p className={styles.articleDescription}>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
