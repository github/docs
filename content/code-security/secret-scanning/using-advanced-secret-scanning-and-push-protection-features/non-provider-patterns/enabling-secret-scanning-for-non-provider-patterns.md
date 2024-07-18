---
title: Enabling secret scanning for non-provider patterns
allowTitleToDifferFromFilename: true
intro: 'You can enable {% data variables.product.prodname_secret_scanning %} for non-provider patterns at the repository and organization levels.'
product: '{% data reusables.gated-features.push-protection-for-repos %}'
versions:
  feature: secret-scanning-non-provider-patterns
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Enable for non-provider patterns
---

## Enabling scanning for non-provider patterns

{% data reusables.secret-scanning.non-provider-patterns-beta %}

You can enable scanning for non-provider patterns. Non-provider patterns correspond to secrets such as private keys and they have a higher ratio of false positives.

For more information about non-provider patterns, see "{% ifversion fpt or ghec %}[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#about-user--alerts){% else %}[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#about-secret-scanning-alerts){% endif %}."

### Enabling detection of non-provider patterns for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under {% data variables.product.prodname_secret_scanning_caps %}, select the checkbox next to "Scan for non-provider patterns".

### Enabling detection of non-provider patterns for an organization

You can enable scanning for non-provider patterns at the organization level. For more information, see "[Configuring global secret scanning settings](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization#configuring-global-secret-scanning-settings)."

## Further reading

* "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)"
