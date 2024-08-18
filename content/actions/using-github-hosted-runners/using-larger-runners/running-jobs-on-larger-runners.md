---
title: Running jobs on larger runners
shortTitle: Run jobs on larger runners
intro: 'You can speed up your workflows by configuring them to run on {% data variables.actions.hosted_runner %}s.'
permissions: '{% data reusables.actions.larger-runner-permissions %}'
defaultPlatform: linux
versions:
  feature: actions-hosted-runners
redirect_from:
  - /actions/using-github-hosted-runners/running-jobs-on-larger-runners
  - /actions/using-github-hosted-runners/about-larger-runners/running-jobs-on-larger-runners
---

## Running jobs on your runner

{% linux %}

{% data reusables.actions.run-jobs-larger-runners %}

{% endlinux %}

{% windows %}

{% data reusables.actions.run-jobs-larger-runners %}

{% endwindows %}

{% mac %}

Once your runner type has been defined, you can update your workflow YAML files to send jobs to runner instances for processing. To run jobs on macOS {% data variables.actions.hosted_runner %}s, update the `runs-on` key in your workflow YAML files to use one of the {% data variables.product.company_short %}-defined labels for macOS runners. For more information, see "[Available macOS {% data variables.actions.hosted_runner %}s](#available-macos-larger-runners)."

{% endmac %}

{% mac %}

## Available macOS {% data variables.actions.hosted_runner %}s

Use the labels in the table below to run your workflows on the corresponding macOS {% data variables.actions.hosted_runner %}.

{% data reusables.actions.larger-runners-table %}

{% note %}

**Note:** For macOS {% data variables.actions.hosted_runner %}s, the `-latest` runner label uses the macOS 12 runner image. For macOS Xlarge, the `-latest` runner label uses the macOS 13 runner image

{% endnote %}

{% endmac %}

{% ifversion repository-actions-runners %}

## Viewing available runners for a repository

{% data reusables.actions.about-viewing-runner-list %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.repository-runners %}
1. Review the list of available runners for the repository.
{% data reusables.actions.copy-runner-label %}

{% data reusables.actions.actions-tab-new-runners-note %}

{% endif %}

{% linux %}

## Using groups to control where jobs are run

{% data reusables.actions.jobs.example-runs-on-groups %}

{% endlinux %}

{% windows %}

## Using groups to control where jobs are run

{% data reusables.actions.jobs.example-runs-on-groups %}

{% endwindows %}

{% linux %}

## Using labels to control where jobs are run

{% data reusables.actions.runner-labels-implicit %}

In this example, the `runs-on` key sends the job to any available runner that has been assigned the `ubuntu-20.04-16core` label:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on:
      labels: ubuntu-20.04-16core
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

{% data reusables.actions.runner-labels %}

{% endlinux %}

{% windows %}

## Using labels to control where jobs are run

{% data reusables.actions.runner-labels-implicit %}

In this example, the `runs-on` key sends the job to any available runner that has been assigned the `windows-2022-16core` label:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on:
      labels: windows-2022-16core
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

{% data reusables.actions.runner-labels %}

{% endwindows %}

{% mac %}

## Targeting macOS {% data variables.actions.hosted_runner %}s in a workflow

To run your workflows on macOS {% data variables.actions.hosted_runner %}s, set the value of the `runs-on` key to a label associated with a macOS {% data variables.actions.hosted_runner %}. For a list of macOS {% data variables.actions.hosted_runner %} labels, see "[Available macOS {% data variables.actions.hosted_runner %}s](#available-macos-larger-runners)."

In this example, the workflow uses a label that is associated with macOS XL runners. The `runs-on` key sends the job to any available runner with a matching label:

```yaml
name: learn-github-actions-testing
on: [push]
jobs:
  build:
    runs-on: macos-13-xlarge
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

{% endmac %}

{% linux %}

## Using labels and groups to control where jobs are run

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}

{% endlinux %}

{% windows %}

## Using labels and groups to control where jobs are run

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}

{% endwindows %}

## Troubleshooting {% data variables.actions.hosted_runner %}s

{% linux %}

{% data reusables.actions.larger-runners-troubleshooting-linux-windows %}

{% endlinux %}

{% windows %}

{% data reusables.actions.larger-runners-troubleshooting-linux-windows %}

{% endwindows %}

{% mac %}

Because macOS arm64 does not support Node 12, macOS {% data variables.actions.hosted_runner %}s automatically use Node 16 to execute any JavaScript action written for Node 12. Some community actions may not be compatible with Node 16. If you use an action that requires a different Node version, you may need to manually install a specific version at runtime.

{% note %}

**Note:** ARM-powered runners are currently in beta and are subject to change.

{% endnote %}

{% endmac %}
