---
title: Changing authentication methods
intro: 'You can change the way {% data variables.product.prodname_ghe_server %} authenticates with your existing accounts at any time.'
redirect_from:
  - /enterprise/admin/user-management/changing-authentication-methods
  - /enterprise/admin/authentication/changing-authentication-methods
  - /admin/authentication/changing-authentication-methods
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/changing-authentication-methods
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/changing-authentication-methods
  - /admin/identity-and-access-management/understanding-iam-for-enterprises/changing-authentication-methods
versions:
  ghes: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Change authentication methods
---
User accounts on {% data variables.location.product_location %} are preserved when you change the authentication method and users will continue to log into the same account as long as their username doesn't change.

If the new method of authentication changes usernames, new accounts will be created. As an administrator, you can rename users through the site admin settings or by using [the User Administration API](/rest/enterprise-admin/users#update-the-username-for-a-user).

Other issues you should take into consideration include:

* **Passwords:** If you switch to using built-in authentication for your instance, users must [set a password](/authentication/keeping-your-account-and-data-secure/updating-your-github-access-credentials) after the change is completed.

* **Site administrators:** Administrative privileges are [controlled by your identity provider when you use SAML](/admin/identity-and-access-management/using-saml-for-enterprise-iam#saml-attributes) and can be [controlled by group membership when you use LDAP](/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance).

* **Team membership:** Only LDAP lets you [control team membership](/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance) from your directory server.

* **User suspension:** When you use LDAP to authenticate, access to {% data variables.product.prodname_ghe_server %} can be controlled via _restricted groups_. After switching to LDAP, if restricted groups are configured, existing users who are not in one of those groups will be suspended. Suspension will occur either when they log in or during the next LDAP Sync.

* **Group membership:** When you use LDAP to authenticate, users are automatically [suspended and unsuspended](/admin/user-management/managing-users-in-your-enterprise/suspending-and-unsuspending-users) based on restricted group membership and account status with Active Directory.

* **Git authentication:** SAML and CAS only supports Git authentication over HTTP or HTTPS using a [{% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). Password authentication over HTTP or HTTPS is not supported. LDAP supports password-based Git authentication by default, but we recommend that you [disable that method](/admin/identity-and-access-management/using-ldap-for-enterprise-iam/using-ldap#disabling-password-authentication-for-git-operations) and force authentication via a {% data variables.product.pat_generic %} or SSH key.

* **API authentication:** SAML and CAS only supports API authentication using a [{% data variables.product.pat_generic %}](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token). Basic authentication is not supported.

* **Two-factor authentication:** {% data reusables.enterprise_user_management.external_auth_disables_2fa %}

* **Fallback authentication for users with no account on your external authentication provider:** You can invite users to authenticate to {% data variables.location.product_location %} without adding them to your identity provider. For more information, see "[AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/allowing-built-in-authentication-for-users-outside-your-provider)."
