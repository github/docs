---
title: Adding users to your enterprise
shortTitle: Add users
intro: 'Add users to your enterprise and control access to your organization''s resources.'
versions:
  ghec: '*'
redirect_from:
  - /enterprise-onboarding/getting-started-with-your-enterprise/securing-enterprise-resources-with-single-sign-on
  - /enterprise-onboarding/getting-started-with-your-enterprise/securing-your-enterprise-with-managed-users
---

The method of adding users to your enterprise and controlling authentication varies depending on the enterprise type that you chose.

## Personal accounts

If you chose an enterprise with personal accounts, you will invite users to your enterprise with their existing {% data variables.product.github %} account.

{% data reusables.enterprise-onboarding.inviting-users-to-your-enterprise %}

Later in this onboarding journey, you will add users to teams to grant access to organizations and delegate administrative roles.

### Enabling single sign-on for personal accounts

{% data reusables.saml.dotcom-saml-explanation %}

1. Check if your SAML service is supported. See [AUTOTITLE](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on#supported-saml-services).
1. Decide whether to configure SAML for your enterprise account or for individual organizations. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/deciding-whether-to-configure-saml-for-your-enterprise-or-your-organizations).
1. If you're enabling SAML for the enterprise, you can do so now. See [AUTOTITLE](/enterprise-cloud@latest/admin/managing-iam/using-saml-for-enterprise-iam/configuring-saml-single-sign-on-for-your-enterprise).

## {% data variables.product.prodname_emus %}

With {% data variables.product.prodname_emus %}, you manage the lifecycle and authentication of your users on {% data variables.product.prodname_dotcom_the_website %} or {% data variables.enterprise.data_residency_site %} from an external identity management system, or IdP:

* Your IdP **provisions new user accounts** on {% data variables.product.prodname_dotcom %}, with access to your enterprise.
* Users must **authenticate on your IdP** to access your enterprise's resources on {% data variables.product.prodname_dotcom %}.
* You control **usernames, profile data, organization membership, and repository access** from your IdP.
* If your enterprise uses OIDC SSO, {% data variables.product.prodname_dotcom %} will validate access to your enterprise and its resources using your IdP's **Conditional Access Policy (CAP)**.
* {% data variables.enterprise.prodname_managed_users_caps %} **cannot create public content** or collaborate outside your enterprise.

### Get started with managed users

To use {% data variables.product.prodname_emus %}, you will:

* Configure authentication using SAML or OIDC
* Configure SCIM provisioning
* Provision users to your enterprise

To get started, see [AUTOTITLE](/enterprise-cloud@latest/admin/managing-iam/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users).

## Next steps

Learn about how billing will work when your trial ends. See [AUTOTITLE](/enterprise-onboarding/getting-started-with-your-enterprise/about-enterprise-billing).
