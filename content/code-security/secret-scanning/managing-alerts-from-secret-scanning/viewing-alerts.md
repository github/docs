---
title: Viewing and filtering alerts from secret scanning
intro: 'Learn how to find and filter {% ifversion fpt or ghec %}{% data variables.secret-scanning.user_alerts %}{% else %}{% data variables.secret-scanning.user_alerts %} alerts{% endif %} for your repository.'
permissions: 'People with admin access to a {% ifversion fpt %}public {% endif %}repository can view {% data variables.secret-scanning.user_alerts %}{% ifversion ghes %} alerts{% endif %} for the repository.'
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
shortTitle: View alerts
allowTitleToDifferFromFilename: true
---

## About the {% data variables.product.prodname_secret_scanning %} alerts page

{% data reusables.secret-scanning.secret-scanning-about-alerts %} {% data reusables.secret-scanning.repository-alert-location %}

{% ifversion secret-scanning-non-provider-patterns %}
To help you triage alerts more effectively, {% data variables.product.company_short %} separates alerts into two lists:
* **High confidence** alerts.
* **Other** alerts.

![Screenshot of the {% data variables.product.prodname_secret_scanning %} alert view. The button to toggle between "High confidence" and "Other" alerts is highlighted with an orange outline.](/assets/images/help/security/secret-scanning-high-confidence-alert-view.png)

### High confidence alerts list

The "High confidence" alerts list displays alerts that relate to supported patterns and specified custom patterns. This list is always the default view for the alerts page.

### Other alerts list

The "Other" alerts list displays alerts that relate to non-provider patterns (such as private keys){% ifversion secret-scanning-ai-generic-secret-detection %}, or generic secrets detected using AI (such as passwords){% endif %}. These types of alerts have a higher rate of false positives.

In addition, alerts that fall into this category:
* Are limited in quantity to 5000 alerts per repository (this includes open and closed alerts).
* Are not shown in the summary views for security overview, only in the "{% data variables.product.prodname_secret_scanning_caps %}" view.
* Only have the first five detected locations shown on {% data variables.product.prodname_dotcom %} for non-provider patterns{% ifversion secret-scanning-ai-generic-secret-detection %}, and only the first detected location shown for AI-detected generic secrets{% endif %}.

For {% data variables.product.company_short %} to scan for non-provider patterns{% ifversion secret-scanning-ai-generic-secret-detection %} and generic secrets{% endif %}, you must first enable the feature{% ifversion secret-scanning-ai-generic-secret-detection %}s{% endif %} for your repository or organization. For more information, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/non-provider-patterns/enabling-secret-scanning-for-non-provider-patterns){% ifversion secret-scanning-ai-generic-secret-detection %}" and "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/generic-secret-detection/enabling-ai-powered-generic-secret-detection){% endif %}."

{% endif %}

## Viewing alerts

Alerts for {% data variables.product.prodname_secret_scanning %} are displayed under the **Security** tab of the repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. In the left sidebar, under "Vulnerability alerts", click **{% data variables.product.prodname_secret_scanning_caps %}**. {% ifversion secret-scanning-non-provider-patterns %}
1. Optionally, toggle to "Other" to see alerts for non-provider patterns{% ifversion secret-scanning-ai-generic-secret-detection %} or generic secrets detected using AI{% endif %}.{% endif %}
1. Under "{% data variables.product.prodname_secret_scanning_caps %}", click the alert you want to view.
   {% ifversion secret-scanning-user-owned-repos %}

   > [!NOTE]
   > {% data reusables.secret-scanning.secret-scanning-user-owned-repo-access %}

   {% endif %}

## Filtering alerts

You can apply various filters to the alerts list to help you find the alerts you're interested in. You can use the dropdown menus above the alerts list, or input the qualifiers listed in the table into the search bar.

|Qualifier|Description|
|---------|-----------|
|`is:open`|Displays open alerts.|
|`is:closed`|Displays closed alerts.|
| {% ifversion secret-scanning-bypass-filter %} |
|`bypassed: true`|Displays alerts for secrets where push protection has been bypassed. For more information, see "[AUTOTITLE](/code-security/secret-scanning/introduction/about-push-protection)."|
| {% endif %} |
|`validity:active`| Displays alerts for secrets that are known to be active. {% ifversion fpt %}Applies to {% data variables.product.company_short %} tokens only.{% endif %} For more information about validity statuses, see "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/evaluating-alerts#checking-a-secrets-validity)."|
|`validity:inactive`| Displays alerts for secrets that are no longer active.|
|`validity:unknown`| Displays alerts for secrets where the validity status of the secret is unknown.|
|`secret-type:SECRET-NAME`| Displays alerts for a specific secret type, for example, `secret-type:github_personal_access_token`. For a list of supported secret types, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secret)." |
|`provider:PROVIDER-NAME`|Displays alerts for a specific provider, for example, `provider:github`. For a list of supported partners, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)."|
| {% ifversion secret-scanning-non-provider-patterns %} |
|`confidence:high`| Displays alerts for high-confidence secrets, which relate to supported secrets and custom patterns. For a list of supported high-confidence patterns, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#high-confidence-patterns)." |
|`confidence:other`| Displays alerts for non-provider patterns, such as private keys{% ifversion secret-scanning-ai-generic-secret-detection %}, and AI-detected generic secrets, such as passwords{% endif %}. For a list of supported non-provider patterns, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#non-provider-patterns)." {% ifversion secret-scanning-ai-generic-secret-detection %}For more information about AI-detected generic secrets, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/generic-secret-detection/about-the-detection-of-generic-secrets-with-secret-scanning)."{% endif %}|
| {% endif %} |

## Next steps

* "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/evaluating-alerts)"
