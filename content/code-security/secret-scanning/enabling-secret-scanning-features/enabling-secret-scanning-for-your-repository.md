---
title: Enabling secret scanning for your repository
shortTitle: Enable secret scanning
intro: 'You can configure how {% data variables.product.prodname_dotcom %} scans your repositories for leaked secrets and generates alerts.'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
---

## About enabling {% data variables.secret-scanning.user_alerts %}

{% ifversion fpt %}

{% data variables.secret-scanning.user_alerts_caps %} can be enabled on any free public repository that you own.

{% endif %}{% ifversion ghec or ghes %}

{% data variables.secret-scanning.user_alerts_caps %} can be enabled for any repository that is owned by an organization{% ifversion secret-scanning-user-owned-repos %}, and for repositories owned by user accounts when using {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_emus %}{% endif %}.

{% endif %}

If you're an organization owner, you can enable {% data variables.product.prodname_secret_scanning %} for multiple repositories at the same time{% ifversion security-configurations-ga %} using a security configuration{% endif %}. For more information, see {% ifversion security-configurations-ga %}"[AUTOTITLE](/code-security/securing-your-organization){% else %}"[AUTOTITLE](/code-security/getting-started/quickstart-for-securing-your-organization#enabling-security-features-in-your-organization)"{% endif %}."

{% ifversion secret-scanning-enterprise-level %}

If your organization is owned by an enterprise account, an enterprise owner can also enable {% data variables.product.prodname_secret_scanning %} at the enterprise level. For more information, see "[AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise)."

{% endif %}

## Enabling {% data variables.secret-scanning.user_alerts %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}{% ifversion ghec or ghes %}
1. If {% data variables.product.prodname_advanced_security %} is not already enabled for the repository, to the right of "{% data variables.product.prodname_GH_advanced_security %}", click **Enable**.
1. Review the impact of enabling {% data variables.product.prodname_advanced_security %}, then click **Enable {% data variables.product.prodname_GH_advanced_security %} for this repository**.
1. When you enable {% data variables.product.prodname_advanced_security %}, {% data variables.product.prodname_secret_scanning %} may automatically be enabled for the repository due to the organization's settings. If "{% data variables.product.prodname_secret_scanning_caps %}" is shown with an **Enable** button, you still need to enable {% data variables.product.prodname_secret_scanning %} by clicking **Enable**. If you see a **Disable** button, {% data variables.product.prodname_secret_scanning %} is already enabled.

   ![Screenshot of the "{% data variables.product.prodname_secret_scanning_caps %}" section of the "Code security and analysis" page, with the "Enable" button highlighted in a dark orange outline.](/assets/images/help/repository/enable-secret-scanning-alerts.png){% endif %}{% ifversion fpt %}
1. Scroll down to the bottom of the page, and click **Enable** for {% data variables.product.prodname_secret_scanning %}. If you see a **Disable** button, it means that {% data variables.product.prodname_secret_scanning %} is already enabled for the repository.

   ![Screenshot of the "{% data variables.product.prodname_secret_scanning_caps %}" section of the "Code security and analysis" page, with the "Enable" button highlighted in a dark orange outline.](/assets/images/help/repository/enable-secret-scanning-alerts.png){% endif %}

A repository administrator can choose to disable {% data variables.product.prodname_secret_scanning %} for a repository at any time. For more information, see "[AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository)."

## Next steps

* "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/viewing-alerts)"
* "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/about-alerts)"
