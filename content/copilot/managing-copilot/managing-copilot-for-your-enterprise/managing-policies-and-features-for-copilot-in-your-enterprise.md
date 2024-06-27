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

## Managing the use of {% data variables.product.prodname_copilot %} suggestions that match public code

{% data variables.product.prodname_copilot %} includes a filter which detects code suggestions that match public code on {% data variables.product.prodname_dotcom %}. When the filter is enabled, {% data variables.product.prodname_copilot %} checks code suggestions with their surrounding code of about 150 characters against public code on {% data variables.product.prodname_dotcom %}. If there is a match or near match, the suggestion will not be shown.

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Next to "Suggestions matching public code," click the dropdown menu and select the policy you want to enforce.

## Managing the use of {% data variables.product.prodname_copilot %} features on {% data variables.product.prodname_dotcom_the_website %}

With a {% data variables.product.prodname_copilot_enterprise_short %} license, members of your enterprise can access AI features that enhance their experience on {% data variables.product.prodname_dotcom_the_website %}, such as the ability to chat with {% data variables.product.prodname_copilot_short %} in the browser and reference context for {% data variables.product.prodname_copilot_short %} across multiple repositories. See "[AUTOTITLE](/copilot/github-copilot-enterprise/overview/github-copilot-enterprise-feature-set)."

{% data reusables.copilot.copilot-enterprise-enable %}

## Managing the use of {% data variables.product.prodname_copilot_chat %} in IDEs

Users can chat with {% data variables.product.prodname_copilot %} in their IDEs to get code suggestions and answers to coding-related questions.

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Next to "{% data variables.product.prodname_copilot_chat %} in the IDE," click the dropdown menu and select the policy you want to enforce.

## Managing the use of {% data variables.product.prodname_copilot_cli %}

{% data variables.product.prodname_copilot_cli %} is an extension for {% data variables.product.prodname_cli %} which provides a chat-like interface in the terminal that allows you to ask questions about commands you run from the command line.

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. Click the **Policies** tab.
1. Next to "{% data variables.product.prodname_copilot_cli %}", click the dropdown menu and select the policy you want to enforce.

## Managing the use of {% data variables.product.prodname_copilot_mobile %}

{% data variables.product.prodname_copilot_mobile %} is a chat interface that lets you interact with {% data variables.product.prodname_copilot %} to ask and receive answers to coding-related questions within {% data variables.product.prodname_mobile %}.

{% data reusables.copilot.copilot-chat-mobile-enable %}
