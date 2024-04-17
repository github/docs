---
title: 'About {% data variables.product.prodname_emus %}'
shortTitle: About managed users
intro: 'You can centrally manage identity and access for your enterprise members on {% data variables.product.prodname_dotcom %} from your identity provider (IdP).'
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

## About {% data variables.product.prodname_emus %}

With {% data variables.product.prodname_emus %}, you manage the lifecycle and authentication of your users on {% data variables.location.product_location %} from an external identity management system, or IdP. You can provide access to  {% data variables.product.product_name %} to people who have existing identities and group membership on your IdP. Your IdP provisions new user accounts with access to your enterprise on {% data variables.location.product_location %}. You control usernames, profile data, team membership, and repository access for the user accounts from your IdP.

On your IdP, you can give each {% data variables.enterprise.prodname_managed_user %} a role, such as member, enterprise owner, or guest collaborator. {% data variables.enterprise.prodname_managed_users_caps %} can own organizations within your enterprise and can add other {% data variables.enterprise.prodname_managed_users %} to the organizations and teams within. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise)" and "[AUTOTITLE](/organizations/collaborating-with-groups-in-organizations/about-organizations)."

{% ifversion oidc-for-emu %}

{% data reusables.enterprise-accounts.emu-cap-validates %} For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)."

{% endif %}

You can grant {% data variables.enterprise.prodname_managed_users %} access to and the ability to contribute to repositories within your enterprise, but {% data variables.enterprise.prodname_managed_users %} cannot create public content or collaborate with other users, organizations, and enterprises on the rest of {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts)."

The usernames of your enterprise's {% data variables.enterprise.prodname_managed_users %} and their profile information, such as display names and email addresses, are set by through your IdP and cannot be changed by the users themselves. For more information, see "[Usernames and profile information](#usernames-and-profile-information)."

Enterprise owners can audit all of the {% data variables.enterprise.prodname_managed_users %}' actions on {% data variables.product.prodname_dotcom %}. For more information, see "[AUTOTITLE](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#about-audit-log-events-for-your-enterprise)."

To use {% data variables.product.prodname_emus %}, you need a separate type of enterprise account with {% data variables.product.prodname_emus %} enabled. For more information about creating this account, see "[Getting started with {% data variables.product.prodname_emus %}](#getting-started-with-enterprise-managed-users)."

{% note %}

**Note:** There are multiple options for identity and access management with {% data variables.product.prodname_ghe_cloud %}, and {% data variables.product.prodname_emus %} is not the best solution for every customer. For more information about whether {% data variables.product.prodname_emus %} is right for your enterprise, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/identifying-the-best-authentication-method-for-your-enterprise)" and "[AUTOTITLE](/admin/identity-and-access-management/understanding-iam-for-enterprises/abilities-and-restrictions-of-managed-user-accounts)."

{% endnote %}

## About authentication and user provisioning

{% ifversion oidc-for-emu %}

{% ifversion emu-public-scim-schema %}

With {% data variables.product.prodname_emus %}, your IdP creates and updates user accounts on {% data variables.location.product_location %}. Users must authenticate on your IdP to access your enterprise's resources on {% data variables.location.product_location %}. {% data variables.product.product_name %} maintains a record of the external identity on your IdP that corresponds with the user account.

{% data reusables.enterprise_user_management.emu-paved-path-iam-integrations %} These IdPs mostly provide authentication using SAML. Microsoft Entra ID (previously known as Azure AD) also offers OIDC for authentication. The IdP applications provision users with System for Cross-domain Identity Management (SCIM).

{% endif %}

{% rowheaders %}

| Partner IdP | SAML | OIDC | SCIM |
| :- | :- | :- | :- |
| Entra ID | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} | {% octicon "check" aria-label="Supported" %} |
| Okta | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |
| PingFederate | {% octicon "check" aria-label="Supported" %} | {% octicon "x" aria-label="Not supported" %} | {% octicon "check" aria-label="Supported" %} |

{% endrowheaders %}

{% endif %}

{% ifversion emu-public-scim-schema %}

Other IdPs must adhere to the SAML 2.0 specification for authentication. You can configure provisioning with IdPs that adhere to {% data variables.product.company_short %}'s integration guidelines. The IdP must adhere to the SCIM 2.0 specification and communicate with {% data variables.product.company_short %}'s REST API. For example, the IdP could be a commercial identity management system that {% data variables.product.company_short %} has not tested, or a custom identity system that your company builds.

