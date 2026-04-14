---
title: Research, plan, and iterate on code changes with Copilot cloud agent
shortTitle: Research, plan, iterate
intro: "Perform deep research on a repository, create an implementation plan, and make iterative code changes on a branch, then create a pull request when you're ready."
product: '{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=purchase&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
contentType: how-tos
category:
  - Author and optimize with Copilot
redirect_from:
  - /copilot/how-tos/use-copilot-agents/coding-agent/research-plan-iterate
---

## Introduction

You can use {% data variables.copilot.copilot_cloud_agent_tmp %} to:

* Perform **deep research** on a repository by asking {% data variables.product.prodname_copilot_short %} questions.
* **Plan** and refine an approach before {% data variables.product.prodname_copilot_short %} makes changes.
* **Iterate** on code changes on a branch, review a diff, and get {% data variables.product.prodname_copilot_short %} to only **create a pull request when you're ready**.

{% data variables.copilot.copilot_cloud_agent %} *won't* automatically open a pull request as part of the session. If you *do* want {% data variables.product.prodname_copilot_short %} to open a pull request for your task right away, you can explicitly ask for one in your prompt. For example, by stating **"Create a pull request to ..."**.

> [!NOTE] Deep research, planning, and iterating on code changes before creating a pull request are only available with {% data variables.copilot.copilot_cloud_agent %} on {% data variables.product.prodname_dotcom_the_website %}. {% data variables.copilot.copilot_cloud_agent_short_cap_c %} integrations (such as Azure Boards, JIRA, Linear, Slack, or Teams) only support creating a pull request directly.

## Performing deep research

You can ask {% data variables.copilot.copilot_cloud_agent %} questions about a repository to understand how it works, identify where to make a change, or confirm assumptions before planning and implementation. {% data variables.product.prodname_copilot_short %} starts a **deep research** session to examine the repository and return a grounded answer.

{% data reusables.copilot.open-agents-panel-or-page %}
1. Ask a question about the repository.

   For example: `Investigate performance issues in this app and suggest improvements.`

   > [!TIP] Alternatively, open {% data variables.copilot.copilot_chat_short %} and attach the relevant repository as context, then ask {% data variables.copilot.copilot_chat_short %} to do research. You will be prompted to approve a deep research session.
1. Optionally, send additional prompts while {% data variables.product.prodname_copilot_short %} is working to steer the session.
1. Review the response and ask follow-up questions.

## Creating a plan

You can ask {% data variables.copilot.copilot_cloud_agent %} to propose a plan before making changes, simply by prompting the agent.

1. Ask the agent to create a plan.
   
   For example: `Create a plan to implement the most impactful performance improvements for this app.`
1. Review the plan and iterate with {% data variables.product.prodname_copilot_short %} until it matches what you want.

## Iterating on code changes

After research and planning, you can make changes on a branch, review the diff, and then decide whether to iterate more or create a pull request.

1. Ask the agent to implement changes by describing what you want {% data variables.product.prodname_copilot_short %} to do in your prompt.

   For example, you might reference the plan you designed earlier: `Implement the plan we agreed upon.`
1. {% data variables.product.prodname_copilot_short %} starts a session to make the required changes.
1. Once the session completes, click **Diff** to review the changes.
1. Optionally, open the branch (`copilot/BRANCH-NAME`) that {% data variables.product.prodname_copilot_short %} created to inspect the changes in context.
1. If you want refinements, you can continue the conversation and ask the agent to adjust the work. For example: `Rename this to match our existing conventions.`
1. Continue iterating until you’re satisfied with the branch.
1. Once you're happy with the results, and when the session is complete, click **Create pull request**.

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/create-a-pr)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/create-custom-agents)