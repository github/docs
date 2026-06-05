---
title: Editing a custom security configuration
shortTitle: Edit custom configuration
intro: Meet the security needs of your repositories by editing your {% data variables.product.prodname_custom_security_configuration %}.
permissions: '{% data reusables.permissions.security-org-enable %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
redirect_from:
  - /code-security/securing-your-organization/managing-the-security-of-your-organization/editing-a-custom-security-configuration
contentType: how-tos
category:
  - Secure at scale
---

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. {% ifversion ghas-products %}Under "{% data variables.product.prodname_security_configurations_caps %}"{% else %}In the "Code {% data variables.product.prodname_security_configurations %}" section{% endif %}, click the name of the {% data variables.product.prodname_custom_security_configuration %} you want to edit.

    {% data reusables.security-configurations.default-configuration-exception-repo-transfers %}

1. Edit the name and description of your {% data variables.product.prodname_custom_security_configuration %} as desired.
1. Edit the enablement settings of your {% data variables.product.prodname_custom_security_configuration %} as desired.
1. In the "Policy" section, you can modify the configuration's enforcement status. Enforcing a configuration will block repository owners from changing features that are enabled or disabled by the configuration, but features that are not set aren't enforced. Next to "Enforce configuration", select **Enforce** or **Don't enforce** from the dropdown menu.

    {% data reusables.code-scanning.security-configuration-enforcement-edge-cases %}

1. To apply your changes, click **Update configuration**.
