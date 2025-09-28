import { gitHubDocsMarkdownlint } from '@/content-linter/lib/linting-rules/index'
import { baseConfig } from '@/content-linter/style/base'
import { customConfig } from '@/content-linter/style/github-docs'
import type { Rule } from '@/content-linter/types'

// Import markdownlint rules - external library without TypeScript declarations
// @ts-ignore - markdownlint doesn't provide TypeScript declarations
import markdownlintRules from '../../../../node_modules/markdownlint/lib/rules'

export const customRules: Rule[] = gitHubDocsMarkdownlint.rules
export const allRules: any[] = [...markdownlintRules, ...gitHubDocsMarkdownlint.rules]
export const allConfig: Record<string, any> = { ...baseConfig, ...customConfig }
