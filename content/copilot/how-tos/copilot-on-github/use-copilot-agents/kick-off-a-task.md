---
title: Kick off a task with {% data variables.product.prodname_copilot_short %} agents on {% data variables.product.github %}
shortTitle: Kick off a task
intro: 'Decide whether {% data variables.copilot.copilot_cloud_agent %} creates a pull request immediately or works on a branch you review and iterate on first.'
product: '{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

You can start a {% data variables.copilot.copilot_cloud_agent %} task in several ways. **Assigning an issue** always creates a pull request. **Starting with a prompt** works on a branch by default, giving you a chance to review, steer, and iterate before you open a pull request. **Seeding a repository** creates a draft pull request with scaffolded code.

## Assign an issue to {% data variables.product.prodname_copilot_short %}

Assigning an issue always creates a pull request. {% data variables.product.prodname_copilot_short %} works on the task and requests your review when it finishes.

1. In the right sidebar of the issue, click **Assignees**.
1. Click **Copilot** from the assignees list.
1. Optionally, add context in the **Optional prompt** field—for example, coding patterns, files to modify, or testing requirements.
1. Optionally, change the target repository or base branch using the dropdown menus.

{% data reusables.copilot.optional-select-custom-agent-dotcom %}
{% data reusables.copilot.optional-select-copilot-cloud-agent-model %}

{% data variables.product.prodname_copilot_short %} receives the issue title, description, and existing comments at assignment time. It does not see comments added after assignment, so post follow-up information on the pull request instead.

## Start a task with a prompt

{% data variables.copilot.copilot_cloud_agent_short_cap_c %} works on a branch by default. You can review the diff, iterate with follow-up prompts, and create a pull request when you're ready.

{% data reusables.copilot.open-agents-panel-or-page %}
{% data reusables.copilot.cloud-agent.new-agent-task-form-instructions %}

The same prompt box is available on your [dashboard](https://github.com) and in {% data variables.copilot.copilot_chat_short %} (type `/task`).

For the full workflow of researching, planning, and iterating before creating a pull request, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/research-plan-iterate).

## Seed a new repository

When you create a new repository, you can have {% data variables.product.prodname_copilot_short %} generate starter code.

{% data reusables.repositories.create_new %}
1. In the **Prompt** field, describe what you want {% data variables.product.prodname_copilot_short %} to build — for example, `Create a Rust CLI for converting CSV spreadsheets to Markdown`.
{% data reusables.repositories.create-repo %}

{% data variables.product.prodname_copilot_short %} opens a draft pull request with the scaffolded code.

## Further reading

* [AUTOTITLE](/copilot/tutorials/cloud-agent/get-the-best-results)
* [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents)
