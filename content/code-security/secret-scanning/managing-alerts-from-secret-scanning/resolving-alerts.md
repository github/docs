---
title: Resolving alerts from secret scanning
intro: 'After reviewing the details of a secret scanning alert, you should fix and then close the alert.'
permissions: 'People with admin access to a {% ifversion fpt %}public {% endif %}repository can dismiss secret scanning alerts for the repository.'
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
shortTitle: Resolve alerts
allowTitleToDifferFromFilename: true
---

## Fixing alerts

Once a secret has been committed to a repository, you should consider the secret compromised. {% data variables.product.prodname_dotcom %} recommends the following actions for compromised secrets:

* For a compromised {% data variables.product.prodname_dotcom %} {% data variables.product.pat_generic %}, delete the compromised token, create a new token, and update any services that use the old token. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
{%- ifversion token-audit-log %}
  * {% ifversion ghec %}If your organization is owned by an enterprise account, identify{% else %}Identify{% endif %} any actions taken by the compromised token on your enterprise's resources. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)."
{%- endif %}
* For all other secrets, first verify that the secret committed to {% data variables.product.product_name %} is valid. If so, create a new secret, update any services that use the old secret, and then delete the old secret.

{% ifversion fpt or ghec %}

> [!NOTE]
> If a secret is detected in a public repository on {% data variables.product.prodname_dotcom %} and the secret also matches a partner pattern, an alert is generated and the potential secret is reported to the service provider. For details of partner patterns, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets)."

{% endif %}

## Closing alerts

> [!NOTE]
>{% data variables.product.prodname_secret_scanning_caps %} doesn't automatically close alerts when the corresponding token has been removed from the repository. You must manually close these alerts in the alert list on  {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. In the left sidebar, under "Vulnerability alerts", click **{% data variables.product.prodname_secret_scanning_caps %}**.
1. Under "{% data variables.product.prodname_secret_scanning_caps %}", click the alert you want to view.
1. To dismiss an alert, select the "Close as" dropdown menu and click a reason for resolving an alert.

   ![Screenshot of a {% data variables.product.prodname_secret_scanning %} alert. A dropdown menu, titled "Close as", is expanded and highlighted in a dark orange outline.](/assets/images/help/repository/secret-scanning-dismiss-alert-web-ui-link-partner-documentation.png)

1. Optionally, in the "Comment" field, add a dismissal comment. The dismissal comment will be added to the alert timeline and can be used as justification during auditing and reporting. You can view the history of all dismissed alerts and dismissal comments in the alert timeline. You can also retrieve or set a comment by using the {% data variables.product.prodname_secret_scanning_caps %} API. The comment is contained in the `resolution_comment` field. For more information, see "[AUTOTITLE](/rest/secret-scanning#update-a-secret-scanning-alert)" in the REST API documentation.
1. Click **Close alert**.

## Next steps

* "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/monitoring-alerts)"
