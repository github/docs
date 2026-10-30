---
title: Using automations in the GitHub Copilot app
shortTitle: Automations
intro: 'Automate recurring agent tasks so they run on a schedule, in response to repository events or on demand, without manual intervention.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.github-app %}<br>{% data reusables.copilot.github-app-download-button %}'
versions:
  feature: copilot
contentType: how-tos
redirect_from:
  - /copilot/how-tos/github-copilot-app/using-scheduled-workflows
  - /copilot/how-tos/github-app/using-scheduled-workflows
category:
  - Author and optimize with Copilot
---

## About {% data variables.copilot.copilot_automations %}

{% data variables.copilot.copilot_automations_cap %} let you save recurring agent tasks and run them on a schedule or on demand. For example, you can create an {% data variables.copilot.copilot_automation %} that triages new issues daily or checks your open pull requests for review status each morning.

You can also set up recurring tasks within a project to support an ongoing goal. See [AUTOTITLE](/copilot/how-tos/github-copilot-app/working-with-projects).

You can create and manage {% data variables.copilot.copilot_automations %} from:

* The **Agents** tab in a repository on {% data variables.product.github %}, in the **{% data variables.copilot.copilot_automations_cap %}** pane.
* The **{% data variables.copilot.copilot_automations_cap %}** tab in the **Agents** window in {% data variables.product.prodname_vscode_shortname %}.

For an overview of {% data variables.copilot.copilot_automations %}, including triggers, tools, visibility, and security, see [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations).

The {% data variables.copilot.github_copilot_app %} supports two types of {% data variables.copilot.copilot_automations %}:

* **Local {% data variables.copilot.copilot_automations %}**, which run from your local environment.
* **Cloud {% data variables.copilot.copilot_automations %}**, which run in a cloud environment.

Open **[Automations](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fautomations)** in the sidebar to see your saved {% data variables.copilot.copilot_automations %}. Each {% data variables.copilot.copilot_automation %} shows its name, schedule, associated repository, and last run status.

## Prerequisites for using cloud {% data variables.copilot.copilot_automations %}

To use cloud {% data variables.copilot.copilot_automations %}, make sure the following settings are enabled.

* {% data variables.copilot.copilot_cloud_agent %} must be enabled for the repository. If you have {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %}, an administrator must enable the {% data variables.copilot.copilot_cloud_agent %} policy. See [AUTOTITLE](/copilot/concepts/enterprise/cloud-agent-access).
* The organization must allow both {% data variables.copilot.copilot_cloud_agent %} and {% data variables.copilot.copilot_automations %} in the repository (both are enabled by default). See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).

## Creating an {% data variables.copilot.copilot_automation %}

Cloud {% data variables.copilot.copilot_automation %} sessions, including prompts and session logs, are visible to everyone with read access to the repository, even for personal {% data variables.copilot.copilot_automations %}. Don't include secrets or other sensitive information in your prompts.

1. In the sidebar, click **Automations**.
1. Click **Create automation** in the top-right corner.

### Creating a cloud {% data variables.copilot.copilot_automation %} with {% data variables.product.prodname_copilot_short %}

You can work with {% data variables.product.prodname_copilot_short %} to design your cloud {% data variables.copilot.copilot_automation %}, setting up the triggers, tools and prompt.

{% data variables.product.prodname_copilot_short %} can even help you create self-improving groups of {% data variables.copilot.copilot_automations %} which learn from outcomes and suggest improvements to themselves.

1. From the dropdown under the prompt box, choose the repository where you want to create your {% data variables.copilot.copilot_automation %}.
1. In the prompt box, describe what you want {% data variables.product.prodname_copilot_short %} to help you automate in your repository.
1. Under **Type**, choose the kind of {% data variables.copilot.copilot_automation %} you want to create:

   * **Personal**: Only you can see the {% data variables.copilot.copilot_automation %}. {% data variables.product.prodname_ai_credits_short %} are charged to you, and actions taken on {% data variables.product.github %} use your identity.
   * **Shared**: Everyone with access to the repository can see the {% data variables.copilot.copilot_automation %}. {% data variables.product.prodname_ai_credits_short %} are charged to the organization or user that owns the repository, and actions taken on {% data variables.product.github %} use {% data variables.product.prodname_copilot_short %}'s identity.

   You can't change the type after you create the {% data variables.copilot.copilot_automation %}. See [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations#personal-and-shared-automations).
1. Click **Start session**.

   {% data variables.product.prodname_copilot_short %} will ask you questions and help to set up your {% data variables.copilot.copilot_automation %}.

### Creating an {% data variables.copilot.copilot_automation %} manually

