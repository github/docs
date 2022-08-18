---
title: Using larger runners
intro: '{% data variables.product.prodname_dotcom %} offers larger runners with more RAM and CPU.'
miniTocMaxHeadingLevel: 3
versions:
  feature: 'actions-larger-runners'
shortTitle: Using larger runners
---

{% data reusables.actions.larger-runners-beta %}

## Overview of larger runners

In addition to the [standard {% data variables.product.prodname_dotcom %}-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources), {% data variables.product.prodname_dotcom %} also offers a range of larger runners with more RAM and CPU. These runners are hosted by {% data variables.product.prodname_dotcom %} and have the runner application and other tools preinstalled. Each runner is only used to process a single job, and once the job has completed the runner's virtual machine is then handled according to your autoscaling needs: the runner is reimaged and only reused within your organisation, or it is shutdown and deleted.

When you add a larger runner to an organization, you are defining the hardware and operating system configuration for a customized class of runner. {% data variables.product.prodname_dotcom %} will then create multiple instances of this runner that scale up and down to match the demands of your organization, based on the autoscaling limits you define.

## Architectural overview of larger runners

Larger runners are managed at the organization level, where they are arranged into groups that can contain multiple instances of the runner. They can also be created at the enterprise level and shared with organizations in the hierarchy. Once you've created a group, you can then add a runner to the group and update your workflows to target the label assigned to the larger runners. You can also control which repositories are permitted to send jobs to the group for processing. For more information about groups, see "[Controlling access to larger runners](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

In the following diagram, a class of hosted runner named `16-core-ubuntu-runner` has been defined with customized hardware and operating system configuration.
- Instances of this runner are automatically created and added to a group called `16-core-ubuntu-rg`. 
- The runner has been assigned the label `16-core-ubuntu`. 
- Workflow jobs use the `16-core-ubuntu` label in their `runs-on` key to indicate the type of runner they need to execute the job.
- The job is then run on the next available instance of the `16-core-ubuntu-runner` runner with that label.

![Diagram explaining larger runners](/assets/images/larger-runner.png)

## Autoscaling larger runners

Larger runners can be configured to scale automatically. This means that when a job is submitted to a runner, that runner will automatically scale out by adding more machines until it reaches the maximum limit you've defined. Each machine added only handles one job at a time so these settings effectively determine the number of jobs that can be run concurrently. 

You can set following scaling option during the runner deployment process:

**Max** - Allows you to control your costs by setting the maximum parallel number of machines that are created in this set. A higher value here can help avoid workflows being blocked due to parallelism.

## Networking for larger runners

By default, larger runners are not remotely accessible from the internet. If you want to connect to your runners, you can configure them to receive a public static IP address from {% data variables.product.prodname_dotcom %}'s IP address pool. When enabled, instances of the larger runner will receive an address from a range that is unique to the runner, and you can use up to 10 static IP addresses in total.

{% note %}

**Note**: IP address ranges are automatically removed for runners which are unused for more than 30 days, and these addresses cannot be recovered.

{% endnote %}

## Planning for larger runners

### Create a runner group

Runner groups are used to collect sets of identically-configured virtual machines. You can then decide which organizations or repositories are permitted to run jobs access to those sets of machines. During the larger runner deployment process, the runner can be added to an existing group, or otherwise it will join a default group. You can create a group by following the steps in "[Controlling access to larger runners](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

### Understanding billing

Larger runners are billed differently to the standard runners. For more information, see "[Per-minute rates for larger runners](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates-for-larger-runners)".

## Adding a larger runner to an enterprise

You can add larger runners to an enterprise, where they can be assigned to multiple organizations. The organization admins can then control which repositories can use it. To add a larger runner to an enterprise, you must be an enterprise owner.

You'll be able to choose an operating system and a hardware configuration from the list of available options. When new instances of this runner are deployed through autoscaling, they will use the same operating system and hardware configuration you've defined here.

You can also define the labels that identify the runner, which is how your workflows will be able to send jobs to the runners for processing (using `runs-on`). New runners are automatically assigned to the default group. You can modify the runner's group after you've registered the runner. For more information, see "[Controlling access to larger runners](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.add-larger-runner %}
1. To allow organizations to access your larger runners, you specify the list of organizations that can use it. For more information, see [Managing access to your runners](#managing-access-to-your-runners).


## Adding a larger runner to an organization

You can add a larger runner to an organization, where the organization admins can control which repositories can use it. You'll be able to choose an operating system and a hardware configuration from the list of available options. When new instances of this runner are deployed through autoscaling, they will use the same operating system and hardware configuration you've defined here.

You can also define the labels that identify the runner group, which is how your workflows will be able to send jobs to the runners for processing (using `runs-on`). New runners are assigned to the default group. You can modify the runner's group after you've registered the runner. For more information, see "[Controlling access to larger runners](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% data reusables.actions.add-larger-runner %}
1. To allow repositories to access your larger runners, add them to the list of repositories that can use it. For more information, see [Managing access to your runners](#managing-access-to-your-runners).

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

{% note %}

**Note**: Before your workflows can send jobs to larger runners, you must first configure permissions for the runner group. See the following sections for more information.

{% endnote %}

Runner groups are used to control which repositories can run jobs on your larger runner. By default, runner groups use the principle of least privilege, meaning that the runners in the group will initially not accept jobs from repositories in your organizations. You must first configure the group to grant access to each level of the management hierarchy, depending on where you've defined the larger runner:

- If you define the larger runner type at the enterprise level: you must configure the group to grant access to all the required organizations. In addition, for each organization, you must configure the group to specify which repositories are allowed access.
- If you define the larger runner type at the organization level: you must configure the group by specifying which repositories are allowed access.

In the following diagram, a runner group named `16-core-ubuntu-rg` has been defined at the enterprise level. Before the repository named `octo-repo` can use the runners in the group, you must first configure the group at the enterprise level to allow access from `octo-org`. You must then configure the group at the organization level to allow access from `octo-repo`:

![Diagram explaining larger runner groups](/assets/images/larger-runner-mgmt.png)

### Allowing access to runners in an enterprise

If you're adding a larger runner to an enterprise, you will need to explicitly allow each level of the hierarchy to use the larger runners:

1. At the enterprise level, enterprise admins define the larger runner's type:
  1. As part of the definition process, enterprise admins must also specify the runner group that will host the larger runners.
  1. The runner group specifies which organizations can use the larger runners.
  1. Once an organization is granted access, the organization admins must still allow repositories to use the larger runners. The workflows in your repositories will not yet be able to send jobs to the larger runners until this is done:
1. At the organization level, locate the runner group and specify which repositories can use the larger runners.

### Allowing access to runners in an organization

If you're adding a larger runner at the organization level, you will need to explicitly allow each level of the hierarchy to use the larger runners:

1. Organization admins define the larger runner's type.
1. Locate the runner group and specify which repositories can use the larger runners.

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
