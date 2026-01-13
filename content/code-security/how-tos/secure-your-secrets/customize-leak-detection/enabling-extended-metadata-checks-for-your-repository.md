---
title: Enabling extended metadata checks for your repository
shortTitle: Enable metadata checks
intro: Learn how to enable extended metadata checks for detected secrets so alerts detected by {% data variables.product.prodname_secret_scanning %} include additional information that help you assess and remediate leaks faster.
product: '{% data reusables.gated-features.metadata-checks-ghas %}'
permissions: '{% data reusables.permissions.push-protection %}'
versions:
  feature: secret-scanning-extended-metadata-checks
contentType: how-tos
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
redirect_from:
  - /code-security/secret-scanning/enabling-secret-scanning-features/enabling-extended-metadata-checks-for-your-repository
---

{% data reusables.secret-scanning.metadata-checks-public-preview %}

## About extended metadata checks

Extended metadata checks, often referred to as analyzers in other tools, are a {% data variables.product.prodname_secret_scanning %} feature that you can enable for supported tokens.

When you enable extended metadata checks for tokens, {% data variables.product.prodname_secret_scanning %} provides you with additional information about detected secrets, such as ownership and contact details. This information helps you:

* **Gain deeper insight into detected secrets**: Know who owns a secret.
* **Improve incident response**: Quickly identify responsible teams or individuals when a secret is leaked.
* **Enhance compliance**: Ensure secrets align with your organization’s governance and security policies.

This information appears on {% data variables.product.github %}, in the page for the related secret scanning alert, helping you prioritize and remediate exposures more efficiently.

Metadata availability varies depending on the secret type. For more information, see [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/evaluating-alerts#verifying-token-metadata).

## Enabling extended metadata checks

Before enabling metadata checks, you need to ensure that validity checks are enabled for the repository. See [AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-validity-checks-for-your-repository#enabling-validity-checks).

{% data reusables.secret-scanning.validity-check-enablement %}
1. Under "{% data variables.product.prodname_secret_protection %}", to the right of "Extended metadata", click **Enable**.

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)
