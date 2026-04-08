---
title: About GitHub Copilot cloud agent
shortTitle: About cloud agent
allowTitleToDifferFromFilename: true
intro: '{% data variables.product.prodname_copilot_short %} can research a repository, create an implementation plan, and make code changes on a branch. You can review the diff, iterate, and create a pull request when you''re ready.'
product: '{% data reusables.gated-features.copilot-cloud-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
redirect_from:
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
<!-- expires 2026-04-21 -->
<!-- When this expires, search all references to {% data variables.copilot.copilot_cloud_agent_tmp %} in docs-internal and replace with {% data variables.copilot.copilot_cloud_agent %} -->
## Overview of {% data variables.copilot.copilot_cloud_agent_tmp %}
<!-- end expires 2026-04-21 -->
With {% data variables.copilot.copilot_cloud_agent %}, {% data variables.product.prodname_copilot %} can work independently in the background to complete tasks, just like a human developer.

{% data variables.copilot.copilot_cloud_agent %} can:

* Research a repository
* Create implementation plans
* Fix bugs
* Implement incremental new features
* Improve test coverage
* Update documentation
* Address technical debt
* Resolve merge conflicts

When you delegate tasks to {% data variables.copilot.copilot_cloud_agent %}, you can:

* Use the agents panel or other agents entry points on {% data variables.product.prodname_dotcom_the_website %} to have {% data variables.product.prodname_copilot_short %} research, plan, and make code changes on a branch, then iterate before creating a pull request. You can also specify in your prompt that you want a pull request created right away. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/research-plan-iterate).
* Ask {% data variables.product.prodname_copilot_short %} to open a new pull request from other entry points, including {% data variables.product.prodname_github_issues %} and {% data variables.product.prodname_vscode %}. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/create-a-pr).
* Mention `@copilot` in a comment on an existing pull request to ask it to make changes. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/make-changes-to-an-existing-pr).
{% ifversion security-campaigns-assign-to-cca %}* Assign security alerts to {% data variables.product.prodname_copilot_short %} from security campaigns. See [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/fixing-alerts-in-security-campaign#assigning-alerts-to-copilot-cloud-agent).{% endif %}

{% data variables.copilot.copilot_cloud_agent %} will evaluate the task it has been assigned based on the prompt you give it.

While working on a coding task, {% data variables.copilot.copilot_cloud_agent %} has access to its own ephemeral development environment, powered by {% data variables.product.prodname_actions %}, where it can explore your code, make changes, execute automated tests and linters and more.

> [!NOTE] Deep research, planning, and iterating on code changes before creating a pull request are only available with {% data variables.copilot.copilot_cloud_agent %} on {% data variables.product.prodname_dotcom_the_website %}. {% data variables.copilot.copilot_cloud_agent_short_cap_c %} integrations (such as Azure Boards, JIRA, Linear, Slack, or Teams) only support creating a pull request directly.

### Benefits over traditional AI workflows

When used effectively, {% data variables.copilot.copilot_cloud_agent %} offers productivity benefits over traditional AI assistants in IDEs:

* With **AI assistants in IDEs**, coding happens **locally**. Individual developers pair in **synchronous** sessions with the AI assistant. Decisions made during the session are **untracked** and lost to time unless committed. Although the assistant helps write code, the developer still has a lot of **manual steps** to do: create the branch, write commit messages, push the changes, open the PR, write the PR description, get a review, iterate in the IDE, and repeat. These steps take time and effort that may be hard to justify for simple or routine issues.

* With **{% data variables.copilot.copilot_cloud_agent %}**, all coding and iterating happens **on {% data variables.product.github %}**. You can ask {% data variables.product.prodname_copilot_short %} to **research** a repository, **create a plan**, and **make code changes** on a branch—all before opening a pull request. You can create multiple {% data variables.copilot.custom_agents_short %} that specialize in different types of tasks. {% data variables.product.prodname_copilot_short %} **automates** branch creation, commit message writing, and pushing. Developers let the agents **work in the background** and then chooses to **create a pull request** when ready. Working on {% data variables.product.github %} adds **transparency**, with every step happening in a commit and being viewable in logs, and opens up **collaboration** opportunities for the entire team.

## {% data variables.copilot.copilot_cloud_agent %} versus agent mode

{% data variables.copilot.copilot_cloud_agent %} is distinct from the "agent mode" feature available in your IDE. {% data variables.copilot.copilot_cloud_agent %} works autonomously in a {% data variables.product.prodname_actions %}-powered environment to complete development tasks assigned through {% data variables.product.github %} issues or {% data variables.copilot.copilot_chat %} prompts. It can research a repository, create a plan, make code changes on a branch, and optionally open a pull request. In contrast, agent mode in your IDE makes autonomous edits directly in your local development environment. For more information about agent mode, see [AUTOTITLE](/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-your-ide).

## Streamlining software development with {% data variables.copilot.copilot_cloud_agent %}

Assigning tasks to {% data variables.copilot.copilot_cloud_agent %} can enhance your software development workflow.

For example, you can assign {% data variables.copilot.copilot_cloud_agent %} to straightforward issues on your backlog by selecting "{% data variables.product.prodname_copilot_short %}" as the assignee. This allows you to spend less time on these issues and more time on more complex or interesting work, or work that requires a high degree of creative thinking. {% data variables.copilot.copilot_cloud_agent %} can work on "nice to have" issues that improve the quality of your codebase or product, but often remain on the backlog while you focus on more urgent work.

Having {% data variables.copilot.copilot_cloud_agent %} as an additional coding resource also allows you to start tasks that you might not have otherwise started due to lack of resources. For example, you might create issues to refactor code or add more logging, and then immediately assign these to {% data variables.product.prodname_copilot_short %}.

You can also use {% data variables.copilot.copilot_cloud_agent %} to research a repository and create a plan before any code is written, helping you understand how a codebase works or agree on an approach before committing to changes. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/research-plan-iterate).

