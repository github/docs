---
title: About {% data variables.product.prodname_emus %}
shortTitle: About managed users
intro: 'You can centrally manage identity and access for your enterprise members on {% data variables.product.prodname_dotcom %} from your identity provider.'
redirect_from:
  - /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users
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

With {% data variables.product.prodname_emus %}, you can control the user accounts of your enterprise members through your identity provider (IdP). Users assigned to the {% data variables.product.prodname_emu_idp_application %} application in your IdP are provisioned as new user accounts on {% data variables.product.prodname_dotcom %} and added to your enterprise. You control usernames, profile data, team membership, and repository access for the user accounts from your IdP.

In your IdP, you can give each {% data variables.enterprise.prodname_managed_user %} the role of user, enterprise owner, or billing manager. {% data variables.enterprise.prodname_managed_users_caps %} can own organizations within your enterprise and can add other {% data variables.enterprise.prodname_managed_users %} to the organizations and teams within. For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" and "[About organizations](/organizations/collaborating-with-groups-in-organizations/about-organizations)."

{% ifversion oidc-for-emu %}

{% data reusables.enterprise-accounts.emu-cap-validates %} For more information, see "[About support for your IdP's Conditional Access Policy](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)."

{% endif %}

You can grant {% data variables.enterprise.prodname_managed_users %} access to and the ability to contribute to repositories within your enterprise, but {% data variables.enterprise.prodname_managed_users %} cannot create public content or collaborate with other users, organizations, and enterprises on the rest of {% data variables.product.prodname_dotcom %}. For more information, see "[Abilities and restrictions of {% data variables.enterprise.prodname_managed_users %}](#abilities-and-restrictions-of-enterprise-managed-users)."

The usernames of your enterprise's {% data variables.enterprise.prodname_managed_users %} and their profile information, such as display names and email addresses, are set by through your IdP and cannot be changed by the users themselves. For more information, see "[Usernames and profile information](#usernames-and-profile-information)."

Enterprise owners can audit all of the {% data variables.enterprise.prodname_managed_users %}' actions on {% data variables.product.prodname_dotcom %}. For more information, see "[Audit log events for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#about-audit-log-events-for-your-enterprise)."

To use {% data variables.product.prodname_emus %}, you need a separate type of enterprise account with {% data variables.product.prodname_emus %} enabled. For more information about creating this account, see "[About enterprises with managed users](#about-enterprises-with-managed-users)."

{% note %}

**Note:** There are multiple options for identity and access management with {% data variables.product.prodname_ghe_cloud %}, and {% data variables.product.prodname_emus %} is not the best solution for every customer. For more information about whether {% data variables.product.prodname_emus %} is right for your enterprise, see "[About authentication for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)."

{% endnote %}

## About organization membership management

Organization memberships can be managed manually, or you can update memberships automatically using IdP groups. To manage organization memberships through your IdP, the members must be added to an IdP group, and the IdP group must be connected to a team within the organization. For more information about managing organization and team memberships automatically, see "[Managing team memberships with identity provider groups](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)."

The way a member is added to an organization owned by your enterprise (through IdP groups or manually) determines how they must be removed from an organization. 

- If a member was added to an organization manually, you must remove them manually. Unassigning them from the {% data variables.product.prodname_emu_idp_application %} application on your IdP will suspend the user but not remove them from the organization.
- If a user became a member of an organization because they were added to IdP groups mapped to one or more teams in the organization, removing them from _all_ of the mapped IdP groups associated with the organization will remove them from the organization.

To discover how a member was added to an organization, you can filter the member list by type. For more information, see "[Viewing people in your enterprise](/admin/user-management/managing-users-in-your-enterprise/viewing-people-in-your-enterprise#filtering-by-member-type-in-an-enterprise-with-managed-users)."

## Identity provider support

{% data variables.product.prodname_emus %} supports the following IdPs{% ifversion oidc-for-emu %} and authentication methods:

|                                  | SAML                                          | OIDC (beta)                                   |
|----------------------------------|-----------------------------------------------|-----------------------------------------------|
| Azure Active Directory           | {% octicon "check" aria-label="Check icon" %} | {% octicon "check" aria-label="Check icon" %} |
| Okta                             | {% octicon "check" aria-label="Check icon" %} |                                               |
{% else %}:

