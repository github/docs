if (!process.env.GITHUB_TOKEN) {
  require('dotenv').config()
}

// this module needs to work in development, production, and GitHub Actions
//
// GITHUB_TOKEN comes from one of the following sources:
// 1. set in the .env file (development)
// 2. set as a Heroku config var (staging and production)
// 3. an installation token granted via GitHub Actions
const apiToken = process.env.GITHUB_TOKEN

const { Octokit } = require('@octokit/rest')

// See https://github.com/octokit/rest.js/issues/1207
module.exports = function github () {
  return new Octokit({
    auth: `token ${apiToken}`
  })
}
