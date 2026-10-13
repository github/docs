import { TokenKind } from 'liquidjs'
import type { TagToken } from 'liquidjs'
import { addError } from 'markdownlint-rule-helpers'

import { getRange, addFixErrorDetail } from '../helpers/utils'
import { allVersions, allVersionShortnames } from '@/versions/lib/all-versions'
import { supported, next, nextNext, deprecated } from '@/versions/lib/enterprise-server-releases'
import allowedVersionOperators from '@/content-render/liquid/ifversion-supported-operators'
import { getDeepDataByLanguage } from '@/data-directory/lib/get-data'
import { getLiquidTokens, getPositionData } from '../helpers/liquid-utils'
import type { RuleParams, RuleErrorCallback } from '@/content-linter/types'

interface Feature {
  versions: Record<string, string>
  [key: string]: unknown
}

type AllFeatures = Record<string, Feature>

const allShortnames: string[] = Object.keys(allVersionShortnames)
const getAllPossibleVersionNames = memoize((): Set<string> => {
  // Memoization loads features once, and process.env.ROOT lets tests read fixtures.
  return new Set([...Object.keys(getAllFeatures()), ...allShortnames])
})

const getAllFeatures = memoize(
  (): AllFeatures => getDeepDataByLanguage('features', 'en', process.env.ROOT) as AllFeatures,
)

function memoize<T>(func: () => T): () => T {
  let cached: T | null = null
  return (): T => {
    if (!cached) {
      cached = func()
    }
    return cached
  }
}

export const liquidIfTags = {
  names: ['GHD019', 'liquid-if-tags'],
  description:
    'Liquid `ifversion` tags should be used instead of `if` tags when the argument is a valid version',
  tags: ['liquid', 'versioning'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const content = params.lines.join('\n')

    const tokens = getLiquidTokens(content)
      .filter((token): token is TagToken => token.kind === TokenKind.Tag)
      .filter(
        (token) =>
          token.name === 'if' &&
          token.args.split(/\s+/).some((arg: string) => getAllPossibleVersionNames().has(arg)),
      )

    for (const token of tokens) {
      const args = token.args
      const { lineNumber } = getPositionData(token, params.lines)

      addFixErrorDetail(
        onError,
        lineNumber,
        token.content.replace('if', 'ifversion'),
        token.content,
        getRange(token.content, args),
        null, // No fix possible
      )
    }
  },
}

export const liquidIfVersionTags = {
  names: ['GHD020', 'liquid-ifversion-tags'],
  description: 'Liquid `ifversion` tags should contain valid version names as arguments',
  tags: ['liquid', 'versioning'],
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    const content = params.lines.join('\n')
    const tokens = getLiquidTokens(content)
      .filter((token): token is TagToken => token.kind === TokenKind.Tag)
      .filter((token) => token.name === 'ifversion' || token.name === 'elsif')

    for (const token of tokens) {
      const args = token.args

      const ifVersionErrors = validateIfversionConditionals(args, getAllPossibleVersionNames())
      if (ifVersionErrors.length === 0) continue

      const { lineNumber } = getPositionData(token, params.lines)

      if (ifVersionErrors.length) {
        addError(
          onError,
          lineNumber,
          ifVersionErrors.join('. '),
          token.content,
          null,
          null, // No fix possible
        )
      }
    }
  },
}

// Conditions join clauses with "or" or "and".
// Each clause is a version name, "not" plus a version name, or a product range.
// Feature-based versioning supports only the first two formats.
// Examples: fpt, not ghec, and ghes > 3.0.
function validateIfversionConditionals(cond: string, possibleVersionNames: Set<string>): string[] {
  const validateVersion = (version: string): boolean => possibleVersionNames.has(version)

  const errors: string[] = []

  const condParts = cond.split(/ (or|and) /).filter((part) => !(part === 'or' || part === 'and'))

  for (const str of condParts) {
    const strParts = str.split(' ')
    if (strParts.length === 1) {
      const version = strParts[0]
      const isValidVersion = validateVersion(version)
      if (!isValidVersion) {
        errors.push(`"${version}" is not a valid short version or feature version name`)
      }
    }

    if (strParts.length === 2) {
      const [notKeyword, version] = strParts
      const isValidVersion = validateVersion(version)
      const isFeatureBasedVersion = Object.keys(getAllFeatures()).includes(version)

      if (notKeyword !== 'not' || !isValidVersion) {
        errors.push(`"${cond}" is not a valid conditional`)
      } else if (isFeatureBasedVersion) {
        errors.push(
          `"${cond}" is not valid - the 'not' keyword cannot be used with feature-based version "${version}"`,
        )
      }
    }

    // Only products with numbered releases support semantic comparisons.
    if (strParts.length === 3) {
      const [version, operator, release] = strParts
      const hasSemanticVersioning = Object.values(allVersions).some(
        (v) => v.hasNumberedReleases && v.shortName === version,
      )
      if (!hasSemanticVersioning) {
        errors.push(
          `Found "${version}" inside "${cond}" with a "${operator}" operator, but "${version}" does not support semantic comparisons"`,
        )
      }
      // TypeScript cannot infer allowedVersionOperators as a generic readonly string array.
      if (!(allowedVersionOperators as readonly string[]).includes(operator)) {
        errors.push(
          `Found a "${operator}" operator inside "${cond}", but "${operator}" is not supported`,
        )
      }
      // Accept the first deprecated GHES release so content can remove old Liquid.
      if (
        !(
          supported.includes(release) ||
          release === next ||
          release === nextNext ||
          deprecated[0] === release
        )
      ) {
        errors.push(
          `Found ${release} inside "${cond}", but ${release} is not a supported GHES release`,
        )
      }
    }
  }

  return errors
}
