import { existsSync } from 'fs'
import { mkdirp } from 'mkdirp'
import { readFile, writeFile } from 'fs/promises'
import path from 'path'
import { slug } from 'github-slugger'
import yaml from 'js-yaml'
import walk from 'walk-sync'

import { getContents, getDirectoryContents } from '@/workflows/git-utils'
import permissionSchema from './permission-list-schema'
import enabledSchema from './enabled-list-schema'
import { validateJson } from '@/tests/lib/validate-json-schema'

const ENABLED_APPS_DIR = 'src/github-apps/data'
const CONFIG_FILE = 'src/github-apps/lib/config.json'

// Actor type mapping from generic names to actual YAML values
export const actorTypeMap = {
  fine_grained_pat: 'fine_grained_personal_access_token',
  server_to_server: 'github_app',
  user_to_server: 'user_access_token',
}

// Also need to handle the actual values that come from the source data
// UserProgrammaticAccess maps to fine_grained_pat functionality
const sourceDataActorMap = {
  UserProgrammaticAccess: 'fine_grained_pat',
}

export async function syncGitHubAppsData(openApiSource, sourceSchemas, progAccessSource) {
  console.log(
    `Generating GitHub Apps data from ${openApiSource}, ${sourceSchemas} and ${progAccessSource}`,
  )
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
          addAppData(githubAppsData['server-to-server-rest'], category, appDataOperation)
        }

        // user-to-server
        if (isUserAccessToken) {
          addAppData(githubAppsData['user-to-server-rest'], category, appDataOperation)
        }

        // fine-grained pat
        if (isFineGrainedPat) {
          // Check if all permission sets for this operation are excluded for fine-grained PATs
          const allPermissionSetsExcluded = progAccessData[operation.operationId].permissions.every(
            (permissionSet) =>
              Object.keys(permissionSet).every((permissionName) =>
                isActorExcluded(
                  progActorResources[permissionName]?.excluded_actors,
                  'fine_grained_pat',
                  actorTypeMap,
                ),
              ),
          )

          // Debug logging for checks-related operations
          const hasChecksPermission = progAccessData[operation.operationId].permissions.some(
            (permissionSet) => permissionSet.checks,
          )

          if (!allPermissionSetsExcluded) {
            addAppData(githubAppsData['fine-grained-pat'], category, appDataOperation)
          }
        }

        // permissions
        for (const permissionSet of progAccessData[operation.operationId].permissions) {
          for (const [permissionName, readOrWrite] of Object.entries(permissionSet)) {
            const { title, displayTitle } = getDisplayTitle(permissionName, progActorResources)
            if (progActorResources[permissionName]['visibility'] === 'private') continue

            const excludedActors = progActorResources[permissionName]['excluded_actors']

            const additionalPermissions = calculateAdditionalPermissions(
              progAccessData[operation.operationId].permissions,
            )

            // Filter out metadata permissions when combined with other permissions
            // The metadata permission is automatically granted with any other repository permission,
            // so documenting it for operations that require additional permissions is misleading.
            // This fixes the issue where mutating operations (PUT, DELETE) incorrectly appeared
            // to only need metadata access when they actually require write permissions.
            // See: https://github.com/github/docs-engineering/issues/5212
            if (
              shouldFilterMetadataPermission(
                permissionName,
                progAccessData[operation.operationId].permissions,
              )
            ) {
              continue
            }

            // github app permissions
            if (!isActorExcluded(excludedActors, 'server_to_server', actorTypeMap)) {
              const serverToServerPermissions = githubAppsData['server-to-server-permissions']
              if (!serverToServerPermissions[permissionName]) {
                serverToServerPermissions[permissionName] = {
                  title,
                  displayTitle,
                  permissions: [],
                }
              }
              const worksWithData = {
                'user-to-server': Boolean(
                  isUserAccessToken &&
                    !isActorExcluded(excludedActors, 'user_to_server', actorTypeMap),
                ),
                'server-to-server': Boolean(
                  isInstallationAccessToken &&
                    !isActorExcluded(excludedActors, 'server_to_server', actorTypeMap),
                ),
                'additional-permissions': additionalPermissions,
              }
              serverToServerPermissions[permissionName].permissions.push(
                Object.assign(
                  {},
                  appDataOperationWithCategory,
                  { access: readOrWrite },
                  worksWithData,
                ),
              )
            }

            // fine-grained pats
            const isExcluded = isActorExcluded(excludedActors, 'fine_grained_pat', actorTypeMap)

            if (isFineGrainedPat && !isExcluded) {
              // Hardcoded exception: exclude repository_projects from fine-grained PAT permissions
              // This is because fine-grained PATs can only operate on organization-level Projects (classic),
              // not repository-level Projects (classic). Users cannot grant the repository Projects (classic)
              // fine-grained permission in the fine-grained PAT UI.
              // See: https://github.com/github/docs-engineering/issues/4613
              if (permissionName === 'repository_projects') {
                continue
              }
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
                  'additional-permissions': additionalPermissions,
                  access: readOrWrite,
                }),
              )
            }
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