{% data variables.copilot.copilot_cloud_agent %} can start a task, which you then pick up and continue working on yourself. By assigning the initial work to {% data variables.product.prodname_copilot_short %}, you free up time that you would otherwise have spent doing repetitive tasks, such as setting up the scaffolding for a new project.

You can create specialized {% data variables.copilot.custom_agents_short %} for different tasks. For example, you might create a {% data variables.copilot.copilot_custom_agent_short %} specialized for frontend development that focuses on React components and styling, a documentation agent that excels at writing and updating technical documentation, or a testing agent that specializes in generating comprehensive unit tests. Each {% data variables.copilot.copilot_custom_agent_short %} can be tailored with specific prompts and tools suited to its particular task.

## Measuring pull request outcomes for {% data variables.copilot.copilot_cloud_agent %}

Enterprise administrators and organization owners can use {% data variables.product.prodname_copilot_short %} usage metrics to analyze pull request outcomes for pull requests created by {% data variables.copilot.copilot_cloud_agent %}.

The {% data variables.product.prodname_copilot_short %} usage metrics APIs include pull request lifecycle metrics such as:

* The total number of pull requests created and merged
* The number of pull requests created by {% data variables.copilot.copilot_cloud_agent %} that have been merged
* Median time to merge for merged pull requests, including pull requests created by {% data variables.copilot.copilot_cloud_agent %}

These metrics can help you track adoption of {% data variables.copilot.copilot_cloud_agent %} and monitor changes in pull request throughput and time to merge over time. See [AUTOTITLE](/copilot/concepts/copilot-usage-metrics/copilot-metrics).

## Integrating {% data variables.copilot.copilot_cloud_agent %} with third-party tools

You can also invoke {% data variables.copilot.copilot_cloud_agent %} from external tools, allowing you to assign tasks to {% data variables.product.prodname_copilot_short %}, provide context, and open pull requests without leaving your workflow. See [AUTOTITLE](/copilot/concepts/tools/about-copilot-integrations)

## Making {% data variables.copilot.copilot_cloud_agent %} available

Before you can assign tasks to {% data variables.copilot.copilot_cloud_agent %}, it must be enabled.

{% data variables.copilot.copilot_cloud_agent %} is available with the {% data variables.copilot.copilot_pro %}, {% data variables.copilot.copilot_pro_plus %}, {% data variables.copilot.copilot_for_business %} and {% data variables.copilot.copilot_enterprise %} plans.

If you are a {% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %} subscriber, an administrator must enable the relevant policy before you can use the agent.

Repository owners can choose to opt out some or all repositories from {% data variables.copilot.copilot_cloud_agent %}.

For more information, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/access-management).

## AI models for {% data variables.copilot.copilot_cloud_agent %}

Depending on how you start your {% data variables.copilot.copilot_cloud_agent %} task, you may be able to select the model used by {% data variables.copilot.copilot_cloud_agent %}. You may find that different models perform better, or provide more useful responses, depending on the type of tasks you give {% data variables.product.prodname_copilot_short %}.

For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/changing-the-ai-model).

## Enhancing {% data variables.copilot.copilot_cloud_agent %}'s knowledge of a repository

The more {% data variables.copilot.copilot_cloud_agent %} knows about the code in your repository, the tools you use, and your coding standards and practices, the more effective it will become. There are two ways you can enhance {% data variables.copilot.copilot_cloud_agent %}'s knowledge of a repository.

* **Custom instructions**

  These are short, natural‑language statements that you write and store as one or more files in a repository. If you are the owner of an organization on {% data variables.product.github %} you can also define custom instructions in the settings for your organization. For more information, see [AUTOTITLE](/copilot/concepts/prompting/response-customization?tool=webui#about-repository-custom-instructions).

* **{% data variables.copilot.copilot_memory %}** ({% data variables.release-phases.public_preview %})

  If you have a {% data variables.copilot.copilot_pro_short %} or {% data variables.copilot.copilot_pro_plus_short %} plan, you can enable {% data variables.copilot.copilot_memory %}. This allows {% data variables.product.prodname_copilot_short %} to store useful details it has worked out for itself about a repository. {% data variables.copilot.copilot_cloud_agent %} can then use this information when it is working in that repository. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-memory).

