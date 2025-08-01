---
title: 'Choosing {% data variables.product.prodname_GH_secret_protection %}'
shortTitle: 'Secret protection'
intro: 'Learn how {% data variables.product.prodname_GH_secret_protection %} can help you detect secrets in your codebases and prevent leaks before they happen using continuous monitoring and prevention tools.'
product: '{% data reusables.gated-features.secret-protection %}'
allowTitleToDifferFromFilename: true
type: overview
versions:
  feature: secret-risk-assessment
topics:
  - Secret scanning
  - Secret Protection
  - Code Security
  - Organizations
  - Security
---

## About {% data variables.product.prodname_GH_secret_protection %}

{% data variables.product.prodname_secret_protection %} includes the following features to help you detect and prevent secret leaks, allowing continuous monitoring and detection. For details about the features and their availability, see [{% data variables.product.prodname_GH_secret_protection %}](/get-started/learning-about-github/about-github-advanced-security#github-secret-protection).

{% data reusables.secret-protection.product-list %}

In addition, {% data variables.product.prodname_secret_protection %} includes a free scanning feature, the **risk assessment** report, to help organizations understand their secret leak footprint across their {% data variables.product.github %} perimeter.

To generate a {% data variables.product.prodname_secret_risk_assessment %} report, navigate to {% data reusables.security-overview.navigate-to-risk-assessment %}.

{% data variables.product.prodname_secret_protection %} is billed per active committer to the repositories where it is enabled. It is available to users with a {% data variables.product.prodname_team %} or {% data variables.product.prodname_enterprise %} plan, see [AUTOTITLE](/billing/managing-billing-for-your-products/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

## Why you should enable {% data variables.product.prodname_secret_protection %} for 100% of your organization's repositories

{% data variables.product.github %} recommends enabling {% data variables.product.prodname_GH_secret_protection %} products for all repositories, in order to protect your organization from the risk of secret leaks and exposures.  {% data variables.product.prodname_GH_secret_protection %} is free to enable for public repositories, and available as a purchasable add-on for private and internal repositories.

* {% data reusables.secret-risk-assessment.what-is-scanned %}. See [AUTOTITLE](/code-security/secret-scanning/introduction/about-secret-scanning).

* The {% data variables.product.prodname_secret_risk_assessment %} and {% data variables.product.prodname_secret_scanning %} _scan code that has already been committed_ into your repositories. With **push protection**, your code is scanned for secrets _before_ commits are saved on {% data variables.product.github %}, during the push process, and the push is blocked if any secrets are detected. See [AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection).

* If you have one or more secret patterns that are internal to your organization, these will not be detected by the default patterns supported by {% data variables.product.prodname_secret_scanning %}. You can define **custom patterns** that are only valid in your organization, and extend the {% data variables.product.prodname_secret_scanning %} capabilities to detect these patterns. See [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning).

* Knowing which secrets could be exploited makes it easy to prioritize remediation of leaked secrets found by {% data variables.product.prodname_secret_scanning %}. **Validity checks** tell you if an active secret is one that could still be exploited, so these alerts should be reviewed and remediated as a priority. See [AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-validity-checks-for-your-repository).

* You may also want to detect leaks of unstructured secrets such as passwords. This is possible with our AI-powered **{% data variables.secret-scanning.copilot-secret-scanning %}**. See [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/responsible-ai-generic-secrets).

* Visualizing the prevention, detection, and remediation of security data is critical to understanding where to direct effort and where security initiatives are having an impact. **Security overview** has dedicated views that allow you to dig deep into the current state of your codebases at the organization and enterprise level. See [AUTOTITLE](/code-security/security-overview/about-security-overview).

In addition to detecting and preventing secret leaks, you should consider building code security into all of your organization workflows to secure your software supply chain. See [AUTOTITLE](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security).

If you require help evaluating your security needs or options, contact [GitHub's Sales team](https://github.com/security/contact-sales).

{% ifversion fpt or ghec %}

Alternatively, you can trial {% data variables.product.prodname_GHAS %} for free to assess your needs. See [AUTOTITLE](/code-security/trialing-github-advanced-security/planning-a-trial-of-ghas).

{% endif %}

## Enabling {% data variables.product.prodname_secret_protection %}

{% ifversion ghes %}
A site administrator must enable {% data variables.product.prodname_AS %} for {% data variables.location.product_location %} before you can use these security features. See [AUTOTITLE](/admin/code-security/managing-github-advanced-security-for-your-enterprise).
{% endif %}

{% ifversion security-configurations %}
{% data reusables.security-configurations.enable-security-features-with-gh-config %}
{% endif %}

{% data variables.product.prodname_security_configurations_caps %} can be applied at enterprise and organization level. You can also configure additional security settings for your organization. These settings, called {% data variables.product.prodname_global_settings %}, are then inherited by all repositories in the organization. With {% data variables.product.prodname_global_settings %}, you can customize how security features analyze your organization. See [AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/configuring-global-security-settings-for-your-organization).

In addition, repository administrators can enable security features at the repository level.

## Enabling {% data variables.product.prodname_secret_protection %} from the {% data variables.product.prodname_secret_risk_assessment %}

{% data reusables.secret-risk-assessment.public-preview-note %}

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
{% data reusables.security-overview.open-assessments-view %}
1. Click the **Enable Secret Protection** dropdown in the banner display, and then select one of the options for enabling the feature in your organization's repositories.
   * **For public repositories for free**: Click to enable for _only_ public repositories in your organization.
   * **For all repositories**: Click **Enable Secret Protection** to enable both {% data variables.product.prodname_secret_scanning %} and push protection for all repositories in your organization, at the estimated cost displayed. You will incur usage costs or need to purchase {% data variables.product.prodname_GH_secret_protection %} licenses.

       Alternatively, click **Configure in settings** to customize which repositories you want to enable {% data variables.product.prodname_secret_protection %} for. See {% ifversion fpt or ghec %}[AUTOTITLE](/code-security/securing-your-organization\enabling-security-features-in-your-organization/applying-the-github-recommended-security-configuration-in-your-organization) and {% endif %}[AUTOTITLE](/code-security/securing-your-organization/enabling-security-features-in-your-organization/creating-a-custom-security-configuration).
