#!/usr/bin/env node
import dotenv from 'dotenv'
import { Octokit } from '@octokit/rest'
import { retry } from '@octokit/plugin-retry'

if (!process.env.GITHUB_TOKEN) {
  dotenv.config()
}

const RetryingOctokit = Octokit.plugin(retry)

// this module needs to work in development, production, and GitHub Actions
//
// GITHUB_TOKEN comes from one of the following sources:
// 1. set in the .env file (development)
// 2. set as a Heroku config var (staging and production)
// 3. an installation token granted via GitHub Actions
const apiToken = process.env.GITHUB_TOKEN

// See https://github.com/octokit/rest.js/issues/1207
export default function github() {
  return new Octokit({
    auth: `token ${apiToken}`,
  })
}

export function retryingGithub() {
  return new RetryingOctokit({
    auth: `token ${apiToken}`,
  })
}
