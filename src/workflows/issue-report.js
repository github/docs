export async function createReportIssue({
  core,
  octokit,
  reportTitle,
  reportBody,
  reportRepository,
  reportLabel,
}) {
  const [owner, repo] = reportRepository.split('/')
  // Create issue
  let newReport
  try {
    const { data } = await octokit.request('POST /repos/{owner}/{repo}/issues', {
      owner,
      repo,
      title: reportTitle,
      body: reportBody,
      labels: [reportLabel],
    })
    newReport = data
    core.info(`Created new report issue at ${newReport.html_url}\n`)
  } catch (error) {
    core.error(error)
    core.setFailed('Error creating new issue')
    throw error
  }

  return newReport
}

export async function linkReports({
  core,
  octokit,
  newReport,
  reportRepository,
  reportAuthor,
  reportLabel,
}) {
  const [owner, repo] = reportRepository.split('/')

  core.info('Attempting to link reports...')
  // Find previous report issue
  let previousReports
  try {
    previousReports = await octokit.rest.issues.listForRepo({
      owner,
      repo,
      creator: reportAuthor,
      labels: reportLabel,
      state: 'all', // We want to get the previous report, even if it is closed
      sort: 'created',
      direction: 'desc',
      per_page: 25,
    })
    previousReports = previousReports.data
  } catch (error) {
    core.setFailed('Error listing issues for repo')
    throw error
  }
  core.info(`Found ${previousReports.length} previous reports`)

  if (previousReports.length <= 1) {
    core.info('No previous reports to link to')
    return
  }

  // 2nd report should be most recent previous report
  const previousReport = previousReports[1]

  // Comment the old report link on the new report
  try {
    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: newReport.number,
      body: `⬅️ [Previous report](${previousReport.html_url})`,
    })
    core.info(`Linked old report to new report via comment on new report, #${newReport.number}`)
  } catch (error) {
    core.setFailed(`Error commenting on newReport, #${newReport.number}`)
    throw error
  }

  // Comment on all previous reports that are still open
  for (const previousReport of previousReports) {
    if (previousReport.state === 'closed' || previousReport.html_url === newReport.html_url) {
      continue
    }

    //  If an old report is not assigned to someone we close it
    const shouldClose = !previousReport.assignees.length
    let body = `➡️ [Newer report](${newReport.html_url})`
    if (shouldClose) {
      body += '\n\nClosing in favor of newer report since there are no assignees on this issue'
    }
    try {
      await octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: previousReport.number,
        body,
      })
      core.info(
        `Linked old report to new report via comment on old report: #${previousReport.number}.`,
      )
    } catch (error) {
      core.setFailed(`Error commenting on previousReport, #${previousReport.number}`)
      throw error
    }
    if (shouldClose) {
      try {
        await octokit.rest.issues.update({
          owner,
          repo,
          issue_number: previousReport.number,
          state: 'closed',
        })
        core.info(`Closing old report: #${previousReport.number} because it doesn't have assignees`)
      } catch (error) {
        core.setFailed(`Error closing previousReport, #${previousReport.number}`)
        throw error
      }
    }
  }
}