{% note %}

**Note**: {% data reusables.scim.ghec-open-scim-release-phase %}

{% endnote %}

For more information about authentication and provisioning, see the following articles.

- "[AUTOTITLE](/admin/identity-and-access-management/configuring-authentication-for-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)"
- "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)"

If you don't use a partner IdP's application for both authentication and provisioning, you can configure authentication using SAML, and provision users using {% data variables.product.company_short %}'s REST API. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/provisioning-user-accounts-for-enterprise-managed-users/provisioning-users-with-scim-using-the-rest-api)," and consult your IdP's documentation, support team, or other resources.

Some customers have reported success using a partner IdP's application only for authentication, in combination with a different identity management system for provisioning. For example, you could use Okta for SAML SSO and a custom SCIM implementation for user provisioning. {% data variables.product.company_short %} does not expressly support mixing and matching partner IdPs for authentication and provisioning, does not test partner IdPs in combination with other IdPs, and has not tested all identity management systems.

{% endif %}

## Getting started with {% data variables.product.prodname_emus %}

Before your developers can use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_emus %}, you must follow a series of configuration steps.

1. To use {% data variables.product.prodname_emus %}, you need a separate type of enterprise account with {% data variables.product.prodname_emus %} enabled. To try out {% data variables.product.prodname_emus %} or to discuss options for migrating from your existing enterprise, please contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).

   Your contact on the GitHub Sales team will work with you to create your new {% data variables.enterprise.prodname_emu_enterprise %}. You'll need to provide the email address for the user who will set up your enterprise and a short code that will be used as the suffix for your enterprise members' usernames. {% data reusables.enterprise-accounts.emu-shortcode %} For more information, see "[Usernames and profile information](#usernames-and-profile-information)."

1. After we create your enterprise, you will receive an email from {% data variables.product.prodname_dotcom %} inviting you to choose a password for your enterprise's setup user, which will be the first owner in the enterprise. Use an incognito or private browsing window when setting the password and saving the recovery codes for the user. The setup user is only used to configure single sign-on and SCIM provisioning integration for the enterprise. It will no longer be allowed to access enterprise or organization settings once SSO is configured, unless an SSO recovery code is used.

   The setup user's username is your enterprise's shortcode suffixed with `_admin`, for example `fabrikam_admin`. If you need to sign in as the setup user later, you can enter the username and password at any login page. A link to the login page is also provided on the SSO page, for convenience.

   {% note %}

   {% data reusables.enterprise-accounts.emu-password-reset-session %}

   {% endnote %}

1. After you log in as the setup user, we recommend enabling two-factor authentication. The setup user's password and two-factor credentials can also be used to enter sudo mode, which is required to take sensitive actions. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)" and "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/sudo-mode)."

1. To get started, configure {% ifversion oidc-for-emu %}how your members will authenticate. If you are using Entra ID as your IdP, you can choose between OpenID Connect (OIDC) and Security Assertion Markup Language (SAML). We recommend OIDC, which includes support for Conditional Access Policies (CAP). If you require multiple enterprises with {% data variables.enterprise.prodname_managed_users %} provisioned from one tenant, you must use SAML for each enterprise after the first. If you are using another IdP, like Okta or PingFederate, you can use SAML to authenticate your members.{% else %}SAML SSO for your enterprise. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-saml-single-sign-on-for-enterprise-managed-users)."{% endif %}

   {%- ifversion oidc-for-emu %}

   To get started, read the guide for your chosen authentication method.

   - "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)."
   - "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)."
   {%- endif %}

1. Once you have configured SSO, you can configure SCIM provisioning. SCIM is how your IdP will create {% data variables.enterprise.prodname_managed_users %} on {% data variables.product.prodname_dotcom_the_website %}. For more information on configuring SCIM provisioning, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-scim-provisioning-for-enterprise-managed-users)."

1. Once authentication and provisioning are configured, you can start managing organization membership for your {% data variables.enterprise.prodname_managed_users %} by synchronizing IdP groups with teams. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)."

If members of your enterprise must use one workstation to contribute to repositories on {% data variables.location.product_location %} from both a {% data variables.enterprise.prodname_managed_user %} and a personal account, you can provide support. For more information, see "[Supporting developers with multiple user accounts on {% data variables.product.prodname_dotcom_the_website %}](#supporting-developers-with-multiple-user-accounts-on-githubcom)."

