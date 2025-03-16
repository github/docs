---
title: Reviewing requests to bypass push protection
shortTitle: Review bypass requests
intro: 'You can use security overview to review requests to bypass push protection from contributors pushing to repositories across your organization.'
permissions: '{% data reusables.permissions.security-overview %}'
type: how_to
topics:
  - Security overview
  - Secret Protection
  - Organizations
  - Teams
  - Secret scanning
  - Alerts
versions:
  feature: security-overview-delegated-bypass-requests
---

## About bypass requests

If your organization has configured delegated bypass for push protection, a designated team of reviewers controls which organization members can push secrets to repositories in your organization, and which members must first make a "bypass request" in order to push the secret.

On the "Bypass requests" page in security overview, reviewers can find, review (approve or deny) and manage these requests.

For more information, see [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/managing-requests-to-bypass-push-protection).

## Reviewing bypass requests for an organization

{% data reusables.organizations.navigate-to-org %}
{% data reusables.organizations.security-overview %}
1. In the sidebar, under "Requests", click **{% octicon "key" aria-hidden="true" %} Push protection bypass**.
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
|`Cancelled`| The request has been cancelled by the contributor.|
|`Completed`|The request has been approved and the commit(s) have been pushed to the repository.|
|`Denied`|The request has been reviewed and denied.|
|`Expired`| The request has expired. Requests are valid for 7 days. |
|`Open`| The request has either not yet been reviewed, or has been approved but the commit(s) have not been pushed to the repository.  |

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection)
* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection)
