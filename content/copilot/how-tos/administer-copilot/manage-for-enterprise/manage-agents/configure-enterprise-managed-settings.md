---
title: Configuring enterprise-managed settings
shortTitle: Enterprise managed settings
allowTitleToDifferFromFilename: true
intro: Configure enterprise managed settings to centrally control {% data variables.product.prodname_copilot_short %} client behavior across your enterprise using server-managed, MDM-managed, or file-based deployment.
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

With enterprise managed settings, enterprise owners can centrally define and distribute configuration settings to {% data variables.copilot.copilot_cli_short %} and {% data variables.product.prodname_vscode_shortname %} for users on your enterprise's {% data variables.product.prodname_copilot_short %} plan, ensuring every member works within the same guardrails. Additional client support will follow.

These settings apply enterprise-wide, with no organization-level override. For each supported key, the `{% data variables.copilot.managed_setting_file %}` value takes precedence over any file-based configuration a user sets in their client.

Managed settings are loaded locally when the client starts, even if the device has no network connection. This means controls such as disabled bypass mode and restricted plugin configuration still apply before sign in or any server round trip, and remain active when users switch accounts.

## Choosing a deployment method

There are multiple ways to deploy enterprise managed settings. Use the following guidelines to choose the right method for you. For any method, pilot on a small device group before broad deployment.

* **Server-managed**: Default for most enterprises and best for review workflows and audit history
* **MDM-managed**: Best when IT teams need device-group targeting through existing MDM tooling on macOS and Windows
* **File-based**: Available on all platforms, and useful when server-managed and MDM-managed deployment are not available, including developer environments such as containers and {% data variables.product.prodname_codespaces %}

## Deploying server-managed settings

1. Create and configure your `.github-private` repository. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/create-github-private-repo).
1. In the repository, create or update `copilot/{% data variables.copilot.managed_setting_file %}`.
1. Add your enterprise policy keys and values in JSON format.
1. Commit and push your changes to the default branch.
1. Confirm that enterprise users are running a supported client. Updated settings are applied automatically within about an hour, or immediately after the client restarts or the user signs in again.

## Deploying MDM-managed settings

1. Create or update your `{% data variables.copilot.managed_setting_file %}` payload using the same JSON schema used for server-managed settings.
1. Deploy the payload using your enterprise MDM platform and standard rollout process.
1. Assign the policy to the target device groups.

    Clients do not need to restart, and check for updated policies on an hourly basis. In {% data variables.product.prodname_vscode_shortname %}, an administrator can force a check for testing by running the `Developer: Sync Account Policy` command.

