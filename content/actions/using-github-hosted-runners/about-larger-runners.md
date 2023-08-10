---
title: About larger runners
shortTitle: About larger runners
intro: '{% data variables.product.prodname_dotcom %} offers runners with more RAM, CPU, and disk space.'
permissions: '{% data reusables.actions.larger-runner-permissions %}'
versions:
  feature: actions-hosted-runners
redirect_from:
  - /actions/using-github-hosted-runners/using-larger-runners
---

## Overview of {% data variables.actions.hosted_runner %}s

{% data reusables.actions.about-larger-runners %}

When you add a {% data variables.actions.hosted_runner %} to an organization, you are defining a type of machine from a selection of available hardware specifications and operating system images. {% data variables.product.prodname_dotcom %} will then create multiple instances of this runner that scale up and down to match the job demands of your organization, based on the autoscaling limits you define.

### Understanding billing

{% note %}

**Note**: {% data variables.actions.hosted_runner_caps %}s are not eligible for the use of included minutes on private repositories. For both private and public repositories, when {% data variables.actions.hosted_runner %}s are in use, they will always be billed at the per-minute rate.

{% endnote %}

Compared to standard {% data variables.product.prodname_dotcom %}-hosted runners, {% data variables.actions.hosted_runner %}s are billed differently. {% data reusables.actions.about-larger-runners-billing %} For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates)."

## Machine sizes for {% data variables.actions.hosted_runner %}s

| Processor (CPU)| Memory (RAM)  | Storage (SSD) | Operating system (OS) |
| -------------- | ------------- | ------------- | --------------------- |
| 4              | 16 GB         | 150 GB        | Ubuntu                |
| 8              | 32 GB         | 300 GB        | Ubuntu, Windows       |
| 16             | 64 GB         | 600 GB        | Ubuntu, Windows       |
| 32             | 128 GB        | 1200 GB       | Ubuntu, Windows       |
| 64             | 256 GB        | 2040 GB       | Ubuntu, Windows       |

{% note %}

**Note**: macOS runners are also available in larger sizes and are billed the same way as {% data variables.actions.hosted_runner %}s. For information on how to access macOS runners, see "[AUTOTITLE](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)."

{% endnote %}

### Additional features for {% data variables.actions.hosted_runner %}s

Compared to standard {% data variables.product.prodname_dotcom %}-hosted runners, {% data variables.actions.hosted_runner %}s have the following additional features:

- For Ubuntu runners, hardware acceleration for the Android SDK tools is enabled. This makes running Android tests much faster and consumes fewer minutes. For more information on Android hardware acceleration, see [Configure hardware acceleration for the Android Emulator](https://developer.android.com/studio/run/emulator-acceleration) in the Android Developers documentation.
- {% data variables.actions.hosted_runner_caps %}s can be assigned static IP addresses from a specific range, which enables you to use this range to configure a firewall allowlist. For more information, see "[Networking for {% data variables.actions.hosted_runner %}s](#networking-for-larger-runners)."
- {% data variables.actions.hosted_runner_caps %}s can automatically scale up to a maximum limit set by you, so your workflows can run concurrently. For more information, see "[Autoscaling {% data variables.actions.hosted_runner %}s](#autoscaling-larger-runners)."
- Runner groups allow you to control access to {% data variables.actions.hosted_runner %}s for your organizations, repositories, and workflows. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

For a full list of included tools for each runner operating system, see the [{% data variables.product.prodname_actions %} Runner Images](https://github.com/actions/runner-images) repository.

## About runner groups

Runner groups enable administrators to control access to runners at the organization and enterprise levels. With runner groups, you can collect sets of runners and create a security boundary around them. You can then decide which organizations or repositories are permitted to run jobs on those sets of machines. During the {% data variables.actions.hosted_runner %} deployment process, the runner can be added to an existing group, otherwise it will join a default group. You can create a group by following the steps in "[AUTOTITLE](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

## Architectural overview of {% data variables.actions.hosted_runner %}s

{% data variables.actions.hosted_runner_caps %}s are managed at the organization level, where they are arranged into groups that can contain multiple instances of the runner. They can also be created at the enterprise level and shared with organizations in the hierarchy. Once you've created a group, you can then add a runner to the group and update your workflows to target either the group name or the label assigned to the {% data variables.actions.hosted_runner %}. You can also control which repositories are permitted to send jobs to the group for processing. For more information about groups, see "[AUTOTITLE](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

In the following diagram, a class of hosted runner named `ubuntu-20.04-16core` has been defined with customized hardware and operating system configuration.

![Diagram showing a larger runner being used by a workflow because of the runner's label.](/assets/images/help/actions/hosted-runner.png)

1. Instances of this runner are automatically created and added to a group called `grp-ubuntu-20.04-16core`.
1. The runners have been assigned the label `ubuntu-20.04-16core`.
1. Workflow jobs use the `ubuntu-20.04-16core` label in their `runs-on` key to indicate the type of runner they need to execute the job.
1. {% data variables.product.prodname_actions %} checks the runner group to see if your repository is authorized to send jobs to the runner.
1. The job runs on the next available instance of the `ubuntu-20.04-16core` runner.

## Autoscaling {% data variables.actions.hosted_runner %}s

{% data variables.actions.hosted_runner_caps %}s can automatically scale to suit your needs. You can provision machines to run a specified maximum number of jobs when jobs are submitted for processing. Each machine only handles one job at a time, so these settings effectively determine the number of jobs that can be run concurrently.

You can configure the maximum job concurrency, which allows you to control your costs by setting the maximum parallel number of jobs that can be run using this set. A higher value here can help avoid workflows being blocked due to parallelism. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/managing-larger-runners#configuring-autoscaling-for-larger-runners)."

## Networking for {% data variables.actions.hosted_runner %}s

By default, {% data variables.actions.hosted_runner %}s receive a dynamic IP address that changes for each job run. Optionally, {% data variables.product.prodname_ghe_cloud %} customers can configure their {% data variables.actions.hosted_runner %}s to receive a static IP address from {% data variables.product.prodname_dotcom %}'s IP address pool. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)."

When enabled, instances of the {% data variables.actions.hosted_runner %} will receive an address from a range that is unique to the runner, allowing you to use this range to configure a firewall allowlist. {% ifversion fpt %}You can use up to 10 static IP address ranges in total across all your {% data variables.actions.hosted_runner %}s{% endif %}{% ifversion ghec %}You can use up to 10 static IP address ranges for the {% data variables.actions.hosted_runner %}s created at the enterprise level. In addition, you can use up to 10 static IP address ranges for the {% data variables.actions.hosted_runner %}s created at the organization level, for each organization in your enterprise{% endif %}. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/managing-larger-runners#networking-for-larger-runners)."

{% data reusables.actions.larger-runner-static-ip-contact-support %}

{% note %}

**Note**: If runners are unused for more than 30 days, their IP address ranges are automatically removed and cannot be recovered.

{% endnote %}
