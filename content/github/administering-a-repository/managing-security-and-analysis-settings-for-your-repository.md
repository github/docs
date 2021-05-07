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
  enterprise-server: '>=3.0'
  github-ae: '*'
topics:
  - Repositories
---

{% if currentVersion == "free-pro-team@latest" %}
### Enabling or disabling security and analysis features for public repositories

You can manage a subset of security and analysis features for public repositories. Other features are permanently enabled, including dependency graph and secret scanning.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Configure security and analysis features", to the right of the feature, click **Disable** or **Enable**.
  !["Enable" or "Disable" button for "Configure security and analysis" features in a public repository](/assets/images/help/repository/security-and-analysis-disable-or-enable-dotcom-public.png)
{% endif %}

### Enabling or disabling security and analysis features{% if currentVersion == "free-pro-team@latest" %} for private repositories{% endif %}

You can manage the security and analysis features for your {% if currentVersion == "free-pro-team@latest" %}private or internal {% endif %}repository.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %} If your organization belongs to an enterprise with a license for {% data variables.product.prodname_GH_advanced_security %} then extra options are available. {% data reusables.advanced-security.more-info-ghas %}{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
4. Under "Configure security and analysis features", to the right of the feature, click **Disable** or **Enable**. The control for "{% data variables.product.prodname_GH_advanced_security %}" is disabled if your enterprise has no available licenses for {% data variables.product.prodname_advanced_security %}.{% if currentVersion == "free-pro-team@latest" %}
  !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-dotcom-private.png){% else %}
  !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/enterprise/3.1/help/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}
  {% note %}

  **Note:** If you disable {% data variables.product.prodname_GH_advanced_security %}, {% if currentVersion == "free-pro-team@latest" %}dependency review, {% endif %}{% data variables.product.prodname_secret_scanning %} and {% data variables.product.prodname_code_scanning %} are disabled. Any workflows, SARIF uploads, or API calls for {% data variables.product.prodname_code_scanning %} will fail.
  {% endnote %}
  {% endif %}
  {% if currentVersion == "enterprise-server@3.0" %}
4. Under "Configure security and analysis features", to the right of the feature, click **Disable** or **Enable**.
  !["Enable" or "Disable" button for "Configure security and analysis" features](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghe.png)
  {% endif %}
  {% if currentVersion == "github-ae@latest" %}
4. Under "Configure security and analysis features", to the right of the feature, click **Disable** or **Enable**. Before you can enable "{% data variables.product.prodname_secret_scanning %}" for your repository, you may need to enable {% data variables.product.prodname_GH_advanced_security %}.
   ![Enable or disable {% data variables.product.prodname_GH_advanced_security %} or {% data variables.product.prodname_secret_scanning %} for your repository](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png)
  {% endif %}

### Granting access to security alerts

After you enable {% if currentVersion != "github-ae@latest" %}{% data variables.product.prodname_dependabot %} or {% endif %}{% data variables.product.prodname_secret_scanning %} alerts for a repository in an organization, organization owners and repository administrators can view the alerts by default. You can give additional teams and people access to the alerts for a repository.

{% note %}

Organization owners and repository administrators can only grant access to view security alerts, such as {% data variables.product.prodname_secret_scanning %} alerts, to people or teams who have write access to the repo.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Access to alerts", in the search field, start typing the name of the person or team you'd like to find, then click a name in the list of matches.
   {% if currentVersion == "free-pro-team@latest" %}
   ![Search field for granting people or teams access to security alerts](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   ![Search field for granting people or teams access to security alerts](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search-ghe.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   ![Search field for granting people or teams access to security alerts](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-person-or-team-search-ghae.png)
   {% endif %}
   
5. Click **Save changes**.
   {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
   !["Save changes" button for changes to security alert settings](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png)
   {% endif %}
    {% if currentVersion == "github-ae@latest" %}
   !["Save changes" button for changes to security alert settings](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-save-changes-ghae.png)
   {% endif %}

### Removing access to security alerts

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-security-and-analysis %}
4. Under "Access to alerts", to the right of the person or team whose access you'd like to remove, click {% octicon "x" aria-label="X symbol" %}.
   {% if currentVersion == "free-pro-team@latest" %}  
   !["x" button to remove someone's access to security alerts for your repository](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)
   {% endif %}
   {% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
   !["x" button to remove someone's access to security alerts for your repository](/assets/images/help/repository/security-and-analysis-security-alerts-username-x-ghe.png)
   {% endif %}
   {% if currentVersion == "github-ae@latest" %}
   !["x" button to remove someone's access to security alerts for your repository](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-username-x-ghae.png)
   {% endif %}

### Further reading

- "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)"
- "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"