{% data reusables.enterprise-accounts.emu-supported-idps %}

{% endif %}

## Abilities and restrictions of {% data variables.enterprise.prodname_managed_users %}

{% data variables.enterprise.prodname_managed_users_caps %} can only contribute to private and internal repositories within their enterprise and private repositories owned by their user account. {% data variables.enterprise.prodname_managed_users_caps %} have read-only access to the wider {% data variables.product.prodname_dotcom %} community. These visibility and access restrictions for users and content apply to all requests, including API requests.

* {% data variables.enterprise.prodname_managed_users_caps %} cannot be invited to organizations or repositories outside of the enterprise, nor can the {% data variables.enterprise.prodname_managed_users %} be invited to other enterprises. 
* Outside collaborators are not supported by {% data variables.product.prodname_emus %}.
* {% data variables.enterprise.prodname_managed_users_caps %} cannot create issues or pull requests in, comment or add reactions to, nor star, watch, or fork repositories outside of the enterprise.
* {% data variables.enterprise.prodname_managed_users_caps %} can view all public repositories on {% data variables.product.prodname_dotcom_the_website %}, but cannot push code to repositories outside of the enterprise.
* {% data variables.enterprise.prodname_managed_users_caps %} and the content they create is only visible to other members of the enterprise. 
* {% data variables.enterprise.prodname_managed_users_caps %} cannot follow users outside of the enterprise.
* {% data variables.enterprise.prodname_managed_users_caps %} cannot create gists or comment on gists.
* {% data variables.enterprise.prodname_managed_users_caps %} cannot create starter workflows for {% data variables.product.prodname_actions %}.
* {% data variables.enterprise.prodname_managed_users_caps %} cannot install {% data variables.product.prodname_github_apps %} on their user accounts.
* Other {% data variables.product.prodname_dotcom %} users cannot see, mention, or invite a {% data variables.enterprise.prodname_managed_user %} to collaborate.
* You can choose whether {% data variables.enterprise.prodname_managed_users %} are able to create repositories owned by their user accounts. For more information, see "[Enforcing repository management policies in your enterprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-repository-creation)."
* If you allow {% data variables.enterprise.prodname_managed_users %} to create repositories owned by their user accounts, they can only own private repositories and can only invite other enterprise members to collaborate on their user-owned repositories.
* {% data reusables.enterprise-accounts.emu-forks %}
* Only private and internal repositories can be created in organizations owned by an {% data variables.enterprise.prodname_emu_enterprise %}, depending on organization and enterprise repository visibility settings. 
* {% data variables.enterprise.prodname_managed_users_caps %} are limited in their use of {% data variables.product.prodname_pages %}. For more information, see "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)."

## Getting started with {% data variables.product.prodname_emus %}

Before your developers can use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_emus %}, you must follow a series of configuration steps.

1. To use {% data variables.product.prodname_emus %}, you need a separate type of enterprise account with {% data variables.product.prodname_emus %} enabled. To try out {% data variables.product.prodname_emus %} or to discuss options for migrating from your existing enterprise, please contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).
  
  Your contact on the GitHub Sales team will work with you to create your new {% data variables.enterprise.prodname_emu_enterprise %}. You'll need to provide the email address for the user who will set up your enterprise and a short code that will be used as the suffix for your enterprise members' usernames. {% data reusables.enterprise-accounts.emu-shortcode %} For more information, see "[Usernames and profile information](#usernames-and-profile-information)."
  
2. After we create your enterprise, you will receive an email from {% data variables.product.prodname_dotcom %} inviting you to choose a password for your enterprise's setup user, which will be the first owner in the enterprise. Use an incognito or private browsing window when setting the password. The setup user is only used to configure single sign-on and SCIM provisioning integration for the enterprise. It will no longer have access to administer the enterprise account once SSO is successfully enabled. The setup user's username is your enterprise's shortcode suffixed with `_admin`. 
  
  {% note %}
  
  {% data reusables.enterprise-accounts.emu-password-reset-session %}
  
  {% endnote %}
  
3. After you log in as the setup user, we recommend enabling two-factor authentication. For more information, see "[Configuring two-factor authentication](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)."

