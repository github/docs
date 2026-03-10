---
title: Reviewing requests to bypass push protection
shortTitle: Review bypass requests
intro: Approve or deny requests from contributors who need to push commits containing secrets to your organization's repositories.
permissions: '{% data reusables.permissions.security-overview %}'
product: '{% data reusables.gated-features.security-overview-fpt-sp-only %}'
contentType: how-tos
topics:
  - Security overview
  - Secret Protection
  - Organizations
  - Teams
  - Secret scanning
  - Alerts
versions:
  feature: security-overview-delegated-bypass-requests
redirect_from:
  - /code-security/security-overview/reviewing-requests-to-bypass-push-protection
---

## Prerequisites

Before you can review bypass requests, delegated bypass must be enabled for your organization or repositories. See [AUTOTITLE](/code-security/how-tos/secure-your-secrets/manage-bypass-requests/enabling-delegated-bypass-for-push-protection).

You can review and manage these requests in security overview.

## Reviewing bypass requests for an organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the sidebar, under "Requests", click **{% octicon "key" aria-hidden="true" aria-label="key" %} Push protection bypass**.
1. Select the **All statuses** dropdown menu, then click **Open** to view requests that are awaiting review, or that have been approved but for which the commits haven't been pushed to the repository yet.
1. Click the request that you want to review.
1. Review the details of the request.
{% ifversion push-protection-bypass-reviewer-comment -%}
{% data reusables.repositories.bypass-requests-reviewer-comment %}
{%- endif %}
1. To allow the contributor to push the commit containing the secret, click **Approve bypass request**. Or, to require the contributor to remove the secret from the commit, click **Deny bypass request**.

## Filtering requests

You can filter requests by repository, approver (member who has reviewed the request), requester (contributor making the request), timeframe, and status.

### Filtering by status

The following statuses are assigned to a request:

|Status|Description|
|---------|-----------|
|{% ifversion fpt or ghec or ghes > 3.16 %}|
|`Approved`|The request has been approved, but the commit(s) have not yet been pushed to the repository.|
|{% endif %}|
|`Cancelled`|The request has been cancelled by the contributor.|
|`Completed`|The request has been approved and the commit(s) have been pushed to the repository{% ifversion fpt or ghec or ghes > 3.16 %}, or the request was rejected{% endif %}.|
|`Denied`|The request has been reviewed and denied.|
|`Expired`|The request has expired. Requests are valid for 7 days.|
|`Open`|The request has {% ifversion ghes < 3.17 %}either not yet been reviewed, or has been approved but the commit(s) have not been pushed to the repository{% else %}not yet been reviewed{% endif %}.|

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection)
* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection)
