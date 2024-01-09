## Configuring {% data variables.product.prodname_copilot %} settings on {% data variables.product.prodname_dotcom_the_website %}

Before you can start using {% data variables.product.prodname_copilot %}, you will need to set up a {% ifversion fpt %}free trial or{% endif %} subscription. For more information, see "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-personal-account)" or "[AUTOTITLE](/billing/managing-billing-for-github-copilot/managing-your-github-copilot-subscription-for-your-organization-or-enterprise)."

Once you have an active {% data variables.product.prodname_copilot %} {% ifversion fpt %}trial or{% endif %} subscription, you can adjust {% data variables.product.prodname_copilot %} settings for your personal account on {% data variables.product.prodname_dotcom %} in the [{% data variables.product.prodname_copilot %} settings](https://github.com/settings/copilot). The settings apply anywhere that you use {% data variables.product.prodname_copilot %}. You can configure the suggestions that {% data variables.product.prodname_copilot %} offers and how {% data variables.product.company_short %} uses your telemetry data.

### Enabling or disabling duplication detection

{% data reusables.copilot.duplication-setting-org %}

Your personal settings for {% data variables.product.prodname_copilot %} include an option to either allow or block code completion suggestions that match publicly available code. If you choose to block suggestions matching public code, {% data variables.product.prodname_copilot %} checks code completion suggestions with their surrounding code of about 150 characters against public code on {% data variables.product.prodname_dotcom %}. If there is a match, or a near match, the suggestion is not shown to you.

If you choose to allow suggestions matching public code, and you accept a suggestion for which one or more matches were found, you can click through from an entry in the {% data variables.product.prodname_copilot %} log to view a list of references on {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/copilot/using-github-copilot/finding-public-code-that-matches-github-copilot-suggestions)."

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.copilot-settings %}
1. Under **Suggestions matching public code**, select the dropdown menu, then click **Allow** to allow suggestions matching public code, or **Block** to block suggestions matching public code.
{% data reusables.copilot.save-settings %}

{% ifversion fpt %}

### Enabling or disabling Prompt and Suggestion collection

{% data reusables.copilot.telemetry-setting-org %}

You can choose whether your Prompts and Suggestions are collected and retained by GitHub and further processed and shared with Microsoft and by adjusting your user settings. For more information about data that {% data variables.product.prodname_copilot %} may collect depending on your settings, see "[AUTOTITLE](/free-pro-team@latest/site-policy/github-terms/github-terms-for-additional-products-and-features#github-copilot)" and the [{% data variables.product.prodname_copilot %} privacy FAQ](https://github.com/features/copilot/#faq-privacy-copilot-for-business).

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.copilot-settings %}
1. To allow or prevent {% data variables.product.prodname_dotcom %} using your data, select or deselect **Allow {% data variables.product.prodname_dotcom %} to use my code snippets for product improvements**.
{% data reusables.copilot.save-settings %}{% endif %}

## Further reading

- [{% data variables.product.prodname_copilot %} FAQ](https://github.com/features/copilot/#faq)
