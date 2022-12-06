---
title: Managing GPG verification for GitHub Codespaces
intro: 'You can allow {% data variables.product.company_short %} to automatically use GPG to sign commits you make in your codespaces, so other people can be confident that the changes come from a trusted source.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Developer
  - Security
redirect_from:
  - /github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces
  - /codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces
  - /codespaces/managing-your-codespaces/managing-gpg-verification-for-codespaces
shortTitle: GPG verification
---

 

After you enable GPG verification, {% data variables.product.company_short %} will automatically sign commits you make in {% data variables.product.prodname_github_codespaces %}, and the commits will have a verified status on {% data variables.product.product_name %}. By default, GPG verification is disabled for codespaces you create. You can choose to allow GPG verification for all repositories or specific repositories. Only enable GPG verification for repositories that you trust. For more information about {% data variables.product.product_name %}-signed commits, see "[About commit signature verification](/github/authenticating-to-github/about-commit-signature-verification)."

{% data reusables.codespaces.gpg-in-active-codespaces %}

{% note %}

**Note:** If you have linked a dotfiles repository with {% data variables.product.prodname_github_codespaces %}, the Git configuration in your dotfiles may conflict with the configuration that {% data variables.product.prodname_github_codespaces %} requires to sign commits. For more information, see "[Troubleshooting GPG verification for {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-gpg-verification-for-github-codespaces)."

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "GPG verification", select the setting you want for GPG verification.
  ![Radio buttons to manage GPG verification](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png) 
1. If you chose "Selected repositories", select the dropdown menu, then click a repository you want enable GPG verification for. Repeat for all repositories you want to enable GPG verification for.
  !["Selected repositories" dropdown menu](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 


Once you have enabled GPG verification for {% data variables.product.prodname_github_codespaces %}, all commits are signed by default in your codespaces.