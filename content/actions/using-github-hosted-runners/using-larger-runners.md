---
title: Using larger runners
intro: '{% data variables.product.prodname_dotcom %} offers larger runners for your demanding jobs.'
miniTocMaxHeadingLevel: 3
versions:
  feature: 'actions-larger-runners'
shortTitle: Using larger runners
---

{% note %}

**Note**: Larger runners are currently in beta and subject to change.

{% endnote %}

## Overview of larger runners

In addition to the [standard {% data variables.product.prodname_dotcom %}-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources), {% data variables.product.prodname_dotcom %} also offers a range of larger runners with more RAM and CPU. These runners are hosted by {% data variables.product.prodname_dotcom %} and have the runner application and other tools preinstalled. Each runner is only used to process a single job, and once the job has completed the runner's virtual machine is then handled according to your autoscaling needs: the runner is reimaged and only reused within your organisation, or it is shutdown and deleted.

When you add a hosted runner to an organization, you are defining the hardware and operating system configuration for a customized class of runner. {% data variables.product.prodname_dotcom %} will then create multiple instances of this runner that scale up and down to match the demands of your organization, based on the autoscaling limits you define.

## Architectural overview of larger runners

Larger runners are managed at the organization level, where they are arranged into groups that can contain multiple instances of the runner. They can also be created at the enterprise level and shared with organizations in the hierarchy. Once you've created a group, you can then add a runner to the group and update your workflows to target the group. You can also control which repositories are permitted to send jobs to the group for processing. For more information about groups, see "[Managing access to GitHub-hosted runners using groups](/actions/using-github-hosted-runners/managing-access-to-github-hosted-runners-using-groups)."

In the following diagram, a class of hosted runner named `16-core-ubuntu-runner` has been defined with customized hardware and operating system configuration.
- Instances of this runner are automatically created and added to a group called `16-core-ubuntu-rg`. 
- The group has been assigned the label `16-core-ubuntu`. 
- Workflow jobs use the `16-core-ubuntu` label in their `runs-on` key to indicate the type of runner they need to execute the job.
- The job is then run on the next available instance of the `16-core-ubuntu-runner` runner in the group.

![Diagram](/assets/images/hosted-runner.png)

## Autoscaling larger runners

Larger runners can be configured to scale automatically. This means that when a job is submitted to a runner group, the group will automatically add a new runner to the group if the group is not already at its maximum capacity. Each runner only processes one job at a time, so these settings effectively determine the number of jobs that can be run concurrently. 

You can set following scaling options during the runner deployment process:

**Min** - Defines the minimum number of idle runners that are ready to pick up jobs. If this number is too low, your jobs will take longer to start. To identify an optimal number, consider the number of jobs that you will expect to run concurrently, and how long they can wait in a queue.

**Max** - Allows you to control your costs by setting the maximum parallel number of machines that are created in this set. A higher value here can help avoid workflows being blocked due to parallelism.

## Networking for larger runners

larger runners can be configured to use a static IP address from {% data variables.product.prodname_dotcom %}'s dedicated IP address pool. This means that you can connect to your runner from anywhere on the Internet.  All instances of a hosted runner will be assigned a static IP from a range that is unique to the runner.

## Planning for larger runners

### Create a runner group

Runner groups are used to collect sets of identically-configured virtual machines. You can then decide which organizations or repositories are permitted to run jobs access to those sets of machines. You can create a group by following the steps in "[Managing access to GitHub-hosted runners using groups](/actions/using-github-hosted-runners/managing-access-to-github-hosted-runners-using-groups)." During the hosted runner deployment process, the runner can be added to an existing group, or otherwise it will join a default group. You can create a group by following the steps in "[Managing access to GitHub-hosted runners using groups](/actions/using-github-hosted-runners/managing-access-to-github-hosted-runners-using-groups)."

### Plan the labels for your runner group

When you create a runner group, you can specify a set of labels that will be applied to all runners in the group. Your developers can then use these labels to target these runners in their workflows. 

### Understanding billing

The more powerful larger runners are billed differently to the standard runners. For more information, see "[Per-minute rates for larger runners](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates-for-hosted-runners)".

## Adding a new hosted runner to an organization

This procedure demonstrates how to add a customized class of hosted runner to an organization. You'll be able to choose an operating system and a hardware configuration from the list of available options. When new instances of this runner are deployed through autoscaling, they will use the same operating system and hardware configuration you've defined here..

You can also define the labels that identify the runner group, which is how your workflows will be able to send jobs to the runners for processing (using `runs-on`).

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runners %}
1. Click **New runner**, then click **{% octicon "mark-github" aria-label="New hosted runner" %} New hosted runner**.
1. Complete the required details to configure your new runner:

    - **Name**: Enter a name for your new runner. For easier identification, this should indicate its hardware and operating configuration, such as `runner-16-core-ubuntu-20-04`.
    - **Runner image**: Choose an operating system from the available options. Once you've selected an operating system, you will be able to choose a specific version.
    - **Runner size**: Choose a hardware configuration from the drop-down list of available options.
    - **Auto-scaling**: Choose the minimum and maximum number of runners that can be active at any time.
    - **Runner group**: Choose the group that your runner will be a member of. This group will host multiple instances of your runner, as they scale up and down to suit demand.
    - **Labels**: Choose the labels that you want to apply to your runner. For easier identification, this should indicate its hardware and operating configuration, such as `16-core-ubuntu-20-04`.
    - **Networking**: Choose the static IP address range that will be assigned to instances of the hosted runner.

1. Click **Create runner**.

## Running jobs on your runner

Once your runner has been been defined, you can update your workflows to send jobs to the runner for processing. In this example, a runner group is populated with Ubuntu 16-core runners and has been assigned the label `16-core-ubuntu`. The `check-bats-version` job then uses the `runs-on` key to target those runners whenever the job is run:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on: 16-core-ubuntu
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses:{% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

## Managing access to your runners

To ensure your developers have access to your runners, you will need to make sure that their organization has access (from the enterprise level) and that their repository has access from an organization level.  For example, if you create an enterprise-level runner group and allocate it to an organization, you will still need to go into the organization level and specify repository level access

### Changing what organizations or repositories can access a runner group

{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
  - For runner groups in an enterprise, under **Organization access**, modify what organizations can access the runner group. 
  - For runner groups in an organization, under **Repository access**, modify what repositories can access the runner group.

   {% warning %}

   **Warning**:

   {% indented_data_reference reusables.actions.self-hosted-runner-security spaces=3 %}

   For more information, see "[About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#self-hosted-runner-security-with-public-repositories)."

   {% endwarning %}
