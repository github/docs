---
title: Steering a {% data variables.copilot.copilot_cli %} session from another device
shortTitle: Steer a session remotely
allowTitleToDifferFromFilename: true
intro: 'Enable remote access to a {% data variables.copilot.copilot_cli_short %} session so you can monitor progress, respond to prompts, and continue working from {% data variables.product.prodname_dotcom_the_website %} or {% data variables.product.prodname_mobile %}.'
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

Remote access lets you connect to a running {% data variables.copilot.copilot_cli_short %} session from any browser or from {% data variables.product.prodname_mobile %}. You can view session output, respond to permission requests, and continue working in the session without being at the machine where the session is running.

This article explains how to enable and use remote access. For more conceptual information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-remote-access).

{% data reusables.cli.public-preview-remote-access %}

## Prerequisites

* The machine where the CLI session is running must be online, with the session actively running in a terminal.

  > [!TIP]
  > Use the `/keep-alive` slash command to prevent your machine from going to sleep while you're away. See [Preventing your machine from going to sleep](#preventing-your-machine-from-going-to-sleep).

* The working directory must contain a Git repository hosted on {% data variables.product.prodname_dotcom_the_website %}. If you are not in a {% data variables.product.prodname_dotcom %} repository, the CLI displays: "Remote session disabled: not in a {% data variables.product.github %} repository."

## Enabling remote access for a session

You can enable remote access in three ways:

* With a slash command during an interactive session.
* With a command-line option when you start {% data variables.copilot.copilot_cli_short %}.
* By configuring the CLI to enable remote access by default for all interactive sessions.

### Using the `/remote` slash command

If you are already in an interactive session and want to enable remote access, enter:

```copilot copy
/remote
```

The CLI connects to {% data variables.product.prodname_dotcom_the_website %} and displays details for accessing the session remotely—see [Accessing a session from {% data variables.product.prodname_dotcom_the_website %}](#accessing-a-session-from-githubcom) and [Accessing a session from {% data variables.product.prodname_mobile %}](#accessing-a-session-from-github-mobile) later in this article.

### Using the `--remote` command-line option

If you think you may want to access a session remotely, you can start the CLI with the `--remote` command-line option. This avoids the need to remember to use the `/remote` slash command during the session.

```bash copy
copilot --remote
```

Details for accessing the session remotely are displayed when the interactive session starts and can be displayed again at any time by using the `/remote` slash command.

### Configuring remote access to always be enabled

If you always want your interactive CLI sessions to be remotely accessible, add the following to your {% data variables.product.prodname_copilot_short %} configuration file (typically located at `~/.copilot/settings.json`):

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
> The command-line options `--remote` and `--no-remote` always take precedence over the `remoteSessions` setting in the configuration file.

## Accessing a session from {% data variables.product.prodname_dotcom_the_website %}

When remote access is enabled, the CLI displays a link in the format:

```text
https://github.com/OWNER/REPO/tasks/TASK_ID
```

Use this link to access the session in a web browser. You must be signed in to {% data variables.product.prodname_dotcom %} with the same account that started the CLI session.

You can also access the session from your list of recent agent sessions on {% data variables.product.prodname_dotcom_the_website %}:

1. In the top-left corner of {% data variables.product.prodname_dotcom %}, click {% octicon "three-bars" aria-label="Open menu" %}.
1. Click **{% octicon "copilot" aria-hidden="true" aria-label="copilot" %} {% data variables.product.prodname_copilot_short %}**.
1. Under "Recent agent sessions", click your {% data variables.copilot.copilot_cli_short %} session to open it.

> [!IMPORTANT]
> Sessions are user-specific: you can only access your own {% data variables.copilot.copilot_cli_short %} sessions. Other {% data variables.product.github %} users cannot access your sessions.

## Accessing a session from {% data variables.product.prodname_mobile %}

A {% data variables.copilot.copilot_cli_short %} session is available in {% data variables.product.prodname_mobile %} as soon as you enable remote access. To find your session in {% data variables.product.prodname_mobile %}:

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

## Resuming a session with remote access

When you shut down a session that has remote access enabled, the CLI displays a resume command that includes `--remote`:

```bash
copilot --resume=SESSION_ID --remote
```

Use this command to restart the session with remote access enabled.

Similarly, adding `--remote` to a `copilot --continue` command resumes the most recent session with remote access enabled.

If you have `"remoteSessions": true` in your {% data variables.product.prodname_copilot_short %} configuration file, resumed sessions will have remote access enabled automatically and you do not need to use the `--remote` option.

## Preventing remote access

Remote access is disabled by default, but may be enabled in your {% data variables.product.prodname_copilot_short %} configuration file. You can ensure a session is not remotely accessible by:

* **For a single session**: Start the CLI with `--no-remote` to prevent remote access for that session, regardless of your configuration file setting.
* **Permanently**: Remove the `"remoteSessions": true` setting from your {% data variables.product.prodname_copilot_short %} configuration file (or set it to `false`).
