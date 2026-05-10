---
title: Applying a custom security configuration
shortTitle: Apply custom configuration
intro: You can apply your {% data variables.product.prodname_custom_security_configuration %} to repositories in your organization to meet the specific security needs of those repositories.
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /code-security/securing-your-organization/meeting-your-specific-security-needs-with-custom-security-configurations/applying-a-custom-security-configuration
  - /code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-a-custom-security-configuration
contentType: how-tos
category:
  - Secure at scale
---

## About applying a {% data variables.product.prodname_custom_security_configuration %}

After you create a {% data variables.product.prodname_custom_security_configuration %}, you need to apply it to repositories in your organization to enable the configuration's settings on those repositories. To learn how to create a {% data variables.product.prodname_custom_security_configuration %}, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration).

## Applying your {% data variables.product.prodname_custom_security_configuration %} to repositories in your organization

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. Optionally, in the "Apply configurations" section, filter for specific repositories you would like to apply your {% data variables.product.prodname_custom_security_configuration %} to. To learn how to filter the repository table, see [AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/filtering-repositories-in-your-organization-using-the-repository-table).
{% data reusables.security-configurations.select-repos %}
1. Select the **Apply configuration** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click **YOUR-CONFIGURATION-NAME**.

    {% data reusables.security-configurations.default-configuration-exception-repo-transfers %}

{% data reusables.security-configurations.apply-configuration %}

>[!NOTE]
> If you apply an enforced configuration, this information is reported in the list of repositories. An enforced configuration means that repository owners are blocked from changing features that have been enabled or disabled in the configuration, but features that are not set aren't enforced.

## Next steps

To learn how to monitor security alerts in your organization, see [AUTOTITLE](/code-security/how-tos/view-and-interpret-data/analyze-organization-data/find-insecure-repositories).

{% data reusables.security-configurations.edit-configuration-next-step %}

{% data reusables.security-configurations.troubleshooting-next-step %}
