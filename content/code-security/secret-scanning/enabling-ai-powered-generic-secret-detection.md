---
title: Enabling AI-powered generic secret detection
shortTitle: Enable generic secret detection
intro: 'You can enable AI-powered generic secret detection for your repository. Alerts for generic secrets, such as passwords, are displayed in a separate list on the {% data variables.product.prodname_secret_scanning %} alerts page.'
versions:
  feature: secret-scanning-ai-generic-secret-detection
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - AI
---

{% data reusables.secret-scanning.generic-secret-detection-ai %}

## Enabling AI-powered generic secret detection for your repository

To use generic secret detection, your enterprise owner must first set a policy at the enterprise level.

You can then enable the feature in the "Code security and analysis" settings page of your repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
{% data reusables.repositories.navigate-to-ghas-settings %}
1. Under "Secret scanning", select the checkbox next to "Use AI detection to find additional secrets".

For information on how to view alerts for generic secrets that have been detected using AI, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)."

## Further reading

- [AUTOTITLE](/code-security/secret-scanning/about-the-detection-of-generic-secrets-with-secret-scanning)
- [AUTOTITLE](/code-security/secret-scanning/about-secret-scanning)
