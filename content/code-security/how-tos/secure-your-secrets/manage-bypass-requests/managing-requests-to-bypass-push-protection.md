---
title: Managing requests to bypass push protection
intro: As a member of the bypass list for an organization or repository, you can review bypass requests from other members of the organization or repository.
permissions: '{% data reusables.permissions.delegated-bypass-list %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
contentType: how-tos
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
  - Repositories
shortTitle: Manage bypass requests
redirect_from:
  - /code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/managing-requests-to-bypass-push-protection
---

{% data reusables.secret-scanning.push-protection-delegate-bypass-beta-note %}

When delegated bypass for push protection is enabled, designated reviewers can approve or deny requests from contributors who want to push commits containing secrets.

This article explains how to review and manage bypass requests for repositories and organizations.

For more information about how bypass requests work, see [AUTOTITLE](/code-security/concepts/secret-security/about-bypass-requests-for-push-protection).

## Managing requests for a repository

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

## Managing requests for an organization

Organization owners, security managers and organization members with the relevant fine-grained permission (via a custom role) can review and manage bypass requests for all repositories in the organization using security overview. See [AUTOTITLE](/code-security/security-overview/reviewing-requests-to-bypass-push-protection).

{% endif %}

## Filtering requests

You can filter requests by:

* Approver (member of the bypass list)
* Requester (contributor making the request)
* Timeframe
* Status

### Filtering by status

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
