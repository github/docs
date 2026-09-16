---
title: Using agent apps
shortTitle: Use agent apps
intro: 'Start a partner-built agent from an issue, a pull request comment, or the Agents UI on {% data variables.product.github %}.'
product: '{% data reusables.copilot.plans.permission-paid-plans-no-purchase-link %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button&utm_source=docs-use-agent-apps&utm_medium=docs&utm_campaign=msbuild-2026" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
---

> [!NOTE] {% data reusables.copilot.agent-apps-preview %}

## Introduction

{% data variables.copilot.agent_apps_caps %} let you delegate work to partner-built agents from within {% data variables.product.github %}. For an overview, see [AUTOTITLE](/copilot/concepts/agents/agent-apps).

Before you can use an {% data variables.copilot.agent_app %}, the {% data variables.product.prodname_github_app %} must be installed on the account or organization that owns the repository, and agent features must be enabled for the app. If the repository is owned by an organization that belongs to an enterprise, the "{% data variables.copilot.agent_apps_caps %}" {% data variables.product.prodname_copilot_short %} policy must also be enabled in your enterprise settings.

## Authorizing an agent app

The first time you use an {% data variables.copilot.agent_app %}, {% data variables.product.github %} prompts you to authorize the app through an OAuth flow. Follow the prompts to authorize the app before the agent runs. For more information, see [AUTOTITLE](/apps/using-github-apps/authorizing-github-apps).

## Starting an agent from the Agents UI

{% data reusables.copilot.open-agents-panel-or-page %}
1. Under the prompt box, select the {% data variables.copilot.agent_app %} you want to use.
1. Type a prompt describing your request, then start the task.

## Starting an agent from an issue

You can assign an {% data variables.copilot.agent_app %} to an issue in the same way you assign {% data variables.copilot.copilot_cloud_agent %}.

1. Navigate to the issue you want the agent to work on.
1. In the sidebar, under "Assignees," assign the {% data variables.copilot.agent_app %} to the issue.

The agent starts work on the issue and reports back on its progress.

## Starting an agent from a pull request comment

You can ask an {% data variables.copilot.agent_app %} to make changes or perform other tasks by mentioning it in a pull request comment.

1. Navigate to the pull request you want the agent to work on.
1. Add a comment that mentions the agent and describes what you want it to do, for example `@AGENT-NAME add a feature flag for the new checkout flow`. Pick the agent from the autocomplete picker.

The agent responds to your comment and works on the requested changes.

## Using agent apps on {% data variables.product.prodname_mobile %}

You can start {% data variables.copilot.agent_apps %} from the same entry points on {% data variables.product.prodname_mobile %}. For more information about using agents on mobile, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/use-cloud-agent-on-mobile).

## Billing

{% data reusables.copilot.agent-apps-billing %}
