---
title: Creating automations with Copilot cloud agent
shortTitle: Create cloud automations
allowTitleToDifferFromFilename: true
intro: 'Create and manage {% data variables.copilot.copilot_automations %} to run {% data variables.copilot.copilot_cloud_agent %} on a schedule, in response to events in a repository, or programmatically via the API.'
product: '{% data reusables.gated-features.copilot-automations %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-create-cca-automations&utm_medium=docs&utm_campaign=msbuild-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

## Introduction

{% data reusables.copilot.cloud-agent.automations-what-is %}

You can create and manage {% data variables.copilot.copilot_automations %} from the **Agents** tab of a repository on {% data variables.product.github %}.

You can also create and manage {% data variables.copilot.copilot_automations %} from:

* The **{% data variables.copilot.copilot_automations_cap %}** tab in the {% data variables.copilot.github_copilot_app %}
* The **Agents** window in {% data variables.product.prodname_vscode_shortname %}
* The REST API

For an overview of {% data variables.copilot.copilot_automations %}, including triggers, tools, visibility, and security, see [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations).

## Prerequisites

{% data reusables.copilot.cloud-agent.automations-availability %}

### Enabling cloud {% data variables.copilot.copilot_automations %} in {% data variables.product.prodname_vscode_shortname %}

To use cloud {% data variables.copilot.copilot_automations %} from {% data variables.product.prodname_vscode_shortname %}, complete the repository prerequisites above, then:

1. Update to {% data variables.product.prodname_vscode_shortname %} 1.144 or later.
1. In the Settings editor, enable `chat.automations.cloud.enabled`.
1. Open the **Agents** window, then select the **{% data variables.copilot.copilot_automations_cap %}** tab.