export async function getProgAccessData(progAccessSource, isRest = false) {
  const useRemoteGitHubFiles = progAccessSource === 'rest-api-description'
  // check for required PAT
  if (useRemoteGitHubFiles && !process.env.GITHUB_TOKEN) {
    throw new Error(
      'Error! You must have the GITHUB_TOKEN environment variable set to access the programmatic access and resource files via the GitHub REST API.',
    )
  }

  let progAccessDataRaw
  let progActorResources
  const progAccessFilepath = 'config/access_control/programmatic_access.yaml'
  const progActorDirectory =
    'config/access_control/fine_grained_permissions/programmatic_actor_fine_grained_resources'

  if (!useRemoteGitHubFiles) {
    progAccessDataRaw = yaml.load(
      await readFile(path.join(progAccessSource, progAccessFilepath), 'utf8'),
    )
    progActorResources = await getProgActorResourceContent({
      gitHubSourceDirectory: path.join(progAccessSource, progActorDirectory),
    })
  } else {
    progAccessDataRaw = yaml.load(
      await getContents('github', 'github', 'master', progAccessFilepath),
    )
    progActorResources = await getProgActorResourceContent({
      owner: 'github',
      repo: 'github',
      branch: 'master',
      path: progActorDirectory,
    })
  }

  const progAccessData = {}
  for (const operation of progAccessDataRaw) {
    const operationData = {
      userToServerRest: operation.user_to_server.enabled,
      serverToServer: operation.server_to_server.enabled,
      fineGrainedPat: operation.user_to_server.enabled && !operation.disabled_for_patv2,
      permissions: isRest
        ? getDisplayPermissions(operation.permission_sets || [], progActorResources)
        : operation.permission_sets || [],
      allowPermissionlessAccess: operation.allows_permissionless_access,
      allowsPublicRead: operation.allows_public_read,
      basicAuth: operation.basic_auth,
    }

    // Handle comma-separated operation IDs
    const operationIds = operation.operation_ids.split(',').map((id) => id.trim())
    for (const operationId of operationIds) {
      progAccessData[operationId] = operationData
    }
  }

  return { progAccessData, progActorResources }
}

