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

Autocomplete-style suggestions from {% data variables.product.prodname_copilot_short %} in supported IDEs _({% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, Azure Data Studio, and Vim/Neovim)_.

### {% data variables.product.prodname_copilot_chat_short %}

A chat interface that lets you ask coding-related questions. {% data variables.product.prodname_copilot_chat %} is available in {% data variables.product.prodname_dotcom_the_website %} _({% data variables.product.prodname_copilot_enterprise_short %} only)_, in {% data variables.product.prodname_mobile %}, and in supported IDEs _({% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, and JetBrains IDEs)_. {% data variables.product.prodname_copilot_enterprise_short %} users can also use skills with {% data variables.product.prodname_copilot_chat_short %}.

### {% data variables.product.prodname_copilot_cli_short %}

A chat-like interface in the terminal, where you can ask questions about the command line. You can ask {% data variables.product.prodname_copilot_short %} to provide command suggestions or explanations of commands.

## Copilot Enterprise

### GitHub Copilot Chat in GitHub.com

Leverage the latest GPT models, live within the native GitHub.com interface to interrogate repositories, documentation, lines of source code and more.

### {% data variables.product.prodname_copilot_for_prs %}

AI-generated summaries of the changes that were made in a pull request, which files they impact, and what a reviewer should focus on when they conduct their review.

### {% data variables.product.prodname_copilot_short %} knowledge bases

Create and manage collections of documentation to use as context for chatting with {% data variables.product.prodname_copilot_short %}. When you ask a question in {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_dotcom_the_website %} or in {% data variables.product.prodname_vscode_shortname %}, you can specify a knowledge base as the context for your question.

### Copilot Skills

Copilot Skills enable an agentic workflow that leverages NLP to map your prompts to predefined agents which complete tasks on your behalf. For example, a recency dependent query will be handed off to a GitHub Copilot BING skill, which performs a query and pads your prompt with the context of the response.

### Repo Indexing

Enables better contextualized prompts and code search for Copilot responses tailored to your repository.

### Code Review Assistant Beta 

AI assistant lives in your Pull Request workflow to identify potential bugs, vulnerabilities or general improvements.

### Model Fine tuning Private Beta

Fine tune a custom model based on data that lives in a GitHub repository.

## {% data variables.product.prodname_copilot %} features for administrators

The following features are available to organization and enterprise owners with a {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %} subscription.

### Policy management

Manage policies for {% data variables.product.prodname_copilot_short %} in your organization or enterprise.

### Access management

Enterprise owners can specify which organizations in the enterprise can use {% data variables.product.prodname_copilot_short %}, and organization owners can specify which organization members can use Copilot.

### Usage data

Review {% data variables.product.prodname_copilot_short %} usage data within your organization or enterprise to inform how to manage access and drive adoption of {% data variables.product.prodname_copilot_short %}.

### Audit logs

Review audit logs for {% data variables.product.prodname_copilot_short %} in your organization to understand what actions have been taken and by which users.

### Exclude files

Configure {% data variables.product.prodname_copilot_short %} to ignore certain files. This can be useful if you have files that you don't want to be available to {% data variables.product.prodname_copilot_short %}.

## Next steps

* To learn more about the subscription plans available for {% data variables.product.prodname_copilot %}, see "[AUTOTITLE](/copilot/about-github-copilot/subscription-plans-for-github-copilot)."
* To start using Copilot, see "[AUTOTITLE](/copilot/setting-up-github-copilot)."
