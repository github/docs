---
title: About cloud and local sandboxes for {% data variables.product.prodname_copilot %}
shortTitle: Cloud and local sandboxes
allowTitleToDifferFromFilename: true
intro: 'Cloud and local sandboxes provide isolated execution environments that let {% data variables.product.prodname_copilot_short %} safely interact with code, tools, filesystem, and network resources securely on your local machine or in fully isolated cloud environments.'
versions:
  feature: copilot
redirect_from:
  - /copilot/concepts/about-github-sandbox
  - /copilot/concepts/about-cloud-and-local-sandboxes
contentType: concepts
category:
  - Learn about Copilot
  - Learn about Copilot CLI
docsTeamMetrics:
  - copilot-cli
---

> [!NOTE]
> {% data reusables.cli.public-preview-sandbox %}

## Introduction

{% data variables.product.prodname_copilot_short %} cloud and local sandboxes are the execution platform powering secure sandboxed experiences for {% data variables.copilot.copilot_cli %} and the {% data variables.copilot.github_copilot_app %}. As {% data variables.product.prodname_copilot_short %} takes more actions on your behalf—running tools, executing commands, and modifying files—sandboxing provides the isolation, portability, and policy controls needed to adopt agentic workflows safely.

Sandboxing is available in both {% data variables.copilot.copilot_cli %} and the {% data variables.copilot.github_copilot_app %}, but the two surfaces expose it differently:

* In {% data variables.copilot.copilot_cli_short %}, you control both local and cloud sandboxing with the commands and settings described in this article.
* In the {% data variables.copilot.github_copilot_app %}, you can run a session in a cloud sandbox or use local sandboxing for local repository and working tree sessions. Project settings define the default for new local sessions, and you can change sandboxing for an active local session. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions#using-cloud-and-local-sandboxes).

Local sandbox settings are configured separately in {% data variables.copilot.copilot_cli_short %} and the {% data variables.copilot.github_copilot_app %}. Enabling or configuring local sandboxing in one surface does not change it in the other.

With sandboxing, you can choose where {% data variables.product.prodname_copilot_short %} runs:

* **Local sandboxing**: Run {% data variables.product.prodname_copilot_short %} securely on your own machine. The commands that {% data variables.product.prodname_copilot_short %} runs have restricted access to your filesystem, network, and system capabilities. You can use local sandboxing at no extra charge.
* **Cloud sandboxing**: Run an entire {% data variables.product.prodname_copilot_short %} session remotely, inside a fully isolated, ephemeral Linux environment hosted by {% data variables.product.github %}. Cloud sandboxing is billed based on usage.

## Local sandboxing

> [!NOTE]
>
> * In {% data variables.copilot.copilot_cli_short %}, local sandboxing is currently an experimental feature. To use it, start the CLI with the `‑‑experimental` command line option, or enter `/experimental on` during a session.
> * In the {% data variables.copilot.github_copilot_app %}, local sandboxing is in {% data variables.release-phases.public_preview %} and subject to change.

Local sandboxing lets {% data variables.product.prodname_copilot_short %} run in a sandboxed environment directly on your machine, with restricted access to your filesystem, network connectivity, and system capabilities. You can configure local sandboxing in {% data variables.copilot.copilot_cli_short %} or the {% data variables.copilot.github_copilot_app %}.

Local sandboxing is turned off by default. Until you enable it, the shell commands that {% data variables.product.prodname_copilot_short %} runs execute directly on your machine with the same access as your user account: they can read, write, and delete wherever you can, reach any network your machine can reach, and use your credentials without restriction. Enabling local sandboxing constrains this access to a policy that you control.

### How local sandboxing works

Local sandboxing is powered by Microsoft eXecution Container (MXC), a cross-platform technology that provides a common interface to the isolation mechanisms available on each operating system. {% data variables.copilot.copilot_cli_short %} declares the sandbox policy it wants to enforce—which paths are readable or writable, whether network access is allowed, and so on—and MXC applies that policy using the appropriate isolation backend for your operating system.

Isolation technologies exist on a spectrum, from strong isolation such as full hypervisors or containers, to lighter-weight isolation such as OS-level process and filesystem containment. Local sandboxing currently sits at the lighter-weight end of this spectrum: it restricts what a process can read, write, and reach on the network, but it does not run your commands inside a separate virtual machine or container. If you want to evaluate whether this level of isolation meets your security requirements, see the [microsoft/mxc repository](https://github.com/microsoft/mxc) for implementation details.

For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-cli/understanding-local-sandboxing).

