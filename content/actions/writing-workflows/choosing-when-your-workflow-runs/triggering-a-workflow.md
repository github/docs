---
title: Triggering a workflow
shortTitle: Trigger a workflow
intro: 'How to automatically trigger {% data variables.product.prodname_actions %} workflows'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
topics:
  - Workflows
  - CI
  - CD
redirect_from:
  - /actions/using-workflows/triggering-a-workflow
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## About workflow triggers

{% data reusables.actions.about-triggers %}

Workflow triggers are defined with the `on` key. For more information, see "[AUTOTITLE](/actions/using-workflows/workflow-syntax-for-github-actions#on)."

The following steps occur to trigger a workflow run:

1. An event occurs on your repository. The event has an associated commit SHA and Git ref.
1. {% data variables.product.product_name %} searches the `.github/workflows` directory in the root of your repository for workflow files that are present in the associated commit SHA or Git ref of the event.
1. A workflow run is triggered for any workflows that have `on:` values that match the triggering event. Some events also require the workflow file to be present on the default branch of the repository in order to run.

   Each workflow run will use the version of the workflow that is present in the associated commit SHA or Git ref of the event. When a workflow runs, {% data variables.product.product_name %} sets the `GITHUB_SHA` (commit SHA) and `GITHUB_REF` (Git ref) environment variables in the runner environment. For more information, see "[AUTOTITLE](/actions/learn-github-actions/variables)."

### Triggering a workflow from a workflow

{% data reusables.actions.actions-do-not-trigger-workflows %} For more information, see "[AUTOTITLE](/actions/security-guides/automatic-token-authentication)."

If you do want to trigger a workflow from within a workflow run, you can use a {% data variables.product.prodname_github_app %} installation access token or a {% data variables.product.pat_generic %} instead of `GITHUB_TOKEN` to trigger events that require a token.

If you use a {% data variables.product.prodname_github_app %}, you'll need to create a {% data variables.product.prodname_github_app %} and store the app ID and private key as secrets. For more information, see "[AUTOTITLE](/apps/creating-github-apps/guides/making-authenticated-api-requests-with-a-github-app-in-a-github-actions-workflow)." If you use a {% data variables.product.pat_generic %}, you'll need to create a {% data variables.product.pat_generic %} and store it as a secret. For more information about creating a {% data variables.product.pat_generic %}, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)." For more information about storing secrets, see "[AUTOTITLE](/actions/security-guides/using-secrets-in-github-actions)."

To minimize your {% data variables.product.prodname_actions %} usage costs, ensure that you don't create recursive or unintended workflow runs.

For example, the following workflow uses a {% data variables.product.pat_generic %} (stored as a secret called `MY_TOKEN`) to add a label to an issue via {% data variables.product.prodname_cli %}. Any workflows that run when a label is added will run once this step is performed.

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.MY_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

Conversely, the following workflow uses `GITHUB_TOKEN` to add a label to an issue. It will not trigger any workflows that run when a label is added.

```yaml
on:
  issues:
    types:
      - opened

jobs:
  label_issue:
    runs-on: ubuntu-latest
    steps:
      - env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          ISSUE_URL: {% raw %}${{ github.event.issue.html_url }}{% endraw %}
        run: |
          gh issue edit $ISSUE_URL --add-label "triage"
```

## Using events to trigger workflows

Use the `on` key to specify what events trigger your workflow. For more information about events you can use, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows)."

### Using a single event

{% data reusables.actions.on-single-example %}

### Using multiple events

{% data reusables.actions.on-multiple-example %}

### Using activity types and filters with multiple events

You can use activity types and filters to further control when your workflow will run. For more information, see [Using event activity types](#using-event-activity-types) and [Using filters](#using-filters). {% data reusables.actions.actions-multiple-types %}

## Using event activity types

{% data reusables.actions.actions-activity-types %}

## Using filters

{% data reusables.actions.actions-filters %}

### Using filters to target specific branches for pull request events

{% data reusables.actions.workflows.triggering-workflow-branches1 %}

#### Example: Including branches

{% data reusables.actions.workflows.triggering-workflow-branches2 %}

#### Example: Excluding branches

{% data reusables.actions.workflows.triggering-workflow-branches3 %}

#### Example: Including and excluding branches

{% data reusables.actions.workflows.triggering-workflow-branches4 %}

### Using filters to target specific branches or tags for push events

{% data reusables.actions.workflows.run-on-specific-branches-or-tags1 %}

#### Example: Including branches and tags

{% data reusables.actions.workflows.run-on-specific-branches-or-tags2 %}

#### Example: Excluding branches and tags

{% data reusables.actions.workflows.run-on-specific-branches-or-tags3 %}

#### Example: Including and excluding branches and tags

{% data reusables.actions.workflows.run-on-specific-branches-or-tags4 %}

### Using filters to target specific paths for pull request or push events

{% data reusables.actions.workflows.triggering-a-workflow-paths1 %}

#### Example: Including paths

{% data reusables.actions.workflows.triggering-a-workflow-paths2 %}

#### Example: Excluding paths

{% data reusables.actions.workflows.triggering-a-workflow-paths3 %}

#### Example: Including and excluding paths

{% data reusables.actions.workflows.triggering-a-workflow-paths4 %}

#### Git diff comparisons

{% data reusables.actions.workflows.triggering-a-workflow-paths5 %}

### Using filters to target specific branches for workflow run events

{% data reusables.actions.workflows.section-specifying-branches %}

## Defining inputs for manually triggered workflows

{% data reusables.actions.workflow-dispatch %}
{% data reusables.actions.workflow-dispatch-inputs %}
{% data reusables.actions.workflow-dispatch-inputs-example %}

## Defining inputs, outputs, and secrets for reusable workflows

You can define inputs and secrets that a reusable workflow should receive from a calling workflow. You can also specify outputs that a reusable workflow will make available to a calling workflow. For more information, see "[AUTOTITLE](/actions/using-workflows/reusing-workflows)."

## Using event information

Information about the event that triggered a workflow run is available in the `github.event` context. The properties in the `github.event` context depend on the type of event that triggered the workflow. For example, a workflow triggered when an issue is labeled would have information about the issue and label.

### Viewing all properties of an event

Reference the webhook event documentation for common properties and example payloads. For more information, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads)."

