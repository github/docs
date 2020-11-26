---
title: Managing security and analysis settings for your repository
intro: 'You can control features that secure and analyze the code in your project on {% data variables.product.prodname_dotcom %}.'
permissions: People with admin permissions to a repository can manage security and analysis settings for the repository.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories/
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
versions:
  free-pro-team: '*'
---

### Enabling or disabling security and analysis features

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Configure security and analysis features", to the right of the feature, click **Disable** or **Enable**.
  !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable.png)

### Granting access to {% data variables.product.prodname_dependabot_alerts %}

After you enable {% data variables.product.prodname_dependabot_alerts %} for a repository in an organization, organization owners and repository administrators can view the alerts by default. You can give additional teams and people access to the alerts for a repository.

{% note %}

Organization owners and repository administrators can only grant access to view {% data variables.product.prodname_dependabot_alerts %} to people or teams who have write access to the repo.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Dependabot alerts", in the search field, start typing the name of the person or team you'd like to find, then click a name in the list of matches.
  ![Search field for granting people or teams access to Dependabot alerts](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png)
5. Click **Save changes**.
  !["Save changes" button for changes to Dependabot alert settings](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png)

### Removing access to {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Dependabot alerts", to the right of the person or team whose access you'd like to remove, click {% octicon "x" aria-label="X symbol" %}.
  !["x" button to remove someone's access to Dependabot alerts for your repository](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)

### Further reading

- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"
- "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)"
