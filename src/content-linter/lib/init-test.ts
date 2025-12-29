import markdownlint from 'markdownlint'
import type { Configuration, Options } from 'markdownlint'

import { defaultConfig } from '@/content-linter/lib/default-markdownlint-options'
import type { Rule } from '@/content-linter/types'

interface RunRuleOptions {
  strings?: { [key: string]: string }
  files?: string[]
  ruleConfig?: boolean | object
  markdownlintOptions?: Partial<Options>
}

export async function runRule(
  module: Rule,
  { strings, files, ruleConfig, markdownlintOptions = {} }: RunRuleOptions,
) {
  if ((!strings && !files) || (strings && files))
    throw new Error('Must provide either Markdown strings or files to run a rule')

  const testConfig: Configuration = {
    [module.names[0]]: ruleConfig || true,
  }

  const testOptions: Partial<Options> = {
    customRules: [module as any],
    config: { ...defaultConfig, ...testConfig },
  }
  if (strings) testOptions.strings = strings
  if (files) testOptions.files = files

  const options: Options = { ...markdownlintOptions, ...testOptions }
  return await markdownlint.promises.markdownlint(options)
}
