---
title: Using larger runners
intro: '{% data variables.product.prodname_dotcom %} offers larger runners with more RAM and CPU.'
miniTocMaxHeadingLevel: 3
versions:
  feature: 'actions-hosted-runners'
shortTitle: Using {% data variables.actions.hosted_runner %}s
---

{% data reusables.actions.hosted-runners-beta %}

## Overview of {% data variables.actions.hosted_runner %}s

In addition to the [standard {% data variables.product.prodname_dotcom %}-hosted runners](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources), {% data variables.product.prodname_dotcom %} also offers a range of {% data variables.actions.hosted_runner %}s with more RAM and CPU. These runners are hosted by {% data variables.product.prodname_dotcom %} and have the runner application and other tools preinstalled. Each runner is only used to process a single job, and once the job has completed, the runner's virtual machine is then processed according to your autoscaling needs: the runner is reimaged and only reused within your organisation, or it is shutdown and deleted.

When you add a {% data variables.actions.hosted_runner %} to an organization, you are defining a type of machine from a selection of available hardware specifications and operating system images. {% data variables.product.prodname_dotcom %} will then create multiple instances of this runner that scale up and down to match the job demands of your organization, based on the autoscaling limits you define.

## Architectural overview of {% data variables.actions.hosted_runner %}s

The {% data variables.actions.hosted_runner %}s are managed at the organization level, where they are arranged into groups that can contain multiple instances of the runner. They can also be created at the enterprise level and shared with organizations in the hierarchy. Once you've created a group, you can then add a runner to the group and update your workflows to target the label assigned to the {% data variables.actions.hosted_runner %}. You can also control which repositories are permitted to send jobs to the group for processing. For more information about groups, see "[Controlling access to {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

In the following diagram, a class of hosted runner named `16-core-ubuntu-runner` has been defined with customized hardware and operating system configuration.
1. Instances of this runner are automatically created and added to a group called `16-core-ubuntu-rg`. 
2. The runners have been assigned the label `16-core-ubuntu`. 
3. Workflow jobs use the `16-core-ubuntu` label in their `runs-on` key to indicate the type of runner they need to execute the job.
4. {% data variables.product.prodname_actions %} checks the runner group to see if your repository is authorized to send jobs to the runner.
5. The job runs on the next available instance of the `16-core-ubuntu-runner` runner.

![Diagram explaining {% data variables.actions.hosted_runner %}](/assets/images/hosted-runner.png)

### Private pools and queue time

{% data variables.product.prodname_dotcom %} uses two types of pools to organize and allocate machines:

- **Public pool**: This pool hosts the standard 2-core runners. It consists of a general shared pool of machines are used to pick up jobs from any {% data variables.product.prodname_actions %} customer. When that job is complete, those machines are re-imaged and returned to the pool. Since many customers share this pool, there is likely to be an idling re-imaged machine ready to process your job.

- **Private pools**: The {% data variables.actions.hosted_runner %}s use private pools, which helps improves the security of the virtual machine lifecycle. With private pools, only re-imaged machines are allowed to be used within your organization or enterprise. This helps reduce concerns around re-imaged machines leaving artefacts behind. The use of private pools does affect the queue time for {% data variables.actions.hosted_runner %}s.

When using {% data variables.actions.hosted_runner %}s, you can expect to see a longer job queue period than the standard runners that reside in the public pool. This can occur when a job is queued for processing. Since private pools contain fewer machines than the public pool, it is more likely that {% data variables.product.prodname_actions %} will need to create a new machine to run your job. The process of provisioning a new machine can take some time, meaning that your job will queue for a longer period than if a runner was already reimaged and sitting idle.

To help improve these queue times, {% data variables.product.prodname_dotcom %} intends to add experimental support for opting out of private pools. By opting out, your runners may be moved into a public pool, though they may still be privately pooled during the beta phase. This option will be added to the runner configuration UI, when available.

## Autoscaling {% data variables.actions.hosted_runner %}s

Your {% data variables.actions.hosted_runner %}s can be configured to automatically scale to suit your needs. When jobs are submitted for processing, more machines can be automatically provisioned to run the jobs, until reaching a pre-defined maximum limit. Each machine only handles one job at a time, so these settings effectively determine the number of jobs that can be run concurrently. 

You can set the following scaling option during the runner deployment process:

