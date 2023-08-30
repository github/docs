import { fileURLToPath } from 'url'
import path from 'path'
import fs from 'fs'
import yaml from 'js-yaml'
import flat from 'flat'
import { chain, get } from 'lodash-es'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const workflowsDir = path.join(__dirname, '../../.github/workflows')
const workflows = fs
  .readdirSync(workflowsDir)
  .filter((filename) => filename.endsWith('.yml') || filename.endsWith('.yaml'))
  .map((filename) => {
    const fullpath = path.join(workflowsDir, filename)
    const data = yaml.load(fs.readFileSync(fullpath, 'utf8'), { fullpath })
    return { filename, fullpath, data }
  })

function actionsUsedInWorkflow(workflow) {
  return Object.keys(flat(workflow))
    .filter((key) => key.endsWith('.uses'))
    .map((key) => get(workflow, key))
}

const scheduledWorkflows = workflows
  .map((workflow) => workflow.data.on.schedule)
  .filter(Boolean)
  .flat()
  .map((schedule) => schedule.cron)

const allUsedActions = chain(workflows)
  .map(actionsUsedInWorkflow)
  .flatten()
  .uniq()
  .filter((use) => !use.startsWith('.'))
  .sort()
  .value()

describe('GitHub Actions workflows', () => {
  test('all used actions are listed', () => {
    expect(allUsedActions.length).toBeGreaterThan(0)
  })

  test.each(allUsedActions)('requires specific hash: %p', (actionName) => {
    const actionRegexp = /^[A-Za-z0-9-/]+@[0-9a-f]{40}$/
    expect(actionName).toMatch(actionRegexp)
  })

  test('all scheduled workflows run at 20 minutes past', () => {
    const twenties = scheduledWorkflows.filter((schedule) => /^20/.test(schedule))
    expect(twenties.length).toEqual(scheduledWorkflows.length)
  })

  test('all daily and weekly workflows run at 16:20 UTC / 8:20 PST', () => {
    const dailies = scheduledWorkflows.filter((schedule) => /^20 \d{2}/.test(schedule))
    const sixteens = dailies.filter((schedule) => /^20 16/.test(schedule))
    expect(sixteens.length).toEqual(dailies.length)
  })
})
