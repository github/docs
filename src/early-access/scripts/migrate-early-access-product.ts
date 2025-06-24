// [start-readme]
//
// Move the files from an early-access product level docs set into an existing product.
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { last } from 'lodash-es'
import { program } from 'commander'
import { execFileSync } from 'child_process'
import frontmatter from '@/frame/lib/read-frontmatter.js'
import patterns from '@/frame/lib/patterns.js'
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

// 1. Update the image and data refs in the to-be-migrated early access files BEFORE moving them.
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

// 2. Add redirects to and update frontmatter in the to-be-migrated early access files BEFORE moving them.
filesToMigrate.forEach((filepath) => {
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

  // 4. Find the data files and images referenced in the early access files so we can move them over.
  const dataRefs: string[] = content ? content.match(patterns.dataReference) || [] : []
  const variables: string[] = dataRefs.filter((ref) => ref.includes('variables'))
  const reusables: string[] = dataRefs.filter((ref) => ref.includes('reusables'))
  const images: string[] = content ? content.match(patterns.imagePath) || [] : []

  variablesToMove.push(...variables)
  reusablesToMove.push(...reusables)
  imagesToMove.push(...images)
})

// 3. Move the data files and images.
Array.from(new Set(variablesToMove)).forEach((varRef) => moveVariable(varRef))
Array.from(new Set(reusablesToMove)).forEach((varRef) => moveReusable(varRef))
Array.from(new Set(imagesToMove)).forEach((imageRef) => moveImage(imageRef))

// 4. Move the content files.
execFileSync('mv', [oldPath, migratePath])

// 5. Update the parent product TOC with the new child path.
const parentProductTocPath: string = path.posix.join(path.dirname(newPath), 'index.md')
const parentProductToc = frontmatter(fs.readFileSync(parentProductTocPath, 'utf-8'))
if (parentProductToc.data && Array.isArray(parentProductToc.data.children)) {
  parentProductToc.data.children.push(`/${path.basename(newPathId)}`)
}

fs.writeFileSync(
  parentProductTocPath,
  frontmatter.stringify(parentProductToc.content || '', parentProductToc.data || {}),
)

// 6. Optionally, update the new product TOC with the new title.
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

// 7. Update internal links now that the files have been moved.
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
  // Get the data filepath from the data reference,
  // where the data reference looks like: {% data variables.foo.bar %}
  // and the data filepath looks like: data/variables/foo.yml with key of 'bar'.
  const variablePathArray: string[] =
    dataRef
      .match(/{% (?:data|indented_data_reference) (.*?) %}/)?.[1]
      .split('.')
      // If early access is part of the path, remove it (since the path below already includes it)
      .filter((n) => n !== 'early-access') || []

  // Given a string `variables.foo.bar` split into an array, we want the last segment 'bar', which is the variable key.
  // Then pop 'bar' off the array because it's not really part of the filepath.
  // The filepath we want is `variables/foo.yml`.
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

  let oldPath: string = oldVariablePath

  // If the old variable path doesn't exist, assume no migration needed.
  if (!fs.existsSync(oldVariablePath)) {
    if (!fs.existsSync(newVariablePath)) {
      console.log(`Problem migrating files for ${dataRef}`)
      return
    }
    if (fs.existsSync(oldAltPath)) {
      oldPath = oldAltPath
    } else {
      return
    }
  }

  const variableFileContent: Record<string, any> = yaml.load(
    fs.readFileSync(oldPath, 'utf8'),
  ) as Record<string, any>
  const value: any = variableFileContent[variableKey]

  // If the variable file already exists, add the key/value pair.
  if (fs.existsSync(nonAltPath)) {
    const content: Record<string, any> = yaml.load(fs.readFileSync(nonAltPath, 'utf8')) as Record<
      string,
      any
    >
    if (!content[variableKey]) {
      const newString = `\n\n${variableKey}: ${value}`
      fs.appendFileSync(nonAltPath, newString)
    }
  } else {
    execFileSync('mv', [oldPath, newVariablePath])
  }
}

function moveReusable(dataRef: string): void {
  // Get the data filepath from the data reference,
  // where the data reference looks like: {% data reusables.foo.bar %}
  // and the data filepath looks like: data/reusables/foo/bar.md.
  const reusablePath: string =
    dataRef
      .match(/{% (?:data|indented_data_reference) (\S*?) .*%}/)?.[1]
      .split('.')
      // If early access is part of the path, remove it (since the path below already includes it)
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
    // return
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
    // If early access is part of the path, remove it (since the path below already includes it)
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
    // return
  }

  // If the reusable file doesn't exist, move it.
  if (!fs.existsSync(newImagePath)) {
    execFileSync('mkdir', ['-p', path.dirname(newImagePath)])
    execFileSync('mv', [oldImagePath, newImagePath])
  }
}
