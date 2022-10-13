---
title: GitHub Codespaces overview
shortTitle: Overview
product: '{% data reusables.gated-features.codespaces %}'
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

A codespace is a development environment that's hosted in the cloud. You can customize your project for {% data variables.product.prodname_github_codespaces %} by committing [configuration files](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project) to your repository (often known as Configuration-as-Code), which creates a repeatable codespace configuration for all users of your project.

Each codespace runs on a virtual machine hosted by {% data variables.product.product_location %}. You can choose the type of machine you want to use, depending on the resources you need. Options range from 2 core machines up to 32 core machines. You can connect to your codespaces from your browser, from {% data variables.product.prodname_vscode %}, from the JetBrains Gateway application, or by using {% data variables.product.prodname_cli %}.

![A diagram showing how {% data variables.product.prodname_github_codespaces %} works](/assets/images/help/codespaces/codespaces-diagram.png)

## Using {% data variables.product.prodname_github_codespaces %}

You can create a codespace from any branch or commit in your repository and begin developing using cloud-based compute resources. {% data reusables.codespaces.links-to-get-started %}

To customize the runtimes and tools in your codespace, you can create one or more dev container configurations for your repository. Adding dev container configurations to your repository allows you to define a choice of different development environments that are appropriate for the work people will do in your repository. 

If you don't add a dev container configuration, {% data variables.product.prodname_github_codespaces %} will clone your repository into an environment with the default codespace image that includes many tools, languages, and runtime environments. For more information, see "[Introduction to dev containers](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

You can personalize aspects of your codespace environment by using a public [dotfiles](https://dotfiles.github.io/tutorials/) repository. You can use dotfiles to set shell aliases and preferences, or to install your personal preference of the tools you like to use. If you use {% data variables.product.prodname_github_codespaces %} in the browser, or in {% data variables.product.prodname_vscode %}, you can use [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) to give your codespace editor the same settings, keyboard shortcuts, snippets, and extensions that you have set up in your local installation of {% data variables.product.prodname_vscode %}. 

For more information, see "[Customizing your codespace](/codespaces/customizing-your-codespace)".

## About billing for {% data variables.product.prodname_codespaces %}

For information on pricing, storage, and usage for {% data variables.product.prodname_github_codespaces %}, see "[About billing for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

{% data reusables.codespaces.codespaces-spending-limit-requirement %} 

{% data reusables.codespaces.codespaces-monthly-billing %} For information on how organizations owners and billing managers can manage the spending limit for {% data variables.product.prodname_github_codespaces %} for an organization, see "[Managing spending limits for {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-github-codespaces)."

You can see who will pay for a codespace before you create it. For more information, see "[Creating a codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace)."