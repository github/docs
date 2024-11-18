---
title: GitHub Codespaces logs
intro: 'Overview of the logs used by {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Logging
shortTitle: Codespaces logs
redirect_from:
  - /codespaces/troubleshooting/codespaces-logs
---

{% jetbrains_beta %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains_beta %}

Information on {% data variables.product.prodname_github_codespaces %} is output to various logs:

{% webui %}

* Codespace logs
* Creation logs
* Browser console logs (for the {% data variables.product.prodname_vscode_shortname %} web client)

Extension logs are available if you are using {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode_shortname %}. Click the "{% data variables.product.prodname_vscode %}" tab above for details.

{% endwebui %}

{% vscode %}

* Codespace logs
* Creation logs
* Extension logs (for the {% data variables.product.prodname_vscode_shortname %} desktop application)

Browser logs are available if you are using {% data variables.product.prodname_github_codespaces %} in your browser. Click the "Web browser" tab above for details.

{% endvscode %}

{% cli %}

* Codespace logs
* Creation logs

Other logs are available if you are using {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode_shortname %} or in your web browser. Click the tabs above for details.

{% endcli %}

{% jetbrains_beta %}

* Creation logs

Other logs are available if you are using {% data variables.product.prodname_github_codespaces %} in {% data variables.product.prodname_vscode_shortname %} or in your web browser. Click the tabs above for details.

{% endjetbrains_beta %}

{% webui %}

{% data reusables.codespaces.codespace-logs %}

1. If you are using {% data variables.product.prodname_github_codespaces %} in the browser, ensure that you are connected to the codespace you want to debug.
1. Open the {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type `export logs`. Select **Codespaces: Export Logs** from the list to download the logs.
1. Define where to save the zip archive of logs then click **Save** (desktop) or click **OK** (web).
1. If you are using {% data variables.product.prodname_github_codespaces %} in the browser, right-click on the zip archive of logs from the Explorer view and select **Download…** to download them to your local machine.

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.codespace-logs %}

1. Open the {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type `export log`. Select **Codespaces: Export Logs** from the list to download the logs.
1. Define where to save the zip archive of logs then click **Save** (desktop) or click **OK** (web).

{% endvscode %}

{% cli %}

{% data reusables.codespaces.codespace-logs %}

Currently you can't use {% data variables.product.prodname_cli %} to access these logs. To access them, open your codespace in {% data variables.product.prodname_vscode_shortname %} or in a browser.

{% endcli %}

## Creation logs

These logs contain information about the container, dev container, and their configuration. They are useful for debugging configuration and setup problems.

{% webui %}

1. Connect to the codespace you want to debug.
1. Open the {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type `creation log`. Select **Codespaces: View Creation Log** from the list to open the `creation.log` file.

If you want to share the log with support, you can copy the text from the creation log into a text editor and save the file locally.

{% endwebui %}

{% vscode %}

Open the {% data variables.product.prodname_vscode_command_palette_shortname %} (<kbd>Shift</kbd>+<kbd>Command</kbd>+<kbd>P</kbd> (Mac) / <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (Windows/Linux)) and type `creation log`. Select **Codespaces: View Creation Log** from the list to open the `creation.log` file.

If you want to share the log with support, you can copy the text from the creation log into a text editor and save the file locally.

{% endvscode %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

To see the creation log use the `gh codespace logs` subcommand. After entering the command choose from the list of codespaces that's displayed.

```shell
gh codespace logs
```

For more information about this command, see [the {% data variables.product.prodname_cli %} manual](https://cli.github.com/manual/gh_codespace_logs).

If you want to share the log with support, you can save the output to a file:

```shell
gh codespace logs -c <CODESPACE-NAME> > /path/to/logs.txt
```

{% endcli %}

{% vscode %}

## Extension logs

These logs are available for {% data variables.product.prodname_vscode_shortname %} desktop users only. They are useful if it seems like the {% data variables.product.prodname_github_codespaces %} extension or {% data variables.product.prodname_vscode_shortname %} editor are having issues that prevent creation or connection.

1. In {% data variables.product.prodname_vscode_shortname %}, open the Command Palette.
1. Type `logs` and select **Developer: Open Extension Logs Folder**.
1. Your system's file explorer is displayed showing various log files and folders. Open the folder `output_logging_DATETIME`.

From this view, you can access logs generated by extensions you use in {% data variables.product.prodname_vscode_shortname %}, including {% data variables.product.prodname_github_codespaces %}.

{% endvscode %}

{% webui %}

## Browser console logs

These logs are useful only if you want to debug problems with using {% data variables.product.prodname_github_codespaces %} in the browser. They are useful for debugging problems creating and connecting to {% data variables.product.prodname_github_codespaces %}.

The following instructions are for Chrome. The steps for other browsers are similar.

1. In the browser window for the codespace you want to debug, open the developer tools window.
1. Click the **Console** tab.
1. Show the console sidebar, if it is not already displayed. For more information, see "[Console features reference](https://developer.chrome.com/docs/devtools/console/reference#sidebar)" in the Chrome for Developers documentation.
1. In the sidebar, click **NUMBER errors** to show only the errors.
1. In the log area on the right, right-click and select **Save as** to save a copy of the errors to your local machine.

   ![Screenshot of the developer tools panel in the Chrome browser. The right-click menu is displayed, showing the option "Save as."](/assets/images/help/codespaces/browser-console-log-save.png)

{% endwebui %}

{% jetbrains_beta %}

{% data reusables.codespaces.jetbrains-open-codespace-plugin %}
1. In the {% data variables.product.prodname_github_codespaces %} tool window, click the log icon.

   ![Screenshot of the log button (a book symbol).](/assets/images/help/codespaces/jetbrains-plugin-icon-log.png)

## JetBrains logs

You can download logs for the remote JetBrains IDE and the local client application by going to the **Help** menu in the JetBrains client application and clicking **Collect Host and Client Logs**.

{% endjetbrains_beta %}

## Further reading

* "[AUTOTITLE](/codespaces/managing-codespaces-for-your-organization/reviewing-your-organizations-audit-logs-for-github-codespaces)"
* "[AUTOTITLE](/codespaces/managing-your-codespaces/reviewing-your-security-logs-for-github-codespaces)"
