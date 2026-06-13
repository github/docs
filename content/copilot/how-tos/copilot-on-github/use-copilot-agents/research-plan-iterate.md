---
title: Research, plan, and iterate on code changes with {% data variables.copilot.copilot_cloud_agent %}
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
  - /copilot/how-tos/use-copilot-agents/cloud-agent/research-plan-iterate
  - /copilot/how-tos/use-copilot-agents/coding-agent/provide-visual-inputs
  - /copilot/how-tos/use-copilot-agents/cloud-agent/provide-visual-inputs
---

{% data variables.copilot.copilot_cloud_agent_tmp %} lets you:

* **Research** a repository by asking {% data variables.product.prodname_copilot_short %} questions.
* **Plan** and refine an approach before {% data variables.product.prodname_copilot_short %} makes changes.
* **Iterate** on code changes, review a diff, and **create a pull request when you're ready**.

Sessions do not create pull requests automatically. To create one immediately, include that in your prompt—for example, "Create a pull request to ...".

> [!NOTE] These capabilities are only available with {% data variables.copilot.copilot_cloud_agent %} on {% data variables.product.prodname_dotcom_the_website %}. {% data variables.copilot.copilot_cloud_agent_short_cap_c %} integrations (such as Azure Boards, JIRA, Linear, Slack, or Teams) only support creating a pull request directly.

## Perform deep research

Ask {% data variables.copilot.copilot_cloud_agent %} questions about a repository to understand how it works, find where to make a change, or confirm assumptions before planning.

1. Start a task from the agents tab, panel, dashboard, or {% data variables.copilot.copilot_chat_short %}. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/kick-off-a-task).
1. Ask a question about the repository.

   For example: `Investigate performance issues in this app and suggest improvements.`

   > [!TIP] You can also open {% data variables.copilot.copilot_chat_short %} and attach the relevant repository as context. {% data variables.product.prodname_copilot_short %} prompts you to approve a deep research session.
1. Optionally, send follow-up prompts while {% data variables.product.prodname_copilot_short %} is working to steer the session.
1. Review the response and ask follow-up questions.

## Create a plan

Ask {% data variables.copilot.copilot_cloud_agent %} to propose a plan before making changes.

1. Describe the plan you want.
   
   For example: `Create a plan to implement the most impactful performance improvements for this app.`
1. Review the plan and iterate with {% data variables.product.prodname_copilot_short %} until it matches your intent.

## Iterate on code changes

After research and planning, make changes on a branch, review the diff, and decide whether to iterate more or create a pull request.

1. Describe the changes you want in your prompt.

   For example, reference the plan from earlier: `Implement the plan we agreed upon.`
1. Wait for {% data variables.product.prodname_copilot_short %} to finish the session.
1. Click **Diff** to review the changes.
1. Optionally, open the branch (`copilot/BRANCH-NAME`) to inspect the changes in context.
1. To request refinements, continue the conversation. For example: `Rename this to match our existing conventions.`
1. When the session is complete and you're satisfied, click **Create pull request**.

## Provide visual context

{% data variables.copilot.copilot_cloud_agent_short_cap_c %} processes images—such as screenshots, sketches, or designs—as part of your task description. Drag and drop an image into an issue body or a {% data variables.copilot.copilot_chat_short %} prompt, then describe what {% data variables.product.prodname_copilot_short %} should do with it.

## Further reading

* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-cloud-agent)
