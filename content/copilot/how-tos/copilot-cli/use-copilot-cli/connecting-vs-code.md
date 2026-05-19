---
title: Connecting {% data variables.copilot.copilot_cli %} to {% data variables.product.prodname_vscode_shortname %}
shortTitle: Connect to {% data variables.product.prodname_vscode_shortname %}
allowTitleToDifferFromFilename: true
intro: 'Connect {% data variables.copilot.copilot_cli_short %} to {% data variables.product.prodname_vscode_shortname %} to share context, trust settings, and output.'
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/copilot-cli/connecting-vs-code
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

Connecting {% data variables.copilot.copilot_cli_short %} to {% data variables.product.prodname_vscode_shortname %} gives you the best of both environments: the speed and flexibility of a terminal-based workflow, combined with the rich visual tools of your editor. With a connection established, you can:

* **Use your editor selection as context** — Select code in {% data variables.product.prodname_vscode_shortname %} and reference it directly in CLI prompts, without needing to specify file paths or line numbers.
* **Review proposed changes as diffs** — When {% data variables.product.prodname_copilot_short %} suggests file edits, they appear as a side-by-side diff in {% data variables.product.prodname_vscode_shortname %} so you can review, accept, or reject each change visually.
* **Surface live diagnostics** — {% data variables.product.prodname_copilot_short %} can access real-time errors and warnings from {% data variables.product.prodname_vscode_shortname %}, so it can find and fix problems that your editor has already detected.
* **Pick up sessions across tools** — View CLI session transcripts in {% data variables.product.prodname_vscode_shortname %} and resume them in the integrated terminal without losing context.

## Connecting to {% data variables.product.prodname_vscode_shortname %}

{% data variables.copilot.copilot_cli_short %} can automatically connect to {% data variables.product.prodname_vscode_shortname %} when you start a CLI session. Additionally, during an interactive session, you can choose to connect to any workspace that is currently open in {% data variables.product.prodname_vscode_shortname %} on the local machine.

### Automatic connection at startup

When you start {% data variables.copilot.copilot_cli_short %}, it checks whether the current working directory from which you started the CLI matches any workspace folder you have open in {% data variables.product.prodname_vscode_shortname %} in trusted mode. If there is a match, the CLI connects to the relevant {% data variables.product.prodname_vscode_shortname %} instance. The connection happens regardless of where you are using {% data variables.copilot.copilot_cli_short %}: in a built-in terminal in {% data variables.product.prodname_vscode_shortname %}, or in an external terminal application running in a separate window.

If {% data variables.copilot.copilot_cli_short %} successfully connects to {% data variables.product.prodname_vscode_shortname %}, the environment message that's displayed at startup will include either "Visual Studio Code connected" or "Visual Studio Code - Insiders connected."

If you have the same workspace open in more than one {% data variables.product.prodname_vscode_shortname %} window, the CLI connects to one of them automatically. It cannot connect to multiple IDE instances at the same time. If you prefer to connect to a different instance of {% data variables.product.prodname_vscode_shortname %}, you can switch by using the `/ide` command.

> [!NOTE]
> If you are using {% data variables.product.prodname_github_codespaces %}, a CLI session running locally cannot connect to a {% data variables.product.prodname_vscode_shortname %} workspace running in the remote codespace. You can, however, connect when you use the CLI inside the codespace—that is, within {% data variables.product.prodname_vscode_shortname %}'s built-in terminal or in an SSH session on the remote codespace host.

### Manual connection during an interactive session

If you open a workspace in {% data variables.product.prodname_vscode_shortname %} after starting {% data variables.copilot.copilot_cli_short %}, or if you started the CLI from a directory that doesn't match any open workspace, you can use the `/ide` slash command to manually connect to a {% data variables.product.prodname_vscode_shortname %} workspace. The workspace you want to connect to must be currently open in trusted mode in {% data variables.product.prodname_vscode_shortname %}.

## Managing the connection with the `/ide` slash command

Use the `/ide` slash command in an interactive {% data variables.copilot.copilot_cli_short %} session to:

* **View** the current connection status—for example, if you want to check which workspace is currently connected.
* **Connect** to a different {% data variables.product.prodname_vscode_shortname %} workspace.
* **Disconnect** from {% data variables.product.prodname_vscode_shortname %}.

