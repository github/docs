---
title: GitHub Codespaces overview
shortTitle: Overview
intro: 'This guide introduces {% data variables.product.prodname_github_codespaces %} and provides details on how it works and how to use it.'
allowTitleToDifferFromFilename: true
redirect_from:
  - /codespaces/codespaces-reference/about-codespaces
  - /github/developing-online-with-github-codespaces/about-github-codespaces
  - /github/developing-online-with-codespaces/about-codespaces
  - /codespaces/getting-started-with-codespaces/about-codespaces
  - /codespaces/about-codespaces
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
---

## What is a codespace?

A codespace is a development environment that's hosted in the cloud. You can customize your project for {% data variables.product.prodname_github_codespaces %} by committing [configuration files](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers) to your repository (often known as Configuration-as-Code), which creates a repeatable codespace configuration for all users of your project.

Each codespace runs on a virtual machine hosted by {% data variables.product.prodname_dotcom %}. You can choose the type of machine you want to use, depending on the resources you need. Various types of machine are available, starting with a 2-core processor, 4 GB of RAM, and 32 GB of storage. 

You can connect to your codespaces from your browser, from {% data variables.product.prodname_vscode %}, from the JetBrains Gateway application, or by using {% data variables.product.prodname_cli %}.

![A diagram showing how {% data variables.product.prodname_github_codespaces %} works](/assets/images/help/codespaces/codespaces-diagram.png)

## Using {% data variables.product.prodname_github_codespaces %}

To begin developing using cloud-based compute resources, you can create a codespace from a template or from any branch or commit in a repository. When you create a codespace from a template, you can start from a blank template or choose a template suitable for the work you're doing.

{% data reusables.codespaces.links-to-get-started %}

### Using codespaces owned by your personal account

All personal {% data variables.product.prodname_dotcom_the_website %} accounts have a monthly quota of free use of {% data variables.product.prodname_github_codespaces %} included in the Free or Pro plan. You can get started using {% data variables.product.prodname_github_codespaces %} on your personal account without changing any settings or providing payment details.

You can create and use a codespace for any repository you can clone. You can also use a template to create codespaces that are not initially associated with a repository. If you create a codespace from an organization-owned repository, use of the codespace will either be charged to the organization (if the organization is configured for this), or to your personal account. Codespaces created from templates are always charged to your personal account. 

{% data reusables.codespaces.codespaces-continue-by-paying %} 

### Using organization-owned codespaces

Organization owners can enable use of {% data variables.product.prodname_github_codespaces %}, billable to the organization or enterprise account. This applies to codespaces created from repositories owned by the organization. For more information, see "[Enabling {% data variables.product.prodname_github_codespaces %} for your organization](/codespaces/managing-codespaces-for-your-organization/enabling-github-codespaces-for-your-organization)." You can set a spending limit for use of {% data variables.product.prodname_github_codespaces %} on your organization or enterprise account. For more information, see "[Managing spending limits for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)."

If use of a codespace will be billed to an organization or enterprise, this is shown when the codespace is created. For more information, see "[Creating a codespace for a repository](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)." Codespaces that are billed to an organization, or its parent enterprise, are owned by the organization and can be deleted an organization owner. For more information, see "[Deleting a codespace](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)." 

### Customizing {% data variables.product.prodname_github_codespaces %}

To customize the runtimes and tools in your codespace, you can create one or more dev container configurations for your repository. Adding dev container configurations to your repository allows you to define a choice of different development environments that are appropriate for the work people will do in your repository. 

If you create a codespace from a repository without any dev container configurations, {% data variables.product.prodname_github_codespaces %} will clone your repository into an environment with the default codespace image that includes many tools, languages, and runtime environments. If you create a codespace from a template, you might start with some initial configuration on top of the default image. For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)."

You can personalize aspects of your codespace environment by using a public [dotfiles](https://dotfiles.github.io/tutorials/) repository. You can use dotfiles to set shell aliases and preferences, or to install your personal preference of the tools you like to use. If you use {% data variables.product.prodname_github_codespaces %} in the browser, or in {% data variables.product.prodname_vscode %}, you can use [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) to give your codespace editor the same settings, keyboard shortcuts, snippets, and extensions that you have set up in your local installation of {% data variables.product.prodname_vscode %}. 

For more information, see "[Customizing your codespace](/codespaces/customizing-your-codespace)".

## Billing for {% data variables.product.prodname_codespaces %}

For information on pricing, storage, and usage for {% data variables.product.prodname_github_codespaces %}, see "[About billing for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

{% data reusables.codespaces.codespaces-monthly-billing %} For information on how organizations owners and billing managers can manage the spending limit for {% data variables.product.prodname_github_codespaces %} for an organization, see "[Managing spending limits for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)."
