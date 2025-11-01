// @ts-ignore - markdownlint-rule-helpers doesn't have TypeScript declarations
import { addError } from 'markdownlint-rule-helpers'

import { getFrontmatter } from '../helpers/utils'
import { getUIDataMerged } from '@/data-directory/lib/get-data'
import type { RuleParams, RuleErrorCallback, Rule } from '@/content-linter/types'

interface Frontmatter {
  introLinks?: Record<string, string>
  [key: string]: any
}

// Get the valid introLinks keys from ui.yml
function getValidIntroLinksKeys(): string[] {
  try {
    const ui = getUIDataMerged('en')

    if (!ui || !ui.product_landing || typeof ui.product_landing !== 'object') {
      return []
    }

    // Get all keys from product_landing in ui.yml
    return Object.keys(ui.product_landing)
  } catch (error) {
    console.error('Error loading ui.yml data:', error)
    return []
  }
}

export const frontmatterIntroLinks: Rule = {
  names: ['GHD062', 'frontmatter-intro-links'],
  description: 'introLinks keys must be valid keys defined in data/ui.yml under product_landing',
  tags: ['frontmatter', 'single-source'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const fm = getFrontmatter(params.lines) as Frontmatter | null
    if (!fm || !fm.introLinks) return

    const introLinks = fm.introLinks
    if (typeof introLinks !== 'object' || Array.isArray(introLinks)) return

    const validKeys = getValidIntroLinksKeys()
    if (validKeys.length === 0) {
      // If we can't load the valid keys, skip validation
      return
    }

    // Check each key in introLinks
    for (const key of Object.keys(introLinks)) {
      if (!validKeys.includes(key)) {
        // Find the line with this key
        const line = params.lines.find((ln: string) => {
          const trimmed = ln.trim()
          return trimmed.startsWith(`${key}:`) && !trimmed.startsWith('introLinks:')
        })
        const lineNumber = line ? params.lines.indexOf(line) + 1 : 1

        addError(
          onError,
          lineNumber,
          `Invalid introLinks key: '${key}'. Valid keys are: ${validKeys.join(', ')}`,
          line || '',
          null, // No fix possible
        )
      }
    }
  },
}