### Enabling local sandboxing

To enable local sandboxing inside a {% data variables.copilot.copilot_cli_short %} session, run:

```shell copy
/sandbox enable
```

After you enable local sandboxing, the commands and tools that an agent runs on your behalf—shell commands, file search, and, by default, the MCP and language (LSP) servers the CLI starts—run inside an operating-system-level sandbox, limiting their access to your system. The CLI continues to use local sandboxing whenever you use the CLI in future—for programmatic as well as interactive use—until you run `/sandbox disable` to disable it. If enterprise managed settings require sandboxing, ordinary settings, startup options, and `/sandbox disable` cannot turn it off. If the effective policy permits sandbox bypass, you can still explicitly disable sandboxing for the rest of the current session from an active bypass permission prompt.

The CLI's built-in file tools—first-party commands that are part of the CLI, rather than shell commands like `sed`—run in-process in the CLI. Because the CLI itself is not sandboxed, the operating-system sandbox never sees the file operations these tools perform and cannot constrain them. Instead, the built-in tools are coded to check the sandbox policy themselves and honor your configured settings on a best-effort basis.

For more information about enabling local sandboxing in {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/using-local-sandboxing).

In the {% data variables.copilot.github_copilot_app %}, project settings define the local sandboxing default for new local repository and working tree sessions. You can also change sandboxing for an active local session without changing the project default. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/configure-local-sandboxing).

### Configuring local sandboxing

You can use the default local sandboxing behavior, or modify what {% data variables.product.prodname_copilot_short %} can access. The available controls depend on the surface you use.

In {% data variables.copilot.copilot_cli_short %}, you can control several dimensions of access:

* **Filesystem**: Grant read-only or read/write access to specific paths, or deny paths.
* **Network**: Allow or block outbound internet access and local network access independently.
* **Credentials**: Choose whether your Git and {% data variables.product.prodname_cli %} (`gh`) credentials are made available inside the sandbox.
* **Subprocesses**: Choose whether local MCP servers and language servers also run inside the sandbox. Remote MCP servers are never sandboxed.
* **Keychain (macOS)**: Choose whether the system keychain is reachable from inside the sandbox.
* **Per-command exceptions**: Allow or prevent individual commands from running outside the sandbox when they need broader access.

For more information about configuring local sandbox settings in {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings).

In the {% data variables.copilot.github_copilot_app %}, project settings expose a subset of these controls:

* **Filesystem**: Grant additional read-only or read/write access to specific paths, or deny paths.
* **Network**: Allow or block outbound internet and local network access.
* **Credentials**: Choose whether your Git and {% data variables.product.prodname_cli %} credentials are available inside the sandbox.

The app can also ask you to approve an individual command to run outside the sandbox. You cannot configure whether bypass requests are allowed in the project settings. For more information about configuring the project policy and changing sandboxing for an active local session, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/configure-local-sandboxing).

### Cross-platform support

Local sandboxing is available on macOS, on Linux, and on recent Windows 11 builds. Each operating system uses a different isolation backend, so the requirements are different:

* **macOS** uses the Seatbelt backend. {% data variables.copilot.copilot_cli_short %} applies a process-scoped profile to each sandboxed command. Use macOS 15 (Sequoia) or later. {% data variables.copilot.copilot_cli_short %} does not block an older macOS, but the backend is not tested there.
* **Linux** uses the bubblewrap backend. Install bubblewrap 0.5.0 or later, and make sure `bwrap` is on your `PATH`. If `/sandbox` reports that your `bwrap` is too old, upgrade the package. When the sandbox policy permits outbound traffic, you must also have:
  * `slirp4netns` on your `PATH`.
  * `unshare` and `nsenter` from util-linux 2.35 or later, with `--map-current-user` and `--keep-caps` support.
  * `iptables`, `ip6tables`, and their restore binaries. Use the `nf_tables` backend. The legacy backend also operates, but only if you can write to `/run/xtables.lock`.
  * Access to `/dev/net/tun`.
