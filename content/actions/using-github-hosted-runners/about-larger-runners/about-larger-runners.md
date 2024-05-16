---
title: About larger runners
shortTitle: About larger runners
intro: '{% data variables.product.prodname_dotcom %} offers runners with advanced features to support more customized use cases.'
permissions: '{% data reusables.actions.larger-runner-permissions %}'
versions:
  feature: actions-hosted-runners
redirect_from:
  - /actions/using-github-hosted-runners/using-larger-runners
---

## Overview of {% data variables.actions.hosted_runners %}

{% data reusables.actions.about-larger-runners %}

{% data variables.product.prodname_dotcom %} offers {% data variables.actions.hosted_runners %} with macOS, Ubuntu, or Windows operating systems, and different features and sizes are available depending on which operating system you use. For more information, see "[Additional features for {% data variables.actions.hosted_runners %}](#additional-features-for-larger-runners)."

### About Ubuntu and Windows {% data variables.actions.hosted_runners %}

{% data variables.actions.hosted_runner_caps %}s with Ubuntu or Windows operating systems are configured in your organization or enterprise. When you add a {% data variables.actions.hosted_runner %}, you are defining a type of machine from a selection of available hardware specifications and operating system images. {% data variables.product.prodname_dotcom %} will then create multiple instances of this runner that scale up and down to match the job demands of your organization, based on the autoscaling limits you define. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/managing-larger-runners)."

Ubuntu and Windows {% data variables.actions.hosted_runners %} offer autoscaling capabilities and the ability to assign the runners static IP addresses from a specific range. They can also be managed using runner groups, which enables you to control access to the {% data variables.actions.hosted_runners %}. For more information, see "[Additional features for {% data variables.actions.hosted_runners %}](#additional-features-for-larger-runners)."

### About macOS {% data variables.actions.hosted_runners %}

 {% data variables.actions.hosted_runner_caps %}s with a macOS operating system are used by updating the YAML workflow label to the desired runner image. To run your workflows on a macOS {% data variables.actions.hosted_runner %}, update the `runs-on` key to use one of the {% data variables.product.company_short %}-defined macOS {% data variables.actions.hosted_runner %} labels. No additional configuration is required. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/running-jobs-on-larger-runners?platform=mac)."

The following machines sizes are available for macOS {% data variables.actions.hosted_runners %}.

| Runner Size | Architecture| Processor (CPU)| Memory (RAM)  | Storage (SSD) | YAML workflow label |
| --------------| --------------| -------------- | ------------- | ------------- | --------------------- |
| Large | Intel| 12             | 30 GB         | 14 GB         | <code>macos-latest-large</code>, <code>macos-12-large</code>, <code>macos-13-large</code> [latest], <code>macos-14-large</code>[Beta] |
| XLarge| arm64 (M1)|6 CPU and 8 GPU| 14 GB         | 14 GB        | <code>macos-latest-xlarge</code>, <code>macos-13-xlarge</code>[latest], <code>macos-14-xlarge</code>[Beta] |

#### Limitations for macOS {% data variables.actions.hosted_runners %}

{% data reusables.actions.macos-runner-limitations %}

### Additional features for {% data variables.actions.hosted_runners %}

Compared to standard {% data variables.product.prodname_dotcom %}-hosted runners, {% data variables.actions.hosted_runners %} have additional features, and their availability varies depending on the {% data variables.actions.hosted_runner %}'s operating system.

{% rowheaders %}

| Operating system                             | Ubuntu | Windows | macOS |
| -------------------------------------------- | ------ | ------- | ----- |
| Static IP addresses | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Autoscaling | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |
| Runner groups | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} |

{% endrowheaders %}

These features can enhance your CI/CD pipelines in the following ways.

- Assigning {% data variables.actions.hosted_runners %}  static IP addresses from a specific range enables you to use this range to configure a firewall allowlist. For more information, see "[Networking for {% data variables.actions.hosted_runners %}](#networking-for-larger-runners)."
- Autoscaling enables {% data variables.actions.hosted_runners %}  to scale up to a maximum limit set by you, so your workflows can run concurrently. For more information, see "[Autoscaling {% data variables.actions.hosted_runners %}](#autoscaling-larger-runners)."
- Runner groups allow you to control access to {% data variables.actions.hosted_runners %} for your organizations, repositories, and workflows. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

