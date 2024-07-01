---
title: Managing policies and features for Copilot in your enterprise
intro: 'You can control the availability of {% data variables.product.prodname_copilot %} and its features for all organizations in your enterprise.'
permissions: Enterprise admins
product: '{% data variables.product.prodname_copilot_enterprise_short %} or {% data variables.product.prodname_copilot_business_short %}'
versions:
  feature: copilot-enterprise
topics:
  - Copilot
shortTitle: Manage policies
---

## About policies for {% data variables.product.prodname_copilot %} in your enterprise

With {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %}, you can set policies that control the availability of {% data variables.product.prodname_copilot_short %} and its features in your enterprise and organizations.

There are **three enforcement options** for {% data variables.product.prodname_copilot_short %} policies in your enterprise:

* **No policy** - The feature is initially disabled at the organization level, but each organization with {% data variables.product.prodname_copilot_short %} enabled in your enterprise can set their own policy for the feature.
* **Enabled** - The feature is available in all organizations with {% data variables.product.prodname_copilot_short %} enabled in your enterprise.
* **Disabled** - The feature is blocked for all organizations with {% data variables.product.prodname_copilot_short %} enabled in your enterprise.

If a policy is enabled or disabled at the enterprise level, the same policy cannot be changed at the organization level.

If no policy has been chosen at the enterprise level, and multiple organizations within the enterprise have chosen different policies and granted access to the same users, the most restrictive policy is enforced.

## Configuring policies for {% data variables.product.prodname_copilot %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. For each policy you want to configure, click the dropdown menu and select an enforcement option.

## {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}

With a {% data variables.product.prodname_copilot_enterprise_short %} license, members of your enterprise can access AI features that enhance their experience on {% data variables.product.prodname_dotcom_the_website %}, including:
* {% data variables.product.prodname_copilot_chat %} in {% data variables.product.prodname_dotcom_the_website %}
* {% data variables.product.prodname_copilot_short %} pull request summaries
* {% data variables.product.prodname_copilot_short %} knowledge bases

To learn more about these features, see "[AUTOTITLE](/copilot/github-copilot-enterprise/overview/github-copilot-enterprise-feature-set)."

If you enable "{% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_dotcom_the_website %}", you can also configure additional features:
* **Opt in to user feedback collection** - If enabled, developers can provide feedback after {% data variables.product.prodname_copilot_short %} generates a pull request summary, and the summary will be sent to {% data variables.product.prodname_dotcom %} for context. If disabled, developers can still provide feedback after each {% data variables.product.prodname_copilot_chat_short %} response, and via the "Give feedback" link in conversations.
* **Experimental {% data variables.product.prodname_copilot_short %} features** - If enabled, members of your enterprise can test new {% data variables.product.prodname_copilot_short %} features before they are released.

## {% data variables.product.prodname_copilot_cli %}

{% data variables.product.prodname_copilot_cli %} is an extension for {% data variables.product.prodname_cli %} which provides a chat-like interface in the terminal. Developers can ask {% data variables.product.prodname_copilot %} for command suggestions, or for explanations of commands they run.

## {% data variables.product.prodname_copilot_chat %} in the IDE

Developers can chat with {% data variables.product.prodname_copilot %} in their IDEs to get code suggestions and answers to coding-related questions.

## {% data variables.product.prodname_copilot_mobile %}

{% data variables.product.prodname_copilot_mobile %} is a chat interface that lets developers interact with {% data variables.product.prodname_copilot %} to ask and receive answers to coding-related questions within {% data variables.product.prodname_mobile %}.

## {% data variables.product.prodname_copilot_extensions %}

{% data reusables.copilot.copilot-extensions.beta-note %}

{% data variables.product.prodname_copilot_extensions %} integrate external tools with {% data variables.product.prodname_copilot_chat %}, helping developers reduce context switching, interact with tools using natural language, and customize their {% data variables.product.prodname_copilot_chat_short %} experience. See "[AUTOTITLE](/copilot/using-github-copilot/using-extensions-to-integrate-external-tools-with-copilot-chat)."

## Suggestions matching public code

{% data variables.product.prodname_copilot %} includes a filter which detects code suggestions that match public code on {% data variables.product.prodname_dotcom %}. When the filter is enabled, {% data variables.product.prodname_copilot %} checks code suggestions with their surrounding code of about 150 characters against public code on {% data variables.product.prodname_dotcom %}. If there is a match or near match, the suggestion will not be shown.

## Give {% data variables.product.prodname_copilot_short %} access to Bing

> [!NOTE] Bing search integration into {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_vscode_shortname %}, and {% data variables.product.prodname_vs %} is currently in beta and is subject to change.

{% data variables.product.prodname_copilot_chat %} can use Bing to provide enhanced responses by searching the internet for information related to a question. Bing search is particularly helpful when discussing new technologies or highly specific subjects.
