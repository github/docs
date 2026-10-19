import fs from 'fs'
import walk from 'walk-sync'
import path from 'path'
import { Tokenizer, TypeGuards, type TopLevelToken, type TagToken } from 'liquidjs'
import frontmatter from '@/frame/lib/read-frontmatter'
import { allVersions } from '@/versions/lib/all-versions'
import { deprecated, oldestSupported } from '@/versions/lib/enterprise-server-releases'

const allVersionKeys = Object.values(allVersions)
const dryRun = ['-d', '--dry-run'].includes(process.argv[2])

const walkFiles = (pathToWalk: string, ext: string): string[] => {
  return walk(path.posix.join(process.cwd(), pathToWalk), {
    includeBasePath: true,
    directories: false,
  }).filter((file) => file.endsWith(ext) && !file.endsWith('README.md'))
}

const markdownFiles = walkFiles('content', '.md').concat(walkFiles('data', '.md'))
const yamlFiles = walkFiles('data', '.yml')

interface ReplacementsMap {
  [key: string]: string
}

interface VersionData {
  versions?: Record<string, string> | string
  [key: string]: unknown
}

interface OperatorsMap {
  [key: string]: string
  '==': string
  ver_gt: string
  ver_lt: string
  '!=': string
}

const operatorsMap: OperatorsMap = {
  '==': '=',
  ver_gt: '>',
  ver_lt: '<',
  '!=': '!=', // Already matches ifversion syntax.
}

// Converts long-form Liquid conditionals to ifversion tags and short version names
// in versions frontmatter.

