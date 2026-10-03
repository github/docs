---
title: Choosing how to deploy enterprise-managed settings to users
shortTitle: Deploy managed settings
intro: Choose from different deployment methods to deliver managed settings keys to users.
permissions: Enterprise owners
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
  - Manage Copilot for a team
---

If you followed [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started), you hosted your managed settings on {% data variables.product.github %}. This is a server-managed deployment. You can also choose to deploy settings directly to a user's machine with mobile device management or file-based delivery.

It is possible to combine multiple different deployment methods. For example, you can use MDM for non-negotiable security policies governed by IT, and server-managed settings for things that are more subject to change, like plugin settings. However, bear in mind that this may make it more difficult to understand exactly which settings apply to your users. If you plan to do this, see [Precedence of deployment methods](#precedence-of-deployment-methods).

## Choosing a deployment method

There are multiple ways to deploy enterprise managed settings. Use the following guidelines to choose the right methods for you.

* **Server-managed (.github-private repository)**:
  * Default for most enterprises and best for review workflows and audit history. 
  * Applies to all clients, including {% data variables.copilot.copilot_cloud_agent %}.
  * Only applies to users who receive a {% data variables.product.prodname_copilot %} license from your enterprise.
  * Allows overrides for enterprise teams.
* **Mobile device management**:
  * Best when IT teams need device-group targeting through existing MDM tooling on macOS and Windows.
  * Local clients only.
  * Applies to the user regardless of where they receive their {% data variables.product.prodname_copilot %} license.
* **File-based**:
  * Available on all platforms and useful when server-managed and MDM-managed deployments are not available, including developer environments such as containers and {% data variables.product.prodname_codespaces %}.
  * Local clients only.
  * Applies to the user regardless of where they receive their {% data variables.product.prodname_copilot %} license.

MDM-managed and file-based settings are loaded from the device, so they can apply before sign in or a server round trip and remain active when users switch accounts. Server-managed settings are associated with the user's signed-in account.

In {% data variables.copilot.copilot_cli_short %}, if a request for server-managed settings fails and no cached response is available, the server-managed policy is unavailable for that session. For restrictions that must remain available without a server response, use MDM-managed or file-based settings.

There are additional considerations if you use a dedicated enterprise for {% data variables.copilot.copilot_business_short %}. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/copilot-business-only).

## Deploying server-managed settings

1. Create and configure your `.github-private` repository. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/create-github-private-repo).
1. In the repository, create or update `copilot/{% data variables.copilot.managed_setting_file %}`.
1. Add your enterprise policy keys and values in JSON format.
1. Commit and push your changes to the default branch.
1. Confirm that enterprise users are running a supported client. Updated settings are applied automatically within about an hour. Restarting the client or signing in again triggers an immediate refresh.

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

1. Choose the settings you want to enforce. See [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings).
1. Convert each setting to the native key and string value representation.
1. Deploy the settings to the native policy location using your enterprise MDM platform and standard rollout process.
1. Assign the policy to the target device groups.

    Clients do not need to restart, and check for updated policies on an hourly basis. In {% data variables.product.prodname_vscode_shortname %}, an administrator can force a check for testing by running the `Developer: Sync Account Policy` command.

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

## Precedence of deployment methods

When multiple settings sources are present, settings earlier in this list take precedence over settings later in the list:

1. MDM-managed settings
1. Server-managed settings
1. File-based settings
1. User-level settings

As an exception, the following keys are composed in the most restrictive direction across different delivery methods:

* `sandbox`
* `permissions.deny`, `permissions.ask`, and `permissions.allow`
