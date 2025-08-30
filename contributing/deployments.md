## Deployments

Staging and production deployments are automated by a deployer service created and maintained by @github/docs-engineering.

### Review deployments

TBD

### Production deployments

Docs uses [merge queue](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue). 

When a pull request is merged to the repo's default branch, it is automatically deployed to production and the status is displayed on the PR's page on github.com. It can take up to 24 hours for changes to be visible on the site.

After a PR is closed, the branch is automatically deleted. This does not affect the deployment process.
