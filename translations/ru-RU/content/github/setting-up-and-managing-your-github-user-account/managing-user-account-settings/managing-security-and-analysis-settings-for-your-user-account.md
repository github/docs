---
title: Managing security and analysis settings for your user account
intro: 'You can control features that secure and analyze the code in your projects on {% data variables.product.prodname_dotcom %}.'
versions:
  free-pro-team: '*'
topics:
  - Accounts
redirect_from:
  - /github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account
---

### About management of security and analysis settings

{% data variables.product.prodname_dotcom %} can help secure your repositories. This topic tells you how you can manage the security and analysis features for all your existing or new repositories.

You can still manage the security and analysis features for individual repositories. For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)."

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

For an overview of repository-level security, see "[Securing your repository](/code-security/getting-started/securing-your-repository)."

### Enabling or disabling features for existing repositories

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. Under "Configure security and analysis features", to the right of the feature, click **Disable all** or **Enable all**. !["Enable all" or "Disable all" button for "Configure security and analysis" features](/assets/images/help/settings/security-and-analysis-disable-or-enable-all.png)
6. Optionally, enable the feature by default for new repositories in your organization. !["Enable by default" option for new repositories](/assets/images/help/settings/security-and-analysis-enable-by-default-in-modal.png)
7. Click **Disable FEATURE** or **Enable FEATURE** to disable or enable the feature for all the repositories you own. ![Button to disable or enable feature](/assets/images/help/settings/security-and-analysis-enable-dependency-graph.png)

{% data reusables.security.displayed-information %}

### Enabling or disabling features for new repositories

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.security-analysis %}
3. Under "Configure security and analysis features", to the right of the feature, enable or disable the feature by default for new repositories in your organization. ![Checkbox for enabling or disabling a feature for new repositories](/assets/images/help/settings/security-and-analysis-enable-or-disable-feature-checkbox.png)

### Дополнительная литература

- "[About the dependency graph](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"
- "[Managing vulnerabilities in your project's dependencies](/github/managing-security-vulnerabilities/managing-vulnerabilities-in-your-projects-dependencies)"
{% if currentVersion == "free-pro-team@latest" %}- "[Keeping your dependencies updated automatically](/github/administering-a-repository/keeping-your-dependencies-updated-automatically)"{% endif %}
