import { load } from 'js-yaml'
import { addError, filterTokens } from 'markdownlint-rule-helpers'

import { liquid } from '@/content-render/index'
import { allVersions } from '@/versions/lib/all-versions'
import type { RuleParams, RuleErrorCallback, MarkdownToken, Rule } from '../../types'

interface YamlSchedule {
  cron: string
}

interface YamlWorkflow {
  on?: {
    schedule?: YamlSchedule[]
  }
}

const scheduledYamlJobs: string[] = []

export const yamlScheduledJobs: Rule = {
  names: ['GHD021', 'yaml-scheduled-jobs'],
  description:
    'YAML snippets that include scheduled workflows must not run on the hour and must be unique',
  tags: ['feature', 'actions'],
  parser: 'markdownit',
  asynchronous: true,
  function: async (params: RuleParams, onError: RuleErrorCallback) => {
    const fences: MarkdownToken[] = []
    filterTokens(params, 'fence', (token: MarkdownToken) => {
      fences.push(token)
    })
    // Check fences in order so the module-level duplicate check is deterministic within a file.
    for (const token of fences) {
      if (!token.info) continue
      if (!token.content) continue
      const lang = token.info.trim().split(/\s+/u).shift()?.toLowerCase()
      if (lang !== 'yaml' && lang !== 'yml') continue
      if (!token.content.includes('schedule:')) continue
      if (!token.content.includes('- cron:')) continue

      const context = {
        currentLanguage: 'en',
        currentVersionObj: allVersions['free-pro-team@latest'],
      }
      let yamlObj: YamlWorkflow | null | undefined
      try {
        // Parse Liquid first because yaml loading chokes on {% raw %} tags.
        const renderedYaml = await liquid.parseAndRender(token.content, context)
        yamlObj = load(renderedYaml) as YamlWorkflow | null | undefined
      } catch (error) {
        console.error(
          `Skipping YAML fence that could not be parsed in ${params.name}:`,
          error instanceof Error ? error.message : error,
        )
        continue
      }
      const schedules = yamlObj?.on?.schedule
      if (!Array.isArray(schedules)) continue

      for (const schedule of schedules) {
        if (typeof schedule?.cron !== 'string') continue
        if (schedule.cron.split(' ')[0] === '0') {
          addError(
            onError,
            getLineNumber(token.content!, schedule.cron) + token.lineNumber,
            `YAML scheduled workflow must not run on the hour`,
            schedule.cron,
          )
        }

        if (scheduledYamlJobs.includes(schedule.cron)) {
          addError(
            onError,
            getLineNumber(token.content!, schedule.cron) + token.lineNumber,
            `YAML scheduled workflow must not use the same cron schedule as another workflow`,
            schedule.cron,
          )
        }

        scheduledYamlJobs.push(schedule.cron)
      }
    }
  },
}

function getLineNumber(tokenContent: string, schedule: string): number {
  const contentLines = tokenContent.split('\n')
  return contentLines.findIndex((line) => line.includes(schedule)) + 1
}
