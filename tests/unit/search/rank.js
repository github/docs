const rank = require('../../../lib/search/rank')

test('search custom rankings', () => {
  const expectedRankings = [
    ['https://docs.github.com/en/github/actions', 3],
    ['https://docs.github.com/en/rest/reference', 2],
    ['https://docs.github.com/en/graphql', 1],
    ['https://docs.github.com/en/github/site-policy', 0]
  ]

  expectedRankings.forEach(([url, expectedRanking]) => {
    const expectationMessage = `expected ${url} to have a custom ranking of ${expectedRanking}`
    expect(rank({ url }), expectationMessage).toBe(expectedRanking)
  })
})
