---
title: About secret scanning alerts
intro: 'Learn about the different types of {% data variables.secret-scanning.alerts %}.'
permissions: 'People with admin access to a {% ifversion fpt %}public {% endif %}repository can manage {% data variables.secret-scanning.alerts %} for the repository.'
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

{% data reusables.secret-scanning.alert-types %}

## About {% ifversion fpt or ghec %}user alerts {% else %}{% data variables.secret-scanning.alerts %}{% endif %}

When {% data variables.product.company_short %} detects a supported secret in a repository that has {% data variables.product.prodname_secret_scanning %} enabled, a {% ifversion fpt or ghec %}user {% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} alert is generated and displayed in the **Security** tab of the repository.

{% ifversion secret-scanning-non-provider-patterns %}{% ifversion fpt or ghec %}User {% else %}{% data variables.product.prodname_secret_scanning %}{% endif %} alerts can be of the following types:

* High confidence alerts, which relate to supported patterns and specified custom patterns.
* Other alerts, which have a higher ratio of false positives, and correspond to secrets such as private keys{% ifversion secret-scanning-ai-generic-secret-detection %} or AI-detected generic secrets{% endif %}.

{% data variables.product.prodname_dotcom %} displays these "other" alerts in a different list to high confidence alerts, making triaging a better experience for users. For more information, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/viewing-alerts)."

{% data reusables.secret-scanning.non-provider-patterns-beta %}

{% endif %}

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

## About push protection alerts

Push protection scans pushes for supported secrets. If push protection detects a supported secret, it will block the push. When a contributor bypasses push protection to push a secret to the repository, a push protection alert is generated and displayed in the **Security** tab of the repository. To see all push protection alerts for a repository, you must filter by `bypassed: true` on the alerts page. For more information, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/viewing-alerts#filtering-alerts)."

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

>[!NOTE]
> {% ifversion secret-scanning-push-protection-for-users %}You can also enable push protection for your personal account, called "push protection for users", which prevents you from accidentally pushing supported secrets to _any_ public repository. Alerts are _not_ created if you choose to bypass your user-based push protection only. Alerts are only created if the repository itself has push protection enabled. For more information, see "[AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/push-protection-for-users)."{% endif %}
>
> {% data reusables.secret-scanning.push-protection-older-tokens %} For more information about push protection limitations, see "[AUTOTITLE](/code-security/secret-scanning/troubleshooting-secret-scanning-and-push-protection/troubleshooting-secret-scanning#push-protection-and-pattern-versions)."

{% ifversion fpt or ghec %}

## About partner alerts

When {% data variables.product.company_short %} detects a leaked secret in a public repository or npm package, an alert is sent directly to the secret provider, if they are part of {% data variables.product.company_short %}'s secret scanning partner program. For more information about {% data variables.secret-scanning.partner_alerts %}, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-partnership-program/secret-scanning-partner-program)" and "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns)."

Partner alerts are not sent to repository administrators, so you do not need to take any action for this type of alert.

{% endif %}

## Next steps

* "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/viewing-alerts)"

## Further reading

* "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns){% ifversion ghec or ghes %}
* "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/custom-patterns/defining-custom-patterns-for-secret-scanning)"{% endif %}{% ifversion secret-scanning-non-provider-patterns %}
* "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/non-provider-patterns/enabling-secret-scanning-for-non-provider-patterns)"{% endif %}{% ifversion secret-scanning-ai-generic-secret-detection %}
* "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/generic-secret-detection/about-the-detection-of-generic-secrets-with-secret-scanning)"{% endif %}
