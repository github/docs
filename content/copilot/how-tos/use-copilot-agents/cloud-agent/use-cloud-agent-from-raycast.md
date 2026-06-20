---
title: Using Copilot cloud agent from Raycast
shortTitle: Use cloud agent from Raycast
intro: 'Start and track {% data variables.copilot.copilot_cloud_agent %} sessions from the Raycast launcher.'
product: '{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

{% data reusables.copilot.cloud-agent.raycast-intro %}

## Prerequisites

{% data reusables.copilot.cloud-agent.raycast-setup %}

## Starting a session

1. Open Raycast, search for "{% data variables.product.prodname_copilot_short %}," find the **Create Task** command, then press <kbd>Enter</kbd>.
1. Click **Sign in with {% data variables.product.github %}**, then complete the authentication flow. Raycast will re-open.
1. Type a prompt describing what you want {% data variables.product.prodname_copilot_short %} to do.

    For example, `Implement a user friendly message for common errors.`
1. Select the repository you want {% data variables.product.prodname_copilot_short %} to work in.
1. Optionally, select a base branch for {% data variables.product.prodname_copilot_short %}'s pull request. {% data variables.product.prodname_copilot_short %} will create a new branch based on this branch, then push the changes to a pull request targeting that branch.
{% data reusables.copilot.optional-select-custom-agent-generic %}
{% data reusables.copilot.optional-select-copilot-cloud-agent-model %}
1. Press <kbd>Command</kbd>+<kbd>Enter</kbd> (macOS) or <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows) to start the task.

    {% data variables.product.prodname_copilot_short %} will start a new session. {% data variables.product.prodname_copilot_short %} will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.

{% data reusables.copilot.cloud-agent.raycast-oauth-access-restrictions %}

## Assigning an issue from Raycast

1. Open Raycast, search for "{% data variables.product.prodname_copilot_short %}," find the **Assign Issues to {% data variables.product.prodname_copilot_short %}** command, then press <kbd>Enter</kbd>.
1. Click **Sign in with {% data variables.product.github %}**, then complete the authentication flow. Raycast will re-open.
1. Select the repository you want {% data variables.product.prodname_copilot_short %} to work in.
1. Select the issue you want to assign to {% data variables.product.prodname_copilot_short %}.
1. Optionally, select a base branch for {% data variables.product.prodname_copilot_short %}'s pull request. {% data variables.product.prodname_copilot_short %} will create a new branch based on this branch, then push the changes to a pull request targeting that branch.
{% data reusables.copilot.optional-select-custom-agent-generic %}
{% data reusables.copilot.optional-select-copilot-cloud-agent-model %}
1. Optionally, provide additional instructions. These will be passed to {% data variables.product.prodname_copilot_short %} alongside your issue contents.
1. Press <kbd>Command</kbd>+<kbd>Enter</kbd> (macOS) or <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows) to assign the issue.

    {% data variables.product.prodname_copilot_short %} will start a new session. {% data variables.product.prodname_copilot_short %} will work on the task and push changes to its pull request, then add you as a reviewer when it has finished, triggering a notification.

{% data reusables.copilot.cloud-agent.raycast-oauth-access-restrictions %}

## Tracking your sessions

1. Open Raycast, search for "{% data variables.product.prodname_copilot_short %}," find the **View Tasks** command, then press <kbd>Enter</kbd>.
1. Click **Sign in with {% data variables.product.github %}**, then complete the authentication flow. Raycast will re-open.
1. You'll see a list of your tasks. Select a task, then use the following keyboard shortcuts:
   * To watch the session logs live, press <kbd>Enter</kbd>. The logs update in real time, so you can monitor {% data variables.product.prodname_copilot_short %}'s progress without leaving Raycast.
   * To open the session logs in the browser, press <kbd>Command</kbd>+<kbd>Enter</kbd> (macOS) or <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (Windows).
   * To open the linked pull request, press <kbd>Command</kbd>+<kbd>P</kbd> (macOS) or <kbd>Ctrl</kbd>+<kbd>P</kbd> (Windows).

> [!NOTE]
> If you are unable to see some tasks in Raycast, the organization that owns the repository may have enabled {% data variables.product.prodname_oauth_app %} access restrictions. To learn how to request approval for the "{% data variables.product.prodname_copilot %} for Raycast" {% data variables.product.prodname_oauth_app %}, see [AUTOTITLE](/account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/requesting-organization-approval-for-oauth-apps).

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents)
* [AUTOTITLE](/copilot/tutorials/cloud-agent/get-the-best-results)
