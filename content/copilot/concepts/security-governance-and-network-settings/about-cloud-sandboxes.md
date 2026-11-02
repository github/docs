---
title: About cloud sandboxes for {% data variables.product.prodname_copilot %}
shortTitle: Cloud sandboxes
allowTitleToDifferFromFilename: true
intro: 'Cloud sandboxes are isolated environments that {% data variables.product.github %} hosts, where {% data variables.product.prodname_copilot_short %} runs your cloud sessions without using your machine.'
versions:
  feature: copilot
redirect_from:
  - /copilot/concepts/about-github-sandbox
contentType: concepts
category:
  - Learn about Copilot
---

## About cloud sandboxes

A cloud sandbox is an isolated Linux environment that {% data variables.product.github %} creates for a {% data variables.product.prodname_copilot_short %} session. When you work in one or more repositories, {% data variables.product.prodname_copilot_short %} clones each one into the sandbox, then runs commands and tests and makes changes there. Because the session doesn't run on your machine, you can run several sessions in parallel without using local resources, and you don't need to stay connected while {% data variables.product.prodname_copilot_short %} works.

You don't create or manage cloud sandboxes yourself. {% data variables.product.github %} creates one when you start a session that runs in the cloud.

### Continue sessions across clients

Because cloud sandbox sessions run in {% data variables.product.github %}-hosted infrastructure, you can pick up a {% data variables.product.prodname_copilot_short %} session on any client, regardless of where the session was originally started. This enables more flexible workflows without needing to copy files or reinstall dependencies.

### Offload compute-intensive workflows

You can run multiple {% data variables.product.prodname_copilot_short %} sessions in parallel in the cloud without consuming local resources. This keeps your local environment lightweight and responsive while scaling agent-driven work.

## Cloud sandboxes and local sandboxing

Cloud sandboxes and local sandboxing solve different problems. A cloud sandbox moves the whole session off your machine. Local sandboxing keeps the session on your machine, but limits which resources {% data variables.product.prodname_copilot_short %} can reach.

> [!NOTE]
> {% data reusables.copilot.cloud-and-local-sandboxes-separate %}

| | Cloud sandboxes | Local sandboxing |
| --- | --- | --- |
| Where {% data variables.product.prodname_copilot_short %} runs | In an isolated Linux environment that {% data variables.product.github %} hosts | On your machine |
| What it's for | Running sessions without using your machine | Limiting which resources {% data variables.product.prodname_copilot_short %}'s commands can access on your machine |
| Where you use it | Cloud sessions that you start with {% data variables.product.prodname_copilot_short %} on the {% data variables.product.github %} website, {% data variables.product.prodname_mobile %}, Slack, Microsoft Teams, the {% data variables.copilot.github_copilot_app %}, {% data variables.product.prodname_vscode %}, and the {% data variables.copilot.copilot_sdk_short %} | {% data variables.copilot.copilot_cli_short %} and the {% data variables.copilot.github_copilot_app %} |
| How you start using it | No separate setup. It's available when you use the {% data variables.product.prodname_copilot_short %} features that run in it. | Turn it on in {% data variables.copilot.copilot_cli_short %} or the {% data variables.copilot.github_copilot_app %}, or your enterprise can require it. |

For more information about local sandboxing, see [AUTOTITLE](/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes).

## Where {% data variables.product.prodname_copilot_short %} uses cloud sandboxes

By default, {% data variables.product.prodname_copilot_short %} runs a cloud session in a cloud sandbox when you start it from any of these places:

* The chat interface on the {% data variables.product.github %} website
* {% data variables.product.prodname_mobile %}
* Slack and Microsoft Teams
* The {% data variables.copilot.github_copilot_app %}
* {% data variables.product.prodname_vscode %}
* Cloud sessions in the {% data variables.copilot.copilot_sdk_short %}

In {% data variables.copilot.copilot_cli_short %}, sessions run on your machine by default. You can also start a session in a cloud sandbox. See [Starting a cloud session from {% data variables.copilot.copilot_cli_short %}](#starting-a-cloud-session-from-copilot-cli).

## Choosing where {% data variables.product.prodname_copilot_short %} runs

{% data variables.product.prodname_copilot_short %} can run a session in one of these environments:

{% data reusables.copilot.where-copilot-runs %}

Sessions can also run on your own machine, for example in {% data variables.copilot.copilot_cli_short %} or the {% data variables.copilot.github_copilot_app %}. Those sessions don't use a cloud sandbox.

Where you can choose between **Cloud** and **Actions**, **Cloud** is the default. You choose the environment when the session starts, and you can't change it afterward. To use a different environment, start a new session.

How you choose, and which environments you can choose from, depends on the client that you start the session from. For the steps in each client, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions).

