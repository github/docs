---
title: About {% data variables.copilot.sandbox %}
shortTitle: Cloud and local sandboxes
allowTitleToDifferFromFilename: true
intro: '{% data variables.copilot.sandbox_caps %} provide isolated execution environments that let {% data variables.product.prodname_copilot_short %} safely interact with code, tools, filesystem, and network resources securely on your local machine or in fully isolated cloud environments.'
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

{% data variables.copilot.sandbox_caps %} are the execution platform powering secure sandboxed experiences for {% data variables.copilot.copilot_cli %}, both locally and in the cloud. As {% data variables.product.prodname_copilot_short %} takes more actions on your behalf—running tools, executing commands, and modifying files—{% data variables.copilot.sandbox_short %} provide the isolation, portability, and policy controls needed to adopt agentic workflows safely. {% data variables.copilot.sandbox_caps %} currently apply to {% data variables.copilot.copilot_cli_short %} sessions, and you can also use cloud sandboxes for sessions in the {% data variables.copilot.github_copilot_app %}.

With {% data variables.copilot.sandbox %}, you can choose where {% data variables.product.prodname_copilot_short %} runs:

* **Local sandboxing**: Run {% data variables.product.prodname_copilot_short %} securely on your own machine, with restricted access to filesystem, network, and system capabilities.
* **Cloud sandboxing**: Run {% data variables.product.prodname_copilot_short %} inside fully isolated, ephemeral Linux environments hosted by {% data variables.product.github %}.

## Local sandboxing

Local sandboxing lets {% data variables.product.prodname_copilot_short %} run in a sandboxed environment directly on your machine, with restricted access to your filesystem, network connectivity, and system capabilities.

### Enabling local sandboxing

To enable local sandboxing inside a {% data variables.copilot.copilot_cli_short %} session, run:

```shell copy
/sandbox enable
```

Once enabled, commands that {% data variables.product.prodname_copilot_short %} executes on your behalf run inside the sandbox, limiting their access to your system.

### Cross-platform support

Local sandboxing is available on macOS and Linux. Sandboxing support and isolation behavior vary by platform because each operating system uses a different sandboxing backend. Windows is supported on Windows Insiders builds. For details on current limitations, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/configuring-local-sandbox-settings).

### Enterprise policy enforcement

For organizations and enterprises, local sandbox policies can be centrally configured and enforced using Microsoft Intune and other MDM (mobile device management) platforms. This gives administrators control over how {% data variables.product.prodname_copilot_short %} interacts with local resources across managed devices.

## Cloud sandboxing

Cloud sandboxing lets you run {% data variables.copilot.copilot_cli_short %} sessions inside fully isolated, ephemeral Linux environments hosted by {% data variables.product.github %}. Each cloud sandbox session is isolated from your local environment and from other sessions.

Cloud sandboxing is built on Azure Container Apps Sandboxes, with {% data variables.product.github %} providing the identity, policy, and billing layer.

### Starting a cloud sandbox session

To start a cloud-backed session, run the following command:

```shell copy
copilot --cloud
```

This launches an interactive {% data variables.copilot.copilot_cli_short %} session inside a cloud sandbox. You can prompt {% data variables.product.prodname_copilot_short %} to perform tasks, run shell commands, and iterate on code, the same way you would in a local session. The commands that {% data variables.product.prodname_copilot_short %} runs execute in the cloud environment, not on your local machine.

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

{% data variables.copilot.sandbox_short_caps %} use your existing {% data variables.copilot.copilot_cli_short %} authentication. If you can sign in to {% data variables.copilot.copilot_cli_short %} and have access to {% data variables.product.prodname_copilot_short %}, you can use {% data variables.copilot.sandbox_short %}. You don't need to configure a separate cloud provider, manage API keys, or set up infrastructure.

An organization or enterprise owner must enable the **Cloud Sandbox access** policy in the organization or enterprise settings before members can use {% data variables.copilot.sandbox_short %}.

For information about signing in to {% data variables.copilot.copilot_cli_short %}, see [AUTOTITLE](/copilot/how-tos/set-up/install-copilot-cli).

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
* [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization)
* [AUTOTITLE](/copilot/how-tos/set-up/install-copilot-cli)
