import semver from 'semver'
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
import { getDeepDataByLanguage } from '#src/data-directory/lib/get-data.js'
import getApplicableVersions from '#src/versions/lib/get-applicable-versions.js'
import { getLiquidTokens, getPositionData } from '../helpers/liquid-utils.js'

const allShortnames = Object.keys(allVersionShortnames)
const getAllPossibleVersionNames = memoize(() => {
  // This function might appear "slow" but it's wrapped in a memoizer
  // so it's only every executed once for all files that the
  // Liquid linting rule functions on.
  // The third argument passed to getDeepDataByLanguage() is only
  // there for the sake of being able to write a unit test on these
  // lint functions.
  return new Set([...Object.keys(getAllFeatures()), ...allShortnames])
})

const getAllFeatures = memoize(() => getDeepDataByLanguage('features', 'en', process.env.ROOT))

const allVersionNames = Object.keys(allVersions)

function isAllVersions(versions) {
  if (versions.length === allVersionNames.length) {
    return versions.every((version) => allVersionNames.includes(version))
  }
  return false
}

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
          null, // getRange(token.content, args),
          null, // No fix possible
        )
      }
    }
  },
}

export const liquidIfVersionVersions = {
  names: ['GHD022', 'liquid-ifversion-versions'],
  description: 'Liquid `ifversion` (and `elsif`) should not always be true',
  tags: ['liquid', 'versioning'],
  function: (params, onError) => {
    const content = params.lines.join('\n')
    const tokens = getLiquidTokens(content)
      .filter((token) => token.kind === TokenKind.Tag)
      .filter((token) => token.name === 'ifversion' || token.name === 'elsif')

    const { name } = params
    for (const token of tokens) {
      const args = token.args
      const { lineNumber } = getPositionData(token, params.lines)
      try {
        const errors = validateIfversionConditionalsVersions(args, getAllFeatures())
        if (errors.length === 0) continue

        if (errors.length) {
          addError(
            onError,
            lineNumber,
            errors.join('. '),
            token.content,
            null, // getRange(token.content, args),
            null, // No fix possible
          )
        }
      } catch (error) {
        console.error(
          `Name that caused the error: ${name}, Token args: '${args}', Line number: ${lineNumber}`,
        )
        throw error
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

// The reason this function is exported is because it's sufficiently
// complex that it needs to be tested in isolation.
export function validateIfversionConditionalsVersions(cond, allFeatures) {
  // Suppose the cond is `ghes >3.1 or some-cool-feature` we need to open
  // that `some-cool-feature` and if that has `{ghes:'>3.0', ghec:'*', fpt:'*'}`
  // then *combined* versions will be `{ghes:'>3.0', ghec:'*', fpt:'*'}`.

  // If the conditions use `and` then we bail because it's too complex to handle.
  // Note, don't use \b (word boundary) regex because it would match `foo-and-bar`.
  if (/\sand\s/.test(cond)) {
    return []
  }

  const errors = []
  const versions = {}
  let hasFutureLessThan = false
  for (const part of cond.split(/\sor\s/)) {
    // For example `fpt or not ghec` or `not ghes or ghec or not fpt`
    if (/(^|\s)not(\s|$)/.test(part)) {
      // Bail because it's too complex to handle.
      return []
    }
    for (const [ver, value] of Object.entries(getVersionsObject(part.trim(), allFeatures))) {
      // If the version value is something like `<=3.0` and the versioning is set
      // to `<3.19` then it means the version can *potentially* match a version
      // that doesn't exist yet, but will, in the future.
      if (/<=?[\d.]+/.test(value)) {
        hasFutureLessThan = true
      }

      if (ver in versions) {
        versions[ver] = lowestVersion(value, versions[ver])
      } else {
        versions[ver] = value
      }
    }
  }

  const applicableVersions = []
  try {
    applicableVersions.push(...getApplicableVersions(versions))
  } catch (error) {
    console.warn(`Condition '${cond}' throws an error when trying to get applicable versions`)
  }

  if (isAllVersions(applicableVersions) && !hasFutureLessThan) {
    errors.push(
      `The Liquid ifversion condition '${cond}' includes all possible versions and will always be true`,
    )
  }
  return errors
}

function getVersionsObject(part, allFeatures) {
  const versions = {}
  if (part in allFeatures) {
    for (const [shortName, version] of Object.entries(allFeatures[part].versions)) {
      const versionOperator =
        version in allFeatures ? getVersionsObject(version, allFeatures) : version
      if (shortName in versions) {
        versions[shortName] = lowestVersion(versionOperator, versions[shortName])
      } else {
        versions[shortName] = versionOperator
      }
    }
  } else if (allShortnames.includes(part)) {
    versions[part] = '*'
  } else if (allShortnames.some((v) => part.startsWith(v))) {
    const shortNamed = allShortnames.find((v) => part.startsWith(v))
    const rest = part.replace(shortNamed, '').trim()
    versions[shortNamed] = rest
  } else {
    throw new Error(`The version '${part}' is neither a short version name or a feature name`)
  }
  return versions
}

function lowestVersion(version1, version2) {
  if (version1 === '*' || version2 === '*') {
    return '*'
  }
  if (semver.lt(semver.minVersion(version1), semver.minVersion(version2))) {
    return version1
  } else {
    return version2
  }
}