### Runner images

{% data variables.actions.hosted_runner_caps %}s run on virtual machines (VMs), and GitHub installs a virtual hard disk (VHD) on this machine during the VM creation process. You can choose from different VM images to install on your runners.

**GitHub-owned images:** These images are maintained by GitHub and are available for Linux x64, Windows x64, and macOS (x64 and arm) runners. For more information on these images and a full list of included tools for each runner operating system, see the [{% data variables.product.prodname_actions %} Runner Images](https://github.com/actions/runner-images) repository.

**Partner Images:** Partner images are not managed by GitHub and are pulled from the Azure Marketplace. For more info on the Windows 11 desktop image see [Microsoft Windows 11 Desktop](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoftwindowsdesktop.windows-11?tab=Overview). For more info on the GPU runner compatible images, see [NVIDIA GPU-Optimized VMI](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/nvidia.ngc_azure_17_11) and [Data Science Virtual Machine - Windows 2019](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoft-dsvm.dsvm-win-2019?tab=overview).

### Understanding billing

{% note %}

**Note**: {% data variables.actions.hosted_runner_caps %}s are not eligible for the use of included minutes on private repositories. For both private and public repositories, when {% data variables.actions.hosted_runners %} are in use, they will always be billed at the per-minute rate.

{% endnote %}

Compared to standard {% data variables.product.prodname_dotcom %}-hosted runners, {% data variables.actions.hosted_runners %} are billed differently. {% data reusables.actions.about-larger-runners-billing %} For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates)."

## Machine sizes for {% data variables.actions.hosted_runners %}

You can choose from several specifications for {% data variables.actions.hosted_runners %}.

### Specifications for general {% data variables.actions.hosted_runners %}

| CPU | Memory (RAM)  | Storage (SSD) | Operating system (OS) |
| --- | ------------- | ------------- | --------------------- |
| 6   | 14 GB         | 14 GB         | macOS                 |
| 12  | 30 GB         | 14 GB         | macOS                 |
| 2   | 8 GB          | 75 GB         | Ubuntu                |
| 4   | 16 GB         | 150 GB        | Ubuntu, Windows               |
| 8   | 32 GB         | 300 GB        | Ubuntu, Windows       |
| 16  | 64 GB         | 600 GB        | Ubuntu, Windows       |
| 32  | 128 GB        | 1200 GB       | Ubuntu, Windows       |
| 64  | 256 GB        | 2040 GB       | Ubuntu, Windows       |

>[!NOTE] The 4vcpu Windows runner only works with the Windows 11 Desktop image.

### Specifications for GPU {% data variables.actions.hosted_runners %}

{% data reusables.actions.gpu-runner-beta-note %}

| CPU | GPU | GPU card | Memory (RAM) | GPU memory (VRAM) | Storage (SSD) | Operating system (OS) |
| --- | --- | -------- | ------------ | ----------------- | ------------- | --------------------- |
| 4   | 1   | Tesla T4 | 28 GB        | 16 GB             | 176 GB        | Ubuntu, Windows       |

## About runner groups

{% note %}

**Note:** Only {% data variables.actions.hosted_runners %} with Linux or Windows operating systems can be assigned to runner groups.

{% endnote %}

Runner groups enable administrators to control access to runners at the organization and enterprise levels. With runner groups, you can collect sets of runners and create a security boundary around them. You can then decide which organizations or repositories are permitted to run jobs on those sets of machines. During the {% data variables.actions.hosted_runner %} deployment process, the runner can be added to an existing group, otherwise it will join a default group. You can create a group by following the steps in "[AUTOTITLE](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

## Architectural overview of {% data variables.actions.hosted_runners %}

{% note %}

**Note:** This architecture diagram only applies to {% data variables.actions.hosted_runners %} with Linux or Windows operating systems.

{% endnote %}

