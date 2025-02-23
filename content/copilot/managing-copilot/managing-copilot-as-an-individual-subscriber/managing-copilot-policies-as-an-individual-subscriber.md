---
title: Managing Copilot policies as an individual subscriber
shortTitle: Manage policies
intro: 'Find out how to change your personal settings on {% data variables.product.github %} to configure {% data variables.product.prodname_copilot %}''s behavior.'
product: '{% data variables.product.prodname_copilot_pro_short %} and {% data variables.product.prodname_copilot_free_short %}'
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

## About {% data variables.product.prodname_copilot %} settings on {% data variables.product.github %}

In addition to the configuration for the {% data variables.product.prodname_copilot %} plugin in your supported IDE, you can configure settings for {% data variables.product.prodname_copilot %} on {% data variables.product.github %}. The settings apply wherever you use {% data variables.product.prodname_copilot %}.

## Enabling or disabling suggestions matching public code

> [!NOTE] If you are a member of an organization on {% data variables.product.prodname_ghe_cloud %} who has been assigned a {% data variables.product.prodname_copilot %} seat through your organization, you will not be able to configure suggestions matching public code in your personal account settings. Your setting for suggestions matching public code will be inherited from your organization or enterprise.

Your personal settings for {% data variables.product.prodname_copilot %} include an option to either allow or block code suggestions that match publicly available code. If you choose to block suggestions matching public code, {% data variables.product.prodname_copilot %} checks code suggestions with their surrounding code of about 150 characters against public code on {% data variables.product.prodname_dotcom %}. If there is a match, or a near match, the suggestion is not shown to you.

If you choose to allow suggestions matching public code, when {% data variables.product.prodname_copilot_short %} suggests matching code you can display details of the matches and click through to the relevant repositories on {% data variables.product.prodname_dotcom %}. For more information, see [AUTOTITLE](/copilot/using-github-copilot/finding-public-code-that-matches-github-copilot-suggestions).

{% data reusables.user-settings.copilot-settings %}
1. To the right of **Suggestions matching public code**, select the dropdown menu, then click **Allow** to allow suggestions matching public code, or **Block** to block suggestions matching public code.

{% ifversion fpt %}

## Enabling or disabling prompt and suggestion collection

You can choose whether your prompts and {% data variables.product.prodname_copilot_short %}'s suggestions are collected and retained by {% data variables.product.prodname_dotcom %}, and further processed and shared with Microsoft. For more information about data that {% data variables.product.prodname_copilot %} may collect depending on your settings, see [AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot) and the [{% data variables.product.prodname_copilot %} privacy FAQ](https://github.com/features/copilot/#faq).

{% data reusables.user-settings.copilot-settings %}
1. To allow or prevent {% data variables.product.prodname_dotcom %} using your data, select or deselect **Allow {% data variables.product.prodname_dotcom %} to use my code snippets from the code editor for product improvements**.

## Enabling or disabling alternative AI models

You can choose whether to allow the following AI models to be used as an alternative to {% data variables.product.prodname_copilot_short %}'s default model.

* {% data variables.copilot.copilot_claude_sonnet %} - see [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-claude-sonnet-in-github-copilot)
* {% data variables.copilot.copilot_gemini_flash %} - see [AUTOTITLE](/copilot/using-github-copilot/ai-models/using-gemini-flash-in-github-copilot)

{% data reusables.user-settings.copilot-settings %}
1. To the right of the model name, select the dropdown menu, then click **Enabled** or **Disabled**.

## Enabling or disabling web search for {% data variables.product.prodname_copilot_chat %}

You can enable web search for {% data variables.product.prodname_copilot_chat %}. This setting is disabled by default. If you enable this setting, {% data variables.product.prodname_copilot_chat_short %} will use Bing to search the internet for information related to a question. Bing search is particularly helpful when discussing new technologies or highly specific subjects.

{% data reusables.user-settings.copilot-settings %}
1. To the right of **{% data variables.product.prodname_copilot_short %} access to Bing**, select the dropdown menu, and then click **Enabled** or **Disabled**.

## Model training and improvements

By default, {% data variables.product.github %}, its affiliates, and third parties will **not** use your data, including prompts, suggestions, and code snippets, for AI model training. This is reflected in your personal settings for {% data variables.product.prodname_copilot %} and cannot be enabled.

{% endif %}
