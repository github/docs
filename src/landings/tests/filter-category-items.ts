import { describe, expect, test } from 'vitest'

import { filterCategoryItems } from '@/landings/lib/filter-category-items'
import type { ArticleCardItems } from '@/landings/types'

const prefix = '/en/enterprise-cloud@latest/copilot/tutorials/customization-library'

const items: ArticleCardItems = [
  {
    title: 'Debugging tutor',
    intro: 'Explain errors step by step.',
    fullPath: `${prefix}/custom-instructions/debugging-tutor`,
    octicon: 'book',
    category: ['Custom instructions'],
    complexity: ['Simple'],
    surface: ['VS Code'],
    industry: ['Education'],
  },
  {
    title: 'Code reviewer',
    intro: 'Review pull requests for security issues.',
    fullPath: `${prefix}/prompt-files/code-reviewer`,
    octicon: 'book',
    category: ['Prompt files'],
    complexity: ['Advanced'],
    surface: ['GitHub.com'],
  },
  {
    title: 'Testing helper',
    intro: 'Write unit tests.',
    fullPath: `${prefix}/custom-instructions/testing-helper`,
    octicon: 'book',
    category: ['Custom instructions'],
    complexity: ['Advanced'],
    surface: ['VS Code'],
  },
]

const noFilters = { query: '', category: 'All', complexity: 'All', surface: 'All' }

const titlesFor = (filters: Partial<typeof noFilters>) =>
  filterCategoryItems(items, { ...noFilters, ...filters }).map((item) => item.title)

describe('filterCategoryItems', () => {
  test('returns every item with no query or filters', () => {
    expect(titlesFor({})).toHaveLength(3)
  })

  test('does not match the hidden fullPath', () => {
    expect(titlesFor({ query: 'library' })).toEqual([])
    expect(titlesFor({ query: 'enterprise-cloud' })).toEqual([])
    expect(titlesFor({ query: 'tutor' })).toEqual(['Debugging tutor'])
  })

  test('does not match the octicon name', () => {
    expect(titlesFor({ query: 'book' })).toEqual([])
  })

  test('matches title, intro, and tags case-insensitively', () => {
    expect(titlesFor({ query: 'DEBUGGING' })).toEqual(['Debugging tutor'])
    expect(titlesFor({ query: 'Security' })).toEqual(['Code reviewer'])
    expect(titlesFor({ query: 'prompt FILES' })).toEqual(['Code reviewer'])
    expect(titlesFor({ query: 'advanced' })).toEqual(['Code reviewer', 'Testing helper'])
    expect(titlesFor({ query: 'github.com' })).toEqual(['Code reviewer'])
    expect(titlesFor({ query: 'education' })).toEqual(['Debugging tutor'])
  })

  test('applies the category, complexity, and surface filters', () => {
    expect(titlesFor({ category: 'Custom instructions' })).toEqual([
      'Debugging tutor',
      'Testing helper',
    ])
    expect(titlesFor({ complexity: 'Advanced' })).toEqual(['Code reviewer', 'Testing helper'])
    expect(titlesFor({ surface: 'VS Code', complexity: 'Advanced' })).toEqual(['Testing helper'])
    expect(titlesFor({ query: 'helper', category: 'Prompt files' })).toEqual([])
  })
})
