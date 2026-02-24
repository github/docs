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

{% data reusables.secret-scanning.extended-metadata-checks-note %}

This article shows how you can enable extended metadata checks for individual repositories through repository settings. Alternatively, you can enable them at scale using **security configurations** at the organization or enterprise level. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-organization-security/establish-complete-coverage/creating-a-custom-security-configuration) or [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/establish-complete-coverage/creating-a-custom-security-configuration-for-your-enterprise).

## Prerequisites

Before enabling metadata checks, you need to ensure that validity checks are enabled for the repository. See [AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-validity-checks-for-your-repository#enabling-validity-checks).

## Enabling extended metadata checks

{% ifversion fpt or ghec %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}{% ifversion ghas-products %}
1. Under "{% data variables.product.prodname_secret_protection %}" and "Validity checks", to the right of "Extended metadata", click **Enable**.{% else %}
1. Under "{% data variables.product.prodname_secret_protection %}" and "Validity checks", to the right of "Extended metadata", click **Enable**.{% endif %}

{% elsif ghes %}

{% data reusables.secret-scanning.validity-check-enablement %}
1. Under "{% data variables.product.prodname_secret_protection %}", to the right of "Extended metadata", click **Enable**.

{% endif %}

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning)
