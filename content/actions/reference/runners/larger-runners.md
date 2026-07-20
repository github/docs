---
title: Larger runners reference
shortTitle: Larger runners
intro: Find information about larger runners, including their specifications and customization options.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
redirect_from:
  - /actions/reference/larger-runners-reference
category:
  - Set up runners
contentType: reference
---

{% ifversion ghes %}

{% data reusables.actions.enterprise-github-hosted-runners %}

For reference information about larger runners, see [the {% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest/actions/reference/runners/larger-runners).

{% else %}

## Machine sizes for {% data variables.actions.hosted_runners %}

You can choose from several specifications for {% data variables.actions.hosted_runners %}.

### Specifications for general {% data variables.actions.hosted_runners %}

| CPU | Memory (RAM)  | Storage (SSD) | Architecture | Operating system (OS) |
| --- | ------------- | ------------- | ------------ | --------------------- |
| 5   | 14 GB         | 14 GB         | arm64 (M2)   | macOS                 |
| 12  | 30 GB         | 14 GB         | x64 (Intel)  | macOS                 |
| 2   | 8 GB          | 75 GB         | x64, arm64   | Ubuntu                |
| 4   | 16 GB         | 150 GB        | x64, arm64   | Ubuntu, Windows       |
| 8   | 32 GB         | 300 GB        | x64, arm64   | Ubuntu, Windows       |
| 16  | 64 GB         | 600 GB        | x64, arm64   | Ubuntu, Windows       |
| 32  | 128 GB        | 1200 GB       | x64, arm64   | Ubuntu, Windows       |
| 64  | 208 GB        | 2040 GB       | arm64        | Ubuntu, Windows       |
| 64  | 256 GB        | 2040 GB       | x64          | Ubuntu, Windows       |
| 96 | 384 GB         | 2040 GB       | x64          | Ubuntu, Windows        |

> [!NOTE] The 4-vCPU Windows runner only works with the Windows Server 2025 or the Base Windows 11 Desktop image.

### Specifications for GPU {% data variables.actions.hosted_runners %}

| CPU | GPU | GPU card | Memory (RAM) | GPU memory (VRAM) | Storage (SSD) | Operating system (OS) |
| --- | --- | -------- | ------------ | ----------------- | ------------- | --------------------- |
| 4   | 1   | Tesla T4 | 28 GB        | 16 GB             | 176 GB        | Ubuntu, Windows       |

## Runner images

{% data variables.actions.hosted_runner_caps %}s run on virtual machines (VMs), and {% data variables.product.prodname_dotcom %} installs a virtual hard disk (VHD) on this machine during the VM creation process. You can choose from different VM images to install on your runners.

**{% data variables.product.prodname_dotcom %}-owned images:** These images are maintained by {% data variables.product.prodname_dotcom %} and are available for Linux (x64 and arm64), Windows (x64 and arm64), and macOS (x64 and arm64) runners. For more information on these images and a full list of included tools for each runner operating system, see the [{% data variables.product.prodname_actions %} Runner Images](https://github.com/actions/runner-images) repository.

**Partner Images:** Partner images are not managed by {% data variables.product.prodname_dotcom %} and are pulled from the Azure Marketplace. See below for resources on where to find more information and to report issues for partner images.
 * [Base Windows 11 desktop image](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoftwindowsdesktop.windows-11?tab=Overview).
 * [NVIDIA GPU-Optimized VMI](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/nvidia.ngc_azure_17_11)
 * [Data Science Virtual Machine - Windows 2019](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/microsoft-dsvm.dsvm-win-2019?tab=overview).

## Available macOS {% data variables.actions.hosted_runners %} and labels

The following machines are available for macOS {% data variables.actions.hosted_runners %}. When you create a macOS {% data variables.actions.hosted_runner %}, the runner name is also available as a workflow label that you can use with `runs-on`.

{% data reusables.actions.larger-runners-table %}

## Limitations for macOS {% data variables.actions.hosted_runners %}

{% data reusables.actions.macos-runner-limitations %}

## Troubleshooting {% data variables.actions.hosted_runners %}

If you notice the jobs that target your {% data variables.actions.hosted_runner %}s are delayed or not running, there are several factors that may be causing this.

* **Concurrency settings:** You may have reached your maximum concurrency limit. If you would like to enable more jobs to run in parallel, you can update your autoscaling settings to a larger number. See [AUTOTITLE](/actions/how-tos/manage-runners/larger-runners/manage-larger-runners#configuring-autoscaling-for-larger-runners).
* **Repository permissions:** Ensure you have the appropriate repository permissions enabled for your {% data variables.actions.hosted_runner %}s. By default, enterprise runners are not available at the repository level and must be manually enabled by an organization administrator. See [AUTOTITLE](/actions/how-tos/manage-runners/larger-runners/manage-larger-runners#allowing-repositories-to-access-larger-runners).
* **Billing information:** You must have a valid credit card on file in order to use {% data variables.actions.hosted_runner %}s. After adding a credit card to your account, it can take up to 10 minutes to enable the use of your {% data variables.actions.hosted_runner %}s. See [AUTOTITLE](/billing/how-tos/set-up-payment/manage-payment-info).
* **Spending limit:** Your {% data variables.product.prodname_actions %} spending limit must be set to a value greater than zero. See [AUTOTITLE](/billing/how-tos/set-up-budgets).
* **Fair use policy:** {% data variables.product.company_short %} has a fair use policy that begins to throttle jobs based on several factors, such as how many jobs you are running or how many jobs are running across the entirety of {% data variables.product.prodname_actions %}.
* **Job queue to assign time:** Job queue to assign time refers to the time between a job request and {% data variables.product.company_short %} assigning a VM to execute the job. Standard {% data variables.product.company_short %}-hosted runners utilizing prescribed YAML workflow labels (such as `ubuntu-latest`) are always in a "warm" state. With larger runners, a warm VM may not be ready to pick up a job on first request as the pools for these machines are smaller. As a result, {% data variables.product.company_short %} may need to create a new VM, which increases the queue to assign time. Once a runner is in use, VMs are ready for subsequent workflow runs within 5 minutes. If not used again within that time, a subset of those machines remains warm, reducing the queue to assign time for future workflow runs over the next 24 hours. The higher the volume of jobs you run, the more VMs will remain in the warm pool.

## Networking for {% data variables.actions.hosted_runners %}

By default, {% data variables.actions.hosted_runners %} receive a dynamic IP address that changes for each job run. Optionally, {% data variables.product.prodname_ghe_cloud %} customers can configure their {% data variables.actions.hosted_runners %} to receive static IP addresses from {% data variables.product.prodname_dotcom %}'s IP address pool. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/about-githubs-ip-addresses).

When enabled, instances of the {% data variables.actions.hosted_runner %} will receive IP addresses from specific ranges that are unique to the runner, allowing you to use the ranges to configure a firewall allowlist. Each {% data variables.actions.hosted_runner %} is a pool that automatically scales out to its configured maximum concurrency, and all jobs in that pool share the same static IP address range. This means you do not need to create additional runners to run more concurrent jobs. {% ifversion fpt %}You can use up to 10 {% data variables.actions.hosted_runner %} pools with static IP address ranges in total across all your {% data variables.actions.hosted_runners %}{% endif %}{% ifversion ghec %}You can use up to 10 {% data variables.actions.hosted_runner %} pools with static IP address ranges at the enterprise level. In addition, you can use up to 10 {% data variables.actions.hosted_runner %} pools with static IP address ranges at the organization level, for each organization in your enterprise{% endif %}. For more information, see [AUTOTITLE](/actions/how-tos/manage-runners/larger-runners/manage-larger-runners).

{% data reusables.actions.larger-runner-static-ip-contact-support %}

> [!NOTE]
> If runners are unused for more than 90 days, their IP address ranges are automatically removed and cannot be recovered.

{% endif %}
