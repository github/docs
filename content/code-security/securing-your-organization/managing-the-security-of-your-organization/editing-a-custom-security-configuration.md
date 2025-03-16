---
title: Editing a custom security configuration
shortTitle: Edit custom configuration
intro: 'Change the enablement settings in your {% data variables.product.prodname_custom_security_configuration %} to better meet the security needs of your repositories.'
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  feature: security-configurations
topics:
  - Code Security
  - Secret Protection
  - Organizations
  - Security
---

## About editing a {% data variables.product.prodname_custom_security_configuration %}

After creating and applying a {% data variables.product.prodname_custom_security_configuration %}, you may need to edit the enablement settings for that configuration to better secure your repositories. Any changes you make to the enablement settings of a {% data variables.product.prodname_security_configuration %} will automatically populate to all linked repositories.

To determine if your {% data variables.product.prodname_custom_security_configuration %} is meeting your security needs, see [AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/interpreting-security-findings).

{% ifversion security-configurations-cloud %}

> [!NOTE]
> The {% data variables.product.prodname_github_security_configuration %} is managed by {% data variables.product.company_short %} and cannot be edited. If you would like to customize your security enablement settings, you need to create a {% data variables.product.prodname_custom_security_configuration %}. For more information, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration).

{% endif %}

## Modifying your {% data variables.product.prodname_custom_security_configuration %}

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. In the "Code {% data variables.product.prodname_security_configurations %}" section, click the name of the {% data variables.product.prodname_custom_security_configuration %} you want to edit.

    {% data reusables.security-configurations.default-configuration-exception-repo-transfers %}

1. Edit the name and description of your {% data variables.product.prodname_custom_security_configuration %} as desired.
1. In the "Security settings" section, edit the enablement settings of your {% data variables.product.prodname_custom_security_configuration %} as desired.
1. In the "Policy" section, you can modify the configuration's enforcement status. Enforcing a configuration will block repository owners from changing features that are enabled or disabled by the configuration, but features that are not set aren't enforced. Next to "Enforce configuration", select **Enforce** or **Don't enforce** from the dropdown menu.

    {% data reusables.code-scanning.custom-security-configuration-enforcement-edge-cases %}

1. To apply your changes, click **Update configuration**.
