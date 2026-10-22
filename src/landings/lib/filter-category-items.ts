import type { ArticleCardItems } from '@/landings/types'

export type CategoryItemFilters = {
  query: string
  category: string
  complexity: string
  surface: string
}

export const filterCategoryItems = (
  items: ArticleCardItems,
  { query, category, complexity, surface }: CategoryItemFilters,
): ArticleCardItems => {
  let results = items

  if (query) {
    const lowerQuery = query.toLowerCase()
    results = results.filter((item) => {
      // Match only text shown on the card, not the URL or icon name.
      const visibleValues = [
        item.title,
        item.intro,
        ...(item.category || []),
        ...(item.complexity || []),
        ...(item.surface || []),
        ...(item.industry || []),
      ]
      return visibleValues.some(
        (value) => typeof value === 'string' && value.toLowerCase().includes(lowerQuery),
      )
    })
  }

  if (category !== 'All') {
    results = results.filter((item) => item.category?.includes(category))
  }

  if (complexity !== 'All') {
    results = results.filter((item) => item.complexity?.includes(complexity))
  }

  if (surface !== 'All') {
    results = results.filter((item) => item.surface?.includes(surface))
  }

  return results
}
