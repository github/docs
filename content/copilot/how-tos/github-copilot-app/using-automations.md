---
title: Using automations in the GitHub Copilot app
shortTitle: Automations
intro: 'Automate recurring agent tasks so they run on a schedule or on demand, without manual intervention.'
allowTitleToDifferFromFilename: true
product: '{% data reusables.gated-features.github-app %}<br><a href="https://github.com/features/ai/github-app" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Download {% data variables.copilot.github_copilot_app %}</span> {% octicon "link-external" height:16 %}</a>'
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

You can create and manage {% data variables.copilot.copilot_automations %} from:

* The **Agents** tab in a repository on {% data variables.product.github %}, in the **{% data variables.copilot.copilot_automations_cap %}** pane.
* The **[{% data variables.copilot.copilot_automations_cap %}](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fautomations)** tab in the {% data variables.copilot.github_copilot_app %}.

For an overview of {% data variables.copilot.copilot_automations %}, including triggers, tools, visibility, and security, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-automations).

The {% data variables.copilot.github_copilot_app %} supports two types of {% data variables.copilot.copilot_automations %}:

* **Local {% data variables.copilot.copilot_automations %}**, which run from your local environment.
* **Cloud {% data variables.copilot.copilot_automations %}**, which run in a cloud environment.

Open **[Automations](https://github.com/copilot/app/launch?open=ghapp%3A%2F%2Fautomations)** in the sidebar to see your saved {% data variables.copilot.copilot_automations %}. Each {% data variables.copilot.copilot_automation %} shows its name, schedule, associated repository, and last run status.

## Prerequisites for using cloud {% data variables.copilot.copilot_automations %}

To use cloud {% data variables.copilot.copilot_automations %}, make sure the following settings are enabled.

* {% data variables.copilot.copilot_cloud_agent %} must be enabled for the repository. If you have {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %}, an administrator must enable the {% data variables.copilot.copilot_cloud_agent %} policy. See [AUTOTITLE](/copilot/concepts/agents/cloud-agent/access-management).
* The organization must allow both {% data variables.copilot.copilot_cloud_agent %} and {% data variables.copilot.copilot_automations %} in the repository (both are enabled by default). See [AUTOTITLE](/copilot/how-tos/administer-copilot/manage-for-organization/add-copilot-cloud-agent).
* If you want to create {% data variables.copilot.copilot_automations %} that can listen to events triggered by users without write access, disable the "Only allow automations to be triggered by users with write access" setting in {% data variables.copilot.copilot_cloud_agent %} repository settings.

## Creating an {% data variables.copilot.copilot_automation %}

1. Click **New automation** in the top-right corner.
1. Enter a name for the {% data variables.copilot.copilot_automation %}.
1. Select a **Trigger** from the dropdown. Selecting a trigger will reveal additional fields for you to populate.

   * **Manual**: Run the {% data variables.copilot.copilot_automation %} only when you start it.
   * **Hourly**: Run the {% data variables.copilot.copilot_automation %} every hour.
   * **Daily**: Choose one or more hours and a minute. The {% data variables.copilot.copilot_automation %} runs at each selected time.
   * **Weekly**: Choose one or more days of the week and a time of day.
   * **CRON**: For a local {% data variables.copilot.copilot_automation %}, enter a custom CRON expression. The app validates the expression and shows a human-readable preview of the schedule.
   * **Issue**: Choose the repository event that triggers the {% data variables.copilot.copilot_automation %}, such as an issue being created. You can add a search query to limit which issues trigger it.
   * **Pull request**: Choose the repository event that triggers the {% data variables.copilot.copilot_automation %}, such as a pull request being opened or new commits being pushed to it. You can add filters to limit which pull requests trigger it.

   To configure more than one trigger, click **Add another trigger**. The {% data variables.copilot.copilot_automation %} runs when any of its triggers occur.
1. Optionally, enable **Run in the cloud** to let the {% data variables.copilot.copilot_automation %} run in a cloud environment, allowing the {% data variables.copilot.copilot_automation %} to run even when your computer is off.

   For a cloud {% data variables.copilot.copilot_automation %}, use the **Tools** dropdown to select the tools {% data variables.product.prodname_copilot_short %} can use, such as pushing changes, updating issue labels, or creating a pull request. Select only the tools the task requires.
1. In the prompt box, describe the task you want {% data variables.product.prodname_copilot_short %} to perform each time the {% data variables.copilot.copilot_automation %} runs. You can type `/` to use an available skill.
1. Use the controls below the prompt box to select the model, reasoning effort, and agent for the {% data variables.copilot.copilot_automation %}.
1. Click **Select project**, then choose the project where the {% data variables.copilot.copilot_automation %} will run.
1. Click **Create** to save the {% data variables.copilot.copilot_automation %}. To save and test it immediately, open the dropdown next to **Create**, then click **Create and run**.

## Running an {% data variables.copilot.copilot_automation %} on demand

You can trigger any saved {% data variables.copilot.copilot_automation %} manually by clicking the play button on its card on the "Automations" page, without waiting for its next scheduled run.

You can also open {% data variables.copilot.copilot_automations %} directly in the app using deep links from markdown files, third-party tools, or scripts. For more information, see [AUTOTITLE](/copilot/how-tos/github-copilot-app/open-with-deep-links).
