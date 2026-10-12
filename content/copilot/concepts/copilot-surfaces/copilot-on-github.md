---
title: GitHub Copilot on GitHub.com
allowTitleToDifferFromFilename: true
shortTitle: '{% data variables.product.prodname_copilot_short %} on {% data variables.product.prodname_dotcom_the_website %}'
intro: 'Explore your repositories, plan changes, and delegate coding tasks to {% data variables.product.prodname_copilot %} without leaving {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  feature: copilot
redirect_from:
  - /copilot/concepts/about-github-copilot-chat
  - /copilot/concepts/chat
  - /copilot/github-copilot-enterprise/copilot-chat-in-github/about-github-copilot-chat
  - /copilot/concepts/agents/cloud-agent/about-cloud-agent
  - /copilot/concepts/agents/coding-agent/about-coding-agent
  - /copilot/concepts/about-assigning-tasks-to-copilot
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-tasks/about-assigning-tasks-to-copilot
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/about-assigning-issues-to-copilot
  - /copilot/using-github-copilot/using-copilot-coding-agent-to-work-on-issues/about-assigning-tasks-to-copilot
  - /copilot/using-github-copilot/coding-agent/about-assigning-tasks-to-copilot
  - /copilot/concepts/about-copilot-coding-agent
  - /copilot/concepts/coding-agent/about-copilot-coding-agent
  - /copilot/concepts/coding-agent/coding-agent
contentType: concepts
category:
  - Learn about Copilot
---

{% data variables.product.prodname_copilot %} on {% data variables.product.prodname_dotcom_the_website %} can answer questions about your repositories, plan and make changes, review pull requests, and automate repository tasks. You can ask questions and delegate work from the same prompt box, or use {% data variables.product.prodname_copilot_short %} directly in your issue and pull request workflows.

To compare where you can use {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/get-started/where-to-use-github-copilot).

## How {% data variables.product.prodname_copilot_short %} helps on {% data variables.product.prodname_dotcom_the_website %}

You can work with {% data variables.product.prodname_copilot_short %} in several ways:

* **Chat** lets you ask questions about your repositories, understand code, and explore possible solutions.
* **Agentic experiences** can research a repository, plan changes, and complete multi-step tasks by reading files, editing code, and running tests in a cloud development environment.
* **Code review** provides feedback on pull requests and suggests fixes.
* **Automations** run repository tasks on a schedule or in response to events, rather than requiring a new prompt each time.

For example, you might use chat to understand how a repository handles authentication, then ask an agent to plan and add missing tests. Once the changes are in a pull request, you can request a review from {% data variables.product.prodname_copilot_short %}. To maintain test coverage over time, you could set up an automation to check for missing tests each week and propose additions for you to review.

## Chat and agentic experiences

On {% data variables.product.prodname_dotcom_the_website %}, you can move from asking questions to delegating work in the same conversation.

### Asking questions

Chat can explain unfamiliar code, suggest fixes, generate tests, or compare approaches. Follow-up questions let you refine your request without starting a new conversation.

Chat is preconfigured with tools for tasks such as creating branches, updating files, and creating or updating issues. It also supports semantic code search.

### Delegating work

{% data variables.copilot.copilot_cloud_agent %} can research a repository, plan changes, and implement them in the background. It can edit files and run tests and linters in an ephemeral cloud development environment, rather than your local IDE. See [AUTOTITLE](/copilot/concepts/copilot-surfaces/copilot-in-ides).

You can start work from the agents panel, a conversation, or an issue or pull request on {% data variables.product.prodname_dotcom_the_website %}.
{% ifversion security-campaigns-assign-to-cca %}
From security campaigns, you can assign code scanning alerts to {% data variables.product.prodname_copilot_short %} for fixes. See [AUTOTITLE](/code-security/how-tos/manage-security-alerts/remediate-alerts-at-scale/fixing-alerts-in-security-campaign#assigning-alerts-to-copilot-cloud-agent).
{% endif %}

When implementing changes, {% data variables.product.prodname_copilot_short %} handles branch creation, commit messages, and pushing changes. You can review changes and request refinements before creating a pull request, or request a pull request in your initial prompt. You can also continue the work yourself. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/research-plan-iterate).

### Session context

