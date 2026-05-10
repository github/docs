---
title: GitHub Copilot features
intro: '{% data variables.product.prodname_copilot %} offers a suite of features for users and administrators.'
versions:
  feature: copilot
shortTitle: Features
redirect_from:
  - /copilot/copilot-business/github-copilot-business-feature-set
  - /copilot/copilot-individual/github-copilot-individual-feature-set
  - /copilot/github-copilot-enterprise/github-copilot-enterprise-feature-set
  - /copilot/about-github-copilot/github-copilot-features
  - /copilot/get-started/github-copilot-features
contentType: get-started
category:
  - Learn about Copilot
---

## Assistive features

These tools are used synchronously, providing advice or suggestions as people work on a task.

### {% data variables.copilot.copilot_chat_short %}

A chat interface that lets you ask coding-related questions. {% data variables.copilot.copilot_chat %} is available on the {% data variables.product.github %} website, in {% data variables.product.prodname_mobile %}, in supported IDEs, and in {% data variables.product.prodname_windows_terminal %}. Users can also use skills with {% data variables.copilot.copilot_chat_short %}. See [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-github) and [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide).

### Inline suggestions

Autocomplete-style suggestions from {% data variables.product.prodname_copilot_short %} in supported IDEs. See [AUTOTITLE](/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot).

If you use {% data variables.product.prodname_vscode_shortname %}, Xcode, or Eclipse, you can also use {% data variables.copilot.next_edit_suggestions %}, which will predict the location of the next edit you are likely to make and suggest a completion for it.

### {% data variables.copilot.copilot_for_prs %}

AI-generated summaries of the changes that were made in a pull request, which files they impact, and what a reviewer should focus on when they conduct their review. See [AUTOTITLE](/copilot/using-github-copilot/creating-a-pull-request-summary-with-github-copilot).

### {% data variables.copilot.copilot_desktop_short %}

Automatically generate commit messages and descriptions with {% data variables.copilot.copilot_desktop_short %} based on the changes you make to your project.

## Agentic features

These features can work autonomously without direct human supervision. However, they typically need human approval to perform sensitive actions, such as running commands in a developer's terminal or merging a pull request.

### {% data variables.copilot.copilot_cli_short %}

A command line interface that lets you use {% data variables.product.prodname_copilot_short %} in your terminal. Use the CLI to add features or fix bugs, then create a pull request. Start {% data variables.product.prodname_copilot_short %} working on a task in your terminal, then continue working in the same session on {% data variables.product.prodname_dotcom_the_website %}, or on your mobile. See [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli).

### {% data variables.copilot.copilot_cloud_agent_tmp %}

An autonomous AI agent that can research a repository, create an implementation plan, and make code changes on a branch. You can review the diff, iterate, and create a pull request when you're ready. You can also assign a {% data variables.product.github %} issue to {% data variables.product.prodname_copilot_short %} or ask it to open a pull request directly to complete a task. See [AUTOTITLE](/copilot/how-tos/use-copilot-agents/cloud-agent).

### Third-party coding agents ({% data variables.release-phases.public_preview %})

You can use third-party coding agents alongside {% data variables.copilot.copilot_cloud_agent %}. Third-party agents are subject to the same security protections, mitigations, and limitations as {% data variables.copilot.copilot_cloud_agent %}. See [AUTOTITLE](/copilot/concepts/agents/about-third-party-agents).

### {% data variables.copilot.copilot_code-review_short %}

AI-generated code review suggestions to help you write better code. See [AUTOTITLE](/copilot/using-github-copilot/code-review/using-copilot-code-review).

Several {% data variables.copilot.copilot_code-review-tools_short %} are in {% data variables.release-phases.public_preview %} and subject to change. See [AUTOTITLE](/copilot/concepts/agents/code-review).

### Agent mode in IDEs

Allow {% data variables.product.prodname_copilot_short %} to work autonomously in the IDE. {% data variables.product.prodname_copilot_short %} will determine which files to make changes to, offer code changes and terminal commands for the user's approval, and iterate to remediate issues until the original task is complete.

