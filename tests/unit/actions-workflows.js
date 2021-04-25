const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')
const flat = require('flat')
const { chain, difference, get } = require('lodash')
const workflowsDir = path.join(__dirname, '../../.github/workflows')
const workflows = fs.readdirSync(workflowsDir)
  .filter(filename => filename.endsWith('.yml') || filename.endsWith('.yaml'))
  .map(filename => {
    const fullpath = path.join(workflowsDir, filename)
    const data = yaml.load(fs.readFileSync(fullpath, 'utf8'), { fullpath })
    return { filename, fullpath, data }
  })
const allowedActions = require('../../.github/allowed-actions')

function actionsUsedInWorkflow (workflow) {
  return Object.keys(flat(workflow))
    .filter(key => key.endsWith('.uses'))
    .map(key => get(workflow, key))
}

const scheduledWorkflows = workflows
  .map(workflow => workflow.data.on.schedule)
  .filter(Boolean)
  .flat()
  .map(schedule => schedule.cron)

const allUsedActions = chain(workflows)
  .map(actionsUsedInWorkflow)
  .flatten()
  .uniq()
  .sort()
  .value()

describe('GitHub Actions workflows', () => {
  test('all used actions are allowed in .github/allowed-actions.js', () => {
    expect(allUsedActions.length).toBeGreaterThan(0)
    const unusedActions = difference(allowedActions, allUsedActions)
    expect(unusedActions).toEqual([])
  })

  test('all allowed actions by .github/allowed-actions.js are used by at least one workflow', () => {
    expect(allowedActions.length).toBeGreaterThan(0)
    const disallowedActions = difference(allUsedActions, allowedActions)
    expect(disallowedActions).toEqual([])
  })

  test('no scheduled workflows run on the hour', () => {
    const hourlySchedules = scheduledWorkflows.filter(schedule => {
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
