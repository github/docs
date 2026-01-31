---
title: Evaluating alerts from secret scanning
intro: Learn about additional features that can help you evaluate alerts and prioritize their remediation, such as checking a secret's validity.
permissions: '{% data reusables.permissions.secret-scanning-alerts %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
  - Repositories
shortTitle: Evaluate alerts
allowTitleToDifferFromFilename: true
redirect_from:
  - /code-security/secret-scanning/managing-alerts-from-secret-scanning/evaluating-alerts
contentType: tutorials
---

## About evaluating alerts

There are some additional features that can help you to evaluate alerts in order to better prioritize and manage them. You can:

* Check the validity of a secret, to see if the secret is still active. {% ifversion fpt or ghec %}**Applies to {% data variables.product.company_short %} tokens only**.{% endif %} See [Checking a secret's validity](#checking-a-secrets-validity).{% ifversion secret-scanning-validity-check-partner-patterns %}
* Perform an "on-demand" validity check, to get the most up to date validation status. See [Performing an on-demand validity check](#performing-an-on-demand-validity-check).{% endif %}
* Review a token's metadata. **Applies to {% data variables.product.company_short %} tokens only**. For example, to see when the token was last used. See [Reviewing {% data variables.product.company_short %} token metadata](#reviewing-github-token-metadata).{% ifversion secret-scanning-extended-metadata-checks %}
* Review extended metadata checks for an exposed secret, to see details such as who owns the secret and how to contact the secret owner. **Applies to OpenAI API, Google OAuth, and Slack tokens only**. See [Reviewing extended metadata for a token](#reviewing-extended-metadata-for-a-token).{% endif %}{% ifversion secret-scanning-multi-repo-public-leak %}
* Review the labels assigned to the alert. For more information, see [Reviewing alert labels](#reviewing-alert-labels).{% endif %}

## Checking a secret's validity

Validity checks help you prioritize alerts by telling you which secrets are `active` or `inactive`. An `active` secret is one that could still be exploited, so these alerts should be reviewed and remediated as a priority.

By default, {% data variables.product.company_short %} checks the validity of {% data variables.product.company_short %} tokens and displays the validation status of the token in the alert view.

Organizations using {% data variables.product.prodname_team %} or {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_secret_protection %} can also enable validity checks for partner patterns. For more information, see [Checking a secret's validity](/code-security/secret-scanning/managing-alerts-from-secret-scanning/evaluating-alerts#checking-a-secrets-validity).

{% data reusables.secret-scanning.validity-check-table %}

{% ifversion secret-scanning-validity-check-partner-patterns %}

{% data reusables.gated-features.partner-pattern-validity-check-ghas %}

For information on how to enable validity checks for partner patterns, see [AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-validity-checks-for-your-repository), and for information on which partner patterns are currently supported, see [AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns).

{% endif %}

You can use the REST API to retrieve a list of the most recent validation status for each of your tokens. For more information, see [AUTOTITLE](/rest/secret-scanning) in the REST API documentation. You can also use webhooks to be notified of activity relating to a {% data variables.product.prodname_secret_scanning %} alert. For more information, see the `secret_scanning_alert` event in [AUTOTITLE](/webhooks/webhook-events-and-payloads?actionType=created#secret_scanning_alert).

{% ifversion copilot-chat-ghas-alerts %}

## Asking {% data variables.copilot.copilot_chat %} about {% data variables.product.prodname_secret_scanning %} alerts

With a {% data variables.copilot.copilot_enterprise %} license, you can ask {% data variables.copilot.copilot_chat_short %} for help to better understand security alerts, including {% data variables.product.prodname_secret_scanning %} alerts, in repositories in your organization. For more information, see [AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#asking-questions-about-alerts-from-github-advanced-security-features).

{% endif %}

{% ifversion secret-scanning-validity-check-partner-patterns %}

## Performing an on-demand validity check

Once you have enabled validity checks for partner patterns for your repository, you can perform an "on-demand" validity check for any supported secret by clicking **{% octicon "sync" aria-hidden="true" aria-label="sync" %} Verify secret** in the alert view. {% data variables.product.company_short %} will send the pattern to the relevant partner and display the validation status of the secret in the alert view.

![Screenshot of the UI showing a {% data variables.product.prodname_secret_scanning %} alert. A button, labeled "Verify secret" is highlighted with an orange outline.](/assets/images/help/security/secret-scanning-verify-secret.png)

{% endif %}

## Reviewing {% data variables.product.company_short %} token metadata

> [!NOTE]
> Metadata for {% data variables.product.company_short %} tokens is currently in {% data variables.release-phases.public_preview %} and subject to change.

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

{% ifversion secret-scanning-user-owned-repos %}{% data reusables.secret-scanning.secret-scanning-user-owned-repo-access %} If access is granted, {% data variables.product.prodname_dotcom %} will notify the owner of the repository containing the leaked secret, report the action in the repository owner and enterprise audit logs, and enable access for 2 hours.{% ifversion ghec %} For more information, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-repositories-in-your-enterprise/accessing-user-owned-repositories-in-your-enterprise).{% endif %}{% endif %}

{% ifversion secret-scanning-extended-metadata-checks %}

## Reviewing extended metadata for a token

{% data reusables.secret-scanning.metadata-checks-public-preview %}

In the view for an active {% data variables.product.company_short %} token alert, you can see extended metadata information, such as owner and contact details.

The following table shows **all the available metadata**. Note that metadata checks are currently limited to OpenAI API, Google OAuth, and Slack tokens, and the metadata shown for each token may represent only a subset of what exists.

| Metadata type      | Description                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| Owner ID           | Provider’s unique identifier for the user or service account that owns the secret                  |
| Owner name         | Human‑readable username or display name of the secret’s owner                                      |
| Owner email        | Email address associated with the owner                              |
| Org name           | Name of the organization / workspace / project the secret belongs to                               |
| Org ID             | Provider’s unique identifier for that organization                           |
| Secret issued date | Timestamp when the secret (token or key) was created or most recently issued                          |
| Secret expiry date | Timestamp when the secret is scheduled to expire                     |
| Secret name        | Human‑assigned display name or label for the secret                                |
| Secret ID          | Provider’s unique identifier for the secret    |

{% endif %}

{% ifversion secret-scanning-multi-repo-public-leak-deduped-alerts or secret-scanning-multi-repo-public-leak %}

## Reviewing alert labels

In the alert view, you can review any labels assigned to the alert. The labels provide additional details about the alert, which can inform the approach you take for remediation.

{% data variables.product.prodname_secret_scanning_caps %} alerts can have the following labels assigned to them. Depending on the labels assigned, you'll see additional information in the alert view.

|Label|Description|Alert view information|
|-------------------------|--------------------------------------------------------------------------------|-------------------------|
|`public leak`| The secret detected in your repository has also been found as publicly leaked by at least one of {% data variables.product.github %}'s scans of code, discussions, gists, issues, pull requests, and wikis. This may require you to address the alert with greater urgency, or remediate the alert differently compared to a privately exposed token. | You'll see links to any specific public locations where the leaked secret has been detected. |
|`multi-repo`| The secret detected in your repository has been found across multiple repositories in your organization or enterprise. This information may help you more easily dedupe the alert across your organization or enterprise. | If you have appropriate permissions, you'll see links to any specific alerts for the same secret in your organization or enterprise. |

{% endif %}

## Next steps

* [AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/resolving-alerts)
