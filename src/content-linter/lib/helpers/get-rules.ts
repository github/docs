import { gitHubDocsMarkdownlint } from '@/content-linter/lib/linting-rules/index'
import { baseConfig } from '@/content-linter/style/base'
import { customConfig } from '@/content-linter/style/github-docs'
import type { Rule, RuleConfig } from '@/content-linter/types'

// Import markdownlint rules - external library without TypeScript declarations
import markdownlintRules from '../../../../node_modules/markdownlint/lib/rules'

export const customRules: Rule[] = gitHubDocsMarkdownlint.rules
export const allRules: Rule[] = [...markdownlintRules, ...gitHubDocsMarkdownlint.rules]
export const allConfig = { ...baseConfig, ...customConfig } as unknown as RuleConfig
