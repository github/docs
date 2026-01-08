/**
 * @purpose Writer tool
 * @description Move files to the relevant directory based on `contentType` frontmatter
 */

import { program } from 'commander'
import fs from 'fs/promises'
import path from 'path'
import chalk from 'chalk'
import { execFileSync } from 'child_process'
import walkFiles from '@/workflows/walk-files.js'
import readFrontmatter from '@/frame/lib/read-frontmatter.js'
import { contentTypesEnum } from '@/frame/lib/frontmatter'

const CONTENT_TYPES = contentTypesEnum.filter(
  (type) => type !== 'homepage' && type !== 'other' && type !== 'landing',
)

// The number of path segments at the product level (e.g., "content/<product>/...").
// Used when determining whether a target directory is a deeper subdirectory.
const PRODUCT_LEVEL_PATH_SEGMENTS = 3

const contentTypeToDir = (contentType: string): string => {
  return contentType === 'rai' ? 'responsible-use' : contentType
}

const validContentTypeDirs = new Set(CONTENT_TYPES.map(contentTypeToDir))

// Helper: Should we skip this index.md file from processing?
function shouldSkipIndexFile(filePath: string): boolean {
  const relativePath = path.relative(process.cwd(), filePath)
  const parts = relativePath.split(path.sep)
  const contentIndex = parts.indexOf('content')

  // Skip product-level index.md: content/product/index.md
  if (parts.length === contentIndex + PRODUCT_LEVEL_PATH_SEGMENTS) return true

  // Skip content-type-level index.md that's already in place: content/product/content-type/index.md
  if (parts.length === contentIndex + 4) {
    const parentDir = parts[parts.length - 2]
    if (validContentTypeDirs.has(parentDir)) return true
  }

  return false
}

// Helper: Calculate target directory for a file
function calculateTarget(filePath: string, contentType: string, productDir: string) {
  const relativePath = path.relative(process.cwd(), filePath)
  const parts = relativePath.split(path.sep)
  const contentIndex = parts.indexOf('content')
  const fileName = path.basename(filePath)

  // Determine target content-type directory
  const targetContentType = contentTypeToDir(contentType)

  // Calculate target path
  if (targetContentType === 'how-tos') {
    // Preserve subdirectory structure for how-tos
    const pathAfterProduct = parts.slice(contentIndex + 2, -1)
    if (pathAfterProduct[0] === 'how-tos') {
      // Already in how-tos, no change
      return { targetDir: path.dirname(filePath), targetPath: filePath }
    } else {
      // Move to how-tos preserving structure
      const targetDir = path.join(productDir, targetContentType, ...pathAfterProduct)
      return { targetDir, targetPath: path.join(targetDir, fileName) }
    }
  } else {
    // Flatten to content-type directory
    const targetDir = path.join(productDir, targetContentType)
    return { targetDir, targetPath: path.join(targetDir, fileName) }
  }
}

interface FileMove {
  filePath: string
  targetDir: string
  targetPath: string
  contentType: string
}

