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

When you enable local sandboxing, {% data variables.copilot.copilot_cli_short %} runs most of the commands and tools it invokes on your behalf inside an operating-system sandbox. After you enable local sandboxing, it is used for all your {% data variables.copilot.copilot_cli_short %} sessions until you disable it, or turn it off for a specific session.

By default, sandboxed commands and tools can write within your current working directory and temporary folders. Your user profile (home) directory, along with system and tool locations are read-only. Other disk locations are blocked. In a Git repository, access above the current working directory varies by operating system. Access to your local and private network is permitted, as is outbound internet access.

By default, authenticated Git and {% data variables.product.prodname_cli %} (`gh`) operations continue to work inside the sandbox, because {% data variables.copilot.copilot_cli_short %} makes your {% data variables.product.github %} credentials available to sandboxed commands. This allows actions such as `git push` and `gh pr create` to succeed. You can turn this off in your sandbox settings.

For a conceptual overview of sandboxing in {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes).

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

To stop using local sandboxing, enter the following command in an interactive {% data variables.copilot.copilot_cli_short %} session:

```shell copy
/sandbox disable
```

Sandboxing is no longer used in the current session, or in new and restarted sessions.

Your choice of whether to use local sandboxing is saved as the `sandbox.enabled` setting in your personal settings file for the CLI (`~/.copilot/settings.json` by default).

## Using sandboxing for a single session

You can use the `--sandbox` command line option to use sandboxing for a single session, without enabling sandboxing for your other sessions. If sandboxing is already enabled, you can disable it for a single session by using the `--no-sandbox` option.

You can combine these options with the `-p` command line option to control sandboxing for programmatic use of the CLI. For example:

```shell copy
copilot --sandbox -p "PROMPT"
```

## Running a single command outside the sandbox

When a command needs broader access than the sandbox allows, {% data variables.product.prodname_copilot_short %} can request to run that single command outside the sandbox. You are shown a confirmation prompt describing the command, and it runs outside the sandbox only if you approve it; otherwise it stays sandboxed. The rest of your session remains sandboxed either way.

This behavior is enabled by default and can be turned off in your sandbox settings.

## Checking whether sandboxing is being used

To check whether sandboxing is being used for the current session, look at the status line. If sandboxing is being used, the status line contains `sandbox enabled`.

Display of sandbox information in the status line is turned on by default. If it is turned off, you can turn it back on:

1. Enter `/statusline`.
1. Move the selection down the list of options to **sandbox**.
1. Press <kbd>Enter</kbd> to toggle the setting so that it shows a check mark.

## Further reading

* [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes)
* [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings)