For creation and management instructions, see [Create and manage agent automations](https://code.visualstudio.com/docs/agents/run/automations) in the {% data variables.product.prodname_vscode_shortname %} documentation.

## Creating an {% data variables.copilot.copilot_automation %}

> [!WARNING]
> The {% data variables.copilot.copilot_cloud_agent %} sessions started by an {% data variables.copilot.copilot_automation %} are visible to others with access to the repository. Don't include secrets or other sensitive information in your prompt. To give {% data variables.product.prodname_copilot_short %} access to sensitive values, use repository secrets. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/configure-secrets-and-variables).

{% data reusables.repositories.navigate-to-repo %}
1. Under your repository name, click **{% octicon "agent" aria-hidden="true" aria-label="agent" %} Agents**.
1. In the sidebar, click **{% data variables.copilot.copilot_automations_cap %}**.
1. Click **Create {% data variables.copilot.copilot_automation %}**.
1. Click **Create with agent** to work with {% data variables.product.prodname_copilot_short %} to create your {% data variables.copilot.copilot_automations %}, or **Create manually** to set up {% data variables.copilot.copilot_automations %} with a form.

### Creating an {% data variables.copilot.copilot_automation %} with {% data variables.product.prodname_copilot_short %}

After you click **Create with agent**, a chat window will appear and {% data variables.product.prodname_copilot_short %} will ask what you want to automate.

You can work with {% data variables.product.prodname_copilot_short %} to design your {% data variables.copilot.copilot_automation %}, setting up the triggers, tools and prompt.

{% data variables.product.prodname_copilot_short %} can even help you create self-improving groups of {% data variables.copilot.copilot_automations %} which learn from outcomes and suggest improvements to themselves.

### Creating an {% data variables.copilot.copilot_automation %} manually

1. Enter a **name** for the {% data variables.copilot.copilot_automation %}.
1. Under **Type**, choose the kind of {% data variables.copilot.copilot_automation %} you want to create:

   * **Personal**: Only you can see the {% data variables.copilot.copilot_automation %}. {% data variables.product.prodname_ai_credits_short %} are charged to you, and actions taken on {% data variables.product.github %} use your identity.
   * **Shared**: Everyone with access to the repository can see the {% data variables.copilot.copilot_automation %}. {% data variables.product.prodname_ai_credits_short %} are charged to the organization or user that owns the repository, and actions taken on {% data variables.product.github %} use {% data variables.product.prodname_copilot_short %}'s identity.

   You can't change the type after you create the {% data variables.copilot.copilot_automation %}. See [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations#personal-and-shared-automations).
1. Select one or more **triggers** that determine when the {% data variables.copilot.copilot_automation %} runs. You can optionally configure filters for triggers to control when they fire.

   For issues and pull request triggers, you can choose:

   * **What resources on {% data variables.product.github %} can be updated during the run**. From the **Configured tools can change** dropdown, choose **Anything in this repository** to let {% data variables.product.github %} tools create and update any resource in the repository. Choose **Only this issue** to limit those tools' writes to the issue or pull request that triggered the run and any resources created during the run. This setting doesn't limit tools from MCP servers, which can access resources allowed by their server configuration and credentials. Depending on your repository configuration, the **Anything in this repository** option may not be available.
   * **Whether activity from {% data variables.product.prodname_copilot_short %} in the cloud can trigger this {% data variables.copilot.copilot_automation %}**: From the **Can be triggered by** dropdown, pick **Anyone except {% data variables.product.prodname_copilot_short %} in the cloud** to ignore events triggered by {% data variables.product.prodname_copilot_short %}, including {% data variables.copilot.copilot_automations %}. Pick **Anyone** to listen for all events, including events triggered by {% data variables.product.prodname_copilot_short %}.
   * **Whether users with only read access to the repository can trigger this {% data variables.copilot.copilot_automation %}**: By default, {% data variables.copilot.copilot_automations %} ignore activity from users who don't have write access to the repository. Uncheck the **Ignore events triggered by users without write access to this repository** box to listen for these events. Depending on your repository configuration, the **Ignore events triggered by users without write access to this repository** option may be locked in an enabled state.

1. In the **prompt** field, describe the task you want {% data variables.product.prodname_copilot_short %} to perform each time the {% data variables.copilot.copilot_automation %} runs.

   For example, `Label this issue as a bug, an enhancement, or other, based on its content.`

1. Optionally, select the **model** and **reasoning level** you want {% data variables.product.prodname_copilot_short %} to use. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).
1. Select the **tools** {% data variables.product.prodname_copilot_short %} can use when the {% data variables.copilot.copilot_automation %} runs, such as pushing changes, updating issue labels, or creating a pull request.

    You can select {% data variables.product.github %} tools, and tools from any MCP servers configured in the repository's MCP settings. To make an external system's tools available, a repository administrator must first configure its MCP server for the repository. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).

    Select only the tools the task requires. The tools you select control what actions {% data variables.product.prodname_copilot_short %} can take in your repository. Optionally, you can use the **Suggest tools** button to ask {% data variables.product.prodname_copilot_short %} to suggest tools based on your prompt. See [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations#tools-and-actions).

1. Optionally, under **AI credit limits**, set limits on how many {% data variables.product.prodname_ai_credits_short %} the {% data variables.copilot.copilot_automation %} can consume. See [Setting {% data variables.product.prodname_ai_credits_short %} limits](#setting-ai-credits-limits).
1. Save the {% data variables.copilot.copilot_automation %} by clicking **Create automation**.

## Setting {% data variables.product.prodname_ai_credits_short %} limits

Each time an {% data variables.copilot.copilot_automation %} runs, it consumes {% data variables.product.prodname_ai_credits_short %}, which are billed to you for a personal {% data variables.copilot.copilot_automation %}, or to the repository owner for a shared {% data variables.copilot.copilot_automation %}. To control costs, you can set limits in the **AI credit limits** section when you create or edit an {% data variables.copilot.copilot_automation %}.

{% data reusables.copilot.cloud-agent.automations-credit-limits %}

To remove a limit, edit the {% data variables.copilot.copilot_automation %} and clear the value.

## Testing an {% data variables.copilot.copilot_automation %}

You can run an {% data variables.copilot.copilot_automation %} immediately, without waiting for its trigger to fire, to check that it behaves as you expect.

1. Open the {% data variables.copilot.copilot_automation %} you want to test from the **{% data variables.copilot.copilot_automations_cap %}** pane.
1. Click the **Run** button.
1. From the **Trigger** dropdown, pick the trigger you want to simulate.
1. If you picked the **Manual** trigger, optionally enter **Context** which will be included in the agent's prompt. You can use this to simulate triggering the {% data variables.copilot.copilot_automation %} via the API.

   If you picked another trigger, fill in **Resource URL** with the relevant resource, for example the URL of the issue that was opened or the pull request comment that was created.
1. Click **Run now**.

   {% data variables.product.prodname_copilot_short %} starts a {% data variables.copilot.copilot_cloud_agent %} session and runs the {% data variables.copilot.copilot_automation %}'s prompt with the tools you selected. You can open the session to follow its progress and review any changes it makes.

## Managing your {% data variables.copilot.copilot_automations_cap %}

Your personal {% data variables.copilot.copilot_automations %} are private to you. Shared {% data variables.copilot.copilot_automations %} are visible to everyone with read access to the repository, and anyone with write access can edit them.

The sessions started from any {% data variables.copilot.copilot_automation %} are visible to everyone with read access to the repository.

From the **{% data variables.copilot.copilot_automations_cap %}** pane in a repository, you can:

* View your personal {% data variables.copilot.copilot_automations %} and the repository's shared {% data variables.copilot.copilot_automations %}, the sessions they have started, and the {% data variables.product.prodname_ai_credits_short %} they have consumed.
* Edit an {% data variables.copilot.copilot_automation %} to change its name, prompt, triggers, tools, model, reasoning effort or {% data variables.product.prodname_ai_credits_short %} limits, and track the {% data variables.copilot.copilot_automation %}'s revision history.
* Review proposed improvements to an {% data variables.copilot.copilot_automation %}'s tools, triggers or prompt, proposed by the {% data variables.copilot.copilot_automation %} itself or other {% data variables.copilot.copilot_automations %}.
* Disable an {% data variables.copilot.copilot_automation %} to stop it running, or enable it again later.
* Delete an {% data variables.copilot.copilot_automation %} you no longer need.

To see all of your {% data variables.copilot.copilot_automations %} across every repository, and navigate to manage each one, use the {% data variables.copilot.copilot_automations_cap %} view at the user level.

## Further reading

* [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/start-copilot-sessions)
* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/risks-and-mitigations)
