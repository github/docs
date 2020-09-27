## Deployments

This app is hosted on Heroku. Staging and production deployments are automated by a deployer service created and maintained by @github/docs-engineering.

### Staging deployments

When a pull request is **opened**, **reopened**, or **synchronized** (i.e has new commits), it is automatically deployed to a unique staging URL.

If a staging deployment fails, you can trigger a new deployment in a few ways:
  - close and re-open the pull request
  - push another commit to the branch
  - click **Update Branch** on the pull request page on github.com, if it's clickable

### Production deployments

When a pull request is merged to the repo's default branch, it is automatically deployed to production and the status is displayed on the PR's page on github.com. It can take up to 24 hours for changes to be visible on the site.

After a PR is closed, the branch is automatically deleted. This does not affect the deployment process.
