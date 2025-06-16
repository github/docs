import { readFileSync } from 'fs'
import { basename } from 'path'
import { Liquid } from 'liquidjs'
import walk from 'walk-sync'
import matter from 'gray-matter'

import { latest, oldestSupported } from '@/versions/lib/enterprise-server-releases.js'
import { getContents } from '@/workflows/git-utils'
import github from '@/workflows/github'

interface ReleaseDates {
  [releaseNumber: string]: {
    start: string
    end: string
    prp?: string
    feature_freeze?: string
    code_freeze?: string
    release_candidate?: string
  }
}

interface ReleaseTemplate {
  content: string
  issue?: {
    number: number
    html_url: string
  }
}

interface ReleaseTemplates {
  [templateName: string]: ReleaseTemplate
}

interface ReleaseTemplateContext {
  [key: string]: string
}

interface IssueSearchOpts {
  labels?: string[]
  searchQuery?: string
  titleMatch?: string
}

// Required by github() to authenticate
if (!process.env.GITHUB_TOKEN) {
  throw new Error('Error! You must have a GITHUB_TOKEN set in an .env file to run this script.')
}
const octokit = github()
const liquid = new Liquid()
// [start-readme]
//
// This script creates enterprise release and deprecation issues in the
// github/docs-content and github/docs-engineering repositories.
// The script checks if an issue already exists for the release or deprecation.
//
// [end-readme]

run()

async function run() {
  // This script requires one parameters with the value
  // of either 'release' or 'deprecation'
  const releaseType = process.argv[2]
  if (releaseType !== 'release' && releaseType !== 'deprecation') {
    throw new Error(
      "Please specify either 'release' or 'deprecation'\nExample: src/versions/scripts/create-enterprise-issue.js release",
    )
  }

  if (releaseType === 'release') {
    await createReleaseIssue()
  }
  if (releaseType === 'deprecation') {
    await createDeprecationIssue()
  }
}

async function createDeprecationIssue() {
  const repo = 'github/docs-engineering'
  console.log('Next deprecation number: ', oldestSupported)
  // If an issue already exists for this release, do nothing
  const issueExists = await isExistingIssue(repo, {
    titleMatch: `Enterprise Server ${oldestSupported} deprecation steps`,
    labels: ['enterprise deprecation'],
  })
  if (issueExists) return

  const releaseInfo = (await getReleaseDates())[oldestSupported]
  const deprecationDate = releaseInfo.end
  const numberOfDaysBefore = 7
  if (getNumberDaysUntilMilestone(deprecationDate) > numberOfDaysBefore) {
    console.log(
      `The ${oldestSupported} deprecation is not until ${deprecationDate}! An issue will be opened when it is ${numberOfDaysBefore} days away.`,
    )
    return
  }

  // Create the deprecation issue
  const issueTemplate = readFileSync('src/ghes-releases/lib/deprecation-steps.md', 'utf8')
  const { data, content } = matter(issueTemplate)
  const { title, labels } = data
  const body = `GHES ${oldestSupported} deprecation occurs on ${deprecationDate}.
  \n${content}
  '/cc @github/docs-engineering'`
  await createIssue(
    repo,
    title.replace('{{ release-number }}', oldestSupported),
    body,
    labels,
    oldestSupported,
    'deprecation',
  )
}

