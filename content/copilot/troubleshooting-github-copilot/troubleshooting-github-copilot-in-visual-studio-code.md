---
title: Troubleshooting GitHub Copilot in Visual Studio Code
intro: 'This article provides troubleshooting advice for errors related to {% data variables.product.prodname_copilot%} in {% data variables.product.prodname_vscode %}.'
product: '{% data reusables.gated-features.copilot %}'
topics:
  - Copilot
  - Logging
  - Troubleshooting
versions:
  feature: copilot
shortTitle: Visual Studio Code
---

## Viewing and collecting log files

The log files for the {% data variables.product.prodname_copilot%} extension are stored in the standard log location for {% data variables.product.prodname_vscode %} extensions. The log files are useful for diagnosing connection issues.
1. Open the **View** menu in {% data variables.product.prodname_vscode %}.
1. Click **Output**.
1. On the right of the Output view pane, select **{% data variables.product.prodname_copilot%}** from the dropdown menu.

![Screenshot of {% data variables.product.prodname_copilot%} Output pane](/assets/images/help/copilot/vsc-output-pane.png)

Alternatively, you can open the log folder for {% data variables.product.prodname_vscode %} extensions in your system's file explorer. This is useful if you need to forward the log files to the support team. 

1. Open the {% data variables.product.prodname_vscode_command_palette_shortname %}
   - For Mac:
      - Use: <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>   
   - For Windows or Linux:
      - Use: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>  
1. Type "Logs", and then select **Developer: Open Extension Logs Folder** from the list.

## Viewing network connectivity diagnostics logs

If you encounter problems connecting to {% data variables.product.prodname_copilot%} due to network restrictions, firewalls, or your proxy setup, use the following troubleshooting steps.

1. Open the {% data variables.product.prodname_vscode_command_palette_shortname %}
   - For Mac:
      - Use: <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>   
   - For Windows or Linux:
      - Use: <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> 
1. Type "Diagnostics", and then select **{% data variables.product.prodname_copilot%}: Collect Diagnostics** from the list. This opens a new editor with the relevant information that you can inspect yourself or share with the support team.
1. Check the section on **Reachability** to determine if {% data variables.product.prodname_copilot%} can actually access the necessary services.

## Viewing Electron logs

In rare cases, errors might not be propagated to the corresponding error handlers and are not logged in the regular locations. If you encounter errors and there is nothing in the logs, you may try to see the logs from the process running VS Code and the extension.

1. Open the {% data variables.product.prodname_vscode_command_palette_shortname %}
   - For Mac:
      - Use: <kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd>   
   - For Windows or Linux:
      - Use <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
1. Type "Toggle", and then select **Developer: Toggle Developer Tools** from the list.
1. In the Developer Tools window, select the **Console** tab to see any errors or warnings.

![Screenshot of {% data variables.product.prodname_vscode %} Developer Console](/assets/images/help/copilot/vsc-electron-logs.png)

## Further reading

- "[Configuring {% data variables.product.prodname_copilot%} proxy support](/copilot/configuring-github-copilot/configuring-github-copilot-in-visual-studio-code#configuring-proxy-settings-for-github-copilot)"
- "[Network Connections in {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/docs/setup/network)" in the {% data variables.product.prodname_vscode %} documentation
