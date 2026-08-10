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

With enterprise managed settings, enterprise owners can centrally define and distribute configuration settings to supported clients for users on your enterprise's {% data variables.product.prodname_copilot_short %} plan, ensuring every member works within the guardrails you define, while letting teams tailor the settings you allow.

The following clients are supported, although not every client supports every property:

* {% data variables.copilot.copilot_cli_short %}
* {% data variables.product.prodname_vscode_shortname %}
* {% data variables.product.prodname_jetbrains_ides %}
* The {% data variables.copilot.github_copilot_app %}
* {% data variables.copilot.copilot_cloud_agent %}

These settings apply enterprise-wide and enterprises can customize specific keys to enterprise teams. For most supported keys, the `{% data variables.copilot.managed_setting_file %}` value takes precedence over any file-based configuration a user sets in their client. In {% data variables.copilot.copilot_cli_short %}, managed `sandbox` settings instead define minimum restrictions that users can further tighten but cannot loosen.

MDM-managed and file-based settings are loaded from the device, so they can apply before sign in or a server round trip and remain active when users switch accounts. Server-managed settings are associated with the user's signed-in account.

## Defining settings

For detailed information on the available properties and syntax, see [AUTOTITLE](/copilot/reference/enterprise-managed-settings-reference).

Use `copilot/{% data variables.copilot.team_mappings_file %}` and the `copilot/{% data variables.copilot.team_settings_directory %}` directory when you need one or more enterprise teams to use settings that differ from the defaults in `copilot/{% data variables.copilot.managed_setting_file %}`. For more information, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings#overriding-settings-for-specific-teams).

## Choosing a deployment method

There are multiple ways to deploy enterprise managed settings. Use the following guidelines to choose the right method for you. For any method, pilot on a small device group before broad deployment.

* **Server-managed**: Default for most enterprises and best for review workflows and audit history. Applies to all clients, including {% data variables.copilot.copilot_cloud_agent %}.
* **MDM-managed**: Best when IT teams need device-group targeting through existing MDM tooling on macOS and Windows. Local clients only.
* **File-based**: Available on all platforms, and useful when server-managed and MDM-managed deployment are not available, including developer environments such as containers and {% data variables.product.prodname_codespaces %}. Local clients only.

In {% data variables.copilot.copilot_cli_short %}, if a request for server-managed settings fails and no cached response is available, the server-managed policy is unavailable for that session. For restrictions that must remain available without a server response, use MDM-managed or file-based settings.

There are additional considerations if you use a dedicated enterprise for {% data variables.copilot.copilot_business_short %}. See [Guidance for dedicated {% data variables.copilot.copilot_business_short %} enterprises](#guidance-for-dedicated-copilot-business-enterprises).

## Deploying server-managed settings

1. Create and configure your `.github-private` repository. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/create-github-private-repo).
1. In the repository, create or update `copilot/{% data variables.copilot.managed_setting_file %}`.
1. Add your enterprise policy keys and values in JSON format.
1. Commit and push your changes to the default branch.
1. Confirm that enterprise users are running a supported client. Updated settings are applied automatically within about an hour. Restarting the client or signing in again triggers an immediate refresh.

## Overriding settings for specific teams

For server-managed deployments, use `copilot/{% data variables.copilot.team_mappings_file %}` and the `copilot/{% data variables.copilot.team_settings_directory %}` directory when one or more enterprise teams should use settings that differ from your default `copilot/{% data variables.copilot.managed_setting_file %}` values. `enabledPlugins` and `extraKnownMarketplaces` work additively. The enterprise `{% data variables.copilot.managed_setting_file %}` sets a baseline, and an enterprise team file can add more plugins and marketplaces on top of it.

1. In your enterprise's `copilot/{% data variables.copilot.managed_setting_file %}` file, mark each key you want to make eligible for override using the `{ "overridable": <VALUE> }` syntax. The `json` files you map to teams can only send different values for keys you mark overridable. An `overridable` value you provide in `managed-settings.json` is the default when teams files do not declare a different value for a given key.
For example, to defer both `model` and `disableBypassPermissionsMode`:

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

1. In your enterprise's `.github-private` repository, create `copilot/{% data variables.copilot.team_mappings_file %}`. Map each team settings file to one or more enterprise team slugs. The key is the settings file name and the value is an array of team slugs, so you can apply one file across multiple teams.

    ```json
    {
      "devs.json": ["developers-all", "finops-dev"],
      "ai-users.json": ["ai-baseline-trained"],
      "frontier.json": ["ai-pioneers"]
    }
    ```

1. Create the team settings file under `copilot/{% data variables.copilot.team_settings_directory %}`. Include only the keys you marked as overridable. Every other key stays governed by your enterprise default.

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

## Deploying MDM-managed settings

Native MDM delivery uses the same logical keys and values as server-managed settings, but it does not deploy a `{% data variables.copilot.managed_setting_file %}` file. Instead, your MDM platform deploys individual settings as operating-system-managed string values.

Native MDM delivery is available on Windows and macOS:

| Operating system | Native policy location |
| --- | --- |
| Windows | String (`REG_SZ`) values under `HKEY_LOCAL_MACHINE\SOFTWARE\Policies\GitHubCopilot` |
| macOS | String values in forced managed preferences for the `com.github.copilot` preference domain |
| Linux | Native MDM delivery is not supported. Use file-based settings instead. |

