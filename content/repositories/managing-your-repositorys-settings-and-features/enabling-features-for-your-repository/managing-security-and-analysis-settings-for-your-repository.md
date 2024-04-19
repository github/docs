![Screenshot_2024-04-20-01-26-53-535_com android chrome](https://github.com/github/docs/assets/162898168/fa429f0d-5c2a-4e5e-b297-55017ecb3e3f)
![Screenshot_2024-04-20-01-26-35-604_com android chrome](https://github.com/github/docs/assets/162898168/a2b7c685-9f09-4a25-bf42-bc6208bd0322)
![Screenshot_2024-04-20-01-26-31-769_com android chrome](https://github.com/github/docs/assets/162898168/5ab564c2-6557-491d-a224-3008d3cf876f)
![Screenshot_2024-04-20-01-26-28-202_com android chrome](https://github.com/github/docs/assets/162898168/aaa8b2a6-b074-4e86-b53f-97941ae2aa3a)
![Screenshot_2024-04-20-01-26-23-734_com android chrome](https://github.com/github/docs/assets/162898168/5717a752-f5e7-42e8-9862-4d4be44f8f83)
![Screenshot_2024-04-20-01-26-18-747_com android chrome](https://github.com/github/docs/assets/162898168/382b2667-8dc0-4768-a30b-957296ac14f3)
![Screenshot_2024-04-20-01-25-55-637_com android chrome](https://github.com/github/docs/assets/162898168/182e4a22-6cdb-4c83-a43b-1494f4cefbff)
---
title: Managing security and analysis settings for your repository
intro: 'You can control features that secure and analyze the code in your project on {% data variables.product.prodname_dotcom %}.'
permissions: People with admin permissions to a repository can manage security and analysis settings for the repository.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-security-and-analysis-settings-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Security & analysis
---

{% ifversion dependabot-alerts-enterprise-enablement %}

{% note %}

**Note:** When {% data variables.product.prodname_dependabot_alerts %} are enabled or disabled at the enterprise level, it overrides the repository level settings for {% data variables.product.prodname_dependabot_alerts %}. For more information, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts#managing-dependabot-alerts-for-your-enterprise)."

{% endnote %}

{% endif %}

{% ifversion fpt or ghec %}

## Enabling or disabling security and analysis features for public repositories

You can manage a subset of security and analysis features for public repositories. Other features are permanently enabled, including dependency graph and {% data variables.secret-scanning.partner_alerts %}.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Code security and analysis", to the right of the feature, click **Disable** or **Enable**.
{% endif %}

## Enabling or disabling security and analysis features{% ifversion fpt or ghec %} for private repositories{% endif %}

You can manage the security and analysis features for your {% ifversion fpt or ghec %}private or internal {% endif %}repository.{% ifversion ghes or ghec %} If your enterprise or organization has a license for {% data variables.product.prodname_GH_advanced_security %}, then extra options are available. {% data reusables.advanced-security.more-info-ghas %}
{% elsif fpt %} Organizations that use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_advanced_security %} have extra options available. For more information, see the [{% data variables.product.prodname_ghe_cloud %} documentation](/enterprise-cloud@latest//repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories).
{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Code security and analysis", to the right of the feature, click **Disable** or **Enable**. {% ifversion not fpt %}The control for "{% data variables.product.prodname_GH_advanced_security %}" is disabled if your enterprise has no available licenses for {% data variables.product.prodname_advanced_security %}.{% endif %}
   {% ifversion not fpt %}
   {% note %}

   **Note:** If you disable {% data variables.product.prodname_GH_advanced_security %}, {% ifversion ghec %}dependency review, {% endif %}{% data variables.secret-scanning.user_alerts %} and {% data variables.product.prodname_code_scanning %} are disabled. Any workflows, SARIF uploads, or API calls for {% data variables.product.prodname_code_scanning %} will fail. If {% data variables.product.prodname_GH_advanced_security %} is re-enabled, {% data variables.product.prodname_code_scanning %} will return to its previous state.
   {% endnote %}
   {% endif %}

## Granting access to security alerts

Security alerts for a repository are visible to people with {% ifversion dependabot-alerts-permissions-write-maintain %}write, maintain, or {% endif %}admin access to the repository and, when the repository is owned by an organization, organization owners. You can give additional teams and people access to the alerts.

{% note %}

Organization owners and repository administrators can only grant access to view security alerts, such as {% data variables.secret-scanning.alerts %}, to people or teams who have write access to the repo.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Access to alerts", in the search field, start typing the name of the person or team you'd like to find, then click a name in the list of matches.
1. Click **Save changes**.

## Removing access to security alerts

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "Access to alerts", to the right of the person or team whose access you'd like to remove, click {% octicon "x" aria-label="Revoke USER's vulnerability access " %}.

     ![Screenshot of the list of users with access to alerts. To the right of @octocat, an x icon is outlined in dark orange.](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png)
1. Click **Save changes**.

## Further reading

- "[AUTOTITLE](/code-security/getting-started/securing-your-repository)"
- "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)"
