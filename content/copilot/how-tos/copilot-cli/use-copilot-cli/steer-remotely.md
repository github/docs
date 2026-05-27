---
title: Steering a {% data variables.copilot.copilot_cli %} session from another device
shortTitle: Steer a session remotely
allowTitleToDifferFromFilename: true
intro: 'Enable remote control for a {% data variables.copilot.copilot_cli_short %} session so you can monitor progress, respond to prompts, and continue working from {% data variables.product.prodname_dotcom_the_website %} or {% data variables.product.prodname_mobile %}.'
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/copilot-cli/steer-remotely
category:
  - Author and optimize with Copilot # Copilot discovery page
  - Build with Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

Remote control lets you connect to a running {% data variables.copilot.copilot_cli_short %} session from any browser or from {% data variables.product.prodname_mobile %}. You can view session output, respond to permission requests, and continue working in the session without being at the machine where the session is running.

This article explains how to enable and use remote control. For more conceptual information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-remote-control).

## Prerequisites

* The machine where the CLI session is running must be online, with the session actively running in a terminal.

  > [!TIP]
  > Use the `/keep-alive` slash command to prevent your machine from going to sleep while you're away. See [Preventing your machine from going to sleep](#preventing-your-machine-from-going-to-sleep).

* The working directory must contain a Git repository hosted on {% data variables.product.prodname_dotcom_the_website %}. If you are not in a {% data variables.product.prodname_dotcom %} repository, the CLI displays: "Remote session disabled: not in a {% data variables.product.github %} repository."

## Enabling remote control for a session

You can enable remote control in three ways:

* With a slash command during an interactive session.
* With a command-line option when you start {% data variables.copilot.copilot_cli_short %}.
* By configuring the CLI to enable remote control by default for all interactive sessions.

### Using the `/remote` slash command

If you are already in an interactive session and want to enable remote control, enter:

```copilot copy
/remote on
```

The CLI connects to {% data variables.product.prodname_dotcom_the_website %} and displays details for accessing the session remotely—see [Accessing a session from {% data variables.product.prodname_dotcom_the_website %}](#accessing-a-session-from-githubcom) and [Accessing a session from {% data variables.product.prodname_mobile %}](#accessing-a-session-from-github-mobile) later in this article.

You can use the `/remote` slash command without an argument to check the current remote control status, or to redisplay the remote access details if remote control is currently enabled. If you want to end the remote connection for the current session, enter `/remote off`.

### Using the `--remote` command-line option

If you think you may want to access a session remotely, you can start the CLI with the `--remote` command-line option. This avoids the need to remember to use the `/remote` slash command during the session.

```bash copy
copilot --remote
```

Details for accessing the session remotely are displayed when the interactive session starts and can be displayed again at any time by using the `/remote` slash command.

### Configuring remote control to always be enabled

If you always want your interactive CLI sessions to be remotely accessible, add the following to your {% data variables.product.prodname_copilot_short %} settings file (typically located at `~/.copilot/settings.json`):

```json copy
{
  "remoteSessions": true
}
```

To override this setting for a particular session, use the `--no-remote` option when you start the session:

```bash copy
copilot --no-remote
```

> [!NOTE]
> The command-line options `--remote` and `--no-remote` always take precedence over the `remoteSessions` setting in the settings file.

## Accessing a session from {% data variables.product.prodname_dotcom_the_website %}

When you enable remote control, the CLI displays a link to the session on {% data variables.product.prodname_dotcom_the_website %}.

Use the link to access the session in your default web browser. You must be signed in to {% data variables.product.prodname_dotcom %} with the same account that started the CLI session.

You can also access the session without the link:

1. Log on to {% data variables.product.prodname_dotcom_the_website %} on any computer.
1. In the top-left corner of {% data variables.product.prodname_dotcom %}, click {% octicon "three-bars" aria-label="Open menu" %}.
1. Click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**.

   Your CLI session is listed under "Recent agent sessions."

1. Optionally, use the **Type** filter at the top right of the list to show only {% data variables.copilot.copilot_cli_short %} sessions.
1. Click your {% data variables.copilot.copilot_cli_short %} session to open it.

If you started the session from a local copy of a {% data variables.product.github %} repository, you can also access the session from the **Agents** tab of that repository on {% data variables.product.prodname_dotcom_the_website %}.

> [!IMPORTANT]
> Remotely accessible sessions are user-specific: you can only access your own {% data variables.copilot.copilot_cli_short %} sessions. Other {% data variables.product.github %} users cannot access your sessions.

## Accessing a session from {% data variables.product.prodname_mobile %}

A {% data variables.copilot.copilot_cli_short %} session is available in {% data variables.product.prodname_mobile %} as soon as you enable remote control. To find your session in {% data variables.product.prodname_mobile %}:

1. Tap the **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}** button in the bottom right corner of the screen.

   The session is listed under "Agent sessions."

