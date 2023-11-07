import { addError, ellipsify } from 'markdownlint-rule-helpers'

import { getRange } from '../helpers/utils.js'
/*
  This rule currently only checks for one hardcoded string but
  can be generalized in the future to check for strings that 
  have data reusables.
*/
export const githubOwnedActionReferences = {
  names: ['GHD013', 'github-owned-action-references'],
  description: 'GitHub-owned action references should not be hardcoded',
  tags: ['feature', 'actions'],
  function: (params, onError) => {
    const filepath = params.name
    if (filepath.startsWith('data/reusables/actions/action-')) return

    const regex =
      /(actions\/(checkout|delete-package-versions|download-artifact|upload-artifact|github-script|setup-dotnet|setup-go|setup-java|setup-node|setup-python|stale|cache)|github\/codeql-action[/a-zA-Z-]*)@v\d+/g

    for (let i = 0; i < params.lines.length; i++) {
      const line = params.lines[i]
      const matches = line.match(regex)
      if (!matches) continue

      for (const match of matches) {
        const lineNumber = i + 1
        const range = getRange(line, match)
        addError(
          onError,
          lineNumber,
          `The string ${match} is hardcoding a reference to a GitHub-owned action. You should use the reusables for the action. e.g {% data reusables.actions.action-checkout %}.`,
          ellipsify(line),
          range,
          null, // No fix possible
        )
      }
    }
  },
}
