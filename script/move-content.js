#!/usr/bin/env node

// [start-readme]
//
// Use this script to help you move or rename a single file or a folder. The script will move or rename the file or folder for you, update relevant `children` in the index.md file(s), and add a `redirect_from` to frontmatter in the renamed file(s). Note: You will still need to manually update the `title` if necessary.
//
// By default, the `move-content.js` script will commit the changes it makes. If you don't want the script to run any git commands for you, run it with the `--no-git` flag. Note: In most cases it will be easier and safer to let the script run the git commands for you, since git can get confused when a file is both renamed and edited.
//
// To learn more about the script, you can run `script/move-content.js --help`.
//
// To run the script for a file:
// - `script/move-content.js PATH/TO/CURRENT-FILE.md PATH/TO/DESIRED-FILE-LOCATION-OR-NAME.md`
//
// To run the script for a folder:
// - `script/move-content.js PATH/TO/CURRENT-FOLDER PATH/TO/DESIRED-FOLDER-LOCATION-OR-NAME`
//
// To undo the script, run the same command that you used to run the script, but add an `--undo` flag:
// - `script/move-content.js --undo PATH/TO/OLD PATH/TO/NEW`
//
// [end-readme]

import fs from 'fs'
import path from 'path'
import { execSync } from 'child_process'

import { program } from 'commander'
import chalk from 'chalk'
import walk from 'walk-sync'
import yaml from 'js-yaml'

import fm from '../lib/frontmatter.js'
import readFrontmatter from '../lib/read-frontmatter.js'

const CONTENT_ROOT = path.resolve('content')
const DATA_ROOT = path.resolve('data')

const REDIRECT_FROM_KEY = 'redirect_from'
const CHILDREN_KEY = 'children'
const CHILDGROUPS_KEY = 'childGroups'

program
  .description('Helps you move (rename) files or folders')
  .option('-v, --verbose', 'Verbose outputs')
  .option(
    '--no-git',
    "DON'T use 'git mv' and 'git commit' to move the file. Just regular file moves.",
  )
  .option('--undo', 'Reverse of moving. I.e. moving it back. Only applies to the last run.')
  .arguments('old', 'old file or folder name')
  .arguments('new', 'new file or folder name')
  .parse(process.argv)

main(program.opts(), program.args)

