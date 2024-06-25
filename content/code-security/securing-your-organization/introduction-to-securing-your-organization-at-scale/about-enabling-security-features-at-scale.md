---
title: About enabling security features at scale
shortTitle: About organization security
intro: 'You can quickly secure your organization at scale with {% data variables.product.prodname_security_configurations %} and {% data variables.product.prodname_global_settings %}.'
permissions: '{% data reusables.security-configurations.security-configurations-permissions %}'
versions:
  feature: security-configurations
topics:
  - Advanced Security
  - Organizations
  - Security
---

{% data reusables.security-configurations.security-configurations-beta-note-opt-out %}

## About securing your organization

{% data variables.product.company_short %} offers many code security products and features including {% data variables.product.prodname_GH_advanced_security %}, a suite of features designed to protect your organization from vulnerabilities in your code, insecure dependencies, leaked secrets, and more. For more information on {% data variables.product.prodname_GH_advanced_security %}, see "[AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security)."

You can easily enable and manage {% data variables.product.company_short %}'s security features throughout your organization with {% data variables.product.prodname_security_configurations %}, which control repository-level security features, and {% data variables.product.prodname_global_settings %}, which control security features at the organization level. We recommend applying {% data variables.product.prodname_security_configurations %} _and_ customizing your {% data variables.product.prodname_global_settings %} to create a system that best meets the security needs of your organization.

## About {% data variables.product.prodname_security_configurations %}

{% data reusables.security-configurations.define-security-configurations %} There are two types of {% data variables.product.prodname_security_configuration %}:

* **The {% data variables.product.prodname_github_security_configuration %}**. This configuration is a collection of enablement settings created and managed by subject matter experts at {% data variables.product.company_short %}. The {% data variables.product.prodname_github_security_configuration %} is designed to adequately secure any repository, and can easily be applied to all repositories in your organization.
* **{% data variables.product.prodname_custom_security_configurations_caps %}**. These are configurations you can create and edit yourself, allowing you to choose different enablement settings for groups of repositories with specific security needs.

{% ifversion enforce-security-configurations %}

>[!NOTE]
{% data reusables.code-scanning.custom-security-configuration-enforcement-edge-cases %}

{% endif %}

Each repository can only have one {% data variables.product.prodname_security_configuration %} applied to it. To find out how you should get started with {% data variables.product.prodname_security_configurations %}, see "[AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/choosing-a-security-configuration-for-your-repositories)."

{% ifversion security-configurations-api %}
You can also create and manage security configurations using the REST API. For more information, see "[AUTOTITLE](/rest/code-security/configurations)."
{% endif %}

## About {% data variables.product.prodname_global_settings %}

While {% data variables.product.prodname_security_configurations %} determine repository-level security settings, {% data variables.product.prodname_global_settings %} determine your organization-level security settings, which are then inherited by all repositories. With {% data variables.product.prodname_global_settings %}, you can customize how security features analyze your organization, as well as create security managers with permission to manage security alerts and settings across your organization.

## Next steps

To determine which {% data variables.product.prodname_security_configurations %} are right for the repositories in your organization, see "[AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/choosing-a-security-configuration-for-your-repositories)."
