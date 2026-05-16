import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import readFrontmatter from '@/frame/lib/read-frontmatter'
import { schema } from '@/frame/lib/frontmatter'

const MAX_DIRECTORY_DEPTH = 20

/**
 * Enhanced recursive markdown file finder with symlink, depth, and root path checks
 */
export function findMarkdownFiles(
  dir: string,
  rootDir: string,
  depth: number = 0,
  maxDepth: number = MAX_DIRECTORY_DEPTH,
  visited: Set<string> = new Set(),
): string[] {
  const markdownFiles: string[] = []
  let realDir: string
  try {
    realDir = fs.realpathSync(dir)
  } catch {
    // If we can't resolve real path, skip this directory
    return []
  }
  // Prevent escaping root directory
  if (!realDir.startsWith(rootDir)) {
    return []
  }
  // Prevent symlink loops
  if (visited.has(realDir)) {
    return []
  }
  visited.add(realDir)
  // Prevent excessive depth
  if (depth > maxDepth) {
    return []
  }
  let entries: fs.Dirent[]
  try {
    entries = fs.readdirSync(realDir, { withFileTypes: true })
  } catch {
    // If we can't read directory, skip
    return []
  }
  for (const entry of entries) {
    const fullPath = path.join(realDir, entry.name)
    let realFullPath: string
    try {
      realFullPath = fs.realpathSync(fullPath)
    } catch {
      continue
    }
    // Prevent escaping root directory for files
    if (!realFullPath.startsWith(rootDir)) {
      continue
    }
    if (entry.isDirectory()) {
      markdownFiles.push(...findMarkdownFiles(realFullPath, rootDir, depth + 1, maxDepth, visited))
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      markdownFiles.push(realFullPath)
    }
  }
  return markdownFiles
}

interface FrontmatterProperties {
  intro?: string
  [key: string]: unknown
}

/**
 * Function to merge new frontmatter properties into existing file while preserving formatting.
 * Uses surgical replacement to only modify the specific field(s) being updated,
 * preserving all original YAML formatting for unchanged fields.
 */
export function mergeFrontmatterProperties(filePath: string, newPropertiesYaml: string): string {
  const content = fs.readFileSync(filePath, 'utf8')
  const parsed = readFrontmatter(content)

  if (parsed.errors && parsed.errors.length > 0) {
    throw new Error(
      `Failed to parse frontmatter: ${parsed.errors.map((e) => e.message).join(', ')}`,
    )
  }

  if (parsed.content === undefined || parsed.content === null) {
    throw new Error('Failed to parse content from file')
  }

  try {
    // Clean up the AI response - remove markdown code blocks if present
    let cleanedYaml = newPropertiesYaml.trim()
    cleanedYaml = cleanedYaml.replace(/^```ya?ml\s*\n/i, '')
    cleanedYaml = cleanedYaml.replace(/\n```\s*$/i, '')
    cleanedYaml = cleanedYaml.trim()

    const newProperties = yaml.load(cleanedYaml) as FrontmatterProperties

    // Security: Validate against prototype pollution using the official frontmatter schema
    const allowedKeys = Object.keys(schema.properties)

    const sanitizedProperties = Object.fromEntries(
      Object.entries(newProperties).filter(([key]) => {
        if (allowedKeys.includes(key)) {
          return true
        }
        console.warn(`Filtered out potentially unsafe frontmatter key: ${key}`)
        return false
      }),
    )

    // Split content into lines for surgical replacement
    const lines = content.split('\n')
    let inFrontmatter = false
    let frontmatterEndIndex = -1

    // Find frontmatter boundaries
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === '---') {
        if (!inFrontmatter) {
          inFrontmatter = true
        } else {
          frontmatterEndIndex = i
          break
        }
      }
    }

    // Replace each field value while preserving everything else
    for (const [key, value] of Object.entries(sanitizedProperties)) {
      const formattedValue = typeof value === 'string' ? `'${value.replace(/'/g, "''")}'` : value

      // Find the line with this field
      let foundField = false
      for (let i = 1; i < frontmatterEndIndex; i++) {
        const line = lines[i]
        if (line.startsWith(`${key}:`)) {
          foundField = true
          // Simple replacement: keep the field name and spacing, replace the value
          const colonIndex = line.indexOf(':')
          const leadingSpace = line.substring(colonIndex + 1, colonIndex + 2) // Usually a space
          lines[i] = `${key}:${leadingSpace}${formattedValue}`

          // Remove any continuation lines (multi-line values)
          const j = i + 1
          while (j < frontmatterEndIndex && lines[j].startsWith('  ')) {
            lines.splice(j, 1)
            frontmatterEndIndex--
          }
          break
        }
      }

      // If field doesn't exist, add it before the closing ---
      if (!foundField && frontmatterEndIndex > 0) {
        lines.splice(frontmatterEndIndex, 0, `${key}: ${formattedValue}`)
        frontmatterEndIndex++
      }
    }

    return lines.join('\n')
  } catch (error) {
    console.error('Failed to parse AI response as YAML:')
    console.error('Raw AI response:', JSON.stringify(newPropertiesYaml))
    throw new Error(`Failed to parse new frontmatter properties: ${error}`)
  }
}
