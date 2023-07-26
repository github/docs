#!/usr/bin/env node

import { existsSync } from 'fs'
import { mkdirp } from 'mkdirp'
import { readFile, writeFile } from 'fs/promises'
import path from 'path'
import { slug } from 'github-slugger'
import yaml from 'js-yaml'

import { getContents } from '../../../script/helpers/git-utils.js'
import permissionSchema from './permission-list-schema.js'
import enabledSchema from './enabled-list-schema.js'
import { validateData } from '../../rest/scripts/utils/validate-data.js'

const ENABLED_APPS_DIR = 'src/github-apps/data'
const CONFIG_FILE = 'src/github-apps/lib/config.json'

export async function syncGitHubAppsData(openApiSource, sourceSchemas, progAccessSource = false) {
  const { progAccessData, progActorResources } = await getProgAccessData(progAccessSource)

  for (const schemaName of sourceSchemas) {
    const data = JSON.parse(await readFile(path.join(openApiSource, schemaName), 'utf8'))
    const appsDataConfig = JSON.parse(await readFile(CONFIG_FILE, 'utf8'))

    // Initialize the data structure with keys for each page type
    const githubAppsData = {}
    for (const pageType of Object.keys(appsDataConfig.pages)) {
      githubAppsData[pageType] = {}
    }
    // Because the information used on the apps page doesn't require any
    // rendered content we can parse the dereferenced files directly
    for (const [requestPath, operationsAtPath] of Object.entries(data.paths)) {
      for (const [verb, operation] of Object.entries(operationsAtPath)) {
        // We only want to process operations that have programmatic access data
        if (!progAccessData[operation.operationId]) continue

        const isInstallationAccessToken = progAccessData[operation.operationId].serverToServer
        const isUserAccessToken = progAccessData[operation.operationId].userToServerRest
        const isFineGrainedPat =
          isUserAccessToken && !progAccessData[operation.operationId].disabledForPatV2
        const { category, subcategory } = operation['x-github']
        const appDataOperation = {
          slug: slug(operation.summary),
          subcategory,
          verb,
          requestPath,
        }
        const appDataOperationWithCategory = Object.assign({ category }, appDataOperation)
        // server-to-server
        if (isInstallationAccessToken) {
          initAppData(githubAppsData['server-to-server-rest'], category, appDataOperation)
        }

        // user-to-server
        if (isUserAccessToken) {
          initAppData(githubAppsData['user-to-server-rest'], category, appDataOperation)
        }

        // fine-grained pat
        if (isFineGrainedPat) {
          initAppData(githubAppsData['fine-grained-pat'], category, appDataOperation)
        }

        // permissions
        for (const [permissionName, readOrWrite] of Object.entries(
          progAccessData[operation.operationId].permissions,
        )) {
          const tempTitle = permissionName.replace(/_/g, ' ')
          const permissionNameExists = progActorResources[permissionName]
          if (!permissionNameExists) {
            console.warn(
              `The permission ${permissionName} is missing from config/locales/programmatic_actor_fine_grained_resources.en.yml. Creating a placeholder value of ${tempTitle} until it's added.`,
            )
          }
          const title = progActorResources[permissionName]?.title || tempTitle
          const resourceGroup = progActorResources[permissionName]?.resource_group || ''
          const displayTitle = getDisplayTitle(title, resourceGroup)
          const relatedPermissionNames = Object.keys(
            progAccessData[operation.operationId].permissions,
          ).filter((permission) => permission !== permissionName)

          // github app permissions
          const serverToServerPermissions = githubAppsData['server-to-server-permissions']
          if (!serverToServerPermissions[permissionName]) {
            serverToServerPermissions[permissionName] = {
              title,
              displayTitle,
              permissions: [],
            }
          }
          const worksWithData = {
            'user-to-server': Boolean(isUserAccessToken),
            'server-to-server': Boolean(isInstallationAccessToken),
            'additional-permissions': relatedPermissionNames,
          }
          serverToServerPermissions[permissionName].permissions.push(
            Object.assign({}, appDataOperationWithCategory, { access: readOrWrite }, worksWithData),
          )

          // fine-grained pats
          if (isFineGrainedPat) {
            const findGrainedPatPermissions = githubAppsData['fine-grained-pat-permissions']
            if (!findGrainedPatPermissions[permissionName]) {
              findGrainedPatPermissions[permissionName] = {
                title,
                displayTitle,
                permissions: [],
              }
            }

            findGrainedPatPermissions[permissionName].permissions.push(
              Object.assign({}, appDataOperationWithCategory, {
                'additional-permissions': relatedPermissionNames,
                access: readOrWrite,
              }),
            )
          }
        }
      }
    }

    const versionName = path.basename(schemaName, '.json')
    const targetDirectory = path.join(ENABLED_APPS_DIR, versionName)

    // When a new version is added, we need to create the directory for it
    if (!existsSync(targetDirectory)) {
      await mkdirp(targetDirectory)
    }

    for (const pageType of Object.keys(githubAppsData)) {
      const data = githubAppsData[pageType]
      await validateAppData(data, pageType)

      const filename = `${pageType}.json`
      if (Object.keys(data).length === 0) {
        throw new Error(
          `Generating GitHub Apps data failed for ${openApiSource}/${schemaName}. The generated data file was empty.`,
        )
      }
      const sortedOperations = pageType.includes('permissions')
        ? sortObjectByTitle(data)
        : sortObjectByKeys(data)
      const targetPath = path.join(targetDirectory, filename)
      await writeFile(targetPath, JSON.stringify(sortedOperations, null, 2))
      console.log(`✅ Wrote ${targetPath}`)
    }
  }
}

