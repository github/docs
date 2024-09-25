import { Box } from '@primer/react'

import { useSearchContext } from './context/SearchContext'
import { SearchResultsAggregations } from './Aggregations'

export function SidebarSearchAggregates() {
  const { search } = useSearchContext()
  const { results } = search
  if (!results?.aggregations) {
    return null
  }

  return (
    <Box className="px-4 pb-3 mt-4">
      <SearchResultsAggregations aggregations={results.aggregations} />
    </Box>
  )
}
