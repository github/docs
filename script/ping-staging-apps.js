#!/usr/bin/env node
import xDotenv from 'dotenv'
import assert from 'assert'
import got from 'got'
import { chain } from 'lodash-es'
import chalk from 'chalk'
import Heroku from 'heroku-client'

// [start-readme]
//
// This script finds all Heroku staging apps and pings them to make sure they're always "warmed" and responsive to requests.
//
// [end-readme]

xDotenv.config()

assert(process.env.HEROKU_API_TOKEN)

const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN })

main()

async function main() {
  const apps = chain(await heroku.get('/apps'))
    .orderBy('name')
    .value()

  async function ping(app) {
    // ?warmup param has no effect but makes it easier to find these requests in the logs
    const url = `https://${app.name}.herokuapp.com/en?warmup`
    try {
      const response = await got(url)
      console.log(chalk.green(url, response.statusCode))
    } catch (error) {
      console.log(chalk.red(url, error.response.statusCode))
    }
  }

  Promise.all(apps.map(ping))
}