function getDisplayPermissions(permissionSets, progActorResources) {
  const displayPermissions = permissionSets.map((permissionSet) => {
    const displayPermissionSet = {}
    Object.entries(permissionSet).forEach(([key, value]) => {
      const { displayTitle } = getDisplayTitle(key, progActorResources, true)
      displayPermissionSet[displayTitle] = value
    })

    return displayPermissionSet
  })

  return displayPermissions
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

function getDisplayTitle(permissionName, progActorResources, isRest = false) {
  const tempTitle = permissionName.replace(/_/g, ' ')
  const permissionNameExists = progActorResources[permissionName]
  if (!permissionNameExists) {
    console.warn(
      `The permission ${permissionName} is missing from the definitions in the config/access_control/fine_grained_permissions/programmatic_actor_fine_grained_resources directory. Creating a placeholder value of ${tempTitle} until it's added.`,
    )
  }
  const title = progActorResources[permissionName]?.title || tempTitle
  let resourceGroup = progActorResources[permissionName]?.resource_group || ''
  if (resourceGroup === 'business') {
    resourceGroup = 'enterprise'
  }

  if (!title) {
    console.warn(`No title found for title ${title} resource group ${resourceGroup}`)
    return ''
  }

  const displayTitle = isRest
    ? !resourceGroup
      ? sentenceCase(title) + ' permissions'
      : `"${sentenceCase(title)}" ` + resourceGroup + ' permissions'
    : !resourceGroup
      ? sentenceCase(title) + ' permissions'
      : sentenceCase(resourceGroup) + ' permissions for ' + `"${title}"`

  return { title, displayTitle }
}

function sentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Calculates whether an operation has additional permissions beyond a single permission.
 */
export function calculateAdditionalPermissions(permissionSets) {
  return (
    permissionSets.length > 1 ||
    permissionSets.some((permissionSet) => Object.keys(permissionSet).length > 1)
  )
}

/**
 * Determines whether a metadata permission should be filtered out when it has additional permissions.
 * Prevents misleading documentation where mutating operations appear to only need metadata access.
 */
export function shouldFilterMetadataPermission(permissionName, permissionSets) {
  if (permissionName !== 'metadata') {
    return false
  }

  return calculateAdditionalPermissions(permissionSets)
}

export function isActorExcluded(excludedActors, actorType, actorTypeMap = {}) {
  if (!excludedActors || !Array.isArray(excludedActors)) {
    return false
  }

  // Map generic actor type to actual YAML value if mapping exists
  const actualActorType = actorTypeMap[actorType] || actorType

  // Check if the mapped actor type is excluded
  if (excludedActors.includes(actualActorType)) {
    return true
  }

  // Also check for the original actor type (before mapping)
  if (excludedActors.includes(actorType)) {
    return true
  }

  // Check for known aliases - the source data might use different values
  // than what we expect in our mapping
  if (actorType === 'fine_grained_pat' && excludedActors.includes('UserProgrammaticAccess')) {
    return true
  }

  return false
}
function addAppData(storage, category, data) {
  if (!storage[category]) {
    storage[category] = []
  }
  storage[category].push(data)
}

async function validateAppData(data, pageType) {
  if (pageType.includes('permissions')) {
    for (const value of Object.values(data)) {
      const { isValid, errors } = validateJson(permissionSchema, value)
      if (!isValid) {
        console.error(JSON.stringify(errors, null, 2))
        throw new Error('GitHub Apps permission schema validation failed')
      }
    }
  } else {
    for (const arrayItems of Object.values(data)) {
      for (const item of arrayItems) {
        const { isValid, errors } = validateJson(enabledSchema, item)
        if (!isValid) {
          console.error(JSON.stringify(errors, null, 2))
          throw new Error('GitHub Apps enabled apps schema validation failed')
        }
      }
    }
  }
}

// When getting files from the GitHub repo locally (or in a Codespace)
// you can pass the full or relative path to the `github` repository
// directory on disk.
// When the source directory is `rest-api-description` (which is more common)
// you can pass the `owner`, `repo`, `branch`, and `path` (repository path)
async function getProgActorResourceContent({
  owner,
  repo,
  branch,
  path,
  gitHubSourceDirectory = null,
}) {
  // Get files either locally from disk or from the GitHub remote repo
  let files
  if (gitHubSourceDirectory) {
    files = await getProgActorContentFromDisk(gitHubSourceDirectory)
  } else {
    files = await getDirectoryContents(owner, repo, branch, path)
  }

  // We need to format the file content into a single object. Each file
  // contains a single key and a single value that needs to be added
  // to the object.
  const progActorResources = {}
  for (const file of files) {
    const fileContent = yaml.load(file)
    // Each file should only contain a single key and value.
    if (Object.keys(fileContent).length !== 1) {
      throw new Error(`Error: The file ${JSON.stringify(fileContent)} must only have one key.`)
    }
    Object.entries(fileContent).forEach(([key, value]) => {
      progActorResources[key] = value
    })
  }
  return progActorResources
}

async function getProgActorContentFromDisk(directory) {
  const files = walk(directory, {
    includeBasePath: true,
    directories: false,
  })
  const promises = files.map(async (file) => await readFile(file, 'utf8'))
  return await Promise.all(promises)
}
