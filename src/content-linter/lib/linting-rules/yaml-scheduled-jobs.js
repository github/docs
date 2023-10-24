import yaml from 'js-yaml'

import { liquid } from '#src/content-render/index.js'
import { allVersions } from '#src/versions/lib/all-versions.js'
import { addError, filterTokens } from 'markdownlint-rule-helpers'

const scheduledYamlJobs = []

export const yamlScheduledJobs = {
  names: ['GHD021', 'yaml-scheduled-jobs'],
  description:
    'YAML snippets that include scheduled workflows must not run on the hour and must be unique',
  tags: ['feature', 'actions'],
  asynchronous: true,
  function: (params, onError) => {
    filterTokens(params, 'fence', async (token) => {
      const lang = token.info.trim().split(/\s+/u).shift().toLowerCase()
      if (lang !== 'yaml' && lang !== 'yml') return
      if (!token.content.includes('schedule:')) return
      if (!token.content.includes('- cron:')) return

      const context = {
        currentLanguage: 'en',
        currentVersionObj: allVersions['free-pro-team@latest'],
      }
      // If we don't parse the Liquid first, yaml loading chokes on {% raw %} tags
      const renderedYaml = await liquid.parseAndRender(token.content, context)
      const yamlObj = yaml.load(renderedYaml)
      if (!yamlObj.on) return
      if (!yamlObj.on.schedule) return

      yamlObj.on.schedule.forEach((schedule) => {
        if (schedule.cron.split(' ')[0] === '0') {
          addError(
            onError,
            getLineNumber(token.content, schedule.cron) + token.lineNumber,
            `YAML scheduled workflow must not run on the hour`,
            schedule.cron,
          )
        }

        if (scheduledYamlJobs.includes(schedule.cron)) {
          addError(
            onError,
            getLineNumber(token.content, schedule.cron) + token.lineNumber,
            `YAML scheduled workflow must be unique`,
            schedule.cron,
          )
        } else {
          scheduledYamlJobs.push(schedule.cron)
        }
      })
    })
  },
}

function getLineNumber(tokenContent, schedule) {
  const contentLines = tokenContent.split('\n')
  return contentLines.findIndex((line) => line.includes(schedule)) + 1
}
