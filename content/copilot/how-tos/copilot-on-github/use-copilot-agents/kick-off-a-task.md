---
title: Kick off a task with {% data variables.product.prodname_copilot_short %} agents on {% data variables.product.github %}
shortTitle: Kick off a task
intro: 'Move from an idea for a task, to code you can review, by starting {% data variables.copilot.copilot_in_the_cloud_short %} from an issue, a prompt, or a new repository.'
product: '{% data reusables.gated-features.copilot-in-the-cloud %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=kick-off-task-feature&utm_medium=docs&utm_campaign=universe-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

You can start a {% data variables.product.prodname_copilot %} task by assigning an issue, describing the work in a prompt, or asking {% data variables.product.prodname_copilot_short %} to scaffold a new repository. When you start with a prompt, {% data variables.product.prodname_copilot_short %} begins a session that you can steer with follow-up prompts. You can ask it to open a pull request, or review its changes in the session and create a pull request when you're ready.

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

Start a {% data variables.product.prodname_copilot %} task from:
* A {% data variables.product.prodname_copilot_short %} prompt
* By using the "Get started with agents" suggested prompts section shown on the agents tab or {% data variables.product.prodname_copilot_short %} home page

{% data reusables.copilot.open-agents-panel-or-page %}
{% data reusables.copilot.cloud-agent.new-agent-task-form-instructions %}

If you don't specify a repository to work in, {% data variables.product.prodname_copilot_short %} will prompt you to select one. To start a session, describe the outcome you want and any constraints. {% data variables.product.prodname_copilot_short %} can work on the changes in a session that you steer with follow-up prompts. Ask it to open a pull request in your prompt, or review its changes and open a pull request from the session when you're ready.

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