1. To get started, configure {% ifversion oidc-for-emu %}how your members will authenticate. If you are using Azure Active Directory as your identity provider, you can choose between OpenID Connect (OIDC) and Security Assertion Markup Language (SAML). Both options provide a seamless sign-in experience for your members, but only OIDC includes support for Conditional Access Policies (CAP). If you are using Okta as your identity provider, you can use SAML to authenticate your members.{% else %}SAML SSO for your enterprise. For more information, see "[Configuring SAML single sign-on for Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)."{% endif %}
  
  {% ifversion oidc-for-emu %}
  
  To get started, read the guide for your chosen authentication method.
  
    - "[Configuring OIDC for Enterprise Managed Users](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users)."
    - "[Configuring SAML single sign-on for Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users)."
  
  {% endif %}
  
4. Once you have configured SSO, you can configure SCIM provisioning. SCIM is how your identity provider will provision and manage member accounts and teams on {% data variables.product.prodname_dotcom_the_website %}. For more information on configuring SCIM provisioning, see "[Configuring SCIM provisioning for enterprise managed users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users)."
  
5. Once authentication and provisioning are configured, you can start provisioning members and managing teams. For more information, see "[Managing team memberships with identity provider groups](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/managing-team-memberships-with-identity-provider-groups)."

If members of your enterprise must use one workstation to contribute to repositories on {% data variables.location.product_location %} from both a  {% data variables.enterprise.prodname_managed_user %} and a personal account, you can provide support. For more information, see "[Supporting developers with multiple user accounts on {% data variables.product.prodname_dotcom_the_website %}](#supporting-developers-with-multiple-user-accounts-on-githubcom)."

## Authenticating as a {% data variables.enterprise.prodname_managed_user %}

{% data variables.enterprise.prodname_managed_users_caps %} must authenticate through their identity provider. To authenticate, a {% data variables.enterprise.prodname_managed_user %} can visit their IdP application portal or use the login page on {% data variables.product.prodname_dotcom_the_website %}. 

By default, when an unauthenticated user attempts to access an enterprise that uses {% data variables.product.prodname_emus %}, {% data variables.product.company_short %} displays a 404 error. An enterprise owner can optionally enable automatic redirects to single sign-on (SSO) instead of the 404. For more information, see "[Enforcing policies for security settings in your enterprise](/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-sso-for-unauthenticated-users)."

{% data reusables.enterprise-accounts.about-recovery-codes %} For more information, see "[Managing recovery codes for your enterprise](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)."

### Authenticating as a {% data variables.enterprise.prodname_managed_user %} via {% data variables.product.prodname_dotcom_the_website %}

1. Navigate to [https://github.com/login](https://github.com/login).
1. In the "Username or email address" text box, enter your username including the underscore and short code.
  ![Screenshot showing login form](/assets/images/help/enterprises/emu-login-username.png)
  When the form recognizes your username, the form will update. You do not need to enter your password on this form.
1. To continue to your identity provider, click **Sign in with your identity provider**.
  ![Screenshot showing "Sign in with your identity provider" button](/assets/images/help/enterprises/emu-login-submit.png)

## Usernames and profile information

{% data variables.product.product_name %} automatically creates a username for each person by normalizing an identifier provided by your IdP. For more information, see "[Username considerations for external authentication](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)."

A conflict may occur when provisioning users if the unique parts of the identifier provided by your IdP are removed during normalization. If you're unable to provision a user due to a username conflict, you should modify the username provided by your IdP. For more information, see "[Resolving username problems](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-problems)."

{% data reusables.enterprise-accounts.emu-only-emails-within-the-enterprise-can-conflict %} 

The profile name and email address of a {% data variables.enterprise.prodname_managed_user %} is also provided by the IdP. {% data variables.enterprise.prodname_managed_users_caps %} cannot change their profile name or email address on {% data variables.product.prodname_dotcom %}, and the IdP can only provide a single email address.

## Supporting developers with multiple user accounts on {% data variables.location.product_location %}

People on your team may need to contribute to resources on {% data variables.location.product_location %} that are outside of your {% data variables.enterprise.prodname_emu_enterprise %}. For example, you may wish to maintain a separate enterprise for your company's open source projects. Because a {% data variables.enterprise.prodname_managed_user %} cannot contribute to public resources, users will need to maintain a separate, personal account for this work.

People who must contribute from two user accounts on {% data variables.location.product_location %} using one workstation can configure Git to simplify the process. For more information, see "[Managing multiple accounts](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts)."
