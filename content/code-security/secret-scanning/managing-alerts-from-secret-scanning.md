---
title: Managing alerts from secret scanning
intro: You can view, evaluate and resolve alerts for secrets checked in to your repository.
permissions: 'People with admin access to a {% ifversion fpt %}public {% endif %}repository can view and dismiss secret scanning alerts for the repository.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/managing-alerts-from-secret-scanning
  - /code-security/secret-security/managing-alerts-from-secret-scanning
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
shortTitle: Manage secret alerts
---
## About the {% data variables.product.prodname_secret_scanning %} alerts page

{% data reusables.secret-scanning.secret-scanning-about-alerts %} {% data reusables.secret-scanning.repository-alert-location %}

{% ifversion secret-scanning-non-provider-patterns %}
To help you triage alerts more effectively, {% data variables.product.company_short %} separates alerts into two lists:
- **High confidence** alerts.
- **Other** alerts.

![Screenshot of the {% data variables.product.prodname_secret_scanning %} alert view. The button to toggle between "High confidence" and "Other" alerts is highlighted with an orange outline.](/assets/images/help/security/secret-scanning-high-confidence-alert-view.png)

### High confidence alerts list

The "High confidence" alerts list displays alerts that relate to supported patterns and specified custom patterns. This list is always the default view for the alerts page.

### Other alerts list

The "Other" alerts list displays alerts that relate to non-provider patterns (such as private keys){% ifversion secret-scanning-ai-generic-secret-detection %}, or generic secrets detected using AI (such as passwords){% endif %}. These types of alerts have a higher rate of false positives.

In addition, alerts that fall into this category:
- Are limited in quantity to 5000 alerts per repository (this includes open and closed alerts).
- Are not shown in the summary views for security overview, only in the "{% data variables.product.prodname_secret_scanning_caps %}" view.
- Only have the first five detected locations shown on {% data variables.product.prodname_dotcom %} for non-provider patterns{% ifversion secret-scanning-ai-generic-secret-detection %}, and only the first detected location shown for AI-detected generic secrets{% endif %}.

For {% data variables.product.company_short %} to scan for non-provider patterns{% ifversion secret-scanning-ai-generic-secret-detection %} and generic secrets{% endif %}, you must first enable the feature{% ifversion secret-scanning-ai-generic-secret-detection %}s{% endif %} for your repository or organization. For more information, see "[AUTOTITLE](/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories#enabling-scanning-for-non-provider-patterns){% ifversion secret-scanning-ai-generic-secret-detection %}" and "[AUTOTITLE](/code-security/secret-scanning/enabling-ai-powered-generic-secret-detection){% endif %}."

{% endif %}

## Viewing alerts

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
|`is:closed`|Displays closed alerts.|{% ifversion secret-scanning-bypass-filter %}
|`bypassed: true`|Displays alerts for secrets where push protection has been bypassed. For more information, see "[AUTOTITLE](/code-security/secret-scanning/push-protection-for-repositories-and-organizations)."|{% endif %}{% ifversion secret-scanning-validity-check %}
|`validity:active`| Displays alerts for secrets that are still active. {% ifversion fpt %}Applies to {% data variables.product.company_short %} tokens only.{% endif %} For more information about validity statuses, see "[Checking a secret's validity](#checking-a-secrets-validity)."|
|`validity:inactive`| Displays alerts for secrets that are no longer active.|
|`validity:unknown`| Displays alerts for secrets where the validity status of the secret is unknown.|{% endif %}
|`secret-type:SECRET-NAME`| Displays alerts for a specific secret type, for example, `secret-type:github_personal_access_token`. For a list of supported secret types, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secret)." |
|`provider:PROVIDER-NAME`|Displays alerts for a specific provider, for example, `provider:github`. For a list of supported partners, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."|{% ifversion secret-scanning-non-provider-patterns %}
|`confidence:high`| Displays alerts for high-confidence secrets, which relate to supported secrets and custom patterns. For a list of supported high-confidence patterns, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#high-confidence-patterns)." |
|`confidence:other`| Displays alerts for non-provider patterns, such as private keys{% ifversion secret-scanning-ai-generic-secret-detection %}, and AI-detected generic secrets, such as passwords{% endif %}. For a list of supported non-provider patterns, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#non-provider-patterns)." {% ifversion secret-scanning-ai-generic-secret-detection %}For more information AI-detected generic secrets, see "[AUTOTITLE](/code-security/secret-scanning/about-the-detection-of-generic-secrets-with-secret-scanning)."{% endif %}|{% endif %}

