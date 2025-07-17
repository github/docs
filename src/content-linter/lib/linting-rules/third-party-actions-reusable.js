import { addError, filterTokens } from 'markdownlint-rule-helpers'

export const thirdPartyActionsReusable = {
  names: ['GHD054', 'third-party-actions-reusable'],
  description: 'Code examples with third-party actions must include disclaimer reusable',
  tags: ['actions', 'reusable', 'third-party'],
  function: (params, onError) => {
    // Find all code fence blocks
    filterTokens(params, 'fence', (token) => {
      // Only check YAML code blocks (GitHub Actions workflows)
      if (token.info !== 'yaml' && token.info !== 'yaml copy') return

      const codeContent = token.content
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
 * Third-party actions are identified by the pattern: owner/action@version
 * where owner is not 'actions' or 'github'
 */
function findThirdPartyActions(yamlContent) {
  const thirdPartyActions = []

  // Pattern to match 'uses: owner/action@version' where owner is not actions or github
  const actionPattern = /uses:\s+([^{\s]+\/[^@\s]+@[^\s]+)/g

  let match
  while ((match = actionPattern.exec(yamlContent)) !== null) {
    const actionRef = match[1]

    // Extract owner from action reference
    const parts = actionRef.split('/')
    if (parts.length >= 2) {
      const owner = parts[0]

      // Skip GitHub-owned actions (actions/* and github/*)
      if (owner !== 'actions' && owner !== 'github') {
        thirdPartyActions.push(actionRef)
      }
    }
  }

  return thirdPartyActions
}

/**
 * Check if the disclaimer reusable is present before the given line number or inside the code block
 * Looks backward from the code block and also inside the code block content
 */
function checkForDisclaimer(lines, codeBlockLineNumber, codeContent) {
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
