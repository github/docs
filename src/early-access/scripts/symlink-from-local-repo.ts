/**
 * @purpose Writer tool
 * @description Create or destroy symlinks to your local docs-early-access checkout
 */

import fs from 'fs'
import path from 'path'
import { program } from 'commander'

const earlyAccessRepo = 'docs-early-access'
const earlyAccessDirName = 'early-access'
const earlyAccessRepoUrl = `https://github.com/github/${earlyAccessRepo}`

interface ProgramOptions {
  pathToEarlyAccessRepo?: string
  unlink?: boolean
}

program
  .description(`Create or destroy symlinks to your local "${earlyAccessRepo}" repository.`)
  .option(
    '-p, --path-to-early-access-repo <PATH>',
    `path to a local checkout of ${earlyAccessRepoUrl}`,
  )
  .option('-u, --unlink', 'remove the symlinks')
  .parse(process.argv)

const { pathToEarlyAccessRepo, unlink }: ProgramOptions = program.opts()

if (!pathToEarlyAccessRepo && !unlink) {
  throw new Error('Must provide either `--path-to-early-access-repo <PATH>` or `--unlink`')
}

let earlyAccessLocalRepoDir: string | undefined

if (!unlink && pathToEarlyAccessRepo) {
  earlyAccessLocalRepoDir = path.resolve(process.cwd(), pathToEarlyAccessRepo)

  let dirStats: fs.Stats | null
  try {
    dirStats = fs.statSync(earlyAccessLocalRepoDir)
  } catch {
    dirStats = null
  }

  if (!dirStats) {
    throw new Error(
      `The local "${earlyAccessRepo}" repo directory does not exist: ${earlyAccessLocalRepoDir}`,
    )
  }
  if (dirStats && !dirStats.isDirectory()) {
    throw new Error(
      `A non-directory entry exists at the local "${earlyAccessRepo}" repo directory location: ${earlyAccessLocalRepoDir}`,
    )
  }
}

const destinationDirNames: string[] = ['content', 'data', 'assets/images']
const destinationDirsMap: Record<string, string> = destinationDirNames.reduce(
  (map, dirName) => {
    map[dirName] = path.join(process.cwd(), dirName, earlyAccessDirName)
    return map
  },
  {} as Record<string, string>,
)

// Remove all existing early access directories from this repo
for (const dirName of destinationDirNames) {
  const destDir = destinationDirsMap[dirName]
  fs.rmSync(destDir, { recursive: true, force: true })
  console.log(`- Removed symlink for early access directory '${dirName}' from this repo`)
}

if (unlink) {
  process.exit(0)
}

// Symlink the latest early access source directories into this repo
for (const dirName of destinationDirNames) {
  if (!earlyAccessLocalRepoDir) continue

  const sourceDir = path.join(earlyAccessLocalRepoDir, dirName)
  const destDir = destinationDirsMap[dirName]

  if (!fs.existsSync(sourceDir)) {
    console.warn(`Early access directory '${dirName}' does not exist. Skipping...`)
    continue
  }

  fs.symlinkSync(sourceDir, destDir, 'junction')

  if (!fs.existsSync(destDir)) {
    throw new Error(`Failed to symlink early access directory '${dirName}'!`)
  }
  if (!fs.lstatSync(destDir).isSymbolicLink()) {
    throw new Error(`The early access directory '${dirName}' entry is not a symbolic link!`)
  }
  if (!fs.statSync(destDir).isDirectory()) {
    throw new Error(
      `The early access directory '${dirName}' entry's symbolic link does not refer to a directory!`,
    )
  }

  console.log(`+ Added symlink for early access directory '${dirName}' into this repo`)
}
