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

If you have a subscription to {% data variables.product.prodname_copilot_business_short %} or {% data variables.product.prodname_copilot_enterprise_short %}, you can enforce policies for {% data variables.product.prodname_copilot %} within your enterprise's organizations, or allow policies to be set in each organization.

Wherever a restrictive policy has been chosen at the enterprise level, an organization owner will not be able to select a more permissive policy at the organization level. In cases where no policy is selected at the enterprise level, and multiple organizations within the enterprise have chosen different policies and granted access to the same users, the most restrictive policy takes precedence for those users.

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot %} suggestions that match public code

{% data variables.product.prodname_copilot %} includes a filter which detects code suggestions that match public code on {% data variables.product.prodname_dotcom %}. You can choose whether to enable or disable the filter at the enterprise level, or allow organization owners to decide at the organization level. When the filter is enabled, {% data variables.product.prodname_copilot %} checks code suggestions with their surrounding code of about 150 characters against public code on {% data variables.product.prodname_dotcom %}. If there is a match or near match, the suggestion will not be shown.

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Next to "Suggestions matching public code," click the dropdown menu and select the policy you want to enforce.
    - To block {% data variables.product.prodname_copilot %} suggestions matching public code, select **Blocked**.
    - To allow {% data variables.product.prodname_copilot %} suggestions matching public code, select **Allowed**.
    - To allow each of your organizations to set their own policy on the use of {% data variables.product.prodname_copilot %} suggestions matching public code, select **No policy**.

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot %} features on {% data variables.product.prodname_dotcom_the_website %}

With a {% data variables.product.prodname_copilot_enterprise_short %} license, members of your enterprise can access AI features that enhance their experience on {% data variables.product.prodname_dotcom_the_website %}, such as the ability to chat with {% data variables.product.prodname_copilot_short %} in the browser and reference context for {% data variables.product.prodname_copilot_short %} across multiple repositories. For more information, see "[AUTOTITLE](/copilot/github-copilot-enterprise/overview/github-copilot-enterprise-feature-set)."

You can enable or disable the use of these features for organizations in your enterprise. Alternatively, you can allow organization owners to select their own policy to determine access to the features for their organization.

{% data reusables.copilot.copilot-enterprise-enable %}

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot_chat %} in IDEs

{% data variables.product.prodname_copilot_chat %} is a feature that allows users to chat with {% data variables.product.prodname_copilot %} to get code suggestions and answers to coding-related questions. You can enable or disable the use of {% data variables.product.prodname_copilot_chat %} in IDEs for organizations in your enterprise. Alternatively, you can allow organization owners to select their own policy to determine access to {% data variables.product.prodname_copilot_chat %} for their organization. For more information, see "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-ides/about-github-copilot-chat-in-your-ide)."

To manage the use of {% data variables.product.prodname_copilot_chat_dotcom_short %}, see "[Enforcing a policy to manage the use of {% data variables.product.prodname_copilot %} features on {% data variables.product.prodname_dotcom_the_website %}](#enforcing-a-policy-to-manage-the-use-of-github-copilot-features-on-githubcom)."

{% data reusables.enterprise-accounts.policies-tab %}
{% data reusables.enterprise-accounts.copilot-tab %}
{% data reusables.enterprise-accounts.copilot-policies-tab %}
1. Next to "{% data variables.product.prodname_copilot_chat %} in the IDE," click the dropdown menu and select the policy you want to enforce.
    - To allow each of your organizations to set their own policy on the use of {% data variables.product.prodname_copilot_chat %}, select **No policy**.
    - To allow use of {% data variables.product.prodname_copilot_chat %}, select **Enabled**.
    - To prevent use of {% data variables.product.prodname_copilot_chat %}, select **Disabled**.

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot_cli %}

{% data reusables.copilot.copilot-cli-about %} You can enable or disable the use of {% data variables.product.prodname_copilot_cli_short %} for organizations in your enterprise. Alternatively, you can allow organization owners to select their own policy for {% data variables.product.prodname_copilot_cli_short %} for their organization. For more information, see "[AUTOTITLE](/copilot/github-copilot-in-the-cli/about-github-copilot-in-the-cli)."

{% data reusables.copilot.copilot-cli-enable %}

## Enforcing a policy to manage the use of {% data variables.product.prodname_copilot_mobile %}

{% data variables.product.prodname_copilot_mobile %} is a chat interface that lets you interact with {% data variables.product.prodname_copilot %}, to ask and receive answers to coding-related questions within {% data variables.product.prodname_mobile %}. You can enable or disable the use of {% data variables.product.prodname_copilot_mobile_short %} for organizations in your enterprise. Alternatively, you can allow organization owners to select their own policy for {% data variables.product.prodname_copilot_mobile_short %} for their organization. For more information, see "[AUTOTITLE](/copilot/github-copilot-chat/copilot-chat-in-github-mobile/about-github-copilot-chat-in-github-mobile)."

{% data reusables.copilot.copilot-chat-mobile-enable %}
