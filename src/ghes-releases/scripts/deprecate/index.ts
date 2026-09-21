import { program } from 'commander'
import { execSync } from 'child_process'
import { updateContentFiles } from '@/ghes-releases/scripts/deprecate/update-content'
import { updateDataFiles } from '@/ghes-releases/scripts/deprecate/update-data'
import { updateAutomatedConfigFiles } from '@/ghes-releases/scripts/deprecate/update-automated-pipelines'
import { collapseBlankLines } from '@/ghes-releases/scripts/deprecate/collapse-blank-lines'

program
  .command('content')
  .description('Update deprecated versions frontmatter and remove deprecated content files.')
  .action(updateContentFiles)

program
  .command('data')
  .description(
    'Update deprecated versions in data files, remove empty data files, and remove deleted reusables from content files.',
  )
  .action(updateDataFiles)

program
  .command('pipelines')
  .description(
    'Removes automated pipeline data files and updates the automated pipeline config files.',
  )
  .action(updateAutomatedConfigFiles)

program
  .command('collapse-blank-lines')
  .description(
    'Collapse 2+ consecutive blank lines left by removed Liquid into one, in changed markdown files only. Pass --check to report without writing.',
  )
  .option('--check', 'Report files with double blank lines and exit non-zero instead of fixing.')
  .action((options) => collapseBlankLines({ check: options.check }))

program
  .command('create-repo')
  .description('Create new `github/docs-ghes-<RELEASE>` repository.')
  .option('-v, --version <version>', 'The GHES version to create the repo for.')
  .action((options) => {
    if (!options.version) {
      console.error('You must provide a GHES version with the -v flag.')
      process.exit(1)
    }
    execSync(
      `src/ghes-releases/scripts/deprecate/create-docs-ghes-version-repo.sh ${options.version}`,
    )
  })

program.parse(process.argv)