async function main(opts, nameTuple) {
  const { verbose, undo, git } = opts
  if (nameTuple.length !== 2) {
    console.error(
      chalk.red(`Must be exactly 2 file paths as arguments. Not ${nameTuple.length} arguments.`),
    )
    process.exit(1)
  }
  const [old, new_] = nameTuple
  if (old === new_) {
    throw new Error('old == new')
  }

  const uppercases = new_.match(/[A-Z]+/g) || []
  if (uppercases.length > 0) {
    throw new Error(`Uppercase in file name not allowed ('${uppercases}')`)
  }

  let oldPath = old
  let newPath = new_
  if (undo) {
    oldPath = new_
    newPath = old
  } else {
    oldPath = old
    newPath = new_
  }

  // The file you're about to move needs to exist
  if (!fs.existsSync(oldPath)) {
    console.error(chalk.red(`${oldPath} does not exist.`))
    process.exit(1)
  }

  let isFolder = fs.lstatSync(oldPath).isDirectory()

  // Before validating, see if we need to fake that the newPath should be.
  // This is to mimic how bash `mv` works where you can do:
  //
  //    mv some/place/a/file.txt destin/ation/
  //
  // which is implied to mean the same as;
  //
  //    mv some/place/a/file.txt destin/ation/file.txt
  //
  if (undo) {
    if (isFolder) {
      const wouldBe = path.join(oldPath, path.basename(newPath))
      // We can't know if the `newPath` is a directory or file because
      // whichever it is, it doesn't exist.
      if (fs.existsSync(wouldBe) && !fs.lstatSync(wouldBe).isDirectory()) {
        isFolder = false
        oldPath = wouldBe
      }
    }
  } else {
    if (!isFolder) {
      if (fs.existsSync(newPath) && fs.lstatSync(newPath).isDirectory()) {
        newPath = path.join(newPath, path.basename(oldPath))
      }
    }
  }

  const currentBranchName = getCurrentBranchName(verbose)
  if (currentBranchName === 'main' && git) {
    console.error(chalk.red("Cannot proceed because you're on the 'main' branch."))
    console.error("This command will executed 'git mv ...' and 'git commit ...'")
    console.error('Create a new dedicated branch instead, first, for this move.\n')
    process.exit(2)
  }

  // This will exit non-zero if anything is wrong with these inputs
  validateFileInputs(oldPath, newPath, isFolder)

  if (isFolder) {
    // The folder must have an index.md file
    const indexFilePath = path.join(oldPath, 'index.md')
    if (!fs.existsSync(indexFilePath)) {
      throw new Error(`${oldPath} does not have an index.md file`)
    }
    // Gather individual files by walking `oldPath` recursively
    // The second argument is
    const files = findFilesInFolder(oldPath, newPath, opts)

    // First take care of the `git mv` (or regular rename) part.
    if (undo) {
      undoFolder(oldPath, newPath, files, opts)
    } else {
      moveFolder(oldPath, newPath, files, opts)
    }

    addToChildren(newPath, removeFromChildren(oldPath, opts), opts)

    if (undo) {
      undoFiles(files, false, opts)
    } else {
      editFiles(files, false, opts)
    }
  } else {
    // When it's just an individual file, it's easier.
    const oldHref = makeHref(CONTENT_ROOT, undo ? newPath : oldPath)
    const newHref = makeHref(CONTENT_ROOT, undo ? oldPath : newPath)
    const files = [[oldPath, newPath, oldHref, newHref]]

    // First take care of the `git mv` (or regular rename) part.
    moveFiles(files, opts)

    if (undo) {
      undoFiles(files, true, opts)
    } else {
      editFiles(files, true, opts)
    }
  }

  if (!undo) {
    if (verbose) {
      console.log(
        chalk.yellow(
          'To undo (reverse) what you just did, run the same exact command but with --undo added to the end',
        ),
      )
    }
  }
}

function validateFileInputs(oldPath, newPath, isFolder) {
  if (isFolder) {
    // Make sure that only the last portion of the path is different
    // and that all preceding are equal.
    const [oldBase, oldName] = splitDirectory(oldPath)
    const [newBase] = splitDirectory(newPath)
    if (oldBase !== newBase && !existsAndIsDirectory(newBase)) {
      console.error(
        chalk.red(
          `When moving a directory, both bases need to be the same. '${oldBase}' != '${newBase}'`,
        ),
      )
      console.warn(chalk.yellow(`Only the name (e.g. '${oldName}') can be different.`))
      process.exit(1)
    }
  }

  if (!path.resolve(newPath).startsWith(CONTENT_ROOT)) {
    const relativeRoot = path.relative('.', CONTENT_ROOT)
    console.error(chalk.red(`New path does not start with '${relativeRoot}'`))
    process.exit(1)
  }

  if (!fs.existsSync(oldPath)) {
    console.error(chalk.red(`${oldPath} does not resolve to an existing file or a folder`))
    process.exit(1)
  }
  if (path.basename(oldPath) === 'index.md') {
    console.error(
      chalk.red(`File path can't be 'index.md'. Refer to it by its foldername instead.`),
    )
    process.exit(1)
  }
  if (path.basename(newPath) === 'index.md') {
    console.error(
      chalk.red(`File path can't be 'index.md'. Refer to it by its foldername instead.`),
    )
    process.exit(1)
  }

  if (fs.existsSync(newPath)) {
    console.error(chalk.red(`Can't move to a ${isFolder ? 'folder' : 'file'} that already exists.`))
    process.exit(1)
  }

  if (/\s/.test(newPath)) {
    throw new Error(`New path (${newPath}) can't contain whitespace`)
  }
}

function existsAndIsDirectory(directory) {
  return fs.existsSync(directory) && fs.lstatSync(directory).isDirectory()
}

