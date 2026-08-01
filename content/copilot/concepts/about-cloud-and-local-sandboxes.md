---
title: About cloud and local sandboxes for {% data variables.product.prodname_copilot %}
shortTitle: Cloud and local sandboxes
allowTitleToDifferFromFilename: true
intro: 'Cloud and local sandboxes provide isolated execution environments that let {% data variables.product.prodname_copilot_short %} safely interact with code, tools, filesystem, and network resources securely on your local machine or in fully isolated cloud environments.'
versions:
  feature: copilot
redirect_from:
  - /copilot/concepts/about-github-sandbox
contentType: concepts
category:
  - Learn about Copilot
  - Learn about Copilot CLI
docsTeamMetrics:
  - copilot-cli
---

{% data reusables.cli.public-preview-sandbox %}

## Introduction

{% data variables.product.prodname_copilot_short %} cloud and local sandboxes are the execution platform powering secure sandboxed experiences for {% data variables.copilot.copilot_cli %}, both locally and in the cloud. As {% data variables.product.prodname_copilot_short %} takes more actions on your behalf—running tools, executing commands, and modifying files—sandboxing provides the isolation, portability, and policy controls needed to adopt agentic workflows safely.

Sandboxing currently applies to {% data variables.copilot.copilot_cli_short %} sessions. You can also choose to use cloud sandboxing when you start a new session in the {% data variables.copilot.github_copilot_app %}. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions#starting-a-session).

With sandboxing, you can choose where {% data variables.product.prodname_copilot_short %} runs:

* **Local sandboxing**: Run {% data variables.product.prodname_copilot_short %} securely on your own machine. The commands that {% data variables.product.prodname_copilot_short %} runs have restricted access to your filesystem, network, and system capabilities. You can use local sandboxing at no extra charge.
* **Cloud sandboxing**: Run the entire {% data variables.copilot.copilot_cli_short %} session remotely, inside a fully isolated, ephemeral Linux environment hosted by {% data variables.product.github %}. Cloud sandboxing is billed based on usage.

## Local sandboxing

> [!NOTE]
> Local sandboxing is currently an experimental feature. To use it, start {% data variables.copilot.copilot_cli_short %} with the `‑‑experimental` command line option, or enter `/experimental on` during a session.

Local sandboxing lets {% data variables.product.prodname_copilot_short %} run in a sandboxed environment directly on your machine, with restricted access to your filesystem, network connectivity, and system capabilities.

Local sandboxing is turned off by default. Until you enable it, the shell commands that {% data variables.product.prodname_copilot_short %} runs execute directly on your machine with the same access as your user account: they can read, write, and delete wherever you can, reach any network your machine can reach, and use your credentials without restriction. Enabling local sandboxing constrains this access to a policy that you control.

### How local sandboxing works

Local sandboxing is powered by Microsoft eXecution Container (MXC), a cross-platform technology that provides a common interface to the isolation mechanisms available on each operating system. {% data variables.copilot.copilot_cli_short %} declares the sandbox policy it wants to enforce—which paths are readable or writable, whether network access is allowed, and so on—and MXC applies that policy using the appropriate isolation backend for your operating system.

Isolation technologies exist on a spectrum, from strong isolation such as full hypervisors or containers, to lighter-weight isolation such as OS-level process and filesystem containment. Local sandboxing currently sits at the lighter-weight end of this spectrum: it restricts what a process can read, write, and reach on the network, but it does not run your commands inside a separate virtual machine or container. If you want to evaluate whether this level of isolation meets your security requirements, see the [microsoft/mxc repository](https://github.com/microsoft/mxc) for implementation details.

### Enabling local sandboxing

To enable local sandboxing inside a {% data variables.copilot.copilot_cli_short %} session, run:

```shell copy
/sandbox enable
```

After you enable local sandboxing, the commands and tools that an agent runs on your behalf—shell commands, file search, and, by default, the MCP and language (LSP) servers the CLI starts—run inside an operating-system-level sandbox, limiting their access to your system. The CLI continues to use local sandboxing whenever you use the CLI in future—for programmatic as well as interactive use—until you run `/sandbox disable` to disable it.

The CLI's built-in file tools—first-party commands that are part of the CLI, rather than shell commands like `sed`—run in-process in the CLI. Because the CLI itself is not sandboxed, the operating-system sandbox never sees the file operations these tools perform and cannot constrain them. Instead, the built-in tools are coded to check the sandbox policy themselves and honor your configured settings on a best-effort basis.

For more information, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing).

### Configuring local sandboxing

You can use the default local sandboxing behavior, or you can modify what {% data variables.product.prodname_copilot_short %} can access. When you configure local sandboxing, you can control several dimensions of access:

* **Filesystem**: Grant read-only or read/write access to specific paths, or deny paths.
* **Network**: Allow or block outbound internet access and local network access independently.
* **Credentials**: Choose whether your Git and {% data variables.product.prodname_cli %} (`gh`) credentials are made available inside the sandbox.
* **Subprocesses**: Choose whether local MCP servers and language servers also run inside the sandbox. Remote MCP servers are never sandboxed.
* **Keychain (macOS)**: Choose whether the system keychain is reachable from inside the sandbox.
* **Per-command exceptions**: Allow or prevent individual commands from running outside the sandbox when they need broader access.

For more information, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings).

### Cross-platform support

Local sandboxing is available on macOS and Linux, and on Windows Insiders builds. Support and isolation behavior vary by platform because each operating system uses a different isolation backend:

