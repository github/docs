---
title: GitHub Codespaces overview
shortTitle: 概要
product: '{% data reusables.gated-features.codespaces %}'
intro: 'This guide introduces {% data variables.product.prodname_codespaces %} and provides details on how it works and how to use it.'
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
type: quick_start
topics:
  - Codespaces
---

## What is a codespace?

A codespace is a development environment that's hosted in the cloud. You can customize your project for {% data variables.product.prodname_codespaces %} by committing [configuration files](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project) to your repository (often known as Configuration-as-Code), which creates a repeatable codespace configuration for all users of your project.

{% data variables.product.prodname_codespaces %} run on a variety of VM-based compute options hosted by {% data variables.product.product_location %}, which you can configure from 2 core machines up to 32 core machines. You can connect to your codespaces from the browser or locally using {% data variables.product.prodname_vscode %}.

![A diagram showing how {% data variables.product.prodname_codespaces %} works](/assets/images/help/codespaces/codespaces-diagram.png)

## Using Codespaces

You can create a codespace from any branch or commit in your repository and begin developing using cloud-based compute resources.

To customize the runtimes and tools in your codespace, you can create a custom configuration to define an environment (or _dev container_) that is specific for your repository. Using a dev container allows you to specify a Docker environment for development with a well-defined tool and runtime stack that can reference an image, Dockerfile, or docker-compose. This means that anyone using the repository will have the same tools available to them when they create a codespace.

If you don't do any custom configuration, {% data variables.product.prodname_codespaces %} will clone your repository into an environment with the default codespace image that includes many tools, languages, and runtime environments. For more information, see "[Configuring Codespaces for your project](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)".

You can also personalize aspects of your codespace environment by using a public [dotfiles](https://dotfiles.github.io/tutorials/) repository and [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync). Personalization can include shell preferences, additional tools, editor settings, and VS Code extensions. For more information, see "[Customizing your codespace](/codespaces/customizing-your-codespace)".

## {% data variables.product.prodname_codespaces %}の支払いについて

For information on billing for {% data variables.product.prodname_codespaces %}, see "[Managing billing for {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-codespaces)."

{% data reusables.codespaces.codespaces-spending-limit-requirement %} For information on how organizations owners and billing managers can manage the spending limit for {% data variables.product.prodname_codespaces %} for an organization, see "[Managing your spending limit for {% data variables.product.prodname_codespaces %}](/billing/managing-billing-for-github-codespaces/managing-spending-limits-for-codespaces)."
