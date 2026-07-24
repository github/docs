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

## Defining settings

For detailed information on the available properties and syntax, see [AUTOTITLE](/copilot/reference/enterprise-managed-settings-reference).

## Choosing a deployment method

There are multiple ways to deploy enterprise managed settings. Use the following guidelines to choose the right method for you. For any method, pilot on a small device group before broad deployment.

* **Server-managed**: Default for most enterprises and best for review workflows and audit history
* **MDM-managed**: Best when IT teams need device-group targeting through existing MDM tooling on macOS and Windows
* **File-based**: Available on all platforms, and useful when server-managed and MDM-managed deployment are not available, including developer environments such as containers and {% data variables.product.prodname_codespaces %}

There are additional considerations if you use a dedicated enterprise for {% data variables.copilot.copilot_business_short %}. See [Guidance for dedicated {% data variables.copilot.copilot_business_short %} enterprises](#guidance-for-dedicated-copilot-business-enterprises).

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

## Verifying the configuration has applied

Once the configuration is committed, users on a supported client see the specified settings within about an hour, since clients periodically check the server for updated configuration. Restarting the client or signing in again applies the latest settings immediately.

If a user does not see these settings, ensure they receive access to {% data variables.product.prodname_copilot_short %} through your enterprise or one of its organizations. If a user receives a license from multiple billing entities, ensure they have selected your enterprise in the "Usage billed to" dropdown in their [personal {% data variables.product.prodname_copilot_short %} settings](https://github.com/settings/copilot/features).

## Guidance for dedicated {% data variables.copilot.copilot_business_short %} enterprises

If you have a dedicated enterprise for {% data variables.copilot.copilot_business_short %} (sometimes called {% data variables.product.prodname_copilot_short %} Standalone), you can still use enterprise managed settings. The deployment method you choose determines what you need to set up first.

### Using server-managed settings

Server-managed settings require an organization and a `.github-private` repository. To create these, one user in your enterprise needs a {% data variables.product.prodname_enterprise %} license. With that license, the user can:

1. Create an organization and a `.github-private` repository. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/create-github-private-repo).
1. Add settings to the repository in a `copilot/{% data variables.copilot.managed_setting_file %}` file.
1. Set that organization as the source of governance for your enterprise's AI standards. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/create-github-private-repo#selecting-your-repository-as-your-source-of-governance).

From that point on, any user on your enterprise's {% data variables.product.prodname_copilot_short %} plan using {% data variables.copilot.copilot_cli_short %} or {% data variables.product.prodname_vscode_shortname %} is governed by those settings, whether or not they have access to the `.github-private` repository.

The main limitation of this method is the {% data variables.product.prodname_enterprise %} license requirement to create the organization and repository.

### Using MDM-managed or file-based settings

If you don't want to add a {% data variables.product.prodname_enterprise %} license or create an organization, you can deploy the same settings through MDM (such as Intune or Jamf) or a file-based deployment. These methods use the same JSON schema and don't require an organization or `.github-private` repository. See [Deploying MDM-managed settings](#deploying-mdm-managed-settings) and [Deploying file-based settings](#deploying-file-based-settings). For {% data variables.product.prodname_vscode_shortname %}-specific guidance, see [Deploy Copilot managed settings](https://code.visualstudio.com/docs/enterprise/ai-settings#_deploy-copilot-managed-settings) in the {% data variables.product.prodname_vscode_shortname %} documentation.

### Plugin access considerations

Users don't need access to the `.github-private` repository for clients to pull in managed settings. However, if managed settings define a plugin using `enabledPlugins`, the client automatically tries to install it for each user. The user needs access to where the plugin files are hosted. If the plugin is hosted in a private repository on {% data variables.product.prodname_dotcom %}, the user needs authorization to that repository, which may require a license.
