const semver = require('semver')

// workaround for Enterprise Server 11.10.340 because we can't use semver to
// compare it to 2.x like we can with 2.0+
module.exports = function versionSatisfiesRange (version, range) {
  if (version === '11.10.340') return range.startsWith('<')

  return semver.satisfies(semver.coerce(version), range)
}
