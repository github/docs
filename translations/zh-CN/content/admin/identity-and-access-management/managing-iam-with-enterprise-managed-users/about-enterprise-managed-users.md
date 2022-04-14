---
title: About Enterprise Managed Users
shortTitle: About managed users
intro: 'You can centrally manage identity and access for your enterprise members on {% data variables.product.prodname_dotcom %} from your identity provider.'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /early-access/github/articles/get-started-with-managed-users-for-your-enterprise
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users
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

With {% data variables.product.prodname_emus %}, you can control the user accounts of your enterprise members through your identity provider (IdP). You can simplify authentication with SAML single sign-on (SSO) and provision, update, and deprovision user accounts for your enterprise members. Users assigned to the {% data variables.product.prodname_emu_idp_application %} application in your IdP are provisioned as new user accounts on {% data variables.product.prodname_dotcom %} and added to your enterprise. You control usernames, profile data, team membership, and repository access from your IdP.

In your IdP, you can give each {% data variables.product.prodname_managed_user %} the role of user, enterprise owner, or billing manager. {% data variables.product.prodname_managed_users_caps %} can own organizations within your enterprise and can add other {% data variables.product.prodname_managed_users %} to the organizations and teams within. For more information, see "[Roles in an enterprise](/github/setting-up-and-managing-your-enterprise/managing-users-in-your-enterprise/roles-in-an-enterprise)" and "[About organizations](/organizations/collaborating-with-groups-in-organizations/about-organizations)."

Organization membership can be managed manually or updated automatically as {% data variables.product.prodname_managed_users %} are added to IdP groups that are connected to teams within the organization. When a {% data variables.product.prodname_managed_user %} is manually added to an organization, unassigning them from the {% data variables.product.prodname_emu_idp_application %} application on your IdP will suspend the user but not remove them from the organization. For more information about managing organization and team membership automatically, see "[Managing team memberships with identity provider groups](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/managing-team-memberships-with-identity-provider-groups)."

You can grant {% data variables.product.prodname_managed_users %} access and the ability to contribute to repositories within your enterprise, but {% data variables.product.prodname_managed_users %} cannot create public content or collaborate with other users, organizations, and enterprises on the rest of {% data variables.product.prodname_dotcom %}. The {% data variables.product.prodname_managed_users %} provisioned for your enterprise cannot be invited to organizations or repositories outside of the enterprise, nor can the {% data variables.product.prodname_managed_users %} be invited to other enterprises. Outside collaborators are not supported by {% data variables.product.prodname_emus %}.

The usernames of your enterprise's {% data variables.product.prodname_managed_users %} and their profile information, such as display names and email addresses, are set by through your IdP and cannot be changed by the users themselves. For more information, see "[Usernames and profile information](#usernames-and-profile-information)."

{% data reusables.enterprise-accounts.emu-forks %}

Enterprise owners can audit all of the {% data variables.product.prodname_managed_users %}' actions on {% data variables.product.prodname_dotcom %}.

To use {% data variables.product.prodname_emus %}, you need a separate type of enterprise account with {% data variables.product.prodname_emus %} enabled. For more information about creating this account, see "[About enterprises with managed users](#about-enterprises-with-managed-users)."


## Identity provider support

{% data variables.product.prodname_emus %} supports the following IdPs:

{% data reusables.enterprise-accounts.emu-supported-idps %}

## Abilities and restrictions of {% data variables.product.prodname_managed_users %}

{% data variables.product.prodname_managed_users_caps %} can only contribute to private and internal repositories within their enterprise and private repositories owned by their user account. {% data variables.product.prodname_managed_users_caps %} have read-only access to the wider {% data variables.product.prodname_dotcom %} community. These visibility and access restrictions for users and content apply to all requests, including API requests.