You can also toggle the following settings from the `/ide` menu:

* **Auto-connect to matching IDE workspace**—controls whether the CLI automatically connects to a matching {% data variables.product.prodname_vscode_shortname %} workspace at startup.
* **Open file edit diffs in IDE**—controls whether proposed file changes are shown as diffs in a {% data variables.product.prodname_vscode_shortname %} editor tab.

## Using {% data variables.product.prodname_vscode_shortname %} context in prompts

When {% data variables.copilot.copilot_cli_short %} is connected to {% data variables.product.prodname_vscode_shortname %}, it receives your current editor selection whenever the selection changes. The selection is displayed under your prompt in the CLI, aligned to the right. This selection indicator is updated whenever you select different code in {% data variables.product.prodname_vscode_shortname %}.

This allows you to select some code in {% data variables.product.prodname_vscode_shortname %} and then use a prompt such as:

```copilot
Debug this
```

Alternatively, you can select some code but ask {% data variables.product.prodname_copilot_short %} about the whole file:

```copilot
Explain this file
```

## Reviewing file changes as diffs

When you ask {% data variables.product.prodname_copilot_short %} to make changes to a file in the workspace, {% data variables.product.prodname_vscode_shortname %} displays the proposed changes as a diff in a new editor tab. This makes it easy to see exactly what {% data variables.product.prodname_copilot_short %} is proposing. Use the accept (✓) or reject (✗) buttons in the top-right of the diff view to apply or discard the changes. Once you accept or reject the diff, the pending file-edit permission is resolved and the CLI continues its workflow.

> [!NOTE]
> * The diff view is not shown if you have allowed {% data variables.product.prodname_copilot_short %} to edit files without your approval—for example, using the `--allow-all` or `--yolo` command-line options, or the `/allow-all` or `/yolo` slash commands. Instead, the proposed changes are applied directly to the file in the workspace without showing a diff, and the CLI continues immediately with the updated file content.
> * If you prefer not to use the diff view in {% data variables.product.prodname_vscode_shortname %} you can turn this feature off in the `/ide` menu. When you turn this off, the proposed file changes are displayed in the CLI.

## Viewing and resuming CLI sessions in {% data variables.product.prodname_vscode_shortname %}

You can read the transcript of any {% data variables.copilot.copilot_cli_short %} session for the current workspace from within {% data variables.product.prodname_vscode_shortname %}.

1. Open the **{% data variables.product.prodname_copilot_short %} Chat** side bar in {% data variables.product.prodname_vscode_shortname %}.
1. Click the Sessions icon (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" aria-hidden="true" style="vertical-align: middle;"><path d="M12.5 1H3.5C2.122 1 1 2.122 1 3.5V12.5C1 13.879 2.122 15 3.5 15H12.5C13.878 15 15 13.879 15 12.5V3.5C15 2.122 13.878 1 12.5 1ZM2 12.5V3.5C2 2.673 2.673 2 3.5 2H9V14H3.5C2.673 14 2 13.327 2 12.5ZM14 12.5C14 13.327 13.327 14 12.5 14H10V2H12.5C13.327 2 14 2.673 14 3.5V12.5Z"/></svg>) at the top right of the Chat panel to display the Sessions view.

   The Sessions view lists your most recent {% data variables.product.prodname_copilot_short %} sessions, with the most recent at the top.

1. Click a session to read the full input and output text. For CLI sessions, the transcript is identical to what was displayed in the terminal during that session.

If you have run a CLI session for the current workspace that you have not yet viewed in the Sessions view, a dot icon and an unread count are shown next to the Chat icon in the {% data variables.product.prodname_vscode_shortname %} title bar. Click it to toggle a filtered list of unread sessions. Click it again to clear the filter and view all sessions.

![Screenshot of the unread sessions indicator in {% data variables.product.prodname_vscode_shortname %}.](/assets/images/help/copilot/copilot-cli-vscode-unread-session.png)

To continue a CLI session in {% data variables.product.prodname_vscode_shortname %}'s integrated terminal, right-click the session in the Sessions view and choose **Resume in Terminal**. This is a quick way to pick up work from an external terminal window without losing any session context.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-cli)
