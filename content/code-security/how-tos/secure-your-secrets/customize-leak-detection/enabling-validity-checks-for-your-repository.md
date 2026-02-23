---
title: Enabling validity checks for your repository
shortTitle: Enable validity checks
intro: Enabling validity checks on your repository helps you prioritize the remediation of alerts as it tells you if a secret is active or inactive.
product: '{% data reusables.gated-features.partner-pattern-validity-check-ghas %}'
versions:
  feature: secret-scanning-validity-check-partner-patterns
contentType: how-tos
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
redirect_from:
  - /code-security/secret-scanning/enabling-secret-scanning-features/enabling-validity-checks-for-your-repository
---

You can enable validity checks for individual repositories through repository settings. Validity checks verify whether detected secrets are still active, helping you prioritize remediation efforts. For information about what validity checks are and how they work, see [AUTOTITLE](/code-security/concepts/secret-security/about-validity-checks).

## Enabling validity checks

{% data reusables.secret-scanning.validity-check-enablement %}
1. Scroll to the bottom of the page and click **Save changes**.

>[!NOTE] You can also use the REST API to enable validity checks for partner patterns for your repository. For more information, see [AUTOTITLE](/rest/repos/repos#update-a-repository).

Alternatively, organization owners and enterprise administrators can enable the feature for all repositories in the organization or enterprise. For more information on enabling at the organization-level, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration).
For more information on enabling at the enterprise-level, see [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/creating-a-custom-security-configuration-for-your-enterprise).

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)
