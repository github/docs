import type { TocItem } from '@/landings/types'

type LandingCarouselProps = {
  recommended?: string[] // Array of article paths
  flatArticles: TocItem[]
}

export const LandingCarousel = ({ flatArticles, recommended }: LandingCarouselProps) => {
  // Helper function to find article data from tocItems
  const findArticleData = (articlePath: string) => {
    const cleanPath = articlePath.startsWith('/') ? articlePath.slice(1) : articlePath
    return flatArticles.find(
      (item) => item.fullPath && cleanPath.split('/').pop() === item.fullPath.split('/').pop(),
    )
  }

  // Process recommended items to get article data
  const processedRecommendedItems =
    recommended?.map((recommendedArticlePath) => {
      const articleData = findArticleData(recommendedArticlePath)
      return {
        article: recommendedArticlePath,
        title: articleData?.title || 'Unknown Article',
        description: articleData?.intro || '',
        url: articleData?.fullPath || recommendedArticlePath,
      }
    }) || []

  return (
    <div>
      <h2
        style={{
          marginTop: '3rem',
        }}
      >
        TODO: Carousel placeholder
      </h2>
      <ul>
        {processedRecommendedItems.map((article) => (
          <li key={article.article || article.title}>
            <a href={article.url}>
              <h2>{article.title}</h2>
            </a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
