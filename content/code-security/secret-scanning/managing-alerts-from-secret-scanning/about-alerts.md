---
title: About secret scanning alerts
intro: 'Learn about the different types of {% data variables.product.prodname_secret_scanning %} alerts.'
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
allowTitleToDifferFromFilename: true
---

## About different types of {% data variables.product.prodname_secret_scanning %} alerts

There are {% ifversion fpt or ghec %}three{% else %}two{% endif %} types of {% data variables.product.prodname_secret_scanning %} alerts:

* **{% ifversion fpt or ghec %}User {% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} alerts**: When {% data variables.product.company_short %} detects a supported secret in a repository that has {% data variables.product.prodname_secret_scanning %} enabled, a {% ifversion fpt or ghec %}user {% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} alert is generated and displayed in the **Security** tab of the repository.
* **Push protection alerts**: When a contributor bypasses push protection to push a secret to the repository that has {% data variables.product.prodname_secret_scanning %} and push protection enabled, a push protection alert is generated and displayed in the **Security** tab of the repository.{% ifversion fpt or ghec %}
* **Partner alerts**: When {% data variables.product.company_short %} detects a leaked secret in a public repository or npm package, an alert is sent directly to the secret provider, if they are part of {% data variables.product.company_short %}'s secret scanning partner program. Partner alerts are not applicable to repository administrators, so you do not need to take any action for this type of alert.{% endif %}

### About {% ifversion fpt or ghec %}user {% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} alerts

{% ifversion fpt or ghec %}User alerts are alerts that are reported to users on {% data variables.product.prodname_dotcom %}. {% endif %}When {% data variables.secret-scanning.user_alerts %} {% ifversion fpt or ghec %}are{% else %}is{% endif %} enabled, {% data variables.product.prodname_dotcom %} scans repositories for secrets issued by a large variety of service providers and generates {% data variables.secret-scanning.alerts %}.

{% ifversion secret-scanning-non-provider-patterns %}{% ifversion fpt or ghec %}User {% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} alerts can be of the following types:

* High confidence alerts, which relate to supported patterns and specified custom patterns.
* Non-provider alerts, which have a higher ratio of false positives, and correspond to secrets such as private keys{% ifversion secret-scanning-ai-generic-secret-detection %}or AI-detected generic secrets{% endif %}.

{% data variables.product.prodname_dotcom %} displays non-provider alerts in a different list to high confidence alerts, making triaging a better experience for users. For more information, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/viewing-alerts)."

{% data reusables.secret-scanning.non-provider-patterns-beta %}

{% endif %}

You can see these alerts on the **Security** tab of the repository.

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

If you use the REST API for secret scanning, you can use the `Secret type` to report on secrets from specific issuers. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/rest/secret-scanning)."

{% ifversion ghes or ghec %}
{% note %}

**Note:** You can also define custom {% data variables.product.prodname_secret_scanning %} patterns for your repository, organization, or enterprise. For more information, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning)."

{% endnote %}
{% endif %}

### About push protection alerts

Push protection alerts are user alerts that are reported by push protection. {% data variables.product.prodname_secret_scanning_caps %} as a push protection currently scans repositories for secrets issued by some service providers.

{% ifversion secret-scanning-push-protection-for-users %}Push protection alerts are not created for secrets that are bypassed with user-based push protection only. For more information, see "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/push-protection-for-users)."{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

{% data reusables.secret-scanning.push-protection-older-tokens %} For more information about push protection limitations, see "[AUTOTITLE](/code-security/secret-scanning/troubleshooting-secret-scanning-and-push-protection/troubleshooting-secret-scanning#push-protection-limitations)."

### About partner alerts

Partner alerts are alerts that are sent to the secret providers whenever a secret leak is reported for one of their secrets. {% data variables.product.product_name %} currently scans public repositories and public npm packages for secrets issued by specific service providers and alerts the relevant service provider whenever a secret is detected in a commit. For more information about {% data variables.secret-scanning.partner_alerts %}, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-partnership-program/secret-scanning-partner-program)."

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}
