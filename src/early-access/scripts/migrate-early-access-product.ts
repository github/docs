// Moves a product-level early access docs set into an existing product.

import fs from 'fs'
import path from 'path'
import { load } from 'js-yaml'
import { last } from 'lodash-es'
import { program } from 'commander'
import { execFileSync } from 'child_process'
import frontmatter from '@/frame/lib/read-frontmatter'
import patterns from '@/frame/lib/patterns'
import addRedirectToFrontmatter from '@/redirects/scripts/helpers/add-redirect-to-frontmatter'
import walkFiles from '@/workflows/walk-files'

const contentFiles: string[] = walkFiles('content', '.md', { includeEarlyAccess: true })
const contentDir: string = path.posix.join(process.cwd(), 'content')

program
  .description('Move a product-level early access docs set to a category level.')
  .requiredOption(
    '-o, --oldPath <PATH>',
    'Provide the path of the existing product, e.g., content/early-access/enterprise-importer',
  )
  .requiredOption(
    '-n, --newPath <PATH>',
    'Provide the new path it will move under, e.g., content/migrations/using-enterprise-importer',
  )
  .option(
    '-t, --newTitle <TITLE>',
    'Provide the new title if it is different from the existing title, e.g., Using Enterprise Importer',
  )
  .parse(process.argv)

const oldPathId: string = program.opts().oldPath.replace('content/', '')
const newPathId: string = program.opts().newPath.replace('content/', '')

const oldPath: string = path.posix.join(contentDir, oldPathId)
const newPath: string = path.posix.join(contentDir, newPathId)

if (!fs.existsSync(oldPath)) {
  console.error(`Error! Can't find ${oldPath}`)
  process.exit(1)
}

const filesToMigrate: string[] = contentFiles.filter((file) => file.includes(`/${oldPathId}/`))

if (!filesToMigrate.length) {
  console.error(`Error! Can't find any files in ${oldPath}`)
  process.exit(1)
}

const migratePath: string = path.posix.join(contentDir, newPathId)

// Rewrite early access image and data refs before moving files.
try {
  execFileSync('tsx', [
    'src/early-access/scripts/update-data-and-image-paths.ts',
    '-p',
    `content/${oldPathId}`,
    '--remove',
  ])
} catch (e) {
  console.error(e)
  process.exit(1)
}

const variablesToMove: string[] = []
const reusablesToMove: string[] = []
const imagesToMove: string[] = []

// Apply redirects and frontmatter changes before moving files.
for (const filepath of filesToMigrate) {
  const { content, data } = frontmatter(fs.readFileSync(filepath, 'utf8'))
  const redirectString: string = filepath
    .replace('content/', '/')
    .replace('/index.md', '')
    .replace('.md', '')
  if (data) {
    data.redirect_from = addRedirectToFrontmatter(data.redirect_from, redirectString)
    delete data.hidden
    delete data.noEarlyAccessBanner
    delete data.earlyAccessToc
    fs.writeFileSync(filepath, frontmatter.stringify(content || '', data))
  }

  const dataRefs: string[] = content ? content.match(patterns.dataReference) || [] : []
  const variables: string[] = dataRefs.filter((ref) => ref.includes('variables'))
  const reusables: string[] = dataRefs.filter((ref) => ref.includes('reusables'))
  const images: string[] = content ? content.match(patterns.imagePath) || [] : []

  variablesToMove.push(...variables)
  reusablesToMove.push(...reusables)
  imagesToMove.push(...images)
}

for (const varRef of Array.from(new Set(variablesToMove))) {
  moveVariable(varRef)
}
for (const varRef of Array.from(new Set(reusablesToMove))) {
  moveReusable(varRef)
}
for (const imageRef of Array.from(new Set(imagesToMove))) {
  moveImage(imageRef)
}

execFileSync('mv', [oldPath, migratePath])

const parentProductTocPath: string = path.posix.join(path.dirname(newPath), 'index.md')
const parentProductToc = frontmatter(fs.readFileSync(parentProductTocPath, 'utf-8'))
if (parentProductToc.data && Array.isArray(parentProductToc.data.children)) {
  parentProductToc.data.children.push(`/${path.basename(newPathId)}`)
}

fs.writeFileSync(
  parentProductTocPath,
  frontmatter.stringify(parentProductToc.content || '', parentProductToc.data || {}),
)

if (program.opts().newTitle) {
  const productTocPath: string = path.posix.join(newPath, 'index.md')
  const productToc = frontmatter(fs.readFileSync(productTocPath, 'utf-8'))
  if (productToc.data) {
    productToc.data.title = program.opts().newTitle
  }

  fs.writeFileSync(
    productTocPath,
    frontmatter.stringify(productToc.content || '', productToc.data || {}),
  )
}