On {% data variables.product.prodname_dotcom_the_website %}, {% data variables.copilot.copilot_chat_short %} and {% data variables.copilot.copilot_cloud_agent %} can share context. When you start an agent session from a chat, the session incorporates the context of your conversation. While the session runs, you can continue chatting with {% data variables.product.prodname_copilot_short %} about its progress and steer the work.

{% data variables.copilot.copilot_chat_short %} can also answer questions about pull requests created by {% data variables.product.prodname_copilot_short %} by pulling in the relevant agent session logs. You can ask what changed, what was validated, and why, without leaving the conversation.

This context passing is scoped to the {% data variables.copilot.copilot_chat_short %} and {% data variables.copilot.copilot_cloud_agent_short %} sessions you are actively working with. It is distinct from {% data variables.copilot.copilot_memory %}, which builds a longer-term, persistent understanding of your repositories and preferences across sessions. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-memory).

On {% data variables.product.prodname_dotcom_the_website %}, session logs show the work and tools used. Shared sessions and pull requests let teammates with repository access follow the work and review changes. Logs do not replace your own review and testing. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents).

### Sessions across surfaces

With remote control enabled, you can monitor and steer a {% data variables.copilot.copilot_cli %} session from {% data variables.product.prodname_dotcom_the_website %}. It continues running on your original machine, which must stay online. See [AUTOTITLE](/copilot/concepts/agents/copilot-cli/about-remote-control).

On {% data variables.product.prodname_dotcom_the_website %}, you can ask about your synced session history across {% data variables.product.prodname_copilot_short %} surfaces. This includes {% data variables.copilot.copilot_cloud_agent %} and {% data variables.copilot.copilot_code-review_short %} sessions, and sessions from {% data variables.copilot.copilot_cli %}, {% data variables.product.prodname_vscode_shortname %}, {% data variables.product.prodname_jetbrains_ides %}, and the {% data variables.copilot.github_copilot_app %}.

You can only query sessions you started. Syncing must be enabled and permitted by your organization's policies. See [Query past sessions](/copilot/how-tos/copilot-on-github/use-copilot-agents/manage-and-track-agents#query-past-sessions).

## Code review

On {% data variables.product.prodname_dotcom_the_website %}, {% data variables.copilot.copilot_code-review_short %} reviews pull request changes, identifies potential issues, and suggests fixes. It uses agentic capabilities to gather context from your repository. You can request a review or configure automatic reviews, then review and apply the suggested changes. See [AUTOTITLE](/copilot/concepts/agents/code-review).

{% data variables.product.prodname_copilot_short %} can also generate a summary of your changes directly in a pull request description or comment. This helps reviewers understand the changes, but is separate from reviewing the code. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/copilot-for-github-tasks/create-a-pr-summary).

## Automations and agentic workflows

{% data variables.copilot.copilot_automations_cap %} let you define a task once and have {% data variables.copilot.copilot_cloud_agent %} run it on a schedule or in response to repository events. For example, an automation can triage incoming issues or prepare weekly release notes. You create and manage automations from the **Agents** tab in a repository on {% data variables.product.prodname_dotcom_the_website %}. Automations are available in eligible private and internal repositories. See [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-automations).

{% data variables.copilot.github_agentic_workflows %} provide another way to automate tasks in your repositories on {% data variables.product.prodname_dotcom_the_website %}. You define tasks in natural language in Markdown files, and they run as {% data variables.product.prodname_actions %} workflows. These workflows can use {% data variables.product.prodname_copilot_short %} or another supported coding agent. See [AUTOTITLE](/copilot/concepts/agents/about-github-agentic-workflows).

## Customizations

On {% data variables.product.prodname_dotcom_the_website %}, custom instructions let you save personal preferences for chat, repository conventions, and organization guidance. {% data variables.copilot.copilot_spaces %} organize shared context for questions. For delegated work, {% data variables.copilot.custom_agents_short %} and agent skills provide task-specific instructions and resources. Model Context Protocol (MCP) servers connect agents to additional tools and data. Hooks can run commands during agent work for validation or logging. For setup guidance, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot).

## AI models

{% data reusables.copilot.change-the-ai-model %}

On {% data variables.product.prodname_dotcom_the_website %}, available models depend on your plan and account policies. See [AUTOTITLE](/copilot/reference/ai-models/supported-models).

