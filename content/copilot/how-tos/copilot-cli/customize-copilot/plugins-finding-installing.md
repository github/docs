---
title: Finding and installing plugins for {% data variables.copilot.copilot_cli %}
shortTitle: 'Plugins: Find and install'
allowTitleToDifferFromFilename: true
intro: 'Extend {% data variables.product.prodname_copilot_short %}''s functionality by installing plugins created by the community or by your team.'
versions:
  feature: copilot
topics:
  - Copilot
category:
  - Configure Copilot
  - Author and optimize with Copilot
contentType: how-tos
---

## Introduction

Plugins are packages that extend the functionality of {% data variables.copilot.copilot_cli_short %}. You can install a plugin from a marketplace that you have registered with the CLI, from a {% data variables.product.github %} repository, or from a local path.

For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-cli-plugins).

{% data reusables.copilot.cli-help-note %}

## Finding plugins

Plugins are collected together in marketplaces. A marketplace is a registry of plugins that you can browse and install from. You can add a marketplace to your CLI configuration, which allows you to use the CLI to browse and install plugins from that marketplace—see [Adding plugin marketplaces](#adding-plugin-marketplaces). {% data variables.product.prodname_copilot_short %} comes with two marketplaces already registered by default: `copilot-plugins` and `awesome-copilot`.

Alternatively, you can search for plugin marketplaces online and then add a plugin directly from a repository.

To use the CLI to browse the plugins in one of your registered marketplaces:

1. **Check which marketplaces are currently registered.**

   In the terminal, list the available marketplaces by entering:

   ```shell copy
   copilot plugin marketplace list
   ```

   Alternatively, in an interactive session, enter:

   ```copilot copy
   /plugin marketplace list
   ```

1. **Browse the plugins in a registered marketplace.**

   From the list of registered marketplaces, copy the name of the marketplace you want to browse—for example, `awesome-copilot`—then enter the following command, replacing `MARKETPLACE-NAME`:

   ```shell copy
   copilot plugin marketplace browse MARKETPLACE-NAME
   
   ```

## Installing plugins

Typically, you'll install a plugin from one of your registered marketplaces. However, you can also install a plugin directly from a {% data variables.product.github %} repository, or from a local path.

For information on how to register additional marketplaces, see [Adding and removing plugin marketplaces](#adding-and-removing-plugin-marketplaces).

### Install from a registered marketplace

```shell copy
copilot plugin install PLUGIN-NAME@MARKETPLACE-NAME
```

For example, to install the `database-data-management` plugin from the `awesome-copilot` marketplace enter:

```shell copy
copilot plugin install database-data-management@awesome-copilot
```

Alternatively, in an interactive session, enter:

```copilot copy
/plugin install PLUGIN-NAME@MARKETPLACE-NAME
```

### Install from {% data variables.product.github %} directly

You can install a plugin directly from a {% data variables.product.github %} repository, without first adding a marketplace to your list of registered marketplaces.

```shell copy
copilot plugin install OWNER/REPO:PATH/TO/PLUGIN
```

For example,

```shell copy
copilot plugin install github/awesome-copilot:plugins/security-best-practices
```

### Install from a local path

```shell copy
copilot plugin install ./PATH/TO/PLUGIN
```

## Managing installed plugins

```bash
copilot plugin list                    # View installed plugins
copilot plugin update PLUGIN-NAME      # Update plugin to latest version
copilot plugin uninstall PLUGIN-NAME   # Remove plugin completely
```

## Where plugins are stored

Plugins installed from a marketplace are stored under: `~/.copilot/installed-plugins/MARKETPLACE/PLUGIN-NAME/`. Plugins installed directly (for example, from a local path) are stored under: `~/.copilot/installed-plugins/_direct/PLUGIN-NAME/`.

## Adding plugin marketplaces

To add a marketplace to the list of registered marketplaces, enter the following command in the terminal:

```shell copy
copilot plugin marketplace add OWNER/REPO
```

Where OWNER/REPO identifies a repository on {% data variables.product.prodname_dotcom_the_website %} that has been configured as a CLI plugin marketplace.

For example to add the `claude-code-plugins` marketplace, hosted at https://github.com/anthropics/claude-code, enter:

```shell copy
copilot plugin marketplace add anthropics/claude-code
```

Alternatively, in an interactive session, enter:

```copilot copy
/plugin marketplace add OWNER/REPO
```

If a marketplace is located on the local file system, instead of on {% data variables.product.github %}, use the path to the marketplace directory instead of OWNER/REPO. For example:

```shell copy
copilot plugin marketplace add /PATH/TO/MARKETPLACE-DIRECTORY
```

If a marketplace is located in a Git repository that is not hosted on {% data variables.product.github %}, use the URL of the Git repository. For example:

```shell copy
copilot plugin marketplace add https://gitlab.example.com/team/plugins.git
```

## Removing plugin marketplaces

To remove a marketplace from the CLI enter:

```shell copy
copilot plugin marketplace remove MARKETPLACE-NAME
```

Or, in an interactive session:

```copilot copy
/plugin marketplace remove MARKETPLACE-NAME
```

> [!NOTE]
> When adding a marketplace you reference the marketplace using the OWNER/REPO of the {% data variables.product.github %} repository that has been configured as a marketplace. When removing a marketplace, however, you reference the name of the marketplace as it appears in your list of registered marketplaces.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-creating)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/customize-copilot/plugins-marketplace)
