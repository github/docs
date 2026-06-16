---
title: Disabling automatic command approval in Copilot clients
shortTitle: Disable automatic commands
allowTitleToDifferFromFilename: true
intro: 'Disable yolo mode to stop agents from running commands without approval.'
permissions: Enterprise owners
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
  - Manage Copilot for a team
---

> [!NOTE] This feature is in {% data variables.release-phases.public_preview %} and subject to change.

You can prevent users from using modes that enable automatic approval of agent commands in {% data variables.copilot.copilot_cli_short %} and {% data variables.product.prodname_vscode_shortname %}. The configuration is defined in a `{% data variables.copilot.managed_setting_file %}` file at the following path: `.github/copilot/{% data variables.copilot.managed_setting_file %}`. This file was previously called `settings.json`, which is still supported.

This setting blocks users from using:

* The `--yolo` or `--allow-all` flag
* The `/yolo` or `/allow-all` command
* All runtime paths that enable combined bypass mode

This setting does **not** block individual flags such as `--allow-all-tools` or `--allow-all-paths`.

{% data reusables.copilot.create-managed-settings %}
1. Add the following property.

   ```json copy
   {
     "permissions": {
       "disableBypassPermissionsMode": "disable"
     }
   }
   ```
