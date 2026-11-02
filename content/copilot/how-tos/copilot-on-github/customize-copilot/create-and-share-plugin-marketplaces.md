---
title: Creating and sharing a plugin marketplace on GitHub
shortTitle: Create a plugin marketplace
allowTitleToDifferFromFilename: true
intro: Publish a {% data variables.product.github %}-hosted marketplace so people can discover and install plugins in supported {% data variables.product.prodname_copilot_short %} clients.
versions:
  feature: copilot
category:
  - Configure Copilot
  - Author and optimize with Copilot
  - Configure Copilot CLI # Copilot CLI bespoke page
contentType: how-tos
redirect_from:
  - /copilot/how-tos/copilot-cli/customize-copilot/plugins-marketplace
---

Marketplaces distribute plugins for supported {% data variables.product.prodname_copilot_short %} clients. They can be hosted in a {% data variables.product.github %} repository, another Git host, or a local directory. This article describes how to publish a marketplace in a {% data variables.product.github %} repository. For an overview, see [AUTOTITLE](/copilot/concepts/customizations/plugins).

## Before you begin

* Create one or more plugins that work in the clients where people will use them. For {% data variables.copilot.copilot_cli %} format and authoring guidance, see [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating).
* For {% data variables.product.prodname_vscode %} format and authoring guidance, see the [Agent Plugins authoring reference](https://code.visualstudio.com/docs/agents/reference/agent-plugin-reference).
* Choose a stable, kebab-case marketplace name, such as `engineering-tools`. Plugin identifiers include this name, so changing it changes the identifier people use in settings and commands.

## Create the marketplace repository

Create a repository for the marketplace. You can start with the [plugin marketplace starter template](https://github.com/github/plugin-marketplace-starter?utm_source=create-share-plugin-marketplace-cta-1&utm_medium=docs&utm_campaign=universe-2026) and follow its README to install its development dependencies and set the marketplace name, or create the files yourself. If you use the template, remove any example plugins you do not want to share.

1. Add a `marketplace.json` catalog file to `.github/plugin/`.
1. Add each plugin directory at the path listed by its `source` field. For example, if the source is `./plugins/frontend-design`, add the `frontend-design` directory under `plugins/` in the repository.
1. Add a stable, kebab-case value for the marketplace's `name`.
1. Update `.github/CODEOWNERS`, contribution instructions, and issue and pull request templates to match how you want to maintain the marketplace.
1. If you use the starter template, follow its README to run `npm run verify`. The template describes this command as checking the catalog, manifests, tests, and evaluation coverage. Keep its `.github/workflows/validate.yml` workflow enabled to run model-free checks on pull requests and pushes. Check the current README and workflow because template checks can change.

The `marketplace.json` file is the required marketplace catalog. It provides marketplace metadata and lists plugins. The top-level `plugins` field is an array of plugin entries with metadata such as each plugin's name, description, version, and source. For a sample catalog, see [`marketplace.json` in `github/awesome-copilot`](https://github.com/github/awesome-copilot/blob/main/.github/plugin/marketplace.json?utm_source=create-share-plugin-marketplace-awesome-demo&utm_medium=docs&utm_campaign=universe-2026).

For supported catalog fields and other marketplace file locations, see [AUTOTITLE](/copilot/reference/plugin-and-marketplace-reference#marketplace-catalog).

## Review and maintain the marketplace

Review plugin changes as shared agent infrastructure. Test the plugin behavior before publishing updates and keep evaluations with the context they are intended to assess. Review catalog entries and plugin sources when you update the repository.

## Share the marketplace

People who add the marketplace or receive its plugins need read access to the repository and must be signed in to {% data variables.product.github %} in their client. For a private marketplace, host it in your organization and grant access to its users. Organization membership alone does not guarantee access to a private repository.

After publishing the repository, share its URL with people who need to add it to a client. You can also make plugins available through shared settings:

* For personal use, add the marketplace in the client where you want to use its plugins. For client instructions, see [AUTOTITLE](/copilot/how-tos/copilot-in-your-ide/customize-copilot/extend-copilot-with-tools-and-context/using-plugins), [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-finding-installing), or [AUTOTITLE](/copilot/how-tos/github-copilot-app/customize-github-copilot-app).
* For a repository, declare marketplace and plugin defaults in `.github/copilot/settings.json`. Contributors can override repository defaults locally in supported surfaces. {% data variables.copilot.copilot_in_the_cloud_short %} uses these repository settings and has no local override. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference#repository-settings-githubcopilotsettingsjson).
* For enterprise requirements, use managed settings to make marketplaces available and require or block plugins. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/manage-plugin-marketplaces-and-plugins).

## Further reading

* [AUTOTITLE](/copilot/concepts/customizations/plugins)
