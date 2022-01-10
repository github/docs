import { Liquid, defaultOperators } from 'liquidjs'
import path from 'path'
import semver from 'semver'

// GHE versions are not valid SemVer, but can be coerced...
// https://github.com/npm/node-semver#coercion
function matchesVersionString(input) {
  return typeof input === 'string' && input.match(/^(?:[a-z](?:[a-z-]*[a-z])?@)?\d+(?:\.\d+)*/)
}
// Support new version formats where version = plan@release
// e.g., enterprise-server@2.21, where enterprise-server is the plan and 2.21 is the release
// e.g., free-pro-team@latest, where free-pro-team is the plan and latest is the release
// in addition to legacy formats where the version passed is simply 2.21
function splitVersion(version) {
  // The default plan when working with versions is "enterprise-server".
  // Default to that value here to support backward compatibility from before
  // plans were explicitly included.
  let plan = 'enterprise-server'
  let release

  const lastIndex = version.lastIndexOf('@')
  if (lastIndex === -1) {
    release = version
  } else {
    plan = version.slice(0, lastIndex)
    release = version.slice(lastIndex + 1)
  }

  return [plan, release]
}

const engine = new Liquid({
  root: path.join(process.cwd(), 'includes'),
  extname: '.html',
  dynamicPartials: false,
  operators: {
    ...defaultOperators,
    ver_gt: (left, right) => {
      if (!matchesVersionString(left)) return false
      if (!matchesVersionString(right)) return false

      const [leftPlan, leftRelease] = splitVersion(left)
      const [rightPlan, rightRelease] = splitVersion(right)

      if (leftPlan !== rightPlan) return false

      return semver.gt(semver.coerce(leftRelease), semver.coerce(rightRelease))
    },
    ver_lt: (left, right) => {
      if (!matchesVersionString(left)) return false
      if (!matchesVersionString(right)) return false

      const [leftPlan, leftRelease] = splitVersion(left)
      const [rightPlan, rightRelease] = splitVersion(right)

      if (leftPlan !== rightPlan) return false

      return semver.lt(semver.coerce(leftRelease), semver.coerce(rightRelease))
    },
  },
})

export default engine
