---
title: About secret scanning alerts
intro: 'Learn about the different types of {% data variables.product.prodname_secret_scanning %} alerts for your repository.'
permissions: 'People with admin access to a {% ifversion fpt %}public {% endif %}repository can manage secret scanning alerts for the repository.'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: About alerts
---

## About the different types of {% data variables.product.prodname_secret_scanning %} alerts

There are three types of {% data variables.product.prodname_secret_scanning %} alerts:

* **{% ifversion fpt or ghec %}user {% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} alerts**: When [GitHub] detects a supported secret in a repository that has {% data variables.product.prodname_secret_scanning %} enabled, a {% ifversion fpt or ghec %}user {% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} alert is generated and displayed in the **Security** tab of the repository.
* **Push protection alerts**: When a contributor pushes a supported secret to a repository that has push protection enabled, a push protection alert is generated and displayed in the **Security** tab of the repository.
* **Partner alerts**: Unlike other alerts, partner alerts are sent directly to the secret providers whenever a secret leak is reported for one of their secrets, as part of {% data variables.product.prodname_secret_scanning %}'s partner program.

### About {% ifversion fpt or ghec %}user {% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} alerts

{% ifversion fpt or ghec %}User alerts are alerts that are reported to users on {% data variables.product.prodname_dotcom %}. {% endif %}When {% data variables.secret-scanning.user_alerts %} {% ifversion fpt or ghec %}are{% else %}is{% endif %} enabled, {% data variables.product.prodname_dotcom %} scans repositories for secrets issued by a large variety of service providers and generates {% data variables.secret-scanning.alerts %}.

{% ifversion secret-scanning-non-provider-patterns %}{% ifversion fpt or ghec %}User {% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} alerts can be of the following types:

* High confidence alerts, which relate to supported patterns and specified custom patterns.
* Non-provider alerts, which have a higher ratio of false positives, and correspond to secrets such as private keys.

{% data variables.product.prodname_dotcom %} displays non-provider alerts in a different list to high confidence alerts, making triaging a better experience for users. For more information, see "[AUTOTITLE](/TODO)."

{% data reusables.secret-scanning.non-provider-patterns-beta %}

{% endif %}

You can see these alerts on the **Security** tab of the repository. {% ifversion fpt or ghec %}For more information about {% data variables.secret-scanning.user_alerts %}, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-users)."{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

If you use the REST API for secret scanning, you can use the `Secret type` to report on secrets from specific issuers. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/rest/secret-scanning)."

{% ifversion ghes or ghec %}
{% note %}

**Note:** You can also define custom {% data variables.product.prodname_secret_scanning %} patterns for your repository, organization, or enterprise. For more information, see "[AUTOTITLE](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)."

{% endnote %}
{% endif %}

### About push protection alerts

Push protection alerts are user alerts that are reported by push protection. {% data variables.product.prodname_secret_scanning_caps %} as a push protection currently scans repositories for secrets issued by some service providers.

{% ifversion secret-scanning-push-protection-for-users %}Push protection alerts are not created for secrets that are bypassed with user-based push protection only. For more information, see "[AUTOTITLE](/code-security/secret-scanning/push-protection-for-users)."{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.push-protection-older-tokens %} For more information about push protection limitations, see "[AUTOTITLE](/code-security/secret-scanning/troubleshooting-secret-scanning#push-protection-and-pattern-versions)."

### About partner alerts

Partner alerts are alerts that are sent to the secret providers whenever a secret leak is reported for one of their secrets. {% data variables.product.product_name %} currently scans public repositories and public npm packages for secrets issued by specific service providers and alerts the relevant service provider whenever a secret is detected in a commit. For more information about {% data variables.secret-scanning.partner_alerts %}, see "[AUTOTITLE](/code-security/secret-scanning/about-secret-scanning#about-secret-scanning-alerts-for-partners)."

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}
