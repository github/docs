#!/usr/bin/env node
import Heroku from 'heroku-client'
import createAppName from './create-staging-app-name.js'

export default async function createApp(pullRequest) {
  // Extract some important properties from the PR
  const {
    number: pullNumber,
    base: {
      repo: {
        name: repo,
        owner: { login: owner },
      },
    },
    head: { ref: branch },
    user: author,
  } = pullRequest

  const appName = createAppName({ prefix: 'ghd', repo, pullNumber, branch })

  // Put together application configuration variables
  const isPrivateRepo = owner === 'github' && repo === 'docs-internal'
  const { HYDRO_ENDPOINT, HYDRO_SECRET } = process.env
  const appConfigVars = {
    // These values are usually set in app.json but we need to set them
    // ourselves for Docker image deployment.
    NODE_ENV: 'production',
    ENABLED_LANGUAGES: 'en',
    WEB_CONCURRENCY: '1',
    // IMPORTANT: These secrets should only be set in the private repo!
    // These are required for Hydro event tracking
    ...(isPrivateRepo && HYDRO_ENDPOINT && HYDRO_SECRET && { HYDRO_ENDPOINT, HYDRO_SECRET }),
  }

  // Check if there's already a Heroku App for this PR, if not create one
  let appExists = true
  const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN })

  try {
    await heroku.get(`/apps/${appName}`)
  } catch (e) {
    appExists = false
  }

  if (!appExists) {
    try {
      const newApp = await heroku.post('/apps', {
        body: {
          name: appName,
        },
      })

      console.log('Heroku App created', newApp)
    } catch (error) {
      throw new Error(`Failed to create Heroku App ${appName}. Error: ${error}`)
    }

    // Add PR author (if staff) as a collaborator on the new staging app
    try {
      if (author.site_admin === true) {
        await heroku.post(`/apps/${appName}/collaborators`, {
          body: {
            user: `${author.login}@github.com`,
            // We don't want an email invitation for every new staging app
            silent: true,
          },
        })
        console.log(`Added PR author @${author.login} as a Heroku app collaborator`)
      }
    } catch (error) {
      // It's fine if this fails, it shouldn't block the app from deploying!
      console.warn(`Warning: failed to add PR author as a Heroku app collaborator. Error: ${error}`)
    }
  } else {
    console.log(`Heroku App ${appName} already exists.`)
  }

  // Set/reconfigure environment variables
  // https://devcenter.heroku.com/articles/platform-api-reference#config-vars-update
  try {
    await heroku.patch(`/apps/${appName}/config-vars`, {
      body: appConfigVars,
    })
  } catch (error) {
    throw new Error(`Failed to update Heroku app configuration variables. Error: ${error}`)
  }

  return appName
}
