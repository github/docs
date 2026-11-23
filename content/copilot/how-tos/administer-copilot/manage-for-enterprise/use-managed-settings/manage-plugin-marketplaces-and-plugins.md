---
title: Managing plugin marketplaces and plugins with enterprise-managed settings
shortTitle: Manage plugins and marketplaces
allowTitleToDifferFromFilename: true
intro: Choose where enterprise members get customizations and distribute approved tools through shared plugin marketplaces.
permissions: Enterprise owners
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
  - Manage Copilot for a team
  - Build agents at enterprise scale
---

As an enterprise administrator, you can require selected {% data variables.product.prodname_copilot_short %} customizations to come from eligible plugins or managed settings. This prevents users from supplying those customizations through standalone user or project configuration. Combine this with marketplace restrictions to distribute approved MCP tools and executable canvases through a shared plugin library without disabling those capabilities entirely.

Use the `{% data variables.copilot.managed_setting_file %}` file to configure these controls, make plugin marketplaces available, and require or block specific plugins. For an overview of enterprise managed settings, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).

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

## Restrict standalone customizations

Approving a marketplace alone does not prevent users from configuring standalone customizations outside that marketplace. Use `strictPluginOnlyCustomization` to require selected categories to come from eligible plugins or managed settings. Combine it with `strictKnownMarketplaces` to restrict eligible marketplace sources.

To distribute an approved library while restricting standalone MCP servers and executable {% data variables.product.prodname_copilot_short %} extensions:

1. Add the following configuration to your `{% data variables.copilot.managed_setting_file %}` file, preserving any other settings you need:

   ```json copy
   {
     "extraKnownMarketplaces": {
       "engineering-tools": {
         "source": {
           "source": "github",
           "repo": "ORG/REPOSITORY"
         }
       }
     },
     "strictKnownMarketplaces": [
       {
         "source": "github",
         "repo": "ORG/REPOSITORY"
       }
     ],
     "enabledPlugins": {
       "REQUIRED-PLUGIN@engineering-tools": true,
       "BLOCKED-PLUGIN@engineering-tools": false
     },
     "strictPluginOnlyCustomization": ["mcp", "extensions"]
   }
   ```

1. Replace the example values:

   * Replace both instances of `ORG/REPOSITORY` with your marketplace repository.
   * Replace `engineering-tools` with the marketplace's name.
   * Replace `REQUIRED-PLUGIN` and `BLOCKED-PLUGIN` with plugin names from that marketplace.
   * Remove either plugin entry if you do not need to require or block a specific plugin.

1. Deploy the settings and verify the behavior in the supported clients your enterprise uses. Confirm that an allowed plugin's customizations load and that equivalent standalone MCP servers and executable extensions do not.

In this example, `extraKnownMarketplaces` supplies the marketplace definition. The `strictKnownMarketplaces` key restricts eligible marketplace sources, and `enabledPlugins` requires or blocks individual plugins. Other eligible plugins from the allowed marketplace remain available without being required by the enterprise.

The `strictPluginOnlyCustomization` array blocks standalone MCP servers and executable extensions, including canvas providers. Customizations supplied by eligible plugins or managed settings remain eligible, subject to other policies. Skills, custom agents, and hooks remain unrestricted by this key. To restrict all supported categories, use `true` instead of the array.

For category names, policy composition, and the {% data variables.product.prodname_vscode_shortname %} session scope, see [`strictPluginOnlyCustomization`](/copilot/reference/enterprise-administrators/enterprise-managed-settings#strictpluginonlycustomization).

To let a designated enterprise team develop standalone MCP servers while retaining restrictions for other users, see [Allow an MCP-development team to use standalone servers](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/override-settings-for-teams#allow-an-mcp-development-team-to-use-standalone-servers).

An approved marketplace is a distribution control, not a guarantee that its plugins are safe. Continue reviewing plugin code and applying appropriate MCP server, permission, and sandbox policies.

## Move MCP distribution from a registry to a marketplace

If your enterprise already uses a plugin marketplace, you can distribute approved MCP server configurations and skills together instead of maintaining a separate MCP registry. Plugins package the configuration needed to connect to or start a server. They do not replace hosting for remote MCP servers or remove authentication requirements.

Keep the **MCP servers in {% data variables.product.prodname_copilot_short %}** policy enabled. Plugin settings cannot enable MCP when that policy disables it.

1. Check support in every client and session type you intend to migrate. Each must support plugin-provided MCP servers, marketplace restrictions, and plugin-only restrictions. Keep existing controls for clients that do not support the replacement.
1. Package your approved MCP server configurations in plugins and add them to your marketplace. You can include related skills in the same plugin. For supported formats and component locations, see [AUTOTITLE](/copilot/reference/plugin-and-marketplace-reference).
1. Apply the configuration in [Restrict standalone customizations](#restrict-standalone-customizations). Use `extraKnownMarketplaces` to supply the marketplace and `strictKnownMarketplaces` to restrict eligible sources. Include `mcp` in `strictPluginOnlyCustomization`, preserving any other categories you already restrict. Use `enabledPlugins` if you need to require specific plugins.
1. Verify the replacement in each affected client and session type:

   * Confirm that members can install an allowed plugin and use its MCP tools.
   * Confirm that an equivalent standalone MCP configuration is blocked.
   * Confirm that a disallowed marketplace cannot supply the plugin.

   Test with a server already allowed by your registry. This ensures that registry enforcement does not hide a missing plugin-only restriction.

1. Wait until the replacement controls are active for all affected users. Then set **Restrict MCP access to registry servers** to **Allow all** and repeat the checks. Optionally clear **MCP Registry URL** if you no longer use it for discovery. These changes remove the registry restriction, not the managed plugin restrictions. For the policy controls, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-mcp-usage/restrict-based-on-registry).

Keep any `allowedMcpServers` and `deniedMcpServers` rules you still need. Plugin-provided servers must satisfy those rules too. Plugin-only restrictions also permit managed MCP sources and do not exclude built-in default servers. They do not enforce an absolute "only servers from this marketplace" rule.

## Making plugins optional

Enterprise-managed settings can only require or block plugins. For project-specific defaults, use the repository's `.github/copilot/settings.json` file. Contributors can override those defaults locally where supported, subject to managed policy. See [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference#repository-settings-githubcopilotsettingsjson).

## Monitor plugin usage

The usage metrics API provides {% data variables.copilot.copilot_cli_short %} customization activity in enterprise and organization reports. The `totals_by_plugin` array counts skill invocations associated with a plugin, not all plugin activity or the number of users who installed it.

Each `totals_by_*` array includes up to five entries with the most activity. Customer-defined identifiers can be grouped under `other` or `custom`. These event counts do not measure exact adoption, and an absent entry does not mean zero usage. Do not add plugin and skill counts together, because plugin interactions are already included in skill totals.

For field definitions and access requirements, see [Customization fields](/copilot/reference/copilot-usage-metrics/copilot-usage-metrics#customization-fields-api-only).
