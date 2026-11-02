---
title: Using Copilot in the cloud on GitHub Mobile
shortTitle: Use Copilot in the cloud on Mobile
intro: 'Start and track {% data variables.copilot.copilot_in_the_cloud_short %} sessions from the {% data variables.product.prodname_mobile %} app.'
product: '{% data reusables.gated-features.copilot-in-the-cloud %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=using-cca-mobile-article-signup-cta&utm_medium=docs&utm_campaign=universe-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
allowTitleToDifferFromFilename: true
category:
  - Author and optimize with Copilot
---

## Starting a {% data variables.copilot.copilot_in_the_cloud_short %} session

1. In {% data variables.product.prodname_mobile %}, tap the **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon in the bottom right corner of the screen, then tap **{% octicon "plus" aria-label="The plus icon" %} New Session**.

   You can also start a new agent session from a pull request or repository, or assign an agent directly from an issue.
1. Optionally, to choose where {% data variables.product.prodname_copilot_short %} runs the session, tap the environment picker, then select an environment. By default, {% data variables.product.prodname_copilot_short %} runs the session in a cloud sandbox. For more information, see [AUTOTITLE](/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes#choosing-where-copilot-runs).
1. Using the scope and owner pickers, select the scope or a repository for your session.
1. Using the **{% octicon "plus" aria-hidden="true" aria-label="plus" %} Attach** menu in the prompt field, give {% data variables.product.prodname_copilot_short %} references for your request.
1. Optionally and if you selected a repository above, click **{% octicon "git-branch" aria-hidden="true" aria-label="git-branch" %}** to select a base branch for {% data variables.product.prodname_copilot_short %}'s changes. {% data variables.product.prodname_copilot_short %} will create a new branch based on this branch.
{% data reusables.copilot.optional-select-copilot-cloud-agent-model %}
{% data reusables.copilot.optional-select-custom-agent-generic %}
1. Enter a prompt describing your request, or if available, tap the microphone icon to dictate the context.
1. Press **Enter** or click the submit button.

    {% data variables.product.prodname_copilot_short %} will start a new session, work on the task, and push any code changes. If requested, {% data variables.product.prodname_copilot_short %} will generate a list of files changed, a pull request, artifacts it generated (such as a research plan), and any other relevant outputs.

## Starting a session with {% data variables.copilot.copilot_cloud_agent %}

1. In {% data variables.product.prodname_mobile %}, tap the **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon in the bottom right corner of the screen, then tap **{% octicon "agent" aria-label="The Agents icon" %} New Session**.
1. Using the dropdown menu in the prompt field, select the repository you want {% data variables.product.prodname_copilot_short %} to work in.
1. Optionally, to choose where {% data variables.product.prodname_copilot_short %} runs the session, tap the environment picker, then select an environment. By default, {% data variables.product.prodname_copilot_short %} runs the session in a cloud sandbox. For more information, see [AUTOTITLE](/copilot/concepts/security-governance-and-network-settings/about-cloud-sandboxes#choosing-where-copilot-runs).

   You can't change the environment after the session starts. To use a different environment, start a new session.

1. Enter a prompt describing your request.

   For example: `Implement a user friendly message for common errors.`

   If you want {% data variables.product.prodname_copilot_short %} to open a pull request, you can ask in your prompt, for example `Open a pull request to implement a user friendly message for common errors.`
1. Optionally, select a base branch for {% data variables.product.prodname_copilot_short %}'s changes. {% data variables.product.prodname_copilot_short %} will create a new branch based on this branch.
{% data reusables.copilot.optional-select-custom-agent-generic %}
{% data reusables.copilot.optional-select-copilot-cloud-agent-model %}
1. Click the submit button.

    {% data variables.product.prodname_copilot_short %} will start a new session, work on the task, and push any code changes.

## Assigning an issue to {% data variables.product.prodname_copilot_short %}

1. In {% data variables.product.prodname_mobile %}, navigate to the repository that contains the issue you want to assign to {% data variables.product.prodname_copilot_short %}.
1. Click **Issues**.
1. Open the issue that you want to assign to {% data variables.product.prodname_copilot_short %}.
1. Tap the **{% octicon "info" aria-label="information" %}** icon.
1. Beside "Assignees", tap **Edit**.
1. Beside "{% data variables.product.prodname_copilot_short %}", click the plus sign.
1. Click **Done**.

## Tracking your sessions

You can see a list of your running and past agents sessions in {% data variables.product.prodname_mobile %}.

1. In {% data variables.product.prodname_mobile %}, tap the **{% octicon "copilot" aria-hidden="true" aria-label="Copilot" %}** icon in the bottom right corner of the screen.

   A list of your recent chat and agents sessions with {% data variables.product.prodname_copilot_short %} is displayed.

1. Use the **{% octicon "search" aria-hidden="true" aria-label="Search" %} Search** or **{% octicon "filter" aria-hidden="true" aria-label="Filter" %}** buttons at the top of the list to filter the list of sessions.

   For example, to show only merged tasks, tap **Open** and then, in the dropdown, tap **Merged**.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents)
* [AUTOTITLE](/copilot/tutorials/cloud-agent/get-the-best-results)
