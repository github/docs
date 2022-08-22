---
title: Automating Dependabot with GitHub Actions
intro: 'Examples of how you can use {% data variables.product.prodname_actions %} to automate common {% data variables.product.prodname_dependabot %} related tasks.'
permissions: 'People with write permissions to a repository can configure {% data variables.product.prodname_actions %} to respond to {% data variables.product.prodname_dependabot %}-created pull requests.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.2'
type: how_to
topics:
  - Actions
  - Dependabot
  - Version updates
  - Security updates
  - Repositories
  - Dependencies
  - Pull requests
shortTitle: Use Dependabot with Actions
redirect_from:
  - /code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/automating-dependabot-with-github-actions
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.enterprise-enable-dependabot %}

## About {% data variables.product.prodname_dependabot %} and {% data variables.product.prodname_actions %}

{% data variables.product.prodname_dependabot %} creates pull requests to keep your dependencies up to date, and you can use {% data variables.product.prodname_actions %} to perform automated tasks when these pull requests are created. For example, fetch additional artifacts, add labels, run tests, or otherwise modifying the pull request.

## Responding to events

{% data variables.product.prodname_dependabot %} is able to trigger {% data variables.product.prodname_actions %} workflows on its pull requests and comments; however, certain events are treated differently.

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5792 %}
For workflows initiated by {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) using the `pull_request`, `pull_request_review`, `pull_request_review_comment`, `push`, `create`, `deployment`, and `deployment_status` events, the following restrictions apply:
{% endif %}

- {% ifversion ghes = 3.3 %}`GITHUB_TOKEN` has read-only permissions, unless your administrator has removed restrictions.{% else %}`GITHUB_TOKEN` has read-only permissions by default.{% endif %}
- {% ifversion ghes = 3.3 %}Secrets are inaccessible, unless your administrator has removed restrictions.{% else %}Secrets are populated from {% data variables.product.prodname_dependabot %} secrets. {% data variables.product.prodname_actions %} secrets are not available.{% endif %}

{% ifversion fpt or ghec or ghes > 3.3 or ghae-issue-5792 %}
For workflows initiated by {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`) using the `pull_request_target` event, if the base ref of the pull request was created by {% data variables.product.prodname_dependabot %} (`github.actor == 'dependabot[bot]'`), the `GITHUB_TOKEN` will be read-only and secrets are not available.
{% endif %}

{% ifversion actions-stable-actor-ids %}These restrictions apply even if the workflow is re-run by a different actor.{% endif %}

For more information, see ["Keeping your GitHub Actions and workflows secure: Preventing pwn requests"](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/).

{% ifversion fpt or ghec or ghes > 3.3 %}

### Changing `GITHUB_TOKEN` permissions

By default, {% data variables.product.prodname_actions %} workflows triggered by {% data variables.product.prodname_dependabot %} get a `GITHUB_TOKEN` with read-only permissions. You can use the `permissions` key in your workflow to increase the access for the token:

{% raw %}

```yaml
name: CI
on: pull_request

# Set the access for individual scopes, or use permissions: write-all
permissions:
  pull-requests: write
  issues: write
  repository-projects: write
  ...

jobs:
  ...
```

{% endraw %}

For more information, see "[Modifying the permissions for the GITHUB_TOKEN](/actions/security-guides/automatic-token-authentication#modifying-the-permissions-for-the-github_token)."

### Accessing secrets

When a {% data variables.product.prodname_dependabot %} event triggers a workflow, the only secrets available to the workflow are {% data variables.product.prodname_dependabot %} secrets. {% data variables.product.prodname_actions %} secrets are not available. Consequently, you must store any secrets that are used by a workflow triggered by {% data variables.product.prodname_dependabot %} events as {% data variables.product.prodname_dependabot %} secrets. For more information, see "[Managing encrypted secrets for Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)".

{% data variables.product.prodname_dependabot %} secrets are added to the `secrets` context and referenced using exactly the same syntax as secrets for {% data variables.product.prodname_actions %}. For more information, see "[Encrypted secrets](/actions/security-guides/encrypted-secrets#using-encrypted-secrets-in-a-workflow)."

If you have a workflow that will be triggered by {% data variables.product.prodname_dependabot %} and also by other actors, the simplest solution is to store the token with the permissions required in an action and in a {% data variables.product.prodname_dependabot %} secret with identical names. Then the workflow can include a single call to these secrets. If the secret for {% data variables.product.prodname_dependabot %} has a different name, use conditions to specify the correct secrets for different actors to use. For examples that use conditions, see "[Common automations](#common-dependabot-automations)" below.

To access a private container registry on AWS with a user name and password, a workflow must include a secret for `username` and `password`. In the example below, when {% data variables.product.prodname_dependabot %} triggers the workflow, the {% data variables.product.prodname_dependabot %} secrets with the names `READONLY_AWS_ACCESS_KEY_ID` and `READONLY_AWS_ACCESS_KEY` are used. If another actor triggers the workflow, the actions secrets with those names are used.

```yaml
name: CI
on:
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: {% data reusables.actions.action-checkout %}

      - name: Login to private container registry for dependencies
        uses: docker/login-action@v1
        with:
          registry: https://1234567890.dkr.ecr.us-east-1.amazonaws.com
          username: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY_ID }}{% endraw %}
          password: {% raw %}${{ secrets.READONLY_AWS_ACCESS_KEY }}{% endraw %}

      - name: Build the Docker image
        run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)
