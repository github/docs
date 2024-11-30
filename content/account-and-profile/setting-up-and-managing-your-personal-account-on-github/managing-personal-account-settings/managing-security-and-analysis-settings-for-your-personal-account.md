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
shortTitle: Manage security & analysis
---
## About management of security and analysis settings

{% data variables.product.prodname_dotcom %} can help secure your repositories. This topic tells you how you can manage the security and analysis features for all your existing or new repositories.

You can still manage the security and analysis features for individual repositories. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."

You can also review the security log for all activity on your personal account. For more information, see "[Reviewing your security log](/authentication/keeping-your-account-and-data-secure/reviewing-your-security-log)."

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

For an overview of repository-level security, see "[Securing your repository](/code-security/getting-started/securing-your-repository)."

## Enabling or disabling features for existing repositories

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Under "Code security and analysis", to the right of the feature, click **Disable all** or **Enable all**.
  {% ifversion ghes %}!["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/enterprise/3.3/settings/security-and-analysis-disable-or-enable-all.png){% else %}!["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png){% endif %}
6. Optionally, enable the feature by default for new repositories that you own.
  {% ifversion ghes %}!["Enable by default" option for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-by-default-in-modal.png){% else %}!["Enable by default" option for new repositories](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png){% endif %}
7. Click **Disable FEATURE** or **Enable FEATURE** to disable or enable the feature for all the repositories you own.
  {% ifversion ghes %}![Button to disable or enable feature](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-dependency-graph.png){% else %}![Button to disable or enable feature](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png){% endif %}

{% data reusables.security.displayed-information %}

## Enabling or disabling features for new repositories

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.security-analysis %}
3. Under "Code security and analysis", to the right of the feature, enable or disable the feature by default for new repositories that you own.
  {% ifversion ghes %}![Checkbox for enabling or disabling a feature for new repositories](/assets/images/enterprise/3.3/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% else %}![Checkbox for enabling or disabling a feature for new repositories](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png){% endif %}

## Further reading

- "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Keeping your dependencies updated automatically](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically)"