program
  .name('content-type-based-move')
  .description('Reorganize content files into subdirectories based on their contentType property')
  .argument('[paths...]', 'Content paths to process')
  .action(async (paths: string[]) => {
    // ====================
    // 1. GATHER FILES
    // ====================
    const filesToProcess: string[] = []
    if (paths?.length > 0) {
      for (const p of paths) {
        const stats = await fs.stat(p)
        if (stats.isDirectory()) {
          filesToProcess.push(...(await walkFiles(p, ['.md'])))
        } else if (p.endsWith('.md')) {
          filesToProcess.push(p)
        }
      }
    } else {
      filesToProcess.push(...(await walkFiles(path.join(process.cwd(), 'content'), ['.md'])))
    }

    console.log(chalk.white(`Processing ${filesToProcess.length} files...\n`))

    // ====================
    // 2. ANALYZE & PLAN MOVES
    // ====================
    console.log(chalk.white('Analyzing files...\n'))

    const filesToMove: FileMove[] = []
    const skipped: Array<{ file: string; reason: string }> = []
    const targetDirs = new Set<string>() // Relative paths of all target directories
    const subdirTargets = new Set<string>() // Subdirectories receiving index.md files
    const productDirs = new Set<string>()
    const productsWithRai = new Set<string>()

    for (const filePath of filesToProcess) {
      const relativePath = path.relative(process.cwd(), filePath)

      try {
        // Skip certain index.md files
        if (path.basename(filePath) === 'index.md' && shouldSkipIndexFile(filePath)) {
          continue
        }

        // Read and validate contentType
        const fileContent = await fs.readFile(filePath, 'utf-8')
        const { data } = readFrontmatter(fileContent)

        if (!data?.contentType) {
          skipped.push({ file: relativePath, reason: 'No contentType property found' })
          console.log(chalk.yellow(`⚠ Skipping ${relativePath}: No contentType property`))
          continue
        }

        const contentType = data.contentType as string
        const parts = relativePath.split(path.sep)
        const contentIndex = parts.indexOf('content')

        // Skip all landing pages - they should only be product-level index.md and don't move
        if (contentType === 'landing') {
          console.log(chalk.gray(`→ Skipping ${relativePath}: landing pages don't move`))
          continue
        }

        // Validate contentType
        if (!CONTENT_TYPES.includes(contentType as any)) {
          skipped.push({ file: relativePath, reason: `Invalid contentType: ${contentType}` })
          console.log(
            chalk.yellow(`⚠ Skipping ${relativePath}: Invalid contentType "${contentType}"`),
          )
          continue
        }

        // Get product directory
        if (contentIndex === -1 || contentIndex + 1 >= parts.length) {
          console.log(
            chalk.yellow(`⚠ Skipping ${relativePath}: Cannot determine product directory`),
          )
          continue
        }

        const productName = parts[contentIndex + 1]
        const productDir = path.join(process.cwd(), 'content', productName)
        productDirs.add(productDir)

        if (contentType === 'rai') productsWithRai.add(productName)

        // Calculate target
        const { targetDir, targetPath } = calculateTarget(filePath, contentType, productDir)

        // Skip if already in correct location
        if (path.dirname(filePath) === targetDir) continue

        // Skip if target exists
        try {
          await fs.access(targetPath)
          skipped.push({ file: relativePath, reason: 'Target already exists' })
          console.log(chalk.yellow(`⚠ Skipping ${relativePath}: Target file already exists`))
          continue
        } catch {
          // Good, doesn't exist
        }

        // Track this move
        filesToMove.push({ filePath, targetDir, targetPath, contentType })

        const relativeTargetDir = path.relative(process.cwd(), targetDir)
        targetDirs.add(relativeTargetDir)

        // Track subdirectories that will receive index.md files
        if (
          path.basename(filePath) === 'index.md' &&
          relativeTargetDir.split(path.sep).length > PRODUCT_LEVEL_PATH_SEGMENTS
        ) {
          subdirTargets.add(relativeTargetDir)
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(
            chalk.red(`✗ Error analyzing ${relativePath}: ${error.message}\n${error.stack}`),
          )
        } else {
          console.error(chalk.red(`✗ Error analyzing ${relativePath}: ${String(error)}`))
        }
        skipped.push({ file: relativePath, reason: `Error: ${error}` })
      }
    }

    // ====================
    // 3. ENSURE STANDARD DIRECTORIES
    // ====================
    console.log(chalk.white('Ensuring standard content-type directories exist...\n'))

    // Add standard content-type directories for each affected product
    if (paths?.length > 0) {
      for (const p of paths) {
        const fullPath = path.resolve(process.cwd(), p)
        const relativePath = path.relative(process.cwd(), fullPath)
        const parts = relativePath.split(path.sep)
        const contentIndex = parts.indexOf('content')

        if (contentIndex !== -1 && contentIndex + 1 < parts.length) {
          const productName = parts[contentIndex + 1]

          for (const ct of CONTENT_TYPES.filter((t) => t !== 'rai' && t !== 'landing')) {
            targetDirs.add(path.join('content', productName, contentTypeToDir(ct)))
          }

          if (productsWithRai.has(productName)) {
            targetDirs.add(path.join('content', productName, 'responsible-use'))
          }
        }
      }
    }

    // ====================
    // 4. CREATE PLACEHOLDERS
    // ====================
    console.log(chalk.white('Creating placeholder index.md files...\n'))

    const newPlaceholders: string[] = []
    const titleMap: Record<string, string> = {
      'get-started': 'Get started',
      concepts: 'Concepts',
      'how-tos': 'How-tos',
      reference: 'Reference',
      tutorials: 'Tutorials',
      'responsible-use': 'Responsible use',
    }

    for (const dirPath of targetDirs) {
      const absoluteDirPath = path.join(process.cwd(), dirPath)
      const indexPath = path.join(absoluteDirPath, 'index.md')

      try {
        await fs.access(indexPath)
        console.log(chalk.gray(`- Skipping ${dirPath}/index.md (already exists)`))
      } catch {
        // Only create placeholders for top-level content-type directories (not subdirectories)
        if (dirPath.split(path.sep).length > PRODUCT_LEVEL_PATH_SEGMENTS) continue

        // Skip if an index.md will be moved here
        if (subdirTargets.has(dirPath)) {
          console.log(chalk.gray(`- Skipping ${dirPath}/index.md (will be moved)`))
          continue
        }

        const contentTypeName = path.basename(dirPath)
        const title = titleMap[contentTypeName] || contentTypeName

        // Determine the correct contentType for this placeholder
        // Map directory name back to contentType enum value
        const placeholderContentType =
          contentTypeName === 'responsible-use' ? 'rai' : contentTypeName

        const content = `---
title: ${title}
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: ${placeholderContentType}
---

`

        await fs.mkdir(absoluteDirPath, { recursive: true })
        await fs.writeFile(indexPath, content, 'utf-8')
        newPlaceholders.push(indexPath)

        console.log(chalk.green(`✓ Created ${dirPath}/index.md`))
      }
    }

    // ====================
    // 5. GENERATE INTROS
    // ====================
    if (newPlaceholders.length > 0) {
      console.log(chalk.white('\nGenerating intros for placeholder files...\n'))

      for (const placeholderPath of newPlaceholders) {
        try {
          const fileContent = await fs.readFile(placeholderPath, 'utf-8')
          const { data } = readFrontmatter(fileContent)

          if (data?.intro) continue

          const relativePath = path.relative(process.cwd(), placeholderPath)
          console.log(chalk.gray(`Generating intro for ${relativePath}...`))

          execFileSync(
            'npm',
            ['run', 'ai-tools', '--', '--prompt', 'intro', '--files', relativePath, '--write'],
            {
              cwd: process.cwd(),
              stdio: 'inherit',
            },
          )

          console.log(chalk.green(`✓ Generated intro for ${relativePath}`))
        } catch (error) {
          if (error instanceof Error) {
            console.error(
              chalk.yellow(
                `⚠ Could not generate intro for ${placeholderPath}: ${error.message}\n${error.stack}`,
              ),
            )
          } else {
            console.error(
              chalk.yellow(`⚠ Could not generate intro for ${placeholderPath}: ${String(error)}`),
            )
          }
        }
      }
    }

    // ====================
    // 6. MOVE FILES
    // ====================
    console.log(chalk.white('\nMoving files...\n'))

    const moved: Array<{ file: string; from: string; to: string }> = []

    // Categorize files by type for correct move order
    const regularFiles = filesToMove.filter((f) => path.basename(f.filePath) !== 'index.md')
    const topLevelIndexFiles = filesToMove.filter((f) => {
      if (path.basename(f.filePath) !== 'index.md') return false
      return (
        path.relative(process.cwd(), f.targetDir).split(path.sep).length ===
        PRODUCT_LEVEL_PATH_SEGMENTS
      )
    })
    const subdirIndexFiles = filesToMove.filter((f) => {
      if (path.basename(f.filePath) !== 'index.md') return false
      return (
        path.relative(process.cwd(), f.targetDir).split(path.sep).length >
        PRODUCT_LEVEL_PATH_SEGMENTS
      )
    })

    // Move subdirectory index files first (copy only, delete later)
    const indexFilesToDeleteLater: string[] = []
    for (const file of subdirIndexFiles) {
      try {
        await fs.mkdir(file.targetDir, { recursive: true })

        const content = await fs.readFile(file.filePath, 'utf-8')
        const { data, content: body } = readFrontmatter(content)
        // Clear children array because paths will be invalid in the new content-type directory structure
        if (data?.children) data.children = []

        await fs.writeFile(
          file.targetPath,
          readFrontmatter.stringify(body || '', data || {}),
          'utf-8',
        )
        indexFilesToDeleteLater.push(file.filePath)

        moved.push({
          file: path.relative(process.cwd(), file.filePath),
          from: path.relative(process.cwd(), file.filePath),
          to: path.relative(process.cwd(), file.targetPath),
        })

        console.log(chalk.green(`✓ Copied ${path.relative(process.cwd(), file.filePath)}`))
      } catch (error) {
        skipped.push({
          file: path.relative(process.cwd(), file.filePath),
          reason: `Error: ${error}`,
        })
        console.log(
          chalk.red(`✗ Error copying ${path.relative(process.cwd(), file.filePath)}: ${error}`),
        )
      }
    }

    // Move regular files
    for (const file of regularFiles) {
      try {
        await fs.mkdir(file.targetDir, { recursive: true })

        const relativeFilePath = path.relative(process.cwd(), file.filePath)
        const relativeTargetPath = path.relative(process.cwd(), file.targetPath)

        execFileSync(
          'npm',
          ['run', 'move-content', '--', relativeFilePath, relativeTargetPath, '--no-git'],
          {
            cwd: process.cwd(),
            stdio: 'inherit',
          },
        )

        moved.push({ file: relativeFilePath, from: relativeFilePath, to: relativeTargetPath })
        console.log(chalk.green(`✓ Moved ${relativeFilePath}`))
      } catch (error) {
        skipped.push({
          file: path.relative(process.cwd(), file.filePath),
          reason: `Error: ${error}`,
        })
        console.log(
          chalk.red(`✗ Error moving ${path.relative(process.cwd(), file.filePath)}: ${error}`),
        )
      }
    }

    // Delete source subdirectory index files
    for (const sourcePath of indexFilesToDeleteLater) {
      try {
        await fs.unlink(sourcePath)
        console.log(chalk.gray(`✓ Deleted source ${path.relative(process.cwd(), sourcePath)}`))
      } catch (error) {
        console.log(chalk.yellow(`⚠ Could not delete ${sourcePath}: ${error}`))
      }
    }

    // Move top-level index files
    for (const file of topLevelIndexFiles) {
      try {
        await fs.mkdir(file.targetDir, { recursive: true })
        await fs.copyFile(file.filePath, file.targetPath)
        await fs.unlink(file.filePath)

        moved.push({
          file: path.relative(process.cwd(), file.filePath),
          from: path.relative(process.cwd(), file.filePath),
          to: path.relative(process.cwd(), file.targetPath),
        })

        console.log(chalk.green(`✓ Moved ${path.relative(process.cwd(), file.filePath)}`))
      } catch (error) {
        skipped.push({
          file: path.relative(process.cwd(), file.filePath),
          reason: `Error: ${error}`,
        })
        console.log(
          chalk.red(`✗ Error moving ${path.relative(process.cwd(), file.filePath)}: ${error}`),
        )
      }
    }

    // ====================
    // 7. CLEANUP & UPDATE
    // ====================
    console.log(
      chalk.white('\nCleaning up old directories and updating parent index.md files...\n'),
    )

    const deletedByProduct = new Map<string, string[]>()

    for (const productDir of productDirs) {
      const productName = path.basename(productDir)

      try {
        const entries = await fs.readdir(productDir, { withFileTypes: true })

        for (const entry of entries) {
          if (entry.isDirectory() && !validContentTypeDirs.has(entry.name)) {
            const oldDirPath = path.join(productDir, entry.name)

            try {
              await fs.rm(oldDirPath, { recursive: true, force: true })
              console.log(
                chalk.gray(`✓ Deleted old directory: ${path.relative(process.cwd(), oldDirPath)}`),
              )

              if (!deletedByProduct.has(productName)) deletedByProduct.set(productName, [])
              deletedByProduct.get(productName)!.push(`/${productName}/${entry.name}`)
            } catch (error) {
              console.log(chalk.yellow(`⚠ Could not delete ${oldDirPath}: ${error}`))
            }
          }
        }
      } catch (error) {
        console.log(chalk.yellow(`⚠ Could not read product directory ${productDir}: ${error}`))
      }

      // Update product index.md
      const productIndexPath = path.join(productDir, 'index.md')
      try {
        const content = await fs.readFile(productIndexPath, 'utf-8')
        const { data, content: body } = readFrontmatter(content)

        if (data) {
          let updated = false

          // Build children array
          const productRelativePath = path.relative(process.cwd(), productDir)
          const newChildren: string[] = []
          for (const ct of CONTENT_TYPES.map(contentTypeToDir)) {
            const dirPath = path.join(productRelativePath, ct)
            if (targetDirs.has(dirPath)) newChildren.push(`/${ct}`)
          }

          if (newChildren.length > 0) {
            data.children = newChildren
            updated = true
          }

          // Add redirects for deleted directories
          const deletedPaths = deletedByProduct.get(productName) || []
          if (deletedPaths.length > 0) {
            if (!data.redirect_from) data.redirect_from = []
            else if (!Array.isArray(data.redirect_from)) data.redirect_from = [data.redirect_from]

            for (const deletedPath of deletedPaths) {
              if (!data.redirect_from.includes(deletedPath)) {
                data.redirect_from.push(deletedPath)
              }
            }
            updated = true
          }

          if (updated) {
            await fs.writeFile(productIndexPath, readFrontmatter.stringify(body, data), 'utf-8')
            const changes = []
            if (newChildren.length > 0) changes.push(`${newChildren.length} children`)
            if (deletedPaths.length > 0) changes.push(`${deletedPaths.length} redirects`)
            console.log(
              chalk.green(
                `✓ Updated ${path.relative(process.cwd(), productIndexPath)} (${changes.join(', ')})`,
              ),
            )
          }
        }
      } catch (error) {
        console.log(chalk.yellow(`⚠ Could not update ${productIndexPath}: ${error}`))
      }
    }

    // ====================
    // 8. SORT CHILDREN ARRAYS
    // ====================
    console.log(chalk.white('\nSorting children arrays...\n'))

    for (const dirPath of targetDirs) {
      const absoluteDirPath = path.join(process.cwd(), dirPath)
      const indexPath = path.join(absoluteDirPath, 'index.md')

      try {
        const content = await fs.readFile(indexPath, 'utf-8')
        const { data, content: body } = readFrontmatter(content)

        if (!data) continue

        // For how-tos, build children from subdirectories
        if (path.basename(dirPath) === 'how-tos') {
          const entries = await fs.readdir(absoluteDirPath, { withFileTypes: true })
          const subdirs = entries
            .filter((e) => e.isDirectory())
            .map((e) => `/${e.name}`)
            .sort()

          if (subdirs.length > 0) {
            data.children = subdirs
            await fs.writeFile(indexPath, readFrontmatter.stringify(body, data), 'utf-8')
            console.log(
              chalk.green(
                `✓ Added children to ${path.relative(process.cwd(), indexPath)} (${subdirs.length} subdirectories)`,
              ),
            )
          }
        }
        // For others, sort with about-* first
        else if (data.children && Array.isArray(data.children) && data.children.length > 0) {
          const sorted = [...data.children].sort((a, b) => {
            const aBasename = path.basename(a)
            const bBasename = path.basename(b)
            const aIsAbout = aBasename.startsWith('about-')
            const bIsAbout = bBasename.startsWith('about-')

            if (aIsAbout && !bIsAbout) return -1
            if (!aIsAbout && bIsAbout) return 1
            return aBasename.localeCompare(bBasename)
          })

          if (JSON.stringify(sorted) !== JSON.stringify(data.children)) {
            data.children = sorted
            await fs.writeFile(indexPath, readFrontmatter.stringify(body, data), 'utf-8')
            console.log(
              chalk.green(`✓ Sorted children in ${path.relative(process.cwd(), indexPath)}`),
            )
          }
        }
      } catch (error) {
        if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
          console.log(chalk.yellow(`⚠ Could not update ${indexPath}: ${error}`))
        }
      }
    }

    // ====================
    // 9. SUMMARY
    // ====================
    console.log(chalk.white(`\n${'='.repeat(60)}`))
    console.log(chalk.white('Summary:'))
    console.log(chalk.white(`  Moved: ${moved.length} files`))
    console.log(chalk.white(`  Skipped: ${skipped.length} files`))

    if (newPlaceholders.length > 0) {
      console.log(
        chalk.cyan(
          `\nNote: ${newPlaceholders.length} placeholder index.md files were created with`,
        ),
      )
      console.log(chalk.cyan(`AI-generated intros. Please review before committing.`))
    }

    console.log(chalk.blue('='.repeat(60)))

    if (skipped.length > 0) {
      console.log(chalk.yellow('\nSkipped files:'))
      for (const skip of skipped) {
        console.log(chalk.gray(`  ${skip.file}: ${skip.reason}`))
      }
    }
  })

program.parse()
