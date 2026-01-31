---
title: Detaching repositories from their security configurations
shortTitle: Detach security configuration
intro: You can unlink repositories from their {% data variables.product.prodname_security_configurations %} and instead manage their security enablement settings at the repository level.
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  feature: security-configurations
topics:
  - Code Security
  - Secret Protection
  - Organizations
  - Security
redirect_from:
  - /code-security/securing-your-organization/managing-the-security-of-your-organization/detaching-repositories-from-their-security-configurations
contentType: how-tos
---

## About detaching repositories from their {% data variables.product.prodname_security_configurations %}

If you decide that the security needs of a repository are too specific for a {% data variables.product.prodname_security_configuration %} to be useful, you can detach that repository from the linked configuration and instead manage security enablement settings at the repository level. Detaching a repository from a {% data variables.product.prodname_security_configuration %} will not change the existing security enablement settings for that repository. For an introduction to securing your repository at the repository level, see [AUTOTITLE](/code-security/getting-started/securing-your-repository).

Alternatively, if you want to apply a {% data variables.product.prodname_security_configuration %} to a repository that's already attached to a different configuration, you can apply the configuration as normal, and you do not need to detach the current configuration. For more information, see {% ifversion security-configurations-cloud %}[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization) and {% endif %}[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration).

## Detaching repositories from linked {% data variables.product.prodname_security_configurations %}

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. Optionally, in the "Apply configurations" section, filter for specific repositories you would like to detach from their configurations. To learn more, see [AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/filtering-repositories-in-your-organization-using-the-repository-table).
{% data reusables.security-configurations.select-repos %}
1. Select the **Apply configuration** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click **No configuration**.
1. To finish detaching your repositories from their linked {% data variables.product.prodname_security_configurations %}, in the "No configuration?" window, click **No configuration**.
