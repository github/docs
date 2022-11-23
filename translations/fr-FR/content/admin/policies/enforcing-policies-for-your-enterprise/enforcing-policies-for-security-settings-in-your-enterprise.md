---
title: Enforcing policies for security settings in your enterprise
intro: 'You can enforce policies to manage security settings in your enterprise''s organizations, or allow policies to be set in each organization.'
permissions: Enterprise owners can enforce policies for security settings in an enterprise.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/setting-policies-for-organizations-in-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
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

Enterprise owners can require that organization members, billing managers, and outside collaborators in all organizations owned by an enterprise use two-factor authentication to secure their user accounts.

Before you can require 2FA for all organizations owned by your enterprise, you must enable two-factor authentication for your own account. For more information, see "[Securing your account with two-factor authentication (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa/)."

{% warning %}

**Warnings:**

- When you require two-factor authentication for your enterprise, members, outside collaborators, and billing managers (including bot accounts) in all organizations owned by your enterprise who do not use 2FA will be removed from the organization and lose access to its repositories. They will also lose access to their forks of the organization's private repositories. You can reinstate their access privileges and settings if they enable two-factor authentication for their account within three months of their removal from your organization. For more information, see "[Reinstating a former member of your organization](/articles/reinstating-a-former-member-of-your-organization)."
- Any organization owner, member, billing manager, or outside collaborator in any of the organizations owned by your enterprise who disables 2FA for their account after you've enabled required two-factor authentication will automatically be removed from the organization.
- If you're the sole owner of an enterprise that requires two-factor authentication, you won't be able to disable 2FA for your user account without disabling required two-factor authentication for the enterprise.

{% endwarning %}

Before you require use of two-factor authentication, we recommend notifying organization members, outside collaborators, and billing managers and asking them to set up 2FA for their accounts. Organization owners can see if members and outside collaborators already use 2FA on each organization's People page. For more information, see "[Viewing whether users in your organization have 2FA enabled](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. Under "Two-factor authentication", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Under "Two-factor authentication", select **Require two-factor authentication for all organizations in your business**, then click **Save**.
  ![Checkbox to require two-factor authentication](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. If prompted, read the information about members and outside collaborators who will be removed from the organizations owned by your enterprise. To confirm the change, type your enterprise's name, then click **Remove members & require two-factor authentication**.
  ![Confirm two-factor enforcement box](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Optionally, if any members or outside collaborators are removed from the organizations owned by your enterprise, we recommend sending them an invitation to reinstate their former privileges and access to your organization. Each person must enable two-factor authentication before they can accept your invitation.

{% endif %}

## Managing SSH certificate authorities for your enterprise

You can use a SSH certificate authorities (CA) to allow members of any organization owned by your enterprise to access that organization's repositories using SSH certificates you provide. {% data reusables.organizations.can-require-ssh-cert %} For more information, see "[About SSH certificate authorities](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities)."

{% data reusables.organizations.add-extension-to-cert %}

### Adding an SSH certificate authority

If you require SSH certificates for your enterprise, enterprise members should use a special URL for Git operations over SSH. For more information, see "[About SSH certificate authorities](/organizations/managing-git-access-to-your-organizations-repositories/about-ssh-certificate-authorities#about-ssh-urls-with-ssh-certificates)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

### Deleting an SSH certificate authority

Deleting a CA cannot be undone. If you want to use the same CA in the future, you'll need to upload the CA again.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.delete-ssh-ca %}

{% ifversion ghec %}

## Managing SSO for unauthenticated users

If your enterprise uses {% data variables.product.prodname_emus %}, you can choose what unauthenticated users see when they attempt to access your enterprise's resources. For more information about {% data variables.product.prodname_emus %}, see "[About {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users)."

By default, to hide the existence of private resources, when an unauthenticated user attempts to access your enterprise, {% data variables.product.company_short %} displays a 404 error.

To prevent confusion from your developers, you can change this behavior so that users are automatically redirected to single sign-on (SSO) through your identity provider (IdP). When you enable automatic redirects, anyone who visits the URL for any of your enterprise's resources will be able to see that the resource exists. However, they'll only be able to see the resource if they have appropriate access after authenticating with your IdP.

{% note %}

**Note:** If a user is signed in to their personal account when they attempt to access any of your enterprise's resources, they'll be automatically signed out and redirected to SSO to sign in to their {% data variables.enterprise.prodname_managed_user %}. For more information, see "[Managing multiple accounts](/enterprise-cloud@latest/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/managing-multiple-accounts)."

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
1. Under "Single sign-on settings", select or deselect **Automatically redirect users to sign in**.

   ![Checkbox to automatically redirect users to sign in](/assets/images/enterprise/security/Enterprise-Redirect-Users-To-Sign-In-Checkbox.png)

## Further reading

- "[About identity and access management for your enterprise](/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)"{% ifversion ghec %}
- "[Accessing compliance reports for your enterprise](/admin/overview/accessing-compliance-reports-for-your-enterprise)"{%- endif %}
- "[Keeping your organization secure](/organizations/keeping-your-organization-secure)"
- "[Restricting network traffic with an IP allow list with an IP allow list](/admin/configuration/configuring-your-enterprise/restricting-network-traffic-to-your-enterprise-with-an-ip-allow-list)"
{%- endif %}
