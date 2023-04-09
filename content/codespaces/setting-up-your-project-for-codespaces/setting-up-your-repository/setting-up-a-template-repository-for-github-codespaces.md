---
title: Setting up a template repository for GitHub Codespaces
shortTitle: Set up a template repo
intro: 'You can help people get started with a project by setting up a template repository for use with {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Set up
redirect_from:
  - /codespaces/setting-up-your-project-for-codespaces/setting-up-a-template-repository-for-github-codespaces
---

## Introduction

By setting up a template repository, you can help people get started with your framework, library, or other project in {% data variables.product.prodname_github_codespaces %}. Users will be able to start working with your template files immediately in a cloud-based development environment, without having to worry about cloning your repository or installing tools or other dependencies. With some configuration, you will be able to set users up in a codespace with important files already open for editing, and with an application already running in a preview browser tab within the {% data variables.product.prodname_vscode_shortname %} web editor.

Anyone with read access to your template repository can create a codespace from the repository's page on {% data variables.product.product_name %}. You can turn any existing repository into a template, and you do not have to change any settings to allow users to create a codespace from your template repository. For more information on turning a repository into a template, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-template-repository)."

You can provide a link in the format `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` to take users directly to a "Create a new codespace" page for your template.

![Screenshot of the "Create a new codespace" page for a template repository called "Basic React website," with a "Use this template" button.](/assets/images/help/codespaces/create-a-new-codespace-page.png)

For example, you could provide this link in a tutorial for getting started with your framework. In your link, replace `OWNER/TEMPLATE-REPO` with the name of your template repository, for example `monalisa/octo-template`.

When someone creates a codespace from your template, the contents of your template repository will be cloned into their codespace. When the user is ready, they will be able to publish their work to a new repository on {% data variables.product.product_name %} belonging to their personal account. Any usage charges for the codespace will be billed to the user who created it. For more information, see "[AUTOTITLE](/codespaces/developing-in-codespaces/creating-a-codespace-from-a-template)."

## Describe your template

If you don't have one, create a README for your template repository to describe the purpose of your template and how to get started with it. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)."

A short description of your template is displayed on the "Create a new codespace" page that users land on when they follow the `https://github.com/codespaces/new?template_repository=OWNER/TEMPLATE-REPO` link. This description is taken from the **Description** field that you can set when you create a repository. You can edit this description at any time by navigating to the repository's page and clicking **{% octicon "gear" aria-label="The Settings gear" %}** next to the **About** section on the right of the page.

![Screenshot of the "About" section on a repository page. The settings button (a gear symbol) is highlighted with a dark orange outline.](/assets/images/help/codespaces/repository-settings-icon.png)

## Add starter files

Template repositories typically contain starter files with boilerplate code so users can quickly get started with a library, framework, or other technology.

For guidance on the kinds of files to include, you can look at the starter files included in the official {% data variables.product.company_short %} templates for {% data variables.product.prodname_github_codespaces %}, as follows.

{% data reusables.codespaces.your-codespaces-procedure-step %}
{% data reusables.codespaces.view-all-templates-step %}
1. To view the template repository that contains the files for the template, click the name of the template.

   ![Screenshot of the "Explore quick start templates" section of the codespaces page. The names of the templates are highlighted with orange outlines.](/assets/images/help/codespaces/react-template-name.png)

## Configure the dev container

You can add dev container configuration files to your template repository to customize the development environment for people using your template with {% data variables.product.prodname_github_codespaces %}. You can choose from a list of predefined configuration settings in {% data variables.product.prodname_vscode %}, or you can create a custom configuration by writing your own `devcontainer.json` file. If you don't add configuration files, the default container image will be used. For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers)" and "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration)."

{% note %}

**Note:** {% data reusables.codespaces.configuration-choice-templates %}

{% endnote %}

You should configure your dev container with the tools and customization to give users the best experience with your template. For example, in your `devcontainer.json` file:
- You can use the `openFiles` property to define a list of files to be opened automatically in the {% data variables.product.prodname_vscode_shortname %} web client when a codespace is created from your template.
- If your template contains files for a web application, you can make the application run automatically in the user's codespace. You can do this by using the `postAttachCommand` property to run a script that starts the application on a local server as soon as the {% data variables.product.prodname_vscode_shortname %} web client connects to the codespace, and by setting the `onAutoForward` property of a port to `openPreview` to display the application running on that port in a simple browser embedded in the {% data variables.product.prodname_vscode_shortname %} web client.

The following configuration settings for a React template will open the `app.js` file in the user's editor, run `npm start` (defined in a `package.json` file) to start a local server, and forward port `3000` to a preview browser tab in the codespace.

```JSON
{
    "postAttachCommand": {
      "server": "npm start"
    },

    "portsAttributes": {
      "3000": {
        "label": "Application",
        "onAutoForward": "openPreview"
      }
    },

    "customizations": {
      "codespaces": {
        "openFiles": ["src/App.js"]
      }
    }
}
```
For more information, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/configuring-dev-containers/automatically-opening-files-in-the-codespaces-for-a-repository)" and the [dev containers specification](https://containers.dev/implementors/json_reference/#general-properties) on the Development Containers website.
