---
title: Changing authentication methods
intro: 'You can change the way {% data variables.product.prodname_ghe_server %} authenticates with your existing accounts at any time.'
redirect_from:
  - /enterprise/admin/user-management/changing-authentication-methods
  - /enterprise/admin/authentication/changing-authentication-methods
versions:
  enterprise-server: '*'
type: overview
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
---

User accounts on {% data variables.product.product_location %} are preserved when you change the authentication method and users will continue to log into the same account as long as their username doesn't change.

If the new method of authentication changes usernames, new accounts will be created. As an administrator, you can rename users through the site admin settings or by using [the User Administration API](/rest/reference/enterprise-admin#update-the-username-for-a-user).

Other issues you should take into consideration include:

* **Passwords:** If you switch to using built-in authentication for your instance, users must [set a password](/enterprise/user/articles/how-can-i-reset-my-password/) after the change is completed.

* **Site administrators:** Administrative privileges are [controlled by your identity provider when you use SAML](/enterprise/admin/guides/user-management/using-saml/#saml-attributes) and can be [controlled by group membership when you use LDAP](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance).

* **Team membership:** Only LDAP lets you [control team membership](/enterprise/admin/authentication/using-ldap#configuring-ldap-with-your-github-enterprise-server-instance) from your directory server.

* **User suspension:** When you use LDAP to authenticate, access to {% data variables.product.prodname_ghe_server %} can be controlled via _restricted groups_. After switching to LDAP, if restricted groups are configured, existing users who are not in one of those groups will be suspended. Suspension will occur either when they log in or during the next LDAP Sync.

* **Group membership:** When you use LDAP to authenticate, users are automatically [suspended and unsuspended](/enterprise/admin/guides/user-management/suspending-and-unsuspending-users) based on restricted group membership and account status with Active Directory.

* **Git authentication:** SAML and CAS only supports Git authentication over HTTP or HTTPS using a [personal access token](/articles/creating-an-access-token-for-command-line-use). Password authentication over HTTP or HTTPS is not supported. LDAP supports password-based Git authentication by default, but we recommend that you [disable that method](/enterprise/admin/authentication/using-ldap#disabling-password-authentication-for-git-operations) and force authentication via a personal access token or SSH key.

* **API authentication:** SAML and CAS only supports API authentication using a [personal access token](/articles/creating-an-access-token-for-command-line-use). Basic authentication is not supported.

* **Two-factor authentication:** {% data reusables.enterprise_user_management.external_auth_disables_2fa %}

* **Built-in authentication for users outside your identity provider:** You can invite users to authenticate to {% data variables.product.product_location %} without adding them to your identity provider. For more information, see "[Allowing built-in authentication for users outside your identity provider](/enterprise/{{ currentVersion }}/admin/guides/user-management/allowing-built-in-authentication-for-users-outside-your-identity-provider)."
