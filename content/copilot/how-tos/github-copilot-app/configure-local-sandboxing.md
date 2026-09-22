---
title: Configuring local sandboxing in the GitHub Copilot app
shortTitle: Configure local sandboxing
intro: 'Use the `/sandbox` slash command and project settings in the {% data variables.copilot.github_copilot_app %} to control how local sandboxing restricts filesystem access, network connectivity, and credential use.'
product: '{% data reusables.gated-features.github-app %}<br><a href="https://github.com/features/ai/github-app" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Download {% data variables.copilot.github_copilot_app %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Configure Copilot
---

> [!NOTE]
> {% data reusables.cli.public-preview-local-sandbox %}

## About local sandboxing

Local sandboxing runs the tools that an agent invokes on your behalf inside an operating-system sandbox. This reduces the potential impact of an unintended command by limiting access to files, network resources, and credentials on your machine.

You configure local sandboxing separately for each project in the {% data variables.copilot.github_copilot_app %}. The configuration applies to local repository and working tree sessions. It does not apply to cloud sandbox sessions or sessions that run on a remote host.

A working tree keeps the branches and files for concurrent sessions separate, but it does not restrict what a command can access elsewhere on your machine. Local sandboxing provides that additional protection.

For an overview of cloud and local sandboxing for {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/concepts/about-cloud-and-local-sandboxes).

## Enabling local sandboxing in a project

Local sandboxing is turned off by default. To enable it for new local sessions in a project:

1. Open the app settings.
1. Select the project that you want to configure.
1. Under **Sandbox**, turn on **Sandbox new sessions**.

The setting applies to new sessions in the project. It does not change a session that is already running.

For most projects, start with the default policy. It allows common development tasks such as installing dependencies, connecting to a local development server, pushing a branch, and creating a pull request. Add restrictions when the project is next to sensitive folders, does not need network access, or should not use your credentials.

## Configuring the sandbox policy for a project

A sandbox policy is a set of rules that controls which files, networks, and credentials agent-run tools can access. The project settings describe the policy that the app requests when a sandboxed session starts. The effective policy can be more restrictive, for example, when enterprise managed settings apply.

In the project settings, you can configure:

* [**Filesystem access**](#configuring-filesystem-access): Grant additional read-only or read/write access to specific paths, or deny paths.
* [**Network access**](#configuring-network-access): Allow or block outbound internet and local network access.
* [**Credentials**](#configuring-credentials): Choose whether your Git and {% data variables.product.prodname_cli %} credentials are available inside the sandbox.

### Configuring filesystem access

By default, a sandboxed session has read/write access to its workspace and current working directory. You can grant access to additional folders or prevent access to specific folders.

In the **Sandbox** section of the project settings, configure any of the following lists:

* **Additional read/write**: Folders that agent-run tools can read and modify.
* **Additional read-only**: Folders that agent-run tools can read but not modify.
* **Denied**: Folders that agent-run tools cannot access.

To add a folder, click **Add folder** for the appropriate list, then choose the folder. To remove a folder, click the delete icon next to its path.

A more-specific denied folder remains denied when a broader parent folder has read or write access.

On Windows, you can save a denied path in the project settings. If the active Windows sandbox capabilities cannot guarantee the denial, a sandboxed command fails with an unsupported-policy message. The command does not run with the denied path accessible or without a sandbox.

### Configuring network access

By default, sandboxed sessions can connect to the internet and your local network. In the **Sandbox** section of the project settings, you can change the following settings:

* **Outbound internet**: Allow connections to internet services, such as {% data variables.product.github %} and package registries.
* **Local network**: Allow loopback and local-network connections, including connections to local development servers.

Network restrictions can affect package installation, API calls, preview servers, and other tools that need a network connection.

On Linux, the sandbox cannot control local network access independently for spawned processes, such as shell commands and local MCP or LSP servers. The setting still applies to in-process operations, such as web requests and remote MCP connections.

### Configuring credentials

By default, authenticated Git and {% data variables.product.prodname_cli %} operations are available inside the sandbox. You can turn off either of the following settings:

* **Git credentials**: Allow authenticated HTTPS Git operations.
* **{% data variables.product.prodname_cli %} credentials**: Allow {% data variables.product.prodname_cli %} to authenticate.

Turning off credential access can prevent operations such as pushing a branch or creating a pull request from inside the sandbox.

## Applying policy changes

Changes to filesystem, network, and credential settings apply to new sessions or when an existing session restarts. They do not change the policy of a currently running session.

To restart a session while keeping its history, enter:

```text
/restart-session
```

The app accepts sandbox settings before checking whether your operating system can enforce them. Support is checked when the first sandboxed shell starts. If the host cannot enforce the requested policy, the shell fails with an unsupported-platform or unsupported-policy message and does not run unsandboxed. To find the currently supported Windows versions, see [Windows OS support for Copilot sandboxing](https://aka.ms/ghcp-sandbox-os-support).

If the app displays **Sandbox unavailable**, address the reported problem, then click **Retry sandbox**.

## Changing sandboxing for a session

To turn on local sandboxing for an active session, enter:

```text
/sandbox on
```

To turn it off for the session, enter:

```text
/sandbox off
```

During an active local session, the command creates a persistent override for that session and applies it immediately. The override does not change the project default for other sessions.

If you enter either command before a session starts, the command changes the project default inherited by new sessions.

When local sandboxing is off, agent-run commands can access the same files, networks, and credentials as your user account.

You cannot use local sandboxing for a cloud sandbox session or a session that runs on a remote host.

## Running a tool outside the sandbox

If a tool needs access that the sandbox policy does not allow, the app can display a **Run outside the sandbox?** prompt. Depending on the effective policy, you can:

* Cancel the operation.
* Run the operation once outside the sandbox.
* Disable sandboxing for the remainder of the current session and run the operation.

If you disable sandboxing from this prompt, the app displays **Sandbox off for this session**. Click **Re-enable sandbox** to turn it back on.

Temporarily disabling sandboxing does not change the project default or the session override. It ends when the session restarts or reattaches.

An enterprise owner can prevent users from running tools outside the sandbox. For more information, see [AUTOTITLE](/copilot/reference/enterprise-administrators/enterprise-managed-settings#sandbox).
