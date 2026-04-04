{% ifversion dependabot-malware-alerts %}
1. In the "Findings" section of the sidebar, select the {% octicon "dependabot" aria-hidden="true" aria-label="dependabot" %} **{% data variables.product.prodname_dependabot %}** {% octicon "chevron-down" aria-hidden="true" aria-label="chevron-down" %} dropdown menu, then click **Vulnerabilities**.
{% else %}
1. In the "Vulnerability alerts" sidebar of security overview, click **{% data variables.product.prodname_dependabot %}**. If this option is missing, it means you don't have access to security alerts and need to be given access. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts).

   ![Screenshot of security overview, with the "Dependabot" tab highlighted with a dark orange outline.](/assets/images/enterprise/repository/dependabot-alerts-tab.png)
{% endif %}
