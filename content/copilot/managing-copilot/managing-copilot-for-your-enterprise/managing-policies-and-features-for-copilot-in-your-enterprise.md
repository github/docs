---
title: Managing policies and features for Copilot in your enterprise
intro: 'Enterprise admins can enforce {% data variables.product.prodname_copilot_short %} policies for organizations in their enterprise.'
permissions: Enterprise admins
product: '{% data variables.product.prodname_copilot_enterprise_short %} or {% data variables.product.prodname_copilot_business_short %}'
versions:
  feature: copilot-enterprise
topics:
  - Copilot
shortTitle: Manage policies
---

## About policies for {% data variables.product.prodname_copilot %} in your enterprise

With {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %}, you can set {% data variables.product.prodname_copilot_short %} policies at the enterprise and organization levels.

There are **three enforcement options** for each {% data variables.product.prodname_copilot_short %} policy in your enterprise:

* **No policy** - The feature maintains its default enablement settings, and each of your organizations with {% data variables.product.prodname_copilot_short %} enabled can set their own policy for the feature.
* **Enabled** - The feature is available for all organizations with {% data variables.product.prodname_copilot_short %} enabled in your enterprise.
* **Disabled** - The feature is blocked for all organizations with {% data variables.product.prodname_copilot_short %} enabled in your enterprise.

If a restrictive policy has been chosen at the enterprise level, an organization owner cannot select a more permissive policy at the organization level.

If no policy has been chosen at the enterprise level, and multiple organizations within an enterprise have chosen different policies and granted access to the same users, the most restrictive policy is enforced.

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot %} suggestions that match public code

{% data variables.product.prodname_copilot %} includes a filter which detects code suggestions that match public code on {% data variables.product.prodname_dotcom %}. When the filter is enabled, {% data variables.product.prodname_copilot %} checks code suggestions with their surrounding code of about 150 characters against public code on {% data variables.product.prodname_dotcom %}. If there is a match or near match, the suggestion will not be shown.

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Next to "Suggestions matching public code," click the dropdown menu and select the policy you want to enforce. Suggestions matching public code are enabled by default.

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot %} features on {% data variables.product.prodname_dotcom_the_website %}

With a {% data variables.product.prodname_copilot_enterprise_short %} license, members of your enterprise can access AI features that enhance their experience on {% data variables.product.prodname_dotcom_the_website %}, such as the ability to chat with {% data variables.product.prodname_copilot_short %} in the browser and reference context for {% data variables.product.prodname_copilot_short %} across multiple repositories. See "[AUTOTITLE](/copilot/github-copilot-enterprise/overview/github-copilot-enterprise-feature-set)."

{% data reusables.copilot.copilot-enterprise-enable %}

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot_chat %} in IDEs

Users can chat with {% data variables.product.prodname_copilot %} to get code suggestions and answers to coding-related questions.

To manage the use of {% data variables.product.prodname_copilot_chat_dotcom_short %}, see "[Enforcing a policy to manage the use of {% data variables.product.prodname_copilot %} features on {% data variables.product.prodname_dotcom_the_website %}](#enforcing-a-policy-to-manage-the-use-of-github-copilot-features-on-githubcom)."

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Next to "{% data variables.product.prodname_copilot_chat %} in the IDE," click the dropdown menu and select the policy you want to enforce. Use of {% data variables.product.prodname_copilot_chat %} in IDEs is enabled by default.

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot_cli %}

{% data variables.product.prodname_copilot_cli %} is an extension for {% data variables.product.prodname_cli %} which provides a chat-like interface in the terminal that allows you to ask questions about commands you run from the command line.

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
1. Click the **Policies** tab.
1. To the right of "{% data variables.product.prodname_copilot_cli %}", select the dropdown menu, then choose the appropriate option. Use of {% data variables.product.prodname_copilot_cli %} is enabled by default.

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot_mobile %}

{% data variables.product.prodname_copilot_mobile %} is a chat interface that lets you interact with {% data variables.product.prodname_copilot %}, to ask and receive answers to coding-related questions within {% data variables.product.prodname_mobile %}.

{% data reusables.copilot.copilot-chat-mobile-enable %}
