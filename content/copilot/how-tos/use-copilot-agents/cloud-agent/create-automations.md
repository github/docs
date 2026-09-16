---
title: Creating automations with Copilot cloud agent
shortTitle: Create cloud automations
allowTitleToDifferFromFilename: true
intro: 'Create and manage {% data variables.copilot.copilot_automations %} to run {% data variables.copilot.copilot_cloud_agent %} on a schedule or in response to events.'
product: '{% data reusables.gated-features.copilot-automations %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-create-cca-automations&utm_medium=docs&utm_campaign=msbuild-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

## Introduction

{% data reusables.copilot.cloud-agent.automations-what-is %}

You can create and manage {% data variables.copilot.copilot_automations %} from the **Agents** tab of a repository on {% data variables.product.github %}. You can also create and manage {% data variables.copilot.copilot_automations %} from the **{% data variables.copilot.copilot_automations_cap %}** tab in the {% data variables.copilot.github_copilot_app %}.

For an overview of {% data variables.copilot.copilot_automations %}, including triggers, tools, visibility, and security, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-automations).

## Prerequisites

{% data reusables.copilot.cloud-agent.automations-availability %}

## Creating an {% data variables.copilot.copilot_automation %}

{% data reusables.repositories.navigate-to-repo %}
1. Under your repository name, click **{% octicon "agent" aria-hidden="true" aria-label="agent" %} Agents**.
1. In the sidebar, click **{% data variables.copilot.copilot_automations_cap %}**.
1. Click **Create new**.
1. Enter a **name** for the {% data variables.copilot.copilot_automation %}.
1. Select one or more **triggers** that determine when the {% data variables.copilot.copilot_automation %} runs:

   * **On a schedule**: choose a recurring interval, either hourly, daily, or weekly.
   * **When an issue is created**: the {% data variables.copilot.copilot_automation %} runs each time an issue is opened in the repository.
   * **When a pull request is opened**: the {% data variables.copilot.copilot_automation %} runs each time a pull request is opened in the repository.
   * **When a pull request is synchronized**: the {% data variables.copilot.copilot_automation %} runs each time new commits are pushed to a pull request in the repository.

   You can optionally configure filters for issue and pull request triggers:

   * For when **an issue is created**, add a search query filter.
   * For when **a pull request is opened** and when **a pull request is synchronized**, add a search query filter and a filter for files changed in the pull request.

1. In the **prompt** field, describe the task you want {% data variables.product.prodname_copilot_short %} to perform each time the {% data variables.copilot.copilot_automation %} runs.

   For example, `Label this issue as a bug, an enhancement, or other, based on its content.`

   > [!WARNING]
   > The {% data variables.copilot.copilot_cloud_agent %} sessions started by an {% data variables.copilot.copilot_automation %} are visible to others with access to the repository. Don't include secrets or other sensitive information in your prompt. To give {% data variables.product.prodname_copilot_short %} access to sensitive values, use repository secrets. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).

1. Optionally, select the **model** you want {% data variables.product.prodname_copilot_short %} to use. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).
1. Select the **tools** {% data variables.product.prodname_copilot_short %} can use when the {% data variables.copilot.copilot_automation %} runs, such as pushing changes, updating issue labels, or creating a pull request.

    Select only the tools the task requires. The tools you select control what actions {% data variables.product.prodname_copilot_short %} can take in your repository. Optionally, you can use the **Suggest tools** button to ask {% data variables.product.prodname_copilot_short %} to suggest tools based on your prompt. See [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-automations#tools-and-actions).

1. Save the {% data variables.copilot.copilot_automation %} by clicking **Create automation**.

## Testing an {% data variables.copilot.copilot_automation %}

You can run an {% data variables.copilot.copilot_automation %} immediately, without waiting for its trigger to fire, to check that it behaves as you expect.

1. Open the {% data variables.copilot.copilot_automation %} you want to test from the **{% data variables.copilot.copilot_automations_cap %}** pane.
1. Click the **Run now** button.
   {% data variables.product.prodname_copilot_short %} starts a {% data variables.copilot.copilot_cloud_agent %} session and runs the {% data variables.copilot.copilot_automation %}'s prompt with the tools you selected. You can open the session to follow its progress and review any changes it makes.

## Managing your {% data variables.copilot.copilot_automations_cap %}

Your {% data variables.copilot.copilot_automations %} are private to you, but the sessions started from your automations will be visible to everyone with read access to the repository.

From the **{% data variables.copilot.copilot_automations_cap %}** pane in a repository, you can:

* View your {% data variables.copilot.copilot_automations %} for the repository and the sessions they have started.
* Edit an {% data variables.copilot.copilot_automation %} to change its name, prompt, triggers, tools, or model.
* Disable an {% data variables.copilot.copilot_automation %} to stop it running, or enable it again later.
* Delete an {% data variables.copilot.copilot_automation %} you no longer need.

To see all of your {% data variables.copilot.copilot_automations %} across every repository, and navigate to manage each one, use the {% data variables.copilot.copilot_automations_cap %} view at the user level.

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-automations)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions)
* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/risks-and-mitigations)
