---
title: Detaching repositories from their security configurations
shortTitle: Detach security configuration
intro: 'You can unlink repositories from their {% data variables.product.prodname_security_configurations %} and instead manage their security enablement settings at the repository level.'
permissions: '{% data reusables.security-configurations.security-configurations-permissions %}'
versions:
  feature: security-configurations
topics:
  - Advanced Security
  - Organizations
  - Security
---

{% data reusables.security-configurations.security-configurations-beta-note %}

## About detaching repositories from their {% data variables.product.prodname_security_configurations %}

If you decide that the security needs of a repository are too specific for a {% data variables.product.prodname_security_configuration %} to be useful, you can detach that repository from the linked configuration and instead manage security enablement settings at the repository level. Detaching a repository from a {% data variables.product.prodname_security_configuration %} will not change the existing security enablement settings for that repository. For an introduction to securing your repository at the repository level, see "[AUTOTITLE](/code-security/getting-started/securing-your-repository)."

Alternatively, if you want to apply a {% data variables.product.prodname_security_configuration %} to a repository that's already attached to a different configuration, you can apply the configuration as normal, and you do not need to detach the current configuration. For more information, see "[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization)" and "[AUTOTITLE](/code-security/securing-your-organization/meeting-your-specific-security-needs-with-custom-security-configurations/applying-a-custom-security-configuration)."

## Detaching repositories from linked {% data variables.product.prodname_security_configurations %}

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. Optionally, in the "Apply configurations" section, filter for specific repositories you would like to detach from their configurations. To learn more, see "[AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/filtering-repositories-in-your-organization-using-the-repository-table)."
1. In the repository table, select repositories with one of three methods:
    * Select each individual repository you would like to detach.
    * To select all repositories displayed on the current page of the repository table, select **NUMBER repositories**.
    * After selecting **NUMBER repositories**, to select _all_ repositories in your organization that match any filters you have applied, click **Select all**.
1. Select the **Apply configuration** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click **No configuration**.
1. To finish detaching your repositories from their linked {% data variables.product.prodname_security_configurations %}, in the "No configuration?" window, click **No configuration**.
