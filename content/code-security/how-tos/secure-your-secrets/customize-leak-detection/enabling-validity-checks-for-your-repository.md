---
title: Enabling validity checks for your repository
shortTitle: Enable validity checks
intro: Enabling validity checks on your repository helps you prioritize the remediation of alerts as it tells you if a secret is active or inactive.
product: '{% data reusables.gated-features.partner-pattern-validity-check-ghas %}'
versions:
  feature: secret-scanning-validity-check-partner-patterns
contentType: how-tos
redirect_from:
  - /code-security/secret-scanning/enabling-secret-scanning-features/enabling-validity-checks-for-your-repository
category:
  - Protect your secrets
---

You can enable validity checks for individual repositories through repository settings. Validity checks verify whether detected secrets are still active, helping you prioritize remediation efforts. For information about what validity checks are and how they work, see [AUTOTITLE](/code-security/concepts/secret-security/about-validity-checks).

For a list of which secret patterns support validity checks, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns).

{% ifversion ghes %}

Before you can enable validity checks for your repository, your site administrator must enable the feature for the whole instance. See [AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-secret-scanning-for-your-appliance).

{% endif %}

## Enabling validity checks

To enable validity checks from the UI:

{% data reusables.secret-scanning.validity-check-enablement %}
1. Scroll to the bottom of the page and click **Save changes**.

> [!NOTE]
> You can also use the REST API to enable validity checks for partner patterns for your repository. For more information, see [AUTOTITLE](/rest/repos/repos#update-a-repository).

Alternatively, organization owners and enterprise administrators can enable the feature for all repositories in the organization or enterprise. For more information, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration) and [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/creating-a-custom-security-configuration-for-your-enterprise).

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)
