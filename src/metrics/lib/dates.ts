const dateOpts: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

export interface DateRange {
  endDate: string
  startDate: string
  friendlyRange: string
}

// `range` is a number of days.
export function getDates(range: string | number = '30'): DateRange {
  const today = new Date()
  const todayISO = today.toISOString()

  const daysAgo = getDaysAgo(Number(range))
  const daysAgoISO = daysAgo.toISOString()

  return {
    endDate: todayISO,
    startDate: daysAgoISO,
    friendlyRange: `${daysAgo.toLocaleDateString('en-US', dateOpts)} - ${today.toLocaleDateString('en-US', dateOpts)}`,
  }
}

function getDaysAgo(range: number): Date {
  const daysAgo = new Date()
  daysAgo.setDate(daysAgo.getDate() - range)
  return daysAgo
}
