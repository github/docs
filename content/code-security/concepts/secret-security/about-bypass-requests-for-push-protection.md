---
title: About bypass requests for push protection
intro: 'Learn how bypass requests work when push protection blocks commits containing secrets.'
permissions: '{% data reusables.permissions.delegated-bypass-list %}'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Secret scanning
  - Secret Protection
  - Alerts
  - Repositories
shortTitle: Bypass requests
contentType: concepts
---

## About bypass requests for push protection

When push protection blocks a commit containing a secret, contributors may need to bypass the block to complete their push. If delegated bypass for push protection is enabled, contributors without bypass privileges must submit a bypass request and wait for approval from designated reviewers. This allows organizations to maintain security oversight while enabling legitimate exceptions when needed. For more information, see [AUTOTITLE](/code-security/concepts/secret-security/about-delegated-bypass-for-push-protection).

If delegated bypass for push protection is not enabled, contributors can bypass push protection at their own discretion.

When enabling delegated bypass for push protection, organization owners or repository administrators decide which {% ifversion push-protection-bypass-fine-grained-permissions %}individuals, {% endif %}roles or teams can review (approve or deny) requests to bypass push protection.

If you are a designated reviewer, you must review bypass requests and either approve or deny them based on the request details and your organization's security policies.

## How bypass requests work

When a contributor without bypass privileges requests to push a commit containing a secret, a bypass requests is sent to the reviewers. The designated group of reviewers:

* Receives an email notification containing a link to the request
* Reviews the request in the "Bypass requests" page of the repository{% ifversion security-overview-delegated-bypass-requests %}, or in the organization's security overview{% endif %}.
* Has **7 days** to either approve or deny the request before the request expires

### Information available to reviewers

{% data variables.product.github %} displays the following information for each request:

* Name of the user who attempted the push
* Repository where the push was attempted
* Commit hash of the push
* Timestamp of the push{% ifversion push-protection-delegated-bypass-enhancements %}
* File path and branch information (branch information is only available for pushes to single branches){% endif %}

### Outcomes

The contributor is notified by email of the decision and must take the required action:

* **If the request is approved**: The contributor can push the commit containing the secret to the repository.
* **If the request is denied**: The contributor must remove the secret from the commit before successfully pushing the commit to the repository.

## Automatic bypass request reviews

You can use {% data variables.product.prodname_github_apps %} with fine-grained permissions to programmatically review and approve push protection bypass requests. This enables you to enforce consistent security policies, integrate with external security tools, or reduce manual review burden.

{% ifversion ghes %}

>[!NOTE]
> For {% data variables.product.prodname_ghe_server %}, the use of {% data variables.product.prodname_github_apps %} to review bypass requests is available from version 3.19.

{% endif %}

> For more information about permissions, see [Organization permissions for "Organization bypass requests for secret scanning"](/enterprise-cloud@latest/rest/authentication/permissions-required-for-github-apps?apiVersion=2022-11-28#organization-permissions-for-organization-bypass-requests-for-secret-scanning).

## Next steps

* To learn how to manage bypass requests for push protection as a reviewer, see [AUTOTITLE](/code-security/how-tos/secure-your-secrets/manage-bypass-requests/managing-requests-to-bypass-push-protection).
