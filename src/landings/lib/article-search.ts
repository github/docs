import type { ArticleCardItems, ChildTocItem, TocItem } from '@/landings/types'
import { fuzzyMatchScore, stripStopWords } from '@/landings/lib/fuzzy-match'

const STOP_WORD_THRESHOLD = 0.8

// Recursively flatten nested TOC items into leaf articles.
// Excludes index pages (pages with childTocItems).
const flattenArticlesRecursive = (articles: (TocItem | ChildTocItem)[]): ArticleCardItems => {
  const flattened: ArticleCardItems = []

  for (const article of articles) {
    if (article.childTocItems && article.childTocItems.length > 0) {
      flattened.push(...flattenArticlesRecursive(article.childTocItems))
    } else {
      flattened.push(article as ChildTocItem)
    }
  }

  return flattened
}

// Flatten, deduplicate by fullPath, and sort alphabetically by title.
export const flattenArticles = (articles: (TocItem | ChildTocItem)[]): ArticleCardItems => {
  const flattened = flattenArticlesRecursive(articles)
  const seen = new Set<string>()
  const deduped = flattened.filter((article) => {
    if (seen.has(article.fullPath)) return false
    seen.add(article.fullPath)
    return true
  })
  return deduped.sort((a, b) => a.title.localeCompare(b.title))
}

// Find words appearing in a high percentage of article titles/intros.
// These add little signal to search since they match nearly everything.
export const deriveStopWords = (
  articles: ArticleCardItems,
  threshold = STOP_WORD_THRESHOLD,
): string[] => {
  if (articles.length === 0) return []
  const wordCounts = new Map<string, number>()
  for (const article of articles) {
    const uniqueWords = new Set(
      [article.title, article.intro].join(' ').toLowerCase().split(/\s+/).filter(Boolean),
    )
    for (const w of uniqueWords) wordCounts.set(w, (wordCounts.get(w) || 0) + 1)
  }
  const minCount = articles.length * threshold
  return [...wordCounts.entries()].filter(([, count]) => count >= minCount).map(([word]) => word)
}

// Score and rank articles against a search query, returning only matches.
// Searches title, intro, and category fields. Returns all articles (scored 0.5)
// when the query consists entirely of stop words.
export const searchArticles = (
  articles: ArticleCardItems,
  query: string,
  stopWords: string[],
): ArticleCardItems => {
  const cleanedQuery = stripStopWords(query, stopWords)

  const scored = articles
    .map((article) => {
      if (!cleanedQuery) return { article, score: 0.5 }

      let maxScore = -1
      const searchableValues = [article.title, article.intro, ...(article.category || [])].filter(
        (v): v is string => typeof v === 'string',
      )

      for (const value of searchableValues) {
        const cleanedValue = stripStopWords(value, stopWords)
        maxScore = Math.max(maxScore, fuzzyMatchScore(cleanedValue, cleanedQuery))
      }
      return { article, score: maxScore }
    })
    .filter(({ score }) => score >= 0)
    .sort((a, b) => b.score - a.score)

  return scored.map(({ article }) => article)
}
