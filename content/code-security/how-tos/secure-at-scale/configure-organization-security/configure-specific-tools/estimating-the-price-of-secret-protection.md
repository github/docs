---
title: Estimating the price of Secret Protection
shortTitle: Secret protection pricing
intro: Learn how to use the {% data variables.secret-scanning.pricing-calculator %} to estimate the monthly cost of {% data variables.product.prodname_GH_secret_protection %} for your repositories.
product: '{% data reusables.gated-features.secret-risk-assessment-calculators %}'
versions:
  feature: secret-risk-assessment
permissions: '{% data reusables.permissions.push-protection-roi-calculator %}'
topics:
  - Secret scanning
  - Secret Protection
contentType: how-tos
redirect_from:
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/estimating-the-price-of-secret-protection
---

## What is the pricing calculator?

You can use the {% data variables.secret-scanning.pricing-calculator %} on the secret risk assessment page to estimate the monthly cost of {% data variables.product.prodname_GH_secret_protection %} for your organization. This tool allows you to preview costs based on your current repositories and active committers, so you can plan for purchase or rollout decisions.

For more information about {% data variables.product.prodname_secret_protection %}, see [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/choosing-github-secret-protection).

## Prerequisites

You need to have generated a secret risk assessment for your organization. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/viewing-the-secret-risk-assessment-report-for-your-organization).

## Estimating the price of {% data variables.product.prodname_secret_protection %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.open-assessments-view %}
1. On the top right corner of the banner, click **Get started**.
1. In the dropdown, select **Preview cost and enable Secret Protection**.
1. In the calculator dialog, choose whether to estimate the cost for:
   * **All repositories**: Includes every repository in your organization.
   * **Selected repositories**: Choose specific repositories for the estimate.
   Once you've made your choices, the calculator shows:
      * The **estimated monthly cost** for your organization.
      * The **number of {% data variables.product.prodname_secret_protection %} licenses required**, based on active committers in the last 90 days for the selected repositories.
      * The **per-committer rate** (for example, $19 per active committer).
1. To proceed with enabling {% data variables.product.prodname_secret_protection %}, click **Review and enable**.

{% note %}

Did you successfully use the {% data variables.secret-scanning.pricing-calculator %} to estimate the cost of using {% data variables.product.prodname_secret_protection %} features on your organization?

<a href="https://docs.github.io/success-test/yes.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>Yes</span></a>  <a href="https://docs.github.io/success-test/no.html" target="_blank" class="btn btn-outline mt-3 mr-3 no-underline"><span>No</span></a>

{% endnote %}

## Understanding your results

* **The {% data variables.secret-scanning.pricing-calculator %} only provides an estimate.** Actual billing is based on the number of active committers in the selected private repositories during the billing period.
* The calculator **does not include costs for other {% data variables.product.prodname_GHAS %} features**.
* The calculator **dynamically calculates active committers** for each repository you select. If two repositories share the same number of committers, adding the second repository shows 0 additional committers, because enabling {% data variables.product.prodname_secret_protection %} for one also covers the other. This helps you quickly see the true incremental cost as you select repositories.
* USD is the only supported currency.
