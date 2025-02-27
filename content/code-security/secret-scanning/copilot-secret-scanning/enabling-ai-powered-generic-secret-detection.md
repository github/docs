---
title: Enabling Copilot secret scanning's generic secret detection
shortTitle: Enable generic secret detection
intro: 'You can enable {% data variables.secret-scanning.generic-secret-detection %} for your repository or organization. Alerts for generic secrets, such as passwords, are displayed in a separate list on the {% data variables.product.prodname_secret_scanning %} alerts page.'
allowTitleToDifferFromFilename: true
permissions: '{% data reusables.permissions.security-repo-enable %}'
versions:
  feature: secret-scanning-ai-generic-secret-detection
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - AI
  - Copilot
redirect_from:
  - /code-security/secret-scanning/enabling-ai-powered-generic-secret-detection
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/generic-secret-detection/enabling-ai-powered-generic-secret-detection
---

## Enabling {% data variables.secret-scanning.generic-secret-detection %}

{% data reusables.secret-scanning.generic-secret-detection-policy-note %}

You can then enable {% data variables.secret-scanning.generic-secret-detection %} in the security settings page of your repository or organization.

{% data reusables.secret-scanning.copilot-secret-scanning-generic-secrets-subscription-note %}

### Enabling {% data variables.secret-scanning.generic-secret-detection %} for your repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
1. Under "Secret scanning", select the checkbox next to "Scan for generic secrets".

### Enabling {% data variables.secret-scanning.generic-secret-detection %} for your organization

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
1. In the "Security" section of the sidebar, click **{% octicon "codescan" aria-hidden="true" %} Code security** then **Global settings**.
1. Under "Secret scanning", select the checkbox next to "Scan for generic secrets".

For information on how to view alerts for generic secrets that have been detected using AI, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/viewing-alerts).

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/responsible-ai-generic-secrets)
* [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning)
