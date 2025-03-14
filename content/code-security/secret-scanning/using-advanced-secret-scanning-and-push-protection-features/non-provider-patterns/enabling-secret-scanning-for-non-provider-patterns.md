---
title: Enabling secret scanning for non-provider patterns
allowTitleToDifferFromFilename: true
intro: 'You can enable {% data variables.product.prodname_secret_scanning %} to detect additional potential secrets at the {% ifversion security-configurations %}repository and organization levels{% else %}repository level{% endif %}.'
permissions: '{% data reusables.permissions.security-repo-enable %}'
product: '{% data reusables.gated-features.secret-scanning-non-provider-patterns %}'
versions:
  feature: secret-scanning-non-provider-patterns
type: how_to
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
  - Repositories
shortTitle: Enable for non-provider patterns
---

## Enabling scanning for non-provider patterns

{% data reusables.secret-scanning.non-provider-patterns-beta %}

You can enable scanning for non-provider patterns. Non-provider patterns correspond to secrets such as private keys and they have a higher ratio of false positives.

For more information about non-provider patterns, see "{% ifversion fpt or ghec %}[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#about-user--alerts){% else %}[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#about-secret-scanning-alerts){% endif %}."

{% ifversion security-configurations %}

### Enabling detection of non-provider patterns for a repository

{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under {% data variables.product.prodname_secret_scanning_caps %}, to the right of "Non-provider patterns", click **Enable**.

{% ifversion security-configurations %}

### Enabling detection of non-provider patterns for an organization

You can enable scanning for non-provider patterns at the organization level {% ifversion security-configurations-cloud %}using the {% data variables.product.prodname_github_security_configuration %} or {% endif %}by applying a custom security configuration. For more information, see {% ifversion security-configurations-cloud %}[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization) and {% endif %}[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration).

{% endif %}

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)
