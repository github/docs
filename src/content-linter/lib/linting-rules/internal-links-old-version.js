import { filterTokens, addError } from 'markdownlint-rule-helpers'
import { getRange } from '../helpers/utils.js'

export const internalLinksOldVersion = {
  names: ['GHD006', 'internal-links-old-version'],
  description: 'Internal links must not have a hardcoded version using old versioning syntax',
  tags: ['links', 'url', 'versioning'],
  function: (params, onError) => {
    filterTokens(params, 'inline', (token) => {
      if (
        params.name.endsWith('migrating-from-github-enterprise-1110x-to-2123.md') ||
        params.name.endsWith('all-releases.md')
      )
        return
      for (const child of token.children) {
        if (child.type !== 'link_open') continue
        // Things matched by this RegExp:
        //  - /enterprise/2.19/admin/blah
        //  - https://docs.github.com/enterprise/11.10.340/admin/blah
        //  - http://help.github.com/enterprise/2.8/admin/blah
        //
        // Things intentionally NOT matched by this RegExp:
        //  - https://someservice.com/enterprise/1.0/blah
        //  - /github/site-policy/enterprise/2.2/admin/blah
        const versionLinkRegEx =
          /(?:(?:https?:\/\/(?:help|docs|developer)\.github\.com)(?:\/enterprise\/\d+(\.\d+)+\/[^)\s]*)?|^\/enterprise\/\d+(\.\d+)+\/[^)\s]*)(?=\s|$)/gm
        // Example child.attrs:
        // [
        //  ['href', 'get-started'], ['target', '_blank'],
        //  ['rel', 'canonical'],
        // ]
        const hrefsMissingSlashes = child.attrs
          // The attribute could also be `target` or `rel`
          .filter((attr) => attr[0] === 'href')
          .filter((attr) => attr[1].startsWith('/') || !attr[1].startsWith('//'))
          // Filter out link paths that matches the version link regex
          .filter((attr) => attr[1].match(versionLinkRegEx))
          // Get the link path from the attribute
          .map((attr) => attr[1])

        // Create errors for each link path that includes a hardcoded version
        for (const linkPath of hrefsMissingSlashes) {
          const range = getRange(child.line, linkPath)
          addError(
            onError,
            child.lineNumber,
            `There looks to be a hardcoded version in this link: ${linkPath}`,
            linkPath,
            range,
            null, // No fix possible
          )
        }
      }
    })
  },
}