function splitDirectory(directory) {
  return [path.dirname(directory), path.basename(directory)]
}

function findFilesInFolder(oldPath, newPath, opts) {
  const { undo, verbose } = opts
  const files = []
  const allFiles = walk(oldPath, { includeBasePath: true, directories: false })
  for (const filePath of allFiles) {
    const newFilePath = filePath.replace(oldPath, newPath)
    const oldHref = makeHref(CONTENT_ROOT, undo ? newFilePath : filePath)
    const newHref = makeHref(CONTENT_ROOT, undo ? filePath : newFilePath)
    files.push([filePath, newFilePath, oldHref, newHref])
  }
  if (verbose) {
    console.log(chalk.yellow(`Found ${files.length} files within ${oldPath}`))
  }
  return files
}

function makeHref(root, filePath) {
  const nameSplit = path.relative(root, filePath).split(path.sep)
  if (nameSplit.slice(-1)[0] === 'index.md') {
    nameSplit.pop()
  } else {
    nameSplit.push(nameSplit.pop().replace(/\.md$/, ''))
  }
  return '/' + nameSplit.join('/')
}

function moveFolder(oldPath, newPath, files, opts) {
  const { verbose, git: useGit } = opts
  if (useGit) {
    let cmd = `git mv ${oldPath} ${newPath}`
    if (verbose) {
      console.log(`git mv command: ${chalk.grey(cmd)}`)
    }
    execSync(cmd)

    cmd = `git commit -a -m "renamed ${files.length} files"`
    if (verbose) {
      console.log(`git commit command: ${chalk.grey(cmd)}`)
    }
    execSync(cmd)
  } else {
    fs.renameSync(oldPath, newPath)
    if (verbose) {
      console.log(`Renamed folder ${chalk.bold(oldPath)} to ${chalk.bold(newPath)}`)
    }
  }
}

function undoFolder(oldPath, newPath, files, opts) {
  const { verbose, git: useGit } = opts

  if (useGit) {
    let cmd = `git mv ${oldPath} ${newPath}`
    execSync(cmd)
    if (verbose) {
      console.log(`git mv command: ${chalk.grey(cmd)}`)
    }

    cmd = `git commit -a -m "renamed ${files.length} files"`
    execSync(cmd)
    if (verbose) {
      console.log(`git commit command: ${chalk.grey(cmd)}`)
    }
  } else {
    fs.renameSync(oldPath, newPath)
    if (verbose) {
      console.log(`Renamed folder ${chalk.bold(oldPath)} to ${chalk.bold(newPath)}`)
    }
  }
}

function getBasename(fileOrDirectory) {
  // Note, can't use fs.lstatSync().isDirectory() because it's just a string
  // at this point. It might not exist.

  if (fileOrDirectory.endsWith('index.md')) {
    return path.basename(path.directory(fileOrDirectory))
  }
  if (fileOrDirectory.endsWith('.md')) {
    return path.basename(fileOrDirectory).replace(/\.md$/, '')
  }
  return path.basename(fileOrDirectory)
}

function removeFromChildren(oldPath, opts) {
  const { verbose } = opts

  const parentFilePath = path.join(path.dirname(oldPath), 'index.md')
  const fileContent = fs.readFileSync(parentFilePath, 'utf-8')
  const { content, data } = readFrontmatter(fileContent)
  const oldName = getBasename(oldPath)

  let childrenPosition = -1
  if (CHILDREN_KEY in data) {
    data[CHILDREN_KEY] = data[CHILDREN_KEY].filter((entry, i) => {
      if (entry === oldName || entry === `/${oldName}`) {
        childrenPosition = i
        return false
      }
      return true
    })
    if (data[CHILDREN_KEY].length === 0) {
      delete data[CHILDREN_KEY]
    }
  }

  const childGroupPositions = []

  ;(data[CHILDGROUPS_KEY] || []).forEach((group, i) => {
    if (group.children) {
      group.children = group.children.filter((entry, j) => {
        if (entry === oldName || entry === `/${oldName}`) {
          childGroupPositions.push([i, j])
          return false
        }
        return true
      })
    }
  })

  fs.writeFileSync(
    parentFilePath,
    readFrontmatter.stringify(content, data, { lineWidth: 10000 }),
    'utf-8',
  )
  if (verbose) {
    console.log(`Removed 'children' (${oldName}) key in ${parentFilePath}`)
  }

  return { childrenPosition, childGroupPositions }
}

