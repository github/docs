#!/usr/bin/env node

// [start-readme]
//
// This script finds and lists all the Heroku staging apps and deletes any leftover apps that have closed PRs
//
// [end-readme]

require('dotenv').config()
const assert = require('assert')

assert(process.env.HEROKU_API_TOKEN)

const { chain } = require('lodash')
const chalk = require('chalk')
const Heroku = require('heroku-client')
const github = require('../lib/github')()
const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN })
const owner = 'github'
const repo = 'docs-internal'
const stagingAppNamePrefix = 'docs-internal-pr-'

main()

async function main () {
  const stagingApps = chain(await heroku.get('/apps'))
    .filter(app => app.name.startsWith(stagingAppNamePrefix))
    .map(app => {
      app.pullRequestNumber = Number(app.name.match(/\d+$/)[0])
      return app
    })
    .orderBy('name')
    .value()

  console.log('staging apps:', stagingApps.length)

  for (const app of stagingApps) {
    try {
      const { data: pr } = await github.pulls.get({
        owner,
        repo,
        pull_number: app.pullRequestNumber
      })
      if (pr.state === 'open') {
        console.log(chalk.green(app.name))
      } else if (pr.state === 'closed') {
        console.log(chalk.red(app.name), '(PR was closed; deleting app now)')
        await heroku.delete(`/apps/${app.name}`)
      } else {
        console.log(chalk.red(app.name), `(${pr.state})`)
      }
    } catch (err) {
      console.log('no PR found', chalk.red(app.name))
      console.log(err)
    }
  }
}
