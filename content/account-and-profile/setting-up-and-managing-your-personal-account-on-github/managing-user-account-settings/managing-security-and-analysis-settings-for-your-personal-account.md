---
title: Managing security and analysis settings for your personal account
intro: 'You can control features that secure and analyze the code in your projects on {% data variables.product.prodname_dotcom %}.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account
shortTitle: Manage security & analysis
---
## About management of security and analysis settings

{% data variables.product.prodname_dotcom %} can help secure your repositories. This topic tells you how you can manage the security and analysis features for all your existing or new repositories.

You can still manage the security and analysis features for individual repositories. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)."

You can also review the security log for all activity on your personal account. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)."

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

For an overview of repository-level security, see "[AUTOTITLE](/code-security/getting-started/securing-your-repository)."

## Enabling or disabling features for existing repositories

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
1. Under "Code security and analysis", to the right of the feature, click **Disable all** or **Enable all**.
1. Optionally, enable the feature by default for new repositories that you own.{% ifversion not ghes %}

   ![Screenshot of the "Enable FEATURE" modal dialog, with the "Enable by default for new private repositories" option highlighted with a dark orange outline.](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}

1. Click **Disable FEATURE** or **Enable FEATURE** to disable or enable the feature for all the repositories you own.

{% data reusables.security.displayed-information %}

## Enabling or disabling features for new repositories

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
1. Under "Code security and analysis", to the right of the feature, enable or disable the feature by default for new repositories that you own.

## Further reading

- "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)"
- "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)"
- "[AUTOTITLE](/code-security/dependabot/dependabot-version-updates)"