You can also print the entire `github.event` context to see what properties are available for the event that triggered your workflow:

```yaml
jobs:
  print_context:
    runs-on: ubuntu-latest
    steps:
      - env:
          EVENT_CONTEXT: {% raw %}${{ toJSON(github.event) }}{% endraw %}
        run: |
          echo $EVENT_CONTEXT
```

### Accessing and using event properties

You can use the `github.event` context in your workflow. For example, the following workflow runs when a pull request that changes `package*.json`, `.github/CODEOWNERS`, or `.github/workflows/**` is opened. If the pull request author (`github.event.pull_request.user.login`) is not `octobot` or `dependabot[bot]`, then the workflow uses the {% data variables.product.prodname_cli %} to label and comment on the pull request (`github.event.pull_request.number`).

```yaml
on:
  pull_request:
    types:
      - opened
    paths:
      - '.github/workflows/**'
      - '.github/CODEOWNERS'
      - 'package*.json'

jobs:
  triage:
    if: >-
      github.event.pull_request.user.login != 'octobot' &&
      github.event.pull_request.user.login != 'dependabot[bot]'
    runs-on: ubuntu-latest
    steps:
      - name: "Comment about changes we can't accept"
        env:
          GH_TOKEN: {% raw %}${{ secrets.GITHUB_TOKEN }}{% endraw %}
          PR: {% raw %}${{ github.event.pull_request.html_url }}{% endraw %}
        run: |
          gh pr edit $PR --add-label 'invalid'
          gh pr comment $PR --body 'It looks like you edited `package*.json`, `.github/CODEOWNERS`, or `.github/workflows/**`. We do not allow contributions to these files. Please review our [contributing guidelines](https://github.com/octo-org/octo-repo/blob/main/CONTRIBUTING.md) for what contributions are accepted.'
```

For more information about contexts, see "[AUTOTITLE](/actions/learn-github-actions/contexts)." For more information about event payloads, see "[AUTOTITLE](/webhooks-and-events/webhooks/webhook-events-and-payloads)."

## Further controlling how your workflow will run

If you want more granular control than events, event activity types, or event filters provide, you can use conditionals and environments to control whether individual jobs or steps in your workflow will run.

### Using conditionals

You can use conditionals to further control whether jobs or steps in your workflow will run.

#### Example using a value in the event payload

For example, if you want the workflow to run when a specific label is added to an issue, you can trigger on the `issues labeled` event activity type and use a conditional to check what label triggered the workflow. The following workflow will run when any label is added to an issue in the workflow's repository, but the `run_if_label_matches` job will only execute if the label is named `bug`.

```yaml
on:
  issues:
    types:
      - labeled

jobs:
  run_if_label_matches:
    if: github.event.label.name == 'bug'
    runs-on: ubuntu-latest
    steps:
      - run: echo 'The label was bug'
```

#### Example using event type

For example, if you want to run different jobs or steps depending on what event triggered the workflow, you can use a conditional to check whether a specific event type exists in the event context. The following workflow will run whenever an issue or pull request is closed. If the workflow ran because an issue was closed, the `github.event` context will contain a value for `issue` but not for `pull_request`. Therefore, the `if_issue` step will run but the `if_pr` step will not run. Conversely, if the workflow ran because a pull request was closed, the `if_pr` step will run but the `if_issue` step will not run.

```yaml
on:
  issues:
    types:
      - closed
  pull_request:
    types:
      - closed

jobs:
  state_event_type:
    runs-on: ubuntu-latest
    steps:
    - name: if_issue
      if: github.event.issue
      run: |
        echo An issue was closed
    - name: if_pr
      if: github.event.pull_request
      run: |
        echo A pull request was closed
```

For more information about what information is available in the event context, see "[Using event information](#using-event-information)." For more information about how to use conditionals, see "[AUTOTITLE](/actions/learn-github-actions/expressions)."

### Using environments to manually trigger workflow jobs

If you want to manually trigger a specific job in a workflow, you can use an environment that requires approval from a specific team or user. First, configure an environment with required reviewers. For more information, see "[AUTOTITLE](/actions/deployment/targeting-different-environments/managing-environments-for-deployment)." Then, reference the environment name in a job in your workflow using the `environment:` key. Any job referencing the environment will not run until at least one reviewer approves the job.

For example, the following workflow will run whenever there is a push to main. The `build` job will always run. The `publish` job will only run after the `build` job successfully completes (due to `needs: [build]`) and after all of the rules (including required reviewers) for the environment called `production` pass (due to `environment: production`).

```yaml
on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: build
        echo 'building'

  publish:
    needs: [build]
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: publish
        echo 'publishing'
```

{% note %}

{% data reusables.gated-features.environments %}

{% endnote %}

## Available events

For a full list of available events, see "[AUTOTITLE](/actions/using-workflows/events-that-trigger-workflows)."
