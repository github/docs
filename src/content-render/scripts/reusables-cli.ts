// Usage: npm run reusables -- --help
// Usage: npm run reusables -- find used accounts/create-account.md
// Usage: npm run reusables -- find unused accounts/create-account.md
// Usage: npm run reusables -- find any-unused
// Usage: npm run reusables -- find top-used

import { Command } from 'commander'
import { findTopUsed, findUsed } from './reusables-cli/find/used'
import { findPotentialUses } from './reusables-cli/find/potential-uses'
import { findUnused } from './reusables-cli/find/unused'

const defaultSimilarityThreshold = 10000
const defaultTopUsedCount = 10
const absolutePathDescription = 'Show absolute paths in output instead of relative path to repo'

const program = new Command()

program
  .name('reusables-helper-cli')
  .description('Tools to help with reusable Docs content snippets')

const findCommand = program.command('find')

findCommand
  .command('used')
  .description('Find all content files that use a specific reusable.')
  .argument(
    '<reusable-path>',
    'Path to the reusable file relative to content/data/reusables, e.g. "accounts/create-account.md".',
  )
  .option('-a --absolute', absolutePathDescription, false)
  .action(findUsed)

findCommand
  .command('top-used')
  .description('Find the top x most used reusables.')
  .argument(
    '[number-of-most-used-to-find]',
    'Number of most used reusables to find.',
    defaultTopUsedCount,
  )
  .option('-a --absolute', absolutePathDescription, false)
  .action(findTopUsed)

findCommand
  .command('unused')
  .description(
    'Find all reusables that are not used in any content files. WARNING: This command may take a long time to run.',
  )
  .option('-a --absolute', absolutePathDescription, false)
  .action(findUnused)

findCommand
  .command('potential-uses')
  .option(
    '-s, --similar',
    'Find files where contents loosely matches a reusable instead of an exact match.',
  )
  .option(
    '-t, --threshold <number>',
    'Similarity threshold for similar reusables. e.g. 10000. This requires the --similar flag and some experimentation to find a useful value.',
    parseFloat,
    defaultSimilarityThreshold,
  )
  .option('-a --absolute', absolutePathDescription, false)
  .description(
    'Find all content files that could use any reusables, but do not. WARNING: This command may take a long time to run.',
  )
  .action(findPotentialUses)

program.parse()