**Max** - Allows you to control your costs by setting the maximum parallel number of machines that are created in this set. A higher value here can help avoid workflows being blocked due to parallelism.

## Networking for {% data variables.actions.hosted_runner %}s

By default, {% data variables.actions.hosted_runner %}s are not remotely accessible from the internet. If you want to connect to your runners, you can configure them to receive a public static IP address from {% data variables.product.prodname_dotcom %}'s IP address pool. When enabled, instances of the {% data variables.actions.hosted_runner %} will receive an address from a range that is unique to the runner, and you can use up to 10 static IP addresses in total.

{% note %}

**Note**: If runners are unused for more than 30 days, their IP address ranges are automatically removed and cannot be recovered.

{% endnote %}

## Planning for {% data variables.actions.hosted_runner %}s

### Create a runner group

Runner groups are used to collect sets of identically-configured virtual machines. You can then decide which organizations or repositories are permitted to run jobs on those sets of machines. During the {% data variables.actions.hosted_runner %} deployment process, the runner can be added to an existing group, or otherwise it will join a default group. You can create a group by following the steps in "[Controlling access to {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

### Understanding billing

Compared to standard {% data variables.product.prodname_dotcom %}-hosted runners, {% data variables.actions.hosted_runner %}s are billed differently. For more information, see "[Per-minute rates for {% data variables.actions.hosted_runner %}s](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates-for-larger-runners)".

## Adding a {% data variables.actions.hosted_runner %} to an enterprise

You can add {% data variables.actions.hosted_runner %}s to an enterprise, where they can be assigned to multiple organizations. The organization admins can then control which repositories can use the runners. To add a {% data variables.actions.hosted_runner %} to an enterprise, you must be an enterprise owner.

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.actions-tab %}
{% data reusables.enterprise-accounts.actions-runners-tab %}
{% data reusables.actions.add-hosted-runner %}
1. To allow organizations to access your {% data variables.actions.hosted_runner %}s, you specify the list of organizations that can use it. For more information, see "[Managing access to your runners](#managing-access-to-your-runners)."


## Adding a {% data variables.actions.hosted_runner %} to an organization

You can add a {% data variables.actions.hosted_runner %} to an organization, where the organization admins can control which repositories can use it. 

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.settings-sidebar-actions-runners %}
{% data reusables.actions.add-hosted-runner %}
1. To allow repositories to access your {% data variables.actions.hosted_runner %}s, add them to the list of repositories that can use it. For more information, see "[Managing access to your runners](#managing-access-to-your-runners)."

## Running jobs on your runner

Once your runner has been been defined, you can update your workflows to send jobs to the runner for processing. In this example, a runner group is populated with Ubuntu 16-core runners, which have been assigned the label `16-core-ubuntu`. If you have a runner matching this label, the `check-bats-version` job then uses the `runs-on` key to target that runner whenever the job is run:

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

**Note**: Before your workflows can send jobs to {% data variables.actions.hosted_runner %}s, you must first configure permissions for the runner group. See the following sections for more information.

{% endnote %}

Runner groups are used to control which repositories can run jobs on your {% data variables.actions.hosted_runner %}s. You must grant access to the group from each level of the management hierarchy, depending on where you've defined the {% data variables.actions.hosted_runner %}:

- **Runners at the enterprise level**: Configure the runner group to grant access to all the required organizations. In addition, for each organization, you must configure the group to specify which repositories are allowed access.
- **Runners at the organization level**: Configure the runner group by specifying which repositories are allowed access.

For example, the following diagram has a runner group named `16-core-ubuntu-rg` at the enterprise level. Before the repository named `octo-repo` can use the runners in the group, you must first configure the group at the enterprise level to allow access from the `octo-org` organization; you must then configure the group at the organization level to allow access from `octo-repo`:

![Diagram explaining {% data variables.actions.hosted_runner %} groups](/assets/images/hosted-runner-mgmt.png)

### Allowing repositories to access a runner group

This procedure demonstrates how to configure group permissions at the enterprise and organization levels:

{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %}
{% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
  - For runner groups in an enterprise: under **Organization access**, modify which organizations can access the runner group.
  - For runner groups in an organization: under **Repository access**, modify which repositories can access the runner group.

{% warning %}

**Warning**:

{% data reusables.actions.hosted-runner-security %}

For more information, see "[Controlling access to {% data variables.actions.hosted_runner %}s](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

{% endwarning %}
