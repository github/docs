---
title: About delegated bypass for push protection
intro: 'You can control which teams or roles have the ability to bypass push protection in your organization or repository.'
product: '{% data reusables.gated-features.push-protection-for-repos %}'
versions:
  feature: push-protection-delegated-bypass
type: overview
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: Delegated bypass
---

## About delegated bypass for push protection

{% data reusables.secret-scanning.push-protection-delegate-bypass-beta-note %}

{% data reusables.secret-scanning.push-protection-delegated-bypass-intro %}

When you enable push protection, by default, anyone with write access to the repository can choose to bypass the protection by specifying a reason for allowing the push containing a secret. With delegated bypass, only specific roles and teams can bypass push protection. All other contributors are instead obligated to make a request for "bypass privileges", which is sent to a designated group of reviewers who either approve or deny the request to bypass push protection.

If the request to bypass push protection is approved, the contributor can push the commit containing the secret. If the request is denied, the contributor must remove the secret from the commit (or commits) containing the secret before pushing again.

To configure delegated bypass, organization owners or repository administrators must change the "Who can bypass push protection for {% data variables.product.prodname_secret_scanning %}" setting in the UI from **Anyone with write access** to **Specific roles and teams**.

Organization owners or repository administrators are then prompted to create a "bypass list". The bypass list comprises the specific roles and teams, such as the security team or repository administrators, who oversee requests from non-members to bypass push protection. For more information, see "[Configuring delegated bypass for an organization](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection#configuring-delegated-bypass-for-an-organization)" and "[Configuring delegated bypass for a repository](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection#configuring-delegated-bypass-for-a-repository)."

{% ifversion push-protection-bypass-fine-grained-permissions %} Alternatively, instead of creating a bypass list, you can grant specific organization members the ability to review and manage bypass requests using fine-grained permissions. For more information, see "[Using fine-grained permissions to control who can review and manage bypass requests](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection#using-fine-grained-permissions-to-control-who-can-review-and-manage-bypass-requests)."{% endif %}

Members {% ifversion push-protection-bypass-fine-grained-permissions %}with permission to review (approve or deny) bypass requests can manage these {% else %}of the bypass list can review and manage {% endif %}requests through the "Push protection bypass" page in the **Security** tab of the repository. For more information, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/managing-requests-to-bypass-push-protection)."

{% data reusables.secret-scanning.push-protection-delegated-bypass-note %}

For information about enabling delegated bypass, see "[AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection)."
