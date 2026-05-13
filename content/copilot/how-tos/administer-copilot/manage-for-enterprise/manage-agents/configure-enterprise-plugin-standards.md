---
title: Configuring enterprise plugin standards for {% data variables.copilot.copilot_cli_short %}
shortTitle: Configure plugin standards
allowTitleToDifferFromFilename: true
intro: 'Configure enterprise plugin standards by defining a `settings.json` file in your enterprise''s `.github-private` repository.'
permissions: Enterprise owners
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
  - Manage Copilot for a team
---

> [!NOTE] This feature is in {% data variables.release-phases.public_preview %} and subject to change.

1. In your enterprise's `.github-private` repository, navigate to the `.github/copilot/` directory. If you don't have a `.github-private` repository yet, see [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/prepare-for-custom-agents).
1. Create or edit the `settings.json` file at `.github/copilot/settings.json`.
1. Add your plugin policy configuration to the file. The `settings.json` file supports the following top-level properties:

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

   * `extraKnownMarketplaces`: Defines additional plugin marketplaces available to CLI users. Each entry is a named marketplace object containing a `source` property that specifies the provider (`"github"`) and the repository in `OWNER/REPO` format.
   * `enabledPlugins`: Defines plugins that are automatically installed for all enterprise users. Each entry uses the format `PLUGIN-NAME@MARKETPLACE-NAME` as the key, with a boolean value of `true` to enable the plugin.

1. Commit and push your changes to the default branch of the `.github-private` repository.

Once the configuration is committed, enterprise users will see the specified marketplaces and pre-installed plugins the next time they authenticate with {% data variables.copilot.copilot_cli_short %}.
