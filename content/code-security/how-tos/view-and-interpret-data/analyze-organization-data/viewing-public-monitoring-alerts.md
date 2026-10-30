---
title: Viewing and managing public monitoring alerts
shortTitle: View and manage public monitoring alerts
allowTitleToDifferFromFilename: true
intro: 'Find and manage alerts for credentials your enterprise members have exposed in public repositories across {% data variables.product.github %}.'
permissions: 'Enterprise owners and enterprise security managers can access the public monitoring page in security overview.'
versions:
  feature: secret-scanning-public-monitoring
contentType: how-tos
category:
  - Secure at scale
---

## About the public monitoring page

The **Public monitoring** page is a dedicated view within the enterprise-level security overview. It displays alerts for secrets detected in public repositories across {% data variables.product.github %} that are attributed to your enterprise members or users with an email matching your enterprise's verified domain.

> [!NOTE]
> The Public monitoring page is available at the enterprise level only. It is not available at the organization level.

## Prerequisites

Public monitoring must be enabled for your enterprise. See [AUTOTITLE](/code-security/how-tos/secure-at-scale/configure-enterprise-security/manage-your-coverage/enabling-public-monitoring-for-your-enterprise).

## Viewing public monitoring alerts

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.security-and-code-quality-tab %}
1. In the left sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} Public monitoring**.

   The alert list shows each detected secret with the following details:

   * The type of secret detected (for example, "Google API Key")
   * A partial secret value
   * Who the leak is attributed to and in which public repository
   * How long ago the secret was detected

1. Click an alert to open the detail panel. The panel includes:
   * The date the secret was committed
   * The full secret literal
   * Attribution details, including the committer's username and email
   * The file location where the secret was detected, with the secret highlighted in context
   * A **Recommendations** tab with suggested remediation steps

## Triaging public monitoring alerts

Use the available alert information and controls to focus and prioritize your review:

* **Activity:** Review an alert's timeline to see actions and state changes. This shows how your enterprise has triaged the alert.
* **Filters:** Filter the alert list by repository, committer, secret type, attribution method, or state. Use the state filter to focus on open or closed alerts.
* **Validity:** For supported secret types, public monitoring periodically checks credential validity. Use the `active`, `inactive`, or `unknown` status to prioritize active credentials for remediation.

## Dismissing and reopening alerts

When you have reviewed an alert, you can dismiss it to remove it from the list of open alerts. If you need to revisit a dismissed alert later, you can reopen it. When you dismiss or reopen an alert, you can add an optional comment to record the reason for your decision.

Dismissing a public monitoring alert updates its state for your enterprise. It does not affect a repository-level secret scanning alert for the same secret. It also does not revoke the credential or remove the secret from its public location.

Dismissing alerts you have already triaged helps you manage a high volume of public monitoring alerts, keeping the active list focused on the exposures that still need attention.

### Dismissing an alert

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.security-and-code-quality-tab %}
1. In the left sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} Public monitoring**.
1. Click the alert you want to dismiss.
1. Select the **Close as** dropdown menu, then click a reason for dismissing the alert.
1. Optionally, in the comment field, add a dismissal comment.
1. To confirm, click **Dismiss**.

### Reopening an alert

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.security-and-code-quality-tab %}
1. In the left sidebar, click **{% octicon "key" aria-hidden="true" aria-label="key" %} Public monitoring**.
1. To view closed alerts, click **Closed**, then click the alert you want to reopen. 
1. Click **Reopen alert**.
1. Optionally, in the comment field, type a reason for reopening the alert.
1. To confirm, click **Reopen**.