All native MDM values must be strings. For nested settings, use a dot-separated key such as `permissions.disableBypassPermissionsMode` or `sandbox.enabled`. Store ordinary string values directly. Store booleans, arrays, and objects as JSON text within a string value.

For example:

| Key | Native string value |
| --- | --- |
| `permissions.disableBypassPermissionsMode` | `disable` |
| `sandbox.enabled` | `true` |
| `enabledPlugins` | `{"PLUGIN-NAME@MARKETPLACE-NAME":true}` |

1. Choose the settings you want to enforce. See [AUTOTITLE](/copilot/reference/enterprise-managed-settings-reference).
1. Convert each setting to the native key and string value representation.
1. Deploy the settings to the native policy location using your enterprise MDM platform and standard rollout process.
1. Assign the policy to the target device groups.

    Clients do not need to restart, and check for updated policies on an hourly basis. In {% data variables.product.prodname_vscode_shortname %}, an administrator can force a check for testing by running the `Developer: Sync Account Policy` command.

1. Confirm the settings took effect. See [Verifying the configuration has applied](#verifying-the-configuration-has-applied).

## Deploying file-based settings

Place `{% data variables.copilot.managed_setting_file %}` in the following location:

| Operating system | File location |
| --- | --- |
| macOS | `/Library/Application Support/GitHubCopilot/managed-settings.json` |
| Windows | `%ProgramFiles%\GitHubCopilot\managed-settings.json` |
| Linux | `/etc/github-copilot/managed-settings.json` |

1. Create or update a `{% data variables.copilot.managed_setting_file %}` file with the policy keys and values you want to enforce.
1. Distribute the file to the platform-specific location using your standard device management process. Machines that don't receive the file are not restricted by this policy.
1. For {% data variables.copilot.copilot_cli_short %} on macOS and Linux, make the file a regular file owned by `root`, and ensure it is not group-writable or world-writable. Do not use a symbolic link. The CLI rejects files that do not meet these requirements.
1. Ask users to restart supported clients so the updated policy is loaded at startup.
1. Confirm the settings took effect. See [Verifying the configuration has applied](#verifying-the-configuration-has-applied).

## Verifying the configuration has applied

For server-managed deployments, users on a supported client see the specified settings within about an hour. This includes `copilot/{% data variables.copilot.managed_setting_file %}`, `copilot/{% data variables.copilot.team_mappings_file %}`, and files in `copilot/{% data variables.copilot.team_settings_directory %}`. Restarting the client or signing in again triggers an immediate refresh.

For MDM-managed deployments, clients check for updated policies hourly. For file-based deployments, restart the client to load an updated file.

If a user does not see these settings, ensure they receive access to {% data variables.product.prodname_copilot_short %} through your enterprise or one of its organizations. If a user receives a license from multiple billing entities, ensure they have selected your enterprise in the "Usage billed to" dropdown in their [personal {% data variables.product.prodname_copilot_short %} settings](https://github.com/settings/copilot/features).

## Guidance for dedicated {% data variables.copilot.copilot_business_short %} enterprises

If you have a dedicated enterprise for {% data variables.copilot.copilot_business_short %} (sometimes called {% data variables.product.prodname_copilot_short %} Standalone), you can still use enterprise managed settings. The deployment method you choose determines what you need to set up first.

### Using server-managed settings

Server-managed settings require an organization and a `.github-private` repository. To create these, one user in your enterprise needs a {% data variables.product.prodname_enterprise %} license. With that license, the user can:

1. Create an organization and a `.github-private` repository. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/create-github-private-repo).
1. Add settings to the repository in a `copilot/{% data variables.copilot.managed_setting_file %}` file.
1. Set that organization as the source of governance for your enterprise's AI standards. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/create-github-private-repo#selecting-your-repository-as-your-source-of-governance).

From that point on, any user on your enterprise's {% data variables.product.prodname_copilot_short %} plan using {% data variables.copilot.copilot_cli_short %} or supported clients is governed by those settings, whether or not they have access to the `.github-private` repository.

The main limitation of this method is the {% data variables.product.prodname_enterprise %} license requirement to create the organization and repository.

### Using MDM-managed or file-based settings

If you don't want to add a {% data variables.product.prodname_enterprise %} license or create an organization, you can deploy the same logical settings through MDM (such as Intune or Jamf) or a file-based deployment. File-based delivery uses the JSON schema directly. Native MDM delivery uses flat keys and string-encoded values. Neither method requires an organization or `.github-private` repository. See [Deploying MDM-managed settings](#deploying-mdm-managed-settings) and [Deploying file-based settings](#deploying-file-based-settings). For {% data variables.product.prodname_vscode_shortname %}-specific guidance, see [Deploy Copilot managed settings](https://code.visualstudio.com/docs/enterprise/ai-settings#_deploy-copilot-managed-settings) in the {% data variables.product.prodname_vscode_shortname %} documentation.

### Plugin access considerations

Users don't need access to the `.github-private` repository for clients to pull in managed settings. However, if managed settings define a plugin using `enabledPlugins`, the client automatically tries to install it for each user. The user needs access to where the plugin files are hosted. If the plugin is hosted in a private repository on {% data variables.product.prodname_dotcom %}, the user needs authorization to that repository, which may require a license.