### {% data variables.product.prodname_spark %} ({% data variables.release-phases.public_preview %})

Build and deploy full-stack applications using natural-language prompts that seamlessly integrate with the {% data variables.product.github %} platform for advanced development. See [AUTOTITLE](/copilot/tutorials/spark/build-apps-with-spark).

## Features for customization

These features can be used to add context to {% data variables.product.prodname_copilot_short %} and improve its performance. For a comparison of when to use each feature, see [AUTOTITLE](/copilot/reference/customization-cheat-sheet).

### {% data variables.copilot.copilot_spaces %}

Organize and centralize relevant content—like code, docs, specs, and more—into {% data variables.copilot.copilot_spaces_short %} that ground {% data variables.product.prodname_copilot_short %}’s responses in the right context for a specific task. See [AUTOTITLE](/copilot/using-github-copilot/copilot-spaces/about-organizing-and-sharing-context-with-copilot-spaces).

### Custom instructions

Enhance responses by providing contextual details on your preferences, tools, and requirements. See [AUTOTITLE](/copilot/concepts/prompting/response-customization).

### {% data variables.copilot.copilot_memory %} ({% data variables.release-phases.public_preview %})

{% data variables.product.prodname_copilot_short %} can deduce and store useful information about a repository, which {% data variables.copilot.copilot_cloud_agent %} and {% data variables.copilot.copilot_code-review_short %} can use to improve the quality of their output when working in that repository. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-memory).

### Prompt files

Build and share reusable prompt instructions with additional context. A prompt file is a Markdown file, stored in your workspace, that mimics the existing format of writing prompts. See [AUTOTITLE](/copilot/concepts/prompting/response-customization#about-prompt-files).

### MCP servers

You can configure Model Context Protocol (MCP) servers for many {% data variables.product.prodname_copilot_short %} features, giving {% data variables.product.prodname_copilot_short %} access to external tools or data sources. See [AUTOTITLE](/copilot/concepts/context/mcp).

### Agent skills

Create folders of instructions, scripts, and resources that {% data variables.product.prodname_copilot_short %} can load when relevant to improve its performance in specialized tasks. See [AUTOTITLE](/copilot/concepts/agents/about-agent-skills).

### Custom agents

Create specialized versions of {% data variables.copilot.copilot_cloud_agent %} with access to specific tools, instructions, and MCP servers. See [AUTOTITLE](/copilot/concepts/agents/cloud-agent/about-custom-agents).

## Features for administrators

The following features are available to organization and enterprise owners with a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan.

### Policy management

Manage policies for {% data variables.product.prodname_copilot_short %} in your organization or enterprise. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization) and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise).

### Access management

Enterprise owners can specify which organizations in the enterprise can use {% data variables.product.prodname_copilot_short %}, and organization owners can specify which organization members can use Copilot. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization) and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise).

### Usage data

Review {% data variables.product.prodname_copilot_short %} usage data within your organization or enterprise to inform how to manage access and drive adoption of {% data variables.product.prodname_copilot_short %}. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-activity-related-to-github-copilot-in-your-organization/reviewing-user-activity-data-for-copilot-in-your-organization) and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise/viewing-copilot-license-usage-in-your-enterprise).

### Audit logs

Review audit logs for {% data variables.product.prodname_copilot_short %} in your organization to understand what actions have been taken and by which users. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-activity-related-to-github-copilot-in-your-organization/reviewing-audit-logs-for-copilot-business).

### File exclusions

Configure {% data variables.product.prodname_copilot_short %} to ignore certain files. This can be useful if you have files that you don't want to be available to {% data variables.product.prodname_copilot_short %}. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/excluding-content-from-github-copilot).

## Next steps

* To learn more about the plans available for {% data variables.product.prodname_copilot %}, see [AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot).
* To start using {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/setting-up-github-copilot).
