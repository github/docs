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

// Default to 30 days ago if a range option is not provided
export function getDates(range: string | number = '30'): DateRange {
  // Get current datetime in ISO format
  const today = new Date()
  const todayISO = today.toISOString()

  // Get datetime from N days ago in ISO format
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
