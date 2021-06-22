---
title: Enforcing security settings in your enterprise account
intro: Enterprise owners can enforce certain security policies for all organizations owned by an enterprise account.
product: '{% data reusables.gated-features.enterprise-accounts %}'
miniTocMaxHeadingLevel: 4
redirect_from:
  - /articles/enforcing-security-settings-for-organizations-in-your-business-account/
  - /articles/enforcing-security-settings-for-organizations-in-your-enterprise-account/
  - /articles/enforcing-security-settings-in-your-enterprise-account
  - /github/articles/managing-allowed-ip-addresses-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/enforcing-security-settings-in-your-enterprise-account
versions:
  free-pro-team: '*'
topics:
  - Enterprise
---

### Requiring two-factor authentication for organizations in your enterprise account

Enterprise owners can require that organization members, billing managers, and outside collaborators in all organizations owned by an enterprise account use two-factor authentication to secure their personal accounts.

Before you can require 2FA for all organizations owned by your enterprise account, you must enable two-factor authentication for your own account. For more information, see "[Securing your account with two-factor authentication (2FA)](/articles/securing-your-account-with-two-factor-authentication-2fa/)."

{% warning %}

**Warnings:**

- When you require two-factor authentication for your enterprise account, members, outside collaborators, and billing managers (including bot accounts) in all organizations owned by your enterprise account who do not use 2FA will be removed from the organization and lose access to its repositories. They will also lose access to their forks of the organization's private repositories. You can reinstate their access privileges and settings if they enable two-factor authentication for their personal account within three months of their removal from your organization. For more information, see "[Reinstating a former member of your organization](/articles/reinstating-a-former-member-of-your-organization)."
- Any organization owner, member, billing manager, or outside collaborator in any of the organizations owned by your enterprise account who disables 2FA for their personal account after you've enabled required two-factor authentication will automatically be removed from the organization.
- If you're the sole owner of a enterprise account that requires two-factor authentication, you won't be able to disable 2FA for your personal account without disabling required two-factor authentication for the enterprise account.

{% endwarning %}

Before you require use of two-factor authentication, we recommend notifying organization members, outside collaborators, and billing managers and asking them to set up 2FA for their accounts. Organization owners can see if members and outside collaborators already use 2FA on each organization's People page. For more information, see "[Viewing whether users in your organization have 2FA enabled](/articles/viewing-whether-users-in-your-organization-have-2fa-enabled)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
4. Under "Two-factor authentication", review the information about changing the setting. {% data reusables.enterprise-accounts.view-current-policy-config-orgs %}
5. Under "Two-factor authentication", select **Require two-factor authentication for all organizations in your business**, then click **Save**. ![Checkbox to require two-factor authentication](/assets/images/help/business-accounts/require-2fa-checkbox.png)
6. If prompted, read the information about members and outside collaborators who will be removed from the organizations owned by your enterprise account. To confirm the change, type your enterprise account's name, then click **Remove members & require two-factor authentication**. ![Confirm two-factor enforcement box](/assets/images/help/business-accounts/confirm-require-2fa.png)
7. Optionally, if any members or outside collaborators are removed from the organizations owned by your enterprise account, we recommend sending them an invitation to reinstate their former privileges and access to your organization. Each person must enable two-factor authentication before they can accept your invitation.

### Managing allowed IP addresses for organizations in your enterprise account

Enterprise owners can restrict access to assets owned by organizations in an enterprise account by configuring an allow list for specific IP addresses. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

You can also configure allowed IP addresses for an individual organization. For more information, see "[Managing allowed IP addresses for your organization](/organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization)."

#### Adding an allowed IP address

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-description %}
{% data reusables.identity-and-permissions.ip-allow-lists-add-entry %}

#### Enabling allowed IP addresses

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
3. Under "IP allow list", select **Enable IP allow list**. ![Checkbox to allow IP addresses](/assets/images/help/security/enable-ip-allowlist-enterprise-checkbox.png)
4. Click **Save**.

#### Editing an allowed IP address

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %}
{% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
8. Click **Update**.

#### Deleting an allowed IP address

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %}
{% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

#### Using {% data variables.product.prodname_actions %} with an IP allow list

{% data reusables.github-actions.ip-allow-list-self-hosted-runners %}

### Managing your enterprise account's SSH certificate authorities

Enterprise owners can add and delete an enterprise account's SSH certificate authorities (CA).

By adding an SSH CA to your enterprise account, you can allow members of any organization owned by your enterprise account to access that organization's repositories using SSH certificates you provide. {% data reusables.organizations.can-require-ssh-cert %} For more information, see "[About SSH certificate authorities](/articles/about-ssh-certificate-authorities)."

#### Adding an SSH certificate authority

{% data reusables.organizations.add-extension-to-cert %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.new-ssh-ca %}
{% data reusables.organizations.require-ssh-cert %}

#### Deleting an SSH certificate authority

Deleting a CA cannot be undone. If you want to use the same CA in the future, you'll need to upload the CA again.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.security-tab %}
{% data reusables.organizations.delete-ssh-ca %}

### 더 읽을거리

- "[Configuring identity and access management for your enterprise account](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account)"
