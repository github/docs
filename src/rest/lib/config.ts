// Keep this separate from config.json because client React components need static imports
// while REST sync scripts need writable JSON config.

// Keep these paths matching src/pages/[versionId]/rest.
export const nonAutomatedRestPaths: readonly string[] = [
  '/rest/quickstart',
  '/rest/about-the-rest-api',
  '/rest/using-the-rest-api',
  '/rest/authentication',
  '/rest/guides',
] as const

// ApiVersionPicker links here to explain REST API versioning.
export const apiVersionPath: string = '/rest/about-the-rest-api/api-versions'