function addToChildren(newPath, positions, opts) {
  const { verbose } = opts
  const parentFilePath = path.join(path.dirname(newPath), 'index.md')
  const fileContent = fs.readFileSync(parentFilePath, 'utf-8')
  const { content, data } = readFrontmatter(fileContent)
  const newName = getBasename(newPath)

  const { childrenPosition, childGroupPositions } = positions
  if (childrenPosition > -1) {
    const children = data[CHILDREN_KEY] || []
    let prefix = ''
    if (children.every((entry) => entry.startsWith('/'))) {
      prefix += '/'
    }
    if (childrenPosition > -1 && childrenPosition < children.length) {
      children.splice(childrenPosition, 0, prefix + newName)
    } else {
      children.push(prefix + newName)
    }
    data[CHILDREN_KEY] = children
  }

  if (CHILDGROUPS_KEY in data) {
    for (const [groupIndex, childrenPosition] of childGroupPositions) {
      if (groupIndex < data[CHILDGROUPS_KEY].length) {
        const group = data[CHILDGROUPS_KEY][groupIndex]
        if (childrenPosition < group.children.length) {
          group.children.splice(childrenPosition, 0, newName)
        } else {
          group.children.push(newName)
        }
      }
    }
  }

  fs.writeFileSync(
    parentFilePath,
    readFrontmatter.stringify(content, data, { lineWidth: 10000 }),
    'utf-8',
  )
  if (verbose) {
    console.log(`Added 'children' (${newName}) key in ${parentFilePath}`)
  }
}

function moveFiles(files, opts) {
  const { verbose, git: useGit } = opts
  // Before we do anything, assert that the files are valid
  for (const [oldPath] of files) {
    const fileContent = fs.readFileSync(oldPath, 'utf-8')
    const { errors } = fm(fileContent, { filepath: oldPath })
    errors.forEach((error, i) => {
      if (!i) console.warn(chalk.yellow(`Error parsing file (${oldPath}) frontmatter:`))
      console.error(`${chalk.red(error.message)}: ${chalk.yellow(error.reason)}`)
    })
    if (errors.length > 0) throw new Error('There were more than 0 parse errors')
  }

  // In the first loop, we exclusively perform the rename. No file edits!
  // The reason is that we don't want lump renaming and edits in the same
  // git commit.
  // By having a dedicated git commit that purely renames (without changing
  // any content) is best practice to avoid complex 3-way diffs that
  // `git merge` does when you later have to merge in the latest `main`
  // into your ongoing renaming branch.
  for (const [oldPath, newPath] of files) {
    if (verbose) {
      console.log(`Moving ${chalk.bold(oldPath)} to ${chalk.bold(newPath)}`)
    }

    if (useGit) {
      const cmd = `git mv ${oldPath} ${newPath}`
      execSync(cmd)
      if (verbose) {
        console.log(`git mv command: ${chalk.grey(cmd)}`)
      }
    } else {
      fs.renameSync(oldPath, newPath)
      if (verbose) {
        console.log(`Renamed ${chalk.bold(oldPath)} to ${chalk.bold(newPath)}`)
      }
    }
  }

  if (useGit) {
    const cmd = `git commit -a -m "renamed ${files.length} files"`
    execSync(cmd)
    if (verbose) {
      console.log(`git commit command: ${chalk.grey(cmd)}`)
    }
  }
}

