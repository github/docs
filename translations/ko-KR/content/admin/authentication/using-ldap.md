---
title: Using LDAP
redirect_from:
  - /enterprise/admin/articles/configuring-ldap-authentication/
  - /enterprise/admin/articles/about-ldap-authentication/
  - /enterprise/admin/articles/viewing-ldap-users/
  - /enterprise/admin/hidden/enabling-ldap-sync/
  - /enterprise/admin/hidden/ldap-sync/
  - /enterprise/admin/user-management/using-ldap
  - /enterprise/admin/authentication/using-ldap
intro: 'LDAP lets you authenticate {% data variables.product.prodname_ghe_server %} against your existing accounts and centrally manage repository access. LDAP is a popular application protocol for accessing and maintaining directory information services, and is one of the most common protocols used to integrate third-party software with large company user directories.'
versions:
  enterprise-server: '*'
---

{% data reusables.enterprise_user_management.built-in-authentication %}

### Supported LDAP services

{% data variables.product.prodname_ghe_server %} integrates with these LDAP services:

* Active Directory
* FreeIPA
* Oracle Directory Server Enterprise Edition
* OpenLDAP
* Open Directory
* 389-ds

### Username considerations with LDAP

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.2fa_is_available %}

### Configuring LDAP with {% data variables.product.product_location_enterprise %}

After you configure LDAP, users will be able to sign into your instance with their LDAP credentials. When users sign in for the first time, their profile names, email addresses, and SSH keys will be set with the LDAP attributes from your directory.

When you configure LDAP access for users via the {% data variables.enterprise.management_console %}, your user licenses aren't used until the first time a user signs in to your instance. However, if you create an account manually using site admin settings, the user license is immediately accounted for.

{% warning %}

**Warning:** Before configuring LDAP on {% data variables.product.product_location_enterprise %}, make sure that your LDAP service supports paged results.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. Under "Authentication", select **LDAP**. ![LDAP select](/assets/images/enterprise/management-console/ldap-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Select LDAP built-in authentication checkbox](/assets/images/enterprise/management-console/ldap-built-in-authentication.png)
5. Add your configuration settings.

### LDAP attributes
Use these attributes to finish configuring LDAP for {% data variables.product.product_location_enterprise %}.

