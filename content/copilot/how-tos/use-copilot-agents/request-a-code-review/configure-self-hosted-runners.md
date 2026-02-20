---
title: Configuring self-hosted runners for GitHub Copilot code review
shortTitle: Configure self-hosted runners
intro: 'Learn how to configure self-hosted runners for {% data variables.copilot.copilot_code-review_short %}.'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
topics:
  - Copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

## About {% data variables.product.prodname_actions %} usage for code review tools

{% data reusables.copilot.code-review.code-review-actions-usage %} Organizations in this situation can use self-hosted runners.

## Configuring self-hosted runners for code review

You can run {% data variables.copilot.copilot_code-review_short %} using self-hosted {% data variables.product.prodname_actions %} runners with ARC (Actions Runner Controller). You must first set up ARC-managed scale sets in your environment. For more information on ARC, see [AUTOTITLE](/actions/hosting-your-own-runners/managing-self-hosted-runners-with-actions-runner-controller/about-actions-runner-controller).

> [!WARNING]
> ARC is the only officially supported solution for self-hosting {% data variables.copilot.copilot_code-review_short %}. For security reasons, we do not recommend using non-ARC self-hosted runners.

> [!NOTE]
> {% data variables.copilot.copilot_code-review_short %} is only compatible with Ubuntu x64 Linux runners. Runners with Windows, macOS or other operating systems are not supported.

To configure self-hosted runners for {% data variables.copilot.copilot_code-review_short %}:

1. Configure network security controls for your {% data variables.product.prodname_actions %} runners to ensure that {% data variables.copilot.copilot_code-review_short %} does not have open access to your network or the public internet.

    You must configure your firewall to allow connections to the [standard hosts required for {% data variables.product.prodname_actions %} self-hosted runners](/actions/reference/runners/self-hosted-runners#accessible-domains-by-function), plus the following hosts:

    * `api.githubcopilot.com`
    * `uploads.github.com`
    * `user-images.githubusercontent.com`
1. In your `copilot-setup-steps.yml` file, set the `runs-on` attribute to your ARC-managed scale set name. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/customize-the-agent-environment#preinstalling-tools-or-dependencies-in-copilots-environment).

   ```yaml
   # ...

   jobs:
     copilot-setup-steps:
       runs-on: arc-scale-set-name
       # ...
   ```
