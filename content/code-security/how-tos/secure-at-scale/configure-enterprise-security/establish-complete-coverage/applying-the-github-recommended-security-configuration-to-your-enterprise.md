---
title: Applying the GitHub-recommended security configuration to your enterprise
shortTitle: Apply recommended configuration
intro: Secure your code with the security enablement settings created, managed, and recommended by {% data variables.product.github %}.
permissions: '{% data reusables.permissions.security-configuration-enterprise-enable %}'
versions:
  ghec: '*'
topics:
  - Advanced Security
  - Enterprise
  - Security
redirect_from:
  - /admin/managing-code-security/securing-your-enterprise/applying-the-github-recommended-security-configuration-to-your-enterprise
contentType: how-tos
---

## About the {% data variables.product.prodname_github_security_configuration %}

The {% data variables.product.prodname_github_security_configuration %} is a set of industry best practices and features that provide a robust, baseline security posture for enterprises. This configuration is created and maintained by subject matter experts at {% data variables.product.github %}, with the help of multiple industry leaders and experts. The {% data variables.product.prodname_github_security_configuration %} is designed to successfully reduce the security risks for low- and high-impact repositories. We recommend you apply this configuration to all the repositories in your enterprise.

The {% data variables.product.prodname_github_security_configuration %} includes {% data variables.product.prodname_GH_code_security %} and {% data variables.product.prodname_GH_secret_protection %} features. Applying the configuration to private and internal repositories will incur usage costs or require GHAS licenses. For more information, see [AUTOTITLE](/get-started/learning-about-github/about-github-advanced-security).

{% data reusables.security-configurations.github-recommended-warning-enterprise %}

## Applying the {% data variables.product.prodname_github_security_configuration %} to repositories in your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.advanced-security-tab %}
1. In the "{% data variables.product.github %} recommended" row of the configurations table for your enterprise, select the **Apply to** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click **All repositories** or **All repositories without configurations**.
{% data reusables.security-configurations.apply-configuration-by-default %}

{% data reusables.security-configurations.apply-configuration %}

{% data reusables.security-configurations.failure-handling-enterprise %}

## Enforcing the {% data variables.product.prodname_github_security_configuration %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.advanced-security-tab %}
1. In the "Configurations" section, select "{% data variables.product.company_short %} recommended".
1. In the "Policy" section, next to "Enforce configuration", select **Enforce** from the dropdown menu.
1. Click **Save configuration** to save your change to the {% data variables.product.prodname_github_security_configuration %}.

{% data reusables.code-scanning.custom-security-configuration-enforcement-edge-cases-enterprise %}
