---
title: About Copilot automations
shortTitle: About automations
allowTitleToDifferFromFilename: true
intro: '{% data variables.copilot.copilot_automations_cap %} let you run {% data variables.copilot.copilot_cloud_agent %} automatically, on a schedule or in response to events in a repository.'
product: '{% data reusables.gated-features.copilot-automations %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button&utm_source=docs-about-cca-automations&utm_medium=docs&utm_campaign=msbuild-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: concepts
category:
  - Learn about Copilot
---

## Overview

{% data reusables.copilot.cloud-agent.automations-what-is %}

With a manually started {% data variables.copilot.copilot_cloud_agent %} session, you give {% data variables.product.prodname_copilot_short %} a task each time you want work done. With {% data variables.copilot.copilot_automations %}, you define a task once, and {% data variables.product.prodname_copilot_short %} runs it automatically whenever the {% data variables.copilot.copilot_automation %}'s trigger fires.

For example, you can use {% data variables.copilot.copilot_automations %} to:

* **Triage incoming issues**: automatically label new issues as a bug, an enhancement, or other, based on their content.
* **Fix failing tests nightly**: each night, check for failing tests on the `main` branch, attempt a fix, and open a draft pull request.
* **Prepare weekly release notes**: draft release notes and open a pull request on a schedule.

When you create an {% data variables.copilot.copilot_automation %}, you define:

* A **name** to identify the {% data variables.copilot.copilot_automation %}.
* A **prompt** describing the task you want {% data variables.product.prodname_copilot_short %} to perform.
* One or more **triggers** that determine when the {% data variables.copilot.copilot_automation %} runs.
* The **model** {% data variables.product.prodname_copilot_short %} uses.
* The **tools** {% data variables.product.prodname_copilot_short %} can use, which control what actions it can take in your repository.

For instructions on creating and managing {% data variables.copilot.copilot_automations %}, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations).

## Availability and permissions

{% data reusables.copilot.cloud-agent.automations-availability %}

Any user with **write access** to a repository can create {% data variables.copilot.copilot_automations %} in that repository.

You can create and manage {% data variables.copilot.copilot_automations %} from:

* The **Agents** tab in a repository on {% data variables.product.github %}, in the **{% data variables.copilot.copilot_automations_cap %}** pane.
* The **{% data variables.copilot.copilot_automations_cap %}** tab in the {% data variables.copilot.github_copilot_app %}.

## Triggers

An {% data variables.copilot.copilot_automation %} runs when one of its triggers fires. The following triggers are available:

* **On a schedule**: the {% data variables.copilot.copilot_automation %} runs at a recurring interval—hourly, daily, or weekly.
* **When an issue is created**: the {% data variables.copilot.copilot_automation %} runs each time an issue is opened in the repository.
* **When a pull request is opened**: the {% data variables.copilot.copilot_automation %} runs each time a pull request is opened in the repository.
* **When a pull request is synchronized**: the {% data variables.copilot.copilot_automation %} runs each time new commits are pushed to a pull request in the repository.

You can optionally configure filters for event-based triggers:

* For when **an issue is created**, add a search query filter.
* For when **a pull request is opened** and when **a pull request is synchronized**, add a search query filter and a filter for files changed in the pull request.

To reduce the risk of prompt injection, {% data variables.copilot.copilot_automations %} ignore events triggered by users who don't have write access to the repository by default. This helps prevent untrusted users—for example, an external contributor opening an issue—from causing {% data variables.product.prodname_copilot_short %} to take action. You can opt in to allowing these events if you need to. For more information, see [Security and safety](#security-and-safety).

## Tools and actions

The **tools** you select when you create an {% data variables.copilot.copilot_automation %} determine what {% data variables.product.prodname_copilot_short %} can do when the {% data variables.copilot.copilot_automation %} runs.

For example, you might allow {% data variables.product.prodname_copilot_short %} to push changes, update issue labels, or create a pull request.

Selecting tools is the main way you control the scope of an {% data variables.copilot.copilot_automation %}. Grant only the tools that the task needs, so that {% data variables.product.prodname_copilot_short %} can't take actions you didn't intend.

You can manually select the tools you want to enable, or you can use the **Suggest tools** button to have {% data variables.product.prodname_copilot_short %} suggest tools based on your prompt.

An {% data variables.copilot.copilot_automation %} can only take action in the single repository it is scoped to.

## Configuration inherited from the repository

{% data variables.copilot.copilot_automations_cap %} use the {% data variables.copilot.copilot_cloud_agent %} configuration for the repository they are scoped to, including:

* **Custom instructions**. See [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions).
* **Agent skills**. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills).
* **Firewall rules**. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/customize-the-agent-firewall).
* **Secrets and variables**. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).

{% data variables.copilot.copilot_automations_cap %} are stored separately from your repository's contents. They are not committed to Git, so they are not versioned alongside your code or managed through pull requests.

## Visibility

An {% data variables.copilot.copilot_automation %} is **private to the user who created it**. Other people, including repository administrators, can't see your {% data variables.copilot.copilot_automations %}.

However, the {% data variables.copilot.copilot_cloud_agent %} **sessions** that an {% data variables.copilot.copilot_automation %} starts are visible to other people with access to the repository, just like any other {% data variables.copilot.copilot_cloud_agent %} session. Anyone who can see these sessions can see the prompt, the session logs, and any pull requests or other changes {% data variables.product.prodname_copilot_short %} creates.

Because sessions and their logs are visible to others, you should not include secrets or other sensitive information directly in an {% data variables.copilot.copilot_automation %}'s prompt. To give {% data variables.product.prodname_copilot_short %} access to sensitive values, use repository secrets instead. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).

## Billing

{% data reusables.copilot.cloud-agent.automations-billing %}

## Security and safety

{% data variables.copilot.copilot_automations_cap %} run {% data variables.product.prodname_copilot_short %} without a person initiating each task, so they carry some additional risks. {% data variables.product.github %} provides built-in protections to help mitigate these risks.

* **Attribution.** Pull requests opened and code pushed by an {% data variables.copilot.copilot_automation %} are attributed to the user who created the {% data variables.copilot.copilot_automation %}. As with pull requests that user creates themselves, they can't approve those pull requests, which preserves the expected review controls.
* **Least-privilege tools.** You choose exactly which tools an {% data variables.copilot.copilot_automation %} can use, so you can limit it to only the actions the task requires.
* **Untrusted input.** By default, {% data variables.copilot.copilot_automations %} ignore events triggered by users without write access to the repository, to reduce the risk of prompt injection from untrusted users.
* **Workflow runs.** As with all {% data variables.copilot.copilot_cloud_agent %} work, {% data variables.product.prodname_actions %} workflows don't run on a pull request until a user with write access approves them. This mitigates the risk of a pull request opened by an {% data variables.copilot.copilot_automation %} triggering workflows automatically.

For more information about how {% data variables.product.github %} mitigates the risks of {% data variables.copilot.copilot_cloud_agent %}, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/risks-and-mitigations).

## Further reading

* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/create-automations)
* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent)
