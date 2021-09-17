---
title: Managing GPG verification for Codespaces
intro: 'You can allow {% data variables.product.company_short %} to automatically use GPG to sign commits you make in your codespaces, so other people can be confident that the changes come from a trusted source.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
redirect_from:
  - /github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces
  - /codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces
shortTitle: GPG verification
---

 

After you enable GPG verification, {% data variables.product.company_short %} will automatically sign commits you make in {% data variables.product.prodname_codespaces %}, and the commits will have a verified status on {% data variables.product.product_name %}. By default, GPG verification is disabled for codespaces you create. You can choose to allow GPG verification for all repositories or specific repositories. Only enable GPG verification for repositories that you trust. For more information about {% data variables.product.product_name %}-signed commits, see "[About commit signature verification](/github/authenticating-to-github/about-commit-signature-verification)."

Once you enable GPG verification, it will immediately take effect for all your codespaces.

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.codespaces-tab %}
1. Under "GPG verification", select the setting you want for GPG verification.
  ![Radio buttons to manage GPG verification](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png) 
1. If you chose "Selected repositories", select the drop-down menu, then click a repository you want enable GPG verification for. Repeat for all repositories you want to enable GPG verification for.
  !["Selected repositories" drop-down menu](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 


{% note %}

**Note:** Once you have enabled GPG verification for {% data variables.product.prodname_codespaces %}, you also must append `-s` to each commit in order for it to be signed. To do this in {% data variables.product.prodname_vscode %}, ensure the "Git: Enable Commit Signing" option is enabled from the Settings.

{% endnote %}
