#!/usr/bin/env node
import { execSync } from 'child_process'
import yaml from 'js-yaml'

const slotName = process.env.SLOT_NAME
const appServiceName = process.env.APP_SERVICE_NAME
const resourceGroupName = process.env.RESOURCE_GROUP_NAME
const expectedSHA = process.env.EXPECTED_SHA
const waitDuration = parseInt(process.env.CHECK_INTERVAL, 10) || 10000
const maxWaitingTimeSeconds = parseInt(process.MAX_WAITING_TIME || 10 * 60 * 1000, 10)

function getBuildSha(slot, appService, resourceGroup) {
  console.log('Getting Canary App Service Docker config')
  const t0 = Date.now()
  let config
  try {
    config = JSON.parse(
      execSync(
        `az webapp config container show --show-multicontainer-config --slot ${slot} -n ${appService} -g ${resourceGroup}`,
        { encoding: 'utf8' },
      ),
    )
  } catch (err) {
    console.log('Error getting the Canary App Service Slot config')
    return null
  }

  // The config is an array of objects. One of the objects
  // contains a copy of the Docker compose configuration file
  // pushed to the slot (see src/workflows/docker-compose.prod.tmpl.yaml).
  // The value key contains the stringified YAML file, so we
  // need to parse it to JSON to extract the image sha.
  const dockerComposeYaml = config.find(
    (obj) => obj.name === 'DOCKER_CUSTOM_IMAGE_NAME_DECODED',
  ).value

  let dockerComposeConfig
  try {
    dockerComposeConfig = yaml.load(dockerComposeYaml)
  } catch (err) {
    console.log('Error loading the YAML configuration data from the Canary App Service Slot config')
    return null
  }
  // The image key looks like this:
  // `ghdocsprod.azurecr.io/github/docs-internal:d7ee70f225a0f10f293ffdd2d43931acf02c6751`
  const sha = dockerComposeConfig.services['ghdocs-prod'].image.split(':')[1]
  console.log(`Fetched Canary App Service Slot configuration}. Took ${Date.now() - t0}ms`)
  return sha
}

function getStatesForSlot(slot, appService, resourceGroup) {
  return JSON.parse(
    execSync(
      `az webapp list-instances --slot ${slot} --query "[].state" -n ${appService} -g ${resourceGroup}`,
      { encoding: 'utf8' },
    ),
  )
}

let attempts = 0
async function doCheck() {
  attempts++
  console.log('Attempt:', attempts)
  const buildSha = getBuildSha(slotName, appServiceName, resourceGroupName)
  console.log('Canary build SHA:', buildSha || '*unknown/failed*', 'Expected SHA:', expectedSHA)

  const states = getStatesForSlot(slotName, appServiceName, resourceGroupName)
  console.log('Instance states:', states)

  const isAllReady = states.every((s) => s === 'READY')

  if (buildSha === expectedSHA && isAllReady) {
    console.log('Got the expected build SHA and all slots are ready! 🚀')
    return
  }

  if (attempts * waitDuration > maxWaitingTimeSeconds) {
    throw new Error(`Giving up after a total of ${(attempts * waitDuration) / 1000} seconds`)
  }

  console.log(`checking again in ${waitDuration}ms`)
  setTimeout(doCheck, waitDuration)
}

doCheck()
