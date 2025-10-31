// @ts-ignore - markdownlint-rule-helpers doesn't provide TypeScript declarations
import { addError, filterTokens } from 'markdownlint-rule-helpers'
import yaml from 'js-yaml'

import { liquid } from '@/content-render/index'
import { allVersions } from '@/versions/lib/all-versions'
import type { RuleParams, RuleErrorCallback, MarkdownToken, Rule } from '@/content-linter/types'

// Detects third-party actions in the format `owner/repo@ref`
const actionRegex = /[\w-]+\/[\w-]+@[\w-]+/
// Detects a full-length commit SHA (40 hexadecimal characters)
const shaRegex = /[\w-]+\/[\w-]+@[0-9a-fA-F]{40}/
// Detects first-party actions
const firstPartyPrefixes = ['actions/', './.github/actions/', 'github/', 'octo-org/', 'OWNER/']

interface WorkflowStep {
  uses?: string
  [key: string]: any
}

interface WorkflowJob {
  steps?: WorkflowStep[]
  [key: string]: any
}

interface WorkflowYaml {
  jobs?: Record<string, WorkflowJob>
  steps?: WorkflowStep[]
  [key: string]: any
}

export const thirdPartyActionPinning: Rule = {
  names: ['GHD041', 'third-party-action-pinning'],
  description:
    'Code examples that use third-party actions must always pin to a full length commit SHA',
  tags: ['feature', 'actions'],
  parser: 'markdownit',
  asynchronous: true,
  function: (params: RuleParams, onError: RuleErrorCallback) => {
    filterTokens(params, 'fence', async (token: MarkdownToken) => {
      if (!token.info || !token.content) return
      const lang = token.info.trim().split(/\s+/u).shift()?.toLowerCase()
      if (lang !== 'yaml' && lang !== 'yml') return
      if (!token.content.includes('steps:')) return
      if (!token.content.includes('uses:')) return

      const context = {
        currentLanguage: 'en',
        currentVersionObj: allVersions['free-pro-team@latest'],
      }
      // If we don't parse the Liquid first, yaml loading chokes on {% raw %} tags
      const renderedYaml = await liquid.parseAndRender(token.content, context)
      try {
        const yamlObj = yaml.load(renderedYaml) as WorkflowYaml
        const steps = getWorkflowSteps(yamlObj)
        if (!steps.some((step) => step.uses)) return

        steps.forEach((step) => {
          if (step.uses) {
            const actionMatch = step.uses.match(actionRegex)
            if (actionMatch) {
              const isFirstParty = firstPartyPrefixes.some((prefix) =>
                step.uses!.startsWith(prefix),
              )
              if (!isFirstParty && !shaRegex.test(step.uses)) {
                addError(
                  onError,
                  getLineNumber(token.content!, step.uses) + token.lineNumber,
                  'Code examples that use third-party actions must always pin to a full length commit SHA',
                  step.uses,
                )
              }
            }
          }
        })
      } catch (e) {
        if (e instanceof yaml.YAMLException) {
          console.log('YAML Exception file:', params.name)
          console.error('YAML Exception:', e.message)
        } else {
          console.error('Error parsing YAML:', e)
        }
      }
    })
  },
}

function getWorkflowSteps(yamlObj: WorkflowYaml): WorkflowStep[] {
  if (yamlObj?.jobs) {
    const jobs = Object.values(yamlObj.jobs)
    return jobs.flatMap((job) => job.steps || [])
  } else if (yamlObj?.steps) {
    return yamlObj.steps
  }
  return []
}

function getLineNumber(tokenContent: string, step: string): number {
  const contentLines = tokenContent.split('\n')
  return contentLines.findIndex((line) => line.includes(step)) + 1
}
