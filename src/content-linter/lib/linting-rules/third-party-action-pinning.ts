import { addError, filterTokens } from 'markdownlint-rule-helpers'
import { load, YAMLException } from 'js-yaml'

import { liquid } from '@/content-render/index'
import { allVersions } from '@/versions/lib/all-versions'
import type { RuleParams, RuleErrorCallback, MarkdownToken, Rule } from '@/content-linter/types'

const actionRegex = /[\w-]+\/[\w-]+@[\w-]+/
const shaRegex = /[\w-]+\/[\w-]+@[0-9a-fA-F]{40}/
const firstPartyPrefixes = ['actions/', './.github/actions/', 'github/', 'octo-org/', 'OWNER/']

interface WorkflowStep {
  uses?: string
  [key: string]: unknown
}

interface WorkflowJob {
  steps?: WorkflowStep[]
  [key: string]: unknown
}

interface WorkflowYaml {
  jobs?: Record<string, WorkflowJob>
  steps?: WorkflowStep[]
  [key: string]: unknown
}

export const thirdPartyActionPinning: Rule = {
  names: ['GHD041', 'third-party-action-pinning'],
  description:
    'Code examples that use third-party actions must always pin to a full length commit SHA',
  tags: ['feature', 'actions'],
  parser: 'markdownit',
  asynchronous: true,
  function: async (params: RuleParams, onError: RuleErrorCallback) => {
    const fences: MarkdownToken[] = []
    filterTokens(params, 'fence', (token: MarkdownToken) => {
      fences.push(token)
    })
    for (const token of fences) {
      if (!token.info || !token.content) continue
      const lang = token.info.trim().split(/\s+/u).shift()?.toLowerCase()
      if (lang !== 'yaml' && lang !== 'yml') continue
      if (!token.content.includes('uses:')) continue

      const context = {
        currentLanguage: 'en',
        currentVersionObj: allVersions['free-pro-team@latest'],
      }
      let renderedYaml: string
      try {
        // Parse Liquid first because yaml loading chokes on {% raw %} tags.
        renderedYaml = await liquid.parseAndRender(token.content, context)
      } catch {
        // Other rules report Liquid errors, and a fence inside an outer {% raw %} can fail to render alone.
        continue
      }
      try {
        const yamlObj = load(renderedYaml) as WorkflowYaml | WorkflowStep[]
        const steps = getWorkflowSteps(yamlObj)
        if (!steps.some((step) => step.uses)) continue

        for (const step of steps) {
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
        }
      } catch (e) {
        if (e instanceof YAMLException) {
          console.log('YAML Exception file:', params.name)
          console.error('YAML Exception:', e.message)
        } else {
          console.error('Error parsing YAML:', e)
        }
      }
    }
  },
}

function getWorkflowSteps(yamlObj: WorkflowYaml | WorkflowStep[]): WorkflowStep[] {
  if (Array.isArray(yamlObj)) {
    return yamlObj.filter((step) => step && typeof step === 'object')
  } else if (yamlObj?.jobs) {
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
