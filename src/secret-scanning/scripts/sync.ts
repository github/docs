/**
 * Required env variables:
 *
 * GITHUB_TOKEN
 *
 * Syncs the
 * https://github.com/github/token-scanning-service/blob/main/docs/public-docs
 * directory to src/secret-scanning/data/pattern-docs
 */
import { writeFile } from 'fs/promises'
import yaml from 'js-yaml'

import { getDirectoryContents } from '@/workflows/git-utils'
import schema from '@/secret-scanning/data/public-docs-schema'
// This is temporarily being imported until the subsequent modules
// have been converted to TypeScript.
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
    // ensure yaml can be parsed
    let yamlData
    try {
      yamlData = yaml.load(file.content)
    } catch (error) {
      console.error('The public-docs.yml file being synced is not valid yaml')
      throw error
    }

    // ensure yaml is valid against the schema
    const { isValid, errors } = validateJson(schema, yamlData)

    if (!isValid && errors) {
      console.error(formatAjvErrors(errors))
      throw new Error('The public-docs.yml file being synced does not have a valid schema')
    }

    const filePath = file.path.replace(`${directory}/`, '')
    const localFilePath = `${SECRET_SCANNING_DIR}/${filePath}`

    await writeFile(localFilePath, yaml.dump(yamlData))
  }
}

main()
