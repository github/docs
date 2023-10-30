import { TokenKind } from 'liquidjs'
import { addError } from 'markdownlint-rule-helpers'

import { getRange, addFixErrorDetail } from '../helpers/utils.js'
import { allVersions, allVersionShortnames } from '#src/versions/lib/all-versions.js'
import {
  supported,
  next,
  nextNext,
  deprecated,
} from '#src/versions/lib/enterprise-server-releases.js'
import allowedVersionOperators from '#src/content-render/liquid/ifversion-supported-operators.js'
import { getDeepDataByLanguage } from '../../../../lib/get-data.js'
import { getLiquidTokens, getPositionData } from '../helpers/liquid-utils.js'

const getAllPossibleVersionNames = memoize(() => {
  // This function might appear "slow" but it's wrapped in a memoizer
  // so it's only every executed once for all files that the
  // Liquid linting rule functions on.
  // The third argument passed to getDeepDataByLanguage() is only
  // there for the sake of being able to write a unit test on these
  // lint functions.
  return new Set([
    ...Object.keys(getDeepDataByLanguage('features', 'en', process.env.ROOT)),
    ...Object.keys(allVersionShortnames),
  ])
})

function memoize(func) {
  let cached = null
  return () => {
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
  function: (params, onError) => {
    const content = params.lines.join('\n')

    const tokens = getLiquidTokens(content).filter(
      (token) =>
        token.kind === TokenKind.Tag &&
        token.name === 'if' &&
        token.args.split(/\s+/).some((arg) => getAllPossibleVersionNames().has(arg)),
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
  function: (params, onError) => {
    const content = params.lines.join('\n')
    const tokens = getLiquidTokens(content)
      .filter((token) => token.kind === TokenKind.Tag)
      .filter((token) => token.name === 'ifversion')

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
          null, // getRange(token.content, args),
          null, // No fix possible
        )
      }
    }
  },
}

function validateIfversionConditionals(cond, possibleVersionNames) {
  const validateVersion = (version) => possibleVersionNames.has(version)

  const errors = []

  // Where `cond` is an array of strings, where each string may have one of the following space-separated formats:
  // * Length 1: `<version>` (example: `fpt`)
  // * Length 2: `not <version>` (example: `not ghae`)
  // * Length 3: `<version> <operator> <release>` (example: `ghes > 3.0`)
  //
  // Note that Lengths 1 and 2 may be used with feature-based versioning, but NOT Length 3.
  const condParts = cond.split(/ (or|and) /).filter((part) => !(part === 'or' || part === 'and'))

  condParts.forEach((str) => {
    const strParts = str.split(' ')
    // if length = 1, this should be a valid short version or feature version name.
    if (strParts.length === 1) {
      const version = strParts[0]
      const isValidVersion = validateVersion(version)
      if (!isValidVersion) {
        errors.push(`"${version}" is not a valid short version or feature version name`)
      }
    }

    // if length = 2, this should be 'not' followed by a valid short version name.
    if (strParts.length === 2) {
      const [notKeyword, version] = strParts
      const isValidVersion = validateVersion(version)
      const isValid = notKeyword === 'not' && isValidVersion
      if (!isValid) {
        errors.push(`"${cond}" is not a valid conditional`)
      }
    }

    // if length = 3, this should be a range in the format: ghes > 3.0
    // where the first item is `ghes` (currently the only version with numbered releases),
    // the second item is a supported operator, and the third is a supported GHES release.
    if (strParts.length === 3) {
      const [version, operator, release] = strParts
      const hasSemanticVersioning = Object.values(allVersions).some(
        (v) => (v.hasNumberedReleases || v.internalLatestRelease) && v.shortName === version,
      )
      if (!hasSemanticVersioning) {
        errors.push(
          `Found "${version}" inside "${cond}" with a "${operator}" operator, but "${version}" does not support semantic comparisons"`,
        )
      }
      if (!allowedVersionOperators.includes(operator)) {
        errors.push(
          `Found a "${operator}" operator inside "${cond}", but "${operator}" is not supported`,
        )
      }
      // Check that the versions in conditionals are supported
      // versions of GHES or the first deprecated version. Allowing
      // the first deprecated version to exist in code ensures
      // allows us to deprecate the version before removing
      // the old liquid content.
      if (
        version !== 'ghae' &&
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
  })

  return errors
}
