---
title: Deleting a custom security configuration
shortTitle: Delete custom configuration
intro: 'You can delete unnecessary {% data variables.product.prodname_custom_security_configurations %} in your enterprise.'
permissions: '{% data reusables.permissions.security-configuration-enterprise-enable %}'
versions:
  feature: security-configuration-enterprise-level
topics:
  - Advanced Security
  - Enterprise
  - Security
---

## About deleting a {% data variables.product.prodname_custom_security_configuration %}

If you no longer need a {% data variables.product.prodname_custom_security_configuration %}, you can delete that configuration to ensure it will not be applied to any repositories in the future. If you want to delete a {% data variables.product.prodname_custom_security_configuration %} because you want to change the security enablement settings in that configuration, consider editing the configuration instead. For more information, see [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/editing-a-custom-security-configuration).

> [!WARNING]
> Deleting a {% data variables.product.prodname_custom_security_configuration %} will detach all repositories that are linked to that configuration. The existing security settings for those repositories will be unchanged, but you must apply a different {% data variables.product.prodname_security_configuration %} or manage their security settings at the repository level to keep their settings up to date.

## Deleting a {% data variables.product.prodname_custom_security_configuration %} from your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Code security**.
1. In the configurations table, click the name of the {% data variables.product.prodname_custom_security_configuration %} you want to delete.
1. In the "Edit configuration" page, scroll to the bottom of the "Policy" section, then click **Delete configuration**.
1. Ensure you read the warning in the "Delete this configuration?" dialog, to confirm you are comfortable deleting the {% data variables.product.prodname_custom_security_configuration %}, then click **Delete configuration**.
