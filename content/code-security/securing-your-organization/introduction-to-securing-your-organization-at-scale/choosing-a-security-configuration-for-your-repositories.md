---
title: Choosing a security configuration for your repositories
shortTitle: Choose security configuration
intro: 'Find out which type of {% data variables.product.prodname_security_configuration %} will meet the security needs of the repositories in your organization.'
permissions: '{% data reusables.security-configurations.security-configurations-permissions %}'
versions:
  feature: security-configurations
topics:
  - Advanced Security
  - Organizations
  - Security
---

{% data reusables.security-configurations.security-configurations-beta-note-opt-out %}

## About choosing a {% data variables.product.prodname_security_configuration %}

{% data reusables.security-configurations.define-security-configurations %} {% data variables.product.company_short %} offers two types of {% data variables.product.prodname_security_configurations %}:

* The {% data variables.product.prodname_github_security_configuration %}
* {% data variables.product.prodname_custom_security_configurations_caps %}

_We recommend that organizations initially apply the {% data variables.product.prodname_github_security_configuration %}_. After you have applied the {% data variables.product.prodname_github_security_configuration %} to repositories in your organization, you can evaluate the security findings for each repository and determine if you instead want to create and apply a {% data variables.product.prodname_custom_security_configuration %}.

## Choosing the {% data variables.product.prodname_github_security_configuration %}

The {% data variables.product.prodname_github_security_configuration %} offers a number of benefits:

* It is created and managed by {% data variables.product.company_short %}'s subject matter experts.
* It is the quickest {% data variables.product.prodname_security_configuration %} to apply to all repositories in your organization.
* It is designed to effectively secure both low- and high-impact repositories.

To start securing repositories in your organization with the {% data variables.product.prodname_github_security_configuration %}, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization)."

## Choosing a {% data variables.product.prodname_custom_security_configuration %}

If you are familiar with {% data variables.product.company_short %}'s security products, and you have specific security needs that the {% data variables.product.prodname_github_security_configuration %} can't meet, you can create and apply {% data variables.product.prodname_custom_security_configurations %}. With {% data variables.product.prodname_custom_security_configurations %}, you can:

* Edit the enablement settings for different security features
* Create several configurations for repositories with different security needs
* Manage your {% data variables.product.prodname_GH_advanced_security %} licensing by including or excluding {% data variables.product.prodname_GH_advanced_security %} features for a particular configuration

To start securing repositories in your organization with {% data variables.product.prodname_custom_security_configurations %}, see "[AUTOTITLE](/code-security/securing-your-organization/meeting-your-specific-security-needs-with-custom-security-configurations/creating-a-custom-security-configuration)."