{% ifversion secret-scanning-validity-check %}

## Evaluating alerts

{% ifversion ghes = 3.9 %}You can check the validity of a secret, to see if the secret is still active. **Applies to GitHub tokens only**. For more information, see "[Checking a secret's validity](/code-security/secret-scanning/managing-alerts-from-secret-scanning#checking-a-secrets-validity)."
{% else %}
There are some additional features that can help you to evaluate alerts in order to better prioritize and manage them. You can:

- Check the validity of a secret, to see if the secret is still active. {% ifversion fpt or ghes %}**Applies to {% data variables.product.company_short %} tokens only**.{% endif %} For more information, see "[Checking a secret's validity](#checking-a-secrets-validity)."{% ifversion secret-scanning-validity-check-partner-patterns %}
- Perform an "on-demand" validity check, to get the most up to date validiation status. For more information, see "[Performing an on-demand-validity-check](#performing-an-on-demand-validity-check)."{% endif %}{% ifversion secret-scanning-github-token-metadata %}
- Review a token's metadata. **Applies to {% data variables.product.company_short %} tokens only**. For example, to see when the token was last used. For more information, see "[Reviewing {% data variables.product.company_short %} token metadata](#reviewing-github-token-metadata)."{% endif %}
{% endif %}

### Checking a secret's validity

{% ifversion secret-scanning-validity-check-partner-patterns %}

{% data reusables.secret-scanning.validity-check-partner-patterns-beta %}

{% endif %}

Validity checks help you prioritize alerts by telling you which secrets are `active` or `inactive`. An `active` secret is one that could still be exploited, so these alerts should be reviewed and remediated as a priority.

By default, {% data variables.product.company_short %} checks the validity of {% data variables.product.company_short %} tokens and displays the validitation status of the token in the alert view.

{% ifversion fpt %}

Organizations using {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %} can also enable validity checks for partner patterns. For more information, see "[Checking a secret's validity](/enterprise-cloud@latest/code-security/secret-scanning/managing-alerts-from-secret-scanning#checking-a-secrets-validity)" in the {% data variables.product.prodname_ghe_cloud %} documentation.

{% endif %}

{% ifversion secret-scanning-validity-check-partner-patterns %}

You can additionally choose to enable validity checks for partner patterns. Once enabled, {% data variables.product.company_short %} will periodically check the validity of a detected credential by sending the secret directly to the provider, as part of {% data variables.product.company_short %}'s formal secret scanning partnership program. {% data variables.product.company_short %} typically makes GET requests to check the validity of the credential, picks the least intrusive endpoints, and selects endpoints that don't return any personal information.

{% data variables.product.company_short %} displays the validation status of the secret in the alert view.

{% endif %}

{% data reusables.secret-scanning.validity-check-table %}

{% ifversion secret-scanning-validity-check-partner-patterns %}

{% data reusables.gated-features.partner-pattern-validity-check-ghas %}

For information on how to enable validity checks for partner patterns, see "[AUTOTITLE](/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories#enabling-validity-checks-for-partner-patterns)," and for information on which partner patterns are currently supported, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#high-confidence-patterns)."

{% endif %}

You can use the REST API to retrieve a list of the most recent validation status for each of your tokens. For more information, see "[AUTOTITLE](/rest/secret-scanning)" in the REST API documentation. You can also use webhooks to be notified of activity relating to a {% data variables.product.prodname_secret_scanning %} alert. For more information, see the `secret_scanning_alert` event in "[AUTOTITLE](/webhooks/webhook-events-and-payloads?actionType=created#secret_scanning_alert)."

{% ifversion secret-scanning-validity-check-partner-patterns %}

### Performing an on-demand validity check

