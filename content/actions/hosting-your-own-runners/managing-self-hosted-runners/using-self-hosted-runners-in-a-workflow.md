---
title: Using self-hosted runners in a workflow
intro: 'To use self-hosted runners in a workflow, you can use labels{% ifversion target-runner-groups %} or groups{% endif %} to specify the runner for a job.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
shortTitle: Use runners in a workflow
---

{% data reusables.actions.enterprise-github-hosted-runners %}

You can target self-hosted runners for use in a workflow based on the labels assigned to the runners{% ifversion target-runner-groups %}, or their group membership, or a combination of these{% endif %}.

>[!NOTE]Action Runner Controller does not support multiple labels, only the name of the runner can be used in place of a label

## About self-hosted runner labels

Labels allow you to send workflow jobs to specific types of self-hosted runners, based on their shared characteristics. For example, if your job requires a particular hardware component or software package, you can assign a custom label to a runner and then configure your job to only execute on runners with that label.

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

For information on creating custom and default labels, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/using-labels-with-self-hosted-runners)."

{% ifversion target-runner-groups %}

## About self-hosted runner groups

For self-hosted runners defined at the organization {% ifversion ghec or ghes %}or enterprise levels{% else %}level{% endif %}, you can group your runners with shared characteristics into a single runner group and then configure your job to target the runner group.

To specify a self-hosted runner group for your job, configure `runs-on.group` in your workflow file.

For information on creating and managing runner groups, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners/managing-access-to-self-hosted-runners-using-groups)."

{% endif %}

{% ifversion repository-actions-runners %}

## Viewing available runners for a repository

{% data reusables.actions.about-viewing-runner-list %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.actions-tab %}
{% data reusables.repositories.repository-runners %}
1. Click the **Self hosted** tab at the top of the list of runners.
1. Review the list of available self-hosted runners for the repository. This list includes both self-hosted runners and runner scale sets created with {% data variables.product.prodname_actions_runner_controller %}. For more information, see "[AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller)."
{% data reusables.actions.copy-runner-label %}

{% data reusables.actions.actions-tab-new-runners-note %}

{% endif %}

## Using default labels to route jobs

A self-hosted runner automatically receives certain labels when it is added to {% data variables.product.prodname_actions %}. These are used to indicate its operating system and hardware platform:

- `self-hosted`: Default label applied to self-hosted runners.
- `linux`, `windows`, or `macOS`: Applied depending on operating system.
- `x64`, `ARM`, or `ARM64`: Applied depending on hardware architecture.

You can use your workflow's YAML to send jobs to a combination of these labels. In this example, a self-hosted runner that matches all three labels will be eligible to run the job:

```yaml
runs-on: [self-hosted, linux, ARM64]
```

- `self-hosted` - Run this job on a self-hosted runner.
- `linux` - Only use a Linux-based runner.
- `ARM64` - Only use a runner based on ARM64 hardware.

To create individual self-hosted runners without the default labels, pass the `--no-default-labels` flag when you create the runner. Actions Runner Controller does not support multiple labels.

## Using custom labels to route jobs

You can create custom labels and assign them to your self-hosted runners at any time. Custom labels let you send jobs to particular types of self-hosted runners, based on how they're labeled.

For example, if you have a job that requires a specific type of graphics hardware, you can create a custom label called `gpu` and assign it to the runners that have the hardware installed. A self-hosted runner that matches all the assigned labels will then be eligible to run the job.

This example shows a job that combines default and custom labels:

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

- `self-hosted` - Run this job on a self-hosted runner.
- `linux` - Only use a Linux-based runner.
- `x64` - Only use a runner based on x64 hardware.
- `gpu` - This custom label has been manually assigned to self-hosted runners with the GPU hardware installed.

These labels operate cumulatively, so a self-hosted runner must have all four labels to be eligible to process the job.

{% ifversion target-runner-groups %}

## Using groups to route jobs

{% data reusables.actions.jobs.example-runs-on-groups %}

## Using labels and groups to route jobs

{% data reusables.actions.jobs.example-runs-on-labels-and-groups %}

{% endif %}

## Routing precedence for self-hosted runners

When routing a job to a self-hosted runner, {% data variables.product.prodname_dotcom %} looks for a runner that matches the job's `runs-on` labels{% ifversion target-runner-groups %} and/or groups{% endif %}:

- If {% data variables.product.prodname_dotcom %} finds an online and idle runner that matches the job's `runs-on` labels{% ifversion target-runner-groups %} and/or groups{% endif %}, the job is then assigned and sent to the runner.
  - If the runner doesn't pick up the assigned job within 60 seconds, the job is re-queued so that a new runner can accept it.
- If {% data variables.product.prodname_dotcom %} doesn't find an online and idle runner that matches the job's `runs-on` labels {% ifversion target-runner-groups %} and/or groups{% endif %}, then the job will remain queued until a runner comes online.
- If the job remains queued for more than 24 hours, the job will fail.
