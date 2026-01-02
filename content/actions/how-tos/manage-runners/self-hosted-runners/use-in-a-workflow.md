---
title: Using self-hosted runners in a workflow
shortTitle: Use in a workflow
intro: 'To use self-hosted runners in a workflow, you can use labels or groups to specify the runner for a job.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow
  - /actions/hosting-your-own-runners/managing-self-hosted-runners/using-self-hosted-runners-in-a-workflow
  - /actions/how-tos/hosting-your-own-runners/managing-self-hosted-runners/using-self-hosted-runners-in-a-workflow
  - /actions/how-tos/managing-self-hosted-runners/using-self-hosted-runners-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-github-hosted-runners %}

{% ifversion repository-actions-runners %}

## Viewing available runners for a repository

{% data reusables.actions.about-viewing-runner-list %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.repository-runners %}
1. Click the **Self hosted** tab at the top of the list of runners.
1. Review the list of available self-hosted runners for the repository. This list includes both self-hosted runners and runner scale sets created with {% data variables.product.prodname_actions_runner_controller %}. For more information, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller).
{% data reusables.actions.copy-runner-label %}

{% data reusables.actions.actions-tab-new-runners-note %}

{% endif %}

## Using default labels to route jobs

A self-hosted runner automatically receives certain labels when it is added to {% data variables.product.prodname_actions %}. These are used to indicate its operating system and hardware platform:

* `self-hosted`: Default label applied to self-hosted runners.
* `linux`, `windows`, or `macOS`: Applied depending on operating system.
* `x64`, `ARM`, or `ARM64`: Applied depending on hardware architecture.

You can use your workflow's YAML to send jobs to a combination of these labels. In this example, a self-hosted runner that matches all three labels will be eligible to run the job:

```yaml
runs-on: [self-hosted, linux, ARM64]
```

* `self-hosted` - Run this job on a self-hosted runner.
* `linux` - Only use a Linux-based runner.
* `ARM64` - Only use a runner based on ARM64 hardware.

To create individual self-hosted runners without the default labels, pass the `--no-default-labels` flag when you create the runner. Actions Runner Controller does not support multiple labels.

## Using custom labels to route jobs

You can create custom labels and assign them to your self-hosted runners at any time. Custom labels let you send jobs to particular types of self-hosted runners, based on how they're labeled.

For example, if you have a job that requires a specific type of graphics hardware, you can create a custom label called `gpu` and assign it to the runners that have the hardware installed. A self-hosted runner that matches all the assigned labels will then be eligible to run the job.

This example shows a job that combines default and custom labels:

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

* `self-hosted` - Run this job on a self-hosted runner.
* `linux` - Only use a Linux-based runner.
* `x64` - Only use a runner based on x64 hardware.
* `gpu` - This custom label has been manually assigned to self-hosted runners with the GPU hardware installed.

These labels operate cumulatively, so a self-hosted runner must have all four labels to be eligible to process the job.

## Using groups to route jobs

{% data reusables.actions.jobs.example-runs-on-groups %}

## Using labels and groups to route jobs

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}
