---
title: Using local sandboxing
shortTitle: Use local sandboxing
intro: 'Enable local sandboxing to restrict what {% data variables.product.prodname_copilot_short %} can access on your machine in {% data variables.copilot.copilot_cli_short %} or {% data variables.product.prodname_vscode_shortname %}.'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot # Copilot discovery page
  - Configure Copilot CLI # Copilot CLI bespoke page
docsTeamMetrics:
  - copilot-cli
---

## Introduction

Local sandboxing restricts access to files, network resources, and credentials on your machine. This article explains how to enable and disable local sandboxing in {% data variables.copilot.copilot_cli_short %} and the {% data variables.copilot.github_copilot_app_short %}. For a conceptual overview of cloud and local sandboxes for {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes). For information on adjusting sandbox settings, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings).

For information on using local sandboxing in {% data variables.product.prodname_vscode %}, see [Sandbox agent terminal commands](https://code.visualstudio.com/docs/agents/run/agent-sandboxing) in the {% data variables.product.prodname_vscode_shortname %} documentation.

## Prerequisites

{% data reusables.cli.local-sandboxing-prereqs %}

## Using local sandboxing in {% data variables.copilot.copilot_cli_short %}

When you enable local sandboxing, {% data variables.copilot.copilot_cli_short %} runs most of the commands and tools it invokes on your behalf inside an operating-system sandbox. After you enable local sandboxing, it is used for all your {% data variables.copilot.copilot_cli_short %} sessions until you disable it, or turn it off for a specific session. If enterprise managed settings require sandboxing, ordinary configuration and the `--no-sandbox` command line option cannot disable it. However, if the effective policy permits sandbox bypass, you can explicitly disable sandboxing for the rest of the current session, either from an active bypass permission prompt or by running `/sandbox disable`. This session opt-out does not loosen the saved policy.

By default, sandboxed commands and tools can write within your current working directory and temporary folders. In a Git repository, the repository's Git metadata is also writable, while the rest of the repository above your current working directory is readable but not writable. Selected system and developer-tool locations are readable, and some build and package caches are writable. This does not grant access to your entire home directory. Other paths are blocked unless you grant access.

Outbound internet access is on by default. Local network access is off. How these settings affect commands depends on your operating system. See [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings#configuring-network-settings).

Authentication for Git and {% data variables.product.prodname_cli %} (`gh`) is enabled by default, but operations such as `git push` and `gh pr create` depend on your network settings and tool compatibility. Sandboxed commands and scripts receive placeholder Git and `gh` credentials. A local proxy replaces these with your real credentials only for approved HTTPS destinations.

Git credentials retain their original host, port, and repository path restrictions. For `gh`, credentials are used only for `github.com`, `api.github.com`, and `uploads.github.com`. You can turn authentication off on the **Credentials** tab in `/sandbox config`.

You can also mask additional environment variables, such as API tokens. Commands, local MCP servers, and language servers that run inside the sandbox receive placeholders for these variables. The proxy supplies each real value only to the HTTPS hosts you specify. For setup instructions, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings#masking-environment-variables).

On Windows, this requires a version that supports connections from the sandbox to services on your computer (host loopback). You must also enable **Allow local network** on the **Network** tab in `/sandbox config`. This also permits private-network access, not just access to the credential proxy.

For a conceptual overview of sandboxing in {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes).

### Sandbox commands

You manage local sandboxing from within a {% data variables.copilot.copilot_cli_short %} session using the `/sandbox` slash command. It has the following subcommands.

| Command | Description |
| --- | --- |
| `/sandbox status` | Show whether sandboxing is currently being used for the session. See [Checking whether sandboxing is being used](#checking-whether-sandboxing-is-being-used). |
| `/sandbox policy [COMMAND]` | Show the effective paths, network settings, and capabilities for the current directory. Optionally include a command to inspect the developer-tool access it would receive, without running it. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/understanding-local-sandboxing). |
| `/sandbox config` | Open the interactive settings interface. Entering `/sandbox` on its own does the same thing. For more information, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings). |
| `/sandbox enable` | Turn local sandboxing on. See [Enabling local sandboxing](#enabling-local-sandboxing). |
| `/sandbox disable` | Turn local sandboxing off. If enterprise managed settings require sandboxing, this is refused unless the effective policy permits sandbox bypass, in which case it disables sandboxing for the rest of the current session only. See [Disabling local sandboxing](#disabling-local-sandboxing). |

### Enabling local sandboxing

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

### Disabling local sandboxing

If enterprise managed settings require sandboxing, `/sandbox disable` is refused unless the effective policy permits sandbox bypass. When bypass is permitted, running `/sandbox disable`—or responding to an active bypass permission prompt—disables sandboxing for the rest of the current session only, without loosening the saved policy.

To stop using local sandboxing, enter the following command in an interactive {% data variables.copilot.copilot_cli_short %} session:

```shell copy
/sandbox disable
```

Unless enterprise managed settings require sandboxing, this turns it off in the current session and in new and restarted sessions. Under a managed policy that permits bypass, it turns sandboxing off only for the current session.

An ordinary enable or disable command saves your choice as `sandbox.enabled` in your personal settings file (`~/.copilot/settings.json` by default). A managed session-only opt-out does not change this file. Run `/sandbox enable` to restore sandboxing in that session.

### Using sandboxing for a single session

You can use the `--sandbox` command line option to use sandboxing for a single session, without enabling sandboxing for your other sessions. If sandboxing is already enabled, you can disable it for a single session by using the `--no-sandbox` option. The `--no-sandbox` option cannot override enterprise managed settings that require sandboxing.

You can combine these options with the `-p` command line option to control sandboxing for programmatic use of the CLI. For example:

```shell copy
copilot --sandbox -p "PROMPT"
```

### Running a single command outside the sandbox

When the sandbox blocks a command, {% data variables.product.prodname_copilot_short %} can ask you to approve another attempt with broader access. The prompt describes the command and the proposed retry. You can approve it, keep the blocked result, or disable sandboxing for the rest of the current session. Disabling sandboxing for the session is available only if the effective policy permits sandbox bypass. When it is permitted, you can also do this at any time by running `/sandbox disable`.

Bypass requests are enabled by default and can be turned off in your sandbox settings.

An approved command bypass skips credential masking and the sandbox proxy. The command runs with its ordinary environment, which can contain real secret values. Masked-variable host restrictions do not protect a command that runs outside the sandbox.

The sandbox is only one of the reasons a command can fail. {% data variables.product.prodname_copilot_short %} offers a retry with broader access only when the sandbox is the likely cause and running outside it could actually help. Other failures show no bypass prompt. For platform-specific retry behavior, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings#allowing-sandbox-bypass).

### Checking whether sandboxing is being used

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

### Troubleshooting

Use the following guidance to troubleshoot blocked commands, PowerShell and Git problems on Windows, and authentication failures.

#### Troubleshooting blocked commands

If a command cannot access a file, use a tool, or connect to a host, check the sandbox policy before granting broader access.

1. Run `/sandbox status` to confirm whether sandboxing is on for the current session.
1. Run `/sandbox policy` to inspect the effective policy. To see the additional paths available to tools used by a command, include the command after `/sandbox policy`. For example:

   ```shell copy
   /sandbox policy npm install
   ```

   This previews the policy without running `npm install`. Review the listed paths and network settings. Check **Notes** for settings that could not be applied.

1. If the policy blocks access you intend to allow, use `/sandbox config` to update the required path or host rules. Grant only the access the command needs. For missing paths and symbolic links, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/understanding-local-sandboxing#troubleshooting-filesystem-access). Adding a directory with `/add-dir` does not grant sandbox access.
1. If the setting is managed by your organization, contact your administrator. If the error names a missing operating-system feature or Linux dependency, address that requirement, then restart {% data variables.copilot.copilot_cli_short %} before trying again.
1. Ask {% data variables.product.prodname_copilot_short %} to run the command again. If a one-command bypass is offered, approve it only if you are comfortable with the broader access described. Disabling sandboxing for the whole session gives subsequent commands broader access, not just the blocked command.

#### Troubleshooting blocked paths that do not exist

Your sandbox settings can block access to specific files or directories. If a blocked path does not exist on your computer, {% data variables.copilot.copilot_cli_short %} creates a directory at that location before starting a sandboxed command. It also creates any missing parent directories. These directories are not automatically removed afterward.

For example, if you block access to `.env` before that file exists, {% data variables.copilot.copilot_cli_short %} creates a directory named `.env`, not a file.

* If the blocked path is intended to be a file, create that file outside the sandbox before running a sandboxed command.
* If you see `Failed to prepare denied sandbox path`, the command has not started. Check that the configured path is correct and that your account has permission to create directories there. Use `/sandbox config` to correct an unintended path, or contact your administrator if the setting is managed.

Running `/sandbox policy` does not create these directories. On Linux, paths that do not yet exist are omitted from the effective policy shown in the preview. They remain in your configured settings.

#### Troubleshooting PowerShell and Git on Windows

On Windows installations without the required updates, sandboxed PowerShell may report a drive root, such as `C:\`, as its current directory. `Set-Location` and Git commands that rely on the current directory can fail even though PowerShell starts.

1. Install the September 2026 update or later for a supported Windows version. If your organization manages Windows updates, contact your administrator.
1. If you cannot update immediately, ask {% data variables.product.prodname_copilot_short %} to use an absolute repository path for Git commands. For example:

   ```shell copy
   git -C "C:\PATH\TO\REPOSITORY" status
   ```

   This avoids relying on PowerShell's current directory. The sandbox must still allow access to the repository. It does not fix other filesystem or authentication failures.

#### Troubleshooting authentication

When credential masking is enabled, {% data variables.copilot.copilot_cli_short %} uses a local proxy to add the real credentials to outgoing requests. Tools using those credentials must support the proxy and trust its security certificate.

{% data variables.copilot.copilot_cli_short %} automatically supplies a temporary certificate bundle to sandboxed tools. Some tools do not use this bundle and may report certificate or authentication errors.

On macOS and Windows, you can optionally install the proxy's certificate authority in your operating system's trust store to improve compatibility. In a {% data variables.copilot.copilot_cli_short %} session, run `/sandbox ca create`, then `/sandbox ca trust`. On Windows, installing the certificate requires administrator approval. This also changes certificate trust for applications outside {% data variables.copilot.copilot_cli_short %}.

Installing the certificate does not resolve every compatibility problem. Tools that require HTTP/2, accept only specific server certificates (certificate pinning), use client certificates, or use credentials to sign requests may still fail.

For masked environment variables, check that the variable is available to the CLI, the destination matches its injection hosts, and your network settings permit the connection. Tools must send the placeholder as a credential in an HTTPS request header, such as `Authorization` or `X-Api-Key`. HTTP Basic authentication also works when the placeholder is the password. Plaintext HTTP, request bodies, URLs, and signed requests do not receive the real value.

Masking protects only the configured environment variables and the enabled Git and `gh` authentication. It does not hide secrets in credential files, other environment variables, or remote MCP authentication.

## Using local sandboxing in the {% data variables.copilot.github_copilot_app_short %}

Depending on any enterprise managed settings that may apply, you can use slash commands to enable or disable the local sandbox for the currently active session.

### Enabling and disabling sandboxing for your session

To turn on local sandboxing, enter:

```text
/sandbox on
```

To turn off sandboxing, enter:

```text
/sandbox off
```

These commands turn sandboxing on or off immediately, unless enterprise managed settings prevent the change. Your choice applies to the current session, including after a restart, and takes precedence over the project default. It does not change the project default for other sessions.

When local sandboxing is off, agent-run commands can access the same files, networks, and credentials as your user account.

You cannot use local sandboxing for a cloud sandbox session or a session that runs on a remote host.

> [!NOTE]
> * If you enter either of the above commands before a session starts—for example, by clicking **New**, selecting a project, and then entering the command—the command changes the default sandboxing setting for the selected project. Alternatively, you can set the default in your settings. See [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings#enabling-local-sandboxing-for-a-project).
> * Unlike in the CLI, entering `/sandbox` without `on` or `off` does not open a configuration interface.

### Running a tool outside the sandbox

If a tool needs access that the sandbox policy does not allow, the app can display a **Run outside the sandbox?** prompt. Depending on the effective policy, you can:

* Cancel the operation.
* Run the operation once outside the sandbox.
* Disable sandboxing for the remainder of the current session and run the operation.

To disable sandboxing from this prompt, click **More options**, then **Disable sandbox and run**, and confirm your choice.

If you disable sandboxing from this prompt, the app displays **Sandbox off for this session**. Click **Re-enable sandbox** to turn it back on.

Temporarily disabling sandboxing does not change the project default or the session's saved setting. It ends when the session restarts or reattaches.

An enterprise owner can prevent users from running tools outside the sandbox. For more information, see [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings#sandbox).





## Further reading

* [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes)
* [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings)
