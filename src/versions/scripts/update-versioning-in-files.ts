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

  const newContent = updateLiquid(content)

  fs.writeFileSync(file, newContent)
}

for (const file of contentFiles) {
  const { data, content } = frontmatter(fs.readFileSync(file, 'utf8'))

  const newContent = content ? updateLiquid(content) : ''

  if (data) {
    if (!data.versions && data.productVersions) {
      data.versions = data.productVersions
      for (const version of Object.keys(data.versions)) {
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

    const frontmatterKeys = Object.keys(data)
      // Rewrite Liquid only in title, intro, and product frontmatter.
      .filter((xkey) => xkey === 'title' || xkey === 'intro' || xkey === 'product')
    for (const key of frontmatterKeys) {
      data[key] = updateLiquid(data[key])
    }
  }

  // @ts-expect-error lineWidth is a valid js-yaml option not included in gray-matter's type definitions
  fs.writeFileSync(file, frontmatter.stringify(newContent, data || {}, { lineWidth: 10000 }))
}

function updateLiquid(content: string): string {
  return content
    .replace(/page.version/g, 'currentVersion')
    .replace(/["'](?:')?dotcom["'](?:')?/g, '"free-pro-team@latest"')
    .replace(/["'](?:')?(2\.\d{2})["'](?:')?/g, '"enterprise-server@$1"')
}
