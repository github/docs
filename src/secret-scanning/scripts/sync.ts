#!/usr/bin/env node

/**
 * Required env variables:
 *
 * GITHUB_TOKEN
 *
 * Syncs the
 * https://github.com/github/token-scanning-service/blob/main/docs/public-docs.yml
 * file to src/secret-scanning/data/public-docs.yml
 */
import { readFile, writeFile } from 'fs/promises'
import core from '@actions/core'
import yaml from 'js-yaml'

import { getContents, getCommitSha } from '@/workflows/git-utils.js'
import schema from '@/secret-scanning/data/public-docs-schema.js'
// This is temporarily being imported until the subsequent modules
// have beeen converted to TypeScript.
import { validateJson } from '@/tests/lib/validate-json-schema.js'
import { formatAjvErrors } from '@/tests/helpers/schemas.js'

const SECRET_SCANNING_FILEPATH = 'src/secret-scanning/data/public-docs.yml'
type PipelineConfig = { sha: string }

async function main() {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN environment variable must be set to run this script')
  }

  const owner = 'github'
  const repo = 'token-scanning-service'
  const ref = 'main'
  const filepath = 'docs/public-docs.yml'

  const data = await getContents(owner, repo, ref, filepath)

  // ensure yaml can be parsed
  let yamlData
  try {
    yamlData = yaml.load(data)
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

  await writeFile(SECRET_SCANNING_FILEPATH, yaml.dump(yamlData))

  // update the config file with the latest sha
  const configFilepath = 'src/secret-scanning/lib/config.json'
  const mainSha = await getCommitSha(owner, repo, `heads/${ref}`)
  const pipelineConfig: PipelineConfig = JSON.parse(await readFile(configFilepath, 'utf8'))
  pipelineConfig.sha = mainSha
  await writeFile(configFilepath, JSON.stringify(pipelineConfig, null, 2))

  // the workflow that runs this script needs the synced sha to use
  // when creating the PR.
  core.setOutput('sha', mainSha)
}

main()