## {% data variables.copilot.copilot_cloud_agent %} usage costs

{% data variables.copilot.copilot_cloud_agent %} uses {% data variables.product.prodname_actions %} minutes and {% data variables.product.prodname_copilot_short %} premium requests.

Within your monthly usage allowance for {% data variables.product.prodname_actions %} and premium requests, you can ask {% data variables.copilot.copilot_cloud_agent %} to work on coding tasks without incurring any additional costs.

For more information, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot#allowance-usage-for-copilot-cloud-agent).

## Customizing {% data variables.copilot.copilot_cloud_agent %}

You can customize {% data variables.copilot.copilot_cloud_agent %} in a number of ways:

* **Custom instructions**: Custom instructions allow you to give {% data variables.product.prodname_copilot_short %} additional context on your project and how to build, test and validate its changes. For more information, see [AUTOTITLE](/copilot/how-tos/configure-custom-instructions/add-repository-instructions).
* **Model Context Protocol (MCP) servers**: MCP servers allow you to give {% data variables.product.prodname_copilot_short %} access to different data sources and tools. For more information, see [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/extend-cloud-agent-with-mcp).
* **{% data variables.copilot.custom_agents_caps_short %}**: {% data variables.copilot.custom_agents_caps_short %} allow you to create different specialized versions of {% data variables.product.prodname_copilot_short %} for different tasks. For example, you could customize {% data variables.product.prodname_copilot_short %} to be an expert frontend engineer following your team's guidelines. For more information, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-custom-agents).
* **Hooks**: Hooks allow you to execute custom shell commands at key points during agent execution, enabling you to add validation, logging, security scanning, or workflow automation. For more information, see [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-hooks).
* **Skills**: Skills allow you to enhance the ability of {% data variables.product.prodname_copilot_short %} to perform specialized tasks with instructions, scripts, and resources. For more information, see [AUTOTITLE](/copilot/concepts/agents/about-agent-skills).

## Limitations of {% data variables.copilot.copilot_cloud_agent %}

{% data variables.copilot.copilot_cloud_agent %} has certain limitations in its software development workflow and compatibility with other features.

### Limitations in {% data variables.copilot.copilot_cloud_agent %}'s software development workflow

* **{% data variables.product.prodname_copilot_short %} can only make changes in the repository specified when you start a task**. {% data variables.product.prodname_copilot_short %} cannot make changes across multiple repositories in one run.
* **By default, {% data variables.product.prodname_copilot_short %} can only access context in the repository specified when you start a task**. The {% data variables.product.prodname_copilot_short %} MCP server is configured by default to allow {% data variables.product.prodname_copilot_short %} to access context (for example issues and historic pull requests) in the repository where it is working. You can, however, configure broader access. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent/extend-cloud-agent-with-mcp).
* **{% data variables.product.prodname_copilot_short %} can only work on one branch at a time** and can open exactly one pull request to address each task it is assigned.

### Limitations in {% data variables.copilot.copilot_cloud_agent %}'s compatibility with other features

* **{% data variables.product.prodname_copilot_short %} isn't able to comply with certain rules that may be configured for your repository**. If you have configured a ruleset or branch protection rule that isn't compatible with {% data variables.copilot.copilot_cloud_agent %}, access to the agent will be blocked. For example, a rule that only allows specific commit authors can prevent {% data variables.copilot.copilot_cloud_agent %} from creating or updating pull requests. If the rule is configured using rulesets, you can add {% data variables.product.prodname_copilot_short %} as a bypass actor to enable access. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository#granting-bypass-permissions-for-your-branch-or-tag-ruleset).
* **{% data variables.copilot.copilot_cloud_agent %} doesn't account for content exclusions**. Content exclusions allow administrators to configure {% data variables.product.prodname_copilot_short %} to ignore certain files. When using {% data variables.copilot.copilot_cloud_agent %}, {% data variables.product.prodname_copilot_short %} will not ignore these files, and will be able to see and update them. See [AUTOTITLE](/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot).
* **{% data variables.copilot.copilot_cloud_agent %} only works with repositories hosted on {% data variables.product.github %}**. If your repository is stored using a different code hosting platform, {% data variables.product.prodname_copilot_short %} won't be able to work on it.

## Hands-on practice

Try the [Expand your team with {% data variables.copilot.copilot_cloud_agent %}](https://github.com/skills/expand-your-team-with-copilot/?ref_product=copilot&ref_type=engagement&ref_style=text) Skills exercise for practical experience with {% data variables.copilot.copilot_cloud_agent %}.

## Further reading

* [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent) how-to articles
* [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-custom-agents)
* [AUTOTITLE](/copilot/responsible-use/copilot-cloud-agent)
