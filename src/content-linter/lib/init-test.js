import markdownlint from 'markdownlint'

import { testOptions } from './default-markdownlint-options.js'

export async function runRule(module, strings) {
  const options = testOptions(module.names[0], module, strings)
  return await markdownlint.promises.markdownlint(options)
}
