import { format } from 'node:util'

import languages from '#src/languages/lib/languages.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { POSSIBLE_HIGHLIGHT_FIELDS, DEFAULT_HIGHLIGHT_FIELDS } from './es-search.js'

const DEFAULT_SIZE = 10
const DEFAULT_AUTOCOMPLETE_SIZE = 8
const MAX_SIZE = 50 // How much you return has a strong impact on performance
const MAX_AUTOCOMPLETE_SIZE = 10
const DEFAULT_PAGE = 1
const POSSIBLE_SORTS = ['best', 'relevance']
const DEFAULT_SORT = POSSIBLE_SORTS[0]
const MAX_PAGE = 10

// There are some fields you can optionally include in the output.
// These are fields available in Elasticsearch that we don't include in
// the output by default. E.g. `...&include=intro`
// Requesting anything that is not in this list will result in
// a 400 Bad Request.
const V1_ADDITIONAL_INCLUDES = ['intro', 'headings']

// If someone searches for `...&version=3.5` what they actually mean
// is `ghes-3.5`. This is because of legacy formatting with the old search.
// In some distant future we can clean up any client enough that this
// aliasing won't be necessary.
const versionAliases = {}
const prefixVersionAliases = {}
Object.values(allVersions).forEach((info) => {
  if (info.hasNumberedReleases) {
    versionAliases[info.currentRelease] = info.miscVersionName
  } else {
    versionAliases[info.version] = info.miscVersionName
    versionAliases[info.miscVersionName] = info.miscVersionName
  }
  // This makes it so you can search for `?version=enterprise-server`
  // and that actually means `?version=ghes` because there's an index
  // called `github-autocomplete-en-ghes`.
  prefixVersionAliases[info.plan] = info.shortName
  prefixVersionAliases[info.shortName] = info.shortName
})

function getIndexPrefix() {
  // This logic is mirrored in the scripts we use before running tests
  // In particular, see the `index-test-fixtures` npm script.
  // That's expected to be run before CI and local vitest testing.
  // The reason we have a deliberately different index name (by prefix)
  // for testing compared to regular operation is to make it convenient
  // for engineers working on local manual testing *and* automated
  // testing without have to re-index different content (e.g. fixtures
  // vs real content) on the same index name.
  if (process.env.NODE_ENV === 'test') return 'tests_'

  return ''
}

class ValidationError extends Error {}

const PARAMS = [
  { key: 'query' },
  {
    key: 'version',
    default_: 'dotcom',
    validate: (v) => {
      if (versionAliases[v] || allVersions[v]) return true
      const valid = [...Object.keys(versionAliases), ...Object.keys(allVersions)]
      throw new ValidationError(`'${v}' not in ${valid}`)
    },
  },
  { key: 'language', default_: 'en', validate: (v) => v in languages },
  {
    key: 'size',
    default_: DEFAULT_SIZE,
    cast: (v) => parseInt(v, 10),
    validate: (v) => v >= 0 && v <= MAX_SIZE,
  },
  {
    key: 'page',
    default_: DEFAULT_PAGE,
    cast: (v) => parseInt(v, 10),
    validate: (v) => v >= 1 && v <= MAX_PAGE,
  },
  { key: 'sort', default_: DEFAULT_SORT, validate: (v) => POSSIBLE_SORTS.includes(v) },
  {
    key: 'highlights',
    default_: DEFAULT_HIGHLIGHT_FIELDS,
    cast: (v) => (Array.isArray(v) ? v : [v]),
    multiple: true,
    validate: (v) => {
      for (const highlight of v) {
        if (!POSSIBLE_HIGHLIGHT_FIELDS.includes(highlight)) {
          throw new ValidationError(`highlight value '${highlight}' is not valid`)
        }
      }
      return true
    },
  },
  { key: 'autocomplete', default_: false, cast: toBoolean },
  { key: 'debug', default_: process.env.NODE_ENV === 'development', cast: toBoolean },
  {
    key: 'include',
    default_: [],
    cast: toArray,
    multiple: true,
    // Note: At the time of writing this general validator middleware
    // doesn't yet know it's being used by the v1 version.
    // But we don't have any other versions yet so no need to
    // over-engineer this more.
    validate: (values) => values.every((value) => V1_ADDITIONAL_INCLUDES.includes(value)),
  },
]

const AUTOCOMPLETE_PARAMS = [
  { key: 'query' },
  { key: 'language', default_: 'en', validate: (v) => v in languages },
  {
    key: 'version',
    default_: 'free-pro-team',
    validate: (v) => {
      if (prefixVersionAliases[v] || allVersions[v]) return true
      if (Object.values(prefixVersionAliases).includes(v)) return true
      const valid = [
        ...Object.keys(prefixVersionAliases),
        ...Object.values(prefixVersionAliases),
        ...Object.keys(allVersions),
      ]
      throw new ValidationError(`'${v}' not in ${valid.join(', ')}`)
    },
  },
  {
    key: 'size',
    default_: DEFAULT_AUTOCOMPLETE_SIZE,
    cast: (v) => parseInt(v, 10),
    validate: (v) => v >= 0 && v <= MAX_AUTOCOMPLETE_SIZE,
  },
]
export function getAutocompleteSearchFromRequest(req, force = {}) {
  const { search, validationErrors } = getSearchFromRequest(req, {}, AUTOCOMPLETE_PARAMS)
  if (validationErrors.length === 0) {
    const version = prefixVersionAliases[search.version] || allVersions[search.version].shortName
    search.indexName = `${getIndexPrefix()}github-autocomplete-${search.language}-${version}`
  }
  return { search, validationErrors }
}

export function getSearchFromRequest(req, force = {}, params = PARAMS) {
  const search = {}
  const validationErrors = []

  for (const { key, default_, cast, validate, multiple } of params) {
    // This is necessary because when the version or language comes from
    // the pathname, we don't want pick these up from the query string.
    // This function gets used by /$locale/$version/search
    // *and* /api/search/v1?language=$locale&version=$version
    if (key in force) {
      search[key] = force[key]
      continue
    }

    let value = req.query[key]
    if (!value || (typeof value === 'string' && !value.trim())) {
      if (default_ === undefined) {
        // no value and no default, bad!
        validationErrors.push({ error: `No truthy value for key '${key}'`, key })
        continue
      }
      value = default_
    }
    if (cast) {
      value = cast(value)
    }
    try {
      if (validate && !validate(value)) {
        validationErrors.push({
          error: format('Not a valid value (%O) for key %O', value, key),
          key,
        })
      }
    } catch (err) {
      if (err instanceof ValidationError) {
        validationErrors.push({ error: err.toString(), field: key })
      } else {
        throw err
      }
    }
    if (!multiple && Array.isArray(value)) {
      validationErrors.push({
        error: format('Cannot have multiple values (%O) for key %O', value, key),
        key,
      })
    }

    search[key] = value
  }

  if (!validationErrors.length) {
    const version =
      prefixVersionAliases[search.version] ||
      versionAliases[search.version] ||
      allVersions[search.version].miscVersionName
    search.indexName = `${getIndexPrefix()}github-docs-${version}-${search.language}` // github-docs-ghes-3.5-en
  }

  return { search, validationErrors }
}

function toBoolean(value) {
  if (value === 'true' || value === '1') return true
  return false
}

function toArray(value) {
  return Array.isArray(value) ? value : [value]
}
