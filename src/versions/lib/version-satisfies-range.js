import semver from 'semver'

// Where "release" is a release number, like `3.1` for Enterprise Server,
// and "range" is a semver range operator with another number, like `<=3.2`.
export default function versionSatisfiesRange(release, range) {
  // workaround for Enterprise Server 11.10.340 because we can't use semver to
  // compare it to 2.x like we can with 2.0+
  if (release === '11.10.340') return range.startsWith('<')

  // If the release is '*', we want it to evaluate to false against the range 'next'
  // but to true against itself ('*'). Unfortunately by default it will evaluate to
  // true against 'next'. So we have to do a hack here and replace it with a
  // dummy value of '1.0', which will get the results we want.
  if (release === '*') {
    release = '1.0'
  }

  return semver.satisfies(semver.coerce(release), range)
}
