import path from 'path'

// Compare whole path segments so content/foo does not also match content/foo-bar.
export function isPathWithin(file: string, target: string): boolean {
  const normalizedFile = path.normalize(file)
  const normalizedTarget = path.normalize(target).replace(/[\\/]+$/, '')
  return (
    normalizedFile === normalizedTarget || normalizedFile.startsWith(normalizedTarget + path.sep)
  )
}
