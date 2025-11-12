---
title: About GitHub Copilot coding agent
shortTitle: About coding agent
intro: You can ask {% data variables.product.prodname_copilot_short %} to open a new pull request or make changes to an existing pull request. {% data variables.product.prodname_copilot_short %} works in the background, then requests a review from you.
product: '{% data reusables.gated-features.copilot-coding-agent %}<br><a href="https://github.com/features/copilot/plans?ref_product=copilot&ref_type=engagement&ref_style=button" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 %}</a>'
versions:
  feature: copilot
topics:
  - Copilot
redirect_from:
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

## Overview of {% data variables.copilot.copilot_coding_agent %}

With {% data variables.copilot.copilot_coding_agent %}, {% data variables.product.prodname_copilot %} can work independently in the background to complete tasks, just like a human developer.

{% data variables.copilot.copilot_coding_agent %} can:

* Fix bugs
* Implement incremental new features
* Improve test coverage
* Update documentation
* Address technical debt

To delegate tasks to {% data variables.copilot.copilot_coding_agent %}, you can:

* Ask Copilot to open a new pull request from many places, including {% data variables.product.prodname_github_issues %}, {% data variables.product.prodname_vscode %} and the agents panel available on every page on {% data variables.product.github %}. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/create-a-pr).
* Mention `@copilot` in a comment on an existing pull request to ask it to make changes. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/make-changes-to-an-existing-pr).
{% ifversion security-campaigns-assign-to-cca %}* Assign security alerts to {% data variables.product.prodname_copilot_short %} from security campaigns. See [AUTOTITLE](/code-security/code-scanning/managing-code-scanning-alerts/fixing-alerts-in-security-campaign#assigning-alerts-to-copilot-coding-agent).{% endif %}

{% data variables.copilot.copilot_coding_agent %} will evaluate the task it has been assigned based on the prompt you give it—whether that's from the issue description or a chat message. Then {% data variables.copilot.copilot_coding_agent %} will make the required changes and open a pull request. When {% data variables.copilot.copilot_coding_agent %} finishes, it will request a review from you, and you can leave pull request comments to ask {% data variables.copilot.copilot_coding_agent %} to iterate.

While working on a coding task, {% data variables.copilot.copilot_coding_agent %} has access to its own ephemeral development environment, powered by {% data variables.product.prodname_actions %}, where it can explore your code, make changes, execute automated tests and linters and more.

You can also create {% data variables.copilot.custom_agents_short %} to tailor {% data variables.product.prodname_copilot_short %}'s behavior for specific workflows, coding conventions, or specialized tasks. {% data variables.copilot.custom_agents_caps_short %} allow you to define multiple specialized versions of the coding agent—such as a frontend reviewer, test generator, or security auditor—each with their own prompts, tools, and capabilities. For more information, see [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-custom-agents).

### Benefits over traditional AI workflows

When used effectively, {% data variables.copilot.copilot_coding_agent %} offers productivity benefits over traditional AI assistants in IDEs:

* With **AI assistants in IDEs**, coding happens **locally**. Individual developers pair in **synchronous** sessions with the AI assistant. Decisions made during the session are **untracked** and lost to time unless committed. Although the assistant helps write code, the developer still has a lot of **manual steps** to do: create the branch, write commit messages, push the changes, open the PR, write the PR description, get a review, iterate in the IDE, and repeat. These steps take time and effort that may be hard to justify for simple or routine issues.

* With **{% data variables.copilot.copilot_coding_agent %}**, all coding and iterating happens **on {% data variables.product.github %}** as part of the pull request workflow. You can create multiple {% data variables.copilot.custom_agents_short %} that specialize in different types of tasks. {% data variables.product.prodname_copilot_short %} **automates** branch creation, commit message writing and pushing, PR opening, and PR description writing. Developers let the agents **work in the background** and then steer {% data variables.product.prodname_copilot_short %} to a final solution using PR reviews. Working on {% data variables.product.github %} adds **transparency**, with every step happening in a commit and being viewable in logs, and opens up **collaboration** opportunities for the entire team.

### {% data variables.copilot.copilot_coding_agent %} versus agent mode

{% data variables.copilot.copilot_coding_agent %} is distinct from the "agent mode" feature available in your IDE. {% data variables.copilot.copilot_coding_agent %} works autonomously in a {% data variables.product.prodname_actions %}-powered environment to complete development tasks assigned through {% data variables.product.github %} issues or {% data variables.copilot.copilot_chat %} prompts, and creates pull requests with the results. In contrast, agent mode in your IDE makes autonomous edits directly in your local development environment. For more information about agent mode, see [AUTOTITLE](/copilot/using-github-copilot/copilot-chat/asking-github-copilot-questions-in-your-ide?tool=visualstudio#copilot-edits-1).

### Streamlining software development with {% data variables.copilot.copilot_coding_agent %}

Assigning tasks to {% data variables.copilot.copilot_coding_agent %} can enhance your software development workflow.

For example, you can assign {% data variables.copilot.copilot_coding_agent %} to straightforward issues on your backlog by selecting "{% data variables.product.prodname_copilot_short %}" as the assignee. This allows you to spend less time on these issues and more time on more complex or interesting work, or work that requires a high degree of creative thinking. {% data variables.copilot.copilot_coding_agent %} can work on "nice to have" issues that improve the quality of your codebase or product, but often remain on the backlog while you focus on more urgent work.

Having {% data variables.copilot.copilot_coding_agent %} as an additional coding resource also allows you to start tasks that you might not have otherwise started due to lack of resources. For example, you might create issues to refactor code or add more logging, and then immediately assign these to {% data variables.product.prodname_copilot_short %}.

{% data variables.copilot.copilot_coding_agent %} can start a task, which you then pick up and continue working on yourself. By assigning the initial work to {% data variables.product.prodname_copilot_short %}, you free up time that you would otherwise have spent doing repetitive tasks, such as setting up the scaffolding for a new project.

You can create specialized {% data variables.copilot.custom_agents_short %} for different tasks. For example, you might create a {% data variables.copilot.copilot_custom_agent_short %} specialized for frontend development that focuses on React components and styling, a documentation agent that excels at writing and updating technical documentation, or a testing agent that specializes in generating comprehensive unit tests. Each {% data variables.copilot.copilot_custom_agent_short %} can be tailored with specific prompts and tools suited to its particular task.

### Integrating {% data variables.copilot.copilot_coding_agent %} with third-party tools

You can also invoke {% data variables.copilot.copilot_coding_agent %} from external tools, allowing you to assign tasks to {% data variables.product.prodname_copilot_short %}, provide context, and open pull requests without leaving your workflow. See [AUTOTITLE](/copilot/concepts/tools/about-copilot-integrations)

### Making {% data variables.copilot.copilot_coding_agent %} available

Before you can assign tasks to {% data variables.copilot.copilot_coding_agent %}, it must be enabled.

{% data variables.copilot.copilot_coding_agent %} is available with the {% data variables.copilot.copilot_pro %}, {% data variables.copilot.copilot_pro_plus %}, {% data variables.copilot.copilot_for_business %} and {% data variables.copilot.copilot_enterprise %} plans.

If you are a {% data variables.copilot.copilot_for_business %} or {% data variables.copilot.copilot_enterprise %} subscriber, an administrator must enable the relevant policy before you can use the agent.

Repository owners can choose to opt out some or all repositories from {% data variables.copilot.copilot_coding_agent %}.

For more information, see [AUTOTITLE](/copilot/concepts/agents/coding-agent/managing-access).

## {% data variables.copilot.copilot_coding_agent %} usage costs

{% data variables.copilot.copilot_coding_agent %} uses {% data variables.product.prodname_actions %} minutes and {% data variables.product.prodname_copilot_short %} premium requests.

Within your monthly usage allowance for {% data variables.product.prodname_actions %} and premium requests, you can ask {% data variables.copilot.copilot_coding_agent %} to work on coding tasks without incurring any additional costs.

For more information, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-copilot/about-billing-for-github-copilot#allowance-usage-for-copilot-coding-agent).

## Built-in security protections

Security is a fundamental consideration when you enable {% data variables.copilot.copilot_coding_agent %}, as with any other AI agent. {% data variables.copilot.copilot_coding_agent %} has a strong base of built-in security protections that you can supplement by following best practice guidance.

* **Validated for security issues**: {% data variables.product.prodname_copilot_short %} analyzes the code created by {% data variables.copilot.copilot_coding_agent %} for security issues and attempts to resolve them prior to completing the pull request. This reduces the likelihood of the code generated by {% data variables.copilot.copilot_coding_agent %} introducing problems such as hardcoded secrets, insecure dependencies, and other vulnerabilities. Details about the analysis performed and the actions taken by {% data variables.copilot.copilot_coding_agent %} can be reviewed in the session log. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/coding-agent/track-copilot-sessions).
  * **{% data variables.product.prodname_codeql %}** is used to identify code security issues.
  * Newly introduced dependencies are checked against the **{% data variables.product.prodname_advisory_database %}** for malware advisories, and for any CVSS-rated High or Critical vulnerabilities.
  * **{% data variables.product.prodname_secret_scanning_caps %}** is used to detect sensitive information such as API keys, tokens, and other secrets.
  * {% data variables.copilot.copilot_coding_agent %}'s security validation **does not require** a {% data variables.product.prodname_GHAS_cs_or_sp %} license.
* **Subject to existing governance**: Organization settings and enterprise policies control availability. Any security policies and practices set up for the organization also apply to {% data variables.copilot.copilot_coding_agent %}.
* **Restricted development environment**: {% data variables.copilot.copilot_coding_agent %} works in a sandbox development environment with internet access controlled by a firewall. It has read-only access to the repository it's assigned to work in.
* **Limited access to branches**: {% data variables.copilot.copilot_coding_agent %} can only create and push to branches beginning with `copilot/`. It is subject to any branch protections and required checks for the working repository.
* **Responds only to users with write permissions**: {% data variables.copilot.copilot_coding_agent %} will not respond to feedback from users with lower levels of access.
* **Treated as an outside collaborator**: Draft pull requests proposed by {% data variables.copilot.copilot_coding_agent %} require approval by a user with write permissions before Actions workflows can run. {% data variables.copilot.copilot_coding_agent %} cannot mark its pull requests as "Ready for review" and cannot approve or merge a pull request.
* **Tracked for compliance**: {% data variables.copilot.copilot_coding_agent %}'s commits are co-authored by the developer who assigned the issue or requested the change to the pull request, allowing attribution of proposed changes. The developer who asked {% data variables.product.prodname_copilot_short %} to create a pull request cannot approve that pull request. In repositories where an approving review is required, this ensures that at least one independent developer reviews {% data variables.copilot.copilot_coding_agent %}'s work.

For more information, see:
* [AUTOTITLE](/copilot/tutorials/pilot-copilot-coding-agent#2-secure) (information on how organization owners can further enhance security)
* [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-copilot-coding-agent-on-githubcom)
* [{% data variables.product.prodname_copilot %} Trust Center](https://copilot.github.trust.page/)

## Risks and mitigations

{% data variables.copilot.copilot_coding_agent %} is an autonomous agent that has access to your code and can push changes to your repository. This entails certain risks. Where possible, {% data variables.product.github %} has applied appropriate mitigations.

### Risk: {% data variables.copilot.copilot_coding_agent %} can push code changes to your repository

To mitigate this risk, {% data variables.product.github %}:

* **Limits who can assign tasks to {% data variables.copilot.copilot_coding_agent %}.** Only users with write access to the repository can trigger {% data variables.copilot.copilot_coding_agent %} to work. Comments from users without write access are never presented to the agent.
* **Limits the permissions in access tokens used by {% data variables.copilot.copilot_coding_agent %}.** Pushes are only allowed to branches beginning with `copilot/`. {% data variables.copilot.copilot_coding_agent %} cannot push to the `main` or `master` branches.
* **Limits {% data variables.copilot.copilot_coding_agent %}'s credentials.** {% data variables.copilot.copilot_coding_agent %} can only perform simple push operations. It cannot directly run `git push` or other Git commands.
* **Restricts {% data variables.product.prodname_actions %} workflow runs.** Workflows are not triggered until {% data variables.copilot.copilot_coding_agent %}'s code is reviewed and a user with write access to the repo clicks the **Approve and run workflows** button. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/reviewing-a-pull-request-created-by-copilot).
* **Prevents the user who asked {% data variables.copilot.copilot_coding_agent %} to create a pull request from approving it.** This maintains the expected controls in the "Required approvals" rule and branch protection. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets).

### Risk: {% data variables.copilot.copilot_coding_agent %} has access to sensitive information

{% data variables.copilot.copilot_coding_agent %} has access to code and other sensitive information, and could leak it, either accidentally or due to malicious user input. To mitigate this risk, {% data variables.product.github %}:

* **Restricts {% data variables.copilot.copilot_coding_agent %}'s access to the internet.** See [AUTOTITLE](/copilot/customizing-copilot/customizing-or-disabling-the-firewall-for-copilot-coding-agent).

### Risk: Prompt injection vulnerabilities

Users can include hidden messages in issues assigned to {% data variables.copilot.copilot_coding_agent %} or comments left for {% data variables.copilot.copilot_coding_agent %} as a form of [prompt injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/). To mitigate this risk, {% data variables.product.github %}:

* **Filters hidden characters before passing user input to {% data variables.copilot.copilot_coding_agent %}**: For example, text entered as an HTML comment in an issue or pull request comment is not passed to {% data variables.copilot.copilot_coding_agent %}.

## Limitations of {% data variables.copilot.copilot_coding_agent %}

{% data variables.copilot.copilot_coding_agent %} has certain limitations in its software development workflow and compatibility with other features.

### Limitations in {% data variables.copilot.copilot_coding_agent %}'s software development workflow

* **{% data variables.product.prodname_copilot_short %} can only make changes in the same repository where it is creating its pull request**. When {% data variables.product.prodname_copilot_short %} is assigned an issue, it can only make changes in the repository where that issue is located. In addition, {% data variables.product.prodname_copilot_short %} cannot make changes across multiple repositories in one run.
* **{% data variables.product.prodname_copilot_short %} can only access context in the same repository as the assigned issue**. By default, an integration with the {% data variables.product.prodname_copilot_short %} MCP server provides {% data variables.product.prodname_copilot_short %} access to one repository at a time. You can, however, configure broader access. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp).
* **{% data variables.product.prodname_copilot_short %} can only open one pull request at a time**. {% data variables.product.prodname_copilot_short %} will open exactly one pull request to address each task it is assigned.

### Limitations in {% data variables.copilot.copilot_coding_agent %}'s compatibility with other features

* **{% data variables.product.prodname_copilot_short %} does not sign its commits**. If you have the "Require signed commits" rule or branch protection enabled, you must rewrite the commit history in order to merge {% data variables.product.prodname_copilot_short %}'s pull requests. See [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#require-signed-commits).
* **{% data variables.copilot.copilot_coding_agent %} does not work in personal repositories owned by {% data variables.enterprise.prodname_managed_users %}**. This is because {% data variables.copilot.copilot_coding_agent %} requires {% data variables.product.company_short %}-hosted runners, which are not available to repositories owned by {% data variables.enterprise.prodname_managed_users %}. See [AUTOTITLE](/actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners).
* **{% data variables.copilot.copilot_coding_agent %} doesn't account for content exclusions**. Content exclusions allow administrators to configure {% data variables.product.prodname_copilot_short %} to ignore certain files. When using {% data variables.copilot.copilot_coding_agent %}, {% data variables.product.prodname_copilot_short %} will not ignore these files, and will be able to see and update them. See [AUTOTITLE](/copilot/managing-copilot/configuring-and-auditing-content-exclusion/excluding-content-from-github-copilot).
* **{% data variables.copilot.copilot_coding_agent %} only works with repositories hosted on {% data variables.product.github %}**. If your repository is stored using a different code hosting platform, {% data variables.product.prodname_copilot_short %} won't be able to work on it.
* **You cannot select the AI model used by {% data variables.copilot.copilot_coding_agent %}**. A model picker is not available to switch between models, and {% data variables.product.company_short %} reserves the right to change models at any time.

  Currently, {% data variables.copilot.copilot_coding_agent %} uses {% data variables.copilot.copilot_claude_sonnet_45 %}.

## Hands-on practice

Try the [Expand your team with {% data variables.copilot.copilot_coding_agent %}](https://github.com/skills/expand-your-team-with-copilot/?ref_product=copilot&ref_type=engagement&ref_style=text) Skills exercise for practical experience with {% data variables.copilot.copilot_coding_agent %}.

## Further reading

* [AUTOTITLE](/copilot/using-github-copilot/coding-agent) how-to articles
* [AUTOTITLE](/copilot/concepts/agents/coding-agent/about-custom-agents)
* [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-copilot-coding-agent-on-githubcom)
