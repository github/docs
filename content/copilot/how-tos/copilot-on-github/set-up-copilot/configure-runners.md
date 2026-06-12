---
title: Configuring runners for GitHub Copilot code review
shortTitle: Configure runners
intro: 'Use self-hosted runners or larger {% data variables.product.prodname_dotcom %}-hosted runners for {% data variables.copilot.copilot_code-review_short %}.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /copilot/how-tos/use-copilot-agents/request-a-code-review/configure-self-hosted-runners
  - /copilot/how-tos/use-copilot-agents/request-a-code-review/configure-runners
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

## About {% data variables.product.prodname_actions %} usage for code review tools

{% data reusables.copilot.code-review.code-review-actions-usage %} Organizations in this situation can use self-hosted runners.

You can also upgrade to larger {% data variables.product.prodname_dotcom %}-hosted runners for better performance.

## Configure self-hosted runners for code review

Run {% data variables.copilot.copilot_code-review_short %} using self-hosted {% data variables.product.prodname_actions %} runners with ARC (Actions Runner Controller). You must first set up ARC-managed scale sets in your environment. For more information on ARC, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller).

> [!WARNING]
> ARC is the only officially supported solution for self-hosting {% data variables.copilot.copilot_code-review_short %}. For security reasons, do not use non-ARC self-hosted runners.

{% data variables.copilot.copilot_code-review_short %} is only compatible with Ubuntu x64 Linux runners.

To configure self-hosted runners for {% data variables.copilot.copilot_code-review_short %}:
1. Configure network security controls for your {% data variables.product.prodname_actions %} runners to ensure that {% data variables.copilot.copilot_code-review_short %} does not have open access to your network or the public internet.

    You must configure your firewall to allow connections to the [standard hosts required for {% data variables.product.prodname_actions %} self-hosted runners](/actions/reference/runners/self-hosted-runners#accessible-domains-by-function), plus the following hosts:

    * `api.githubcopilot.com`
    * `uploads.github.com`
    * `user-images.githubusercontent.com`
1. In your `copilot-setup-steps.yml` file, set the `runs-on` attribute to your ARC-managed scale set name. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-environment#preinstalling-tools-or-dependencies-in-copilots-environment).

   ```yaml
   # ...

   jobs:
     copilot-setup-steps:
       runs-on: arc-scale-set-name
       # ...
   ```

## Upgrade to larger {% data variables.product.prodname_dotcom %}-hosted {% data variables.product.prodname_actions %} runners

By default, {% data variables.copilot.copilot_code-review_short %} runs on a standard {% data variables.product.prodname_actions %} runner. Larger runners provide better performance (CPU and memory), more disk space, and advanced features like Azure private networking. See [AUTOTITLE](/actions/using-github-hosted-runners/using-larger-runners/about-larger-runners).

> [!NOTE]
> Usage of larger {% data variables.product.prodname_dotcom %}-hosted runners is billed at a higher per-minute rate. For more information, see [AUTOTITLE](/billing/concepts/product-billing/github-actions).

1. Set up larger runners for your organization. See [AUTOTITLE](/actions/using-github-hosted-runners/managing-larger-runners).
1. If you are using larger runners with Azure private networking, configure your Azure private network to allow outbound access to the following hosts:

    * `api.githubcopilot.com`
    * `uploads.github.com`
    * `user-images.githubusercontent.com`

1. In your `copilot-setup-steps.yml` file, set the `runs-on` attribute to the label for the larger runners you want {% data variables.copilot.copilot_code-review_short %} to use. See [AUTOTITLE](/actions/using-github-hosted-runners/running-jobs-on-larger-runners).

   ```yaml
   # ...

   jobs:
     copilot-setup-steps:
       runs-on: ubuntu-4-core
       # ...
   ```

## Configure runners at the organization level

Organization owners can set a default runner type for {% data variables.copilot.copilot_code-review_short %} and {% data variables.copilot.copilot_cloud_agent %} across all repositories in the organization, and control whether individual repositories can override this default.

> [!NOTE]
> The organization-level runner type applies to both {% data variables.copilot.copilot_code-review_short %} and {% data variables.copilot.copilot_cloud_agent %}. Repositories can still override the organization default using `copilot-setup-steps.yml` unless you disable **Allow repositories to customize the runner type**. For more information, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/configure-runner-for-coding-agent#preventing-repositories-from-customizing-the-runner-type).

This is useful if your organization requires all code reviews and {% data variables.copilot.copilot_cloud_agent_short %} tasks to run on specific runners, for example, to use larger runners for better performance or self-hosted runners that have access to internal resources.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the sidebar, under "Code, planning, and automation," click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**, and then click **Runner type**.
1. Next to "Runner type configuration," click {% octicon "pencil" aria-label="Edit" %}.
1. In the "Edit runner type" dialog, select the runner type to use by default across your organization, then click **Save runner selection**.
   * **Standard {% data variables.product.prodname_dotcom %} runner**: {% data variables.copilot.copilot_code-review_short %} and {% data variables.copilot.copilot_cloud_agent %} will use the standard {% data variables.product.prodname_dotcom %}-hosted runner.
   * **Labeled runner**: {% data variables.copilot.copilot_code-review_short %} and {% data variables.copilot.copilot_cloud_agent %} will use a runner matching the label you specify.
1. Optionally, to prevent individual repositories from overriding the organization-level runner configuration using their `copilot-setup-steps.yml` file, disable **Allow repositories to customize the runner type**.
