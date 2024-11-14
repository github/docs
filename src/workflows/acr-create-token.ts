#!/usr/bin/env node
import { execSync } from 'child_process'
import * as core from '@actions/core'
import dotenv from 'dotenv'

type IsoDateString = string

// For local testing set environment variables in the .env file
dotenv.config()

const acrTokenName = process.env.ACR_TOKEN_NAME
const acrServer = process.env.CONTAINER_REGISTRY_SERVER
const repo = process.env.GITHUB_REPOSITORY

function main() {
  // Get the current time and add 30 minutes to it
  // Convert Date format from YYYY-MM-DDTHH:mm:ss.sssZ to
  // YYYY-MM-DDTHH:mm:ssZ (remove .sss)
  const expirationDate: IsoDateString =
    new Date(Date.now() + 30 * 60 * 1000).toISOString().split('.')[0] + 'Z'

  let resp
  try {
    const cmd = `az acr token create \
      --name ${acrTokenName} \
      --registry ${acrServer} \
      --repository ${repo} \
      content/write \
      content/read \
      --expiration ${expirationDate} \
      --output json`

    console.log('Executing az acr token create command.')
    resp = JSON.parse(execSync(cmd, { encoding: 'utf8' }))
  } catch (error) {
    console.error('An error occurred while creating ACR token with the Azure CLI')
    throw error
  }

  const acrTokenValue = resp?.credentials?.passwords[0]?.value
  if (!acrTokenValue) {
    throw new Error(
      'The response from the Azure CLI was not in the expected format: \n' +
        JSON.stringify(resp, null, 2),
    )
  }

  // Set the ACR_TOKEN_VALUE environment variable so
  // that it can be used in the subsequent steps
  core.exportVariable('ACR_TOKEN_VALUE', acrTokenValue)
  execSync(`echo $ACR_TOKEN_VALUE`)
}

main()