Choose **Actions** if your repository depends on customizations that only work on {% data variables.product.prodname_actions %}, such as setup steps, larger or self-hosted runners, or a Windows development environment. Otherwise, use **Cloud**. For details, see [Customizing a cloud sandbox session](#customizing-a-cloud-sandbox-session).

## Starting a cloud session from {% data variables.copilot.copilot_cli_short %}

To start a {% data variables.copilot.copilot_cli_short %} session in a cloud sandbox, run:

```shell copy
copilot --cloud
```

The `--cloud` command line option launches an interactive {% data variables.copilot.copilot_cli_short %} session inside a cloud sandbox. You can prompt {% data variables.product.prodname_copilot_short %} to perform tasks, run shell commands, and iterate on code, the same way you would in a local session. The commands that {% data variables.product.prodname_copilot_short %} runs execute in the cloud sandbox, not on your local machine.

The `--cloud` option applies only to the session that you start with it. To run another session in a cloud sandbox, start the CLI with `--cloud` again. You can only use `--cloud` for interactive sessions, so you can't combine it with the `-p` or `-i` options.

## Session lifecycle

When you come back to a session, it resumes with your files and in-progress work intact. While a session is stopped, the cloud sandbox keeps a snapshot of its state so you can pick up where you left off.

## Isolation and network access

Each cloud sandbox is isolated from your machine and from other sessions. Because the session doesn't run on your computer, the commands that {% data variables.product.prodname_copilot_short %} runs in a cloud sandbox can't read or change the files on your computer.

Network access from a cloud sandbox follows the same firewall settings as {% data variables.copilot.copilot_cloud_agent %}, including the recommended allowlist and any custom allowlist rules that organization or repository owners add. For more information, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-the-firewall).

If {% data variables.product.prodname_copilot_short %} needs to reach a host that isn't on the allowlist, add the host to the allowlist, then start a new session. Allowlist changes don't apply to sessions that are already running.

## Customizing a cloud sandbox session

You can customize your cloud sandbox settings at [github.com/copilot/customize](https://github.com/copilot/customize?utm_source=cloud-sandboxes-docs-customize&utm_medium=docs&utm_campaign=universe-2026). You can also bring your personal instructions, skills, and custom agents to cloud sandbox sessions using a dotfiles repository with a root `.copilot` directory. Dotfiles are copied when a sandbox is created or resumed, without running installation scripts. This personalization is not available in {% data variables.product.prodname_actions %}-based sessions. For setup guidance, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/personalize-cloud-sessions).

Other customizations use {% data variables.product.prodname_actions %}, so they apply only to sessions that run on **Actions**: These include:

* Setup steps in a `copilot-setup-steps.yml` file, including steps that sign in to cloud providers with OpenID Connect (OIDC)
* Larger and self-hosted runners
* Windows development environments

If your repository depends on any of these, choose **Actions** when you delegate the task. For details, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment).

If you a higher level of customization, you can register a Linux machine or codespace as a custom environment and select it in a client that supports custom environments. Unlike a cloud sandbox, you manage the host, its tools and dependencies, and its lifecycle. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/create-a-custom-environment).

## Access

Cloud sandboxes use your existing {% data variables.product.prodname_copilot_short %} authentication. You don't need to configure a separate cloud provider, manage API keys, or set up infrastructure.

Cloud sandboxes don't have a separate access policy. If you get {% data variables.product.prodname_copilot_short %} through an organization or enterprise, the **{% data variables.copilot.copilot_in_the_cloud_short %}** policy controls whether you can start sessions that run in a cloud sandbox. The policy is enabled by default. For information for administrators, see [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization).

## Billing

Cloud sandboxing is billed based on usage. {% data variables.product.github %} measures cloud sandbox usage across three meters:

| Meter | Description | Unit | Price (USD) |
| --- | --- | --- |------------|
| Compute | Time that a cloud sandbox session is running. | vCPU second | $0.000024 |
| Memory | Memory allocated to a cloud sandbox session while it is running. | GiB second | $0.000003 |
| Storage | Snapshot storage for stopped sessions. | GiB month | $0.005  |

For more information about how cloud sandbox usage is measured and billed, see [AUTOTITLE](/billing/concepts/product-billing/cloud-and-local-sandboxes).

## Further reading

* [AUTOTITLE](/copilot/concepts/security-governance-and-network-settings/about-cloud-and-local-sandboxes)
* [AUTOTITLE](/copilot/how-tos/cloud-and-local-sandboxes/enabling-or-disabling-cloud-sandboxes-for-your-organization)
* [AUTOTITLE](/billing/concepts/product-billing/cloud-and-local-sandboxes)
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment)
