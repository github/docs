import { program } from 'commander'
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

program.parse(process.argv)
