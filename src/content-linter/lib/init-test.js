import markdownlint from 'markdownlint'

import { testOptions } from './default-markdownlint-options.js'

export async function runRule(module, fixtureFile) {
  const options = testOptions(module.names[0], module, fixtureFile)
  return await markdownlint.promises.markdownlint(options)
}
