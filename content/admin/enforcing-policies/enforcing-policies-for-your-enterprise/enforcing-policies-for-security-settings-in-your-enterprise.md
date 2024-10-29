---
title: Enforcing policies for security settings in your enterprise
intro: 'You can enforce policies to manage security settings in your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: Enterprise owners can enforce policies for security settings in an enterprise.
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise
versions:
  ghec: '*'
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Policies
  - Security
shortTitle: Policies for security settings
---

## About policies for security settings in your enterprise

You can enforce policies to control the security settings for organizations owned by your enterprise on {% data variables.product.product_name %}. By default, organization owners can manage security settings.

{% ifversion ghec or ghes %}

## Requiring two-factor authentication for organizations in your enterprise

{% ifversion mandatory-2fa-dotcom-contributors %}
{% data reusables.two_fa.mandatory-2fa-contributors-2023 %}
{% endif %}

{% ifversion ghes%}If {% data variables.location.product_location %} uses LDAP or built-in authentication, enterprise{% else %}Enterprise{% endif %} owners can require that organization members, billing managers, and outside collaborators in all organizations owned by an enterprise use two-factor authentication to secure their user accounts.{% ifversion ghec %} This policy is not available for enterprises with managed users.{% endif %}

Before you can require 2FA for all organizations owned by your enterprise, you must enable two-factor authentication for your own account. For more information, see "[AUTOTITLE](/authentication/securing-your-account-with-two-factor-authentication-2fa)."

Before you require use of two-factor authentication, we recommend notifying organization members, outside collaborators, and billing managers and asking them to set up 2FA for their accounts. Organization owners can see if members and outside collaborators already use 2FA on each organization's People page. For more information, see "[AUTOTITLE](/organizations/keeping-your-organization-secure/managing-two-factor-authentication-for-your-organization/viewing-whether-users-in-your-organization-have-2fa-enabled)."

{% data reusables.two_fa.ghes_ntp %}

{% warning %}

**Warnings:**

* When you require two-factor authentication for your enterprise, members, outside collaborators, and billing managers (including bot accounts) in all organizations owned by your enterprise who do not use 2FA will be removed from the organization and lose access to its repositories. They will also lose access to their forks of the organization's private repositories. You can reinstate their access privileges and settings if they enable two-factor authentication for their account within three months of their removal from your organization. For more information, see "[AUTOTITLE](/organizations/managing-membership-in-your-organization/reinstating-a-former-member-of-your-organization)."
* Any organization owner, member, billing manager, or outside collaborator in any of the organizations owned by your enterprise who disables 2FA for their account after you've enabled required two-factor authentication will automatically be removed from the organization.
* If you're the sole owner of an enterprise that requires two-factor authentication, you won't be able to disable 2FA for your user account without disabling required two-factor authentication for the enterprise.

{% endwarning %}

{% ifversion mandatory-2fa-dotcom-contributors %}

{% note %}

**Note**: Some of the users in your organizations may have been selected for mandatory two-factor authentication enrollment by  {% data variables.product.prodname_dotcom_the_website %}, but it has no impact on how you enable the 2FA requirement for the organizations in your enterprise. If you enable the 2FA requirement for organizations in your enterprise, all users without 2FA currently enabled will be removed from the organizations, including those that are required to enable it by {% data variables.product.prodname_dotcom_the_website %}.

{% endnote %}

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "Two-factor authentication", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
1. Under "Two-factor authentication", select **Require two-factor authentication for all organizations in your business**, then click **Save**.
1. If prompted, read the information about members and outside collaborators who will be removed from the organizations owned by your enterprise. To confirm the change, type your enterprise's name, then click **Remove members & require two-factor authentication**.
1. Optionally, if any members or outside collaborators are removed from the organizations owned by your enterprise, we recommend sending them an invitation to reinstate their former privileges and access to your organization. Each person must enable two-factor authentication before they can accept your invitation.

