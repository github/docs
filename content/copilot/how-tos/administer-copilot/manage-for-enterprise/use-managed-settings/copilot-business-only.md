---
title: Using enterprise-managed settings without organizations
shortTitle: Copilot Business only
intro: Special guidance for enterprises that are only used to assign {% data variables.copilot.copilot_business_short %} licenses.
permissions: Enterprise owners
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
  - Manage Copilot for a team
---

You may have created an enterprise account with no organizations to distribute {% data variables.product.prodname_copilot_short %} without paying for {% data variables.product.prodname_enterprise %}. This is sometimes called {% data variables.product.prodname_copilot_short %} Standalone. With this setup, you can still use enterprise managed settings, but you should be aware of some additional guidance.

If you're using a standard enterprise setup with organizations, you can ignore this guidance.

## Using server-managed settings

Server-managed settings require an organization and a `.github-private` repository. To create these, one user in your enterprise needs a {% data variables.product.prodname_enterprise %} license. If you use volume or subscription billing, contact your account team to purchase a license. Otherwise, the license will automatically be assigned when the user joins an organization.

The user with the license can:

1. Create an organization and join it as an owner.
1. Add a `.github-private` repository, make the repository the enterprise's source of managed settings, and add settings to the `{% data variables.copilot.managed_setting_file %}` file. For step-by-step instructions, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).

From that point on, any user on your enterprise's {% data variables.product.prodname_copilot_short %} plan is governed by those settings, regardless of whether they have access to the `.github-private` repository.

The main limitation of this method is the {% data variables.product.prodname_enterprise %} license required to create the organization and repository.

## Using MDM-managed or file-based settings

If you don't want to add a {% data variables.product.prodname_enterprise %} license or create an organization, you can deploy the same logical settings through MDM (such as Intune or Jamf) or a file-based deployment. File-based delivery uses the JSON schema directly. Native MDM delivery uses flat keys and string-encoded values. Neither method requires an organization or `.github-private` repository.

For more information about deployment methods, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/deploy-managed-settings).

## Plugin access considerations

If managed settings define a plugin using `enabledPlugins`, the client automatically tries to install it for each user. The user needs access to where the plugin files are hosted. If the plugin is hosted in a private repository on {% data variables.product.prodname_dotcom %}, the user needs access to that repository, which may require a license.
