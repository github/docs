// The homepage maps to the root path.
// GitHub file paths use forward slashes on every OS, so match a literal slash, not path.sep.
export function contentUrlPath(fileName: string): string {
  if (fileName === 'index.md') return ''
  return fileName.replace(/\/index\.md$/, '').replace(/\.md$/, '')
}