For {% data variables.copilot.copilot_cloud_agent %}, the ability to select a model also depends on how you start the task. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).

## References to matching public code

In chat responses and agent sessions on {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_copilot_short %} can generate code that matches code in public repositories. Code references help you review the matching code and its licensing information so you can decide whether to use it, provide attribution, or remove it.

Matches appear in the context where you are reviewing the output:

* **Chat responses**: If you or your organization allow suggestions matching public code, matching code in a response includes a reference beneath the suggestion. The reference identifies public repositories containing matching code and licensing information, if found.
* **Agent session logs**: When {% data variables.product.prodname_copilot_short %} generates matching code during a delegated task, the session logs include a link to details of the matched code.

Matches occur infrequently, so most responses do not contain code references. The search covers an index of public repositories on {% data variables.product.prodname_dotcom_the_website %}, not private repositories or code hosted elsewhere. The index is refreshed periodically, so it may omit recently added code or refer to code that has since moved or been deleted.

For instructions on viewing references, see [AUTOTITLE](/copilot/how-tos/get-code-suggestions/find-matching-code?tool=webui).

## Access and availability

Available features depend on your plan and organization policies. For setup guidance, see [AUTOTITLE](/copilot/how-tos/copilot-on-github/set-up-copilot). For usage allowances and costs, see [AUTOTITLE](/copilot/concepts/billing-and-usage).

Repository owners and administrators can disable {% data variables.copilot.copilot_cloud_agent %} for particular repositories, even when your plan and policies otherwise allow you to use it. See [AUTOTITLE](/copilot/concepts/enterprise/cloud-agent-access).

## Limitations and compatibility

Both chat and agentic experiences on {% data variables.product.prodname_dotcom_the_website %} can produce incorrect or suboptimal code, including code that contains security vulnerabilities. Review and test the output before using it in production. See [AUTOTITLE](/copilot/responsible-use/agents).

For information about built-in security protections, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/risks-and-mitigations).

### Agentic work

{% data variables.copilot.copilot_cloud_agent %} has the following workflow limitations:

* **Repository scope**: {% data variables.product.prodname_copilot_short %} can only make changes in the repository specified when you start a task. It cannot make changes across multiple repositories in one run.
* **Context access**: By default, the {% data variables.product.github %} MCP server only provides access to context in the repository where the agent is working, such as issues and previous pull requests. You can configure broader access through repository MCP settings. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/configure-mcp-servers).
* **Branches and pull requests**: {% data variables.product.prodname_copilot_short %} can only work on one branch at a time and can open one pull request per task.
* **Session duration**: Each {% data variables.copilot.copilot_cloud_agent %} session has a maximum execution time of 59 minutes. This limit cannot be extended or bypassed. If a task exceeds the limit, the session times out and stops.

  Break complex tasks into smaller, focused tasks. You can configure a shorter timeout using the `timeout-minutes` setting in your `copilot-setup-steps.yml` file. See [AUTOTITLE](/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/customize-the-agent-environment).

<a id="limitations-in-copilot-cloud-agents-compatibility-with-other-features"></a>

### Repository compatibility

* **Repository rules**: If a ruleset or branch protection rule is incompatible with {% data variables.copilot.copilot_cloud_agent %}, access to the agent is blocked. For example, a rule that only allows specific commit authors can prevent {% data variables.product.prodname_copilot_short %} from creating or updating pull requests. If the rule is configured using rulesets, repository administrators can add {% data variables.product.prodname_copilot_short %} as a bypass actor to enable access. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#granting-bypass-permissions-for-your-branch-or-tag-ruleset).
* **Repository hosting**: {% data variables.copilot.copilot_cloud_agent %} only works with repositories hosted on {% data variables.product.github %}. It cannot work on repositories stored on other code hosting platforms.

## Further reading

* [AUTOTITLE](/copilot/how-tos/copilot-on-github)
* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent) how-to guides
* [AUTOTITLE](/copilot/tutorials/copilot-cookbook)
* For delegating work from tools such as Microsoft Teams and Slack, see [AUTOTITLE](/copilot/concepts/tools/about-copilot-integrations).
* For organization and enterprise metrics on pull request creation, merges, and time to merge, see [AUTOTITLE](/copilot/concepts/billing-and-usage/copilot-usage-metrics/copilot-metrics).