1. Click **Create manually**.
1. Enter a name for the {% data variables.copilot.copilot_automation %}.
1. Optionally, enable **Run in the cloud** to let the {% data variables.copilot.copilot_automation %} run in a cloud environment, allowing the {% data variables.copilot.copilot_automation %} to run even when your computer is off. The available triggers will differ based on whether you are running locally or in the cloud.
1. Select a **Trigger** from the dropdown. Selecting a trigger will reveal additional fields for you to populate.

   For {% data variables.copilot.copilot_automations %} triggered by issues or pull requests and running in the cloud, you can choose:

   * **What resources on {% data variables.product.github %} can be updated during the run**. From the **When triggered, this automation can change** dropdown, choose **Anything in this repository** to let {% data variables.product.github %} tools create and update any resource in the repository. Choose **Only the triggering issue** to limit those tools' writes to the issue or pull request that triggered the run and any resources created during the run. This setting doesn't limit tools from MCP servers, which can access resources allowed by their server configuration and credentials. Depending on your repository configuration, the **Anything in this repository** option may not be available.
   * **Whether activity from {% data variables.product.prodname_copilot_short %} in the cloud can trigger this {% data variables.copilot.copilot_automation %}**: From the **Can be triggered by** dropdown, pick **Only people** to ignore events triggered by {% data variables.product.prodname_copilot_short %}, including {% data variables.copilot.copilot_automations %}. Pick **People and Copilot** to listen for all events, including events triggered by {% data variables.product.prodname_copilot_short %}.
   * **Whether users with only read access to the repository can trigger this {% data variables.copilot.copilot_automation %}**: By default, {% data variables.copilot.copilot_automations %} ignore activity from users who don't have write access to the repository. Uncheck the **Require write access to trigger** box to listen for these events. Depending on your repository configuration, the **Require write access to trigger** option may be locked in an enabled state.

   To configure more than one trigger, click **Add another trigger**. The {% data variables.copilot.copilot_automation %} runs when any of its triggers occur.

1. For a cloud {% data variables.copilot.copilot_automation %}, under **Type**, choose who the {% data variables.copilot.copilot_automation %} belongs to:

   * **Personal**: Only you can see the {% data variables.copilot.copilot_automation %}. {% data variables.product.prodname_ai_credits_short %} are charged to you, and actions taken on {% data variables.product.github %} use your identity.
   * **Shared**: Everyone with access to the repository can see the {% data variables.copilot.copilot_automation %}. {% data variables.product.prodname_ai_credits_short %} are charged to the organization or user that owns the repository, and actions taken on {% data variables.product.github %} use {% data variables.product.prodname_copilot_short %}'s identity.

   You can't change the type after you create the {% data variables.copilot.copilot_automation %}. See [AUTOTITLE](/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/about-automations#personal-and-shared-automations).

1. For a cloud {% data variables.copilot.copilot_automation %}, use the **Tools** dropdown to select the tools {% data variables.product.prodname_copilot_short %} can use, such as pushing changes, updating issue labels, or creating a pull request. You can also select tools from MCP servers configured in the repository's MCP settings. A repository administrator must configure these servers first. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers). Select only the tools the task requires.
1. In the prompt box, describe the task you want {% data variables.product.prodname_copilot_short %} to perform each time the {% data variables.copilot.copilot_automation %} runs. You can type `/` to use an available skill.
1. Optionally, for a cloud {% data variables.copilot.copilot_automation %}, expand **AI credit limits** directly below the prompt box to set limits on how many {% data variables.product.prodname_ai_credits_short %} the {% data variables.copilot.copilot_automation %} can consume. See [Setting {% data variables.product.prodname_ai_credits_short %} limits for cloud {% data variables.copilot.copilot_automations %}](#setting-ai-credits-limits-for-cloud-automations).
1. Use the controls below the prompt box to select the model, reasoning effort, and agent for the {% data variables.copilot.copilot_automation %}.
1. Choose the repository or local folder where the {% data variables.copilot.copilot_automation %} will run.
1. Click **Create** to save the {% data variables.copilot.copilot_automation %}. To save and test it immediately, open the dropdown next to **Create**, then click **Create and run**.

### Setting {% data variables.product.prodname_ai_credits_short %} limits for cloud {% data variables.copilot.copilot_automations %}

To control costs, you can limit how many {% data variables.product.prodname_ai_credits_short %} a cloud {% data variables.copilot.copilot_automation %} can consume. Limits aren't available for local {% data variables.copilot.copilot_automations %}.

When you create or edit a cloud {% data variables.copilot.copilot_automation %}, expand the **AI credit limits** section directly below the prompt box. When the section is collapsed, it shows whether any limits are set.

{% data reusables.copilot.cloud-agent.automations-credit-limits %}

To remove a limit, edit the {% data variables.copilot.copilot_automation %} and clear the value.

## Running an {% data variables.copilot.copilot_automation %} on demand

You can trigger any saved {% data variables.copilot.copilot_automation %} manually by clicking the play button on its card on the "Automations" page, without waiting for its next scheduled run.

You can also open {% data variables.copilot.copilot_automations %} directly in the app using deep links from markdown files, third-party tools, or scripts. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/open-with-deep-links).
