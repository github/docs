#!/usr/bin/env node
import { execSync } from 'child_process'

const slotName = process.env.SLOT_NAME
const appServiceName = process.env.APP_SERVICE_NAME
const resourceGroupName = process.env.RESOURCE_GROUP_NAME
const url = process.env.CANARY_BUILD_URL
const expectedSHA = process.env.EXPECTED_SHA
const waitDuration = parseInt(process.env.CHECK_INTERVAL, 10) || 10000
const curlConnectTimeoutSeconds = parseInt(process.env.CURL_CONNECT_TIMEOUT_SECONDS || '5', 10)
const maxWaitingTimeSeconds = parseInt(process.MAX_WAITING_TIME || 10 * 60 * 1000, 10)

function getBuildSha() {
  console.log(`Fetching ${url}`)
  const t0 = Date.now()
  try {
    const o = execSync(`curl --connect-timeout ${curlConnectTimeoutSeconds} ${url}`, {
      encoding: 'utf8',
    })
    console.log(`Fetched ${url}. Took ${Date.now() - t0}ms`)
    return o.toString().trim()
  } catch (err) {
    console.log(`Error fetching build sha from ${url}`)
    return null
  }
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
  const buildSha = getBuildSha()
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
