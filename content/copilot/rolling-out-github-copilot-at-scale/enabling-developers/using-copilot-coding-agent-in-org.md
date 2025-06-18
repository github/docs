---
title: 'Using {% data variables.copilot.copilot_coding_agent %} effectively in your organization'
shortTitle: 'Use {% data variables.copilot.copilot_coding_agent %}'
intro: 'Learn about adopting {% data variables.copilot.copilot_coding_agent %} in your organization.'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
topics:
  - Copilot
product: '{% data reusables.gated-features.copilot-coding-agent %}'
---
<!--JTBD: When evaluating {% data variables.copilot.copilot_coding_agent %}, I want to understand how it can help my team, so that I can make an informed decision about whether to enable it.-->

{% data reusables.copilot.coding-agent.preview-note %}

## Why {% data variables.copilot.copilot_coding_agent %}?

{% data variables.copilot.copilot_coding_agent %} is an autonomous, AI-powered agent that completes software development tasks on {% data variables.product.github %}. Adopting {% data variables.copilot.copilot_coding_agent %} in your organization frees your engineering teams to spend more time thinking strategically and less time making routine fixes and maintenance updates in a codebase.
{% data variables.copilot.copilot_coding_agent %}:

* **Joins your team**: Developers can delegate work to {% data variables.product.prodname_copilot_short %} unlike IDE-based coding agents that require synchronous pairing sessions.
* **Reduces context switching**: Developers working in JetBrains IDEs, {% data variables.product.prodname_vscode_shortname %}, {% data variables.product.prodname_vs %}, or {% data variables.product.prodname_dotcom_the_website %} can ask {% data variables.copilot.copilot_coding_agent %} to create a pull request to complete small tasks without stopping what they are currently doing.
* **Works on {% data variables.product.github %}**: {% data variables.product.prodname_copilot_short %} operates within your existing workflows on {% data variables.product.github %} alongside your developers.
* **Uses pull request review workflows**: {% data variables.product.prodname_copilot_short %} opens draft pull requests for team members to review and iterates based on feedback, as a developer would.
* **Executes tasks in parallel**: {% data variables.product.prodname_copilot_short %} can work on multiple issues simultaneously, handling tasks in the background while your team focuses on other priorities.
* **Provides decision transparency**: Developers can review {% data variables.product.prodname_copilot_short %}’s logs on {% data variables.product.github %} to understand its reasoning and see the tools it used to complete tasks.
* **Ensures enterprise-grade security**: {% data variables.copilot.copilot_coding_agent %}'s security-first design keeps a human in the loop and enables governance via enterprise policies and settings.

## How {% data variables.copilot.copilot_coding_agent %} can contribute to your organization

{% data variables.product.prodname_copilot_short %} can help your organization address well-defined and scoped issues, such as increasing test coverage, fixing bugs or flaky tests, or updating config files or documentation. For more on the kinds of issues {% data variables.product.prodname_copilot_short %} works best on, see [AUTOTITLE](/copilot/using-github-copilot/coding-agent/best-practices-for-using-copilot-to-work-on-tasks).

Developers stay in the flow when they ask {% data variables.product.prodname_copilot_short %} to create pull requests directly from {% data variables.copilot.copilot_chat_short %} instead of opening issues that may sit in a backlog.

When used effectively, {% data variables.copilot.copilot_coding_agent %} offers productivity benefits over traditional AI assistants in IDEs:

* With **AI assistants in IDEs**, coding happens **locally**. Individual developers pair in **synchronous** sessions with the AI assistant. Decisions made during the session are **untracked** and lost to time unless committed. Although the assistant helps write code, the developer still has a lot of **manual steps** to do: create the branch, write commit messages, push the changes, open the PR, write the PR description, get a review, iterate in the IDE, and repeat. These steps take time and effort that may be hard to justify for simple or routine issues.

* With **{% data variables.copilot.copilot_coding_agent %}**, all coding and iterating happens **on {% data variables.product.github %}** as part of the pull request workflow. {% data variables.product.prodname_copilot_short %} **automates** branch creation, commit message writing and pushing, PR opening, and PR description writing. Developers let the agent **work in the background** and then steer {% data variables.product.prodname_copilot_short %} to a final solution using PR reviews. Working on {% data variables.product.github %} adds **transparency**, where every step happens in a commit and is viewable in logs. Working on {% data variables.product.github %} also opens up **collaboration** opportunities for the entire team.

