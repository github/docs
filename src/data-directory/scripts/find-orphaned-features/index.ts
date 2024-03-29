import { program } from 'commander'
import { find } from './find'
import { deleteOrphans } from './delete'

program
  .name('find-orphaned-features')
  .description(
    "Compare what's in data/features/*.yml with what's mentioned in Markdown and frontmatter",
  )

program
  .command('find')
  .description('Figure out what features are not being used')
  .option('-s, --source-directory <directory>', 'Source directory', 'data/features')
  .option('-o, --output <output-file>', 'Output file')
  .option('-v, --verbose', 'Verbose')
  .action(find)

program
  .command('delete')
  .description('Delete features based on found orphans')
  .option('-m, --max <number>', 'Maximum number of files to delete', (val) => parseInt(val), 10)
  .option('-v, --verbose', 'Verbose')
  .argument('<orphans-json-filepath>', 'path to the JSON file')
  .action(deleteOrphans)

program.parse(process.argv)