Once you have enabled validity checks for partner patterns for your repository, you can perform an "on-demand" validity check for any supported secret by clicking {% octicon "sync" aria-hidden="true" %} **Verify secret** in the alert view. {% data variables.product.company_short %} will send the pattern to the relevant partner and display the validation status of the secret in the alert view.

![Screenshot of the UI showing a {% data variables.product.prodname_secret_scanning %} alert. A button, labeled "Verify secret" is highlighted with an orange outline.](/assets/images/help/security/secret-scanning-verify-secret.png)

{% endif %}

{% endif %}

{% ifversion secret-scanning-github-token-metadata %}

### Reviewing {% data variables.product.company_short %} token metadata

> [!NOTE]
> Metadata for {% data variables.product.company_short %} tokens is currently in public beta and subject to change.

In the view for an active {% data variables.product.company_short %} token alert, you can review certain metadata about the token. This metadata may help you identify the token and decide what remediation steps to take.

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

{% ifversion secret-scanning-user-owned-repos %}{% data reusables.secret-scanning.secret-scanning-user-owned-repo-access %} If access is granted, {% data variables.product.prodname_dotcom %} will notify the owner of the repository containing the leaked secret, report the action in the repository owner and enterprise audit logs, and enable access for 2 hours.{% ifversion ghec %} For more information, see "[AUTOTITLE](/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/accessing-user-owned-repositories-in-your-enterprise)."{% endif %}{% endif %}

{% endif %}

## Fixing alerts

Once a secret has been committed to a repository, you should consider the secret compromised. {% data variables.product.prodname_dotcom %} recommends the following actions for compromised secrets:

- For a compromised {% data variables.product.prodname_dotcom %} {% data variables.product.pat_generic %}, delete the compromised token, create a new token, and update any services that use the old token. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
{%- ifversion token-audit-log %}
  - {% ifversion ghec %}If your organization is owned by an enterprise account, identify{% else %}Identify{% endif %} any actions taken by the compromised token on your enterprise's resources. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/identifying-audit-log-events-performed-by-an-access-token)."
{%- endif %}
- For all other secrets, first verify that the secret committed to {% data variables.product.product_name %} is valid. If so, create a new secret, update any services that use the old secret, and then delete the old secret.

{% ifversion fpt or ghec %}

> [!NOTE]
> If a secret is detected in a public repository on {% data variables.product.prodname_dotcom_the_website %} and the secret also matches a partner pattern, an alert is generated and the potential secret is reported to the service provider. For details of partner patterns, see "[AUTOTITLE](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets)."

{% endif %}

## Closing alerts

> [!NOTE]
>{% data variables.product.prodname_secret_scanning_caps %} doesn't automatically close alerts when the corresponding token has been removed from the repository. You must manually close these alerts in the alert list on  {% data variables.product.prodname_dotcom %}.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
1. In the left sidebar, under "Vulnerability alerts", click **{% data variables.product.prodname_secret_scanning_caps %}**.
1. Under "{% data variables.product.prodname_secret_scanning_caps %}", click the alert you want to view. {% ifversion secret-scanning-partner-documentation-link-UI %}
1. To dismiss an alert, select the "Close as" dropdown menu and click a reason for resolving an alert.

   ![Screenshot of a {% data variables.product.prodname_secret_scanning %} alert. A dropdown menu, titled "Close as", is expanded and highlighted in a dark orange outline.](/assets/images/help/repository/secret-scanning-dismiss-alert-web-ui-link-partner-documentation.png)

   {% else %}
1. To dismiss an alert, select the "Mark as" dropdown menu and click a reason for resolving an alert.
   {% endif %}{% ifversion secret-scanning-dismissal-comment %}
1. Optionally, in the "Comment" field, add a dismissal comment. The dismissal comment will be added to the alert timeline and can be used as justification during auditing and reporting. You can view the history of all dismissed alerts and dismissal comments in the alert timeline. You can also retrieve or set a comment by using the {% data variables.product.prodname_secret_scanning_caps %} API. The comment is contained in the `resolution_comment` field. For more information, see "[AUTOTITLE](/rest/secret-scanning#update-a-secret-scanning-alert)" in the REST API documentation.
1. Click **Close alert**.
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
