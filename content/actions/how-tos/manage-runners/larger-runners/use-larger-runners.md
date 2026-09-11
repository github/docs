---
title: Running jobs on larger runners
shortTitle: Use larger runners
intro: Identify available {% data variables.actions.hosted_runner %}s, then route jobs to the right runners by using runner groups and workflow labels.
permissions: '{% data reusables.actions.larger-runner-permissions %}'
defaultPlatform: linux
versions:
  feature: actions-hosted-runners
redirect_from:
  - /actions/using-github-hosted-runners/running-jobs-on-larger-runners
  - /actions/using-github-hosted-runners/about-larger-runners/running-jobs-on-larger-runners
  - /actions/using-github-hosted-runners/using-larger-runners/running-jobs-on-larger-runners
  - /actions/how-tos/using-github-hosted-runners/using-larger-runners/running-jobs-on-larger-runners
  - /actions/how-tos/using-larger-runners/running-jobs-on-larger-runners
category:
  - Use and manage runners
contentType: how-tos
---

{% ifversion repository-actions-runners %}

## Identifying available runners for a repository

{% data reusables.actions.about-viewing-runner-list %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.repository-runners %}
1. Review the list of available runners for the repository.
{% data reusables.actions.copy-runner-label %}

{% data reusables.actions.actions-tab-new-runners-note %}

{% endif %}

## Targeting larger runners in a workflow

After you identify the {% data variables.actions.hosted_runner %}s you want to use, you can target them in your workflow with runner groups, workflow labels, or both. Use runner groups to route jobs to a set of runners, workflow labels to target runners with a specific label, or both when a job must match both conditions.

If an administrator has disabled standard {% data variables.product.github %}-hosted runners, you can only use runner groups.

### Targeting by runner group

Reference the runner group name in your workflow. Use this when you want to route a job to any available runner in a specific group.

{% linux %}

{% data reusables.actions.jobs.example-runs-on-groups %}

{% endlinux %}

{% windows %}

{% data reusables.actions.jobs.example-runs-on-groups %}

{% endwindows %}

{% mac %}

In this example, the `runs-on` key sends the job to any available runner in the `macos-build-runners` group:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-swift-version:
    runs-on:
      group: macos-build-runners
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

{% endmac %}

### Targeting by workflow label

Reference a workflow label in your workflow when you want to route a job to runners that share a specific label.

{% data variables.actions.hosted_runner_caps %}s are automatically assigned a workflow label that matches the runner name.


{% linux %}

In this example, the `runs-on` key sends the job to any available runner that has been assigned the `ubuntu-24.04-16core` label:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on:
      labels: ubuntu-24.04-16core
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

{% endlinux %}

{% windows %}

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

{% endwindows %}

{% mac %}

For macOS {% data variables.actions.hosted_runners %}, you can use either {% data variables.product.prodname_dotcom %}-defined workflow labels or the workflow label that is automatically assigned from the {% data variables.actions.hosted_runner %} name you set when you create it. For a list of available macOS workflow labels, see [AUTOTITLE](/actions/reference/runners/larger-runners#available-macos-larger-runners-and-labels).

In this example, the `runs-on` key sends the job to any available runner that has been assigned the `macos-26-xlarge` label.

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-swift-version:
    runs-on: macos-26-xlarge
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

{% endmac %}

### Using labels and groups to control where jobs are run

Use both labels and groups when a job must run only on runners in a specific group that also have a specific label. The runner must meet both requirements to be eligible to run the job.

{% linux %}

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% endlinux %}

{% windows %}

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% endwindows %}

{% mac %}

In this example, the `runs-on` key combines `group` and `labels` so that the job is routed to any available runner within the group that also has a matching label:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-swift-version:
    runs-on:
      group: macos-runners
      labels: macos-26-xlarge
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Build
        run: swift build
      - name: Run tests
        run: swift test
```

{% endmac %}

## Further reading

For syntax details for the `runs-on` key, see [AUTOTITLE](/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idruns-on).

For specifications, labels, limitations, and troubleshooting information, see [AUTOTITLE](/actions/reference/runners/larger-runners).
