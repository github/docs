import { program, Option } from 'commander'

import { languageKeys } from '@/languages/lib/languages.js'
import { indexAutocomplete } from './index-autocomplete'
import { type Version } from './types'

const defaultVersions: Version[] = ['free-pro-team', 'enterprise-server', 'enterprise-cloud']
const shortAlias = new Map<string, Version>()
shortAlias.set('ghes', 'enterprise-server')
shortAlias.set('fpt', 'free-pro-team')
shortAlias.set('ghec', 'enterprise-cloud')

program.name('index').description('CLI scripts for indexing to Elasticsearch')

program
  .command('autocomplete')
  .description('Index for autocomplete')
  .addOption(
    new Option('-l, --language <language...>', 'Specific languages(s)').choices(languageKeys),
  )
  .addOption(
    new Option('-v, --version <version...>', 'Specific version prefix(es)').choices([
      ...defaultVersions,
      ...shortAlias.keys(),
    ]),
  )
  .option('--verbose', 'Verbose output')
  .option('--index-prefix <prefix>', 'Prefix for the index names', '')
  .argument('<data-root>', 'path to the docs-internal-data repo')
  .action((root: string, options) => {
    const languages = options.language ? options.language : languageKeys
    const versions: Version[] = []
    for (const v of options.version || defaultVersions) {
      if (shortAlias.has(v)) {
        versions.push(shortAlias.get(v)!)
      } else {
        versions.push(v)
      }
    }
    const indexPrefix = options.indexPrefix || ''
    return indexAutocomplete({ dataRepoRoot: root, languages, versions, indexPrefix })
  })

program.parse(process.argv)
