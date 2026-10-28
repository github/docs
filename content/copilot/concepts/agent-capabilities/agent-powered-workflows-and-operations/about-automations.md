---
title: Copilot automations
shortTitle: About automations
allowTitleToDifferFromFilename: true
intro: '{% data variables.copilot.copilot_automations_cap %} let you run {% data variables.copilot.copilot_cloud_agent %} automatically on a schedule, in response to events in a repository, or programmatically via the API.'
product: '{% data reusables.gated-features.copilot-automations %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button&utm_source=docs-about-cca-automations&utm_medium=docs&utm_campaign=msbuild-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
redirect_from:
  - /copilot/concepts/agents/cloud-agent/about-automations
contentType: concepts
category:
  - Learn about Copilot
---

## Overview

{% data reusables.copilot.cloud-agent.automations-what-is %}

You define your prompt once, select your triggers and decide what tools {% data variables.product.prodname_copilot_short %} should be able to use. {% data variables.product.prodname_copilot_short %} runs your automation automatically whenever the {% data variables.copilot.copilot_automation %}'s trigger fires.

For example, you can use {% data variables.copilot.copilot_automations %} to:

* **Reproduce bugs**: Attempt to reproduce a reported bug when an issue is opened.
* **Capture screenshots for review**: Capture screenshots of changes and attach them to a pull request when it's marked as ready for review.
* **Investigate production incidents**: Start investigating an incident when your monitoring tool detects it.

You can also create and manage {% data variables.copilot.copilot_automations %} from:

* The **Agents** tab of a repository on {% data variables.product.github %}
* The **{% data variables.copilot.copilot_automations_cap %}** tab in the {% data variables.copilot.github_copilot_app %}
* The **Agents** window in {% data variables.product.prodname_vscode_shortname %}
* The REST API 

When you create an {% data variables.copilot.copilot_automation %}, you define:

