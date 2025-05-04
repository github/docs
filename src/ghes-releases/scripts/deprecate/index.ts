import { program } from 'commander'
import { execSync } from 'child_process'
import { updateContentFiles } from '@/ghes-releases/scripts/deprecate/update-content'
import { updateDataFiles } from '@/ghes-releases/scripts/deprecate/update-data'
import { updateAutomatedConfigFiles } from '@/ghes-releases/scripts/deprecate/update-automated-pipelines'

program.option('-f, --foo', 'enable some foo')

program
  .description('Update deprecated versions frontmatter and remove deprecated content files.')
  .command('content')
  .action(updateContentFiles)

program
  .description(
    'Update deprecated versions in data files, remove empty data files, and remove deleted reusables from content files.',
  )
  .command('data')
  .action(updateDataFiles)

program
  .description(
    'Removes automated pipeline data files and updates the automated pipeline config files.',
  )
  .command('pipelines')
  .action(updateAutomatedConfigFiles)

program
  .description('Create new `github/docs-ghes-<RELEASE>` repository.')
  .command('repo')
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
