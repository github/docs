import fs from 'fs/promises'

import { glob } from 'glob'

/*
 * Verify that a list of file paths are present and optionally have a CODEOWNERS entry
 *
 * name: Readable description of file(s)
 * path: Path to secure files (must match entry in CODEOWNERS if code owner required)
 * requiredCodeOwner: (optional) Name of code owner if a code owner is required
 */
const secureFiles = [
  {
    name: 'Security hardening your deployments',
    path: 'content/actions/deployment/security-hardening-your-deployments/**',
    requiredCodeOwner: 'github/oidc',
  },
]

const codeOwnersFile = await fs.readFile('.github/CODEOWNERS', 'utf8')
const codeOwners = codeOwnersFile.split(/\r?\n/)

describe('Secure file paths are present and have code owners if required', () => {
  for (const file of secureFiles) {
    test(`secure file(s) check for: ${file.name}`, async () => {
      // Verify file(s) exist in provided path
      const matchingFiles = await glob(file.path)
      expect(matchingFiles.length, `Expected to find content in "${file.path}"`).toBeGreaterThan(0)

      // Verify there are code owners for file(s)
      if (file.requiredCodeOwner) {
        const matchingEntry = codeOwners.find((entry) => entry.includes(file.path))
        expect(
          matchingEntry?.toLowerCase().includes(file.requiredCodeOwner.toLowerCase()),
          `Code owner for ${file.name} expected to be @${file.requiredCodeOwner.replaceAll(
            '@',
            '',
          )}`,
        ).toBeTruthy()
      }
    })
  }
})