* A **name** to identify the {% data variables.copilot.copilot_automation %}.
* A **type**, either personal or shared, which determines who can see and edit the {% data variables.copilot.copilot_automation %}, who is billed, and whose identity it uses. See [Personal and shared {% data variables.copilot.copilot_automations %}](#personal-and-shared-automations).
* A **prompt** describing the task you want {% data variables.product.prodname_copilot_short %} to perform.
* **Triggers** that determine when the {% data variables.copilot.copilot_automation %} runs.
* The **tools** {% data variables.product.prodname_copilot_short %} can use, which control what actions it can take in your repository.
* Optionally, the **model** and **reasoning level** {% data variables.product.prodname_copilot_short %} uses.
* Optionally, **{% data variables.product.prodname_ai_credits_short %} limits** that control how many {% data variables.product.prodname_ai_credits_short %} the {% data variables.copilot.copilot_automation %} can consume.

You can add {% data variables.copilot.copilot_automations %} to {% data variables.copilot.copilot_automation_groups %} which share context and can suggest improvements to themselves based on outcomes.

For instructions on creating and managing {% data variables.copilot.copilot_automations %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations).

## Availability and permissions

{% data reusables.copilot.cloud-agent.automations-availability %}

Any user with **write access** to a repository can create {% data variables.copilot.copilot_automations %} in that repository.

You can create and manage {% data variables.copilot.copilot_automations %} from:

* The **Agents** tab in a repository on {% data variables.product.github %}, in the **{% data variables.copilot.copilot_automations_cap %}** pane.
* The **{% data variables.copilot.copilot_automations_cap %}** tab in the {% data variables.copilot.github_copilot_app %}.
* The **{% data variables.copilot.copilot_automations_cap %}** tab in the **Agents** window in {% data variables.product.prodname_vscode_shortname %}.

Cloud {% data variables.copilot.copilot_automations %} in {% data variables.product.prodname_vscode_shortname %} require version 1.144 or later and the `chat.automations.cloud.enabled` setting to be enabled.

## Personal and shared {% data variables.copilot.copilot_automations %}

When you create a {% data variables.copilot.copilot_automation %}, you choose its type, which you can’t change later.

* **Personal {% data variables.copilot.copilot_automations %}** are useful for automating work for yourself, such as preparing your updates for a standup.
* **Shared {% data variables.copilot.copilot_automations %}** let your team build and maintain {% data variables.copilot.copilot_automations %} together, to automate workflows for the whole team.

{% rowheaders %}

| | Personal | Shared |
|---|---|---|
| **Who can see the {% data variables.copilot.copilot_automation %}** | Only you | Everyone with read access to the repository |
| **Who can see the {% data variables.copilot.copilot_automation %}'s runs** | Everyone with read access to the repository | Everyone with read access to the repository |
| **Who can edit the {% data variables.copilot.copilot_automation %}** | Only you | Everyone with write access to the repository |
| **Who is billed for {% data variables.product.prodname_ai_credits_short %}** | You | The organization or user that owns the repository |
| **Identity used for actions on {% data variables.product.github %}** | Your identity | {% data variables.product.prodname_copilot_short %}'s identity |

{% endrowheaders %}

Because a shared {% data variables.copilot.copilot_automation %} belongs to the repository rather than to the person who created it, it keeps working if that person leaves the team or loses access to the repository.

For a shared {% data variables.copilot.copilot_automation %} to run in an organization-owned repository, the organization must allow {% data variables.copilot.copilot_cloud_agent %} usage billed to the organization. An administrator can enable this with the "Allow use of {% data variables.copilot.copilot_cloud_agent %} billed to the organization" policy.

## Triggers

An {% data variables.copilot.copilot_automation %} runs when one of its triggers fires. A wide range of triggers are available, including:

* **On a schedule**: the {% data variables.copilot.copilot_automation %} runs at a recurring interval—hourly, daily, or weekly.
* **When an issue is created**: the {% data variables.copilot.copilot_automation %} runs each time an issue is opened in the repository.
* **When a pull request is opened**: the {% data variables.copilot.copilot_automation %} runs each time a pull request is opened in the repository.
* **When a pull request is synchronized**: the {% data variables.copilot.copilot_automation %} runs each time new commits are pushed to a pull request in the repository.

You can optionally configure filters for event-based triggers, for example:

* For when **an issue is created**, add a search query filter.
* For when **a pull request is opened** and when **a pull request is synchronized**, add a search query filter and a filter for files changed in the pull request.

To reduce the risk of prompt injection, {% data variables.copilot.copilot_automations %} ignore {% data variables.product.github %} events triggered by users who don't have write access to the repository by default. This helps prevent untrusted users from causing {% data variables.product.prodname_copilot_short %} to take action, for example, when an external contributor opens an issue. You can opt in to allowing these events if you need to. For more information, see [Security and safety](#security-and-safety).

All {% data variables.copilot.copilot_automations %} can be triggered via the API, allowing you to connect {% data variables.copilot.copilot_automations %} to external systems and tools. When starting an {% data variables.copilot.copilot_automation %} via the API, you can include additional context which is passed into the prompt.

## Tools and actions

The **tools** you select when you create an {% data variables.copilot.copilot_automation %} determine what {% data variables.product.prodname_copilot_short %} can do when the {% data variables.copilot.copilot_automation %} runs.

For example, you might allow {% data variables.product.prodname_copilot_short %} to push changes, update issue labels, or create a pull request.

You can choose from two kinds of tools:

* **{% data variables.product.github %} tools**, which let {% data variables.product.prodname_copilot_short %} work with your repository on {% data variables.product.github %}. For example, {% data variables.product.github %} tools let {% data variables.product.prodname_copilot_short %}:

  * Upload attachments
  * Hide and unhide comments and reviews
  * Add and remove reactions
  * Read discussions and their comments, and comment on discussions

* **Tools from MCP servers**, which let {% data variables.product.prodname_copilot_short %} work with external systems. An {% data variables.copilot.copilot_automation %} can use tools from the MCP servers configured in the repository's MCP settings. You choose which of each server's tools the {% data variables.copilot.copilot_automation %} can use. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

Selecting tools is the main way you control the scope of an {% data variables.copilot.copilot_automation %}. Grant only the tools that the task needs, so that {% data variables.product.prodname_copilot_short %} can't take actions you didn't intend.

You can manually select the tools you want to enable, or you can use the **Suggest tools** button on {% data variables.product.github %} to have {% data variables.product.prodname_copilot_short %} suggest tools based on your prompt.

{% data variables.product.github %} tools can only take action in the single repository the {% data variables.copilot.copilot_automation %} is scoped to. Tools from MCP servers aren't limited to that repository: they can access whatever the server's configuration and credentials allow, which may include other repositories and external systems. Review what each MCP server can access before you select its tools.

## Configuration inherited from the repository

{% data variables.copilot.copilot_automations_cap %} use the {% data variables.copilot.copilot_cloud_agent %} configuration for the repository they are scoped to, including:

* **Custom instructions**. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/add-custom-instructions/add-repository-instructions).
* **Agent skills**. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills).
* **Firewall rules**. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-the-firewall).
* **Secrets and variables**. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).

