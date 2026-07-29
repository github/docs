---
title: Configuring local sandbox settings
shortTitle: Configure local sandbox
intro: 'Use the `/sandbox` slash command in {% data variables.copilot.copilot_cli_short %} to control how the local sandbox restricts filesystem access, network connectivity, and system capabilities.'
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

## About local sandbox configuration

You can use the `/sandbox` slash command to grant extra paths, adjust network access, or turn sandboxing on or off.

For a conceptual overview of cloud and local sandboxes for {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes).

## Opening the sandbox configuration

1. Start a {% data variables.copilot.copilot_cli_short %} session.
1. Enter the `/sandbox` slash command.

   This opens an interactive configuration interface with three tabs: **General**, **Filesystem**, and **Network**. Use <kbd>Tab</kbd> to switch between tabs. Press <kbd>Esc</kbd> to save your changes and close the configuration.

## Configuring general settings

The **General** tab controls the top-level sandbox behavior.

| Setting | Description |
| --- | --- |
| **Enable sandbox** | Run shell commands inside the sandbox. You can also toggle this with `/sandbox enable` and `/sandbox disable`. |
| **Allow sandbox bypass** | Let the model request that individual commands run outside the sandbox, subject to approval. Turned on by default. For more information, see [Allowing sandbox bypass](#allowing-sandbox-bypass). |
| **Sandbox MCP servers** | Run MCP servers inside the sandbox. Turned on by default. |
| **Sandbox LSP servers** | Run language servers (LSP servers) inside the sandbox. Turned on by default. |
| **Authenticate git** | Inject a {% data variables.product.github %} token so authenticated HTTPS `git` works inside the sandbox without a credential helper. Turned on by default. |
| **Authenticate gh** | Export `GH_TOKEN` so that {% data variables.product.prodname_cli %} (note: the `gh` CLI, not `copilot`) works inside the sandbox without reaching its stored credentials (configuration directory or OS keychain), which the sandbox blocks. Turned on by default. |
| **Allow keychain access** | Available on macOS only. Let sandboxed commands use the macOS Keychain—for example, to access credentials used by `git` and `gh` credential helpers. Turned off by default. |

### Allowing sandbox bypass

The **Allow sandbox bypass** setting controls what happens when {% data variables.product.prodname_copilot_short %} can't run a command successfully inside the sandbox.

* **On (default)**: If a command fails inside the sandbox, you are prompted to allow {% data variables.product.prodname_copilot_short %} to run the command outside the sandbox. Your response to this prompt applies to this specific attempt to run the command. Optionally, you can choose to disable the sandbox for the rest of the session, or you can enter an instruction for {% data variables.product.prodname_copilot_short %} to work on instead.
* **Off**: If {% data variables.product.prodname_copilot_short %} can't run a command successfully in the sandbox, it stops working on the task and reports the failure.

## Configuring filesystem settings

The **Filesystem** tab controls which directories and files the sandboxed process can access.

By default, {% data variables.product.prodname_copilot_short %} is granted read/write permission to everything in and below the current working directory. If you are in a Git repository, {% data variables.product.prodname_copilot_short %} is also granted:

* Read/write permission to everything in and below the repository's `.git` directory.
* On Windows and macOS, read permission for everything else in the repository above the current working directory.
* On Linux, read/write permission for files above the current working directory in the repository.

| Setting | Description |
| --- | --- |
| **Include working directory** | Turned on by default. The current working directory (and the enclosing repository's `.git` directory, if any) is automatically added to the list of read/write paths. Unselect this option if you don't want the working directory to be granted read/write access automatically, and then manually allow access to specific paths. |

> [!IMPORTANT]
> Unselecting **Include working directory** removes access to everything in and below the `.git` directory of a Git repository. As a result, Git operations such as `status`, `add`, `commit`, and `diff` will fail unless you manually add access for this directory.

### Adding filesystem path rules

You can specify paths that you want to add to the sandbox. This allows you to grant read-only or read/write access to directories and files outside the working directory. You can also deny access, to exclude directories and files from the sandbox.

1. In the **Filesystem** tab, press <kbd>A</kbd> to add a new path rule.
1. Type a file or directory path. Use an absolute path—for example, `/Users/octocat/projects/app` on macOS or Linux, or `C:\Users\octocat\projects\app` on Windows. Then press <kbd>Enter</kbd>.

   > [!NOTE]
   > Adding a directory includes it entire subtree. Wildcards are not supported.

1. Use the left and right arrow keys on your keyboard to navigate between the permissions options: **Read/Write**, **Read-Only**, **Denied**. Then press <kbd>Enter</kbd> to select an option.

After you have added filesystem paths, you can edit or delete them.

1. Use the up and down arrow keys to select a path.
1. Press <kbd>Enter</kbd> to edit the path, or <kbd>D</kbd> to delete it.

## Configuring network settings

The **Network** tab controls whether sandboxed processes can make network connections.

| Setting | Description |
| --- | --- |
| **Allow outbound connections** | Turned on by default. When turned on, the sandboxed process can reach external hosts on the internet. Turn this off to fully isolate the sandbox from the network. |
| **Allow local network** | Turned on by default. When turned on, the sandboxed process can reach hosts on your local network (for example, `localhost` or other devices on your LAN). Turn this off to block the sandbox from reaching local or private network services. |

## Enabling and disabling the sandbox quickly

You can toggle the sandbox on or off without opening the full configuration interface:

* **Enable**: Enter `/sandbox enable` in the {% data variables.copilot.copilot_cli_short %} session.
* **Disable**: Enter `/sandbox disable` in the {% data variables.copilot.copilot_cli_short %} session.

These commands change the **Enable sandbox** setting on the **General** tab.

## Viewing your current sandbox settings

Settings are stored in `settings.json` under the `sandbox` key in your {% data variables.copilot.copilot_cli_short %} configuration directory. For more information about the configuration directory, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference).

You can view your current sandbox settings from within a {% data variables.copilot.copilot_cli_short %} session.

1. Enter `/settings`.
1. Press <kbd>/</kbd> to search for settings.
1. Type `sandbox` to filter the list of settings.

## Further reading

* [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes)
* [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing)
* [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli)