1. Confirm the settings took effect. See [Verifying the configuration has applied](#verifying-the-configuration-has-applied).

## Deploying file-based settings

1. Create or update a `{% data variables.copilot.managed_setting_file %}` file with the policy keys and values you want to enforce.
1. Distribute the file to managed machines using your standard device management process. Machines that don't receive the file are not restricted by this policy, so file-based deployment only provides coverage for the machines you actively distribute to.
1. Apply file permissions according to your enterprise security requirements.
1. Ask users to restart supported clients so the updated policy is loaded at startup.
1. Confirm the settings took effect. See [Verifying the configuration has applied](#verifying-the-configuration-has-applied).

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
    "disableBypassPermissionsMode": "disable"
  },
  "model": "auto"
}
```

* `extraKnownMarketplaces`: Defines additional plugin marketplaces available to users. Each entry is a named marketplace object containing a `source` property that specifies the provider (`"github"`) and the repository in `OWNER/REPO` format.
* `strictKnownMarketplaces`: Restricts plugin installation to only the marketplaces explicitly defined by the enterprise. Each entry is a marketplace object containing a `source` property. The `source` specifies the provider as either `"github"` with a `repo` in `OWNER/REPO` format, or `"git"` with a `url` pointing to a git repository.
* `enabledPlugins`: Defines plugins that are automatically installed for all enterprise users. Each entry uses the format `PLUGIN-NAME@MARKETPLACE-NAME` as the key, with a boolean value of `true` to enable the plugin.
* `permissions`: Controls whether users can bypass command approval. Set `disableBypassPermissionsMode` to `"disable"` to prevent users from turning on bypass mode. See [Disabling bypass mode for your enterprise](#disabling-bypass-mode-for-your-enterprise) further in this article for more information.
* `model`: Controls default model governance settings. Set to `"auto"` so new conversations start with Copilot auto model selection by default. Users can still switch to a different model on a per-conversation basis.

## Configuring enterprise plugin standards

You can apply settings to control users' available plugin marketplaces and default-installed plugins. See [AUTOTITLE](/copilot/concepts/agents/about-enterprise-plugin-standards).

{% data reusables.copilot.create-managed-settings %}
1. Add the `extraKnownMarketplaces`, `strictKnownMarketplaces`, and `enabledPlugins` properties you need to the file. See the example and property descriptions in [Consolidated schema reference](#consolidated-schema-reference). Merge these properties into an existing file rather than overwriting it, so you don't remove settings configured for other policies, such as `permissions`.

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

## Setting {% data variables.product.prodname_copilot_short %} auto model selection as the default

You can set auto model selection as the default model for new conversations in {% data variables.copilot.copilot_cli_short %} and {% data variables.product.prodname_vscode_shortname %}. To learn more see [AUTOTITLE](/copilot/concepts/models/auto-model-selection). By setting it as the default for your enterprise, you ensure new conversations start with Auto model selected.

### What setting Auto model as the default does

When you `model` to `"auto"`, new conversations start with Auto model selected in both clients:

* In {% data variables.copilot.copilot_cli_short %}, new sessions use Auto model unless the user specifies a different model.
* In {% data variables.product.prodname_vscode_shortname %}, the model picker defaults to Auto model when a user starts a new conversation.

Users can still switch to a different model on a per-conversation basis.

### Configuring the setting

{% data reusables.copilot.create-managed-settings %}
1. Add the `model` property to the file, set to `"auto"`.

   ```json copy
   {
     "model": "auto"
   }
   ```

## Disabling bypass mode for your enterprise

You can prevent users from enabling bypass mode (also known as "YOLO mode") in {% data variables.copilot.copilot_cli_short %} and {% data variables.product.prodname_vscode_shortname %}. Bypass mode lets an agent run commands, access files, and fetch URLs without asking for approval. By disabling it for your enterprise, you ensure that a person reviews each of these actions.

### What disabling bypass mode prevents

When you set `disableBypassPermissionsMode` to `"disable"`, users cannot turn on bypass mode in either client:

* In {% data variables.copilot.copilot_cli_short %}, the `--yolo`, `--allow-all`, `--allow-all-tools`, `--allow-all-paths`, and `--allow-all-urls` command-line options and the `/yolo` and `/allow-all` slash commands are blocked.
* In {% data variables.product.prodname_vscode_shortname %}, the global auto-approve setting (`chat.tools.global.autoApprove`), also known as "YOLO mode," is turned off and cannot be re-enabled.

### Configuring the setting

{% data reusables.copilot.create-managed-settings %}
1. Add the `permissions` property to the file, with `disableBypassPermissionsMode` set to `"disable"`. If the file already has a `permissions` object (for example, from other permission settings), merge this key into it rather than replacing the object.

   ```json copy
   {
     "permissions": {
       "disableBypassPermissionsMode": "disable"
     }
   }
   ```

## Verifying the configuration has applied

Once the configuration is committed, users on a supported client see the specified settings within about an hour, since clients periodically check the server for updated configuration. Restarting the client or signing in again applies the latest settings immediately.

If a user does not see these settings, ensure they receive access to {% data variables.product.prodname_copilot_short %} through your enterprise or one of its organizations. If a user receives a license from multiple billing entities, ensure they have selected your enterprise in the "Usage billed to" dropdown in their [personal {% data variables.product.prodname_copilot_short %} settings](https://github.com/settings/copilot/features).
