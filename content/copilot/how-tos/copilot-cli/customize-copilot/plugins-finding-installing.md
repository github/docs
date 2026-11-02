---
title: Finding and installing plugins for {% data variables.copilot.copilot_cli %}
shortTitle: 'Plugins: Find and install'
allowTitleToDifferFromFilename: true
intro: 'Extend {% data variables.product.prodname_copilot_short %} by installing plugins created by the community or your organization.'
versions:
  feature: copilot
category:
  - Configure Copilot # Copilot discovery page
  - Author and optimize with Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
contentType: how-tos
docsTeamMetrics:
  - copilot-cli
---

Plugins are packages that extend the functionality of {% data variables.copilot.copilot_cli_short %}. You can install a plugin from a marketplace that you have registered with the CLI.

For an overview, see [AUTOTITLE](/copilot/concepts/customizations/plugins).

{% data reusables.copilot.copilot-cli.cli-help-note %}

## Find plugins

Plugins are collected in marketplaces. A marketplace is a registry of plugins that you can browse and install. {% data variables.copilot.copilot_cli_short %} includes the `awesome-copilot` marketplace by default.

To list registered marketplaces, enter:

```shell copy
copilot plugin marketplace list
```

In an interactive session, enter:

```copilot copy
/plugin marketplace list
```

To browse plugins in a registered marketplace, enter:

```shell copy
copilot plugin marketplace browse MARKETPLACE-NAME
```

Replace `MARKETPLACE-NAME` with the marketplace name.

In an interactive session, enter:

```copilot copy
/plugin marketplace browse MARKETPLACE-NAME
```

## Install plugins

To install a plugin from a registered marketplace, enter:

```shell copy
copilot plugin install PLUGIN-NAME@MARKETPLACE-NAME
```

For example, to install `database-data-management` from `awesome-copilot`, enter:

```shell copy
copilot plugin install database-data-management@awesome-copilot
```

In an interactive session, enter:

```copilot copy
/plugin install PLUGIN-NAME@MARKETPLACE-NAME
```

You can also install a plugin from a {% data variables.product.github %} repository, a Git URL, a repository subdirectory, or a local path. For accepted formats, see [Plugin specification for the `install` command](/copilot/reference/copilot-cli-reference/cli-plugin-reference#plugin-specification-for-install-command).

## Manage installed plugins

Use these commands to manage installed plugins:

```shell copy
copilot plugin list
copilot plugin update PLUGIN-NAME
copilot plugin uninstall PLUGIN-NAME
copilot plugin disable PLUGIN-NAME
copilot plugin enable PLUGIN-NAME
```

`disable` turns off a plugin without uninstalling it. `uninstall` removes it. For all commands and options, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference).

## Add a marketplace

To register a marketplace hosted in a {% data variables.product.github %} repository, enter:

```shell copy
copilot plugin marketplace add OWNER/REPOSITORY
```

Replace `OWNER/REPOSITORY` with the repository that hosts the marketplace. For example:

```shell copy
copilot plugin marketplace add anthropics/claude-code
```

In an interactive session, enter:

```copilot copy
/plugin marketplace add OWNER/REPOSITORY
```

You can also add a marketplace from a local directory or from a Git repository hosted elsewhere. Use the marketplace directory path for a local source:

```shell copy
copilot plugin marketplace add /PATH/TO/MARKETPLACE-DIRECTORY
```

For a Git repository hosted elsewhere, use its Git URL:

```shell copy
copilot plugin marketplace add https://gitlab.com/OWNER/REPO.git
```

For guidance on publishing a {% data variables.product.github %}-hosted marketplace, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/create-and-share-plugin-marketplaces).

## Remove a marketplace

To unregister a marketplace, enter:

```shell copy
copilot plugin marketplace remove MARKETPLACE-NAME
```

In an interactive session, enter:

```copilot copy
/plugin marketplace remove MARKETPLACE-NAME
```

When adding a marketplace, you identify it by its source. When removing it, use the marketplace name shown in the marketplace list. The command fails if plugins from the marketplace are still installed. Add `--force` to also uninstall those plugins.

## Turn off a repository default

Repository defaults are optional. To turn off a plugin enabled by repository settings, add a `false` entry to `enabledPlugins` in `.github/copilot/settings.local.json`:

```json copy
{
  "enabledPlugins": {
    "PLUGIN-NAME@MARKETPLACE-NAME": false
  }
}
```

Replace the identifier with the plugin's name and marketplace name. Save the file and start a new session. To turn the plugin back on, set the entry to `true`.

Do not commit this local settings file. Enterprise managed settings take precedence over repository defaults and local overrides. For details, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference#repository-settings-githubcopilotsettingsjson).

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating)
* [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-plugin-reference)
