import { describe, expect, test } from 'vitest'

import processSchemas from '@/graphql/scripts/utils/process-schemas'

const IDL = `
type Query {
  viewer: String
}

enum MergeStateStatus {
  "The head ref is out of date."
  BEHIND
  "The merge is blocked due to the pull request being a draft."
  DRAFT
    @deprecated(
      reason: "DRAFT state will be removed from this enum and \`isDraft\` should be used instead Use PullRequest.isDraft instead. Removal on 2021-01-01 UTC."
    )
}
`

describe('enum value deprecation', () => {
  test('keeps the deprecated status and reason on enum values', async () => {
    const data = await processSchemas(IDL, [])
    const mergeStateStatus = data.enums.find((item) => item.name === 'MergeStateStatus')
    const draft = mergeStateStatus?.values.find((value) => value.name === 'DRAFT')
    const behind = mergeStateStatus?.values.find((value) => value.name === 'BEHIND')

    expect(draft?.isDeprecated).toBe(true)
    expect(draft?.deprecationReason).toContain('PullRequest.isDraft')
    expect(behind?.isDeprecated).toBeUndefined()
    expect(behind?.deprecationReason).toBeUndefined()
  })
})
