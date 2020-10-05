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

describe('GitHub Actions workflows', () => {
  test('only use allowed actions from ./github/allow-actions.json', async () => {
    const allUsedActions = chain(workflows)
      .map(actionsUsedInWorkflow)
      .flatten()
      .uniq()
      .sort()
      .value()

    expect(allowedActions.length).toBeGreaterThan(0)
    expect(allUsedActions.length).toBeGreaterThan(0)
    expect(difference(allowedActions, allUsedActions)).toEqual([])
  })
})