async function createReleaseIssue() {
  const repo = 'github/docs-content'
  const releaseDates = await getReleaseDates()
  const releaseNumber = getNextReleaseNumber(releaseDates)
  console.log('Next release number: ', releaseNumber)

  // If an issue already exists for this release, do nothing
  if (
    await isExistingIssue(repo, {
      labels: ['ghes-release-automation', `GHES ${releaseNumber}`],
    })
  ) {
    return
  }

  const releaseInfo = releaseDates[releaseNumber]
  const rcDate = releaseInfo.release_candidate

  // Only open an issue if today is within 30 days before
  // the release candidate date
  if (getNumberDaysUntilMilestone(rcDate || '') > 30) {
    console.log(
      `The ${releaseNumber} release candidate is not until ${rcDate}! An issue will be opened 30 days prior to the release candidate date.`,
    )
    return
  }

  const releaseTemplates = getReleaseTemplates()

  // Set shell issues with placeholder title and body
  // Need all issue numbers before filling in liquid templates
  for (const templateName of Object.keys(releaseTemplates)) {
    const issue = await createIssue(
      repo,
      `GHES ${releaseNumber} - ${templateName} PLACEHOLDER`,
      '',
      [],
      releaseNumber,
      'release',
    )
    releaseTemplates[templateName].issue = issue.data
  }

  // Go back and update title and body with rendered liquid templates
  const releaseTemplateContext = getReleaseTemplateContext(
    releaseNumber,
    releaseInfo,
    releaseTemplates,
  )
  for (const template of Object.values(releaseTemplates)) {
    const { title, body, labels } = await getRenderedTemplate(
      template.content,
      releaseTemplateContext,
    )
    await addRepoLabels(repo, labels)
    await updateIssue(repo, template.issue!.number, title, body, labels)
  }
}

async function createIssue(
  fullRepo: string,
  title: string,
  body: string,
  labels: string[],
  releaseNumber: string,
  releaseType: string,
) {
  const [owner, repo] = fullRepo.split('/')
  if (!owner || !repo) throw new Error('Please provide a valid repo name in the format owner/repo')
  let issue
  try {
    issue = await octokit.request('POST /repos/{owner}/{repo}/issues', {
      owner,
      repo,
      title,
      body,
      labels,
    })
  } catch (error: any) {
    console.log(`#ERROR# ${error}\n🛑 There was an error creating the issue.`)
    throw error
  }
  if (issue.status === 201) {
    // Write the values to disk for use in the workflow.
    console.log(
      `Issue #${issue.data.number} for the ${releaseNumber} ${releaseType} was opened: ${issue.data.html_url}`,
    )
  }
  return issue
}

async function updateIssue(
  fullRepo: string,
  issueNumber: number,
  title: string,
  body: string,
  labels: string[],
) {
  const [owner, repo] = fullRepo.split('/')
  if (!owner || !repo) throw new Error('Please provide a valid repo name in the format owner/repo')

  let issue
  try {
    issue = await octokit.request('PATCH /repos/{owner}/{repo}/issues/{issue_number}', {
      owner,
      repo,
      issue_number: issueNumber,
      title,
      body,
      labels,
    })
  } catch (error: any) {
    console.log(
      `#ERROR# ${error}\n🛑 There was an error updating issue ${issueNumber} in ${fullRepo}.`,
    )
    throw error
  }
  if (issue.status === 200) {
    console.log(`Issue #${issue.data.number} was updated: ${issue.data.html_url}`)
  }
}

async function addRepoLabels(fullRepo: string, labels: string[]) {
  const [owner, repo] = fullRepo.split('/')
  const labelsToAdd: string[] = []
  for (const name of labels) {
    try {
      await octokit.request('GET /repos/{owner}/{repo}/labels/{name}', {
        owner,
        repo,
        name,
      })
    } catch (error: any) {
      if (error.status === 404) {
        labelsToAdd.push(name)
      } else {
        console.log(`#ERROR# ${error}\n🛑 There was an error getting the label ${name}.`)
        throw error
      }
    }
  }
  for (const name of labelsToAdd) {
    try {
      await octokit.request('POST /repos/{owner}/{repo}/labels', {
        owner,
        repo,
        name,
      })
    } catch (error: any) {
      console.log(`#ERROR# ${error}\n🛑 There was an error adding the label ${name}.`)
      throw error
    }
  }
}

function getReleaseTemplates(): ReleaseTemplates {
  const templateFiles = walk('src/ghes-releases/lib/release-templates', {
    includeBasePath: true,
    directories: false,
    globs: ['**/*.md'],
    ignore: ['**/README.md'],
  })
  const releaseTemplates: ReleaseTemplates = {}
  for (const file of templateFiles) {
    releaseTemplates[basename(file, '.md')] = { content: readFileSync(file, 'utf8') }
  }
  return releaseTemplates
}

