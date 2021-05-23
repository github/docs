const yaml = require('js-yaml')
const { groupBy } = require('lodash')
const renderContent = require('../../../lib/render-content')

module.exports = async function processUpcomingChanges (upcomingChangesYml) {
  const upcomingChanges = yaml.load(upcomingChangesYml).upcoming_changes

  for (const change of upcomingChanges) {
    change.date = change.date.slice(0, 10)
    change.reason = await renderContent(change.reason)
    change.description = await renderContent(change.description)
  }

  return groupBy(upcomingChanges, 'date')
}
