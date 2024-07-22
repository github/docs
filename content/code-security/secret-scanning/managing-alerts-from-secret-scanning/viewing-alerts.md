---
title: Viewing and filtering alerts from secret scanning
intro: 'You can view alerts for secrets checked in to your repository and you can use filters to help you prioritize alerts.'
permissions: 'People with admin access to a {% ifversion fpt %}public {% endif %}repository can view secret scanning alerts for the repository.'
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
---

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
|`bypassed: true`|Displays alerts for secrets where push protection has been bypassed. For more information, see "[AUTOTITLE](/code-security/secret-scanning/push-protection-for-repositories-and-organizations)."|
| {% endif %} |
|`validity:active`| Displays alerts for secrets that are still active. {% ifversion fpt %}Applies to {% data variables.product.company_short %} tokens only.{% endif %} For more information about validity statuses, see "[Checking a secret's validity](#checking-a-secrets-validity)."|
|`validity:inactive`| Displays alerts for secrets that are no longer active.|
|`validity:unknown`| Displays alerts for secrets where the validity status of the secret is unknown.|
|`secret-type:SECRET-NAME`| Displays alerts for a specific secret type, for example, `secret-type:github_personal_access_token`. For a list of supported secret types, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secret)." |
|`provider:PROVIDER-NAME`|Displays alerts for a specific provider, for example, `provider:github`. For a list of supported partners, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."|
| {% ifversion secret-scanning-non-provider-patterns %} |
|`confidence:high`| Displays alerts for high-confidence secrets, which relate to supported secrets and custom patterns. For a list of supported high-confidence patterns, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#high-confidence-patterns)." |
|`confidence:other`| Displays alerts for non-provider patterns, such as private keys{% ifversion secret-scanning-ai-generic-secret-detection %}, and AI-detected generic secrets, such as passwords{% endif %}. For a list of supported non-provider patterns, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#non-provider-patterns)." {% ifversion secret-scanning-ai-generic-secret-detection %}For more information about AI-detected generic secrets, see "[AUTOTITLE](/code-security/secret-scanning/about-the-detection-of-generic-secrets-with-secret-scanning)."{% endif %}|
| {% endif %} |
