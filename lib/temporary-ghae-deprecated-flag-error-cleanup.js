// lib/frontmatter contains a temporary check for presence of deprecated GHAE
// feature flags in FM. See details in docs-internal#29178.
// TODO: Remove that check and this cleanup kludge after GHAE semantic versioning
// has been in place for a while.
//
// We need this kludge because if lib/frontmatter finds an old flag using the
// 'pattern' check, the semver 'conform' check will also fail. Showing both errors would
// be confusing for contributors, so we want to only show the pattern failure because it has
// a helpful customized message. Due to a limitation of revalidator, it's not possible
// to prefer one error over the other programmatically. So this function deletes the
// conform error if a pattern error is found.
export default function cleanUpDeprecatedGhaeFlagErrors(errors) {
  errors.forEach((error) => {
    if (error.property === 'versions.ghae' && error.attribute === 'pattern') {
      const currIndex = errors.indexOf(error)
      const prevIndex = currIndex - 1 // Hack to get the conform error, which comes before this one.

      // If this is a translated file, remove all errors on deprecated flags.
      // If this is an English file, remove the conform error.
      error.filepath?.includes('/translations/')
        ? errors.splice(prevIndex, 2)
        : errors.splice(prevIndex, 1)
    }
  })

  return errors
}
