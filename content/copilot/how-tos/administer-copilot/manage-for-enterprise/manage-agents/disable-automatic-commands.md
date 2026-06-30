---
title: Disabling automatic command approval in Copilot clients
shortTitle: Disable automatic commands
allowTitleToDifferFromFilename: true
intro: 'Disable YOLO mode to stop agents from running commands without approval.'
permissions: Enterprise owners
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
  - Manage Copilot for a team
---

> [!NOTE] This feature is in {% data variables.release-phases.public_preview %} and subject to change.

You can prevent users from enabling bypass mode (also known as "YOLO mode") in {% data variables.copilot.copilot_cli_short %} and {% data variables.product.prodname_vscode_shortname %}. Bypass mode lets an agent run commands, access files, and fetch URLs without asking for approval. By disabling it for your enterprise, you ensure that a person reviews each of these actions.

## What disabling bypass mode prevents

The `disableBypassPermissionsMode` setting is defined in your enterprise's `{% data variables.copilot.managed_setting_file %}` file and applies to users on your enterprise's {% data variables.product.prodname_copilot_short %} plan.

When you set `disableBypassPermissionsMode` to `"disable"`, users cannot turn on YOLO mode in either client:

* In {% data variables.copilot.copilot_cli_short %}, the `--yolo`, `--allow-all`, `--allow-all-tools`, `--allow-all-paths`, and `--allow-all-urls` command-line options and the `/yolo` and `/allow-all` slash commands are blocked.
* In {% data variables.product.prodname_vscode_shortname %}, the global auto-approve setting (`chat.tools.global.autoApprove`), also known as "YOLO mode," is turned off and cannot be re-enabled.

## Disabling bypass mode for your enterprise

{% data reusables.copilot.create-managed-settings %}
1. Add the following property.

   ```json copy
   {
     "permissions": {
       "disableBypassPermissionsMode": "disable"
     }
   }
   ```