```

{% endif %}

{% ifversion ghes = 3.3 %}

{% note %}

**Note:** Your site administrator can override these restrictions for {% data variables.product.product_location %}. For more information, see "[Troubleshooting {% data variables.product.prodname_actions %} for your enterprise](/admin/github-actions/advanced-configuration-and-troubleshooting/troubleshooting-github-actions-for-your-enterprise#troubleshooting-failures-when-dependabot-triggers-existing-workflows)."

If the restrictions are removed, when a workflow is triggered by {% data variables.product.prodname_dependabot %} it will have access to {% data variables.product.prodname_actions %} secrets and can use the `permissions` term to increase the default scope of the `GITHUB_TOKEN` from read-only access. You can ignore the specific steps in the "Handling `pull_request` events" and "Handling `push` events" sections, as it no longer applies.

{% endnote %}

### Handling `pull_request` events

If your workflow needs access to secrets or a `GITHUB_TOKEN` with write permissions, you have two options: using `pull_request_target`, or using two separate workflows. We will detail using `pull_request_target` in this section, and using two workflows below in "[Handling `push` events](#handling-push-events)."

Below is a simple example of a `pull_request` workflow that might now be failing:

```yaml
### This workflow now has no secrets and a read-only token
name: Dependabot Workflow
on:
  pull_request

jobs:
  dependabot:
    runs-on: ubuntu-latest
    # Always check the actor is Dependabot to prevent your workflow from failing on non-Dependabot PRs
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
```

You can replace `pull_request` with `pull_request_target`, which is used for pull requests from forks, and explicitly check out the pull request `HEAD`.

{% warning %}

**Warning:** Using `pull_request_target` as a substitute for `pull_request` exposes you to insecure behavior. We recommend you use the two workflow method, as described below in "[Handling `push` events](#handling-push-events)."

{% endwarning %}

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
    if: {% raw %}${{ github.actor == 'dependabot[bot]' }}{% endraw %}
    steps:
      - uses: {% data reusables.actions.action-checkout %}
        with:
          # Check out the pull request HEAD
          ref: {% raw %}${{ github.event.pull_request.head.sha }}{% endraw %}
          github-token: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
```

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

{% endif %}

### Manually re-running a workflow

{% ifversion actions-stable-actor-ids %}

When you manually re-run a Dependabot workflow, it will run with the same privileges as before even if the user who initiated the rerun has different privileges. For more information, see "[Re-running workflows and jobs](/actions/managing-workflow-runs/re-running-workflows-and-jobs)."

{% else %}

You can also manually re-run a failed Dependabot workflow, and it will run with a read-write token and access to secrets. Before manually re-running a failed workflow, you should always check the dependency being updated to ensure that the change doesn't introduce any malicious or unintended behavior.

{% endif %}

## Common Dependabot automations

Here are several common scenarios that can be automated using {% data variables.product.prodname_actions %}.

{% ifversion ghes = 3.3 %}

{% note %}

**Note:** If your site administrator has overridden restrictions for {% data variables.product.prodname_dependabot %} on {% data variables.product.product_location %}, you can use `pull_request` instead of `pull_request_target` in the following workflows.

{% endnote %}

{% endif %}