1. Tap the session to open it.

### Use a QR code to quickly open a session on your phone

1. In an interactive session, enter the `/remote` slash command to redisplay the remote session details.
1. Press <kbd>Ctrl</kbd>+<kbd>E</kbd> to toggle on/off display of a QR code.

   > [!NOTE]
   > This keyboard shortcut expands/collapses all details in the session conversation, not just the QR code. It only works if the input field is currently empty.

1. Scan the QR code with your phone to go directly to the session in {% data variables.product.prodname_mobile %}.

## Preventing your machine from going to sleep

You can use the `/keep-alive` slash command to prevent your machine from going to sleep. This allows you to maintain the remote connection and continue interacting with the session from {% data variables.product.prodname_dotcom_the_website %} or {% data variables.product.prodname_mobile %}.

In an interactive session, enter `/keep-alive OPTION`, where `OPTION` is one of:

* `on`: Prevents the machine from going to sleep while the CLI session is active.
* `off`: Allows the machine to go to sleep as normal.
* `busy`: Prevents the machine from going to sleep only while {% data variables.product.prodname_copilot_short %} is working on a task. Once the agent completes a task the machine can go to sleep as normal. The machine will not go to sleep if {% data variables.product.prodname_copilot_short %} is waiting for you to respond to a request for input from you.
* `NUMBERm`, `NUMBERh`, or `NUMBERd` (for example, `30m`, `8h`, `1d`): Prevents the machine from going to sleep for a specific number of minutes, hours, or days. If a bare number is provided without a suffix, it is treated as minutes.

Without passing an `OPTION`, the `/keep-alive` command displays the current keep-alive status.

## Reviewing previous sessions

You can view old {% data variables.copilot.copilot_cli_short %} sessions on {% data variables.product.prodname_dotcom_the_website %} or in {% data variables.product.prodname_mobile %}.

1. Go to your list of recent agent sessions on {% data variables.product.prodname_dotcom_the_website %} or in {% data variables.product.prodname_mobile %}. See [Accessing a session from github.com](#accessing-a-session-from-githubcom) and [Accessing a session from GitHub Mobile](#accessing-a-session-from-github-mobile) earlier in this article.
1. Click or tap the session you want to review.

On {% data variables.product.prodname_dotcom_the_website %}, a message tells you the `copilot --resume` command to use if you want to resume the session. Enter this command in your terminal on the machine where you ran that session.

## Resuming a session

{% data reusables.cli.remote-access-reconnection %}

## Preventing remote control

Remote control is disabled by default, but may be enabled in your {% data variables.product.prodname_copilot_short %} settings file (typically `~/.copilot/settings.json`). You can ensure a session is not remotely controllable by:

* **For a single session**: Start the CLI with `--no-remote` to prevent remote control for that session, regardless of your settings file value.
* **Permanently**: Remove the `"remoteSessions": true` setting from `~/.copilot/settings.json` (or set it to `false`).

## Further reading

* [{% data variables.copilot.copilot_cli_short %} sessions in {% data variables.product.prodname_vscode %}](https://code.visualstudio.com/docs/copilot/agents/copilot-cli) in the {% data variables.product.prodname_vscode_shortname %} documentation.
* [Enable {% data variables.copilot.copilot_cli_short %} remote control](https://github.com/microsoft/copilot-intellij-feedback/wiki/Enable-Copilot-CLI-Remote-Control) for JetBrains IDEs, in the `microsoft/copilot-intellij-feedback` repository.
