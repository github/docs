---
title: 'About {% data variables.product.prodname_emus %}'
shortTitle: About managed users
intro: 'Learn how your enterprise can manage the lifecycle and authentication of users on {% data variables.product.prodname_dotcom %} from your identity provider (IdP).'
redirect_from:
  - /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam
  - /admin/identity-and-access-management/using-enterprise-managed-users-for-iam
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/about-enterprise-managed-users
  - /admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
allowTitleToDifferFromFilename: true
---

With {% data variables.product.prodname_emus %}, you manage the lifecycle and authentication of your users on {% data variables.product.prodname_dotcom %} from an external identity management system, or IdP:

* Your IdP **provisions new user accounts** on {% data variables.product.prodname_dotcom %}, with access to your enterprise.
* Users must **authenticate on your IdP** to access your enterprise's resources on {% data variables.product.prodname_dotcom %}.
* You control **usernames, profile data, organization membership, and repository access** from your IdP.
* If your enterprise uses OIDC SSO, {% data variables.product.prodname_dotcom %} will validate access to your enterprise and its resources using your IdP's **Conditional Access Policy (CAP)**. See "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)."
* {% data variables.enterprise.prodname_managed_users_caps %} **cannot create public content** or collaborate outside your enterprise. See "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts)."

> [!NOTE] {% data variables.product.prodname_emus %} is not the best solution for every customer. To determine whether it's right for your enterprise, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/choosing-an-enterprise-type-for-github-enterprise-cloud)."

## Identity management systems

{% data reusables.enterprise_user_management.emu-paved-path-iam-integrations %}

### Partner identity providers

Partner IdPs provide authentication using SAML or OIDC, and provide provisioning with System for Cross-domain Identity Management (SCIM).

{% rowheaders %}

| Partner IdP | SAML | OIDC | SCIM |
| :- | :- | :- | :- |
| Entra ID | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Okta | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
| PingFederate | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

When you use a single partner IdP for both authentication and provisioning, {% data variables.product.company_short %} provides support for the application on the partner IdP and the IdP's integration with {% data variables.product.prodname_dotcom %}.

### Other identity management systems

If you cannot use a single partner IdP for both authentication and provisioning, you can use another identity management system or combination of systems. The system must:

* Adhere to **{% data variables.product.company_short %}'s integration guidelines**
* Provide **authentication using SAML**, adhering to SAML 2.0 specification
* Provide **user lifecycle management using SCIM**, adhering to the SCIM 2.0 specification and communicating with {% data variables.product.company_short %}'s REST API (see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/provisioning-users-with-scim-using-the-rest-api)")

> [!NOTE] {% data reusables.scim.ghec-open-scim-release-phase %}

{% data variables.product.company_short %} does not expressly support mixing and matching partner IdPs for authentication and provisioning and does not test all identity management systems. **{% data variables.product.company_short %}'s support team may not be able to assist you with issues related to mixed or untested systems.** If you need help, you must consult the system's documentation, support team, or other resources.

## Usernames and profile information

{% data variables.product.prodname_dotcom %} automatically creates a username for each developer by normalizing an identifier provided by your IdP. If the unique parts of the identifier are removed during normalization, a conflict may occur. See "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-problems)."

The profile name and email address of a {% data variables.enterprise.prodname_managed_user %} is provided by the IdP:
* {% data variables.enterprise.prodname_managed_users_caps %} _cannot_ change their profile name or email address on {% data variables.product.prodname_dotcom %}.
* The IdP can only provide one email address.
* Changing a user's email address in your IdP will delink the user from the contribution history associated with the old email address.

## Managing roles and access

In your IdP, you can give each {% data variables.enterprise.prodname_managed_user %} a **role in your enterprise**, such as member, owner, or guest collaborator. See "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)."

Organization memberships (and repository access) can be managed manually, or you can **update memberships automatically using IdP groups**. See "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)."

## Authentication for {% data variables.enterprise.prodname_managed_users %}

The locations where {% data variables.enterprise.prodname_managed_users %} can authenticate to {% data variables.product.prodname_dotcom %} depends on how you configure authentication (SAML or OIDC). See "[AUTOTITLE](/authentication/authenticating-with-saml-single-sign-on/authenticating-with-a-managed-user-account)."

By default, when an unauthenticated user attempts to access your enterprise, {% data variables.product.company_short %} displays a 404 error. You can optionally enable automatic redirects to single sign-on (SSO) instead. See "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users)."

## Further reading

* "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/getting-started-with-enterprise-managed-users)"
