import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { ArrowLeftIcon, ArrowRightIcon } from '@primer/octicons-react'
import { Card } from '@primer/react-brand'
import cx from 'clsx'
import type { ResolvedArticle } from '@/types'
import { useTranslation } from '@/languages/components/useTranslation'
import { useVersion } from '@/versions/components/useVersion'
import styles from './LandingCarousel.module.scss'
import { RenderedHTML } from '@/frame/components/ui/RenderedHTML/RenderedHTML'

type LandingCarouselProps = {
  heading?: string
  // Optional key for translation lookup, such as "recommended".
  carouselKey?: string
  carouselArticles?: ResolvedArticle[]
}

const useResponsiveItemsPerView = () => {
  // Default to the desktop 3-column carousel.
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth
      if (width < 768) {
        // Mobile shows one column.
        setItemsPerView(1)
      } else if (width < 1012) {
        // Tablet shows two columns.
        setItemsPerView(2)
      } else {
        // Desktop shows three columns.
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

  let headingText = heading
  if (!headingText && carouselKey) {
    const translated = t(carouselKey)

    const looksLikeFallback = !translated || translated === carouselKey

    if (!looksLikeFallback) {
      headingText = translated
    }
  }

  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Viewport changes reset to the first page so the changed page count cannot strand the index.
  useEffect(() => {
    setCurrentPage(0)
  }, [itemsPerView])

  const processedItems: ResolvedArticle[] = carouselArticles || []

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

    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current)
    }

    setIsAnimating(true)
    setCurrentPage((prev) => Math.max(0, prev - 1))

    // Matches the --carousel-transition-duration CSS custom property.
    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
      animationTimeoutRef.current = null
    }, 100)
  }

  const goToNext = () => {
    if (currentPage >= totalPages - 1 || isAnimating) return

    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current)
    }

    setIsAnimating(true)
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))

    // Matches the --carousel-transition-duration CSS custom property.
    animationTimeoutRef.current = setTimeout(() => {
      setIsAnimating(false)
      animationTimeoutRef.current = null
    }, 100)
  }

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
              className={styles.navButton}
              aria-label="Previous articles"
            >
              <ArrowLeftIcon size={16} />
            </button>

            <button
              onClick={goToNext}
              disabled={currentPage >= totalPages - 1}
              className={styles.navButton}
              aria-label="Next articles"
            >
              <ArrowRightIcon size={16} />
            </button>
          </div>
        )}
      </div>

      <div
        className={cx(styles.itemsGrid, { [styles.animating]: isAnimating })}
        data-testid="carousel-items"
      >
        {visibleItems.map((article: ResolvedArticle, index) => (
          <Card
            key={startIndex + index}
            href={`/${router.locale}/${currentVersion}${article.href}`}
            className={styles.card}
            ctaVariant="none"
            disableAnimation
            fullWidth
          >
            <Card.Heading>{article.title}</Card.Heading>
            <Card.Description>
              <RenderedHTML as="span" html={article.intro} />
            </Card.Description>
          </Card>
        ))}
      </div>
    </div>
  )
}
