import rules from '../../../../node_modules/markdownlint/lib/rules'
import { gitHubDocsMarkdownlint } from '../linting-rules/index'
import { baseConfig } from '../../style/base'
import { customConfig } from '../../style/github-docs'

export const customRules = gitHubDocsMarkdownlint.rules
export const allRules = [...rules, ...gitHubDocsMarkdownlint.rules]
export const allConfig = { ...baseConfig, ...customConfig }
