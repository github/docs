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

const allUsedActions = chain(workflows).map(actionsUsedInWorkflow).flatten().uniq().sort().value()

describe('GitHub Actions workflows', () => {
  test('all used actions are listed', () => {
    expect(allUsedActions.length).toBeGreaterThan(0)
  })

  test.each(allUsedActions)('requires specific hash: %p', (actionName) => {
    const actionRegexp = /^[A-Za-z0-9-/]+@[0-9a-f]{40}$/
    expect(actionName).toMatch(actionRegexp)
  })

  test('no scheduled workflows run on the hour', () => {
    const hourlySchedules = scheduledWorkflows.filter((schedule) => {
      const hour = schedule.split(' ')[0]
      // return any minute cron segments that equal 0, 00, 000, etc.
      return !/[^0]/.test(hour)
    })
    expect(hourlySchedules).toEqual([])
  })

  test('all scheduled workflows run at unique times', () => {
    expect(scheduledWorkflows.length).toEqual(new Set(scheduledWorkflows).size)
  })
})
