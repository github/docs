/**
 * This script helps you rewrite Markdown files that might contain
 * tables with Liquid `ifversion` tags the old/wrong way.
 * For example:
 *
 *    | Header | Header 2 |
 *    |--------|----------|
 *    | bla    | bla      |{% ifversion dependency-review-action-licenses %}
 *    | foo    | foo      |{% endif %}{% ifversion dependency-review-action-fail-on-scopes %}
 *    | bar    | bar      |{% endif %}
 *    | baz    | baz      |
 *    {%- ifversion dependency-review-action-licenses %}
 *    | qux    | qux      |{% endif %}
 *
 * Will become:
 *
 *   | Header | Header 2 |
 *   |--------|----------|
 *   | bla    | bla      |
 *   | {% ifversion dependency-review-action-licenses %} |
 *   | foo    | foo      |
 *   | {% endif %} |
 *   | {% ifversion dependency-review-action-fail-on-scopes %} |
 *   | bar    | bar      |
 *   | {% endif %} |
 *   | baz    | baz      |
 *   | {% ifversion dependency-review-action-licenses %} |
 *   | qux    | qux      |
 *   | {% endif %} |
 *
 * Run the script like this:
 *
 *   npm run liquid-markdown-tables -- convert content/path/to/article.md
 *   git diff
 *
 * To *find* files that you *can* convert, use:
 *
 *   npm run liquid-markdown-tables -- find
 *   # or
 *   npm run liquid-markdown-tables -- find --filter content/mydocset
 *
 * This will print out paths to files that most likely contain the old/wrong Liquid `ifversion` tags.
 *
 */

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
  //   .arguments('[files-or-directories...]', '')
  .arguments('[files...]')
  .action(convert)

program
  .command('find')
  .description('Find Markdown tables that use Liquid `ifversion` tags the old/wrong way')
  .option('--filter <filter...>', 'Filter by file path')
  .action(find)

program.parse(process.argv)
