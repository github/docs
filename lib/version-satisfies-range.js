import semver from 'semver'

// Where "version" is an Enterprise Server release number, like `3.1`,
// and "range" is a semver range operator with another number, like `<=3.2`.
export default function versionSatisfiesRange(version, range) {
  // workaround for Enterprise Server 11.10.340 because we can't use semver to
  // compare it to 2.x like we can with 2.0+
  if (version === '11.10.340') return range.startsWith('<')

  return semver.satisfies(semver.coerce(version), range)
}
