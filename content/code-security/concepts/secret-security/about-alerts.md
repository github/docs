---
title: About secret scanning alerts
intro: Learn about the different types of {% data variables.secret-scanning.alerts %}.
permissions: '{% data reusables.permissions.secret-scanning-alerts %}'
product: '{% data reusables.gated-features.secret-scanning %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
  - Repositories
shortTitle: Secret scanning alerts
allowTitleToDifferFromFilename: true
redirect_from:
  - /code-security/secret-scanning/managing-alerts-from-secret-scanning/about-alerts
contentType: concepts
---

## About types of alerts

{% data reusables.secret-scanning.alert-types %}

## About {% ifversion fpt or ghec %}user alerts {% else %}{% data variables.secret-scanning.alerts %}{% endif %}

{% data reusables.secret-scanning.secret-scanning-about-alerts %} {% data reusables.secret-scanning.repository-alert-location %}

To help you triage alerts more effectively, {% data variables.product.company_short %} separates alerts into two lists:

{% ifversion secret-scanning-alert-experimental-list %}
* **Default** alerts{% ifversion secret-scanning-generic-tab %}
* **Generic** alerts{% elsif ghes = 3.16 %}
* **Experimental** alerts{% endif %}

{% ifversion ghes = 3.16 %}
![Screenshot of the {% data variables.product.prodname_secret_scanning %} alert view. The button to toggle between "Default" and "Experimental" alerts is highlighted with an orange outline.](/assets/images/enterprise/3.16/help/security/secret-scanning-default-alert-view.png)
{% endif %}

{% else %}
* **High confidence** alerts.
* **Other** alerts.

![Screenshot of the {% data variables.product.prodname_secret_scanning %} alert view. The button to toggle between "High confidence" and "Other" alerts is highlighted with an orange outline.](/assets/images/help/security/secret-scanning-high-confidence-alert-view.png)

{% endif %}

{% ifversion secret-scanning-alert-experimental-list %}

### Default alerts list

The default alerts list displays alerts that relate to supported patterns and specified custom patterns. This is the main view for alerts.

### {% ifversion secret-scanning-generic-tab %}Generic{% elsif ghes = 3.16 %}Experimental{% endif %} alerts list

The {% ifversion secret-scanning-generic-tab %}generic{% elsif ghes = 3.16 %}experimental{% endif %} alerts list displays alerts that relate to non-provider patterns (such as private keys){% ifversion secret-scanning-ai-generic-secret-detection %}, or generic secrets detected using AI (such as passwords){% endif %}. These types of alerts can have a higher rate of false positives or secrets used in tests. You can toggle to the {% ifversion secret-scanning-generic-tab %}generic{% elsif ghes = 3.16 %}experimental{% endif %} alerts list from the default alerts list.

{% data variables.product.github %} will continue to release new patterns and secret types to the {% ifversion secret-scanning-generic-tab %}generic{% elsif ghes = 3.16 %}experimental{% endif %} alerts list and will promote them to the default list when feature-complete (that is, when they have an appropriately low volume and false positive rate).

{% else %}

### High confidence alerts list

The "High confidence" alerts list displays alerts that relate to supported patterns and specified custom patterns. This list is always the default view for the alerts page.

### Other alerts list

The "Other" alerts list displays alerts that relate to non-provider patterns (such as private keys){% ifversion secret-scanning-ai-generic-secret-detection %}, or generic secrets detected using AI (such as passwords){% endif %}. These types of alerts have a higher rate of false positives.

{% endif %}

In addition, alerts that fall into this category:
* Are limited in quantity to 5000 alerts per repository (this includes open and closed alerts).
* Are not shown in the summary views for security overview, only in the "{% data variables.product.prodname_secret_scanning_caps %}" view.
* Only have the first five detected locations shown on {% data variables.product.prodname_dotcom %} for non-provider patterns{% ifversion secret-scanning-ai-generic-secret-detection %}, and only the first detected location shown for AI-detected generic secrets{% endif %}.

For {% data variables.product.company_short %} to scan for non-provider patterns{% ifversion secret-scanning-ai-generic-secret-detection %} and generic secrets{% endif %}, you must first enable the feature{% ifversion secret-scanning-ai-generic-secret-detection %}s{% endif %} for your repository or organization. For more information, see [AUTOTITLE](/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enabling-secret-scanning-for-non-provider-patterns){% ifversion secret-scanning-ai-generic-secret-detection %} and [AUTOTITLE](/code-security/secret-scanning/copilot-secret-scanning/enabling-ai-powered-generic-secret-detection){% endif %}.

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

## About push protection alerts

Push protection scans pushes for supported secrets. If push protection detects a supported secret, it will block the push. When a contributor bypasses push protection to push a secret to the repository, a push protection alert is generated and displayed in the **Security** tab of the repository. To see all push protection alerts for a repository, you must filter by `bypassed: true` on the alerts page. For more information, see [AUTOTITLE](/code-security/how-tos/manage-security-alerts/manage-secret-scanning-alerts/viewing-alerts#filtering-alerts).

{% data reusables.secret-scanning.secret-scanning-pattern-pair-matches %}

>[!NOTE]
> {% ifversion secret-scanning-push-protection-for-users %}You can also enable push protection for your personal account, called "push protection for users", which prevents you from accidentally pushing supported secrets to _any_ public repository. Alerts are _not_ created if you choose to bypass your user-based push protection only. Alerts are only created if the repository itself has push protection enabled. For more information, see [AUTOTITLE](/code-security/secret-scanning/working-with-secret-scanning-and-push-protection/push-protection-for-users).{% endif %}
>
> {% data reusables.secret-scanning.push-protection-older-tokens %} For more information about push protection limitations, see [AUTOTITLE](/code-security/how-tos/secure-your-secrets/troubleshooting-secret-scanning#push-protection-and-pattern-versions).

{% ifversion fpt or ghec %}

## About partner alerts

When {% data variables.product.company_short %} detects a leaked secret in a public repository or npm package, an alert is sent directly to the secret provider, if they are part of {% data variables.product.company_short %}'s secret scanning partner program. For more information about {% data variables.secret-scanning.partner_alerts %}, see [AUTOTITLE](/code-security/secret-scanning/secret-scanning-partnership-program/secret-scanning-partner-program) and [AUTOTITLE](/code-security/reference/secret-security/supported-secret-scanning-patterns).

Partner alerts are not sent to repository administrators, so you do not need to take any action for this type of alert.

{% endif %}


## Further reading

* [AUTOTITLE](/code-security/reference/secret-security/supported-secret-scanning-patterns)
* [AUTOTITLE](/code-security/how-tos/secure-your-secrets/detect-secret-leaks/enabling-secret-scanning-for-non-provider-patterns)
