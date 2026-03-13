---
title: About user offboarding on {% data variables.product.prodname_ghe_cloud %}
shortTitle: User offboarding
intro: 'Manage access with confidence by understanding the recommended approach for offboarding users.'
versions:
  ghec: '*'
contentType: concepts
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## How should I offboard users?

The method for offboarding a user depends on your enterprise type:

* **Personal accounts**: Remove the user from the enterprise account using the {% data variables.product.github %} UI or API.
  * Outside collaborators are an exception to this process. They cannot be removed in the enterprise settings, and must be removed from each repository instead.
* **{% data variables.product.prodname_emus %}**: Suspend the user's account by removing the user from the {% data variables.product.github %} application in your identity provider.
  * The user will show as suspended on your enterprise's "People" page.
  * It is **not** possible to remove a {% data variables.enterprise.prodname_managed_user %} from the enterprise completely.

For instructions, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/removing-a-member-from-your-enterprise).

## What happens when a user is offboarded?

When you offboard a user by following the instructions linked above:

* The offboarded user loses access to private and internal resources in your enterprise and organizations.
* The user's {% data variables.product.pat_generic_plural %}, SSH keys, and app authorizations can no longer be used to access your enterprise's and organizations' resources. Access to your resources is restored if the user is added back to the enterprise and relevant organizations.
* The user stops consuming licenses granted from your enterprise, including {% data variables.product.prodname_enterprise %} and {% data variables.product.prodname_copilot %} licenses. This change may not be reflected on your bill until the next billing cycle.
* If you use {% data variables.product.prodname_emus %}, the user will no longer be able to sign in to their {% data variables.enterprise.prodname_managed_user %}.
* If you use an enterprise with personal accounts, the user will still be able to sign in to their account and access other resources on {% data variables.product.github %}, even if you have enabled SAML SSO for your enterprise or organizations. This is because SSO only applies to your enterprise- or organization-owned resources.
* The user's commits, issues, pull requests, comments, and so on are retained in organization-owned repositories. However, the user's username is obfuscated if you use {% data variables.product.prodname_emus %}.

For {% data variables.product.prodname_emus %}, you will find a more exhaustive list of effects of offboarding in [AUTOTITLE](/admin/managing-iam/provisioning-user-accounts-with-scim/deprovisioning-and-reinstating-users).

## What about removing a user from all organizations?

Historically, some enterprises' offboarding processes have relied on removing a user from all organizations in the enterprise. However, in many cases, this approach is **not** sufficient for fully offboarding a user.

### When is a user removed from the enterprise?

If a user loses access to all organizations in an enterprise, the user is also removed from the enterprise account if **all** of the following things are true:

* You use an enterprise with **personal accounts**.
* Your enterprise has **disabled** the policy described in [AUTOTITLE](/admin/enforcing-policies/enforcing-policies-for-your-enterprise/control-offboarding).
* The user does **not** have the enterprise owner or enterprise billing manager role.

### What happens if a user remains in the enterprise?

In **any** other situation, a user who loses access to all organizations remains in the enterprise.

* If the user has the enterprise owner or enterprise billing manager role, they remain in the enterprise with this role.
* If the user doesn't have one of those roles, the user becomes an unaffiliated user.

Users without organization membership cannot access internal repositories in the enterprise. They also do not consume a {% data variables.product.prodname_enterprise %} license, unless they meet another criterion listed in [AUTOTITLE](/billing/reference/github-license-users#organizations-on-github-enterprise-cloud). However, they keep other privileges including enterprise roles and {% data variables.product.prodname_copilot %} licenses granted directly from the enterprise.

For more information, see [AUTOTITLE](/admin/managing-accounts-and-repositories/managing-roles-in-your-enterprise/abilities-of-roles).
