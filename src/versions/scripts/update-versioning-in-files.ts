import fs from 'fs'
import path from 'path'
import walk from 'walk-sync'
import frontmatter from '@/frame/lib/read-frontmatter'

const contentPath = path.join(process.cwd(), 'content')
const dataPath = path.join(process.cwd(), 'data')

const contentFiles = walk(contentPath, { includeBasePath: true, directories: false })
  .filter((file) => file.endsWith('.md'))
  .filter((file) => !file.endsWith('README.md'))

const dataFiles = walk(dataPath, { includeBasePath: true, directories: false })
  .filter((file) => file.includes('data/reusables') || file.includes('data/variables'))
  .filter((file) => !file.endsWith('README.md'))

for (const file of dataFiles) {
  const content = fs.readFileSync(file, 'utf8')

  // Update Liquid in data files
  const newContent = updateLiquid(content)

  fs.writeFileSync(file, newContent)
}

for (const file of contentFiles) {
  const { data, content } = frontmatter(fs.readFileSync(file, 'utf8'))

  // Update Liquid in content files
  const newContent = content ? updateLiquid(content) : ''

  // Update versions frontmatter
  if (data) {
    if (!data.versions && data.productVersions) {
      data.versions = data.productVersions
      for (const version of Object.keys(data.versions)) {
        // update dotcom, actions, rest, etc.
        if (version !== 'enterprise') {
          data.versions['free-pro-team'] = data.versions[version]
          delete data.versions[version]
        } else {
          data.versions['enterprise-server'] = data.versions.enterprise
          delete data.versions.enterprise
        }
      }
    }

    delete data.productVersions

    // Update Liquid in frontmatter props
    const frontmatterKeys = Object.keys(data)
      // Only process a subset of props
      .filter((xkey) => xkey === 'title' || xkey === 'intro' || xkey === 'product')
    for (const key of frontmatterKeys) {
      data[key] = updateLiquid(data[key])
    }
  }

  // Cast to any needed because frontmatter.stringify options parameter doesn't include lineWidth in its type definition
  fs.writeFileSync(file, frontmatter.stringify(newContent, data || {}, { lineWidth: 10000 } as any))
}

function updateLiquid(content: string): string {
  return content
    .replace(/page.version/g, 'currentVersion')
    .replace(/["'](?:')?dotcom["'](?:')?/g, '"free-pro-team@latest"')
    .replace(/["'](?:')?(2\.\d{2})["'](?:')?/g, '"enterprise-server@$1"')
}
