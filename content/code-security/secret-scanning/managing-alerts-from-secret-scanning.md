---
title: Managing alerts from secret scanning
intro: You can view and close alerts for secrets checked in to your repository.
permissions: 'People with admin access to a {% ifversion fpt %}public {% endif %}repository can view and dismiss secret scanning alerts for the repository.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
  - /code-security/secret-security/managing-alerts-from-secret-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Manage secret alerts
---

{% data reusables.secret-scanning.beta %}

## Managing {% data variables.secret-scanning.alerts %}

{% ifversion fpt or ghec %}
{% note %}

**Note:** Alerts are created only for repositories with {% data variables.secret-scanning.user_alerts %} enabled. Secrets found in public repositories and public npm packages using the free {% data variables.secret-scanning.partner_alerts %} service are reported directly to the partner, without creating an alert. For more information, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

{% endnote %}
{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. In the left sidebar, under "Vulnerability alerts", click **{% data variables.product.prodname_secret_scanning_caps %}**.
1. Under "{% data variables.product.prodname_secret_scanning_caps %}" click the alert you want to view. {% ifversion secret-scanning-validity-check-partner-patterns %}
1. Optionally, to perform a validity check on the token, on the top right-hand side of the alert, click {% octicon "sync" aria-hidden="true" %} **Verify secret**. For more information, see "[Validating partner patterns](#validating-partner-patterns)." <br><br>
  {% note %}

   **Note:** You can only perform on-demand validity checks for patterns detected in the repository if automatic validity checks have been enabled for the repository. For more information, see "[Allowing validity checks for partner patterns in a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#allowing-validity-checks-for-partner-patterns-in-a-repository)."

   {% endnote %}
   {% endif %}{% ifversion ghes = 3.9 or ghes = 3.10 or ghes = 3.11 %}
1. Optionally, if the leaked secret is a {% data variables.product.company_short %} token, check the validity of the secret and follow the remediation steps.

   {% note %}

   **Note:**  Validity check for {% data variables.product.company_short %} tokens is currently in public beta and subject to change.

   {% endnote %}

   {% data variables.product.company_short %} provides information about the validity of the secret, for {% data variables.product.company_short %} tokens only.

   {% data reusables.secret-scanning.validity-check-table %}{% endif %}{% ifversion secret-scanning-github-token-metadata %}
1. Optionally, if the leaked secret is a {% data variables.product.company_short %} token, you can also review the token metadata. For more information on reviewing token metadata, see "[Reviewing {% data variables.product.company_short %} token metadata](#reviewing-github-token-metadata)."{% endif %}{% ifversion secret-scanning-partner-documentation-link-UI %}
1. To dismiss an alert, select the "Close as" dropdown menu and click a reason for resolving an alert.

   ![Screenshot of a {% data variables.product.prodname_secret_scanning %} alert. A dropdown menu, titled "Close as", is expanded and highlighted in a dark orange outline.](/assets/images/help/repository/secret-scanning-dismiss-alert-web-ui-link-partner-documentation.png)

   {% else %}
1. To dismiss an alert, select the "Mark as" dropdown menu and click a reason for resolving an alert.
   {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. Optionally, in the "Comment" field, add a dismissal comment. The dismissal comment will be added to the alert timeline and can be used as justification during auditing and reporting. You can view the history of all dismissed alerts and dismissal comments in the alert timeline. You can also retrieve or set a comment by using the {% data variables.product.prodname_secret_scanning_caps %} API. The comment is contained in the `resolution_comment` field. For more information, see "[AUTOTITLE](/rest/secret-scanning#update-a-secret-scanning-alert)" in the REST API documentation.
1. Click **Close alert**.
{% endif %}

{% ifversion secret-scanning-validity-check-partner-patterns %}

## Validating partner patterns

{% data reusables.secret-scanning.validity-check-partner-patterns-beta %}
{% data reusables.gated-features.partner-pattern-validity-check-ghas %}

You can allow {% data variables.product.prodname_secret_scanning %} to check the validity of a secret found in your repository by sending it to the relevant partner.

You can enable automatic validity checks for supported partner patterns in the code security settings for your repository, organization, or enterprise. {% data variables.product.company_short %} will periodically send the pattern to the relevant partner to check the secret's validity and display the validation status of the secret in the alert view.

 For more information on enabling automatic validation checks for partner patterns in your repository, organization, or enterprise, see "[Allowing validity checks for partner patterns in a repository](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#allowing-validity-checks-for-partner-patterns-in-a-repository)," "[Allowing validity checks for partner patterns in an organization](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization#allowing-validity-checks-for-partner-patterns-in-an-organization)," and "[Managing Advanced Security features](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise#managing-advanced-security-features)."

If your repository has validity checks enabled, you can also perform an on-demand validity check for a secret by clicking {% octicon "sync" aria-hidden="true" %} **Verify secret** in the alert view. {% data variables.product.company_short %} will send the pattern to the relevant partner and display the validation status of the secret in the alert view.

You can use the validation status of a leaked secret to help prioritize the secrets needing remediation steps.

{% data reusables.secret-scanning.validity-check-table %}

For more information on which partners support validity checks, see "[Supported secrets](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

{% endif %}

{% ifversion secret-scanning-github-token-metadata %}

## Reviewing {% data variables.product.company_short %} token metadata

{% note %}

**Note:** Metadata for {% data variables.product.company_short %} tokens is currently in public beta and subject to change.

{% endnote %}

In the view for an active {% data variables.product.company_short %} token alert, you can review certain metadata about the token. This metadata may help you identify the token and decide what remediation steps to take. For more information on viewing individual alerts, see "[Managing {% data variables.product.prodname_secret_scanning %} alerts](#managing-secret-scanning-alerts)."

Tokens, like {% data variables.product.pat_generic %} and other credentials, are considered personal information. For more information about using {% data variables.product.company_short %} tokens, see [GitHub's Privacy Statement](/free-pro-team@latest/site-policy/privacy-policies/github-privacy-statement) and [Acceptable Use Policies](/free-pro-team@latest/site-policy/acceptable-use-policies/github-acceptable-use-policies).

   ![Screenshot of the UI for a {% data variables.product.company_short %} token, showing the token metadata.](/assets/images/help/repository/secret-scanning-github-token-metadata.png)

 Metadata for {% data variables.product.company_short %} tokens is available for active tokens in any repository with secret scanning enabled. If a token has been revoked or its status cannot be validated, metadata will not be available. {% data variables.product.company_short %} auto-revokes {% data variables.product.company_short %} tokens in public repositories, so metadata for {% data variables.product.company_short %} tokens in public repositories is unlikely to be available. The following metadata is available for active {% data variables.product.company_short %} tokens:

|Metadata|Description|
|-------------------------|--------------------------------------------------------------------------------|
|Secret name| The name given to the {% data variables.product.company_short %} token by its creator|
|Secret owner| The {% data variables.product.company_short %} handle of the token's owner|
|Created on| Date the token was created|
|Expired on| Date the token expired|
|Last used on| Date the token was last used|
|Access| Whether the token has organization access|

{% endif %}

## Securing compromised secrets

Once a secret has been committed to a repository, you should consider the secret compromised. {% data variables.product.prodname_dotcom %} recommends the following actions for compromised secrets:

- For a compromised {% data variables.product.prodname_dotcom %} {% data variables.product.pat_generic %}, delete the compromised token, create a new token, and update any services that use the old token. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
{%- ifversion token-audit-log %}
  - {% ifversion ghec %}If your organization is owned by an enterprise account, identify{% else %}Identify{% endif %} any actions taken by the compromised token on your enterprise's resources. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)."
{%- endif %}
- For all other secrets, first verify that the secret committed to {% data variables.product.product_name %} is valid. If so, create a new secret, update any services that use the old secret, and then delete the old secret.

{% ifversion fpt or ghec %}
{% note %}

**Note:** If a secret is detected in a public repository on {% data variables.product.prodname_dotcom_the_website %} and the secret also matches a partner pattern, an alert is generated and the potential secret is reported to the service provider. For details of partner patterns, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

{% endnote %}
{% endif %}

## Configuring notifications for {% data variables.secret-scanning.alerts %}

{% ifversion secret-scanning-backfills %}
Notifications are different for incremental scans and historical scans.

### Incremental scans

{% endif %}

{% data reusables.secret-scanning.secret-scanning-configure-notifications %}

{% ifversion secret-scanning-notification-settings %}
{% data reusables.repositories.navigate-to-repo %}
1. To start watching the repository, select **{% octicon "eye" aria-hidden="true" %} Watch**.

   ![Screenshot of the repository's main page. A dropdown menu, titled "Watch", is highlighted with an orange outline.](/assets/images/help/repository/repository-watch-dropdown.png)

1. In the dropdown menu, click **All Activity**. Alternatively, to only subscribe to security alerts, click **Custom**, then click **Security alerts**.
1. Navigate to the notification settings for your personal account. These are available at [https://github.com/settings/notifications](https://github.com/settings/notifications).
1. On your notification settings page, under "Subscriptions", then under "Watching", select the **Notify me** dropdown.
1. Select "Email" as a notification option, then click **Save**.

   ![Screenshot of the notification settings for a user account. An element header, titled "Subscriptions", and a sub-header, titled "Watching", are shown. A checkbox, titled "Email", is highlighted with an orange outline.](/assets/images/help/notifications/repository-watching-notification-options.png)
{% endif %}

{% data reusables.notifications.watch-settings %}

{% ifversion secret-scanning-backfills %}

### Historical scans

For historical scans, {% data variables.product.product_name %} notifies the following users:

- Organization owners, enterprise owners, and security managers—whenever a historical scan is complete, even if no secrets are found.
- Repository administrators, security managers, and users with custom roles with read/write access—whenever a historical scan detects a secret, and according to their notification preferences.

We do _not_ notify commit authors.

{% data reusables.notifications.watch-settings %}

{% endif %}

## Auditing responses to secret scanning alerts

{% data reusables.secret-scanning.audit-secret-scanning-events %}
