// @ts-ignore - markdownlint-rule-helpers doesn't provide TypeScript declarations
import { addError, filterTokens } from 'markdownlint-rule-helpers'

import type { RuleParams, RuleErrorCallback, MarkdownToken } from '@/content-linter/types'

export const thirdPartyActionsReusable = {
  names: ['GHD054', 'third-party-actions-reusable'],
  description: 'Code examples with third-party actions must include disclaimer reusable',
  tags: ['actions', 'reusable', 'third-party'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    // Find all code fence blocks
    filterTokens(params, 'fence', (token: MarkdownToken) => {
      // Only check YAML code blocks (GitHub Actions workflows)
      if (token.info !== 'yaml' && token.info !== 'yaml copy') return

      const codeContent = token.content
      if (!codeContent) return

      const lineNumber = token.lineNumber

      // Find third-party actions in the code block
      const thirdPartyActions = findThirdPartyActions(codeContent)

      if (thirdPartyActions.length === 0) return

      // Check if the required disclaimer reusable is present before this code block or inside it
      const hasDisclaimer = checkForDisclaimer(params.lines, lineNumber, codeContent)

      if (!hasDisclaimer) {
        const actionList = thirdPartyActions.map((action) => `'${action}'`).join(', ')
        addError(
          onError,
          lineNumber,
          `Code examples with third-party actions must include the disclaimer reusable. Found third-party actions: ${actionList}. Add '{% data reusables.actions.actions-not-certified-by-github-comment %}' before or inside this code block.`,
          token.line,
          null, // No specific range within the line
          null, // No fix possible - requires manual addition of reusable
        )
      }
    })
  },
}

/**
 * Find third-party actions in YAML content
 * Third-party actions are identified by actions that are not GitHub-owned or documentation examples
 */
function findThirdPartyActions(yamlContent: string): string[] {
  const thirdPartyActions: string[] = []
  const actionPattern = /uses:\s+([^{\s]+\/[^@\s]+@[^\s]+)/g

  let match
  while ((match = actionPattern.exec(yamlContent)) !== null) {
    const actionRef = match[1]

    if (!isExampleOrGitHubAction(actionRef)) {
      thirdPartyActions.push(actionRef)
    }
  }

  return thirdPartyActions
}

/**
 * Check if an action should be skipped (GitHub-owned or documentation example)
 */
function isExampleOrGitHubAction(actionRef: string): boolean {
  // List of patterns to exclude (GitHub-owned and documentation examples)
  const excludePatterns = [
    // GitHub-owned
    /^actions\//,
    /^github\//,
    // Example organizations
    /^(octo-org|octocat|different-org|fakeaction|some|OWNER|my-org)\//,
    // Example repos (any owner)
    /\/example-repo[/@]/,
    /\/octo-repo[/@]/,
    /\/hello-world-composite-action[/@]/,
    /\/monorepo[/@]/,
    // Monorepo patterns
  ]

  return excludePatterns.some((pattern) => pattern.test(actionRef))
}

/**
 * Check if the disclaimer reusable is present before the given line number or inside the code block
 * Looks backward from the code block and also inside the code block content
 */
function checkForDisclaimer(
  lines: string[],
  codeBlockLineNumber: number,
  codeContent: string,
): boolean {
  const disclaimerPattern = /{% data reusables\.actions\.actions-not-certified-by-github-comment %}/

  // First, check inside the code block content
  if (disclaimerPattern.test(codeContent)) {
    return true
  }

  // Convert from 1-based line number to 0-based array index
  const codeBlockIndex = codeBlockLineNumber - 1

  // Search backwards from the code block (up to 10 lines before)
  // This is reasonable since disclaimers are typically right before code blocks
  const searchStart = Math.max(0, codeBlockIndex - 10)

  for (let i = codeBlockIndex - 1; i >= searchStart; i--) {
    const line = lines[i]

    if (disclaimerPattern.test(line)) {
      return true
    }
  }

  return false
}
