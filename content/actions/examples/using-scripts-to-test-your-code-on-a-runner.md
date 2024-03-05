---
title: Using scripts to test your code on a runner
shortTitle: Use scripts to test your code on a runner
intro: 'How to use essential {% data variables.product.prodname_actions %} features for continuous integration (CI).'
versions:
  fpt: '*'
  ghes: '> 3.1'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Workflows
layout: inline
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Example overview

{% data reusables.actions.example-workflow-intro-ci %} When this workflow is triggered, it automatically runs a script that checks whether the {% data variables.product.prodname_dotcom %} Docs site has any broken links.

{% data reusables.actions.example-diagram-intro %}

![Diagram of an event triggering a workflow that uses scripts to test code.](/assets/images/help/actions/overview-actions-using-scripts-ci-example.png)

## Features used in this example

{% data reusables.actions.example-table-intro %}

| **Feature**  | **Implementation** |
| --- | --- |
{% data reusables.actions.push-table-entry %}
{% data reusables.actions.pull-request-table-entry %}
{% data reusables.actions.workflow-dispatch-table-entry %}
{% data reusables.actions.permissions-table-entry %}
{% data reusables.actions.concurrency-table-entry %}
| Running the job on different runners, depending on the repository | [`runs-on`](/actions/using-jobs/choosing-the-runner-for-a-job)|
{% data reusables.actions.checkout-action-table-entry %}
{% data reusables.actions.setup-node-table-entry %}
| Using a third-party action | [`trilom/file-changes-action`](https://github.com/trilom/file-changes-action)|
| Running a script on the runner | Using `./script/rendered-content-link-checker.mjs` |

## Example workflow

{% data reusables.actions.example-docs-engineering-intro %} [`check-broken-links-github-github.yml`](https://github.com/github/docs/blob/main/.github/workflows/check-broken-links-github-github.yml).

The following workflow renders the content of every page in the documentation and checks all internal links to ensure they connect correctly.

```yaml annotate copy
# {% data reusables.actions.explanation-name-key %}
name: 'Link Checker: All English'

# The `on` key lets you define the events that trigger when the workflow is run. You can define multiple events here. For more information, see "[AUTOTITLE](/actions/using-workflows/triggering-a-workflow#using-events-to-trigger-workflows)."
on:
# Add the `workflow_dispatch` event if you want to be able to manually run this workflow from the UI. For more information, see [`workflow_dispatch`](/actions/using-workflows/events-that-trigger-workflows#workflow_dispatch).
  workflow_dispatch:
  # Add the `push` event, so that the workflow runs automatically every time a commit is pushed to a branch called `main`. For more information, see [`push`](/actions/using-workflows/events-that-trigger-workflows#push).
  push:
    branches:
      - main
  # Add the `pull_request` event, so that the workflow runs automatically every time a pull request is created or updated. For more information, see [`pull_request`](/actions/using-workflows/events-that-trigger-workflows#pull_request).
  pull_request:

# This modifies the default permissions granted to `GITHUB_TOKEN`. This will vary depending on the needs of your workflow. For more information, see "[AUTOTITLE](/actions/using-jobs/assigning-permissions-to-jobs)."
#
# In this example, the `pull-requests: read` permission is needed for the `trilom/file-changes-action` action that is used later in this workflow.
permissions:
  contents: read
  pull-requests: read
# The `concurrency` key ensures that only a single workflow in the same concurrency group will run at the same time. For more information, see "[AUTOTITLE](/actions/using-jobs/using-concurrency)."
# `concurrency.group` generates a concurrency group name from the workflow name and pull request information. The `||` operator is used to define fallback values. 
# `concurrency.cancel-in-progress` cancels any currently running job or workflow in the same concurrency group.
concurrency:
  group: {% raw %}'${{ github.workflow }} @ ${{ github.event.pull_request.head.label || github.head_ref || github.ref }}'{% endraw %}
  cancel-in-progress: true

# The `jobs` key groups together all the jobs that run in the workflow file.
jobs:
  # This line defines a job with the ID `check-links` that is stored within the `jobs` key.
  check-links:
    # The `runs-on` key in this example configures the job to run on a {% data variables.product.prodname_dotcom %}-hosted runner or a self-hosted runner, depending on the repository running the workflow. 
    # 
    # In this example, the job will run on a self-hosted runner if the repository is named `docs-internal` and is within the `github` organization. If the repository doesn't match this path, then it will run on an `ubuntu-latest` runner hosted by {% data variables.product.prodname_dotcom %}. For more information on these options, see "[AUTOTITLE](/actions/using-jobs/choosing-the-runner-for-a-job)."
    runs-on: {% raw %}${{ fromJSON('["ubuntu-latest", "self-hosted"]')[github.repository == 'github/docs-internal'] }}{% endraw %}
    # The `steps` key groups together all the steps that will run as part of the `check-links` job. Each job in a workflow has its own `steps` section.
    steps:
      # The `uses` key tells the job to retrieve the action named `actions/checkout`. This is an action that checks out your repository and downloads it to the runner, allowing you to run actions against your code (such as testing tools). You must use the checkout action any time your workflow will use the repository's code or you are using an action defined in the repository.
      - name: Checkout
        uses: {% data reusables.actions.action-checkout %}

      # This step uses the `actions/setup-node` action to install the specified version of the Node.js software package on the runner, which gives you access to the `npm` command.
      - name: Setup node
        uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: 16.13.x
          cache: npm

      # The `run` key tells the job to execute a command on the runner. In this example, `npm ci` is used to install the npm software packages for the project.
      - name: Install
        run: npm ci

      # This step uses the `trilom/file-changes-action` action to gather all the changed files. This example is pinned to a specific version of the action, using the `a6ca26c14274c33b15e6499323aac178af06ad4b` SHA.
      # 
      # In this example, this step creates the file "{% raw %}${{ env.HOME }}/files.json{% endraw %}", among others.
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        with:
          fileOutput: 'json'

      # To help with verification, this step lists the contents of `files.json`. This will be visible in the workflow run's log, and can be useful for debugging.
      - name: Show files changed
        run: cat $HOME/files.json

      # This step uses the `run` command to execute a script that is stored in the repository at `script/rendered-content-link-checker.mjs` and passes all the parameters it needs to run.
      - name: Link check (warnings, changed files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --max 100 \
            --check-anchors \
            --check-images \
            --verbose \
            --list $HOME/files.json

      # This step also uses `run` command to execute a script that is stored in the repository at `script/rendered-content-link-checker.mjs` and passes a different set of parameters.
      - name: Link check (critical, all files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --exit \
            --verbose \
            --check-images \
            --level critical
```

## Next steps

{% data reusables.actions.learning-actions %}
