#!/usr/bin/env node

/* Create a new subject folder

Output looks like:

src/
  xsubject/
    README.md
    docs/
      gitkeep
    lib/
    middleware/
    pages/
    components/
    stylesheets/
    scripts/
    tests/
*/

import fs from 'fs/promises'
import { program } from 'commander'

program
  .description('Scaffold a new subject folder under the src/ directory.')
  .option('-n, --name <string>', 'Name of subject.')
  .parse(process.argv)

const name = program.opts().name

if (!name) {
  throw new Error('No subject name provided.')
}

const src = 'src/'

const subfolders = [
  'docs',
  'lib',
  'middleware',
  'pages',
  'components',
  'stylesheets',
  'scripts',
  'tests',
]

const files = [
  [
    'README.md',
    `# ${name.toUpperCase()}

TBD what is ${name.toUpperCase()}

## Why ${name.toUpperCase()}

TBD why is ${name.toUpperCase()} on the docs, include metrics if applicable

## How to view ${name.toUpperCase()}

TBD step-by-step instructions to view/experience ${name.toUpperCase()}

## How to work on ${name.toUpperCase()}

TBD step-by-step instructions on how to work on ${name.toUpperCase()}

## How to get help for ${name.toUpperCase()}

TBD reference material
`,
  ],
]

const path = `${src}${name.toLowerCase()}/`
await fs.mkdir(path)
for (const subfolder of subfolders) {
  await fs.mkdir(`${path}${subfolder}/`)
  await fs.writeFile(`${path}${subfolder}/gitkeep`, '')
}
for (const [file, content] of files) {
  await fs.writeFile(`${path}${file}`, content)
}