### Fetch metadata about a pull request

A large amount of automation requires knowing information about the contents of the pull request: what the dependency name was, if it's a production dependency, and if it's a major, minor, or patch update.

The `dependabot/fetch-metadata` action provides all that information for you:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot fetch metadata
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
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.dependabot-metadata.outputs.dependency-names
      #  - steps.dependabot-metadata.outputs.dependency-type
      #  - steps.dependabot-metadata.outputs.update-type      
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot fetch metadata
on: pull_request

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
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      # The following properties are now available:
      #  - steps.metadata.outputs.dependency-names
      #  - steps.metadata.outputs.dependency-type
      #  - steps.metadata.outputs.update-type      
```

{% endraw %}

{% endif %}

For more information, see the [`dependabot/fetch-metadata`](https://github.com/dependabot/fetch-metadata) repository.

### Label a pull request

If you have other automation or triage workflows based on {% data variables.product.prodname_dotcom %} labels, you can configure an action to assign labels based on the metadata provided.

For example, if you want to flag all production dependency updates with a label:

{% ifversion ghes = 3.3 %}

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
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.dependabot-metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-label
on: pull_request

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
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Add a label for all production dependencies
        if: ${{ steps.metadata.outputs.dependency-type == 'direct:production' }}
        run: gh pr edit "$PR_URL" --add-label "production"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
```

{% endraw %}

{% endif %}

### Approve a pull request

If you want to automatically approve Dependabot pull requests, you can use the {% data variables.product.prodname_cli %} in a workflow:

{% ifversion ghes = 3.3 %}

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
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-approve
on: pull_request

permissions:
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Approve a PR
        run: gh pr review --approve "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% endif %}

### Enable auto-merge on a pull request

If you want to allow maintainers to mark certain pull requests for auto-merge, you can use {% data variables.product.prodname_dotcom %}'s auto-merge functionality. This enables the pull request to be merged when all required tests and approvals are successfully met. For more information on auto-merge, see "[Automatically merging a pull request](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/automatically-merging-a-pull-request)."

You can instead use {% data variables.product.prodname_actions %} and the {% data variables.product.prodname_cli %}. Here is an example that auto merges all patch updates to `my-dependency`:

{% ifversion ghes = 3.3 %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request_target

permissions:
  contents: write
  pull-requests: write
  
jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: dependabot-metadata
        uses: dependabot/fetch-metadata@v1.1.1
        with:
          github-token: "${{ secrets.GITHUB_TOKEN }}"
      - name: Enable auto-merge for Dependabot PRs
        if: ${{contains(steps.dependabot-metadata.outputs.dependency-names, 'my-dependency') && steps.dependabot-metadata.outputs.update-type == 'version-update:semver-patch'}}
        run: gh pr merge --auto --merge "$PR_URL"
        env:
          PR_URL: ${{github.event.pull_request.html_url}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

{% endraw %}

{% else %}

{% raw %}

```yaml
name: Dependabot auto-merge
on: pull_request

permissions:
  contents: write
  pull-requests: write

jobs:
  dependabot:
    runs-on: ubuntu-latest
    if: ${{ github.actor == 'dependabot[bot]' }}
    steps:
      - name: Dependabot metadata
        id: metadata
        uses: dependabot/fetch-metadata@v1.1.1
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

{% endif %}

## Troubleshooting failed workflow runs

If your workflow run fails, check the following:

{% ifversion ghes = 3.3 %}

- You are running the workflow only when the correct actor triggers it.
- You are checking out the correct `ref` for your `pull_request`.
- You aren't trying to access secrets from within a Dependabot-triggered `pull_request`, `pull_request_review`, `pull_request_review_comment`, or `push` event.
- You aren't trying to perform any `write` actions from within a Dependabot-triggered `pull_request`, `pull_request_review`, `pull_request_review_comment`, or `push` event.

{% else %}

- You are running the workflow only when the correct actor triggers it.
- You are checking out the correct `ref` for your `pull_request`.
- Your secrets are available in {% data variables.product.prodname_dependabot %} secrets rather than as {% data variables.product.prodname_actions %} secrets.
- You have a `GITHUB_TOKEN` with the correct permissions.

{% endif %}

For information on writing and debugging {% data variables.product.prodname_actions %}, see "[Learning GitHub Actions](/actions/learn-github-actions)."
