---
title: Using GitHub CLI in workflows
shortTitle: GitHub CLI in workflows
intro: 'You can script with {% data variables.product.prodname_cli %} in {% data variables.product.prodname_actions %} workflows.'
redirect_from:
  - /actions/guides/using-github-cli-in-workflows
  - /actions/advanced-guides/using-github-cli-in-workflows
  - /actions/using-workflows/using-github-cli-in-workflows
  - /actions/examples/using-the-github-cli-on-a-runner
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - CLI
  - Workflows
type: how_to
---


{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %} is preinstalled on all {% data variables.product.prodname_dotcom %}-hosted runners. For each step that uses {% data variables.product.prodname_cli %}, you must set an environment variable called `GH_TOKEN` to a token with the required scopes.

You can execute any {% data variables.product.prodname_cli %} command. For example, this workflow uses the `gh issue comment` subcommand to add a comment when an issue is opened.

```yaml copy
name: Comment when opened
on:
  issues:
    types:
      - opened
jobs:
  comment:
    runs-on: ubuntu-latest
    steps:
      - run: gh issue comment $ISSUE --body "Thank you for opening this issue!"
        env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          ISSUE: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
```

You can also execute API calls through {% data variables.product.prodname_cli %}. For example, this workflow first uses the `gh api` subcommand to query the GraphQL API and parse the result. Then it stores the result in an environment variable that it can access in a later step. In the second step, it uses the `gh issue create` subcommand to create an issue containing the information from the first step.

```yaml copy
name: Report remaining open issues
on: 
  schedule: 
    # Daily at 8:20 UTC
    - cron: '20 8 * * *'
jobs:
  track_pr:
    runs-on: ubuntu-latest
    steps:
      - run: |
          numOpenIssues="$(gh api graphql -F owner=$OWNER -F name=$REPO -f query='
            query($name: String!, $owner: String!) {
              repository(owner: $owner, name: $name) {
                issues(states:OPEN){
                  totalCount
                }
              }
            }
          ' --jq '.data.repository.issues.totalCount')"

          echo 'NUM_OPEN_ISSUES='$numOpenIssues >> $GITHUB_ENV
        env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          OWNER: {% raw %}${{ github.repository_owner }}{% endraw %}
          REPO: {% raw %}${{ github.event.repository.name }}{% endraw %}
      - run: |
          gh issue create --title "Issue report" --body "$NUM_OPEN_ISSUES issues remaining" --repo $GITHUB_REPOSITORY
        env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```
