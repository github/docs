---
title: About Enterprise Managed Users
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
---

## About {% data variables.product.prodname_emus %}

With {% data variables.product.prodname_emus %}, you can control the user accounts of your enterprise members through your identity provider (IdP). Users assigned to the {% data variables.product.prodname_emu_idp_application %} application in your IdP are provisioned as new user accounts on {% data variables.product.prodname_dotcom %} and added to your enterprise. You control usernames, profile data, team membership, and repository access for the user accounts from your IdP.

In your IdP, you can give each {% data variables.product.prodname_managed_user %} the role of user, enterprise owner, or billing manager. {% data variables.product.prodname_managed_users_caps %} can own organizations within your enterprise and can add other {% data variables.product.prodname_managed_users %} to the organizations and teams within. For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" and "[About organizations](/organizations/collaborating-with-groups-in-organizations/about-organizations)."

Organization membership can be managed manually, or you can update membership automatically as {% data variables.product.prodname_managed_users %} are added to IdP groups that are connected to teams within the organization. When a {% data variables.product.prodname_managed_user %} is manually added to an organization, unassigning them from the {% data variables.product.prodname_emu_idp_application %} application on your IdP will suspend the user but not remove them from the organization. For more information about managing organization and team membership automatically, see "[Managing team memberships with identity provider groups](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups)."

{% ifversion oidc-for-emu %}

{% data reusables.enterprise-accounts.emu-cap-validates %} For more information, see "[About support for your IdP's Conditional Access Policy](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-support-for-your-idps-conditional-access-policy)."

{% endif %}

You can grant {% data variables.product.prodname_managed_users %} access to and the ability to contribute to repositories within your enterprise, but {% data variables.product.prodname_managed_users %} cannot create public content or collaborate with other users, organizations, and enterprises on the rest of {% data variables.product.prodname_dotcom %}. For more information, see "[Abilities and restrictions of {% data variables.product.prodname_managed_users %}](#abilities-and-restrictions-of-enterprise-managed-users)."

The usernames of your enterprise's {% data variables.product.prodname_managed_users %} and their profile information, such as display names and email addresses, are set by through your IdP and cannot be changed by the users themselves. For more information, see "[Usernames and profile information](#usernames-and-profile-information)."

{% data reusables.enterprise-accounts.emu-forks %}

Enterprise owners can audit all of the {% data variables.product.prodname_managed_users %}' actions on {% data variables.product.prodname_dotcom %}. For more information, see "[Audit log events for your enterprise](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#about-audit-log-events-for-your-enterprise)."

To use {% data variables.product.prodname_emus %}, you need a separate type of enterprise account with {% data variables.product.prodname_emus %} enabled. For more information about creating this account, see "[About enterprises with managed users](#about-enterprises-with-managed-users)."

{% note %}

**Note:** There are multiple options for identity and access management with {% data variables.product.prodname_ghe_cloud %}, and {% data variables.product.prodname_emus %} is not the best solution for every customer. For more information about whether {% data variables.product.prodname_emus %} is right for your enterprise, see "[About authentication for your enterprise](/admin/identity-and-access-management/managing-iam-for-your-enterprise/about-authentication-for-your-enterprise#identifying-the-best-authentication-method-for-your-enterprise)."

{% endnote %}

## Identity provider support

{% data variables.product.prodname_emus %} supports the following IdPs{% ifversion oidc-for-emu %} and authentication methods:

|                                  | SAML                                          | OIDC (beta)                                   |
|----------------------------------|-----------------------------------------------|-----------------------------------------------|
| Azure Active Directory           | {% octicon "check" aria-label="Check icon" %} | {% octicon "check" aria-label="Check icon" %} |
| Okta                             | {% octicon "check" aria-label="Check icon" %} |                                               |
{% else %}:

{% data reusables.enterprise-accounts.emu-supported-idps %}

{% endif %}

## Abilities and restrictions of {% data variables.product.prodname_managed_users %}

{% data variables.product.prodname_managed_users_caps %} can only contribute to private and internal repositories within their enterprise and private repositories owned by their user account. {% data variables.product.prodname_managed_users_caps %} have read-only access to the wider {% data variables.product.prodname_dotcom %} community. These visibility and access restrictions for users and content apply to all requests, including API requests.

