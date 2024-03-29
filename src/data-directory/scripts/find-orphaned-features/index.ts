import { program } from 'commander'
import { find } from './find'

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

program.parse(process.argv)
