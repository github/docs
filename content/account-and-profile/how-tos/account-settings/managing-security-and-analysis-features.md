---
title: Managing security and analysis features
intro: You can control features that secure and analyze the code in your projects on {% data variables.product.prodname_dotcom %}.
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
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/managing-security-and-analysis-settings-for-your-personal-account
  - /account-and-profile/tutorials/managing-security-and-analysis-settings-for-your-personal-account
  - /account-and-profile/how-tos/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/managing-security-and-analysis-features
shortTitle: Security and analysis
contentType: how-tos
---

> [!NOTE] This topic tells you how you can manage the security and analysis features for all your existing or new repositories. For information on managing these settings for individual repositories, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository).

## Enabling or disabling features for existing repositories

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
1. Under "{% data variables.product.UI_advanced_security %}", to the right of the feature, click **Disable all** or **Enable all**.
1. Optionally, enable the feature by default for new repositories that you own.{% ifversion not ghes %}

   ![Screenshot of the "Enable FEATURE" modal dialog, with the "Enable by default for new private repositories" option outlined in dark orange.](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}

1. Click **Disable FEATURE** or **Enable FEATURE** to disable or enable the feature for all the repositories you own.

## Enabling or disabling features for new repositories

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
1. Under "{% data variables.product.UI_advanced_security %}", to the right of the feature, enable or disable the feature by default for new repositories that you own.

## Next steps

* For reference information, see [AUTOTITLE](/account-and-profile/reference/personal-account-reference#security-and-analysis-features-settings)