| Attribute name                                   | 유형    | 설명                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------ | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Host`                                           | 필수 사항 | The LDAP host, e.g. `ldap.example.com` or `10.0.0.30`. If the hostname is only available from your internal network, you may need to configure {% data variables.product.product_location_enterprise %}'s DNS first so it can resolve the hostname using your internal nameservers.                                                                                                                                                                                                |
| `Port`                                           | 필수 사항 | The port the host's LDAP services are listening on. Examples include: 389 and 636 (for LDAPS).                                                                                                                                                                                                                                                                                                                                                                                       |
| `Encryption`                                     | 필수 사항 | The encryption method used to secure communications to the LDAP server. Examples include plain (no encryption), SSL/LDAPS (encrypted from the start), and StartTLS (upgrade to encrypted communication once connected).                                                                                                                                                                                                                                                              |
| `Domain search user`                             | 선택 사항 | The LDAP user that performs user lookups to authenticate other users when they sign in. This is typically a service account created specifically for third-party integrations. Use a fully qualified name, such as `cn=Administrator,cn=Users,dc=Example,dc=com`. With Active Directory, you can also use the `[DOMAIN]\[USERNAME]` syntax (e.g. `WINDOWS\Administrator`) for the domain search user with Active Directory.                                                        |
| `Domain search password`                         | 선택 사항 | The password for the domain search user.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `Administrators group`                           | 선택 사항 | Users in this group are promoted to site administrators when signing into your appliance. If you don't configure an LDAP Administrators group, the first LDAP user account that signs into your appliance will be automatically promoted to a site administrator.                                                                                                                                                                                                                    |
| `Domain base`                                    | 필수 사항 | The fully qualified `Distinguished Name` (DN) of an LDAP subtree you want to search for users and groups. You can add as many as you like; however, each group must be defined in the same domain base as the users that belong to it. If you specify restricted user groups, only users that belong to those groups will be in scope. We recommend that you specify the top level of your LDAP directory tree as your domain base and use restricted user groups to control access. |
| `Restricted user groups`                         | 선택 사항 | If specified, only users in these groups will be allowed to log in. You only need to specify the common names (CNs) of the groups, and you can add as many groups as you like. If no groups are specified, *all* users within the scope of the specified domain base will be able to sign in to your {% data variables.product.prodname_ghe_server %} instance.                                                                                                                    |
| `User ID`                                        | 필수 사항 | The LDAP attribute that identifies the LDAP user who attempts authentication. Once a mapping is established, users may change their {% data variables.product.prodname_ghe_server %} usernames. This field should be `sAMAccountName` for most Active Directory installations, but it may be `uid` for other LDAP solutions, such as OpenLDAP. The default value is `uid`.                                                                                                         |
| `Profile name`                                   | 선택 사항 | The name that will appear on the user's {% data variables.product.prodname_ghe_server %} profile page. Unless LDAP Sync is enabled, users may change their profile names.                                                                                                                                                                                                                                                                                                          |
| `Emails`                                         | 선택 사항 | The email addresses for a user's {% data variables.product.prodname_ghe_server %} account.                                                                                                                                                                                                                                                                                                                                                                                         |
| `SSH keys`                                       | 선택 사항 | The public SSH keys attached to a user's {% data variables.product.prodname_ghe_server %} account. The keys must be in OpenSSH format.                                                                                                                                                                                                                                                                                                                                             |
| `GPG keys`                                       | 선택 사항 | The GPG keys attached to a user's {% data variables.product.prodname_ghe_server %} account.                                                                                                                                                                                                                                                                                                                                                                                        |
| `Disable LDAP authentication for Git operations` | 선택 사항 | If selected, [turns off](#disabling-password-authentication-for-git-operations) users' ability to use LDAP passwords to authenticate Git operations.                                                                                                                                                                                                                                                                                                                                 |
| `Enable LDAP certificate verification`           | 선택 사항 | If selected, [turns on](#enabling-ldap-certificate-verification) LDAP certificate verification.                                                                                                                                                                                                                                                                                                                                                                                      |
| `Synchronization`                                | 선택 사항 | If selected, [turns on](#enabling-ldap-sync) LDAP Sync.                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### Disabling password authentication for Git operations

Select **Disable username and password authentication for Git operations** in your LDAP settings to enforce use of personal access tokens or SSH keys for Git access, which can help prevent your server from being overloaded by LDAP authentication requests. We recommend this setting because a slow-responding LDAP server, especially combined with a large number of requests due to polling, is a frequent source of performance issues and outages.

![Disable LDAP password auth for Git check box](/assets/images/enterprise/management-console/ldap-disable-password-auth-for-git.png)

When this option is selected, if a user tries to use a password for Git operations via the command line, they will receive an error message that says, `Password authentication is not allowed for Git operations. You must use a personal access token.`

#### Enabling LDAP certificate verification

Select **Enable LDAP certificate verification** in your LDAP settings to validate the LDAP server certificate you use with TLS.

![LDAP certificate verification box](/assets/images/enterprise/management-console/ldap-enable-certificate-verification.png)

When this option is selected, the certificate is validated to make sure:
- If the certificate contains at least one Subject Alternative Name (SAN), one of the SANs matches the LDAP hostname. Otherwise, the Common Name (CN) matches the LDAP hostname.
- The certificate is not expired.
- The certificate is signed by a trusted certificate authority (CA).

#### Enabling LDAP Sync

{% note %}

**Note:** Teams using LDAP Sync are limited to a maximum 1499 members.

{% endnote %}

LDAP Sync lets you synchronize {% data variables.product.prodname_ghe_server %} users and team membership against your established LDAP groups. This lets you establish role-based access control for users from your LDAP server instead of manually within {% data variables.product.prodname_ghe_server %}. For more information, see "[Creating teams](/enterprise/{{ currentVersion }}/admin/guides/user-management/creating-teams#creating-teams-with-ldap-sync-enabled)."

To enable LDAP Sync, in your LDAP settings, select **Synchronize Emails**, **Synchronize SSH Keys**, or **Synchronize GPG Keys** .

![Synchronization check box](/assets/images/enterprise/management-console/ldap-synchronize.png)

After you enable LDAP sync, a synchronization job will run at the specified time interval to perform the following operations on each user account:

- If you've allowed built-in authentication for users outside your identity provider, and the user is using built-in authentication, move on to the next user.
- If no LDAP mapping exists for the user, try to map the user to an LDAP entry in the directory. If the user cannot be mapped to an LDAP entry, suspend the user and move on to the next user.
- If there is an LDAP mapping and the corresponding LDAP entry in the directory is missing, suspend the user and move on to the next user.
- If the corresponding LDAP entry has been marked as disabled and the user is not already suspended, suspend the user and move on to the next user.
- If the corresponding LDAP entry is not marked as disabled, and the user is suspended, and _Reactivate suspended users_ is enabled in the Admin Center, unsuspend the user.
- If the corresponding LDAP entry includes a `name` attribute, update the user's profile name.
- If the corresponding LDAP entry is in the Administrators group, promote the user to site administrator.
- If the corresponding LDAP entry is not in the Administrators group, demote the user to a normal account.
- If an LDAP User field is defined for emails, synchronize the user's email settings with the LDAP entry. Set the first LDAP `mail` entry as the primary email.
- If an LDAP User field is defined for SSH public keys, synchronize the user's public SSH keys with the LDAP entry.
- If an LDAP User field is defined for GPG keys, synchronize the user's GPG keys with the LDAP entry.

{% note %}

**Note**: LDAP entries can only be marked as disabled if you use Active Directory and the `userAccountControl` attribute is present and flagged with `ACCOUNTDISABLE`.

{% endnote %}

A synchronization job will also run at the specified time interval to perform the following operations on each team that has been mapped to an LDAP group:

- If a team's corresponding LDAP group has been removed, remove all members from the team.
- If LDAP member entries have been removed from the LDAP group, remove the corresponding users from the team. If the user loses access to any repositories as a result, delete any private forks the user has of those repositories.
- If LDAP member entries have been added to the LDAP group, add the corresponding users to the team. If the user regains access to any repositories as a result, restore any private forks of the repositories that were deleted because the user lost access in the past 90 days.

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Security Warning:**

When LDAP Sync is enabled, site admins and organization owners can search the LDAP directory for groups to map the team to.

This has the potential to disclose sensitive organizational information to contractors or other unprivileged users, including:

- The existence of specific LDAP Groups visible to the *Domain search user*.
- Members of the LDAP group who have {% data variables.product.prodname_ghe_server %} user accounts, which is disclosed when creating a team synced with that LDAP group.

If disclosing such information is not desired, your company or organization should restrict the permissions of the configured *Domain search user* in the admin console. If such restriction isn't possible, contact {% data variables.contact.contact_ent_support %}.

{% endwarning %}

#### Supported LDAP group object classes

{% data variables.product.prodname_ghe_server %} supports these LDAP group object classes. Groups can be nested.

- `그룹`
- `groupOfNames`
- `groupOfUniqueNames`
- `posixGroup`

### Viewing and creating LDAP users

You can view the full list of LDAP users who have access to your instance and provision new users.

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
3. In the left sidebar, click **LDAP users**. ![LDAP users tab](/assets/images/enterprise/site-admin-settings/ldap-users-tab.png)
4. To search for a user, type a full or partial username and click **Search**. Existing users will be displayed in search results. If a user doesn’t exist, click **Create** to provision the new user account. ![LDAP search](/assets/images/enterprise/site-admin-settings/ldap-users-search.png)

### Updating LDAP accounts

Unless [LDAP Sync is enabled](#enabling-ldap-sync), changes to LDAP accounts are not automatically synchronized with {% data variables.product.prodname_ghe_server %}.

* To use a new LDAP admin group, users must be manually promoted and demoted on {% data variables.product.prodname_ghe_server %} to reflect changes in LDAP.
* To add or remove LDAP accounts in LDAP admin groups, [promote or demote the accounts on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/user-management/promoting-or-demoting-a-site-administrator).
* To remove LDAP accounts, [suspend the {% data variables.product.prodname_ghe_server %} accounts](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users).

#### Manually syncing LDAP accounts

{% data reusables.enterprise_site_admin_settings.sign-in %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.search-user %}
{% data reusables.enterprise_site_admin_settings.click-user %}
{% data reusables.enterprise_site_admin_settings.admin-top-tab %}
{% data reusables.enterprise_site_admin_settings.admin-tab %}
5. Under "LDAP," click **Sync now** to manually update the account with data from your LDAP server. ![LDAP sync now button](/assets/images/enterprise/site-admin-settings/ldap-sync-now-button.png)

You can also [use the API to trigger a manual sync](/enterprise/{{ currentVersion }}/user/rest/reference/enterprise-admin#ldap).

### Revoking access to {% data variables.product.product_location_enterprise %}

If [LDAP Sync is enabled](#enabling-ldap-sync), removing a user's LDAP credentials will suspend their account after the next synchronization run.

If LDAP Sync is **not** enabled, you must manually suspend the {% data variables.product.prodname_ghe_server %} account after you remove the LDAP credentials. For more information, see "[Suspending and unsuspending users](/enterprise/{{ currentVersion }}/admin/guides/user-management/suspending-and-unsuspending-users)".
