#!/usr/bin/env node

import chalk from 'chalk'
import { readFile } from 'fs/promises'
import { allVersions } from '#src/versions/lib/all-versions.js'

// Translate the docs versioning nomenclature back to the OpenAPI names
const invertedVersionMapping = JSON.parse(await readFile('src/rest/lib/config.json')).versionMapping
const versionMapping = {}
Object.assign(
  versionMapping,
  ...Object.entries(invertedVersionMapping).map(([a, b]) => ({ [b]: a })),
)
const openApiVersions = Object.values(allVersions)
  .map((version) => version.openApiVersionName)
  .map((version) => (version in versionMapping ? versionMapping[version] : version))
  .join(', ')

const log = console.log

log(chalk.green.bold.underline('REST docs\n'))
log(chalk.green.bold('  Examples of ways you can build the REST docs locally:\n'))
log(chalk.cyan.bold('  - All versions:') + '  ' + chalk.magenta('npm run sync-rest ; npm run dev'))
log(
  chalk.cyan.bold('  - Dotcom only:') +
    '   ' +
    chalk.magenta('npm run sync-rest -- --versions api.github.com ; npm run dev'),
)
log(
  chalk.cyan.bold('  - Two versions:') +
    '  ' +
    chalk.magenta('npm run sync-rest -- --versions ghes-3.7 ghes-3.8 ; npm run dev'),
)
log(
  chalk.cyan.bold('  - Dotcom and next calendar date version:') +
    ' ' +
    chalk.magenta('npm run sync-rest -- --next --versions api.github.com ; npm run dev'),
)
log(
  chalk.cyan.bold('  - Dotcom only, including unpublished operations:') +
    '   ' +
    chalk.magenta(
      'npm run sync-rest -- --versions api.github.com --include-unpublished ; npm run dev',
    ),
)
log(chalk.green.bold.underline('\nWebhook docs\n'))
log(chalk.green.bold('  Examples of ways you can build the Webhook docs locally:\n'))
log(
  chalk.cyan.bold('  - All versions:') +
    '  ' +
    chalk.magenta('npm run sync-webhooks ; npm run dev'),
)
log(
  chalk.cyan.bold('  - Dotcom only:') +
    '   ' +
    chalk.magenta('npm run sync-webhooks -- --versions api.github.com ; npm run dev'),
)
log(
  chalk.cyan.bold('  - Two versions:') +
    '  ' +
    chalk.magenta('npm run sync-webhooks -- --versions ghes-3.7 ghes-3.8 ; npm run dev'),
)
log(chalk.green.bold('\nYou can build specific versions of the REST and Webhook docs.\n'))
log(chalk.white.bold('  Versions that can be built: ', openApiVersions, '\n'))
log(chalk.green.bold('\nThere are also additional options you can pass. For details run:\n'))
log(chalk.white.bold('  npm run sync-rest -- --help'))
log(chalk.white('  or'))
log(chalk.white.bold('  npm run sync-webhooks -- --help'))
log(chalk.green.bold('\nTo start the local development server run:\n'))
log(chalk.white.bold('  npm run dev'))
log('\n\n')
