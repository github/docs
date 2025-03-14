You can specify an environment for each job in your workflow. To do so, add a [`jobs.<job_id>.environment`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenvironment) key followed by the name of the environment.

For example, this workflow will use an environment called `production`.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

When the above workflow runs, the `deployment` job will be subject to any rules configured for the `production` environment. For example, if the environment requires reviewers, the job will pause until one of the reviewers approves the job.

You can also specify a URL for the environment. The specified URL will appear on the deployments page for the repository (accessed by clicking **Environments** on the home page of your repository) and in the visualization graph for the workflow run. If a pull request triggered the workflow, the URL is also displayed as a **View deployment** button in the pull request timeline. When using the "Require deployments to succeed before merging" rule, only the `name` specified is being checked even if a URL has also been specified. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches#require-deployments-to-succeed-before-merging).

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: 
      name: production
      url: https://github.com
    steps:
      - name: deploy
        # ...deployment-specific steps
```
