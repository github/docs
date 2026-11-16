// Copy the previous release's calendar date variants only when the current release has no
// entry yet. Overwriting an existing entry drops calendar versions the current release added.
// Deprecated variants are dropped.
export function updateApiVersionKeys(
  apiVersions: Record<string, string[]>,
  currentReleaseNumber: string,
  previousReleaseNumber: string,
  deprecated: string[],
): Record<string, string[]> {
  for (const key of Object.keys(apiVersions)) {
    if (key.endsWith(previousReleaseNumber)) {
      const newKey = key.replace(previousReleaseNumber, currentReleaseNumber)
      if (!(newKey in apiVersions)) apiVersions[newKey] = apiVersions[key]
    }
    for (const deprecatedRelease of deprecated) {
      if (key.endsWith(deprecatedRelease)) {
        delete apiVersions[key]
      }
    }
  }
  return apiVersions
}
