---
title: About GitHub-hosted runners
shortTitle: GitHub-hosted runners
intro: '{% data variables.product.prodname_dotcom %} offers hosted virtual machines to run workflows. The virtual machine contains an environment of tools, packages, and settings available for {% data variables.product.prodname_actions %} to use.'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/reference/virtual-environments-for-github-hosted-runners
  - /actions/reference/software-installed-on-github-hosted-runners
  - /actions/reference/specifications-for-github-hosted-runners
  - /actions/using-github-hosted-runners/about-github-hosted-runners
  - /actions/using-github-hosted-runners/about-github-hosted-runners/about-github-hosted-runners
  - /actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners
  - /actions/how-tos/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
---

{% data reusables.actions.enterprise-github-hosted-runners %}

## Overview of {% data variables.product.prodname_dotcom %}-hosted runners

Runners are the machines that execute jobs in a {% data variables.product.prodname_actions %} workflow. For example, a runner can clone your repository locally, install testing software, and then run commands that evaluate your code.

{% data variables.product.prodname_dotcom %} provides runners that you can use to run your jobs, or you can [host your own runners](/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners). Each {% data variables.product.prodname_dotcom %}-hosted runner is a new virtual machine (VM) hosted by {% data variables.product.prodname_dotcom %} with the runner application and other tools preinstalled, and is available with Ubuntu Linux, Windows, or macOS operating systems. When you use a {% data variables.product.prodname_dotcom %}-hosted runner, machine maintenance and upgrades are taken care of for you.

{% ifversion not ghes %}

You can choose one of the standard {% data variables.product.prodname_dotcom %}-hosted runner options or, if you are on the {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} plan, you can provision a runner with more cores, or a runner that's powered by a GPU processor. These machines are referred to as "{% data variables.actions.hosted_runner %}." For more information, see [AUTOTITLE](/enterprise-cloud@latest/actions/using-github-hosted-runners/about-larger-runners/about-larger-runners).

Using {% data variables.product.prodname_dotcom %}-hosted runners requires network access with at least 70 kilobits per second upload and download speeds.

{% endif %}

{% ifversion github-hosted-runners-emus-entitlements %}

> [!NOTE]
> {% data reusables.actions.entitlement-minutes-emus %} For more information, see [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users).

{% endif %}

{% ifversion not ghes %}

## Runner Images

{% data variables.product.github %} maintains our own set of VM images for our standard hosted runners. This includes the images for macOS, x64 linux and Windows images. The list of images and their included tools are managed in the [`actions/runner-images`](https://github.com/actions/runner-images) repository. Our arm64 images are partner images, and those are managed in the [`actions/partner-runner-images`](https://github.com/actions/partner-runner-images) repository.

### Preinstalled software for GitHub-owned images

The software tools included in our GitHub-owned images are updated weekly. The update process takes several days, and the list of preinstalled software on the `main` branch is updated after the whole deployment ends.

Workflow logs include a link to the preinstalled tools on the exact runner. To find this information in the workflow log, expand the `Set up job` section. Under that section, expand the `Runner Image` section. The link following `Included Software` will describe the preinstalled tools on the runner that ran the workflow.

For more information, see [AUTOTITLE](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history).

{% data variables.product.prodname_dotcom %}-hosted runners include the operating system's default built-in tools, in addition to the packages listed in the above references. For example, Ubuntu and macOS runners include `grep`, `find`, and `which`, among other default tools.

{% ifversion actions-sbom %}

You can also view a software bill of materials (SBOM) for each build of the Windows and Ubuntu runner images. For more information, see [AUTOTITLE](/actions/security-guides/security-hardening-for-github-actions#reviewing-the-supply-chain-for-github-hosted-runners).

{% endif %}

We recommend using actions to interact with the software installed on runners. This approach has several benefits:
* Usually, actions provide more flexible functionality like version selection, ability to pass arguments, and parameters
* It ensures the tool versions used in your workflow will remain the same regardless of software updates

If there is a tool that you'd like to request, please open an issue at [actions/runner-images](https://github.com/actions/runner-images). This repository also contains announcements about all major software updates on runners.

> [!NOTE] You can also install additional software on {% data variables.product.prodname_dotcom %}-hosted runners. See [AUTOTITLE](/actions/using-github-hosted-runners/customizing-github-hosted-runners).

## Cloud hosts used by {% data variables.product.prodname_dotcom %}-hosted runners

{% data variables.product.prodname_dotcom %} hosts Linux and Windows runners on virtual machines in Microsoft Azure with the {% data variables.product.prodname_actions %} runner application installed. The {% data variables.product.prodname_dotcom %}-hosted runner application is a fork of the Azure Pipelines Agent. Inbound ICMP packets are blocked for all Azure virtual machines, so ping or traceroute commands might not work. {% data variables.product.prodname_dotcom %} hosts macOS runners in Azure data centers.

## Workflow continuity

{% data reusables.actions.runner-workflow-continuity %}

In addition, if the workflow run has been successfully queued, but has not been processed by a {% data variables.product.prodname_dotcom %}-hosted runner within 45 minutes, then the queued workflow run is discarded.

## The `etc/hosts` file

{% data reusables.actions.runners-etc-hosts-file %}

{% endif %}