Over time, your engineering teams can benefit from the increased automation, transparency, and collaboration {% data variables.copilot.copilot_coding_agent %} provides. For ideas on how to run a successful pilot, see [Piloting {% data variables.copilot.copilot_coding_agent %}](#piloting-copilot-coding-agent).

For an example scenario that walks through how to use {% data variables.copilot.copilot_coding_agent %} alongside other AI features on {% data variables.product.github %}, see [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/enabling-developers/integrating-agentic-ai).

## Using MCP to enhance {% data variables.copilot.copilot_coding_agent %}

The Model Context Protocol (MCP) is an open standard that defines how applications share context with large language models (LLMs). MCP provides a standardized way to provide {% data variables.copilot.copilot_coding_agent %} with access to different data sources and tools.

{% data variables.copilot.copilot_coding_agent %} has access to the full {% data variables.product.github %} context of the repository it's working in, including issues and pull requests, using the built-in {% data variables.product.github %} MCP server. By default, it's restricted from accessing external data by authentication barriers and a firewall. You can extend the information available to {% data variables.copilot.copilot_coding_agent %} by giving it access to local MCP servers for the tools your organization uses. For example, you might want to provide access to local MCP servers for some of the following contexts:

* **Web browser**: Set up the Playwright MCP server to allow {% data variables.product.prodname_copilot_short %} to pull context directly from an external link in an issue.
* **Project planning tools**: Allow {% data variables.product.prodname_copilot_short %} direct access to private planning documents that are stored outside {% data variables.product.github %} in tools like Notion or Figma.
* **Augment training data**: Each LLM contains training data up to a specific cut-off date. If you're working with fast moving tools, {% data variables.product.prodname_copilot_short %} may not have access to information on new features. You can fill this knowledge gap by making the tool's MCP server available. For example, adding the Terraform MCP server will give {% data variables.product.prodname_copilot_short %} access to the most recently supported Terraform providers.

For more information, see [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp).

## Using {% data variables.copilot.copilot_coding_agent %} securely

Security is a fundamental consideration when you enable {% data variables.copilot.copilot_coding_agent %}, as with any other AI agent. {% data variables.product.prodname_copilot_short %} has a strong base of built-in security protections that you can supplement by following best practice guidance.

### Built-in protections

* **Subject to existing governance**: Organization settings and enterprise policies control availability. Any security policies and practices set up for the organization also apply to {% data variables.copilot.copilot_coding_agent %}.
* **Restricted development environment**: {% data variables.product.prodname_copilot_short %} works in a sandbox development environment with internet access controlled by a firewall. It has read-only access to the repository it's assigned to work in.
* **Limited access to branches**: {% data variables.product.prodname_copilot_short %} can only create and push to branches beginning with `copilot/`. It is subject to any branch protections and required checks for the working repository.
* **Responds only to users with write permissions**: {% data variables.product.prodname_copilot_short %} will not respond to feedback from users with lower levels of access.
* **Treated as an outside collaborator**: Draft pull requests proposed by {% data variables.product.prodname_copilot_short %} require approval by a user with write permissions before Actions workflows can run. {% data variables.product.prodname_copilot_short %} cannot mark its pull requests as "Ready for review" and cannot approve or merge a pull request.
* **Tracked for compliance**: {% data variables.product.prodname_copilot_short %}'s commits are co-authored by the developer who assigned the issue or requested the change to the pull request, allowing attribution of proposed changes. The developer who asked {% data variables.product.prodname_copilot_short %} to create a pull request cannot approve that pull request. In repositories where an approving review is required, this ensures that at least one independent developer reviews {% data variables.product.prodname_copilot_short %}'s work.

For more information, see:
* [AUTOTITLE](/copilot/responsible-use-of-github-copilot-features/responsible-use-of-copilot-coding-agent-on-githubcom)
* [{% data variables.product.prodname_copilot %} Trust Center](https://copilot.github.trust.page/)

### Security best practices

All AI models are trained to meet a request, even if they don't have all the information needed to provide a good answer, and this can lead them to make mistakes. By following best practices, you can reduce the risks of using {% data variables.product.prodname_copilot_short %} in your organization.

1. Give {% data variables.product.prodname_copilot_short %} the information it needs to work successfully in a repository using a `copilot-instructions.md` file. See [AUTOTITLE](/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot).
1. Set up the {% data variables.product.prodname_copilot_short %} development environment for a repository with access to the tools and package repositories approved by the organization using a `copilot-setup-steps.yml` file and local MCP servers. See [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent) and [AUTOTITLE](/copilot/using-github-copilot/coding-agent/extending-copilot-coding-agent-with-mcp).
1. Follow best practices for storing secrets securely. See [AUTOTITLE](/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions).
1. Enable code security features to further lower the risk of leaking secrets and introducing vulnerabilities into the code. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization).
1. Configure your branch rulesets to ensure that all pull requests raised by {% data variables.product.prodname_copilot_short %} are approved by a second user with write permissions (a sub-option of "Require a pull request before merging"). See {% ifversion ghec %}[AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-governance), {% endif %}[AUTOTITLE](/organizations/managing-organization-settings/creating-rulesets-for-repositories-in-your-organization) and [AUTOTITLE](/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets#require-a-pull-request-before-merging).

## Piloting {% data variables.copilot.copilot_coding_agent %}

<a href="https://github.com/github-copilot/purchase?ref_cta=Copilot+Enterprise+trial&ref_cta=Copilot+Business+trial&ref_loc=using-cca-effectively" target="_blank" class="btn btn-primary mt-3 mr-3 no-underline"><span>Sign up for {% data variables.product.prodname_copilot_short %}</span> {% octicon "link-external" height:16 aria-label="link-external" %}</a>

> [!TIP] During the {% data variables.release-phases.public_preview %}, you need {% data variables.copilot.copilot_pro_plus %} or {% data variables.copilot.copilot_enterprise %} to use {% data variables.copilot.copilot_coding_agent %}.

As with any other change to working practices, it's important to run a trial to learn how to deploy {% data variables.copilot.copilot_coding_agent %} effectively in your organization or enterprise.

1. Gather a cross-functional team for the trial to bring different roles, backgrounds, and perspectives to the project. This will make it easier to ensure that you explore a broad range of ways to define issues, assign work to {% data variables.product.prodname_copilot_short %}, and give clear review feedback.
1. Choose an isolated or low-risk repository, for example, one that contains documentation or internal tools. You could create a fresh repository to use as a playground, but {% data variables.product.prodname_copilot_short %} needs context to be successful, so you would need to add a lot of context, including team processes, development environment, and common dependencies.
1. Enable {% data variables.copilot.copilot_coding_agent %} in the repository and optionally enable third-party MCP servers for enhanced context sharing. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/adding-copilot-coding-agent-to-organization).
1. Create repository instructions and pre-install any tools required in the development environment {% data variables.product.prodname_copilot_short %} uses. See [AUTOTITLE](/copilot/customizing-copilot/customizing-the-development-environment-for-copilot-coding-agent).
1. Identify a few compelling use cases for your organization, for example: test coverage or improving accessibility. See [Choose the right type of tasks to give to Copilot](/copilot/using-github-copilot/coding-agent/best-practices-for-using-copilot-to-work-on-tasks#choosing-the-right-type-of-tasks-to-give-to-copilot) in the best practice guide.
1. Use best practice to create or refine issues for {% data variables.product.prodname_copilot_short %} in your pilot repository.
1. Assign issues to {% data variables.product.prodname_copilot_short %} and prepare team members to review its work.
1. Spend time looking at the codebase or documentation in {% data variables.product.prodname_vscode_shortname %} or {% data variables.product.prodname_dotcom_the_website %}, asking {% data variables.product.prodname_copilot_short %} to create a pull request to fix any bugs or small improvements that you identify.

Over the course of the trial, the team should iterate on the repository instructions, installed tools, access to MCP servers, and issue definition to identify how your organization can get the most from {% data variables.copilot.copilot_coding_agent %}. This process will help you identify your organization's best practices for working with {% data variables.product.prodname_copilot_short %} and plan an effective rollout strategy.

In addition to giving you insight into how to set up {% data variables.copilot.copilot_coding_agent %} for success, you'll learn how {% data variables.product.prodname_copilot_short %} uses premium requests and actions minutes. This will be valuable when you come to set and manage your budget for a broader trial or full rollout. See [AUTOTITLE](/copilot/rolling-out-github-copilot-at-scale/assigning-licenses/managing-your-companys-spending-on-github-copilot).