console.log('\nRunning script to update internal links...')
execFileSync('tsx', ['src/links/scripts/update-internal-links.ts'])

console.log(`
Done! Did the following:
- Moved content/${oldPathId} files to content/${newPathId}
- Ran ./src/early-access/scripts/update-data-and-image-paths.ts
- Added redirects to the moved files
- Updated children frontmatter entries in index.md files
- Ran ./src/links/scripts/update-internal-links.ts

Please review all the changes in docs-internal and docs-early-access, especially to index.md files. You may need to do some manual cleanup.
`)

function moveVariable(dataRef: string): void {
  // Variable refs like {% data variables.foo.bar %} map to data/variables/foo.yml plus key bar.
  const variablePathArray: string[] =
    dataRef
      .match(/{% (?:data|indented_data_reference) (.*?) %}/)?.[1]
      .split('.')
      // Remove early-access because the path already joins under data/early-access.
      .filter((n) => n !== 'early-access') || []

  // The last segment is the variable key; the remaining segments form variables/foo.yml.
  const variableKey: string = last(variablePathArray) as string

  variablePathArray.pop()

  const oldVariablePath: string = path.posix.join(
    process.cwd(),
    'data/early-access',
    `${variablePathArray.join('/')}.yml`,
  )
  const newVariablePath: string = path.posix.join(
    process.cwd(),
    'data',
    `${variablePathArray.join('/')}.yml`,
  )
  const nonAltPath: string = newVariablePath.replace('-alt.yml', '.yml')
  const oldAltPath: string = oldVariablePath.replace('.yml', '-alt.yml')

  let oldVariableFinalPath: string = oldVariablePath

  // If the old variable path doesn't exist, assume no migration needed.
  if (!fs.existsSync(oldVariableFinalPath)) {
    if (!fs.existsSync(newVariablePath)) {
      console.log(`Problem migrating files for ${dataRef}`)
      return
    }
    if (fs.existsSync(oldAltPath)) {
      oldVariableFinalPath = oldAltPath
    } else {
      return
    }
  }

  const variableFileContent: Record<string, unknown> = load(
    fs.readFileSync(oldVariableFinalPath, 'utf8'),
  ) as Record<string, unknown>
  const value: unknown = variableFileContent[variableKey]

  // If the variable file already exists, add the key/value pair.
  if (fs.existsSync(nonAltPath)) {
    const content: Record<string, unknown> = load(fs.readFileSync(nonAltPath, 'utf8')) as Record<
      string,
      unknown
    >
    if (!content[variableKey]) {
      const newString = `\n\n${variableKey}: ${String(value)}`
      fs.appendFileSync(nonAltPath, newString)
    }
  } else {
    execFileSync('mv', [oldPath, newVariablePath])
  }
}

function moveReusable(dataRef: string): void {
  // Reusable refs like {% data reusables.foo.bar %} map to data/reusables/foo/bar.md.
  const reusablePath: string =
    dataRef
      .match(/{% (?:data|indented_data_reference) (\S*?) .*%}/)?.[1]
      .split('.')
      // Remove early-access because the path already joins under data/early-access.
      .filter((n) => n !== 'early-access')
      .join('/') || ''

  const oldReusablePath: string = path.posix.join(
    process.cwd(),
    'data/early-access',
    `${reusablePath}.md`,
  )
  const newReusablePath: string = path.posix.join(process.cwd(), 'data', `${reusablePath}.md`)

  // If the old reusable path doesn't exist, assume no migration needed.
  if (!fs.existsSync(oldReusablePath)) {
    if (!fs.existsSync(newReusablePath)) {
      console.log(`Problem migrating files for ${dataRef}`)
      return
    }
  }

  // If the reusable file doesn't exist, move it.
  if (!fs.existsSync(newReusablePath)) {
    execFileSync('mkdir', ['-p', path.dirname(newReusablePath)])
    execFileSync('mv', [oldReusablePath, newReusablePath])
  }
}

function moveImage(imageRef: string): void {
  const imagePath: string = imageRef
    .replace('/assets/images/', '')
    // Remove early-access because the path already joins under assets/images/early-access.
    .replace('early-access', '')

  const oldImagePath: string = path.posix.join(
    process.cwd(),
    'assets/images/early-access',
    imagePath,
  )
  const newImagePath: string = path.posix.join(process.cwd(), 'assets/images', imagePath)

  // If the old image path doesn't exist, assume no migration needed.
  if (!fs.existsSync(oldImagePath)) {
    if (!fs.existsSync(newImagePath)) {
      console.log(`Problem migrating files for ${imageRef}`)
      return
    }
  }

  // If the image file doesn't exist, move it.
  if (!fs.existsSync(newImagePath)) {
    execFileSync('mkdir', ['-p', path.dirname(newImagePath)])
    execFileSync('mv', [oldImagePath, newImagePath])
  }
}
