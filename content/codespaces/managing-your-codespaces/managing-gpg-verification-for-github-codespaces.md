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



After you enable GPG verification, {% data variables.product.company_short %} will automatically sign commits you make in {% data variables.product.prodname_github_codespaces %}, and the commits will have a verified status on {% data variables.product.product_name %}. By default, GPG verification is disabled for codespaces you create. You can choose to allow GPG verification for all repositories or specific repositories. Only enable GPG verification for repositories that you trust. For more information about {% data variables.product.product_name %}-signed commits, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)."

{% note %}

**Note:** If you have linked a dotfiles repository with {% data variables.product.prodname_github_codespaces %}, the Git configuration in your dotfiles may conflict with the configuration that {% data variables.product.prodname_github_codespaces %} requires to sign commits. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-gpg-verification-for-github-codespaces)."

{% endnote %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. Under "GPG verification", select the setting you want for GPG verification:

   - **Disabled** - GPG will not be available in your codespaces.
   - **All repositories** - GPG will be available for codespaces for all repositories.
   - **Selected repositories** - GPG will be available for codespace created from the selected repositories.

1. If you chose "Selected repositories", select the "Select repositories" dropdown menu, then click a repository you want enable GPG verification for. Repeat this step for all repositories you want to enable GPG verification for.

{% data reusables.codespaces.gpg-in-active-codespaces %}
