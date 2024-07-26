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

## About types of alerts

There are {% ifversion fpt or ghec %}three{% else %}two{% endif %} types of {% data variables.product.prodname_secret_scanning %} alerts:

* **{% ifversion fpt or ghec %}User {% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} alerts**: Reported to users in the **Security** tab of the repository, when a supported secret is detected in the repository.
* **Push protection alerts**: Reported to users in the **Security** tab of the repository, when a contributor bypasses push protection. {% ifversion fpt or ghec %}
* **Partner alerts**: Reported directly to secret providers that are part of {% data variables.product.prodname_secret_scanning %}'s partner program. These alerts are not reported in the **Security** tab of the repository.{% endif %}

## About {% ifversion fpt or ghec %}user {% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} alerts

When {% data variables.product.company_short %} detects a supported secret in a repository that has {% data variables.product.prodname_secret_scanning %} enabled, a {% ifversion fpt or ghec %}user {% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} alert is generated and displayed in the **Security** tab of the repository.

{% ifversion secret-scanning-non-provider-patterns %}{% ifversion fpt or ghec %}User {% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} alerts can be of the following types:

* High confidence alerts, which relate to supported patterns and specified custom patterns.
* Other alerts, which have a higher ratio of false positives, and correspond to secrets such as private keys{% ifversion secret-scanning-ai-generic-secret-detection %} or AI-detected generic secrets{% endif %}.

{% data variables.product.prodname_dotcom %} displays these "other" alerts in a different list to high confidence alerts, making triaging a better experience for users. For more information, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/viewing-alerts)."

{% data reusables.secret-scanning.non-provider-patterns-beta %}

{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

## About push protection alerts

Push protection scans pushes from contributors for supported secrets. If push protection detects a supported secret, it will block the push. When a contributor bypasses push protection to push a secret to the repository, a push protection alert is generated and displayed in the **Security** tab of the repository.

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

>[!NOTE]
> {% ifversion secret-scanning-push-protection-for-users %}You can also enable push protection for your personal account, which prevents you from accidentally pushing supported secrets to _any_ public repository. Push protection alerts are _not_ created when you bypass this user-based push protection only. Alerts are only created if the repository itself has push protection enabled. For more information, see "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/push-protection-for-users)."{% endif %}
>
> {% data reusables.secret-scanning.push-protection-older-tokens %} For more information about push protection limitations, see "[AUTOTITLE](/code-security/secret-scanning/troubleshooting-secret-scanning#push-protection-and-pattern-versions)."

## About partner alerts

When {% data variables.product.company_short %} detects a leaked secret in a public repository or npm package, an alert is sent directly to the secret provider, if they are part of {% data variables.product.company_short %}'s secret scanning partner program. Partner alerts are not applicable to repository administrators, so you do not need to take any action for this type of alert.

Partner alerts are alerts that are sent to the secret providers whenever a secret leak is reported for one of their secrets. {% data variables.product.product_name %} currently scans public repositories and public npm packages for secrets issued by specific service providers and alerts the relevant service provider whenever a secret is detected in a commit. For more information about {% data variables.secret-scanning.partner_alerts %}, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-partnership-program/secret-scanning-partner-program)."

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}
