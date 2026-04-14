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
> Usage of larger {% data variables.product.prodname_dotcom %}-hosted runners is billed per-minute and may incur additional {% data variables.product.prodname_actions %} charges.

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