function getReleaseTemplateContext(
  releaseNumber: string,
  releaseInfo: ReleaseDates[string],
  releaseTemplates: ReleaseTemplates,
): ReleaseTemplateContext {
  const context: ReleaseTemplateContext = {
    'release-number': releaseNumber,
    'release-target-date': releaseInfo.start,
    'release-prp': releaseInfo.prp || '',
    'release-feature-freeze-date': releaseInfo.feature_freeze || '',
    'release-code-freeze-date': releaseInfo.code_freeze || '',
    'release-rc-target-date': releaseInfo.release_candidate || '',
  }
  // Add a context variable for each issue url
  for (const [templateName, template] of Object.entries(releaseTemplates)) {
    if (template.issue) {
      context[`${templateName}-url`] = template.issue.html_url
    }
  }

  // Create a context variable for each of the
  // 7 days before release-rc-target-date
  if (releaseInfo.release_candidate) {
    const rcTargetDate = new Date(releaseInfo.release_candidate).getTime()
    for (let i = 1; i <= 7; i++) {
      const day = i
      const milliSecondsBefore = day * 24 * 60 * 60 * 1000
      const rcDateBefore = new Date(rcTargetDate - milliSecondsBefore).toISOString().slice(0, 10)
      context[`release-rc-target-date-minus-${day}`] = rcDateBefore
    }
  }
  return context
}

async function getRenderedTemplate(
  templateContent: string,
  releaseTemplateContext: ReleaseTemplateContext,
) {
  const { content, data } = matter(templateContent)
  const title = await liquid.parseAndRender(data.title, releaseTemplateContext)
  const body = await liquid.parseAndRender(content, releaseTemplateContext)
  const labels = await Promise.all(
    data.labels.map(
      async (label: string) => await liquid.parseAndRender(label, releaseTemplateContext),
    ),
  )

  return { title, body, labels }
}

function getNumberDaysUntilMilestone(milestoneDate: string): number {
  const today = new Date().toISOString().slice(0, 10)
  const nextMilestoneDateTime = new Date(milestoneDate).getTime()
  const todayTime = new Date(today).getTime()
  const differenceInMilliseconds = nextMilestoneDateTime - todayTime
  // Return the difference in days
  return Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24))
}

function getNextReleaseNumber(releaseDates: ReleaseDates): string {
  const indexOfLatest = Object.keys(releaseDates).indexOf(latest)
  const indexOfNext = indexOfLatest + 1
  return Object.keys(releaseDates)[indexOfNext]
}

// examples:
// searchQuery: 'author:docs-bot is:open'
// labels: ['enterprise deprecation', 'ghes 3.0']
// titleMatch: 'GHES 3.0'
async function isExistingIssue(
  repo: string,
  opts: IssueSearchOpts = { labels: undefined, searchQuery: undefined, titleMatch: undefined },
): Promise<boolean> {
  const { labels, searchQuery, titleMatch } = opts
  const labelQuery = labels && labels.map((label) => `label:"${encodeURI(label)}"`).join('+')
  let query = encodeURIComponent('is:issue ' + `repo:${repo} `)

  if (searchQuery) {
    query += '+' + searchQuery
  }
  if (labelQuery) {
    query += '+' + labelQuery
  }

  const issues = await octokit.request(`GET /search/issues?q=${query}`)

  if (titleMatch) {
    for (const issue of issues.data.items) {
      if (issue.title.includes(titleMatch)) {
        console.log(`Issue ${issue.html_url} already exists for this release.`)
        return true
      }
      return false
    }
  }

  const issueExists = !!issues.data.items.length
  if (issueExists) {
    console.log(
      `Issue ${issues.data.items.map((item: { html_url: string }) => item.html_url)} already exists for this release.`,
    )
  }
  return issueExists
}

async function getReleaseDates(): Promise<ReleaseDates> {
  let rawDates: ReleaseDates = {}
  try {
    rawDates = JSON.parse(
      await getContents('github', 'enterprise-releases', 'master', 'releases.json'),
    )
  } catch (error) {
    console.log(
      'Failed to get the https://github.com/github/enterprise-releases/blob/master/releases.json content. Check that your token has the correct permissions.',
    )
    throw error
  }
  return rawDates
}
