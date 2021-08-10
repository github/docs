---
title: Automating Dependabot with GitHub Actions
intro: 'Examples of how you can use {% data variables.product.prodname_actions %} to automate common {% data variables.product.prodname_dependabot %} related tasks.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_actions %} to respond to {% data variables.product.prodname_dependabot %}-created pull requests.'
miniTocMaxHeadingLevel: 3
versions:
  free-pro-team: '*'
type: how_to
topics:
  - Actions
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Use Dependabot with actions
---

## About {% data variables.product.prodname_dependabot %} and {% data variables.product.prodname_actions %}

{% data variables.product.prodname_dependabot %} creates pull requests to keep your dependencies up to date, and you can use {% data variables.product.prodname_actions %} to perform automated tasks when these pull requests are created. For example, fetch additional artifacts, add labels, run tests, or otherwise modifying the pull request.

## Responding to events

{% data variables.product.prodname_dependabot %} is able to trigger {% data variables.product.prodname_actions %} workflows on its pull requests and comments; however, due to ["GitHub Actions: Workflows triggered by Dependabot PRs will run with read-only permissions"](https://github.blog/changelog/2021-02-19-github-actions-workflows-triggered-by-dependabot-prs-will-run-with-read-only-permissions/), certain events are treated differently.

For workflows initiated by {% data variables.product.prodname_dependabot %} (`github.actor == "dependabot[bot]"`) using the `pull_request`, `pull_request_review`, `pull_request_review_comment`, and `push` events, the following restrictions apply:

- `GITHUB_TOKEN` has read-only permissions.
- Secrets are inaccessible.

For more information, see ["Keeping your GitHub Actions and workflows secure: Preventing pwn requests"](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/).

### Handling `pull_request` events

If your workflow needs access to secrets or a `GITHUB_TOKEN` with write permissions, you have two options: using `pull_request_target`, or using two separate workflows. We will detail using `pull_request_target` in this section, and using two workflows below in "[Handling `push` events](#handling-push-events)."

Below is a simple example of a `pull_request` workflow that might now be failing:

{% raw %}
```yaml
### This workflow now has no secrets and a read-only token
name: Dependabot Workflow
on:
  pull_request

jobs:
  dependabot:
    runs-on: ubuntu-latest
    # Always check the actor is Dependabot to prevent your workflow from failing on non-Dependabot PRs
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: actions/checkout@v2
```
{% endraw %}

You can replace `pull_request` with `pull_request_target`, which is used for pull requests from forks, and explicitly check out the pull request `HEAD`.

{% warning %}

**Warning:** Using `pull_request_target` as a substitute for `pull_request` exposes you to insecure behavior. We recommend you use the two workflow method, as described below in "[Handling `push` events](#handling-push-events)."

{% endwarning %}

{% raw %}
```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Workflow
on:
  pull_request_target
  
permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: actions/checkout@v2
        with:
          # Check out the pull request HEAD
          ref: ${{ github.event.pull_request.head.sha }}
          github-token: ${{ secrets.GITHUB_TOKEN }}
```
{% endraw %}

It is also strongly recommended that you downscope the permissions granted to the `GITHUB_TOKEN` in order to avoid leaking a token with more privilege than necessary. For more information, see "[Permissions for the `GITHUB_TOKEN`](/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token)."

### Handling `push` events

As there is no `pull_request_target` equivalent for `push` events, you will have to use two workflows: one untrusted workflow that ends by uploading artifacts, which triggers a second trusted workflow that downloads artifacts and continues processing.

The first workflow performs any untrusted work:

{% raw %}
```yaml
### This workflow doesn't have access to secrets and has a read-only token
name: Dependabot Untrusted Workflow
on:
  push

jobs:
  check-dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - uses: ...
```
{% endraw %}

The second workflow performs trusted work after the first workflow completes successfully:

{% raw %}
```yaml
### This workflow has access to secrets and a read-write token
name: Dependabot Trusted Workflow
on:
  workflow_run:
    workflows: ["Dependabot Untrusted Workflow"]
    types: 
      - completed

permissions:
  # Downscope as necessary, since you now have a read-write token

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.event.workflow_run.conclusion == 'success' }}
    steps:
      - uses: ...
```
{% endraw %}

### Manually re-running a workflow

You can also manually re-run a failed Dependabot workflow, and it will run with a read-write token and access to secrets. Before manually re-running a failed workflow, you should always check the dependency being updated to ensure that the change doesn't introduce any malicious or unintended behavior.

## Common Dependabot automations

Here are several common scenarios that can be automated using {% data variables.product.prodname_actions %}.

### Fetch metadata about a pull request

A large amount of automation requires knowing information about the contents of the pull request: what the dependency name was, if it's a production dependency, and if it's a major, minor, or patch update.

The `dependabot/fetch-metadata` action provides all that information for you:

{% raw %}
```yaml
name: Dependabot auto-label
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.0
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.metadata.outputs.dependency-names
      #  - steps.metadata.outputs.dependency-type
      #  - steps.metadata.outputs.update-type      
```
{% endraw %}

For more information, see the [`dependabot/fetch-metadata`](https://github.com/dependabot/fetch-metadata) repository.

### Label a pull request

If you have other automation or triage workflows based on {% data variables.product.prodname_dotcom %} labels, you can configure an action to assign labels based on the metadata provided.

For example, if you want to flag all production dependency updates with a label:

{% raw %}
```yaml
name: Dependabot auto-label
on: pull_request_target

permissions:
  pull-requests: write
  issues: write
  repository-projects: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.0
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```
{% endraw %}

### Approve a pull request

If you want to automatically approve Dependabot pull requests, you can use the {% data variables.product.prodname_cli %} in a workflow:

{% raw %}
```yaml
name: Dependabot auto-approve
on: pull_request_target

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.0
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```
{% endraw %}

### Enable auto-merge on a pull request

If you want to auto-merge your pull requests, you can use {% data variables.product.prodname_dotcom %}'s auto-merge functionality. This enables the pull request to be merged when all required tests and approvals are successfully met. For more information on auto-merge, see "[Automatically merging a pull request"](/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)."

Here is an example of enabling auto-merge for all patch updates to `my-dependency`:

{% raw %}
```yaml
name: Dependabot auto-merge
on: pull_request_target

permissions:
  pull-requests: write
  contents: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.0
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.metadata.outputs.dependency-names, 'my-dependency') && steps.metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```
{% endraw %}

## Troubleshooting failed workflow runs

If your workflow run fails, check the following:

- You are running the workflow only when the correct actor triggers it.
- You are checking out the correct `ref` for your `pull_request`.
- You aren't trying to access secrets from within a Dependabot-triggered `pull_request`, `pull_request_review`, `pull_request_review_comment`, or `push` event.
- You aren't trying to perform any `write` actions from within a Dependabot-triggered `pull_request`, `pull_request_review`, `pull_request_review_comment`, or `push` event.

For information on writing and debugging {% data variables.product.prodname_actions %}, see "[Learning GitHub Actions](/actions/learn-github-actions)."
