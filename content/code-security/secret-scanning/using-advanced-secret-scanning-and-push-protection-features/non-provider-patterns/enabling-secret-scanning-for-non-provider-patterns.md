---
title: Enabling secret scanning for non-provider patterns
allowTitleToDifferFromFilename: true
intro: 'You can enable {% data variables.product.prodname_secret_scanning %} to detect additional potential secrets at the {% ifversion security-configurations %}repository and organization levels{% else %}repository level{% endif %}.'
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

For more information about non-provider patterns, see "{% ifversion fpt or ghec %}[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#about-user--alerts){% else %}[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#about-secret-scanning-alerts){% endif %}."

{% ifversion security-configurations %}

### Enabling detection of non-provider patterns for a repository

{%endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under {% data variables.product.prodname_secret_scanning_caps %}, to the right of "Non-provider patterns", click **Enable**.

{% ifversion security-configurations %}

### Enabling detection of non-provider patterns for an organization

You can enable scanning for non-provider patterns at the organization level{% ifversion org-npp-enablement-security-configurations %} using the {% data variables.product.prodname_github_security_configuration %} or by applying a custom security configuration{% endif %}. For more information, see {% ifversion org-npp-enablement-security-configurations %}"[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization)" and "[AUTOTITLE](/code-security/securing-your-organization/meeting-your-specific-security-needs-with-custom-security-configurations/creating-a-custom-security-configuration){% elsif ghes < 3.15 %}"[Configuring global secret scanning settings](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization#configuring-global-secret-scanning-settings){% endif %}."

{% endif %}

## Further reading

* "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)"
