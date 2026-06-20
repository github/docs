---
title: Enabling secret scanning for your repository
shortTitle: Enable secret scanning
intro: You can configure how {% data variables.product.prodname_dotcom %} scans your repositories for leaked secrets and generates alerts.
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
contentType: how-tos
redirect_from:
  - /code-security/secret-scanning/enabling-secret-scanning-features/enabling-secret-scanning-for-your-repository
  - /code-security/how-tos/secure-your-secrets/detect-secret-leaks/enabling-secret-scanning-for-your-repository
category:
  - Protect your secrets
---

## About enabling {% data variables.secret-scanning.user_alerts %}

{% ifversion fpt %}

{% data variables.secret-scanning.user_alerts_caps %} can be enabled on any free public repository that you own.

{% endif %}

{% data variables.secret-scanning.user_alerts_caps %} can be enabled for any repository that is owned by an organization{% ifversion secret-scanning-user-owned-repos %}, and for repositories owned by user accounts when using {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_emus %}{% endif %}.

If you're an organization owner, you can enable {% data variables.product.prodname_secret_scanning %} for multiple repositories at a time using {% data variables.product.prodname_security_configurations %}. For more information, see [AUTOTITLE](/code-security/securing-your-organization/introduction-to-securing-your-organization-at-scale/about-enabling-security-features-at-scale).

{% ifversion security-configuration-enterprise-level %}

If your organization is owned by an enterprise account, an enterprise owner can also enable {% data variables.product.prodname_secret_scanning %} at the enterprise level. For more information, see [AUTOTITLE](/admin/managing-code-security/securing-your-enterprise/creating-a-custom-security-configuration-for-your-enterprise).

{% endif %}

## Enabling {% data variables.secret-scanning.user_alerts %}

{% data variables.secret-scanning.user_alerts_caps %} are enabled when you enable {% data variables.product.prodname_secret_protection %} for your repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. To the right of "{% data variables.product.prodname_secret_protection %}", click **Enable**.
1. Review the impact of enabling {% data variables.product.prodname_secret_protection %}, then click **Enable {% data variables.product.prodname_secret_protection %}**.

A repository administrator can choose to disable {% data variables.product.prodname_secret_scanning %} for a repository at any time. For more information, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository).

## Next steps

* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/viewing-alerts)
* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/about-alerts)