* {% data variables.product.prodname_managed_users %} cannot be invited to organizations or repositories outside of the enterprise, nor can the {% data variables.product.prodname_managed_users %} be invited to other enterprises. 
* Outside collaborators are not supported by {% data variables.product.prodname_emus %}.
* {% data variables.product.prodname_managed_users_caps %} cannot create issues or pull requests in, comment or add reactions to, nor star, watch, or fork repositories outside of the enterprise.
* {% data variables.product.prodname_managed_users_caps %} can view all public repositories on {% data variables.product.prodname_dotcom_the_website %}, but cannot push code to repositories outside of the enterprise.
* {% data variables.product.prodname_managed_users_caps %} and the content they create is only visible to other members of the enterprise. 
* {% data variables.product.prodname_managed_users_caps %} cannot follow users outside of the enterprise.
* {% data variables.product.prodname_managed_users_caps %} cannot create gists or comment on gists.
* {% data variables.product.prodname_managed_users_caps %} cannot install {% data variables.product.prodname_github_apps %} on their user accounts.
* Other {% data variables.product.prodname_dotcom %} users cannot see, mention, or invite a {% data variables.product.prodname_managed_user %} to collaborate.
* {% data variables.product.prodname_managed_users_caps %} can only own private repositories and {% data variables.product.prodname_managed_users %} can only invite other enterprise members to collaborate on their owned repositories.
* {% data reusables.enterprise-accounts.emu-forks %}
* Only private and internal repositories can be created in organizations owned by an {% data variables.product.prodname_emu_enterprise %}, depending on organization and enterprise repository visibility settings. 
* {% data variables.product.prodname_managed_users_caps %} are limited in their use of {% data variables.product.prodname_pages %}. For more information, see "[About {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#limitations-for-enterprise-managed-users)."

## Getting started with {% data variables.product.prodname_emus %}

Before your developers can use {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_emus %}, you must follow a series of configuration steps.

1. To use {% data variables.product.prodname_emus %}, you need a separate type of enterprise account with {% data variables.product.prodname_emus %} enabled. To try out {% data variables.product.prodname_emus %} or to discuss options for migrating from your existing enterprise, please contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).
  
  Your contact on the GitHub Sales team will work with you to create your new {% data variables.product.prodname_emu_enterprise %}. You'll need to provide the email address for the user who will set up your enterprise and a short code that will be used as the suffix for your enterprise members' usernames. {% data reusables.enterprise-accounts.emu-shortcode %} For more information, see "[Usernames and profile information](#usernames-and-profile-information)."
  
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

## Authenticating as a {% data variables.product.prodname_managed_user %}

{% data variables.product.prodname_managed_users_caps %} must authenticate through their identity provider. To authenticate, a {% data variables.product.prodname_managed_user %} can visit their IdP application portal or use the login page on {% data variables.product.prodname_dotcom_the_website %}.

{% data reusables.enterprise-accounts.about-recovery-codes %} For more information, see "[Managing recovery codes for your enterprise](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise)."

### Authenticating as a {% data variables.product.prodname_managed_user %} via {% data variables.product.prodname_dotcom_the_website %}

1. Navigate to [https://github.com/login](https://github.com/login).
1. In the "Username or email address" text box, enter your username including the underscore and short code.
  ![Screenshot showing login form](/assets/images/help/enterprises/emu-login-username.png)
  When the form recognizes your username, the form will update. You do not need to enter your password on this form.
1. To continue to your identity provider, click **Sign in with your identity provider**.
  ![Screenshot showing "Sign in with your identity provider" button](/assets/images/help/enterprises/emu-login-submit.png)

## Usernames and profile information

{% data variables.product.product_name %} automatically creates a username for each person by normalizing an identifier provided by your IdP. For more information, see "[Username considerations for external authentication](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)."

A conflict may occur when provisioning users if the unique parts of the identifier provided by your IdP are removed during normalization. If you're unable to provision a user due to a username conflict, you should modify the username provided by your IdP. For more information, see "[Resolving username conflicts](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication#resolving-username-conflicts)."

The profile name and email address of a {% data variables.product.prodname_managed_user %} is also provided by the IdP. {% data variables.product.prodname_managed_users_caps %} cannot change their profile name or email address on {% data variables.product.prodname_dotcom %}.
