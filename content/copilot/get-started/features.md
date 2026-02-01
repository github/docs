---
title: GitHub Copilot features
intro: '{% data variables.product.prodname_copilot %} offers a suite of features. {% data variables.product.prodname_copilot_short %} also offers a suite of features for administrators.'
versions:
  feature: copilot
topics:
  - Copilot
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

## {% data variables.product.prodname_copilot %} features

### Inline suggestions

Autocomplete-style suggestions from {% data variables.product.prodname_copilot_short %} in supported IDEs _({% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, Azure Data Studio, Xcode, Vim/Neovim, and Eclipse)_. See [AUTOTITLE](/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot).

If you use {% data variables.product.prodname_vscode_shortname %}, Xcode, and Eclipse, you can also use {% data variables.copilot.next_edit_suggestions %} ({% data variables.release-phases.public_preview %}), which will predict the location of the next edit you are likely to make and suggest a completion for it.

### {% data variables.copilot.copilot_chat_short %}

A chat interface that lets you ask coding-related questions. {% data variables.copilot.copilot_chat %} is available on the {% data variables.product.github %} website, in {% data variables.product.prodname_mobile %}, in supported IDEs _({% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, Eclipse IDE, and Xcode)_, and in {% data variables.product.prodname_windows_terminal %}. Users can also use skills with {% data variables.copilot.copilot_chat_short %}. See [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-github) and [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide).

### {% data variables.copilot.copilot_coding_agent %}

An autonomous AI agent that can make code changes for you. You can assign a {% data variables.product.github %} issue to {% data variables.product.prodname_copilot_short %} and the agent will work on making the required changes, and will create a pull request for you to review. You can also ask {% data variables.product.prodname_copilot_short %} to create a pull request from {% data variables.copilot.copilot_chat_short %}. See [AUTOTITLE](/copilot/using-github-copilot/coding-agent).

### {% data variables.copilot.copilot_cli_short %} ({% data variables.release-phases.public_preview %})

A command line interface that lets you use {% data variables.product.prodname_copilot_short %} from within the terminal. You can get answers to questions, or you can ask {% data variables.product.prodname_copilot_short %} to make changes to your local files. You can also use {% data variables.copilot.copilot_cli_short %} to interact with {% data variables.product.prodname_dotcom_the_website %}—for example, listing your open pull requests, or asking {% data variables.product.prodname_copilot_short %} to create an issue. See [AUTOTITLE](/copilot/concepts/agents/about-copilot-cli).

### {% data variables.copilot.copilot_code-review_short %}

AI-generated code review suggestions to help you write better code. See [AUTOTITLE](/copilot/using-github-copilot/code-review/using-copilot-code-review).

{% data variables.copilot.copilot_code-review-tools_cap_short %} is in {% data variables.release-phases.public_preview %} and subject to change. See [AUTOTITLE](/copilot/concepts/agents/code-review).

### {% data variables.copilot.copilot_for_prs %}

AI-generated summaries of the changes that were made in a pull request, which files they impact, and what a reviewer should focus on when they conduct their review. See [AUTOTITLE](/copilot/using-github-copilot/creating-a-pull-request-summary-with-github-copilot).

### {% data variables.copilot.copilot_autocomplete_pr %} ({% data variables.release-phases.public_preview %})

AI-generated text completion to help you write pull request descriptions quickly and accurately. See [AUTOTITLE](/copilot/using-github-copilot/using-copilot-text-completion).

### {% data variables.copilot.copilot_edits_short %}

{% data variables.copilot.copilot_edits_short %} is available in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, and JetBrains IDEs. {% data reusables.copilot.copilot-edits.about-copilot-edits %}

### {% data variables.product.prodname_copilot_short %} custom instructions

Enhance {% data variables.copilot.copilot_chat_short %} responses by providing contextual details on your preferences, tools, and requirements. See [AUTOTITLE](/copilot/concepts/about-customizing-github-copilot-chat-responses).

### {% data variables.copilot.copilot_memory %} ({% data variables.release-phases.public_preview %})

{% data variables.product.prodname_copilot_short %} can deduce and store useful information about a repository, which {% data variables.copilot.copilot_coding_agent %} and {% data variables.copilot.copilot_code-review_short %} can use to improve the quality of their output when working in that repository. For more information, see [AUTOTITLE](/copilot/concepts/agents/copilot-memory).

### {% data variables.copilot.copilot_desktop_short %}

Automatically generate commit messages and descriptions with {% data variables.copilot.copilot_desktop_short %} based on the changes you make to your project.

### {% data variables.copilot.copilot_spaces %}

Organize and centralize relevant content—like code, docs, specs, and more—into {% data variables.copilot.copilot_spaces_short %} that ground {% data variables.product.prodname_copilot_short %}’s responses in the right context for a specific task. See [AUTOTITLE](/copilot/using-github-copilot/copilot-spaces/about-organizing-and-sharing-context-with-copilot-spaces).

### {% data variables.product.prodname_spark %} ({% data variables.release-phases.public_preview %})

Build and deploy full-stack applications using natural-language prompts that seamlessly integrate with the {% data variables.product.github %} platform for advanced development. See [AUTOTITLE](/copilot/tutorials/spark/build-apps-with-spark).

## {% data variables.product.prodname_copilot %} features for administrators

The following features are available to organization and enterprise owners with a {% data variables.copilot.copilot_business_short %} or {% data variables.copilot.copilot_enterprise_short %} plan.

### Policy management

Manage policies for {% data variables.product.prodname_copilot_short %} in your organization or enterprise. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization) and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise).

### Access management

Enterprise owners can specify which organizations in the enterprise can use {% data variables.product.prodname_copilot_short %}, and organization owners can specify which organization members can use Copilot. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization) and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise).

### Usage data

Review {% data variables.product.prodname_copilot_short %} usage data within your organization or enterprise to inform how to manage access and drive adoption of {% data variables.product.prodname_copilot_short %}. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-activity-related-to-github-copilot-in-your-organization/reviewing-user-activity-data-for-copilot-in-your-organization) and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise/viewing-copilot-license-usage-in-your-enterprise).

### Audit logs

Review audit logs for {% data variables.product.prodname_copilot_short %} in your organization to understand what actions have been taken and by which users. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-activity-related-to-github-copilot-in-your-organization/reviewing-audit-logs-for-copilot-business).

### Exclude files

Configure {% data variables.product.prodname_copilot_short %} to ignore certain files. This can be useful if you have files that you don't want to be available to {% data variables.product.prodname_copilot_short %}. See [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/excluding-content-from-github-copilot).

## Next steps

* To learn more about the plans available for {% data variables.product.prodname_copilot %}, see [AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot).
* To start using {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/setting-up-github-copilot).
