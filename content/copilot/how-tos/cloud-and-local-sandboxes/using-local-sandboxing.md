---
title: Using local sandboxing
shortTitle: Use local sandboxing
intro: 'Enable local sandboxing so that {% data variables.copilot.copilot_cli_short %} runs the commands and tools it invokes on your behalf inside an operating-system sandbox.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

{% data reusables.cli.public-preview-local-sandbox %}

{% data reusables.cli.sandbox-on-windows %}

## About local sandboxing

Sandboxing is currently an experimental feature. To use it, start {% data variables.copilot.copilot_cli_short %} with the `‑‑experimental` command line option, or enter `/experimental on` during a session.

When you enable local sandboxing, {% data variables.copilot.copilot_cli_short %} runs most of the commands and tools it invokes on your behalf inside an operating-system sandbox. After you enable local sandboxing, it is used for all your {% data variables.copilot.copilot_cli_short %} sessions until you disable it, or turn it off for a specific session. If enterprise managed settings require sandboxing, ordinary configuration, the `--no-sandbox` command line option, and the `/sandbox disable` command cannot disable it. However, if the effective policy permits sandbox bypass, you can explicitly disable sandboxing for the rest of the current session from an active bypass permission prompt.

By default, sandboxed commands and tools can write within your current working directory and temporary folders. Your user profile (home) directory, along with system and tool locations are read-only. Other disk locations are blocked. In a Git repository, the rest of the repository above your current working directory is readable but not writable. Access to your local and private network is permitted, as is outbound internet access.

By default, authenticated Git and {% data variables.product.prodname_cli %} (`gh`) operations continue to work inside the sandbox, because {% data variables.copilot.copilot_cli_short %} makes your {% data variables.product.github %} credentials available to sandboxed commands. This allows actions such as `git push` and `gh pr create` to succeed. You can turn this off in your sandbox settings.

For a conceptual overview of sandboxing in {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes).

## Sandbox commands

You manage local sandboxing from within a {% data variables.copilot.copilot_cli_short %} session using the `/sandbox` slash command. It has the following subcommands.

| Command | Description |
| --- | --- |
| `/sandbox status` | Show whether sandboxing is currently being used for the session. See [Checking whether sandboxing is being used](#checking-whether-sandboxing-is-being-used). |
| `/sandbox policy` | Show the effective filesystem policy for the current directory—the paths that are readable, writable, or blocked, and the network access in force. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/understanding-local-sandboxing). |
| `/sandbox config` | Open the interactive settings interface. Entering `/sandbox` on its own does the same thing. For more information, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings). |
| `/sandbox enable` | Turn local sandboxing on. See [Enabling local sandboxing](#enabling-local-sandboxing). |
| `/sandbox disable` | Turn local sandboxing off. If enterprise managed settings require sandboxing, this is refused. See [Disabling local sandboxing](#disabling-local-sandboxing). |

## Enabling local sandboxing

To enable local sandboxing, enter the following command in an interactive {% data variables.copilot.copilot_cli_short %} session:

```shell copy
/sandbox enable
```

Sandboxing starts being used immediately for the current session.

After you enable local sandboxing, it continues to be used for the current and future interactive sessions, and for programmatic sessions.

> [!NOTE]
> If you have other sessions open when you enter `/sandbox enable`, sandboxing is not immediately used in those sessions. To use sandboxing in an already-open session, do either of the following in that session:
>
> * Close the session and restart it, for example by running `copilot --continue`.
> * Enter `/sandbox enable`.

## Disabling local sandboxing

If enterprise managed settings require sandboxing, `/sandbox disable` is refused. If the effective policy permits sandbox bypass, you can instead explicitly disable sandboxing for the rest of the current session from an active bypass permission prompt.

To stop using local sandboxing, enter the following command in an interactive {% data variables.copilot.copilot_cli_short %} session:

```shell copy
/sandbox disable
```

Sandboxing is no longer used in the current session, or in new and restarted sessions.

Your choice of whether to use local sandboxing is saved as the `sandbox.enabled` setting in your personal settings file for the CLI (`~/.copilot/settings.json` by default).

## Using sandboxing for a single session

You can use the `--sandbox` command line option to use sandboxing for a single session, without enabling sandboxing for your other sessions. If sandboxing is already enabled, you can disable it for a single session by using the `--no-sandbox` option. The `--no-sandbox` option cannot override enterprise managed settings that require sandboxing.

You can combine these options with the `-p` command line option to control sandboxing for programmatic use of the CLI. For example:

```shell copy
copilot --sandbox -p "PROMPT"
```

## Running a single command outside the sandbox

When a command needs broader access than the sandbox allows, {% data variables.product.prodname_copilot_short %} can request to run that single command outside the sandbox. You are shown a confirmation prompt describing the command. You can approve that single command, keep it inside the sandbox, or disable sandboxing for the rest of the current session. The session opt-out is available only while responding to an active bypass prompt and only if the effective policy permits sandbox bypass.

This behavior is enabled by default and can be turned off in your sandbox settings.

## Checking whether sandboxing is being used

To check whether local sandboxing is being used for the current session, enter:

```shell copy
/sandbox status
```

{% data variables.copilot.copilot_cli_short %} reports whether sandboxing is enabled for the session. If your organization's managed settings require sandboxing, the status notes this too. Because the status reflects what the session actually enforces, it is the reliable way to confirm whether the commands {% data variables.product.prodname_copilot_short %} runs are being sandboxed.

To see not only whether sandboxing is on, but exactly which paths are readable, writable, or blocked, enter `/sandbox policy`. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/understanding-local-sandboxing).

You can also see sandbox status at a glance in the status line, which contains `sandbox enabled` when sandboxing is being used. Display of sandbox information in the status line is turned on by default. If it has been turned off, you can turn it back on:

1. Enter `/statusline`.
1. Move the selection down the list of options to **sandbox**.
1. Press <kbd>Enter</kbd> to toggle the setting so that it shows a check mark.

## Further reading

* [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes)
* [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings)
