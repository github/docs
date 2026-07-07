---
title: Configuring enterprise managed settings
shortTitle: Enterprise managed settings
allowTitleToDifferFromFilename: true
intro: Configure enterprise managed settings by defining a `{% data variables.copilot.managed_setting_file %}` file in your enterprise's `.github-private` repository to centrally control {% data variables.product.prodname_copilot_short %} client configurations.
permissions: Enterprise owners
redirect_from:
  - /copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/disable-automatic-commands
  - /copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-plugin-standards
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
  - Manage Copilot for a team
---

With enterprise managed settings, enterprise owners can centrally define and distribute configuration settings to {% data variables.copilot.copilot_cli_short %} and {% data variables.product.prodname_vscode_shortname %} for users on your enterprise's {% data variables.product.prodname_copilot_short %} plan, ensuring every member works within the same guardrails. Additional client support will follow. The `{% data variables.copilot.managed_setting_file %}` takes precedence over file-based configuration set by users in their clients for the supported keys.

## Consolidated schema reference

The `{% data variables.copilot.managed_setting_file %}` file supports the following top-level properties. You can include any combination of these properties based on which settings you want to enforce.

```json copy
{
  "extraKnownMarketplaces": {
    "agent-skills": {
      "source": {
        "source": "github",
        "repo": "OWNER/REPO"
      }
    }
  },
  "strictKnownMarketplaces": [
    {
      "source": "github",
      "repo": "OWNER/REPO"
    }
  ],
  "enabledPlugins": {
    "PLUGIN-NAME@MARKETPLACE-NAME": true
  },
  "permissions": {
    "disableBypassPermissionsMode": "disable",
    "model": "auto"
  }
}
```

* `extraKnownMarketplaces`: Defines additional plugin marketplaces available to users. Each entry is a named marketplace object containing a `source` property that specifies the provider (`"github"`) and the repository in `OWNER/REPO` format.
* `strictKnownMarketplaces`: Restricts plugin installation to only the marketplaces explicitly defined by the enterprise. Each entry is a marketplace object containing a `source` property. The `source` specifies the provider as either `"github"` with a `repo` in `OWNER/REPO` format, or `"git"` with a `url` pointing to a git repository.
* `enabledPlugins`: Defines plugins that are automatically installed for all enterprise users. Each entry uses the format `PLUGIN-NAME@MARKETPLACE-NAME` as the key, with a boolean value of `true` to enable the plugin.
* `permissions`: Controls whether users can bypass command approval.
  * Set `model` to `"auto"` so new conversations start with Copilot auto model selection by default. Users can still switch to a different model on a per-conversation basis. 
  * Set `disableBypassPermissionsMode` to `"disable"` to prevent users from turning on bypass mode. See [Disabling bypass mode for your enterprise](#disabling-bypass-mode-for-your-enterprise) further in this article for more information.

## Configuring enterprise plugin standards

You can apply settings to control users' available plugin marketplaces and default-installed plugins. See [AUTOTITLE](/copilot/concepts/agents/about-enterprise-plugin-standards).

{% data reusables.copilot.create-managed-settings %}
1. Add your plugin policy configuration to the file, using the `extraKnownMarketplaces`, `strictKnownMarketplaces`, and `enabledPlugins` properties described in [Consolidated schema reference](#consolidated-schema-reference).

   ```json copy
   {
     "extraKnownMarketplaces": {
       "agent-skills": {
         "source": {
           "source": "github",
           "repo": "OWNER/REPO"
         }
       }
     },
     "strictKnownMarketplaces": [
       {
         "source": "github",
         "repo": "OWNER/REPO"
       }
     ],
     "enabledPlugins": {
       "PLUGIN-NAME@MARKETPLACE-NAME": true
     }
   }
   ```

1. Commit and push your changes to the default branch of the `.github-private` repository.

## Setting Copilot auto model selection as the default

You can set auto model selection as the default model for new conversations in {% data variables.copilot.copilot_cli_short %} and {% data variables.product.prodname_vscode_shortname %}. To learn more see [AUTOTITLE](/copilot/concepts/auto-model-selection). By setting it as the default for your enterprise, you ensure new conversations start with Auto model selected.

### What setting Auto model as the default does

When you set `model` to `"auto"` under `permissions`, new conversations start with Auto model selected in both clients:

* In {% data variables.copilot.copilot_cli_short %}, new sessions use Auto model unless the user specifies a different model.
* In {% data variables.product.prodname_vscode_shortname %}, the model picker defaults to Auto model when a user starts a new conversation.

Users can still switch to a different model on a per-conversation basis.

## Disabling bypass mode for your enterprise

You can prevent users from enabling bypass mode (also known as "YOLO mode") in {% data variables.copilot.copilot_cli_short %} and {% data variables.product.prodname_vscode_shortname %}. Bypass mode lets an agent run commands, access files, and fetch URLs without asking for approval. By disabling it for your enterprise, you ensure that a person reviews each of these actions.

### What disabling bypass mode prevents

When you set `disableBypassPermissionsMode` to `"disable"`, users cannot turn on bypass mode in either client:

* In {% data variables.copilot.copilot_cli_short %}, the `--yolo`, `--allow-all`, `--allow-all-tools`, `--allow-all-paths`, and `--allow-all-urls` command-line options and the `/yolo` and `/allow-all` slash commands are blocked.
* In {% data variables.product.prodname_vscode_shortname %}, the global auto-approve setting (`chat.tools.global.autoApprove`), also known as "YOLO mode," is turned off and cannot be re-enabled.

### Configuring the setting

{% data reusables.copilot.create-managed-settings %}
1. Add the `permissions` property to the file, with `disableBypassPermissionsMode` set to `"disable"`.

   ```json copy
   {
     "permissions": {
       "disableBypassPermissionsMode": "disable"
     }
   }
   ```

1. Commit and push your changes to the default branch of the `.github-private` repository.

## Verifying the configuration has applied

Once the configuration is committed, users will see the specified settings the next time they authenticate from a supported client. Clients pull the latest configuration once per hour. 

If a user does not see these settings, ensure they receive access to {% data variables.product.prodname_copilot_short %} through your enterprise or one of its organizations. If a user receives a license from multiple billing entities, ensure they have selected your enterprise in the "Usage billed to" dropdown in their [personal {% data variables.product.prodname_copilot_short %} settings](https://github.com/settings/copilot/features).