{% data variables.actions.hosted_runner_caps %}s are managed at the organization level, where they are arranged into groups that can contain multiple instances of the runner. They can also be created at the enterprise level and shared with organizations in the hierarchy. Once you've created a group, you can then add a runner to the group and update your workflows to target either the group name or the label assigned to the {% data variables.actions.hosted_runner %}. You can also control which repositories are permitted to send jobs to the group for processing. For more information about groups, see "[AUTOTITLE](/actions/using-github-hosted-runners/controlling-access-to-larger-runners)."

In the following diagram, a class of hosted runner named `ubuntu-20.04-16core` has been defined with customized hardware and operating system configuration.

![Diagram showing a larger runner being used by a workflow because of the runner's label.](/assets/images/help/actions/hosted-runner.png)

1. Instances of this runner are automatically created and added to a group called `grp-ubuntu-20.04-16core`.
1. The runners have been assigned the label `ubuntu-20.04-16core`.
1. Workflow jobs use the `ubuntu-20.04-16core` label in their `runs-on` key to indicate the type of runner they need to execute the job.
1. {% data variables.product.prodname_actions %} checks the runner group to see if your repository is authorized to send jobs to the runner.
1. The job runs on the next available instance of the `ubuntu-20.04-16core` runner.

## Autoscaling {% data variables.actions.hosted_runners %}

{% note %}

**Note:** Autoscaling is only available for {% data variables.actions.hosted_runners %} with Linux or Windows operating systems.

{% endnote %}

{% data variables.actions.hosted_runner_caps %}s can automatically scale to suit your needs. You can provision machines to run a specified maximum number of jobs when jobs are submitted for processing. Each machine only handles one job at a time, so these settings effectively determine the number of jobs that can be run concurrently.

You can configure the maximum job concurrency, which allows you to control your costs by setting the maximum parallel number of jobs that can be run using this set. A higher value here can help avoid workflows being blocked due to parallelism. For more information on how to set limits, see "[AUTOTITLE](/actions/using-github-hosted-runners/managing-larger-runners#configuring-autoscaling-for-larger-runners)". For more information on the maximum auto-scaling limits for {% data variables.product.company_short %}-hosted runners, see "[AUTOTITLE](/actions/learn-github-actions/usage-limits-billing-and-administration#usage-limits)."

## Networking for {% data variables.actions.hosted_runners %}

{% note %}

**Notes:**
- Assigning static IP addresses to runners is only available for {% data variables.actions.hosted_runners %} with Linux or Windows operating systems.
- {% data reusables.actions.static-ip-limitation-vnet %} For more information about private networking for {% data variables.product.company_short %}-hosted runners, see "[AUTOTITLE](/admin/configuration/configuring-private-networking-for-hosted-compute-products/about-azure-private-networking-for-github-hosted-runners-in-your-enterprise)."

{% endnote %}

By default, {% data variables.actions.hosted_runners %} receive a dynamic IP address that changes for each job run. Optionally, {% data variables.product.prodname_ghe_cloud %} customers can configure their {% data variables.actions.hosted_runners %} to receive static IP addresses from {% data variables.product.prodname_dotcom %}'s IP address pool. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses)."

When enabled, instances of the {% data variables.actions.hosted_runner %} will receive IP addresses from specific ranges that are unique to the runner, allowing you to use the ranges to configure a firewall allowlist. {% ifversion fpt %}You can use up to 10 {% data variables.actions.hosted_runners %} with static IP address ranges in total across all your {% data variables.actions.hosted_runners %}{% endif %}{% ifversion ghec %}You can use up to 10 {% data variables.actions.hosted_runners %} with static IP address ranges for the {% data variables.actions.hosted_runners %} created at the enterprise level. In addition, you can use up to 10 {% data variables.actions.hosted_runners %} with static IP address ranges for the {% data variables.actions.hosted_runners %} created at the organization level, for each organization in your enterprise{% endif %}. For more information, see "[AUTOTITLE](/actions/using-github-hosted-runners/managing-larger-runners#networking-for-larger-runners)."

{% data reusables.actions.larger-runner-static-ip-contact-support %}

{% note %}

**Note**: If runners are unused for more than 30 days, their IP address ranges are automatically removed and cannot be recovered.

{% endnote %}
