import { existsSync, readFileSync } from 'fs'
import matter from '@gr2m/gray-matter'

// The file paths whose frontmatter `contentType` matches `contentType`.
export function checkContentType(filePaths: string[], contentType: string) {
  const unallowedChangedFiles = []
  for (const filePath of filePaths) {
    if (!existsSync(filePath)) continue

    const { data } = matter(readFileSync(filePath, 'utf8'))
    if (data.contentType === contentType) {
      unallowedChangedFiles.push(filePath)
    }
  }
  return unallowedChangedFiles
}
