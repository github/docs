import yaml from 'js-yaml'
import { groupBy } from 'lodash-es'
import { renderContent } from '@/content-render/index'

interface UpcomingChange {
  date: string
  reason: string
  description: string
  [key: string]: unknown
}

interface UpcomingChangesData {
  upcoming_changes: UpcomingChange[]
}

export default async function processUpcomingChanges(
  upcomingChangesYml: string,
): Promise<Record<string, UpcomingChange[]>> {
  const upcomingChanges = (yaml.load(upcomingChangesYml) as UpcomingChangesData).upcoming_changes

  for (const change of upcomingChanges) {
    change.date = change.date.slice(0, 10)
    change.reason = await renderContent(change.reason)
    change.description = await renderContent(change.description)
  }

  return groupBy(upcomingChanges.reverse(), 'date')
}
