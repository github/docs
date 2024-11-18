// This separate file from config.json was necessary in order to load
// static information into our client-side React components. But,
// we also need a JSON file to have a format with static data that can be
// written to automatically. The sync scripts for REST update information
// in the JSON file.

// These paths must match the paths in src/pages/[versionId]/rest
export const nonAutomatedRestPaths = [
  '/rest/quickstart',
  '/rest/about-the-rest-api',
  '/rest/using-the-rest-api',
  '/rest/authentication',
  '/rest/guides',
]

// This path is used to set the page in the
// src/rest/components/ApiVersionPicker.tsx component. That component
// has a link to the page that describes what api versioning is.
export const apiVersionPath = '/rest/about-the-rest-api/api-versions'
