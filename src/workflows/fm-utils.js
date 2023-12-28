import { readFileSync } from 'fs'
import matter from 'gray-matter'

// Filters out files from a list of filePaths
// that have a type property in their frontmatter
// where the type value matches the type argument
export function checkContentType(filePaths, type) {
  const unallowedChangedFiles = []
  for (const filePath of filePaths) {
    const { data } = matter(readFileSync(filePath, 'utf8'))
    if (data.type === type) {
      unallowedChangedFiles.push(filePath)
    }
  }
  return unallowedChangedFiles
}
