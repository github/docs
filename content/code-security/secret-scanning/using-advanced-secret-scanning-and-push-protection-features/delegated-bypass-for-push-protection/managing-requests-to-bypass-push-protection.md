---
title: Managing requests to bypass push protection
intro: 'As a member of the bypass list for an organization or repository, you can review bypass requests from other members of the organization or repository.'
permissions: '{% data reusables.permissions.delegated-bypass-list %}'
versions:
  feature: push-protection-delegated-bypass
type: how_to
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
  - Repositories
shortTitle: Manage bypass requests
---

## Managing requests to bypass push protection

{% data reusables.secret-scanning.push-protection-delegate-bypass-beta-note %}

When enabling delegated bypass for push protection, organization owners or repository administrators decide which {% ifversion push-protection-bypass-fine-grained-permissions %}individuals, {% endif %}roles or teams can review (approve or deny) requests to bypass push protection.

When a contributor requests bypass privileges to push a commit containing a secret, this designated group of reviewers:

* Receives an email notification containing a link to the request.
* Reviews the request in the "Bypass requests" page of the repository{% ifversion security-overview-delegated-bypass-requests %}, or in the organization's security overview{% endif %}.
* Has 7 days to either approve or deny the request before the request expires.

To help reviewers efficiently triage secrets for which there is a bypass request, {% data variables.product.prodname_dotcom %} displays the following information in the request:

* Name of the user who attempted the push.
* Repository where the push was attempted.
* Commit hash of the push.
* Timestamp of the push.{% ifversion push-protection-delegated-bypass-enhancements %}
* File path and branch information. The branch information is only available for pushes to single branches.{% endif %}

The contributor is notified of the decision by email and must take the required action:

* If the request is approved, the contributor can push the commit containing the secret to the repository.
* If the request is denied, the contributor must remove the secret from the commit in order to successfully push the commit to the repository.

### Managing requests for a repository

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-security %}
{% data reusables.repositories.bypass-requests-settings %}
1. Select the **All statuses** dropdown menu, then click **Open** to view requests that are awaiting review, and those that have been approved but for which the commits haven't been pushed to the repository yet.
1. Click the request that you want to review.
1. Review the details of the request.
{% ifversion push-protection-bypass-reviewer-comment -%}
{% data reusables.repositories.bypass-requests-reviewer-comment %}
{%- endif %}
1. To allow the contributor to push the commit containing the secret, click **Approve bypass request**. Or, to require the contributor to remove the secret from the commit, click **Deny bypass request**.

{% ifversion security-overview-delegated-bypass-requests %}

### Managing requests for an organization

Organization owners, security managers and organization members with the relevant fine-grained permission (via a custom role) can review and manage bypass requests for all repositories in the organization using security overview. See [AUTOTITLE](/code-security/security-overview/reviewing-requests-to-bypass-push-protection).

{% endif %}

### Filtering requests

You can filter requests by:

* Approver (member of the bypass list)
* Requester (contributor making the request)
* Timeframe
* Status

#### Filtering by status

The following statuses are assigned to a request:

|Status|Description|
|---------|-----------|
|`Cancelled`| The request has been canceled by the contributor.|
|`Completed`|The request has been approved and the commit(s) have been pushed to the repository.|
|`Denied`|The request has been reviewed and denied.|
|`Expired`| The request has expired. Requests are valid for 7 days. |
|`Open`| The request has either not yet been reviewed, or has been approved but the commit(s) have not been pushed to the repository.  |

## Further reading

* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/about-delegated-bypass-for-push-protection)
* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection){% ifversion security-overview-delegated-bypass-requests %}
* [AUTOTITLE](/code-security/security-overview/reviewing-requests-to-bypass-push-protection){% endif %}
