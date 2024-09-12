---
title: Managing requests to bypass push protection
intro: 'As a member of the bypass list for an organization or repository, you can review bypass requests from other members of the organization or repository.'
product: '{% data reusables.gated-features.push-protection-for-repos %}'
permissions: 'Members of the bypass list can process requests from non-members to bypass push protection.'
versions:
  feature: push-protection-delegated-bypass
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Manage bypass requests
---

## Managing requests to bypass push protection

{% data reusables.secret-scanning.push-protection-delegate-bypass-beta-note %}

{% data reusables.secret-scanning.push-protection-delegated-bypass-intro %}

An organization owner or repository administrator defines which roles and teams are included in a bypass list. Members of the bypass list can view and manage all requests for bypass privileges on the "Push protection bypass" page, located under the **Security** tab of the repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection)."

{% data reusables.secret-scanning.push-protection-delegated-bypass-note %}

To help you effectively triage secrets for which there is a bypass request, {% data variables.product.prodname_dotcom %} displays the following information in the request:

* Name of the user who attempted the push.
* Repository where the push was attempted.
* Commit hash of the push.
* Timestamp of the push.{% ifversion push-protection-delegated-bypass-enhancements %}
* File path and branch information. The branch information is only available for pushes to single branches.{% endif %}

### Managing requests to bypass push protection at the repository level

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.bypass-requests-settings %}
1. Select the **All statuses** dropdown menu, then click **Open** to view requests that are awaiting review, or that have been approved but for which the commits haven't been pushed to the repository yet.
1. Click the request that you want to review.
1. Review the details of the request.
1. To allow the contributor to push the commit containing the secret, click **Approve bypass request**. Or, to require the contributor to remove the secret from the commit, click **Deny bypass request**.

### Filtering by request status

You can filter requests by approver (member of the bypass list), requester (contributor making the request), timeframe, and status. The following statuses are assigned to a request:

|Status|Description|
|---------|-----------|
|`Cancelled`| The request has been cancelled by the contributor.|
|`Completed`|The request has been approved and the commit(s) have been pushed to the repository.|
|`Denied`|The request has been reviewed and denied.|
|`Expired`| The request has expired. Requests are valid for 7 days. |
|`Open`| The request has either not yet been reviewed, or has been approved but the commit(s) have not been pushed to the repository.  |

When a contributor requests bypass privileges to push a commit containing a secret, members of the bypass list all receive an email notification containing a link to the request. Members of the bypass list then have 7 days to review and either approve or deny the request before the request expires.

The contributor is notified of the decision by email and must take the required action. If the request is approved, the contributor can push the commit containing the secret to the repository. If the request is denied, the contributor must remove the secret from the commit in order to successfully push the commit to the repository.
