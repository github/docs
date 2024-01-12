import rules from '../../../../node_modules/markdownlint/lib/rules.js'
import { gitHubDocsMarkdownlint } from '../linting-rules/index.js'
import { baseConfig } from '../../style/base.js'
import { customConfig } from '../../style/github-docs.js'

export const customRules = gitHubDocsMarkdownlint.rules
export const allRules = [...rules, ...gitHubDocsMarkdownlint.rules]
export const allConfig = { ...baseConfig, ...customConfig }
