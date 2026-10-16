// Required env variable: GITHUB_TOKEN.
// Syncs https://github.com/github/token-scanning-service/blob/main/docs/public-docs into
// src/secret-scanning/data/pattern-docs.
import { writeFile, mkdir } from 'fs/promises'
import { load, dump } from 'js-yaml'
import path from 'path'

import { getDirectoryContents } from '@/workflows/git-utils'
import { deprecated } from '@/versions/lib/enterprise-server-releases'
import schema from '@/secret-scanning/data/public-docs-schema'
import { validateJson } from '@/tests/lib/validate-json-schema'
import { formatAjvErrors } from '@/tests/helpers/schemas'

const SECRET_SCANNING_DIR = 'src/secret-scanning/data/pattern-docs'

async function main() {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN environment variable must be set to run this script')
  }

  const owner = 'github'
  const repo = 'token-scanning-service'
  const ref = 'main'
  const directory = 'docs/public-docs'

  const files = await getDirectoryContents(owner, repo, ref, directory)

  for (const file of files) {
    const filePath = file.path.replace(`${directory}/`, '')
    // Upstream keeps deprecated GHES versions. The docs site doesn't need them.
    const versionDir = filePath.split('/')[0]
    if (versionDir.startsWith('ghes-') && deprecated.includes(versionDir.replace('ghes-', ''))) {
      continue
    }

    let yamlData
    try {
      yamlData = load(file.content)
    } catch (error) {
      console.error('The public-docs.yml file being synced is not valid yaml')
      throw error
    }

    const { isValid, errors } = validateJson(schema, yamlData)

    if (!isValid && errors) {
      console.error(formatAjvErrors(errors))
      throw new Error('The public-docs.yml file being synced does not have a valid schema')
    }

    const localFilePath = `${SECRET_SCANNING_DIR}/${filePath}`

    await mkdir(path.dirname(localFilePath), { recursive: true })
    await writeFile(localFilePath, dump(yamlData))
  }
}

main()