{% data variables.copilot.copilot_automations_cap %} are stored separately from your repository's contents. They are not committed to Git, so they are not versioned alongside your code or managed through pull requests.

## Billing

{% data reusables.copilot.cloud-agent.automations-billing %}

### Controlling costs with {% data variables.product.prodname_ai_credits_short %} limits

You can set limits on how many {% data variables.product.prodname_ai_credits_short %} an {% data variables.copilot.copilot_automation %} can consume. This lets you automate recurring work while staying in control of your usage.

{% data reusables.copilot.cloud-agent.automations-credit-limits %}

You can set limits when you create or update an {% data variables.copilot.copilot_automation %}. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations).

## Proposed improvements

{% data variables.copilot.copilot_automations_cap %} can propose improvements to their own tools, triggers, and prompts, and to those of other {% data variables.copilot.copilot_automations %}.

{% data variables.copilot.copilot_automations_cap %} may suggest improvements when they run into issues while working, such as missing tools.

When you create {% data variables.copilot.copilot_automations %} with {% data variables.product.prodname_copilot_short %}, {% data variables.product.prodname_copilot_short %} can help you to create self-improving {% data variables.copilot.copilot_automation_groups %} where some {% data variables.copilot.copilot_automations %} do work and others evaluate outcomes, continuously proposing improvements.

When an {% data variables.copilot.copilot_automation %} has a proposed improvement, you'll receive a notification and will see the proposal when viewing the {% data variables.copilot.copilot_automation %}.

You will see a description of the proposed improvement and the changes to be applied to the {% data variables.copilot.copilot_automation_group %}. You can decide whether to apply the proposed improvement or dismiss it.

## Security and safety

{% data variables.copilot.copilot_automations_cap %} run {% data variables.product.prodname_copilot_short %} without a person initiating each task, so they carry some additional risks. {% data variables.product.github %} provides built-in protections to help mitigate these risks.

* **Attribution.**
  * Actions taken on {% data variables.product.github %} by a shared {% data variables.copilot.copilot_automation %} are attributed to {% data variables.product.prodname_copilot_short %}. If your repository requires at least one pull request approval, an additional approval is required by default for pull requests created by a shared {% data variables.copilot.copilot_automation %}. Administrators can disable this extra requirement in rulesets, but not in branch protection rules.
  * Actions taken by a personal {% data variables.copilot.copilot_automation %} are attributed to the user who created the {% data variables.copilot.copilot_automation %}. As with pull requests that user creates themselves, they can't approve those pull requests, which preserves the expected review controls.
* **Least-privilege tools.** You choose exactly which tools an {% data variables.copilot.copilot_automation %} can use, so you can limit it to only the actions the task requires.
* **Untrusted input.** By default, {% data variables.copilot.copilot_automations %} ignore events triggered by users without write access to the repository, to reduce the risk of prompt injection from untrusted users.
* **Workflow runs.** By default, as with all {% data variables.copilot.copilot_cloud_agent %} work, {% data variables.product.prodname_actions %} workflows don't run on a pull request until a user with write access approves them. This mitigates the risk of a pull request opened by an {% data variables.copilot.copilot_automation %} triggering workflows automatically.
* **Transparent runs.** The {% data variables.copilot.copilot_cloud_agent %} sessions started by any {% data variables.copilot.copilot_automation %}, personal or shared, are visible to everyone with read access to the repository. Anyone who can see these sessions can see the prompt, the session logs, and any pull requests or other changes {% data variables.product.prodname_copilot_short %} creates.

For more information about how {% data variables.product.github %} mitigates the risks of {% data variables.copilot.copilot_cloud_agent %}, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/risks-and-mitigations).

## Further reading

* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations)
* [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-on-github)
* To learn how to store your automation as code, review it through pull requests, or run it with a different coding agent, see [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-github-agentic-workflows)