* **Windows** uses the BaseContainer tier of the ProcessContainer backend. {% data variables.copilot.copilot_cli_short %} does not use the AppContainer fallback tiers. If your Windows build cannot supply BaseContainer, {% data variables.copilot.copilot_cli_short %} reports that sandboxing is not supported. To find the supported Windows versions, see [Windows OS support for Copilot sandboxing](https://aka.ms/ghcp-sandbox-os-support).

#### Proxy support

The sandbox proxy operates differently on each operating system:

* **macOS**: {% data variables.copilot.copilot_cli_short %} does not give the proxy to Seatbelt. It sets `HTTP_PROXY`, `HTTPS_PROXY`, and `ALL_PROXY` in the sandboxed environment instead. Only programs that obey these variables use the proxy. A program that ignores them connects directly.
* **Linux**: bubblewrap enforces the proxy. The sandbox gets a private network namespace, and only the proxy endpoint is permitted. The Linux requirements for outbound traffic listed in [Cross-platform support](#cross-platform-support) also apply when you configure an upstream proxy. The proxy must have an IPv4 address, because {% data variables.copilot.copilot_cli_short %} refuses a proxy that only IPv6 can reach. The proxy URL must not contain credentials, so give the credentials to the proxy itself.
* **Windows**: the proxy is not available. In {% data variables.copilot.copilot_cli_short %}, do not use denied paths either. If a CLI sandbox policy includes either setting, the sandboxed command fails with an error. In the {% data variables.copilot.github_copilot_app %}, you can save denied paths in the project settings. If the active BaseContainer capabilities cannot enforce a denied path, the sandboxed command fails instead of running with a weaker policy or without a sandbox.

On Linux, bubblewrap cannot control local network access independently for spawned processes, including shell commands and local MCP or LSP servers. In the {% data variables.copilot.github_copilot_app %}, the local network setting still applies to in-process operations, such as web requests and remote MCP connections.

#### If your host does not support local sandboxing

In {% data variables.copilot.copilot_cli_short %}, the sandbox is turned off for the session and a notice is displayed. Shell commands and sandboxed services then run without a sandbox, and your `sandbox.enabled` setting does not change. If your enterprise enforces sandboxing through device-managed settings, the session fails closed instead: sandboxed commands do not run.

In the {% data variables.copilot.github_copilot_app %}, host support is checked when the first sandboxed shell starts. If the host cannot enforce the requested policy, the shell fails with an unsupported-platform or unsupported-policy message and does not run unsandboxed.

### Enterprise policy enforcement

Enterprises can require local sandboxing and enforce its configuration through server-managed, MDM-managed, or file-based managed settings. See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-enterprise/use-managed-settings/get-started).

## Cloud sandboxing

Cloud sandboxing lets you run sessions inside fully isolated, ephemeral Linux environments hosted by {% data variables.product.github %}. You can use cloud sandboxing from both {% data variables.copilot.copilot_cli_short %} and the {% data variables.copilot.github_copilot_app %}. Each cloud sandbox session is isolated from your local environment and from other sessions.

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

In the {% data variables.copilot.github_copilot_app %}, you don't use a command to start a cloud sandbox session. Instead, choose the cloud sandbox option when you create a new session. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/agent-sessions#starting-a-session).

### Continue sessions across devices

Because cloud sandbox sessions run in {% data variables.product.github %}-hosted infrastructure, you can pick up a {% data variables.product.prodname_copilot_short %} session on any device, regardless of where the session was originally started. This enables more flexible workflows without needing to copy files or reinstall dependencies.

### Offload compute-intensive workflows

You can run multiple {% data variables.product.prodname_copilot_short %} tasks in parallel in the cloud without consuming local resources. This keeps your local environment lightweight and responsive while scaling agent-driven work.

### Unified governance

Cloud sandbox policies share the same configuration as {% data variables.copilot.copilot_cloud_agent %} policies, extending existing security controls to cloud sandboxed execution without additional setup.

### Session lifecycle

A cloud sandbox session has three main states:

* **Active**: The session is running, and you are interacting with it from {% data variables.copilot.copilot_cli_short %} or the {% data variables.copilot.github_copilot_app %}.
* **Stopped**: The session is not currently running, but its state is saved. When you resume it, your files, environment variables, and in-progress work are restored.
* **Deleted**: The session and its saved state are removed and cannot be recovered.

When you stop a session, the cloud sandbox creates a snapshot of its state so you can pick up where you left off later. When you delete a session, both the running environment and the snapshot are removed.

## Authentication and access

Sandboxing uses your existing {% data variables.product.prodname_copilot_short %} authentication. If you can sign in to {% data variables.copilot.copilot_cli_short %} or the {% data variables.copilot.github_copilot_app %} and have access to {% data variables.product.prodname_copilot_short %}, you don't need to configure separate authentication for the sandboxing options available in that surface. You don't need to configure a separate cloud provider, manage API keys, or set up infrastructure.

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
