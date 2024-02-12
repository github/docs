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

## About GPG verification in {% data variables.product.prodname_github_codespaces %}

After you enable GPG verification, {% data variables.product.company_short %} will automatically sign commits you make in {% data variables.product.prodname_github_codespaces %}, and the commits will have a verified status on {% data variables.product.product_name %}. For more information about {% data variables.product.product_name %}-signed commits, see "[AUTOTITLE](/authentication/managing-commit-signature-verification/about-commit-signature-verification)."

By default, GPG verification is disabled for codespaces you create. If you enable GPG verification, your commits are signed in repositories that you trust.

{% data reusables.codespaces.settings-sync-and-gpg %}

For more information about managing your preferences for Settings Sync, see "[AUTOTITLE](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#managing-your-preferences-for-settings-sync)."

{% note %}

**Note:** If you have linked a dotfiles repository with {% data variables.product.prodname_github_codespaces %}, the Git configuration in your dotfiles may conflict with the configuration that {% data variables.product.prodname_github_codespaces %} requires to sign commits. For more information, see "[AUTOTITLE](/codespaces/troubleshooting/troubleshooting-gpg-verification-for-github-codespaces)."

{% endnote %}

## Enabling or disabling GPG verification

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.codespaces-tab %}
1. On the page that's displayed, under "GPG verification," enable or disable GPG verification by selecting or deselecting **Enable**.
{% data reusables.codespaces.trusted-repos-step %}

{% data reusables.codespaces.gpg-in-active-codespaces %}
