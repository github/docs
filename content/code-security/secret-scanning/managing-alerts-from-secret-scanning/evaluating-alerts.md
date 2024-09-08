---
title: Evaluating alerts from secret scanning
intro: 'Learn about additional features that can help you evaluate alerts and prioritize their remediation, such as checking a secret''s validity.'
permissions: 'People with admin access to a {% ifversion fpt %}public {% endif %}repository can view {% data variables.secret-scanning.alerts %} for the repository.'
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
shortTitle: Evaluate alerts
allowTitleToDifferFromFilename: true
---

## About evaluating alerts

There are some additional features that can help you to evaluate alerts in order to better prioritize and manage them. You can:

* Check the validity of a secret, to see if the secret is still active. {% ifversion fpt or ghes %}**Applies to {% data variables.product.company_short %} tokens only**.{% endif %} For more information, see "[Checking a secret's validity](#checking-a-secrets-validity)."{% ifversion secret-scanning-validity-check-partner-patterns %}
* Perform an "on-demand" validity check, to get the most up to date validation status. For more information, see "[Performing an on-demand-validity-check](#performing-an-on-demand-validity-check)."{% endif %}{% ifversion secret-scanning-github-token-metadata %}
* Review a token's metadata. **Applies to {% data variables.product.company_short %} tokens only**. For example, to see when the token was last used. For more information, see "[Reviewing {% data variables.product.company_short %} token metadata](#reviewing-github-token-metadata)."{% endif %}

## Checking a secret's validity

Validity checks help you prioritize alerts by telling you which secrets are `active` or `inactive`. An `active` secret is one that could still be exploited, so these alerts should be reviewed and remediated as a priority.

By default, {% data variables.product.company_short %} checks the validity of {% data variables.product.company_short %} tokens and displays the validation status of the token in the alert view.

{% ifversion fpt %}

Organizations using {% data variables.product.prodname_ghe_cloud %} with a license for {% data variables.product.prodname_GH_advanced_security %} can also enable validity checks for partner patterns. For more information, see "[Checking a secret's validity](/enterprise-cloud@latest/code-security/secret-scanning/managing-alerts-from-secret-scanning/evaluating-alerts#checking-a-secrets-validity)" in the {% data variables.product.prodname_ghe_cloud %} documentation.

{% endif %}

{% data reusables.secret-scanning.validity-check-table %}

{% ifversion secret-scanning-validity-check-partner-patterns %}

{% data reusables.gated-features.partner-pattern-validity-check-ghas %}

For information on how to enable validity checks for partner patterns, see "[AUTOTITLE](/code-security/secret-scanning/enabling-secret-scanning-features/enabling-validity-checks-for-your-repository)," and for information on which partner patterns are currently supported, see "[AUTOTITLE](/code-security/secret-scanning/introduction/supported-secret-scanning-patterns#high-confidence-patterns)."

{% endif %}

You can use the REST API to retrieve a list of the most recent validation status for each of your tokens. For more information, see "[AUTOTITLE](/rest/secret-scanning)" in the REST API documentation. You can also use webhooks to be notified of activity relating to a {% data variables.product.prodname_secret_scanning %} alert. For more information, see the `secret_scanning_alert` event in "[AUTOTITLE](/webhooks/webhook-events-and-payloads?actionType=created#secret_scanning_alert)."

{% ifversion copilot-chat-ghas-alerts %}

## Asking {% data variables.product.prodname_copilot_chat %} about {% data variables.product.prodname_secret_scanning %} alerts

With a {% data variables.product.prodname_copilot_enterprise %} license, you can ask {% data variables.product.prodname_copilot_chat_short %} for help to better understand security alerts, including {% data variables.product.prodname_secret_scanning %} alerts, in repositories in your organization. For more information, see "[AUTOTITLE](/copilot/using-github-copilot/asking-github-copilot-questions-in-githubcom#asking-questions-about-alerts-from-github-advanced-security-features)."

{% endif %}

{% ifversion secret-scanning-validity-check-partner-patterns %}

## Performing an on-demand validity check

Once you have enabled validity checks for partner patterns for your repository, you can perform an "on-demand" validity check for any supported secret by clicking {% octicon "sync" aria-hidden="true" %} **Verify secret** in the alert view. {% data variables.product.company_short %} will send the pattern to the relevant partner and display the validation status of the secret in the alert view.

![Screenshot of the UI showing a {% data variables.product.prodname_secret_scanning %} alert. A button, labeled "Verify secret" is highlighted with an orange outline.](/assets/images/help/security/secret-scanning-verify-secret.png)

{% endif %}

{% ifversion secret-scanning-github-token-metadata %}

## Reviewing {% data variables.product.company_short %} token metadata

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

## Next steps

* "[AUTOTITLE](/code-security/secret-scanning/managing-alerts-from-secret-scanning/resolving-alerts)"