* {% data variables.product.prodname_managed_users_caps %} cannot create issues or pull requests in, comment or add reactions to, nor star, watch, or fork repositories outside of the enterprise.
* {% data variables.product.prodname_managed_users_caps %} can view all public repositories on {% data variables.product.prodname_dotcom_the_website %}, but cannot push code to repositories outside of the enterprise.
* {% data variables.product.prodname_managed_users_caps %} and the content they create is only visible to other members of the enterprise. 
* {% data variables.product.prodname_managed_users_caps %} cannot follow users outside of the enterprise.
* {% data variables.product.prodname_managed_users_caps %} cannot create gists or comment on gists.
* {% data variables.product.prodname_managed_users_caps %} cannot install {% data variables.product.prodname_github_apps %} on their user accounts.
* Other {% data variables.product.prodname_dotcom %} users cannot see, mention, or invite a {% data variables.product.prodname_managed_user %} to collaborate.
* {% data variables.product.prodname_managed_users_caps %} can only own private repositories and {% data variables.product.prodname_managed_users %} can only invite other enterprise members to collaborate on their owned repositories.
* Only private and internal repositories can be created in organizations owned by an {% data variables.product.prodname_emu_enterprise %}, depending on organization and enterprise repository visibility settings. 

## About enterprises with managed users

To use {% data variables.product.prodname_emus %}, you need a separate type of enterprise account with {% data variables.product.prodname_emus %} enabled. To try out {% data variables.product.prodname_emus %} or to discuss options for migrating from your existing enterprise, please contact [{% data variables.product.prodname_dotcom %}'s Sales team](https://enterprise.github.com/contact).

Your contact on the GitHub Sales team will work with you to create your new {% data variables.product.prodname_emu_enterprise %}. You'll need to provide the email address for the user who will set up your enterprise and a short code that will be used as the suffix for your enterprise members' usernames. {% data reusables.enterprise-accounts.emu-shortcode %} For more information, see "[Usernames and profile information](#usernames-and-profile-information)."

After we create your enterprise, you will receive an email from {% data variables.product.prodname_dotcom %} inviting you to choose a password for your enterprise's setup user, which will be the first owner in the enterprise. Use an incognito or private browsing window when setting the password. The setup user is only used to configure SAML single sign-on and SCIM provisioning integration for the enterprise. It will no longer have access to administer the enterprise account once SAML is successfully enabled.

The setup user's username is your enterprise's shortcode suffixed with `_admin`. After you log in to your setup user, you can get started by configuring SAML SSO for your enterprise. For more information, see "[Configuring SAML single sign-on for Enterprise Managed Users](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-saml-single-sign-on-for-enterprise-managed-users)."

{% note %}

{% data reusables.enterprise-accounts.emu-password-reset-session %}

{% endnote %}

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

When your {% data variables.product.prodname_emu_enterprise %} is created, you will choose a short code that will be used as the suffix for your enterprise member's usernames. {% data reusables.enterprise-accounts.emu-shortcode %} The setup user who configures SAML SSO has a username in the format of **@<em>SHORT-CODE</em>_admin**.

When you provision a new user from your identity provider, the new {% data variables.product.prodname_managed_user %} will have a {% data variables.product.prodname_dotcom %} username in the format of **@<em>IDP-USERNAME</em>_<em>SHORT-CODE</em>**.

| Identity provider                 | {% data variables.product.prodname_dotcom %} username  |
|-----------------------------------|----------------------|
| Azure Active Directory (Azure AD) | <ul><li>_IDP-USERNAME_ is formed by normalizing the characters preceding the `@` character in the UPN (User Principal Name).</li><li>Guest accounts will have `#EXT` removed from the UPN.</li></ul> |
| Okta                              | <ul><li>_IDP-USERNAME_ is the normalized username attribute provided by the IdP.</li></ul>                |

It's possible for a conflict to occur when provisioning users if the unique parts of the username provided by your IdP are removed when it is normalized. If you are unable to provision a user due to a username conflict, you should modify the username provided by your IdP.

The username of the new account provisioned on {% data variables.product.prodname_dotcom %}, including underscore and short code, must not exceed 39 characters.

The profile name and email address of a {% data variables.product.prodname_managed_user %} is also provided by the IdP. {% data variables.product.prodname_managed_users_caps %} cannot change their profile name or email address on {% data variables.product.prodname_dotcom %}.
