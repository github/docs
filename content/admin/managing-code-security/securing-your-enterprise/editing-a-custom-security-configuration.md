---
title: Editing a custom security configuration
shortTitle: Edit custom configuration
intro: 'Change the enablement settings in your {% data variables.product.prodname_custom_security_configuration %} to better meet the security needs of your repositories.'
permissions: '{% data reusables.permissions.security-configuration-enterprise-enable %}'
versions:
  feature: security-configuration-enterprise-level
topics:
  - Advanced Security
  - Organizations
  - Security
---

## About editing a {% data variables.product.prodname_custom_security_configuration %}

After creating and applying a {% data variables.product.prodname_custom_security_configuration %}, you may need to edit the enablement settings for that configuration to better secure your repositories. Any changes you make to the enablement settings of a {% data variables.product.prodname_security_configuration %} will automatically populate to all linked repositories.

{% ifversion security-configurations-cloud %}

> [!NOTE]
> The {% data variables.product.prodname_github_security_configuration %} is managed by {% data variables.product.github %} and cannot be edited. If you would like to customize your security enablement settings, you need to create a {% data variables.product.prodname_custom_security_configuration %}. For more information, see [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/creating-a-custom-security-configuration-for-your-enterprise).

{% endif %}

## Modifying your {% data variables.product.prodname_custom_security_configuration %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Code security**.
1. In the "Configurations" section, click the name of the {% data variables.product.prodname_custom_security_configuration %} you want to edit.
1. Edit the name and description of your {% data variables.product.prodname_custom_security_configuration %} as desired.
1. In the "Security settings" section, edit the enablement settings of your {% data variables.product.prodname_custom_security_configuration %} as desired.
1. In the "Policy" section, you can modify the configuration's enforcement status. Enforcing a configuration will block repository owners from changing features that are enabled or disabled by the configuration, but features that are not set aren't enforced. Next to "Enforce configuration", select **Enforce** or **Don't enforce** from the dropdown menu.

    {% data reusables.code-scanning.custom-security-configuration-enforcement-edge-cases-enterprise %}

1. To apply your changes, click **Update configuration**.
