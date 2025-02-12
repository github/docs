---
title: GitHub Copilot features
intro: '{% data variables.product.prodname_copilot %} offers a suite of features. {% data variables.product.prodname_copilot_short %} also offers a suite of features for administrators.'
versions:
  feature: copilot
topics:
  - Copilot
shortTitle: Copilot features
redirect_from:
  - /copilot/copilot-business/github-copilot-business-feature-set
  - /copilot/copilot-individual/github-copilot-individual-feature-set
  - /copilot/github-copilot-enterprise/github-copilot-enterprise-feature-set
---

## {% data variables.product.prodname_copilot %} features

### Code completion

Autocomplete-style suggestions from {% data variables.product.prodname_copilot_short %} in supported IDEs _({% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, Azure Data Studio, Xcode, Vim/Neovim, and Eclipse)_. For more information, see [AUTOTITLE](/copilot/using-github-copilot/getting-code-suggestions-in-your-ide-with-github-copilot).

If you use {% data variables.product.prodname_vscode_shortname %}, you can also use {% data variables.copilot.next_edit_suggestions %}, which will predict the location of the next edit you are likely to make and suggest a completion for it.

> [!NOTE] {% data variables.copilot.next_edit_suggestions_caps %} is currently in {% data variables.release-phases.public_preview %} and is subject to change.

### {% data variables.product.prodname_copilot_chat_short %}

A chat interface that lets you ask coding-related questions. {% data variables.product.prodname_copilot_chat %} is available on the {% data variables.product.github %} website, in {% data variables.product.prodname_mobile %}, in supported IDEs _({% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, and Xcode)_, and in {% data variables.product.prodname_windows_terminal %}. Users can also use skills with {% data variables.product.prodname_copilot_chat_short %}. For more information, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-github) and [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-your-ide).

### {% data variables.product.prodname_copilot_cli_short %}

A chat-like interface in the terminal, where you can ask questions about the command line. You can ask {% data variables.product.prodname_copilot_short %} to provide command suggestions or explanations of commands. Users can also integrate {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_windows_terminal %} Canary. For more information, see [AUTOTITLE](/copilot/using-github-copilot/using-github-copilot-in-the-command-line).

### {% data variables.product.prodname_copilot_for_prs %}

AI-generated summaries of the changes that were made in a pull request, which files they impact, and what a reviewer should focus on when they conduct their review. For more information, see [AUTOTITLE](/copilot/using-github-copilot/using-github-copilot-for-pull-requests/creating-a-pull-request-summary-with-github-copilot).

### {% data variables.product.prodname_copilot_workspace %} ({% data variables.release-phases.public_preview %})

A {% data variables.product.prodname_copilot_short %}-enabled environment for refining your pull requests, validating changes, and integrating suggestions from reviewers. For more information, see [AUTOTITLE](/copilot/using-github-copilot/using-github-copilot-for-pull-requests/using-copilot-to-help-you-work-on-a-pull-request).

### {% data variables.product.prodname_copilot_autocomplete_pr %} ({% data variables.release-phases.public_preview %})

AI-generated text completion to help you write pull request descriptions quickly and accurately. For more information, see [AUTOTITLE](/copilot/using-github-copilot/using-copilot-text-completion).

### {% data variables.product.prodname_copilot_extensions %} ({% data variables.release-phases.public_preview %})

{% data reusables.copilot.copilot-extensions.copilot-extensions-intro %} For more information, see [AUTOTITLE](/copilot/building-copilot-extensions/about-building-copilot-extensions).

### GitHub Models ({% data variables.release-phases.public_preview %})

Bringing the power of industry leading large and small language models to users directly on {% data variables.product.github %}. For more information, see [AUTOTITLE](/github-models).

### {% data variables.product.prodname_copilot %} code review ({% data variables.release-phases.public_preview %})

AI-generated code review suggestions to help you write better code. For more information, see [AUTOTITLE](/copilot/using-github-copilot/code-review/using-copilot-code-review).

### {% data variables.product.prodname_copilot_edits_vscode_short %}

{% data variables.product.prodname_copilot_edits_vscode_short %} is available in {% data variables.product.prodname_vscode %}. {% data reusables.copilot.about-copilot-edits %}

For more information, see [{% data variables.product.prodname_copilot_edits_vscode_short %}](https://code.visualstudio.com/docs/copilot/copilot-edits) in the {% data variables.product.prodname_vscode %} documentation.

### {% data variables.product.prodname_copilot_short %} knowledge bases _({% data variables.product.prodname_copilot_enterprise_short %} only)_

Create and manage collections of documentation to use as context for chatting with {% data variables.product.prodname_copilot_short %}. When you ask a question in {% data variables.product.prodname_copilot_chat_dotcom_short %} or in {% data variables.product.prodname_vscode_shortname %}, you can specify a knowledge base as the context for your question. For more information, see [AUTOTITLE](/copilot/customizing-copilot/managing-copilot-knowledge-bases).

## {% data variables.product.prodname_copilot %} features for administrators

The following features are available to organization and enterprise owners with a {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} subscription.

### Policy management

Manage policies for {% data variables.product.prodname_copilot_short %} in your organization or enterprise. For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/managing-policies-for-copilot-in-your-organization) and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-policies-and-features-for-copilot-in-your-enterprise).

### Access management

Enterprise owners can specify which organizations in the enterprise can use {% data variables.product.prodname_copilot_short %}, and organization owners can specify which organization members can use Copilot. For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-access-to-github-copilot-in-your-organization) and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise).

### Usage data

Review {% data variables.product.prodname_copilot_short %} usage data within your organization or enterprise to inform how to manage access and drive adoption of {% data variables.product.prodname_copilot_short %}. For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-activity-related-to-github-copilot-in-your-organization/reviewing-user-activity-data-for-copilot-in-your-organization) and [AUTOTITLE](/copilot/managing-copilot/managing-copilot-for-your-enterprise/managing-access-to-copilot-in-your-enterprise/viewing-copilot-license-usage-in-your-enterprise).

### Audit logs

Review audit logs for {% data variables.product.prodname_copilot_short %} in your organization to understand what actions have been taken and by which users. For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/reviewing-activity-related-to-github-copilot-in-your-organization/reviewing-audit-logs-for-copilot-business).

### Exclude files

Configure {% data variables.product.prodname_copilot_short %} to ignore certain files. This can be useful if you have files that you don't want to be available to {% data variables.product.prodname_copilot_short %}. For more information, see [AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/setting-policies-for-copilot-in-your-organization/excluding-content-from-github-copilot).

## Next steps

* To learn more about the subscription plans available for {% data variables.product.prodname_copilot %}, see [AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot).
* To start using {% data variables.product.prodname_copilot_short %}, see [AUTOTITLE](/copilot/setting-up-github-copilot).
