#!/usr/bin/env node

const github = require('../lib/github')
const fs = require('fs')
const path = require('path')
const filename = path.join(__dirname, '../lib/enterprise-dates.json')
const jsonFile = require(filename)

// [start-readme]
//
// Run this script during Enterprise releases and deprecations.
// It uses the GitHub API to get dates from [`enterprise-releases`](https://github.com/github/enterprise-releases/blob/master/releases.json) and updates `lib/enterprise-dates.json`.
// The help site uses this JSON to display dates at the top of some Enterprise versions.
//
// This script requires that you have a GitHub Personal Access Token in a `.env` file.
// If you don't have a token, get one [here](https://github.com/settings/tokens/new?scopes=repo&description=docs-dev).
// If you don't have an `.env` file in your docs checkout, run this command in Terminal:
//
// `cp .env.example .env`
//
// Open the `.env` file in a text editor, and find the `GITHUB_TOKEN=` placeholder. Add your token after the equals sign.
//
// Do not commit the `.env` file; just leave it in your checkout.
//
// [end-readme]

main()

// GHE Release Lifecycle Dates:
// https://github.com/github/enterprise-releases/blob/master/releases.json
async function main () {
  let raw
  try {
    raw = await getDataFromReleasesRepo()
  } catch (err) {
    console.log('error getting JSON from enterprise-releases repo')
    throw (err)
  }
  const json = prepareData(raw)
  if (json === prettify(jsonFile)) {
    console.log('This repo is already in sync with https://github.com/github/enterprise-releases/blob/master/releases.json!')
  } else {
    fs.writeFileSync(filename, json, 'utf8')
    console.log(`${filename} has been updated!`)
  }
}

// Uses https://octokit.github.io/rest.js/#api-Repos-getContents
async function getDataFromReleasesRepo () {
  const octokit = github()
  const { data } = await octokit.repos.getContents({
    owner: 'github',
    repo: 'enterprise-releases',
    path: 'releases.json',
    ref: 'master',
    headers: { accept: 'application/vnd.github.v3.raw+json' }
  })
  return data
}

// We only need some of the values from the source JSON
// We use https://github.com/zeke/browser-date-formatter on the client side to reformat the dates
function prepareData (raw) {
  const data = Object.entries(JSON.parse(raw))
  const obj = {}
  data.forEach(versions => {
    const datesObj = {}
    const version = versions[0]
    const releaseDate = versions[1].start
    const deprecationDate = versions[1].end
    datesObj.releaseDate = releaseDate
    datesObj.deprecationDate = deprecationDate
    obj[version] = datesObj
  })
  return prettify(obj)
}

function prettify (json) {
  return JSON.stringify(json, null, 2)
}
