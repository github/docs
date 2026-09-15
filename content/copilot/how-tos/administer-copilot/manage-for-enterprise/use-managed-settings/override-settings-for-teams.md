---
title: Overriding enterprise-managed settings for teams
shortTitle: Override settings for teams
allowTitleToDifferFromFilename: true
intro: Avoid overly restrictive configuration by overriding default settings for specific teams.
permissions: Enterprise owners
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
  - Manage Copilot for a team
---

With a server-managed deployment, you can configure your enterprise's `{% data variables.copilot.managed_setting_file %}` file to apply different governance settings to groups of users based on their enterprise team membership. The enterprise defines all settings in a central place, and team membership determines which users receive a given set of values. **If you haven't created the `{% data variables.copilot.managed_setting_file %}` file yet, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).**

To make a key eligible for team overrides, you will mark it as `overridable` in `{% data variables.copilot.managed_setting_file %}`. An overridable key uses the team's value when set, or falls back to your enterprise default when the team leaves it unset.

## Supported keys

The `{ "overridable": <VALUE> }` syntax applies to the `model`, `permissions.disableBypassPermissionsMode`, `permissions.deny`, `permissions.ask`, `permissions.allow`, `allowedMcpServers`, and `deniedMcpServers` keys.

`enabledPlugins` and `extraKnownMarketplaces` work additively. The enterprise `{% data variables.copilot.managed_setting_file %}` sets a baseline, and an enterprise team file can add more plugins and marketplaces on top of it.

For a full description of these keys and their syntax, see [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings).

## Overriding settings for specific teams

These instructions apply to **server-managed deployments** (a `{% data variables.copilot.managed_setting_file %}` hosted on {% data variables.product.github %}). Other deployment methods do not support enterprise team overrides, and would require you to deploy different settings to different groups of users via your MDM platform.

You will use `copilot/{% data variables.copilot.team_mappings_file %}` and the `copilot/{% data variables.copilot.team_settings_directory %}` directory to configure which enterprise teams should use settings that differ from your default `copilot/{% data variables.copilot.managed_setting_file %}` values.

{% data reusables.copilot.policy.enterprise-team-overrides-structure %}

## Steps

1. In your enterprise's `copilot/{% data variables.copilot.managed_setting_file %}` file, mark each key you want to make eligible for override using the `{ "overridable": <VALUE> }` syntax. The `json` files you map to teams can only send different values for keys you mark overridable.

   An `overridable` value you provide in `{% data variables.copilot.managed_setting_file %}` is the default when team files do not declare a different value for a given key.
   
   For example, to defer `model`, `disableBypassPermissionsMode`, and `allowedMcpServers` to teams:

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

1. In your enterprise's `.github-private` repository, create `copilot/{% data variables.copilot.team_mappings_file %}`. Map each team settings file to one or more enterprise team slugs. The key is the settings file name, and the value is an array of team slugs, so you can apply one file across multiple teams.

    ```json
    {
      "devs.json": ["developers-all", "finops-dev"],
      "ai-users.json": ["ai-baseline-trained"],
      "frontier.json": ["ai-pioneers"]
    }
    ```

1. Create the team settings file under `copilot/{% data variables.copilot.team_settings_directory %}`. You can include any keys you marked as overridable, plus the additive keys `enabledPlugins` and `extraKnownMarketplaces`. Every other key stays governed by your enterprise default.

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

{% data variables.product.prodname_dotcom %} evaluates enterprise team membership and applies matching settings for each person. If a user belongs to multiple teams, their team files are combined using the least restrictive value for each key, then applied beneath the enterprise settings, where platform decisions always win.
