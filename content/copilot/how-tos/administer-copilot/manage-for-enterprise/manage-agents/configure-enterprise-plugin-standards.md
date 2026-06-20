---
title: Configuring enterprise plugin standards
shortTitle: Configure plugin standards
allowTitleToDifferFromFilename: true
intro: 'Configure enterprise plugin standards by defining a `{% data variables.copilot.managed_setting_file %}` file in your enterprise''s `.github-private` repository.'
permissions: Enterprise owners
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
  - Manage Copilot for a team
---

> [!NOTE] This feature is in {% data variables.release-phases.public_preview %} and subject to change.

You can apply settings to control users' available plugin marketplaces and default-installed plugins. These settings apply to users on your enterprise's {% data variables.product.prodname_copilot_short %} plan. For more information, see [AUTOTITLE](/copilot/concepts/agents/about-enterprise-plugin-standards).

{% data reusables.copilot.create-managed-settings %}
1. Add your plugin policy configuration to the file. The `{% data variables.copilot.managed_setting_file %}` file supports the following top-level properties:

   ```json copy
   {
     "extraKnownMarketplaces": {
       "MARKETPLACE-NAME": {
         "source": {
           "source": "github",
           "repo": "OWNER/REPO"
         }
       }
     },
     "enabledPlugins": {
       "PLUGIN-NAME@MARKETPLACE-NAME": true
     }
   }
   ```

   * `extraKnownMarketplaces`: Defines additional plugin marketplaces available to users. Each entry is a named marketplace object containing a `source` property that specifies the provider (`"github"`) and the repository in `OWNER/REPO` format.
   * `enabledPlugins`: Defines plugins that are automatically installed for all enterprise users. Each entry uses the format `PLUGIN-NAME@MARKETPLACE-NAME` as the key, with a boolean value of `true` to enable the plugin.

1. Commit and push your changes to the default branch of the `.github-private` repository.

Once the configuration is committed, users will see the specified marketplaces and pre-installed plugins the next time they authenticate from a supported client.

If a user does not see these settings, ensure they receive access to {% data variables.product.prodname_copilot_short %} through your enterprise or one of its organizations. If a user receives a license from multiple billing entities, ensure they have selected your enterprise in the "Usage billed to" dropdown in their [personal {% data variables.product.prodname_copilot_short %} settings](https://github.com/settings/copilot/features).
