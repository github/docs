import rank from '../../../script/search/rank.js'

test('search custom rankings', () => {
  const expectedRankings = [
    ['/en/github/actions', 3],
    ['/en/rest/reference', 2],
    ['/en/graphql', 1],
    ['/en/github/site-policy', 0],
  ]

  expectedRankings.forEach(([objectID, expectedRanking]) => {
    const expectationMessage = `expected ${objectID} to have a custom ranking of ${expectedRanking}`
    expect(rank({ objectID }), expectationMessage).toBe(expectedRanking)
  })
})
