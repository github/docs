import { readFile, writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

import { allVersions } from '@/versions/lib/all-versions'

const REST_API_DESCRIPTION_ROOT = 'rest-api-description'
const OUTPUT_PATH = 'data/reusables/rest-api/breaking-changes-changelog.md'

interface VersionMapping {
  sourceDir: string
  ifversionExpr: string
}

interface VersionSection {
  version: string
  content: string
}

// Build a list of { sourceDir, ifversionExpr } tuples from allVersions.
// For example:
//   fpt → source dir "api.github.com", ifversion "fpt"
//   ghec → source dir "ghec", ifversion "ghec"
//   ghes-3.14 → source dir "ghes-3.14", ifversion "ghes = 3.14"
function buildVersionMappings(versionNames: Record<string, string>): VersionMapping[] {
  // Build reverse lookup: docs short name → source directory name
  // e.g. "fpt" → "api.github.com", "ghec" → "ghec"
  const reverseMapping: Record<string, string> = {}
  for (const [sourceDir, docsName] of Object.entries(versionNames)) {
    reverseMapping[docsName] = sourceDir
  }

  const mappings: VersionMapping[] = []
  const seen = new Set<string>()

  for (const versionObj of Object.values(allVersions)) {
    const key = versionObj.openApiVersionName
    if (seen.has(key)) continue
    seen.add(key)

    let sourceDir: string
    let ifversionExpr: string

    if (versionObj.shortName === 'ghes') {
      // GHES versions: source dir is like "ghes-3.14", ifversion is "ghes = 3.14"
      sourceDir = `ghes-${versionObj.currentRelease}`
      ifversionExpr = `ghes = ${versionObj.currentRelease}`
    } else {
      // Non-GHES: look up source dir from reverse mapping
      sourceDir = reverseMapping[versionObj.shortName] || versionObj.shortName
      ifversionExpr = versionObj.shortName
    }

    mappings.push({ sourceDir, ifversionExpr })
  }

  return mappings
}

// Resolve the changelog file path based on whether we're using
// rest-api-description or the local github repo.
export function getChangelogPath(sourceRepoDir: string, releaseDir: string): string {
  if (sourceRepoDir === REST_API_DESCRIPTION_ROOT) {
    return path.join(REST_API_DESCRIPTION_ROOT, 'descriptions-next', releaseDir, 'CHANGELOG.md')
  }
  // Local github repo dev workflow
  return path.join(
    sourceRepoDir,
    'app',
    'api',
    'description',
    'changelogs',
    releaseDir,
    'CHANGELOG.md',
  )
}

// Parse a CHANGELOG.md into an array of { version, content } objects
// by splitting on `## Version YYYY-MM-DD` headings.
// Strips the top-level `# REST API Breaking Changes for ...` title and intro paragraph.
export function parseVersionSections(markdown: string): VersionSection[] {
  const lines = markdown.split('\n')
  const sections: VersionSection[] = []
  let currentVersion: string | null = null
  let currentLines: string[] = []
  let pastHeader = false

  for (const line of lines) {
    // Skip the top-level title (# REST API Breaking Changes ...)
    if (!pastHeader && line.startsWith('# ')) {
      pastHeader = true
      continue
    }

    // Skip intro paragraph lines before the first ## Version heading
    const versionMatch = line.match(/^## Version (\d{4}-\d{2}-\d{2})/)
    if (versionMatch) {
      // Save previous section if any
      if (currentVersion) {
        sections.push({
          version: currentVersion,
          content: currentLines.join('\n').trim(),
        })
      }
      currentVersion = versionMatch[1]
      currentLines = [line]
      pastHeader = true
      continue
    }

    if (currentVersion) {
      currentLines.push(line)
    }
  }

  // Save last section
  if (currentVersion) {
    sections.push({
      version: currentVersion,
      content: currentLines.join('\n').trim(),
    })
  }

  return sections
}

// Main function: reads changelogs from each release directory, wraps them
// in product-version gating ({% ifversion %}) and API-version filtering
// ({% if query.apiVersion %}), and writes a combined data file.
export async function syncChangelogs(
  sourceRepoDir: string,
  versionNames: Record<string, string>,
  outputPath: string = OUTPUT_PATH,
): Promise<void> {
  console.log(`\n▶️  Generating REST API breaking changes changelog...\n`)

  const mappings = buildVersionMappings(versionNames)
  const outputBlocks: string[] = []

  for (const { sourceDir, ifversionExpr } of mappings) {
    const changelogPath = getChangelogPath(sourceRepoDir, sourceDir)

    if (!existsSync(changelogPath)) {
      console.log(`  ⏭️  No changelog found for ${sourceDir}, skipping.`)
      continue
    }

    const markdown = await readFile(changelogPath, 'utf-8')
    const sections = parseVersionSections(markdown)

    if (sections.length === 0) {
      console.log(`  ⏭️  No version sections found in changelog for ${sourceDir}, skipping.`)
      continue
    }

    const sectionBlocks = sections.map(({ version, content }) => {
      return [
        `{% if query.apiVersion == nil or "${version}" <= query.apiVersion %}`,
        content,
        '',
        '{% endif %}',
      ].join('\n')
    })

    const releaseBlock = [
      `{% ifversion ${ifversionExpr} %}`,
      sectionBlocks.join('\n'),
      '{% endif %}',
    ].join('\n')

    outputBlocks.push(releaseBlock)
    console.log(`  ✅ Processed changelog for ${sourceDir} (${sections.length} version sections)`)
  }

  if (outputBlocks.length === 0) {
    console.log('  ⚠️  No changelogs found. Skipping changelog generation.')
    return
  }

  // The generated Liquid uses quoted date strings in comparisons
  // (e.g., "2022-11-28" <= query.apiVersion) which is valid Liquid but
  // triggers the GHD016 lint rule that flags quoted conditional args.
  // The upstream changelogs may also contain docs.github.com URLs and
  // "deprecated" terminology that trigger docs-domain and GHD046 rules.
  const lintDisable =
    '<!-- markdownlint-disable liquid-quoted-conditional-arg search-replace GHD046 -->\n'
  const output = `${lintDisable + outputBlocks.join('\n\n')}\n`
  await writeFile(outputPath, output)
  console.log(`\n✅ Wrote ${outputPath}`)
}
