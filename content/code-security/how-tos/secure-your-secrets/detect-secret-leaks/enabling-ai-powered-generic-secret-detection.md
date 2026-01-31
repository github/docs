---
title: Enabling Copilot secret scanning's generic secret detection
shortTitle: Enable generic secret detection
intro: You can enable {% data variables.secret-scanning.generic-secret-detection %} for your repository or organization. Alerts for generic secrets, such as passwords, are displayed in a separate list on the {% data variables.product.prodname_secret_scanning %} alerts page.
allowTitleToDifferFromFilename: true
permissions: '{% data reusables.permissions.security-repo-enable %}'
versions:
  feature: secret-scanning-ai-generic-secret-detection
contentType: how-tos
topics:
  - Secret scanning
  - Secret Protection
  - AI
  - Copilot
redirect_from:
  - /code-security/secret-scanning/enabling-ai-powered-generic-secret-detection
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/generic-secret-detection/enabling-ai-powered-generic-secret-detection
  - /code-security/secret-scanning/copilot-secret-scanning/enabling-ai-powered-generic-secret-detection
---

## Enabling {% data variables.secret-scanning.generic-secret-detection %}

{% data reusables.secret-scanning.generic-secret-detection-policy-note %}

You can enable {% data variables.secret-scanning.generic-secret-detection %} in the security settings page of your repository or organization.

{% data reusables.secret-scanning.copilot-secret-scanning-generic-secrets-subscription-note %}

### Enabling {% data variables.secret-scanning.generic-secret-detection %} for your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Under "{% data variables.product.prodname_secret_protection %}", to the right of "Scan for generic passwords", click **Enable**.

### Enabling {% data variables.secret-scanning.generic-secret-detection %} for your organization

You must configure {% data variables.secret-scanning.generic-secret-detection %} for your organization using a {% data variables.product.prodname_custom_security_configuration %}. You can then apply the {% data variables.product.prodname_security_configuration %} to all (or selected) repositories in your organization.

1. Create a new {% data variables.product.prodname_custom_security_configuration %}, or edit an existing one. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration#creating-a-custom-security-configuration).
1. When creating the custom security configuration, ensure that "{% data variables.product.prodname_secret_protection %}" is set to **Enabled**, and that the dropdown menu for "Scan for generic secrets" is also set to **Enabled**.
1. Apply the {% data variables.product.prodname_custom_security_configuration %} to one or more repositories. For more information, see [Applying a {% data variables.product.prodname_custom_security_configuration %}](/code-security/securing-your-organization/meeting-your-specific-security-needs-with-custom-security-configurations/applying-a-custom-security-configuration).

For information on how to view alerts for generic secrets that have been detected using AI, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/viewing-alerts).

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/responsible-ai-generic-secrets)
* [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning)
