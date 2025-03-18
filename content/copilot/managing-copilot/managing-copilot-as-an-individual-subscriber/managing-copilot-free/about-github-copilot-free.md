---
title: About GitHub Copilot Free
shortTitle: About Copilot Free
intro: 'Use {% data variables.product.prodname_copilot %} in your IDE, on {% data variables.product.prodname_mobile %}, or on {% data variables.product.prodname_dotcom_the_website %} for free.'
versions:
  feature: copilot
type: overview
topics:
  - Copilot
redirect_from:
  - /copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/about-github-copilot-free
---

{% data variables.product.prodname_copilot_free %} provides limited access to select features of {% data variables.product.prodname_copilot_short %}, allowing you to experience AI-powered coding assistance without a subscription.

{% data variables.product.prodname_copilot_free_short %} is not available if:

* You have a {% data variables.enterprise.prodname_managed_user %}.
* You are assigned a {% data variables.product.prodname_copilot_short %} seat through an organization.
* You have an existing {% data variables.product.prodname_copilot_pro_short %} subscription or trial.
* You have free access to {% data variables.product.prodname_copilot_pro_short %} as a student, teacher, or open-source maintainer.

## What features are included in {% data variables.product.prodname_copilot_free_short %}?

{% data variables.product.prodname_copilot_free_short %} includes the following features:

* Code completion in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, Vim/Neovim, Xcode, and Azure Data Studio
  * {% data variables.copilot.next_edit_suggestions_caps %}, which will predict the location of the next edit you are likely to make and suggest a completion for it. (**only in {% data variables.product.prodname_vscode_shortname %}**)
  * {% data variables.product.prodname_copilot_edits_vscode_short %} to make changes across multiple files. {% data variables.product.prodname_copilot_edits_vscode_short %} is available in two modes: edit mode and agent mode. (**only in {% data variables.product.prodname_vscode_shortname %}**)
* {% data variables.product.prodname_copilot_chat_short %} in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, {% data variables.product.prodname_mobile %}, and {% data variables.product.prodname_dotcom_the_website %}
  * Custom instructions (**only in {% data variables.product.prodname_vs %}, {% data variables.product.prodname_vscode_shortname %}, and {% data variables.product.prodname_dotcom_the_website %}**)
  * Prompt files (**only in {% data variables.product.prodname_vscode_shortname %}**)
  * Vision (**only in {% data variables.product.prodname_vscode_shortname %} Insiders**)
* {% data variables.product.prodname_copilot_cli_short %}
* {% data variables.product.prodname_windows_terminal %}
* Block suggestions matching public code
* Access to {% data variables.copilot.copilot_claude_sonnet_35 %}, {% data variables.copilot.copilot_gemini_flash %} and o3-mini models
* Access to {% data variables.product.prodname_copilot_extensions_short %} in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, {% data variables.product.prodname_dotcom_the_website %}, and {% data variables.product.prodname_mobile %}

## What are the limitations of {% data variables.product.prodname_copilot_free_short %}?

{% data variables.product.prodname_copilot_free_short %} has the following limitations:

* Code completions are limited to 2000 completions per month.
* {% data variables.product.prodname_copilot_chat_short %} is limited to 50 chat messages per month. This limit includes the usage of {% data variables.product.prodname_copilot_cli_short %}, {% data variables.product.prodname_windows_terminal %}, and both standard and multi-file editing chats in {% data variables.product.prodname_vscode_shortname %} and {% data variables.product.prodname_vs %}.
When you reach these limits, you can upgrade to {% data variables.product.prodname_copilot_pro_short %} to continue using {% data variables.product.prodname_copilot_short %}.

### Limitations for enterprises

{% data variables.product.prodname_copilot_free_short %} is not suitable for enterprises, as it does not include the following features:

* Access management
* Audit logs
* Policy management
* File exclusion
* Usage data
* Indemnification coverage

## How can I upgrade to {% data variables.product.prodname_copilot_pro_short %}?

If you use {% data variables.product.prodname_copilot_free_short %} in {% data variables.product.prodname_vs %}, {% data variables.product.prodname_vscode_shortname %}, or on {% data variables.product.prodname_dotcom_the_website %}, and reach the usage limits, you'll receive a notification. The notification includes the reset date for your limits and a link to set up a 30-day free trial of {% data variables.product.prodname_copilot_pro_short %}. After the trial ends, you'll need a paid subscription to keep using {% data variables.product.prodname_copilot_short %}.

If you use {% data variables.product.prodname_copilot_free_short %} in a different IDE and reach the limits, an error message will appear in your editor. To continue, you can start a 30-day free trial of {% data variables.product.prodname_copilot_pro_short %} in your {% data variables.product.github %} account settings. See [AUTOTITLE](/copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself#1-get-access-to-github-copilot).

If you use {% data variables.product.prodname_copilot_free_short %} in {% data variables.product.prodname_mobile %} and reach the usage limits, you'll be prompted to upgrade to {% data variables.product.prodname_copilot_pro_short %} via an in-app purchase.

## Next steps

* To learn how to access {% data variables.product.prodname_copilot_free %}, see [Accessing {% data variables.product.prodname_copilot_free %}](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-free/accessing-github-copilot-free).
* To learn how to disable {% data variables.product.prodname_copilot_free %}, see [Disabling {% data variables.product.prodname_copilot_free %}](/copilot/managing-copilot/managing-copilot-as-an-individual-subscriber/managing-copilot-free/disabling-github-copilot-free).
