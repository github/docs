---
title: Securing your enterprise with Managed Users
intro: 'Learn about Enterprise Managed Users.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Enterprise
shortTitle: Managed users
---

With {% data variables.product.prodname_emus %}, you manage the lifecycle and authentication of your users on {% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %} from an external identity management system, or IdP:

* Your IdP **provisions new user accounts** on {% data variables.product.prodname_dotcom %}, with access to your enterprise.
* Users must **authenticate on your IdP** to access your enterprise's resources on {% data variables.product.prodname_dotcom %}.
* You control **usernames, profile data, organization membership, and repository access** from your IdP.
* If your enterprise uses OIDC SSO, {% data variables.product.prodname_dotcom %} will validate access to your enterprise and its resources using your IdP's **Conditional Access Policy (CAP)**. See [AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy).
* {% data variables.enterprise.prodname_managed_users_caps %} **cannot create public content** or collaborate outside your enterprise. See [AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts).

See [AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/about-enterprise-managed-users).

## Get started with managed users

To use {% data variables.product.prodname_emus %}, you will:

* Configure authentication using SAML or OIDC
* Configure SCIM provisioning
* Provision users to your enterprise

To get started, see [AUTOTITLE](/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users).

## Next steps

Next, learn how to set up an organization in your enterprise. See [AUTOTITLE](/enterprise-onboarding/setting-up-organizations-and-teams/setting-up-an-organization).
