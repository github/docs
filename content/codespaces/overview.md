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

A codespace is a development environment that's hosted in the cloud. You can customize your project for {% data variables.product.prodname_github_codespaces %} by committing configuration files to your repository (often known as Configuration-as-Code), which creates a repeatable codespace configuration for all users of your project. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

Each codespace you create is hosted by {% data variables.product.prodname_dotcom %} in a Docker container, running on a virtual machine. You can choose from a selection of virtual machine types, from 2 cores, 8 GB RAM, and 32 GB storage, up to 32 cores, 64 GB RAM, and 128 GB storage.

By default, codespaces are created from an Ubuntu Linux image that includes a selection of popular languages and tools, but you can use an image based on a Linux distribution of your choice and configure it for your particular requirements. Regardless of your local operating system, your codespace will run in a Linux environment. Windows and MacOS are not supported operating systems for the remote container.

You can connect to your codespaces from your browser, from {% data variables.product.prodname_vscode %}, from the JetBrains Gateway application, or by using {% data variables.product.prodname_cli %}. When you connect, you are placed within the Docker container. You do not have access to the outer Linux virtual machine host.

![Diagram showing the relationship between a code editor and a codespace running on an Azure virtual machine.](/assets/images/help/codespaces/codespaces-diagram.png)

## Benefits of {% data variables.product.prodname_github_codespaces %}

Reasons for choosing to work in a codespace include:

- **Use a preconfigured development environment** - You can work in a development environment that has been specifically configured for the repository. It will have all of the tools, languages, and configurations you need to work on that project. Everyone who works on that repository in a codespace will have the same environment. This reduces the likelihood of environment-related problems occurring and being difficult to debug. Each repository can have settings that will give contributors a ready-to-use, fit-for-purpose environment, and the environment on your local machine will be unchanged.
- **Access the resources you need** - Your local computer may not have the processing power, or storage space, you need to work on a project. {% data variables.product.prodname_github_codespaces %} allows you to work remotely on a machine with adequate resources.
- **Work anywhere** - All you need is a web browser. You can work in a codespace on your own computer, on a friend's laptop, or on a tablet. Open your codespace and pick up from where you left off on a different device.
- **Choose your editor** - Work in the browser in the {% data variables.product.prodname_vscode_shortname %} web client, or choose from a selection of desktop-based applications.
- **Work on multiple projects** - You can use multiple codespaces to work on separate projects, or on different branches of the same repository, compartmentalizing your work to avoid changes made for one piece of work accidentally affecting something else you're working on.
- **Pair program with a teammate** - If you work on a codespace in {% data variables.product.prodname_vscode_shortname %}, you can use Live Share to work collaboratively with other people on your team. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/working-collaboratively-in-a-codespace)."
- **Publish your web app from a codespace** - Forward a port from your codespace and then share the URL, to allow teammates to try out the changes you've made to the application before you submit those changes in a pull request.
- **Try out a framework** - {% data variables.product.prodname_github_codespaces %} reduces the setup time when you want to learn a new framework. Just create a codespace from one of the [quickstart templates](https://github.com/codespaces/templates).

## Using {% data variables.product.prodname_github_codespaces %}

To begin developing using cloud-based compute resources, you can create a codespace from a template or from any branch or commit in a repository. When you create a codespace from a template, you can start from a blank template or choose a template suitable for the work you're doing.

{% data reusables.codespaces.links-to-get-started %}

### Using codespaces owned by your personal account

All personal {% data variables.product.prodname_dotcom_the_website %} accounts have a monthly quota of free use of {% data variables.product.prodname_github_codespaces %} included in the Free or Pro plan. You can get started using {% data variables.product.prodname_github_codespaces %} on your personal account without changing any settings or providing payment details.

If you create a codespace from an organization-owned repository, use of the codespace will either be charged to the organization (if the organization is configured for this), or to your personal account.

{% data reusables.codespaces.codespaces-continue-by-paying %}

{% ifversion ghec %}
{% data reusables.codespaces.codespaces-unavailable-for-emus %}
{% endif %}

### Using organization-owned codespaces

Owners of organizations on {% data variables.product.prodname_team %} and {% data variables.product.prodname_enterprise %} plans can pay for their members' and collaborators' use of {% data variables.product.prodname_github_codespaces %}. This applies to codespaces created from repositories owned by the organization. For more information, see "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/choosing-who-owns-and-pays-for-codespaces-in-your-organization)." You can set a spending limit for use of {% data variables.product.prodname_github_codespaces %} on your organization or enterprise account. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)."

If use of a codespace will be billed to an organization or enterprise, this is shown when the codespace is created. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository#creating-a-codespace-for-a-repository)." Codespaces that are billed to an organization, or its parent enterprise, are owned by the organization and can be deleted by an organization owner. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/deleting-a-codespace#deleting-codespaces-in-your-organization)."

{% data reusables.codespaces.when-you-can-create-codespaces %}

### Customizing {% data variables.product.prodname_github_codespaces %}

To customize the runtimes and tools in your codespace, you can create one or more dev container configurations for your repository. Adding dev container configurations to your repository allows you to define a choice of different development environments that are appropriate for the work people will do in your repository.

If you create a codespace from a repository without any dev container configurations, {% data variables.product.prodname_github_codespaces %} will clone your repository into an environment with the default codespace image that includes many tools, languages, and runtime environments. If you create a codespace from a template, you might start with some initial configuration on top of the default image. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)."

You can personalize aspects of your codespace environment by using a public [dotfiles](https://dotfiles.github.io/tutorials/) repository. You can use dotfiles to set shell aliases and preferences, or to install your personal preference of the tools you like to use. If you use {% data variables.product.prodname_github_codespaces %} in the browser, or in {% data variables.product.prodname_vscode %}, you can use [Settings Sync](https://code.visualstudio.com/docs/editor/settings-sync) to give your codespace editor the same settings, keyboard shortcuts, snippets, and extensions that you have set up in your local installation of {% data variables.product.prodname_vscode %}.

For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace)."

## Billing for {% data variables.product.prodname_codespaces %}

For information on pricing, storage, and usage for {% data variables.product.prodname_github_codespaces %}, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)."

{% data reusables.codespaces.codespaces-spending-limit-requirement %}

{% data reusables.codespaces.codespaces-monthly-billing %} For information on how organizations owners and billing managers can manage the spending limit for {% data variables.product.prodname_github_codespaces %} for an organization, see "[AUTOTITLE](/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)."
