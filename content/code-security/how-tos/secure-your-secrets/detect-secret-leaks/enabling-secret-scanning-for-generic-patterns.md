---
title: Enabling secret scanning for generic patterns
allowTitleToDifferFromFilename: true
intro: You can enable {% data variables.product.prodname_secret_scanning %} to detect additional potential secrets at the repository and organization levels.
permissions: '{% data reusables.permissions.security-repo-enable %}'
product: '{% data reusables.gated-features.secret-scanning-non-provider-patterns %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: how-tos
shortTitle: Enable for generic patterns
redirect_from:
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/non-provider-patterns/enabling-secret-scanning-for-non-provider-patterns
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/non-provider-patterns
  - /code-security/how-tos/secure-your-secrets/detect-secret-leaks/enabling-secret-scanning-for-non-provider-patterns
category:
  - Protect your secrets
---

## Enabling scanning for generic patterns

You can enable scanning for generic patterns. Generic patterns correspond to secrets such as private keys.

For more information about generic patterns, see "{% ifversion fpt or ghec %}[AUTOTITLE](/code-security/reference/secret-security/supported-secret-scanning-patterns#supported-generic-patterns){% else %}[AUTOTITLE](/code-security/reference/secret-security/supported-secret-scanning-patterns#supported-generic-patterns){% endif %}."

### Enabling detection of generic patterns for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "{% data variables.product.UI_secret_protection_scanning %}", to the right of "Generic patterns", click **Enable**.

### Enabling detection of generic patterns for an organization

You can enable scanning for generic patterns at the organization level by applying a custom security configuration. For more information, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration).
