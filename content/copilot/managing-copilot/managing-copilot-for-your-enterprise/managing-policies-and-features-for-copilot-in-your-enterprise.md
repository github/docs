---
title: Managing policies and features for Copilot in your enterprise
intro: 'Enterprise owners can control the availability of {% data variables.product.prodname_copilot %} and its features for all organizations in the enterprise.'
permissions: Enterprise owners
product: '{% data variables.product.prodname_copilot_enterprise_short %} or {% data variables.product.prodname_copilot_business_short %}'
versions:
  feature: copilot-enterprise
topics:
  - Copilot
shortTitle: Manage policies
---

## About policies for {% data variables.product.prodname_copilot %} in your enterprise

You can set policies that control the availability of {% data variables.product.prodname_copilot_short %} and its features in your enterprise and organizations.

There are **three enforcement options** for {% data variables.product.prodname_copilot_short %} policies in your enterprise:

* **No policy** - The feature is initially disabled at the organization level, but each organization with {% data variables.product.prodname_copilot_short %} enabled in your enterprise can set their own policy for the feature.
* **Enabled** - The feature is available in all organizations with {% data variables.product.prodname_copilot_short %} enabled in your enterprise.
* **Disabled** - The feature is blocked for all organizations with {% data variables.product.prodname_copilot_short %} enabled in your enterprise.

If a policy is enabled or disabled at the enterprise level, the same policy cannot be changed at the organization level.

If no policy is chosen at the enterprise level, and multiple organizations within the enterprise choose different policies and grant access to the same users, the most restrictive policy is enforced.

You can configure any of the following policies for your enterprise:

* [Additional {% data variables.product.prodname_copilot_short %} premium requests](#additional-copilot-premium-requests)
* [{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}](#copilot-in-githubcom)
* [{% data variables.product.prodname_copilot_cli %}](#github-copilot-in-the-cli)
* [{% data variables.product.prodname_copilot_desktop_short %} ({% data variables.release-phases.public_preview %})](#copilot-in-github-desktop-public-preview)
* [{% data variables.product.prodname_copilot_chat %} in the IDE](#github-copilot-chat-in-the-ide)
* [Editor preview features](#editor-preview-features)
* [{% data variables.product.prodname_copilot_mobile %}](#github-copilot-chat-in-github-mobile)
* [{% data variables.product.prodname_copilot_extensions %}](#github-copilot-extensions)
* [Suggestions matching public code](#suggestions-matching-public-code)
* [Give {% data variables.product.prodname_copilot_short %} access to Bing](#give-copilot-access-to-bing)
* [{% data variables.product.prodname_copilot_short %} access to alternative AI models](#copilot-access-to-alternative-ai-models)

### Additional {% data variables.product.prodname_copilot_short %} premium requests

<!-- expires 2025-05-05 -->
{% data reusables.copilot.unlimited-premium-requests %}
<!-- end expires 2025-05-05 -->

If you enable this setting, additional premium requests beyond the limit of your {% data variables.product.prodname_copilot_short %} plan will be billed at {% data variables.copilot.additional_premium_requests %} per premium request. You will be charged for each additional premium request you use across all {% data variables.product.prodname_copilot_short %} interfaces, including {% data variables.product.prodname_mobile %}. See [AUTOTITLE](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/monitoring-usage-and-entitlements/avoiding-unexpected-copilot-costs).

### {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}

With a {% data variables.product.prodname_copilot_enterprise_short %} license, you can enable "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}" to provide members of your enterprise access to AI features on the {% data variables.product.github %} website, including:
* **{% data variables.product.prodname_copilot_chat %} in {% data variables.product.prodname_dotcom_the_website %}** - You can ask {% data variables.product.prodname_copilot %} coding-related questions within a chat interface on {% data variables.product.github %}. You can ask general questions or questions within a specific context such as a repository, issue, file, or symbol.
* **{% data variables.product.prodname_copilot_short %} pull request summaries** - {% data variables.product.prodname_copilot_short %} can generate a summary of the changes made in a pull request, as well as a list of impacted files, using natural language. This overview helps reviewers quickly understand the proposed changes.
* **{% data variables.product.prodname_copilot_short %} knowledge bases** - Organization owners can create knowledge bases consisting of Markdown documentation across one or more repositories, allowing organization members to use that documentation as context when they ask questions in {% data variables.product.prodname_copilot_chat_dotcom_short %}, {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}, and {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vs %}.

If you enable "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}", you can also configure additional features:

{% data reusables.copilot.policies-for-dotcom %}

### {% data variables.product.prodname_copilot_cli %}

{% data variables.product.prodname_copilot_cli %} is an extension for {% data variables.product.prodname_cli %} which provides a chat-like interface in the terminal. You can ask {% data variables.product.prodname_copilot %} for command suggestions, or for explanations of commands they run.

### {% data variables.product.prodname_copilot_desktop_short %} ({% data variables.release-phases.public_preview %})

You can generate commit messages and descriptions in {% data variables.product.prodname_desktop %} based on the changes you make to your project.

### {% data variables.product.prodname_copilot_chat %} in the IDE

You can chat with {% data variables.product.prodname_copilot %} in your IDE to get code suggestions and answers to coding-related questions without context switching.

### Editor preview features

Some features of {% data variables.product.prodname_copilot_short %} are available as preview features in your editor. You can enable or disable these features for your enterprise.

### {% data variables.product.prodname_copilot_mobile %}

{% data variables.product.prodname_copilot_mobile %} is a chat interface that lets you interact with {% data variables.product.prodname_copilot %} to ask and receive answers to coding-related questions within {% data variables.product.prodname_mobile %}.

### {% data variables.product.prodname_copilot_extensions %}

{% data variables.product.prodname_copilot_extensions %} integrate external tools with {% data variables.product.prodname_copilot_chat %}, helping members of your enterprise reduce context switching, interact with tools using natural language, and customize their {% data variables.product.prodname_copilot_chat_short %} experience.

### Suggestions matching public code

{% data variables.product.prodname_copilot %} includes a filter which detects code suggestions that match public code on {% data variables.product.prodname_dotcom %}. When the filter is enabled, {% data variables.product.prodname_copilot %} checks code suggestions with their surrounding code of about 150 characters against public code on {% data variables.product.prodname_dotcom %}. If there is a match or near match, the suggestion will not be shown.

### Give {% data variables.product.prodname_copilot_short %} access to Bing

{% data variables.product.prodname_copilot_chat %} can use Bing to provide enhanced responses by searching the internet for information related to a question. Bing search is particularly helpful when discussing new technologies or highly specific subjects.

### {% data variables.product.prodname_copilot_short %} access to alternative AI models

> [!NOTE] Support for GPT-4.5 is only available on {% data variables.product.prodname_copilot_enterprise_short %}.

By default, {% data variables.product.prodname_copilot_chat_short %} uses a base model. If you grant access to the alternative models, members of your enterprise can choose to use these models rather than the base model. The available alternative models are:

* **{% data variables.copilot.copilot_claude_sonnet %}**. See [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-claude-sonnet-in-github-copilot).
* **{% data variables.copilot.copilot_gemini %}**. See [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-gemini-in-github-copilot).
* **OpenAI models:** See [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-openai-gpt-41-in-github-copilot).

### {% data variables.product.prodname_copilot_short %} Metrics API access

Enable this policy to allow users to use the {% data variables.product.prodname_copilot_short %} Metrics API. See [AUTOTITLE](/rest/copilot/copilot-metrics).

## Configuring policies for {% data variables.product.prodname_copilot %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. For each policy you want to configure, click the dropdown menu and select an enforcement option.
