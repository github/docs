---
title: Managing plugin marketplaces and plugins with enterprise-managed settings
shortTitle: Manage plugins and marketplaces
allowTitleToDifferFromFilename: true
intro: Control which plugin marketplaces are available to enterprise members and which plugins are required or blocked.
permissions: Enterprise owners
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
  - Manage Copilot for a team
docsTeamMetrics:
  - ai-governance
---

Use the `{% data variables.copilot.managed_setting_file %}` file to make plugin marketplaces available and require or block specific plugins. For an overview of enterprise managed settings, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).

Managed settings always take precedence over repository defaults and member preferences.

## Add marketplaces for enterprise members

Use the `extraKnownMarketplaces` key to make additional marketplaces available. Each entry has a marketplace name and a `source` object. For example:

```json copy
{
  "extraKnownMarketplaces": {
    "engineering-tools": {
      "source": {
        "source": "github",
        "repo": "ORG/REPOSITORY"
      }
    }
  }
}
```

Replace `ORG/REPOSITORY` with the repository that contains the marketplace. The marketplace name in this setting must match the `name` in its `marketplace.json` file.

Members need read access on {% data variables.product.github %} to each marketplace repository. For a private marketplace, host it in an organization that its users belong to.

Optionally, configure additional properties:

* To control whether clients refresh a marketplace and update its installed plugins, configure the optional `autoUpdate` property.
* To restrict marketplace installation to listed sources, also use `strictKnownMarketplaces`. This also disables the built-in marketplaces.

For supported source behavior, configuration details, and client support, see [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings).

## Require or block specific plugins

Use `enabledPlugins` to require or block specific plugins. Each key uses the format `PLUGIN-NAME@MARKETPLACE-NAME`.

* Set the value to `true` to require the plugin to be enabled.
* Set the value to `false` to require the plugin to be disabled.

For example:

```json copy
{
  "enabledPlugins": {
    "PLUGIN-NAME@MARKETPLACE-NAME": true,
    "ANOTHER-PLUGIN@MARKETPLACE-NAME": false
  }
}
```

The marketplace name is the `name` in the marketplace's `marketplace.json` file. Use a stable, kebab-case name because plugin identifiers use it.

You can require or block additional plugins for an enterprise team through `{% data variables.copilot.team_mappings_file %}`. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/override-settings-for-teams).

## Making plugins optional

Enterprise-managed settings can only require or block plugins. For project-specific defaults, use the repository's `.github/copilot/settings.json` file. Contributors can override those defaults locally where supported, subject to managed policy. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference#repository-settings-githubcopilotsettingsjson).

## Monitor plugin usage

The usage metrics API provides {% data variables.copilot.copilot_cli_short %} customization activity in enterprise and organization reports. The `totals_by_plugin` array counts skill invocations associated with a plugin, not all plugin activity or the number of users who installed it.

Each `totals_by_*` array includes up to five entries with the most activity. Customer-defined identifiers can be grouped under `other` or `custom`. These event counts do not measure exact adoption, and an absent entry does not mean zero usage. Do not add plugin and skill counts together, because plugin interactions are already included in skill totals.

For field definitions and access requirements, see [{% data variables.copilot.copilot_cli_short %} customization fields](/copilot/reference/copilot-usage-metrics/copilot-usage-metrics#copilot-cli-customization-fields-api-only).