{% endif %}

## Managing SSH certificate authorities for your enterprise

You can use a SSH certificate authority (CA) to allow members of any organization owned by your enterprise to access that organization's repositories using SSH certificates you provide. {% ifversion ssh-user-ca %}{% ifversion ghec %}If your enterprise uses {% data variables.product.prodname_emus %}, enterprise{% elsif ghes %}Enterprise{% endif %} members can also be allowed to use the certificate to access personally-owned repositories.{% endif %} {% data reusables.organizations.can-require-ssh-cert %} For more information, see "[AUTOTITLE](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)."

{% data reusables.organizations.add-extension-to-cert %}

### Adding an SSH certificate authority

If you require SSH certificates for your enterprise, enterprise members should use a special URL for Git operations over SSH. For more information, see "[AUTOTITLE](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)."

 {% data reusables.enterprise.certificate-authority-usage %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

{% ifversion ssh-user-ca %}

### Managing access to user-owned repositories

You can enable or disable access to user-owned repositories with an SSH certificate{% ifversion ghec %} if your enterprise uses {% data variables.enterprise.prodname_managed_users %}. However, if your enterprise uses personal accounts on {% data variables.product.prodname_dotcom_the_website %} members cannot use the certificate to access personally-owned repositories{% endif %}.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "SSH Certificate Authorities", select the **Access User Owned Repository** checkbox.
{% endif %}

### Deleting an SSH certificate authority

Deleting a CA cannot be undone. If you want to use the same CA in the future, you'll need to upload the CA again.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.delete-ssh-ca %}

{% ifversion ssh-ca-expires %}

## Upgrading an SSH certificate authority

CAs uploaded to your enterprise {% ifversion ghec %}prior to March 27th, 2024,{% elsif ghes %}before {% data variables.product.prodname_ghe_server %} version 3.13{% endif %} allow the use of non-expiring certificates. To learn more about why expirations are now required for new CAs, see "[AUTOTITLE](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#issuing-certificates)." You can upgrade an existing CA to prevent it from issuing non-expiring certificates. For best security, we strongly recommend upgrading all your CAs once you validate you're not reliant on non-expiring certificates.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "SSH Certificate Authorities", to the right of the CA you want to upgrade, click **Upgrade**.
1. Read the warning, then click **Upgrade**.

After upgrading the CA, non-expiring certificates signed by that CA will be rejected.
{% endif %}

{% ifversion sso-redirect %}

## Managing SSO for unauthenticated users

{% data reusables.enterprise-managed.sso-redirect-release-phase %}

If your enterprise uses {% data variables.product.prodname_emus %}, you can choose what unauthenticated users see when they attempt to access your enterprise's resources. For more information about {% data variables.product.prodname_emus %}, see "[AUTOTITLE](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)."

By default, to hide the existence of private resources, when an unauthenticated user attempts to access your enterprise, {% data variables.product.company_short %} displays a 404 error.

To prevent confusion from your developers, you can change this behavior so that users are automatically redirected to single sign-on (SSO) through your identity provider (IdP). When you enable automatic redirects, anyone who visits the URL for any of your enterprise's resources will be able to see that the resource exists. However, they'll only be able to see the resource if they have appropriate access after authenticating with your IdP.

{% note %}

**Note:** If a user is signed in to their personal account when they attempt to access any of your enterprise's resources, they'll be automatically signed out and redirected to SSO to sign in to their {% data variables.enterprise.prodname_managed_user %}. For more information, see "[AUTOTITLE](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts)."

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "Single sign-on settings", select or deselect **Automatically redirect users to sign in**.
{% endif %}

## Further reading

* "[AUTOTITLE](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam)"
{%- ifversion ghec %}
* "[AUTOTITLE](/admin/overview/accessing-compliance-reports-for-your-enterprise)"
{%- endif %}
{%- ifversion ghec %}
* "[AUTOTITLE](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)"
{%- endif %}
