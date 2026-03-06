---
title: Creating a plugin marketplace for {% data variables.copilot.copilot_cli %}
shortTitle: 'Plugins: Create a marketplace'
allowTitleToDifferFromFilename: true
intro: 'You can make CLI plugins that you''ve created easy to install by adding them to a marketplace.'
versions:
  feature: copilot
category:
  - Configure Copilot # Copilot discovery page
  - Author and optimize with Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
contentType: how-tos
---

## Introduction

Plugin marketplaces are registries of plugins for {% data variables.copilot.copilot_cli_short %}. They can be located on {% data variables.product.prodname_dotcom_the_website %}, in any other online Git hosting service, or on your local or shared file system. By creating a marketplace and adding your plugins to it, you can make it easy for other users to find and install your plugins.

{% data reusables.copilot.cli-help-note %}

## Prerequisite

You have created one or more plugins that you want to share. See [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating).

## Creating a plugin marketplace

1. Create a `marketplace.json` file that provides metadata about your marketplace and lists the plugins that are available in the marketplace.

   > [!NOTE]
   > The `marketplace.json` file is the only required component of a plugin marketplace. Adding it to a repository allows {% data variables.copilot.copilot_cli_short %} to recognize the repository as a plugin marketplace, and provides an easy way for users to install plugins.

   **Example `marketplace.json` file**

   {% data reusables.copilot.cli-example-marketplace-file %}

   Online examples:

   * [marketplace.json](https://github.com/github/copilot-plugins/blob/main/.github/plugin/marketplace.json) in the [github/copilot-plugins](https://github.com/github/copilot-plugins) repository.
   * [marketplace.json](https://github.com/github/awesome-copilot/blob/main/.github/plugin/marketplace.json) in the [github/awesome-copilot](https://github.com/github/awesome-copilot) repository.

   The top-level `plugins` field is an array of plugin objects, each containing metadata about a plugin, including its name, description, version, and source.

   {% data reusables.copilot.cli-path-to-plugins %}

   For details of the full set of fields you can include in this file, see [AUTOTITLE](/copilot/reference/cli-plugin-reference#marketplacejson).

1. Add the `marketplace.json` file to the `.github/plugin` directory of a repository.

   {% data reusables.copilot.cli-claude-plugin-dir %}

1. For each plugin defined in the `marketplace.json` file, add the relevant plugin directory to the appropriate location in the repository.

   For example, if your `marketplace.json` file includes a plugin with `"source": "./plugins/frontend-design"`, add the `frontend-design` plugin directory to the `plugins` directory at the root of your repository.

1. Share the repository with your intended users, and provide them with instructions to add the marketplace to {% data variables.copilot.copilot_cli_short %}. For example, if your repository is hosted on {% data variables.product.github %} in the `octo-org/octo-repo` repository, instruct users to enter:

   ```shell copy
   copilot plugin marketplace add octo-org/octo-repo
   ```

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing)
* [AUTOTITLE](/copilot/reference/cli-plugin-reference)
