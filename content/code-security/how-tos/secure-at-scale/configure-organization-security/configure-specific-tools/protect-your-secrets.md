---
title: Pricing and enabling {% data variables.product.prodname_GH_secret_protection %}
shortTitle: Protect your secrets
intro: Secure your organization's secrets within your budget by enabling {% data variables.product.prodname_GH_secret_protection %}.
product: Organizations on {% data variables.product.prodname_team %} or {% data variables.product.prodname_enterprise %}
allowTitleToDifferFromFilename: true
contentType: how-tos
versions:
  feature: secret-risk-assessment
redirect_from:
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/choosing-github-secret-protection
  - /code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/protect-your-secrets
topics:
  - Secret scanning
  - Secret Protection
  - Code Security
  - Organizations
  - Security
---

## Prerequisites

Before you configure {% data variables.product.prodname_GH_secret_protection %}, you should run the free {% data variables.product.prodname_secret_risk_assessment %} to inform your enablement strategy. See [AUTOTITLE](/code-security/securing-your-organization/understanding-your-organizations-exposure-to-leaked-secrets/assess-your-secret-risk).

## Configuring {% data variables.product.prodname_GH_secret_protection %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.open-assessments-view %}
1. In the banner display, select the **Get started** {% octicon "triangle-down" aria-hidden="true" aria-label="triangle-down" %} dropdown menu, then click one of following enablement options:
   * **For public repositories for free**: Click to enable for _only_ public repositories in your organization.
   * **For all repositories**: Click to see an estimated cost for {% data variables.product.prodname_GH_secret_protection %} for all repositories in your organization.
     * If you are satisfied with the pricing estimate, to enable {% data variables.product.prodname_secret_scanning %} alerts and push protection across your organization, click **Enable {% data variables.product.prodname_secret_protection %}**.
     * Alternatively, click **Configure in settings** to customize which repositories you want to enable {% data variables.product.prodname_secret_protection %} for. See {% ifversion fpt or ghec %}[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization) and {% endif %}[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration).
