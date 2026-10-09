import { addError, filterTokens } from 'markdownlint-rule-helpers'

import type { RuleParams, RuleErrorCallback, MarkdownToken } from '@/content-linter/types'

export const thirdPartyActionsReusable = {
  names: ['GHD054', 'third-party-actions-reusable'],
  description: 'Code examples with third-party actions must include disclaimer reusable',
  tags: ['actions', 'reusable', 'third-party'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    filterTokens(params, 'fence', (token: MarkdownToken) => {
      // Check yaml and yaml copy fences because they hold GitHub Actions examples.
      if (token.info !== 'yaml' && token.info !== 'yaml copy') return

      const codeContent = token.content
      if (!codeContent) return

      const lineNumber = token.lineNumber

      const thirdPartyActions = findThirdPartyActions(codeContent)

      if (thirdPartyActions.length === 0) return

      const hasDisclaimer = checkForDisclaimer(params.lines, lineNumber, codeContent)

      if (!hasDisclaimer) {
        const actionList = thirdPartyActions.map((action) => `'${action}'`).join(', ')
        addError(
          onError,
          lineNumber,
          `Code examples with third-party actions must include the disclaimer reusable. Found third-party actions: ${actionList}. Add '{% data reusables.actions.actions-not-certified-by-github-comment %}' before or inside this code block.`,
          token.line,
          null, // No exact range exists within the fence info line.
          null, // No fix possible: the reusable has to be added by hand
        )
      }
    })
  },
}

// Third-party actions are the ones that are neither GitHub-owned nor
// documentation examples.
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

function isExampleOrGitHubAction(actionRef: string): boolean {
  const excludePatterns = [
    /^actions\//,
    /^github\//,
    /^(octo-org|octocat|different-org|fakeaction|some|OWNER|my-org)\//,
    /\/example-repo[/@]/,
    /\/octo-repo[/@]/,
    /\/hello-world-composite-action[/@]/,
    /\/monorepo[/@]/,
  ]

  return excludePatterns.some((pattern) => pattern.test(actionRef))
}

// Looks inside the code block, then backward from it.
function checkForDisclaimer(
  lines: string[],
  codeBlockLineNumber: number,
  codeContent: string,
): boolean {
  const disclaimerPattern = /{% data reusables\.actions\.actions-not-certified-by-github-comment %}/

  if (disclaimerPattern.test(codeContent)) {
    return true
  }

  // Convert from 1-based line number to 0-based array index.
  const codeBlockIndex = codeBlockLineNumber - 1

  // Disclaimers usually sit right before code blocks, so search up to 10 earlier lines.
  const searchStart = Math.max(0, codeBlockIndex - 10)

  for (let i = codeBlockIndex - 1; i >= searchStart; i--) {
    const line = lines[i]

    if (disclaimerPattern.test(line)) {
      return true
    }
  }

  return false
}