async function main() {
  if (dryRun)
    console.log('This is a dry run! The script will not write any files. Use for debugging.\n')

  // Markdown files need both Liquid conditionals and versions frontmatter converted.
  console.log('Updating Liquid conditionals and versions frontmatter in Markdown files...\n')
  for (const file of markdownFiles) {
    // Collect replacements before editing so nested loops do not rewrite generated conditionals.
    const content = fs.readFileSync(file, 'utf8')
    const contentReplacements = getLiquidReplacements(content, file)
    const newContent = makeLiquidReplacements(contentReplacements, content)

    // Frontmatter versions need short plan names in addition to Liquid updates.
    const { data } = frontmatter(newContent) as { data: VersionData }
    if (data.versions && typeof data.versions !== 'string') {
      const versions = data.versions as Record<string, string>
      for (const [plan, value] of Object.entries(versions)) {
        // Normalize legacy versions before writing short plan names.
        const valueToUse = value
          .replace('2.23', '3.0')
          .replace(`>=${oldestSupported}`, '*')
          .replace(/>=?2\.20/, '*')
          .replace(/>=?2\.19/, '*')

        // Find the version config before replacing the plan with its short name.
        const versionObj = allVersionKeys.find(
          (version) => version.plan === plan || version.shortName === plan,
        )
        if (!versionObj) {
          console.error(`can't find supported version for ${plan}`)
          process.exit(1)
        }
        delete versions[plan]
        versions[versionObj.shortName] = valueToUse
      }
    }

    if (dryRun) {
      console.log(contentReplacements)
    } else {
      fs.writeFileSync(
        file,
        frontmatter.stringify(
          newContent,
          data,
          // lineWidth is a js-yaml option passed through gray-matter, not in its types.
          { lineWidth: 10000 } as unknown as Parameters<typeof frontmatter.stringify>[2],
        ),
      )
    }
  }

  // YAML data files need Liquid conditional and versions-key rewrites.
  console.log('Updating Liquid conditionals in YAML files...\n')
  for (const file of yamlFiles) {
    const yamlContent = fs.readFileSync(file, 'utf8')
    const yamlReplacements = getLiquidReplacements(yamlContent, file)
    // YAML versions keys use short plan names too.
    const newYamlContent = makeLiquidReplacements(yamlReplacements, yamlContent)
      .replace(/("|')?free-pro-team("|')?:/g, 'fpt:')
      .replace(/("|')?enterprise-server("|')?:/g, 'ghes:')

    if (dryRun) {
      console.log(yamlReplacements)
    } else {
      fs.writeFileSync(file, newYamlContent)
    }
  }
}

try {
  await main()
  console.log('Done!')
} catch (err) {
  console.error(err)
  process.exit(1)
}

// Remove verbose input properties for readable debugging output.
function removeInputProps(arrayOfObjects: TopLevelToken[]): TopLevelToken[] {
  return arrayOfObjects.map((obj) => {
    const record = obj as unknown as Record<string, unknown>
    delete record.input
    if ('token' in record && record.token && typeof record.token === 'object') {
      delete (record.token as Record<string, unknown>).input
    }
    return obj
  })
}

// makeLiquidReplacements also collapses "ghes and ghes" from old deprecation-script
// guards. Example: enterpriseServerVersions contains currentVersion plus
// currentVersion ver_gt enterprise-server@3.XX becomes ghes > 3.XX.
function makeLiquidReplacements(replacementsObj: ReplacementsMap, text: string): string {
  let newText = text
  for (const [oldCond, newCond] of Object.entries(replacementsObj)) {
    const oldCondRegex = new RegExp(`({%-?)\\s*?${RegExp.escape(oldCond)}\\s*?(-?%})`, 'g')
    newText = newText
      .replace(oldCondRegex, `$1 ${newCond} $2`)
      // Collapse duplicated GHES guards from old deprecation-script conditionals.
      .replace(/ghes and ghes/g, 'ghes')
  }

  return newText
}

// getLiquidReplacements maps long currentVersion conditionals to ifversion conditionals:
// currentVersion == enterprise-server@3.XX -> ifversion ghes = 3.XX
// currentVersion != free-pro-team@latest -> ifversion not fpt
// currentVersion ver_gt enterprise-server@3.XX -> ifversion ghes > 3.XX
// currentVersion ver_lt enterprise-server@3.XX -> ifversion ghes < 3.XX
// enterpriseServerVersions contains currentVersion -> ifversion ghes
function getLiquidReplacements(content: string, file: string): ReplacementsMap {
  const replacements: ReplacementsMap = {}

  const tokenizer = new Tokenizer(content)
  const tokens = removeInputProps(tokenizer.readTopLevelTokens())

  tokens
    .filter(
      (token): token is TagToken =>
        TypeGuards.isTagToken(token) &&
        (token.name === 'if' || token.name === 'elsif') &&
        token.content.includes('currentVersion'),
    )
    .map((token) => token.content)

  const conditionalTokens = tokens
    .filter(
      (xtoken): xtoken is TagToken =>
        TypeGuards.isTagToken(xtoken) &&
        (xtoken.name === 'if' || xtoken.name === 'elsif') &&
        xtoken.content.includes('currentVersion'),
    )
    .map((xtoken) => xtoken.content)
  for (const token of conditionalTokens) {
    const newToken = token.startsWith('if') ? ['ifversion'] : ['elsif']
    for (const op of token.replace(/(if|elsif) /, '').split(/ (or|and) /)) {
      if (op === 'or' || op === 'and') {
        newToken.push(op)
        continue
      }

      // enterpriseServerVersions contains currentVersion maps to ifversion ghes.
      if (op.includes('enterpriseServerVersions contains currentVersion')) {
        newToken.push('ghes')
        continue
      }

      const opParts = op.split(' ')

      if (!(opParts.length === 3 && opParts[0] === 'currentVersion')) {
        console.error(`Something went wrong with ${token} in ${file}`)
        process.exit(1)
      }

      const operator = opParts[1]
      const [plan, release] = opParts[2].slice(1, -1).split('@')

      const versionObj = allVersionKeys.find((version) => version.plan === plan)

      if (!versionObj) {
        console.error(`Couldn't find a version for ${plan} in "${token}" in ${file}`)
        process.exit(1)
      }

      if (versionObj.hasNumberedReleases) {
        const newOperator: string | undefined = operatorsMap[operator]
        if (!newOperator) {
          console.error(
            `Couldn't find an operator that corresponds to ${operator} in "${token} in "${file}`,
          )
          process.exit(1)
        }

        // Some content still references 1.19, so treat it as deprecated for this conversion.
        deprecated.push('1.19')

        const availableInAllGhes = deprecated.includes(release) && newOperator === '>'

        // A greater-than check against a deprecated release matches every supported GHES release.
        if (availableInAllGhes) {
          newToken.push(versionObj.shortName)
          continue
        }

        const lessThanDeprecated = deprecated.includes(release) && newOperator === '<'
        const lessThanOldestSupported = release === oldestSupported && newOperator === '<'
        const equalsDeprecated = deprecated.includes(release) && newOperator === '='
        const hasDeprecatedContent =
          lessThanDeprecated || lessThanOldestSupported || equalsDeprecated

        // Deprecated-only content needs manual removal instead of conversion.
        if (hasDeprecatedContent) {
          console.error(`Found content that needs to be removed! See "${token} in "${file}`)
          process.exit(1)
        }

        // Legacy 2.23 conditionals map to the first 3.0 release.
        const releaseToUse = release === '2.23' ? '3.0' : release

        newToken.push(`${versionObj.shortName} ${newOperator} ${releaseToUse}`)
        continue
      }

      // Non-numbered inequality maps to ifversion not.
      if (operator === '!=') {
        newToken.push(`not ${versionObj.shortName}`)
        continue
      }

      // Non-numbered releases only support equality after inequality handling.
      if (operator !== '==') {
        console.error(`Expected == but found ${operator} in "${op}" in ${token}`)
        process.exit(1)
      }

      if (release === 'latest') {
        newToken.push(versionObj.shortName)
        continue
      }

      // Keep non-standard non-numbered releases in the condition name, such as github-ae@next.
      newToken.push(`${versionObj.shortName}-${release}`)
    }

    replacements[token] = newToken.join(' ')
  }

  return replacements
}
