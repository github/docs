---
title: About GitHub Copilot Free
shortTitle: About Copilot Free
intro: 'Use {% data variables.product.prodname_copilot %} in your IDE, on {% data variables.product.prodname_mobile %}, or on {% data variables.product.prodname_dotcom_the_website %} for free.'
versions:
  feature: copilot
type: overview
topics:
  - Copilot
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
* Block suggestions matching public code
* Access to the {% data variables.copilot.copilot_claude_sonnet %}, {% data variables.copilot.copilot_gemini_flash %} and o3-mini models
* Access to {% data variables.product.prodname_copilot_extensions_short %} in {% data variables.product.prodname_vscode %}, {% data variables.product.prodname_vs %}, JetBrains IDEs, {% data variables.product.prodname_dotcom_the_website %}, and {% data variables.product.prodname_mobile %}

## What are the limitations of {% data variables.product.prodname_copilot_free_short %}?

{% data variables.product.prodname_copilot_free_short %} has the following limitations:

* Code completions are limited to 2000 completions per month.
* {% data variables.product.prodname_copilot_chat_short %} is limited to 50 chat messages per month. This limit includes the usage of {% data variables.product.prodname_copilot_cli_short %}, and both standard and multi-file editing chats in {% data variables.product.prodname_vscode_shortname %} and {% data variables.product.prodname_vs %}.
When you reach these limits, you can upgrade to {% data variables.product.prodname_copilot_pro_short %} to continue using {% data variables.product.prodname_copilot_short %}.

### Limitations for enterprises

{% data variables.product.prodname_copilot_free_short %} is not suitable for enterprises, as it does not include the following features:

* Access management
* Audit logs
* Policy management
* File exclusion
* Usage data
* Indemnification coverage

## How do I get access to {% data variables.product.prodname_copilot_free_short %}?

There are a few ways to access {% data variables.product.prodname_copilot_free_short %}.

* [{% data variables.product.prodname_vs %} and {% data variables.product.prodname_vscode_shortname %}](#visual-studio-and-vs-code)
* [{% data variables.product.prodname_dotcom_the_website %}](#githubcom)
* [{% data variables.product.prodname_mobile %}](#github-mobile)
* [Other IDEs](#other-ides)

### {% data variables.product.prodname_vs %} and {% data variables.product.prodname_vscode_shortname %}

In {% data variables.product.prodname_vs %} and {% data variables.product.prodname_vscode_shortname %} you can access {% data variables.product.prodname_copilot_free_short %} directly from the editor.

1. In the top right of {% data variables.product.prodname_vs %} or {% data variables.product.prodname_vscode_shortname %}, click **{% octicon "copilot" aria-hidden="true" %}**.
1. In the sidebar, click **Sign up for {% data variables.product.prodname_copilot_free_short %}**.
1. If you have a {% data variables.product.github %} account, you will be prompted to sign in. If you don't have a {% data variables.product.github %} account, you will be prompted to create one.

### {% data variables.product.prodname_dotcom_the_website %}

With {% data variables.product.prodname_copilot_free_short %}, you can ask {% data variables.product.prodname_copilot_short %} questions within a chat interface on {% data variables.product.github %}.

1. To access your personal dashboard once you're signed in, click the {% octicon "mark-github" aria-label="The github octocat logo" %} in the upper-left corner of any page on {% data variables.product.github %}.
1. At the top of the dashboard, use the "Ask a question" box to start a chat with {% data variables.product.prodname_copilot_short %}.

### {% data variables.product.prodname_mobile %}

You'll automatically get subscribed to {% data variables.product.prodname_copilot_free_short %} when you start a chat with {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_mobile %}.

{% data reusables.copilot.chat-mobile-start-chat %}
1. At the bottom of the page, use the "Ask {% data variables.product.prodname_copilot_short %}" box to start a chat with {% data variables.product.prodname_copilot_short %}.

Alternatively, go to "Settings" in {% data variables.product.prodname_mobile %}, then under {% data variables.product.prodname_copilot_short %} settings, click **Get started for Free**.

### Other IDEs

To use {% data variables.product.prodname_copilot_free_short %} in other IDEs, you first have to activate {% data variables.product.prodname_copilot_free_short %} in your {% data variables.product.github %} account settings.

{% data reusables.user-settings.copilot-settings %}
1. Click **Start using {% data variables.product.prodname_copilot_free_short %}** to activate {% data variables.product.prodname_copilot_free_short %} and open a conversation thread.
1. Click **Use {% data variables.product.prodname_copilot_short %} in other IDEs** and follow the instructions for your IDE.

## How can I upgrade to {% data variables.product.prodname_copilot_pro_short %}?

If you use {% data variables.product.prodname_copilot_free_short %} in {% data variables.product.prodname_vs %}, {% data variables.product.prodname_vscode_shortname %}, or on {% data variables.product.prodname_dotcom_the_website %}, and reach the usage limits, you'll receive a notification. The notification includes the reset date for your limits and a link to set up a 30-day free trial of {% data variables.product.prodname_copilot_pro_short %}. After the trial ends, you'll need a paid subscription to keep using {% data variables.product.prodname_copilot_short %}.

If you use {% data variables.product.prodname_copilot_free_short %} in a different IDE and reach the limits, an error message will appear in your editor. To continue, you can start a 30-day free trial of {% data variables.product.prodname_copilot_pro_short %} in your {% data variables.product.github %} account settings. See [AUTOTITLE](/copilot/setting-up-github-copilot/setting-up-github-copilot-for-yourself#1-get-access-to-github-copilot).

If you use {% data variables.product.prodname_copilot_free_short %} in {% data variables.product.prodname_mobile %} and reach the usage limits, you'll be prompted to upgrade to {% data variables.product.prodname_copilot_pro_short %} via an in-app purchase.
