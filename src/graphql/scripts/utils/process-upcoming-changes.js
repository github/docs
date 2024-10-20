#!/usr/bin/env node
import yaml from 'js-yaml'
import { groupBy } from 'lodash-es'
import { renderContent } from '#src/content-render/index.js'

export default async function processUpcomingChanges(upcomingChangesYml) {
  const upcomingChanges = yaml.load(upcomingChangesYml).upcoming_changes

  for (const change of upcomingChanges) {
    change.date = change.date.slice(0, 10)
    change.reason = await renderContent(change.reason)
    change.description = await renderContent(change.description)
  }

  return groupBy(upcomingChanges.reverse(), 'date')
}
