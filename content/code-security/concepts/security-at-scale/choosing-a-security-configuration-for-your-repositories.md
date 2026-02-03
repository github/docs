---
title: Choosing a security configuration for your repositories
shortTitle: Choose security configuration
intro: Find out which type of {% data variables.product.prodname_security_configuration %} will meet the security needs of the repositories in your organization.
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  feature: security-configurations-cloud
topics:
  - Code Security
  - Secret Protection
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/choosing-a-security-configuration-for-your-repositories
contentType: concepts
---

## About choosing a {% data variables.product.prodname_security_configuration %}

{% data reusables.security-configurations.define-security-configurations %} {% data variables.product.company_short %} offers two types of {% data variables.product.prodname_security_configurations %}:

* The {% data variables.product.prodname_github_security_configuration %}
* {% data variables.product.prodname_custom_security_configurations_caps %}

_We recommend that organizations initially apply the {% data variables.product.prodname_github_security_configuration %}_. After you have applied the {% data variables.product.prodname_github_security_configuration %} to repositories in your organization, you can evaluate the security findings for each repository and determine if you instead want to create and apply a {% data variables.product.prodname_custom_security_configuration %}.

Currently, only one {% data variables.product.prodname_security_configuration %} can be applied to a repository at a time.

## Choosing the {% data variables.product.prodname_github_security_configuration %}

The {% data variables.product.prodname_github_security_configuration %} offers a number of benefits:

* It is created and managed by {% data variables.product.company_short %}'s subject matter experts.
* It is the quickest {% data variables.product.prodname_security_configuration %} to apply to all repositories in your organization.
* It is designed to effectively secure both low- and high-impact repositories.

The {% data variables.product.prodname_github_security_configuration %} includes {% data variables.product.prodname_GH_code_security %} and {% data variables.product.prodname_GH_secret_protection %} features. Applying the configuration to private and internal repositories in your organization will incur usage costs or require licenses.

To start securing repositories in your organization with the {% data variables.product.prodname_github_security_configuration %}, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization).

## Choosing a {% data variables.product.prodname_custom_security_configuration %}

If you are familiar with {% data variables.product.company_short %}'s security products, and you have specific security needs that the {% data variables.product.prodname_github_security_configuration %} can't meet, you can create and apply {% data variables.product.prodname_custom_security_configurations %}. With {% data variables.product.prodname_custom_security_configurations %}, you can:

* Edit the enablement settings for different security features
* Create several configurations for repositories to reflect their different levels of visibility, risk tolerance, and impact

You can also choose whether or not you want to include {% data variables.product.prodname_GH_code_security %} or {% data variables.product.prodname_GH_secret_protection %} features in a configuration. If you do, keep in mind that these features incur usage costs (or require {% data variables.product.prodname_GHAS %} licenses) when applied to private and internal repositories.

To start securing repositories in your organization with {% data variables.product.prodname_custom_security_configurations %}, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration).
