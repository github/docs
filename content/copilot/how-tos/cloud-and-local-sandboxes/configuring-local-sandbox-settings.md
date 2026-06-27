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

{% data reusables.cli.public-preview-sandbox %} 

> [!IMPORTANT]
> Local sandboxing on Windows requires a Windows Insiders build.


## About local sandbox configuration

When you enable local sandboxing in {% data variables.copilot.copilot_cli_short %}, shell commands that {% data variables.product.prodname_copilot_short %} runs on your behalf execute inside an isolated sandbox. You can fine-tune the sandbox's behavior—controlling filesystem paths, network access, and general settings—using the `/sandbox` slash command.

Settings are stored in `settings.json` under the `sandbox` key in your {% data variables.copilot.copilot_cli_short %} configuration directory. For more information about the configuration directory, see [AUTOTITLE](/copilot/reference/copilot-cli-reference/cli-config-dir-reference).

For a conceptual overview of {% data variables.copilot.sandbox %}, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes).

## Opening the sandbox configuration

1. Start a {% data variables.copilot.copilot_cli_short %} session.
1. Enter the `/sandbox` slash command.

   This opens an interactive configuration interface with three tabs: **General**, **Filesystem**, and **Network**. Use <kbd>Tab</kbd> to switch between tabs. Press <kbd>Esc</kbd> to save your changes and close the configuration.

## Configuring general settings

The **General** tab controls the top-level sandbox behavior.

| Setting | Description |
| --- | --- |
| **Sandboxing enabled** | When turned on, shell commands that {% data variables.product.prodname_copilot_short %} executes run inside the sandbox. You can also toggle this with `/sandbox enable` and `/sandbox disable`. |
| **Allow keychain access** | When turned on, sandboxed commands can use the macOS Keychain—for example, to access credentials used by `git` and `gh` credential helpers. Turn this off if you want to prevent sandboxed processes from reading stored credentials. |

## Configuring filesystem settings

The **Filesystem** tab controls which directories and files the sandboxed process can access. By default, the sandbox restricts writes outside your working directory.

| Setting | Description |
| --- | --- |
| **Include working directory** | When turned on, the current working directory is automatically added to the list of read/write paths. This means sandboxed commands can read and write files in your project directory without manually adding it to the path list. |
| **Clear policy on exit** | When turned on, all filesystem permissions are reset when the sandbox exits. This ensures that each session starts with a clean set of permissions. |

### Adding filesystem path rules

You can add specific path rules to grant the sandbox read-only or read/write access to directories and files outside the working directory.

1. In the **Filesystem** tab, press <kbd>A</kbd> to add a new path rule.
1. Enter the file or directory path.
1. Set the permission level for the path.

Use <kbd>Enter</kbd> to edit an existing path rule, and <kbd>D</kbd> to delete one.

## Configuring network settings

The **Network** tab controls whether sandboxed processes can make network connections.

| Setting | Description |
| --- | --- |
| **Allow outbound connections** | When turned on, the sandboxed process can reach external hosts on the internet. Turn this off to fully isolate the sandbox from the network. |
| **Allow local network** | When turned on, the sandboxed process can reach hosts on your local network (for example, `localhost` or other devices on your LAN). |

### Adding network host rules

> [!WARNING]
> Per-host network filtering with `allowedHosts` and `blockedHosts` is currently not reliable across platforms. Do not rely on host rules to enforce network isolation.

The `/sandbox` UI allows you to add host rules, but these rules have known platform limitations:

* **macOS**: `allowedHosts` rules silently degrade to unrestricted outbound access, and `blockedHosts` rules are not supported.
* **Linux**: Host rules are not a reliable way to allow selected hosts when outbound connections are disabled.

If the UI presents host rule options, you can add them using the steps below, but they are not suitable for security enforcement.

1. In the **Network** tab, press <kbd>A</kbd> to add a new host rule.
1. Enter the hostname.
1. Set whether to allow or block access to the host.

Use <kbd>Enter</kbd> to edit an existing host rule, and <kbd>D</kbd> to delete one.

## Enabling and disabling the sandbox quickly

You can toggle the sandbox on or off without opening the full configuration interface:

* **Enable**: Enter `/sandbox enable` in the {% data variables.copilot.copilot_cli_short %} session.
* **Disable**: Enter `/sandbox disable` in the {% data variables.copilot.copilot_cli_short %} session.

These commands change the **Sandboxing enabled** setting on the **General** tab.

## Further reading

* [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes)
* [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization)
* [AUTOTITLE](/copilot/how-tos/copilot-cli/set-up-copilot-cli/configure-copilot-cli)