function editFiles(files, updateParent, opts) {
  const { verbose, git: useGit } = opts

  // Second loop. This time our only job is to edit the `redirects_from`
  // frontmatter key.
  // See comment in the first loop above for why we're looping over the files
  // two times.
  for (const [oldPath, newPath, oldHref, newHref] of files) {
    const fileContent = fs.readFileSync(newPath, 'utf-8')
    const { content, data } = readFrontmatter(fileContent)
    if (!(REDIRECT_FROM_KEY in data)) {
      data[REDIRECT_FROM_KEY] = []
    }
    data[REDIRECT_FROM_KEY].push(oldHref)
    fs.writeFileSync(
      newPath,
      readFrontmatter.stringify(content, data, { lineWidth: 10000 }),
      'utf-8',
    )
    if (verbose) {
      console.log(`Added ${oldHref} to 'redirects_from' in ${newPath}`)
    }

    if (updateParent) {
      addToChildren(newPath, removeFromChildren(oldPath, opts), opts)
    }

    // Perhaps this was mentioned in a 'guide' in a learning track
    for (const filePath of findInLearningTracks(oldHref)) {
      changeLearningTracks(filePath, oldHref, newHref)
      if (verbose) {
        console.log(`Updated learning tracks in ${filePath}`)
      }
    }
  }

  if (useGit) {
    const cmd = `git commit -a -m "set ${REDIRECT_FROM_KEY} on ${files.length} files"`
    execSync(cmd)
    if (verbose) {
      console.log(`git commit command: ${chalk.grey(cmd)}`)
    }
  }
}

function undoFiles(files, updateParent, opts) {
  const { verbose, git: useGit } = opts

  // First undo any edits to the file
  for (const [oldPath, newPath, oldHref, newHref] of files) {
    const fileContent = fs.readFileSync(newPath, 'utf-8')
    const { content, data } = readFrontmatter(fileContent)

    data[REDIRECT_FROM_KEY] = (data[REDIRECT_FROM_KEY] || []).filter((entry) => entry !== oldHref)
    if (data[REDIRECT_FROM_KEY].length === 0) {
      delete data[REDIRECT_FROM_KEY]
    }

    fs.writeFileSync(
      newPath,
      readFrontmatter.stringify(content, data, { lineWidth: 10000 }),
      'utf-8',
    )
    if (updateParent) {
      addToChildren(newPath, removeFromChildren(oldPath, opts), opts)
    }

    // Perhaps this was mentioned in a 'guide' in a learning track
    for (const filePath of findInLearningTracks(newHref)) {
      changeLearningTracks(filePath, newHref, oldHref)
      if (verbose) {
        console.log(`Updated learning tracks in ${filePath}`)
      }
    }
  }
  if (useGit) {
    const cmd = `git commit -a -m "unset ${REDIRECT_FROM_KEY} on ${files.length} files"`
    execSync(cmd)
    if (verbose) {
      console.log(`git commit command: ${chalk.grey(cmd)}`)
    }
  }
}

function findInLearningTracks(href) {
  const allFiles = walk(path.join(DATA_ROOT, 'learning-tracks'), {
    globs: ['*.yml'],
    includeBasePath: true,
    directories: false,
  })
  const found = []
  for (const filePath of allFiles) {
    const tracks = yaml.load(fs.readFileSync(filePath, 'utf-8'))

    if (
      Object.values(tracks).find((track) => {
        const guides = track.guides || []
        return guides.includes(href)
      })
    ) {
      found.push(filePath)
    }
  }
  return found
}

function changeLearningTracks(filePath, oldHref, newHref) {
  // Can't deserialize and serialize the Yaml because it would lose
  // formatting and comments. So regex replace it.
  const regex = new RegExp(`- ${oldHref}$`, 'gm')
  const oldContent = fs.readFileSync(filePath, 'utf-8')
  const newContent = oldContent.replace(regex, `- ${newHref}`)
  fs.writeFileSync(filePath, newContent, 'utf-8')
}

function getCurrentBranchName(verbose = false) {
  const cmd = 'git branch --show-current'
  const o = execSync(cmd)
  if (verbose) {
    console.log(`git commit command: ${chalk.grey(cmd)}`)
  }
  return o.toString().trim()
}