* **macOS** uses the Seatbelt backend (`sandbox-exec`).
* **Linux** uses the bubblewrap backend, which requires the `bwrap` command to be installed and available on your `PATH`. If `/sandbox` reports that sandboxing isn't supported on Linux, install bubblewrap.
* **Windows** uses the ProcessContainer backend.

Because each platform uses a different backend, a few policy options behave differently. Most notably, on Windows the sandbox cannot block individual paths, so any denied-path rules you add are ignored there. Instead of denying a path on Windows, grant access only to the specific directories that {% data variables.product.prodname_copilot_short %} needs, rather than granting a broad directory and then trying to exclude part of it. This keeps a sensitive location out of the sandbox's reach even though denied paths aren't enforced. Denied paths are enforced on macOS and Linux.

### Enterprise policy enforcement

For organizations and enterprises, local sandbox policies can be centrally configured and enforced using Microsoft Intune and other MDM (mobile device management) platforms. This gives administrators control over how {% data variables.product.prodname_copilot_short %} interacts with local resources across managed devices. See [Deploying MDM-managed settings](/copilot/how-tos/administer-copilot/manage-for-enterprise/manage-agents/configure-enterprise-managed-settings#deploying-mdm-managed-settings).

## Cloud sandboxing

Cloud sandboxing lets you run {% data variables.copilot.copilot_cli_short %} sessions inside fully isolated, ephemeral Linux environments hosted by {% data variables.product.github %}. Each cloud sandbox session is isolated from your local environment and from other sessions.

Cloud sandboxing is built on Azure Container Apps Sandboxes, with {% data variables.product.github %} providing the identity, policy, and billing layer.

> [!NOTE]
> If you get {% data variables.product.prodname_copilot_short %} through an organization, access to cloud sandboxing depends on it being enabled in the organization or enterprise settings, where it is disabled by default. For more information, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization).

### Starting a cloud sandbox session

To start a cloud-backed session, run the following command:

```shell copy
copilot ‑‑cloud ‑‑experimental
```

> [!NOTE]
> Cloud sandboxing is currently an experimental feature. To use it, you must have experimental features enabled for {% data variables.copilot.copilot_cli_short %}—for example, by using the `‑‑experimental` command line option when starting a CLI session, as shown above.

The `‑‑cloud` command line option launches an interactive {% data variables.copilot.copilot_cli_short %} session inside a cloud sandbox. You can prompt {% data variables.product.prodname_copilot_short %} to perform tasks, run shell commands, and iterate on code, the same way you would in a local session. The commands that {% data variables.product.prodname_copilot_short %} runs execute in the cloud environment, not on your local machine.

Running `copilot ‑‑cloud` starts a single {% data variables.copilot.copilot_cli_short %} session in a cloud sandbox. It does not affect future {% data variables.product.prodname_copilot_short %} sessions. Each time you want to run a new session in a cloud sandbox, you must start the CLI with the `‑‑cloud` option.

> [!NOTE]
> Cloud sandboxing is only available for interactive {% data variables.copilot.copilot_cli_short %} sessions. You can't run the CLI programmatically in a cloud sandbox—that is, you can't combine the `‑‑cloud` option with the `-p` or `-i` options.

### Continue sessions across devices

Because cloud sandbox sessions run in {% data variables.product.github %}-hosted infrastructure, you can pick up a {% data variables.product.prodname_copilot_short %} session on any device, regardless of where the session was originally started. This enables more flexible workflows without needing to copy files or reinstall dependencies.

### Offload compute-intensive workflows

You can run multiple {% data variables.product.prodname_copilot_short %} tasks in parallel in the cloud without consuming local resources. This keeps your local environment lightweight and responsive while scaling agent-driven work.

### Unified governance

Cloud sandbox policies share the same configuration as {% data variables.copilot.copilot_cloud_agent %} policies, extending existing security controls to cloud sandboxed execution without additional setup.

### Session lifecycle

A cloud sandbox session has three main states:

* **Active**: The session is running, and you are interacting with it from {% data variables.copilot.copilot_cli_short %}.
* **Stopped**: The session is not currently running, but its state is saved. When you resume it, your files, environment variables, and in-progress work are restored.
* **Deleted**: The session and its saved state are removed and cannot be recovered.

When you stop a session, the cloud sandbox creates a snapshot of its state so you can pick up where you left off later. When you delete a session, both the running environment and the snapshot are removed.

## Authentication and access

Sandboxing uses your existing {% data variables.copilot.copilot_cli_short %} authentication. If you can sign in to {% data variables.copilot.copilot_cli_short %} and have access to {% data variables.product.prodname_copilot_short %}, you can use sandboxing. You don't need to configure a separate cloud provider, manage API keys, or set up infrastructure.

An organization or enterprise owner must enable the **Cloud Sandbox access** policy in the organization or enterprise settings before members can use cloud sandboxes.

For information about enabling or disabling cloud sandboxes for members of your organization, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization).

## Billing

Local sandboxing is included in the standard {% data variables.product.prodname_copilot %} seat at no additional cost.

Cloud sandboxing is billed based on usage. {% data variables.product.github %} measures cloud sandbox usage across three meters:

| Meter | Description | Unit | Price (USD) |
| --- | --- | --- |------------|
| Compute | Time that a cloud sandbox session is running. | Compute second | $0.000024 |
| Memory | Memory allocated to a cloud sandbox session while it is running. | GiB second | $0.000003 |
| Storage | Snapshot storage for stopped sessions. | GiB month | $0.005  |

For more information about how cloud sandbox usage is measured and billed, see [AUTOTITLE](/billing/concepts/product-billing/cloud-and-local-sandboxes).

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-copilot-cli)
* [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing)
* [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings)
