---
title: Overriding enterprise-managed settings for enterprise teams
shortTitle: Enterprise team overrides
allowTitleToDifferFromFilename: true
intro: Avoid overly restrictive configuration by overriding default settings for specific enterprise teams.
permissions: Enterprise owners
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
  - Manage Copilot for a team
---

With a server-managed deployment, you can configure your enterprise's `{% data variables.copilot.managed_setting_file %}` file to apply different governance settings to groups of users based on their enterprise team membership. The enterprise defines all settings in a central place, and enterprise team membership determines which users receive a given set of values. **If you haven't created the `{% data variables.copilot.managed_setting_file %}` file yet, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).**

To let enterprise teams replace an enterprise default, mark the key as `overridable` in `{% data variables.copilot.managed_setting_file %}`. An overridable key uses the enterprise team's value when set, or falls back to your enterprise default when the enterprise team leaves it unset.

## Supported keys

The `{ "overridable": <VALUE> }` syntax applies to the `model`, `autoTier`,`fusionTier`, `permissions.disableBypassPermissionsMode`, `permissions.deny`, `permissions.ask`, `permissions.allow`, `allowedMcpServers`, `deniedMcpServers`, `extraKnownMarketplaces`, `strictKnownMarketplaces`, `strictPluginOnlyCustomization`, and `sandbox` keys.

`enabledPlugins` works additively. The enterprise `{% data variables.copilot.managed_setting_file %}` sets a baseline, and an enterprise team file can add more plugins on top of it.

For a full description of these keys and their syntax, see [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings).

## Overriding settings for specific enterprise teams

These instructions apply to **server-managed deployments** (a `{% data variables.copilot.managed_setting_file %}` hosted on {% data variables.product.github %}). Other deployment methods do not support enterprise team overrides, and would require you to deploy different settings to different groups of users via your MDM platform.

You will use `copilot/{% data variables.copilot.team_mappings_file %}` and the `copilot/{% data variables.copilot.team_settings_directory %}` directory to configure which enterprise teams should use settings that differ from your default `copilot/{% data variables.copilot.managed_setting_file %}` values.

{% data reusables.copilot.policy.enterprise-team-overrides-structure %}

## Steps

1. In your enterprise's `copilot/{% data variables.copilot.managed_setting_file %}` file, mark each key you want to make eligible for override using the `{ "overridable": <VALUE> }` syntax. The `json` files you map to enterprise teams can only send different values for keys you mark overridable.

   An `overridable` value you provide in `{% data variables.copilot.managed_setting_file %}` is the default when enterprise team files do not declare a different value for a given key.
   
   For example, to defer `model`, `disableBypassPermissionsMode`, and `allowedMcpServers` to enterprise teams:

    ```json
    {
      "model": { "overridable": "auto" },
      "permissions": {
        "disableBypassPermissionsMode": { "overridable": "disable" }
      },
      "allowedMcpServers": {
        "overridable": [
          { "serverUrl": "https://mcp.company.com/*" }
        ]
      }
    }
    ```

1. In your enterprise's `.github-private` repository, create `copilot/{% data variables.copilot.team_mappings_file %}`. Map each enterprise team settings file to one or more enterprise team slugs. The key is the settings file name, and the value is an array of enterprise team slugs, so you can apply one file across multiple enterprise teams.

    ```json
    {
      "devs.json": ["developers-all", "finops-dev"],
      "ai-users.json": ["ai-baseline-trained"],
      "frontier.json": ["ai-pioneers"]
    }
    ```

1. Create the enterprise team settings file under `copilot/{% data variables.copilot.team_settings_directory %}`. You can include any keys you marked as overridable, more restrictive values for `autoTier`, plus the additive key `enabledPlugins`. Every other key stays governed by your enterprise default.

   ```json
   {
     "model": "unmanaged",
     "permissions": {
       "disableBypassPermissionsMode": "unmanaged"
     },
     "allowedMcpServers": [
       { "serverUrl": "https://team-specific-mcp.company.com/*" }
     ]
   }
   ```

1. Commit and push your changes to the default branch.

{% data variables.product.prodname_dotcom %} evaluates enterprise team membership and applies matching settings for each person. If a user belongs to multiple enterprise teams, their enterprise team files are combined using the least restrictive value for most keys, then applied beneath the enterprise settings, where platform decisions always win.

For `strictPluginOnlyCustomization`, restrictions from matching enterprise teams are combined instead. A category restricted by any matching team stays restricted.

## Allow an MCP-development team to use standalone servers

You can keep most developers on plugin-provided MCP servers while allowing an enterprise team to develop and test standalone MCP configurations. Use an overridable enterprise default and a team setting that removes only the `mcp` restriction.

This example keeps standalone executable extensions restricted for everyone. It does not change marketplace restrictions, MCP enablement, server allowlists and denylists, or stricter managed-only policies. Device-managed restrictions also remain in effect.

1. Create an enterprise team for MCP developers. In this example, its slug is `mcp-developers`. Add the people who need to develop and test MCP servers to this team.
1. In `copilot/{% data variables.copilot.managed_setting_file %}`, make the source restriction overridable:

   ```json
   {
     "strictPluginOnlyCustomization": {
       "overridable": ["mcp", "extensions"]
     }
   }
   ```

   Preserve your other managed settings, including the marketplace restrictions that define approved plugin sources. Keep any additional categories you already restrict in both the enterprise default and the team value below.

1. In `copilot/{% data variables.copilot.team_mappings_file %}`, map a settings file to the enterprise team:

   ```json
   {
     "mcp-development.json": ["mcp-developers"]
   }
   ```

   Keep any existing mappings. Replace `mcp-developers` with your enterprise team's slug.

1. Create `copilot/{% data variables.copilot.team_settings_directory %}mcp-development.json` with the replacement value:

   ```json
   {
     "strictPluginOnlyCustomization": ["extensions"]
   }
   ```

   The team value replaces the entire overridable default. Include every category that should remain restricted. Setting the value to `false` removes all restrictions from this key at this layer.

1. Commit and push the files, then verify the effective behavior in supported clients for a team member and a non-member:

   * Confirm that the team member can use standalone MCP configurations if other policies permit them.
   * Confirm that the non-member cannot use the same standalone MCP configurations.
   * Confirm that standalone executable extensions remain blocked for both users.

   A user without an applicable replacement retains the enterprise default.

If a developer also belongs to a team whose settings restrict `mcp`, that restriction still applies. To permit standalone MCP development, ensure that no other applicable team or managed policy imposes the restriction.
