---
title: Deleting a custom security configuration
shortTitle: Delete custom configuration
intro: 'You can delete unnecessary {% data variables.product.prodname_custom_security_configurations %} in your organization.'
permissions: '{% data reusables.security-configurations.security-configurations-permissions %}'
versions:
  feature: security-configurations
topics:
  - Advanced Security
  - Organizations
  - Security
---

{% data reusables.security-configurations.security-configurations-beta-note %}

## About deleting a {% data variables.product.prodname_custom_security_configuration %}

If you no longer need a {% data variables.product.prodname_custom_security_configuration %}, you can delete that configuration to ensure it will not be applied to any repositories in the future. If you are deleting a {% data variables.product.prodname_custom_security_configuration %} because you want to change the security enablement settings in that configuration, you can instead edit the configuration. For more information, see "[AUTOTITLE](/code-security/securing-your-organization/managing-the-security-of-your-organization/editing-a-custom-security-configuration)."

{% warning %}

**Warning:** Deleting a {% data variables.product.prodname_custom_security_configuration %} will detach all repositories that are linked to that configuration. The existing security settings for those repositories will be unchanged, but you must apply a different {% data variables.product.prodname_security_configuration %} or manage their security settings at the repository level to keep their settings up to date.

{% endwarning %}

## Deleting a {% data variables.product.prodname_custom_security_configuration %} from your organization

{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
{% data reusables.security-configurations.view-configurations-page %}
1. In the configurations table, click the name of the {% data variables.product.prodname_custom_security_configuration %} you want to delete.
1. Scroll to the bottom of the "Security settings" section, then click **Delete configuration**.
1. In the "Delete this configuration?" window, read the warning to confirm you are comfortable deleting the {% data variables.product.prodname_custom_security_configuration %}, then click **Delete configuration**.
