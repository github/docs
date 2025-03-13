---
title: 'What are {% data variables.product.prodname_github_codespaces %}?'
shortTitle: 'What are {% data variables.product.prodname_codespaces %}?'
intro: 'Learn about what {% data variables.product.prodname_github_codespaces %} are.'
allowTitleToDifferFromFilename: true
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
redirect_from:
  - /codespaces/overview
---

{% ifversion ghec %}

{% data reusables.codespaces.data-residency-availability %}

{% endif %}

## Introduction

A codespace is a development environment that's hosted in the cloud. You can customize your project for {% data variables.product.prodname_github_codespaces %} by committing configuration files to your repository (often known as Configuration-as-Code), which creates a repeatable codespace configuration for all users of your project. See [AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers).

Each codespace you create is hosted by {% data variables.product.prodname_dotcom %} in a Docker container, running on a virtual machine. You can choose from a selection of virtual machine types, from 2 cores, 8 GB RAM, and 32 GB storage, up to 32 cores, 64 GB RAM, and 128 GB storage.

By default, the codespace development environment is created from an Ubuntu Linux image that includes a selection of popular languages and tools, but you can use an image based on a Linux distribution of your choice and configure it for your particular requirements. Regardless of your local operating system, your codespace will run in a Linux environment. Windows and macOS are not supported operating systems for the remote development container.

You can connect to your codespaces from your browser, from {% data variables.product.prodname_vscode %}, or by using {% data variables.product.prodname_cli %}. When you connect, you are placed within the Docker container. You have limited access to the outer Linux virtual machine host.

![Diagram showing the relationship between a code editor and a codespace running on an Azure virtual machine.](/assets/images/help/codespaces/codespaces-diagram.png)

## Using {% data variables.product.prodname_github_codespaces %}

To begin developing using cloud-based compute resources, you can create a codespace from a template or from any branch or commit in a repository. When you create a codespace from a template, you can start from a blank template or choose a template suitable for the work you're doing.

{% data reusables.codespaces.links-to-get-started %}

### Using codespaces owned by your personal account

All personal {% data variables.product.github %} accounts have a monthly quota of free use of {% data variables.product.prodname_github_codespaces %} included in the Free or Pro plan. You can get started using {% data variables.product.prodname_github_codespaces %} on your personal account without changing any settings or providing payment details.

If you create a codespace from an organization-owned repository, use of the codespace will either be charged to the organization (if the organization is configured for this), or to your personal account.

{% data reusables.codespaces.codespaces-continue-by-paying %}

{% ifversion ghec %}
{% data reusables.codespaces.codespaces-unavailable-for-emus %}
{% endif %}

### Using organization-owned codespaces

Owners of organizations on {% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %} plans can pay for their members' and collaborators' use of {% data variables.product.prodname_github_codespaces %}. This applies to codespaces created from repositories owned by the organization. See [AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization). You can set a spending limit for use of {% data variables.product.prodname_github_codespaces %} on your organization or enterprise account. See [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces).

If use of a codespace will be billed to an organization or enterprise, this is shown when the codespace is created. See [AUTOTITLE](/codespaces/developing-in-a-codespace/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository). Codespaces that are billed to an organization, or its parent enterprise, are owned by the organization and can be deleted by an organization owner. See [AUTOTITLE](/codespaces/developing-in-a-codespace/deleting-a-codespace#deleting-codespaces-in-your-organization).

{% data reusables.codespaces.when-you-can-create-codespaces %}

### Customizing {% data variables.product.prodname_github_codespaces %}

To customize the runtimes and tools in your codespace, you can create one or more dev container configurations for your repository. Adding dev container configurations to your repository allows you to define a choice of different development environments that are appropriate for the work people will do in your repository.

If you create a codespace from a repository without any dev container configurations, {% data variables.product.prodname_github_codespaces %} will clone your repository into an environment with the default dev container image that includes many tools, languages, and runtime environments. If you create a codespace from a template, you might start with some initial configuration on top of the default image. See [AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers).

You can personalize aspects of your codespace environment by using a public [dotfiles](https://dotfiles.github.io/tutorials/) repository. You can use dotfiles to set shell aliases and preferences, or to install your personal preference of the tools you like to use. If you use {% data variables.product.prodname_github_codespaces %} in the browser, or in {% data variables.product.prodname_vscode %}, you can use [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) to give your codespace editor the same settings, keyboard shortcuts, snippets, and extensions that you have set up in your local installation of {% data variables.product.prodname_vscode %}.

See [AUTOTITLE](/codespaces/customizing-your-codespace).

## Billing for {% data variables.product.prodname_codespaces %}

For information on pricing, storage, and usage for {% data variables.product.prodname_github_codespaces %}, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

{% data reusables.codespaces.codespaces-monthly-billing %} For information on how organizations owners and billing managers can manage the spending limit for {% data variables.product.prodname_github_codespaces %} for an organization, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces).
