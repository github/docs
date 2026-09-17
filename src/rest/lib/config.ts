// Separate from config.json because client-side React components need to
// import static values, while the REST sync scripts need a JSON file they can
// write to.

// These paths must match the paths in src/pages/[versionId]/rest
export const nonAutomatedRestPaths: readonly string[] = [
  '/rest/quickstart',
  '/rest/about-the-rest-api',
  '/rest/using-the-rest-api',
  '/rest/authentication',
  '/rest/guides',
] as const

// ApiVersionPicker links here to explain what API versioning is.
export const apiVersionPath: string = '/rest/about-the-rest-api/api-versions'
