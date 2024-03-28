---
title: Choosing an enterprise type for GitHub Enterprise Cloud
shortTitle: Choosing an enterprise type
intro: "To decide how people will access your company's resources on {% data variables.product.product_name %}, ask yourself some questions about the needs and workflows of your company, administrators, and users."
versions:
  ghec: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
redirect_from:
  - /admin/identity-and-access-management/understanding-iam-for-enterprises/identifying-the-best-authentication-method-for-your-enterprise
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/identifying-the-best-authentication-method-for-your-enterprise
---

## About types of enterprises

Before you start using {% data variables.product.product_name %}, you must decide how members of your enterprise will access your company's data, such as organizations, repositories, issues, and pull requests.

On {% data variables.product.product_name %}, your enterprise account is a central place for your users to collaborate. An enterprise account is also where you secure, administer, and govern access to your company's data. For more information, see "[AUTOTITLE](/admin/managing-your-enterprise-account/about-enterprise-accounts)."

The features and functionality available to your users depend on which type of enterprise you create. You can choose one of the two following types of enterprises:

| Type of enterprise | User identity | Authentication | Provisioning |
| :- | :- | :- | :- |
| Enterprise with personal accounts on {% data variables.product.prodname_dotcom_the_website %} | Existing personal account on {% data variables.product.prodname_dotcom_the_website %} | <ul><li>Username and password for {% data variables.product.prodname_dotcom_the_website %}</li><li>Optionally, additional Security Assertion Markup Language (SAML) authentication through your external identity management system</li></ul> | <ul><li>None; users own accounts, and enterprise and organization owners grant membership manually</li><li>Optionally, use System for Cross-domain Identity Management (SCIM) from your identity management system to provision access to individual organizations that use SAML authentication</li></ul> |
| Enterprise with managed users | Managed by your external identity management system | <ul><li>SAML</li><li>OpenID Connect (OIDC), if you use Microsoft Entra ID (previously known as Azure AD)</li></ul> | <ul><li>SCIM from your identity management system</li></ul> |

If your company is new to {% data variables.product.product_name %}, enterprises with personal accounts and {% data variables.product.prodname_emus %} are equally easy to adopt.

To maintain a presence in the open source community while practicing innersource in a managed environment, some companies maintain repositories within an existing enterprise with personal accounts on {% data variables.location.product_location %}, and also create a separate {% data variables.enterprise.prodname_emu_enterprise %}.

To choose the type of enterprise that will best serve you and your users, ask yourself the following questions.

## Do you want to control the user accounts for your users?

{% data variables.product.prodname_emus %} may be right for your enterprise if you don't want enterprise members to use their own personal accounts on {% data variables.product.prodname_dotcom_the_website %} to access your enterprise's resources.

{% data variables.product.prodname_emus %} provides a true SSO experience for users. If you choose {% data variables.product.prodname_emus %}, you will provision the accounts for your users, and users will not need to sign into a separate user account. You can also ensure that these user accounts conform with your company identity by controlling usernames and the email addresses associated with the accounts.

If you do not choose {% data variables.product.prodname_emus %}, each user must create, manage, and sign in to a personal account on {% data variables.product.prodname_dotcom_the_website %}. You can configure SAML authentication so that users must authenticate to your external identity management system in addition to signing in to a personal account. After successful SAML authentication, {% data variables.product.prodname_dotcom %} links the user's personal account to an external identity on the identity management system.

If you currently require your users to create a new personal account on {% data variables.product.prodname_dotcom_the_website %} to contribute to your company's resources, {% data variables.product.prodname_emus %} might be a better alternative. If using your external identity management system as the source of truth for your user and access management would add too much complexity, creating an enterprise that allows you to configure additional SAML access control for existing personal accounts on {% data variables.product.prodname_dotcom_the_website %} may be a better option. For example, perhaps your enterprise does not have an established process for onboarding new users in your identity management system.

## Is your external identity management system supported?

{% data reusables.enterprise_user_management.ghec-supported-idps %}

## Do your users work in public repositories, gists, or {% data variables.product.prodname_pages %} sites?

To prevent enterprise members from accidentally leaking corporate-owned content to the public on {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_emus %} imposes strong restrictions on what users can do. For example, {% data variables.enterprise.prodname_managed_users %} cannot create public repositories, gists of any visibility, or {% data variables.product.prodname_pages %} sites that are visible outside the enterprise. For a full list of restrictions, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts)."

These restrictions are unacceptable for some enterprises. To determine whether {% data variables.product.prodname_emus %} will work for you, review the restrictions with your users, and confirm whether any of the restrictions will hinder your existing workflows. If so, an enterprise with personal accounts may be a better choice for your enterprise.

## Do your users rely on collaboration outside of your enterprise?

{% data variables.enterprise.prodname_managed_users_caps %} can only contribute to repositories within your enterprise. If your developers must contribute to repositories both within and outside of your enterprise, including private repositories, {% data variables.product.prodname_emus %} may not be right for your enterprise. An enterprise with personal accounts may be a better solution.

If your company maintains repositories within an existing enterprise with personal accounts on {% data variables.location.product_location %}, and also creates a separate {% data variables.enterprise.prodname_emu_enterprise %}, users who contribute to repositories owned by both enterprises from a single workstation must switch between the accounts on {% data variables.location.product_location %} within their browser. The user may also need to customize the workstation's Git configuration to accommodate the two accounts. The complexity of this workflow can increase the risk of mistakenly leaking internal code to the public.

If you choose {% data variables.product.prodname_emus %} but require that users contribute to resources outside of the enterprise from a single workstation, you can provide support for switching between the accounts in a user's local Git configuration. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#supporting-developers-with-multiple-user-accounts-on-githubcom)."

## Can your enterprise tolerate migration costs?

If you already have an enterprise that uses personal accounts on {% data variables.product.prodname_dotcom_the_website %}, adoption of {% data variables.product.prodname_emus %} requires migration to a new enterprise account. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users#getting-started-with-enterprise-managed-users)."

Although {% data variables.product.prodname_emus %} does not differ in cost from an enterprise that uses personal accounts, the migration process may require time or cost from your team. Confirm that this migration process is acceptable to your business and your users. If not, an enterprise with personal accounts may be the better choice for you.

## Further reading

- "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/about-identity-and-access-management)"
- "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/deciding-whether-to-configure-saml-for-your-enterprise-or-your-organizations)"
