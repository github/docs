---
title: About delegated bypass for push protection
intro: 'You can control which teams or roles have the ability to bypass push protection in your organization or repository.'
product: '{% data reusables.gated-features.delegated-bypass %}'
versions:
  feature: push-protection-delegated-bypass
type: overview
topics:
  - Secret scanning
  - Advanced Security
  - Alerts
  - Repositories
shortTitle: About delegated bypass
---

## About delegated bypass for push protection

{% data reusables.secret-scanning.push-protection-delegate-bypass-beta-note %}

By default, when push protection is enabled for a repository, anyone with write access can still push a secret to the repository, provided that they specify a reason for bypassing push protection.

With delegated bypass for push protection, you can:

* **Choose** which individuals, roles, and teams can bypass push protection.
* Introduce a **review and approval** cycle for pushes containing secrets from all other contributors.

{% ifversion push-protection-delegated-bypass-file-upload-support %}Delegated bypass applies to files created, edited, and uploaded on {% data variables.product.prodname_dotcom %}.{% endif %}

To set up delegated bypass, organization owners or repository administrators create a list of users with bypass privileges. This designated list of users can then:
* Bypass push protection, by specifying a reason for bypassing the block.
* Manage (approve or deny) bypass requests coming from all other contributors. These requests are located in the "Push protection bypass" page in the **Security** tab of the repository.

The following types of users can always bypass push protection without having to request bypass privileges:
* Organization owners
* Security managers
* Users in teams, default roles, or custom roles that have been added to the bypass list.{% ifversion push-protection-bypass-fine-grained-permissions %}
* Users who are assigned (either directly or via a team) a custom role with the "review and manage secret scanning bypass requests" fine-grained permission.{% endif %}

## Next steps

* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/enabling-delegated-bypass-for-push-protection)
* [AUTOTITLE](/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/delegated-bypass-for-push-protection/managing-requests-to-bypass-push-protection)
