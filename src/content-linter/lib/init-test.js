import markdownlint from 'markdownlint'

import { defaultOptions, defaultConfig } from './default-markdownlint-options.js'

export async function runRule(module, { strings, files, ruleConfig }) {
  if ((!strings && !files) || (strings && files))
    throw new Error('Must provide either Markdown strings or files to run a rule')

  const testConfig = {
    [module.names[0]]: ruleConfig || true,
  }

  const testOptions = {
    customRules: [module],
    config: { ...defaultConfig, ...testConfig },
  }
  if (strings) testOptions.strings = strings
  if (files) testOptions.files = files

  const options = { ...defaultOptions, ...testOptions }
  return await markdownlint.promises.markdownlint(options)
}
