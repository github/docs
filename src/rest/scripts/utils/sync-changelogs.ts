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

// The initial REST API version predates rest-api-description changelogs, so
// this fallback keeps the generated output complete. Keyed by ifversion expression.
const INITIAL_VERSION = '2022-11-28'
const INITIAL_VERSION_SECTIONS: Record<string, VersionSection> = {
  fpt: {
    version: INITIAL_VERSION,
    content: `## Version ${INITIAL_VERSION}\n\nVersion \`${INITIAL_VERSION}\` is the first version of the GitHub Free, Pro & Team REST API after date-based versioning was introduced. This version does not include any breaking changes.`,
  },
  ghec: {
    version: INITIAL_VERSION,
    content: `## Version ${INITIAL_VERSION}\n\nVersion \`${INITIAL_VERSION}\` is the first version of the GitHub Enterprise Cloud REST API after date-based versioning was introduced. This version does not include any breaking changes.`,
  },
}

// buildVersionMappings maps docs short names to rest-api-description directories
// and Liquid ifversion expressions. Examples: fpt -> api.github.com and fpt;
// ghec -> ghec and ghec; ghes-<release> -> ghes-<release> and ghes = <release>.
function buildVersionMappings(versionNames: Record<string, string>): VersionMapping[] {
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
      // GitHub Enterprise Server source directories include the release number.
      sourceDir = `ghes-${versionObj.currentRelease}`
      ifversionExpr = `ghes = ${versionObj.currentRelease}`
    } else {
      sourceDir = reverseMapping[versionObj.shortName] || versionObj.shortName
      ifversionExpr = versionObj.shortName
    }

    mappings.push({ sourceDir, ifversionExpr })
  }

  return mappings
}

export function getChangelogPath(sourceRepoDir: string, releaseDir: string): string {
  if (sourceRepoDir === REST_API_DESCRIPTION_ROOT) {
    return path.join(REST_API_DESCRIPTION_ROOT, 'descriptions-next', releaseDir, 'CHANGELOG.md')
  }
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

// parseVersionSections drops the title and intro, then splits at headings for
// versions with YYYY-MM-DD dates.
export function parseVersionSections(markdown: string): VersionSection[] {
  const lines = markdown.split('\n')
  const sections: VersionSection[] = []
  let currentVersion: string | null = null
  let currentLines: string[] = []
  let pastHeader = false

  for (const line of lines) {
    if (!pastHeader && line.startsWith('# ')) {
      pastHeader = true
      continue
    }

    const versionMatch = line.match(/^## Version (\d{4}-\d{2}-\d{2})/)
    if (versionMatch) {
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

  if (currentVersion) {
    sections.push({
      version: currentVersion,
      content: currentLines.join('\n').trim(),
    })
  }

  return sections
}

// syncChangelogs disables liquid-quoted-conditional-arg because generated Liquid
// compares quoted date strings such as "YYYY-MM-DD" <= query.apiVersion, which
// Liquid accepts.
// It also disables search-replace and GHD046 because upstream changelogs can
// contain docs.github.com URLs and "deprecated" terms.
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

    let sections: VersionSection[]

    if (!existsSync(changelogPath)) {
      console.log(`  ⏭️  No changelog found for ${sourceDir}.`)
      sections = []
    } else {
      const markdown = await readFile(changelogPath, 'utf-8')
      sections = parseVersionSections(markdown)
    }

    // Inject the hardcoded initial section when the source changelog lacks it for this product.
    const hasInitialVersion = sections.some((s) => s.version === INITIAL_VERSION)
    if (!hasInitialVersion && ifversionExpr in INITIAL_VERSION_SECTIONS) {
      sections.push(INITIAL_VERSION_SECTIONS[ifversionExpr])
    }

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

  const lintDisable =
    '<!-- markdownlint-disable liquid-quoted-conditional-arg search-replace GHD046 -->\n'
  const output = `${lintDisable + outputBlocks.join('\n\n')}\n`
  await writeFile(outputPath, output)
  console.log(`\n✅ Wrote ${outputPath}`)
}
