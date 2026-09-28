// Finds and converts Markdown tables that place Liquid ifversion tags inside table rows.
// Example input: | foo | bar |{% ifversion dependency-review-action-licenses %}
// Example output:
// | foo | bar |
// | {% ifversion dependency-review-action-licenses %} |
// Run convert: npm run liquid-markdown-tables -- convert content/path/to/article.md
// Then run git diff to inspect changes.
// Run find: npm run liquid-markdown-tables -- find
// Run filtered find: npm run liquid-markdown-tables -- find --filter content/mydocset
// Find prints paths that likely contain misplaced Liquid ifversion tags.

import { program } from 'commander'

import { convert } from './convert'
import { find } from './find'

program
  .name('liquid-markdown-tables')
  .description('CLI for finding and converting Liquid in Markdown tables')

program
  .command('convert')
  .description('Clean up Markdown tables that use Liquid `ifversion` tags the old/wrong way')
  .option('--dry-run', "Don't actually write changes to disk", false)
  .arguments('[files...]')
  .action(convert)

program
  .command('find')
  .description('Find Markdown tables that use Liquid `ifversion` tags the old/wrong way')
  .option('--filter <filter...>', 'Filter by file path')
  .action(find)

program.parse(process.argv)