## About organization membership management

Organization memberships can be managed manually, or you can update memberships automatically using IdP groups. To manage organization memberships through your IdP, the members must be added to an IdP group, and the IdP group must be connected to a team within the organization. For more information about managing organization and team memberships automatically, see "[AUTOTITLE](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)."

The way a member is added to an organization owned by your enterprise (through IdP groups or manually) determines how they must be removed from an organization.

- If a member was added to an organization manually, you must remove them manually. Unassigning them from the {% data variables.product.prodname_emu_idp_application %} application on your IdP will suspend the user but not remove them from the organization.
- If a user became a member of an organization because they were added to IdP groups mapped to one or more teams in the organization, removing them from _all_ of the mapped IdP groups associated with the organization will remove them from the organization.

To discover how a member was added to an organization, you can filter the member list by type. For more information, see "[AUTOTITLE](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-member-type-in-an-enterprise-with-managed-users)."

## Authenticating with a {% data variables.enterprise.prodname_managed_user %}

{% data variables.enterprise.prodname_managed_users_caps %} must authenticate through your IdP. The way that {% data variables.enterprise.prodname_managed_users %} authenticate depends on whether you configure SAML or OIDC authentication.

If your enterprise is configured for SAML authentication, a {% data variables.enterprise.prodname_managed_user %} can access your enterprise by visiting their IdP application portal. If your enterprise is configured for OIDC authentication,  a {% data variables.enterprise.prodname_managed_user %} can access your enterprise by using the login page on {% data variables.product.prodname_dotcom_the_website %}. IdP-initiated authentication is not currently supported for OIDC. In either configuration, a {% data variables.enterprise.prodname_managed_user %} can initiate authentication directly from the organization or enterprise's page on {% data variables.location.product_location %}.

By default, when an unauthenticated user attempts to access an enterprise that uses {% data variables.product.prodname_emus %}, {% data variables.product.company_short %} displays a 404 error. An enterprise owner can optionally enable automatic redirects to single sign-on (SSO) instead of the 404. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users)."

{% data reusables.enterprise-accounts.about-recovery-codes %} For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)."

### Authenticating as a {% data variables.enterprise.prodname_managed_user %} via {% data variables.product.prodname_dotcom_the_website %}

1. Navigate to [https://github.com/login](https://github.com/login).
1. In the "Username or email address" text box, enter your username including the underscore and short code. When the form recognizes your username, the form will update. You do not need to enter your password on this form.
1. To continue to your IdP, click **Sign in with your identity provider**.

## Usernames and profile information

{% data variables.product.product_name %} automatically creates a username for each person by normalizing an identifier provided by your IdP. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)."

The profile name and email address of a {% data variables.enterprise.prodname_managed_user %} is provided by the IdP. {% data variables.enterprise.prodname_managed_users_caps %} cannot change their profile name or email address on {% data variables.product.prodname_dotcom %}, and the IdP can only provide a single email address. If you change the email address associated with a user in your IdP, this will delink the user from the contribution history associated with their old email address.

A conflict may occur when provisioning users if the unique parts of the identifier provided by your IdP are removed during normalization. If you're unable to provision a user due to a username conflict, you should modify the username provided by your IdP. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-problems)."

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %}

## Supporting developers with multiple user accounts on {% data variables.location.product_location %}

People on your team may need to contribute to resources on {% data variables.location.product_location %} that are outside of your {% data variables.enterprise.prodname_emu_enterprise %}. For example, you may wish to maintain a separate enterprise for your company's open source projects. Because a {% data variables.enterprise.prodname_managed_user %} cannot contribute to public resources, users will need to maintain a separate, personal account for this work.

People who must contribute from two user accounts on {% data variables.location.product_location %} using one workstation can configure Git to simplify the process. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts)."

{% ifversion account-switcher %}

If there are people on your team who do need to regularly switch between accounts on {% data variables.location.product_location %}, such as their personal accounts and one or more {% data variables.enterprise.prodname_managed_users %}, it's possible to sign in to multiple accounts and quickly switch between them without always needing to reauthenticate. For more information, see "[AUTOTITLE](/authentication/keeping-your-account-and-data-secure/switching-between-accounts)."

{% endif %}
