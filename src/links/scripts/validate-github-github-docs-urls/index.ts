import { program } from 'commander'
import { postPRComment } from './post-pr-comment'
import { validate } from './validate'
import { generateNewJSON } from './generate-new-json'
import { cleanUpOldBranches } from './clean-up-old-branches'

program
  .name('validate-github-github-docs-urls')
  .description('Validate config/docs-urls.json in github/github')

program
  .command('validate')
  .description('Validate config/docs-urls.json in github/github')
  .option('--fail-on-warning', 'Any warning will make the process exit with a non-zero code')
  .option('--fail-on-error', 'Any error will make the process exit with a non-zero code')
  .option('-o, --output <output-file>', 'Output file')
  .argument('<docs-urls-json-filepath>', 'path to the docs-urls JSON file')
  .action(validate)

program
  .command('post-pr-comment')
  .description('Given a JSON file of checks, post a comment to a PR about problems')
  .option(
    '-r, --repository <repository>',
    'Repository where the PR is located',
    process.env.REPOSITORY,
  )
  .option(
    '-i, --issue-number <issue-number>',
    'Issue number to post the comment on',
    process.env.ISSUE_NUMBER,
  )
  .option('--dry-run', "Don't post any comment. Only print what it would post.")
  .option('--fail-on-error', 'Any error will make the process exit with a non-zero code')
  .option(
    '--changed-files [paths...]',
    'Content files that we can map to URLs for inclusion',
    process.env.CHANGED_FILES || '',
  )
  .argument('<checks-json-filepath>', 'JSON file that has all checks')
  .action(postPRComment)

program
  .command('generate-new-json')
  .description(
    'Given a JSON file of checks, and the destination JSON file, edit the second based on the first',
  )
  .option('--fail-on-error', 'Any error will make the process exit with a non-zero code')
  .option('-o, --output <output-file>', 'Output file')
  .argument('<checks-json-filepath>', 'JSON file that has all checks')
  .argument('<destination-filepath>', 'JSON file to edit')
  .action(generateNewJSON)

program
  .command('clean-up-old-branches')
  .description('Clean up branches our automation has created and pushed to upstream')
  .option('--min-days <number>', 'Number of days since last updated', '30')
  .option(
    '--repository <name>',
    'Repository where branches to clean up are located',
    'github/github',
  )
  .option(
    '--prefix <branch-name-prefix>',
    "Prefix of the branch name to clean up, e.g. 'update-docs-urls'",
    'update-docs-urls',
  )
  .action(cleanUpOldBranches)

program.parse(process.argv)