// When progAccessSource is defined, it will contain the root directory
// of the repo with the programmatic access file. If it is not defined,
// the file will be retrieved from the remote repo via the REST API.
async function getProgAccessData(progAccessSource) {
  let progAccessDataRaw
  // config/locales/programmatic_actor_fine_grained_resources.en.yml
  let progActorResources
  const progAccessFilepath = 'config/access_control/programmatic_access.yaml'
  const progActorFilepath = 'config/locales/programmatic_actor_fine_grained_resources.en.yml'

  // check for required PAT
  if (!process.env.GITHUB_TOKEN) {
    throw new Error(
      'Error! You must have the GITHUB_TOKEN environment variable set to access the programmatic access and resource files via the GitHub REST API.',
    )
  }

  if (progAccessSource) {
    progAccessDataRaw = yaml.load(
      await readFile(path.join(progAccessSource, progAccessFilepath), 'utf8'),
    )
    progActorResources = yaml.load(
      await readFile(path.join(progAccessSource, progActorFilepath), 'utf8'),
    ).en.programmatic_actor_fine_grained_resources
  } else {
    progAccessDataRaw = yaml.load(
      await getContents('github', 'github', 'master', progAccessFilepath),
    )
    progActorResources = yaml.load(
      await getContents('github', 'github', 'master', progActorFilepath),
    ).en.programmatic_actor_fine_grained_resources
  }

  const progAccessData = {}
  for (const operation of progAccessDataRaw) {
    const permissions = {}
    if (operation.permission_sets) {
      operation.permission_sets.forEach((permissionSet) => {
        Object.assign(permissions, permissionSet)
      })
    }

    const userToServerRest = operation.user_to_server.enabled
    const serverToServer = operation.server_to_server.enabled
    const allowPermissionlessAccess = operation.allows_permissionless_access
    const disabledForPatV2 = operation.disabled_for_patv2

    progAccessData[operation.operation_ids] = {
      userToServerRest,
      serverToServer,
      permissions,
      allowPermissionlessAccess,
      disabledForPatV2,
    }
  }
  return { progAccessData, progActorResources }
}

function sortObjectByKeys(obj) {
  return Object.keys(obj)
    .sort()
    .reduce((acc, key) => {
      acc[key] = obj[key]
      return acc
    }, {})
}

function sortObjectByTitle(obj) {
  return Object.keys(obj)
    .sort((a, b) => {
      if (obj[a].displayTitle > obj[b].displayTitle) {
        return 1
      }
      if (obj[a].displayTitle < obj[b].displayTitle) {
        return -1
      }
      return 0
    })
    .reduce((acc, key) => {
      acc[key] = obj[key]
      return acc
    }, {})
}

function getDisplayTitle(title, resourceGroup) {
  if (!title) {
    console.warn(`No title found for title ${title} resource group ${resourceGroup}`)
    return ''
  }

  return !resourceGroup
    ? sentenceCase(title) + ' permissions'
    : sentenceCase(resourceGroup) + ' permissions for ' + `"${title}"`
}

function sentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function initAppData(storage, category, data) {
  if (!storage[category]) {
    storage[category] = []
  }
  storage[category].push(data)
}

async function validateAppData(data, pageType) {
  if (pageType.includes('permissions')) {
    for (const value of Object.values(data)) {
      validateData(value, permissionSchema)
    }
  } else {
    for (const arrayItems of Object.values(data)) {
      for (const item of arrayItems) {
        validateData(item, enabledSchema)
      }
    }
  }
}
