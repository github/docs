---
title: Managing Copilot policies as an individual subscriber
shortTitle: Manage policies
intro: 'Find out how to change your personal settings on {% data variables.product.prodname_dotcom_the_website %} to configure {% data variables.product.prodname_copilot %}''s behavior.'
product: '{% data variables.product.prodname_copilot_for_individuals %}'
topics:
  - Copilot
versions:
  feature: copilot
redirect_from:
  - /copilot/configuring-github-copilot/configuring-github-copilot-settings-on-githubcom
  - /github/copilot/about-github-copilot-telemetry
  - /github/copilot/github-copilot-telemetry-terms
  - /copilot/configuring-github-copilot/configuring-your-personal-github-copilot-settings-on-githubcom
---

## About {% data variables.product.prodname_copilot %} settings on {% data variables.product.prodname_dotcom_the_website %}

In addition to the configuration for the {% data variables.product.prodname_copilot %} plugin in your supported IDE, you can configure settings for {% data variables.product.prodname_copilot %} on {% data variables.product.prodname_dotcom_the_website %}. The settings apply wherever you use {% data variables.product.prodname_copilot %}.

## Enabling or disabling suggestions matching public code

> [!NOTE] If you are a member of an organization on {% data variables.product.prodname_ghe_cloud %} who has been assigned a {% data variables.product.prodname_copilot %} seat through your organization, you will not be able to configure suggestions matching public code in your personal account settings. Your setting for suggestions matching public code will be inherited from your organization or enterprise.

Your personal settings for {% data variables.product.prodname_copilot %} include an option to either allow or block code completion suggestions that match publicly available code. If you choose to block suggestions matching public code, {% data variables.product.prodname_copilot %} checks code completion suggestions with their surrounding code of about 150 characters against public code on {% data variables.product.prodname_dotcom %}. If there is a match, or a near match, the suggestion is not shown to you.

If you choose to allow suggestions matching public code, and you accept a suggestion for which one or more matches were found, you can click through from an entry in the {% data variables.product.prodname_copilot %} log to view a list of references on {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/copilot/using-github-copilot/finding-public-code-that-matches-github-copilot-suggestions)."

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.copilot-settings %}
1. Under **Suggestions matching public code**, select the dropdown menu, then click **Allow** to allow suggestions matching public code, or **Block** to block suggestions matching public code.
{% data reusables.copilot.save-settings %}

{% ifversion fpt %}

## Enabling or disabling prompt and suggestion collection

You can choose whether your prompts and {% data variables.product.prodname_copilot_short %}'s suggestions are collected and retained by {% data variables.product.prodname_dotcom %}, and further processed and shared with Microsoft. For more information about data that {% data variables.product.prodname_copilot %} may collect depending on your settings, see "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)" and the [{% data variables.product.prodname_copilot %} privacy FAQ](https://github.com/features/copilot/#faq-privacy-copilot-for-business).

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.copilot-settings %}
1. To allow or prevent {% data variables.product.prodname_dotcom %} using your data, select or deselect **Allow {% data variables.product.prodname_dotcom %} to use my code snippets from the code editor for product improvements**.
{% data reusables.copilot.save-settings %}{% endif %}
