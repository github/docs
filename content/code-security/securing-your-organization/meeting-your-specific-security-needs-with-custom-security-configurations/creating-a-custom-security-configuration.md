---
title: Creating a custom security configuration
shortTitle: Create custom configuration
intro: 'Build a {% data variables.product.prodname_custom_security_configuration %} to meet the specific security needs of repositories in your organization.'
permissions: '{% data reusables.security-configurations.security-configurations-permissions %}'
versions:
  feature: security-configurations
topics:
  - Advanced Security
  - Organizations
  - Security
---

{% data reusables.security-configurations.security-configurations-beta-note %}

## About {% data variables.product.prodname_custom_security_configurations %}

We recommend securing your organization with the {% data variables.product.prodname_github_security_configuration %}, then evaluating the security findings on your repositories before configuring {% data variables.product.prodname_custom_security_configurations %}. For more information, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization)."

With {% data variables.product.prodname_custom_security_configurations %}, you can create collections of enablement settings for {% data variables.product.company_short %}'s security products to meet the specific security needs of your organization. For example, you can create a different {% data variables.product.prodname_custom_security_configuration %} for each group of repositories to reflect their different levels of visibility, risk tolerance, and impact.

## Creating a {% data variables.product.prodname_custom_security_configuration %}

{% note %}

**Note:** The enablement status of some security features is dependent on other, higher-level security features. For example, disabling dependency graph will also disable {% data variables.product.prodname_dependabot %}, vulnerability exposure analysis, and security updates. For {% data variables.product.prodname_security_configurations %}, dependent security features are indicated with indentation and {% octicon "reply" aria-hidden="true" %}.

{% endnote %}

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. In the "Code security configurations" section, click **New configuration**.
1. To help identify your {% data variables.product.prodname_custom_security_configuration %} and clarify its purpose on the "Code {% data variables.product.prodname_security_configurations %}" page, name your configuration and create a description.
1. In the "{% data variables.product.prodname_GH_advanced_security %} features" row, choose whether to include or exclude {% data variables.product.prodname_GH_advanced_security %} (GHAS) features. If you plan to apply a {% data variables.product.prodname_custom_security_configuration %} with GHAS features to private repositories, you must have available GHAS licenses for each active unique committer to those repositories, or the features will not be enabled. To learn more about committers and GHAS licensing, see "[AUTOTITLE](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)."
1. In the "Dependency graph" section of the security settings table, choose whether you want to enable, disable, or keep the existing settings for the following security features:
    * Dependency graph. To learn about dependency graph, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)."{%- ifversion maven-transitive-dependencies %}
    * Automatic dependency submission. To learn about automatic dependency submission, see "[AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-automatic-dependency-submission-for-your-repository)."{%- endif %}
    * {% data variables.product.prodname_dependabot %}. To learn about {% data variables.product.prodname_dependabot %}, see "[AUTOTITLE](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)."
    * Security updates. To learn about security updates, see "[AUTOTITLE](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)."

    {% note %}

    **Note:** You cannot manually change the enablement settings for vulnerable function calls. If {% data variables.product.prodname_GH_advanced_security %} features and {% data variables.product.prodname_dependabot_alerts %} are enabled, vulnerable function calls is also enabled. Otherwise, it is disabled.

    {% endnote %}

1. In the "{% data variables.product.prodname_code_scanning_caps %}" section of the security settings table, choose whether you want to enable, disable, or keep the existing settings for {% data variables.product.prodname_code_scanning %} default setup. To learn about default setup, see "[AUTOTITLE](/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning#about-default-setup)."
1. In the "{% data variables.product.prodname_secret_scanning_caps %}" section of the security settings table, choose whether you want to enable, disable, or keep the existing settings for the following security features:
    * {% data variables.product.prodname_secret_scanning_caps %}. To learn about {% data variables.product.prodname_secret_scanning %}, see "[AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning)."{% ifversion secret-scanning-validity-check-partner-patterns %}
    * Validity check. To learn more about validity checks for partner patterns, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/evaluating-alerts#checking-a-secrets-validity)".{% endif %}
    * Push protection. To learn about push protection, see "[AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection)."{% ifversion org-npp-enablement-security-configurations %}
    * Non-provider patterns. To learn more about scanning for non-provider patterns, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#non-provider-patterns)" and "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/viewing-alerts#other-alerts-list)."

       {% data reusables.secret-scanning.non-provider-patterns-beta %}{% endif %}

{% ifversion fpt or ghec %}
1. In the "Private vulnerability reporting" section of the security settings table, choose whether you want to enable, disable, or keep the existing settings for private vulnerability reporting. To learn about private vulnerability reporting, see "[AUTOTITLE](/code-security/security-advisories/working-with-repository-security-advisories/configuring-private-vulnerability-reporting-for-a-repository)."
{% endif %}
1. Optionally, in the "Policy" section, you can choose to automatically apply the {% data variables.product.prodname_security_configuration %} to newly created repositories depending on their visibility. Select the **None** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click **Public**, or **Private and internal**, or both.

    {% data reusables.security-configurations.default-configuration-exception-repo-transfers %}{% ifversion enforce-security-configurations %}
1. Optionally, in the "Policy" section, you can enforce the configuration and block repository owners from changing features that are enabled or disabled by the configuration (features that are not set aren't enforced). Next to "Enforce configuration", select **Enforce** from the dropdown menu.{% ifversion enforce-security-configurations-beta %} This feature is in beta, and is subject to change.{% endif %}

    >[!NOTE]
    {% data reusables.code-scanning.custom-security-configuration-enforcement-edge-cases %}

{% endif %}
1. To finish creating your {% data variables.product.prodname_custom_security_configuration %}, click **Save configuration**.

## Next steps

To apply your {% data variables.product.prodname_custom_security_configuration %} to repositories in your organization, see "[AUTOTITLE](/code-security/securing-your-organization/meeting-your-specific-security-needs-with-custom-security-configurations/applying-a-custom-security-configuration)."

{% data reusables.security-configurations.edit-configuration-next-step %}
