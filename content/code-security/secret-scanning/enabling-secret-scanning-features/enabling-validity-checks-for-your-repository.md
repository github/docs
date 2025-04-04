---
title: Enabling validity checks for your repository
shortTitle: Enable validity checks
intro: 'Enabling validity checks on your repository helps you prioritize the remediation of alerts as it tells you if a secret is active or inactive.'
product: '{% data reusables.gated-features.partner-pattern-validity-check-ghas %}'
versions:
  feature: secret-scanning-validity-check-partner-patterns
type: how_to
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
---

## About validity checks

You can enable validity checks for secrets identified as service provider tokens for your repository. Once enabled, {% data variables.product.company_short %} will periodically check the validity of a detected credential by sending the secret directly to the provider, as part of {% data variables.product.company_short %}'s secret scanning partnership program. {% data reusables.secret-scanning.partner-program-link %}

{% data variables.product.company_short %} displays the validation status of the secret in the alert view, so you can see if the secret is `active`, `inactive`, or if the validation status is `unknown`. You can optionally perform an "on-demand" validity check for the secret in the alert view.

You can additionally choose to enable validity checks for partner patterns. Once enabled, {% data variables.product.company_short %} will periodically check the validity of a detected credential by sending the secret directly to the provider, as part of {% data variables.product.company_short %}'s formal secret scanning partnership program. {% data variables.product.company_short %} typically makes GET requests to check the validity of the credential, picks the least intrusive endpoints, and selects endpoints that don't return any personal information.

{% data variables.product.company_short %} displays the validation status of the secret in the alert view.

You can filter by validation status on the alerts page, to help you prioritize which alerts you need to take action on.

> [!NOTE]
> {% data variables.product.company_short %} typically makes GET requests to check the validity of the credential, picks the least intrusive endpoints, and selects endpoints that don't return any personal information.

For more information on using validity checks, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/evaluating-alerts#checking-a-secrets-validity).

## Enabling validity checks

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}{% ifversion ghas-products %}
1. Under "{% data variables.product.prodname_secret_protection %}", to the right of "Validity checks", click **Enable**.{% else %}
{% data reusables.secret-scanning.validity-check-auto-enable %}{% endif %}

You can also use the REST API to enable validity checks for partner patterns for your repository. For more information, see [AUTOTITLE](/rest/repos/repos#update-a-repository).

Alternatively, organization owners and enterprise administrators can enable the feature for all repositories in the organization or enterprise. For more information on enabling at the organization-level, see [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration).
For more information on enabling at the enterprise-level, see [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/creating-a-custom-security-configuration-for-your-enterprise).

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)
