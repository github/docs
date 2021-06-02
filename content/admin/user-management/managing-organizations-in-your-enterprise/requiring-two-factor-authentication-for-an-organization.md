---
title: Requiring two-factor authentication for an organization
intro: 'You can require organization members and outside collaborators to enable two-factor authentication for their personal accounts in an organization, making it harder for malicious actors to access an organization''s repositories and settings.'
redirect_from:
  - /enterprise/admin/user-management/requiring-two-factor-authentication-for-an-organization
  - /admin/user-management/requiring-two-factor-authentication-for-an-organization
versions:
  enterprise-server: '*'
type: how_to
topics:
  - 2FA
  - Enterprise
  - Organizations
  - Policies
  - Security
---
When using LDAP or built-in authentication, two-factor authentication is supported on {% data variables.product.product_location %}. Organization administrators can require members to have two-factor authentication enabled.

{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

For more information, see "[About two-factor authentication](/github/authenticating-to-github/about-two-factor-authentication)."

### Requirements for enforcing two-factor authentication

Before you can require organization members and outside collaborators to use 2FA, you must [enable two-factor authentication](/enterprise/{{ currentVersion }}/user/articles/securing-your-account-with-two-factor-authentication-2fa/) for your own personal account.

{% warning %}

**Warnings:**

- When your require two-factor authentication, members and outside collaborators (including bot accounts) who do not use 2FA will be removed from the organization and lose access to its repositories, including their forks of private repositories. If they enable 2FA for their personal account within three months of being removed from the organization, you can [reinstate their access privileges and settings](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-member-of-your-organization).
- When 2FA is required, organization members or outside collaborators who disable 2FA will automatically be removed from the organization.
- If you're the sole owner of an organization that requires two-factor authentication, you won't be able to disable 2FA for your personal account without disabling required two-factor authentication for the organization.

{% endwarning %}

Before you require use of two-factor authentication, we recommend notifying organization members and outside collaborators and asking them to set up 2FA for their accounts. You can [see if members and outside collaborators already use 2FA](/enterprise/{{ currentVersion }}/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled) on an organization's People tab.

{% data reusables.profile.access_org %}
{% data reusables.profile.org_settings %}
{% data reusables.organizations.security %}
{% data reusables.organizations.require_two_factor_authentication %}
{% data reusables.organizations.removed_outside_collaborators %}

### Viewing people who were removed from your organization

To view people who were automatically removed from your organization for non-compliance when you required two-factor authentication, you can [search the audit log](/enterprise/{{ currentVersion }}/admin/guides/installation/searching-the-audit-log/) using `reason:two_factor_requirement_non_compliance` in the search field.

{% data reusables.audit_log.octicon_icon %}
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.audit_log.audit_log_sidebar_for_site_admins %}
4. Enter your search query using `reason:two_factor_requirement_non_compliance`.
 ![Staff tools audit log event showing a user removed for 2FA non-compliance](/assets/images/help/2fa/2fa_noncompliance_stafftools_audit_log_search.png)
 To narrow your search for:
    - Organizations members removed, enter `action:org.remove_member AND reason:two_factor_requirement_non_compliance`
    - Outside collaborators removed, enter `action:org.remove_outside_collaborator AND reason:two_factor_requirement_non_compliance`

  You can also view people removed from a particular organization by using the organization name in your search:
    - `org:octo-org AND reason:two_factor_requirement_non_compliance`
5. Click **Search**.  

### Helping removed members and outside collaborators rejoin your organization

If any members or outside collaborators are removed from the organization when you enable required use of two-factor authentication, they'll receive an email notifying them that they've been removed. They should then enable 2FA for their personal account, and contact an organization owner to request access to your organization.

### Further reading

- "[Viewing whether users in your organization have 2FA enabled](/enterprise/{{ currentVersion }}/user/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)"
- "[Securing your account with two-factor authentication (2FA)](/enterprise/{{ currentVersion }}/user/articles/securing-your-account-with-two-factor-authentication-2fa)"
- "[Reinstating a former member of your organization](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-member-of-your-organization)"
- "[Reinstating a former outside collaborator's access to your organization](/enterprise/{{ currentVersion }}/user/articles/reinstating-a-former-outside-collaborator-s-access-to-your-organization)"
