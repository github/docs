---
title: Resolving alerts from secret scanning
intro: 'After reviewing the details of a secret scanning alert, you should fix and then close the alert.'
permissions: '{% data reusables.permissions.secret-scanning-alerts %}'
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

Once a secret has been committed to a repository, you should consider the secret compromised. {% data variables.product.github %} recommends the following actions for compromised secrets:

* Verify that the secret committed to {% data variables.product.github %} is valid. {% ifversion fpt or ghes %}**Applies to {% data variables.product.github %} tokens only**. See [Checking a secret's validity](/code-security/secret-scanning/managing-alerts-from-secret-scanning/evaluating-alerts#checking-a-secrets-validity).{% endif %}{% ifversion secret-scanning-validity-check-partner-patterns %}See [Performing an on-demand validity check](/code-security/secret-scanning/managing-alerts-from-secret-scanning/evaluating-alerts#performing-an-on-demand-validity-check).{% endif %}{% ifversion secret-scanning-report-secret-github-pat %}
* For secrets detected in private repositories, report the leaked secret to {% data variables.product.github %}, who will treat it like any publicly leaked secret and revoke it. **Applies to {% data variables.product.github %} {% data variables.product.pat_generic %}s only**. See [Reporting a leaked secret](#reporting-a-leaked-secret). {% endif %}
* Review and update any services that use the old token. For {% data variables.product.github %} {% data variables.product.pat_generic %}s, delete the compromised token and create a new token. See [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
* Depending on the secret provider, check your security logs for any unauthorized activity.

{% ifversion secret-scanning-report-secret-github-pat %}

### Reporting a leaked secret

> [!NOTE]
> {% data reusables.secret-scanning.report-secret-pat-beta-note %} The feature is currently only available for {% data variables.product.github %} {% data variables.product.pat_generic %}s (v1 and v2).

{% endif %}

{% ifversion fpt or ghec %}

If a secret is detected in a **public** repository on {% data variables.product.github %} and the secret also matches a supported partner pattern, the potential secret is **automatically reported** to the service provider. For details of all supported partner patterns, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#supported-secrets).

{% endif %}

{% ifversion secret-scanning-report-secret-github-pat %}

For secrets detected in **private** repositories, anyone who can view {% data variables.secret-scanning.alerts %} for a repository can choose to report the privately exposed secret directly to {% data variables.product.github %}.

By reporting the secret, the token provider will treat the privately exposed secret as if it had been publicly leaked. This means the token provider may revoke the secret, so you should first consider reviewing and updating any services that use the secret. If possible, you should also consider notifying the token owner before reporting the token, so that the token owner is aware that the secret may get revoked.

You will only see the option to report a privately exposed secret to {% data variables.product.github %} if the following conditions are met:

* The secret is a {% data variables.product.github %} {% data variables.product.pat_generic %}.
* The secret's validity has not been confirmed, or the secret's validity has been confirmed as `active`.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. In the left sidebar, under "Vulnerability alerts", click **{% data variables.product.prodname_secret_scanning_caps %}**.
1. From the alert list, click the alert you want to view.
1. In the alert view for the leaked secret, click **Report leak**.

   > [!NOTE] In order to prevent breaking workflows, consider first rotating the secret before continuing, as disclosing it could lead to the secret being revoked. If possible, you should also reach out to the token owner to let them know about the leak and coordinate a remediation plan.

1. Review the information in the dialog box, then click **I understand the consequence, report this secret**.

{% endif %}

## Closing alerts

> [!NOTE]
>{% data variables.product.prodname_secret_scanning_caps %} doesn't automatically close alerts when the corresponding token has been removed from the repository. You must manually close these alerts in the alert list on {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. In the left sidebar, under "Vulnerability alerts", click **{% data variables.product.prodname_secret_scanning_caps %}**.
1. Under "{% data variables.product.prodname_secret_scanning_caps %}", click the alert you want to view.
1. To dismiss an alert, select the "Close as" dropdown menu and click a reason for resolving an alert.

   ![Screenshot of a {% data variables.product.prodname_secret_scanning %} alert. A dropdown menu, titled "Close as", is expanded and highlighted in a dark orange outline.](/assets/images/help/repository/secret-scanning-dismiss-alert-web-ui-link-partner-documentation.png)

1. Optionally, in the "Comment" field, add a dismissal comment. The dismissal comment will be added to the alert timeline and can be used as justification during auditing and reporting. You can view the history of all dismissed alerts and dismissal comments in the alert timeline. You can also retrieve or set a comment by using the {% data variables.product.prodname_secret_scanning_caps %} API. The comment is contained in the `resolution_comment` field. For more information, see [AUTOTITLE](/rest/secret-scanning#update-a-secret-scanning-alert) in the REST API documentation.
1. Click **Close alert**.

## Next steps

* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/monitoring-alerts)
