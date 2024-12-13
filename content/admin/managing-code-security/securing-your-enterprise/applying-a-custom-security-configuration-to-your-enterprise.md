---
title: Applying a custom security configuration to your enterprise
shortTitle: Apply custom configuration
intro: 'You can apply your {% data variables.product.prodname_custom_security_configuration %} to organizations and repositories in your organization to meet the specific security needs of your enterprise.'
permissions: '{% data reusables.permissions.security-configuration-enterprise-enable %}'
versions:
  feature: security-configuration-enterprise-level
topics:
  - Advanced Security
  - Organizations
  - Security
---

## About applying a {% data variables.product.prodname_custom_security_configuration %}

After you create a {% data variables.product.prodname_custom_security_configuration %}, you need to apply it to repositories in your enterprise to enable the configuration's settings on those repositories.

{% data reusables.security-configurations.security-features-use-actions %}

## Applying your {% data variables.product.prodname_custom_security_configuration %} to repositories in your enterprise

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. In the left sidebar, click **Code security**.
1. To the right of the configuration you want to apply, select the **Apply to** {% octicon "triangle-down" aria-hidden="true" %} dropdown menu, then click **All repositories** or **All repositories without configurations**.
{% data reusables.security-configurations.apply-configuration-by-default %}

{% data reusables.security-configurations.apply-configuration %}

{% data reusables.security-configurations.failure-handling-enterprise %}

## Next steps

To learn how to edit your {% data variables.product.prodname_custom_security_configuration %}, see [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/editing-a-custom-security-configuration).
