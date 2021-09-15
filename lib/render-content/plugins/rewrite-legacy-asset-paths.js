import { visit } from 'unist-util-visit'
import fs from 'fs'
import { legacyAssetVersions } from '../../enterprise-server-releases.js'
import { allVersions } from '../../all-versions.js'

const matcher = (node) =>
  node.type === 'element' &&
  node.tagName === 'img' &&
  node.properties.src &&
  node.properties.src.startsWith('/assets/images')

// This module rewrites asset paths for specific Enterprise versions that
// were migrated from AWS S3 image storage. Only images that were unique
// were stored in a new /assets/enterprise path. Once these versions are
// deprecated, we will have one source of truth for image assets and we
// can remove this module.
// Source example: /assets/images/foo.png
// Rewritten: /assets/enterprise/2.20/assets/images/foo.png
export default function checkForLegacyAssetPaths({ currentVersion, relativePath }) {
  // Bail if we don't have a relativePath in this context
  if (!relativePath) return
  // skip if this is the homepage
  if (relativePath === 'index.md') return
  // skip for any versions that aren't enterprise-server
  if (!allVersions[currentVersion].plan === 'enterprise-server') return
  const enterpriseRelease = allVersions[currentVersion].currentRelease
  if (!legacyAssetVersions.includes(enterpriseRelease)) return

  return async (tree) => {
    const promises = []
    visit(tree, matcher, visitor)
    await Promise.all(promises)

    function visitor(node) {
      const legacyAssetPath = `/assets/images/enterprise/legacy-format/${enterpriseRelease}${node.properties.src}`
      const p = fs.promises
        .access(`${process.cwd()}${legacyAssetPath}`, fs.constants.F_OK)
        // rewrite the nodes src
        .then(() => {
          node.properties.src = `${legacyAssetPath}`
        })
        .catch(() => node)
      promises.push(p)
    }
  }
}
