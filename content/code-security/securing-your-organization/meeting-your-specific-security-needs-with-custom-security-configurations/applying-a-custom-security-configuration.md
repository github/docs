---
title: Applying a custom security configuration
shortTitle: Apply custom configuration
intro: 'You can apply your {% data variables.product.prodname_custom_security_configuration %} to repositories in your organization to meet the specific security needs of those repositories.'
permissions: '{% data reusables.security-configurations.security-configurations-permissions %}'
versions:
  feature: security-configurations
topics:
  - Advanced Security
  - Organizations
  - Security
---

{% data reusables.security-configurations.security-configurations-beta-note %}

## About applying a {% data variables.product.prodname_custom_security_configuration %}

After you create a {% data variables.product.prodname_custom_security_configuration %}, you need to apply it to repositories in your organization to enable the configuration's settings on those repositories. To learn how to create a {% data variables.product.prodname_custom_security_configuration %}, see "[AUTOTITLE](/code-security/securing-your-organization/meeting-your-specific-security-needs-with-custom-security-configurations/creating-a-custom-security-configuration)."

## Applying your {% data variables.product.prodname_custom_security_configuration %} to repositories in your organization

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. Optionally, in the "Apply configurations" section, filter for specific repositories you would like to apply your {% data variables.product.prodname_custom_security_configuration %} to. To learn how to filter the repository table, see "[AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/filtering-repositories-in-your-organization-using-the-repository-table)."
1. In the repository table, select repositories with one of three methods:
     * Select each repository you would like to apply the {% data variables.product.prodname_security_configuration %} to.
     * To select all repositories displayed on the current page of the repository table, select **NUMBER repositories**.
     * After selecting **NUMBER repositories**, to select _all_ repositories in your organization that match any filters you have applied, click **Select all**.{% ifversion enforce-security-configurations %}
     >[!NOTE]
     > The repository table will show which repositories have an enforced configuration{% ifversion enforce-security-configurations-beta %} (beta){% endif %}. This means that repository owners will be blocked from changing features that have been enabled or disabled in the configuration, but features that are not set aren't enforced.{% endif %}
1. Select the **Apply configuration** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click **YOUR-CONFIGURATION-NAME**.
{% data reusables.security-configurations.apply-configuration-by-default %}

    {% data reusables.security-configurations.default-configuration-exception-repo-transfers %}

{% data reusables.security-configurations.apply-configuration %}

## Next steps

To learn how to interpret security findings from your {% data variables.product.prodname_custom_security_configuration %} on a repository, see "[AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/interpreting-security-findings-on-a-repository)."

{% data reusables.security-configurations.edit-configuration-next-step %}

{% data reusables.security-configurations.troubleshooting-next-step %}
