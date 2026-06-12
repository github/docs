import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { ChevronLeftIcon, ChevronRightIcon } from '@primer/octicons-react'
import cx from 'classnames'
import type { ResolvedArticle } from '@/types'
import { useTranslation } from '@/languages/components/useTranslation'
import { useVersion } from '@/versions/components/useVersion'
import styles from './LandingCarousel.module.scss'

type LandingCarouselProps = {
  heading?: string
  carouselKey?: string // Optional key for translation lookup (e.g., "recommended")
  carouselArticles?: ResolvedArticle[]
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
  carouselKey,
  carouselArticles,
}: LandingCarouselProps) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const itemsPerView = useResponsiveItemsPerView()
  const { t } = useTranslation('carousels')
  const router = useRouter()
  const { currentVersion } = useVersion()

  // Determine heading text
  let headingText = heading
  if (!headingText && carouselKey) {
    // Try to get translation for the carousel key
    const translated = t(carouselKey)

    // Check if we got a real translation or a fallback
    const looksLikeFallback = !translated || translated === carouselKey

    if (!looksLikeFallback) {
      headingText = translated
    }
  }

  // Ref to store timeout IDs for cleanup
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Reset to first page when itemsPerView changes (screen size changes)
  useEffect(() => {
    setCurrentPage(0)
  }, [itemsPerView])

  const processedItems: ResolvedArticle[] = carouselArticles || []

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current)
      }
    }
  }, [])

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
    // Duration matches CSS custom property --carousel-transition-duration (100ms)
    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
      animationTimeoutRef.current = null
    }, 100)
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
    // Duration matches CSS custom property --carousel-transition-duration (100ms)
    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
      animationTimeoutRef.current = null
    }, 100)
  }

  // Calculate the start index based on current page
  const startIndex = currentPage * itemsPerView
  const visibleItems = processedItems.slice(startIndex, startIndex + itemsPerView)

  if (totalItems === 0) {
    return null
  }

  return (
    <div
      className={cx(styles.carousel, { [styles.noHeading]: !headingText })}
      data-testid="landing-carousel"
    >
      <div className={styles.header}>
        {headingText && <h2 className={styles.heading}>{headingText}</h2>}
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
        {visibleItems.map((article: ResolvedArticle, index) => (
          <a
            key={startIndex + index}
            href={`/${router.locale}/${currentVersion}${article.href}`}
            className={cx(styles.articleCard, 'border', 'border-default', 'rounded-2')}
          >
            <h3 className={styles.articleTitle}>
              <span className={styles.articleLink}>{article.title}</span>
            </h3>
            <div
              className={styles.articleDescription}
              dangerouslySetInnerHTML={{
                __html: article.intro as TrustedHTML,
              }}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
